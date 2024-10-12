import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import UserDetails from '../views/UserDetails.vue';

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/user/:id', name: 'UserDetails', component: UserDetails, props: true }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
