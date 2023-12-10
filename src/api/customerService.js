import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3000', 
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json',
  }
});

export default {
  addCustomer(customerData) {
    return apiClient.post('/customers', customerData);
  },
};
