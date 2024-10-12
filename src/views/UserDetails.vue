<template>
    <div v-if="user">
      <h1>User Details</h1>
      <p>
        <strong>Name:</strong>
        <input v-model="user.name" />
      </p>
      <p><strong>Email:</strong> {{ user.email }}</p>
      <button @click="goBack">Back to Home</button>
    </div>
  </template>
  
  <script>
  import { onBeforeUnmount, computed } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import userStore from '../store/userStore.js';
  
  export default {
    setup() {
      const route = useRoute();
      const router = useRouter();
      const userId = route.params.id;
  
      // Retrieve the user reference directly from the store for reactivity
      const user = computed(() => userStore.getUserById(userId));
  
      const goBack = () => {
        router.push('/');
      };
  
      onBeforeUnmount(() => {
        console.log('UserDetails component is being destroyed.');
      });
  
      return { user, goBack };
    },
  };
  </script>
  