<template>
  <div>
    <h1>Home Page</h1>
    <div v-for="user in userStore.users" :key="user.id">
      <UserCard :user="user" @user-click="handleUserClick">
        <button>Edit</button>
      </UserCard>
    </div>
  </div>
</template>

<script>
import UserCard from '../components/UserCard.vue';
import { useRouter } from 'vue-router';
import userStore from '../store/userStore.js';

export default {
  components: { UserCard },
  setup() {
    const router = useRouter();

    const handleUserClick = (id) => {
      router.push({ name: 'UserDetails', params: { id } });
    };

    return { userStore, handleUserClick };
  },
};
</script>

<style scoped>
div {
  padding: 20px;
}

h1 {
  color: #333;
  font-size: 24px;
  margin-bottom: 20px;
}

button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
}

button:hover {
  background-color: #0056b3;
}
</style>