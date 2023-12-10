import { createRouter, createWebHistory } from 'vue-router';
import ListView from '@/components/ListView.vue'; 
import AddCustomerForm from '@/components/AddCustomerForm.vue';


const routes = [
  {
    path: '/customers',
    name: 'Customers',
    component: ListView 
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
