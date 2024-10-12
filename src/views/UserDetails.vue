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

<style scoped>
div {
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h1 {
  color: #333;
  font-size: 24px;
  margin-bottom: 20px;
}

p {
  margin: 10px 0;
}

input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
}

button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 20px;
}

button:hover {
  background-color: #0056b3;
}
</style>