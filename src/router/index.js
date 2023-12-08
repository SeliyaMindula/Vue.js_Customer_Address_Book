import { createRouter, createWebHistory } from 'vue-router';
import ListView from '@/components/ListView.vue'; // Import ListView as the customer page
import AddCustomerForm from '@/components/AddCustomerForm.vue';


const routes = [
  {
    path: '/customers',
    name: 'Customers',
    component: ListView // Set ListView as the component for this route
  },
  {
    path: '/add-customer',
    name: 'AddCustomerForm',
    component: AddCustomerForm
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
