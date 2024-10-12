<template>
    <div>
      <h1>User Details</h1>
      <div v-if="user">
        <p><strong>Name:</strong> <input v-model="user.name" /></p>
        <p><strong>Email:</strong> {{ user.email }}</p>
      </div>
      <button @click="$router.push('/')">Back to Home</button>
    </div>
  </template>
  
  <script>
  export default {
    props: ['id'],
    data() {
      return {
        user: null,
      };
    },
    async created() {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${this.id}`);
      this.user = await response.json();
    },
    unmounted() {
      console.log('UserDetails component is being destroyed.');
    },
  };
  </script>
  