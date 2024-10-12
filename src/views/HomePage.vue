<template>
    <div>
      <h1>Home Page</h1>
      <div v-for="user in users" :key="user.id">
        <UserCard :user="user" @user-click="handleUserClick">
          <button>Edit</button> 
        </UserCard>
      </div>
    </div>
  </template>
  
  <script>
  import UserCard from '../components/UserCard.vue';
  
  export default {
    components: { UserCard },
    data() {
      return {
        users: [],
      };
    },
    async created() {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      this.users = await response.json();
    },
    methods: {
      handleUserClick(id) {
        this.$router.push(`/user/${id}`);
      },
    },
  };
  </script>
  