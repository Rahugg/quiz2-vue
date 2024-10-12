import { reactive } from 'vue';

const userStore = reactive({
  users: [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 3, name: 'Mike Johnson', email: 'mike@example.com' },
  ],
  getUserById(id) {
    return this.users.find((user) => user.id === parseInt(id));
  },
});

export default userStore;
