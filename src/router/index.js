import { createRouter, createWebHistory } from 'vue-router';
import ListView from '@/components/ListView.vue'; // Import ListView as the customer page

const routes = [
  {
    path: '/customers',
    name: 'Customers',
    component: ListView // Set ListView as the component for this route
  },
  // ... other routes
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
