<template>
    <transition name="fade">
      <div class="modal-overlay" v-if="isFormVisible" @click="closeForm"></div>
    </transition>
  
    <transition name="slide-up">
      <div class="add-customer-form" v-if="isFormVisible">
        <button class="close-btn" @click="closeForm">X</button>
        <!-- Form content goes here -->
        <form @submit.prevent="submitForm">
          <!-- Input fields for customer information -->
          <div class="form-section">
            <label>Customer name</label>
            <input type="text" placeholder="Customer name" v-model="customer.name">
            <!-- Repeat for other fields -->
          </div>
  
          <!-- Dynamic address input fields -->
          <div class="form-section" v-for="(address, index) in customer.addresses" :key="index">
            <div class="address-fields">
              <input type="text" placeholder="Number" v-model="address.number">
              <input type="text" placeholder="Street" v-model="address.street">
              <input type="text" placeholder="City, State" v-model="address.cityState">
            </div>
            <button @click.prevent="deleteAddress(index)">Delete</button>
          </div>
          <button @click.prevent="addAddress">Add Address</button>
          
          <!-- Submit button -->
          <button type="submit" class="submit-btn">Submit</button>
        </form>
      </div>
    </transition>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';

  export default {
    setup() {
      const router = useRouter();
      const isFormVisible = ref(true);
      const customer = ref({
        name: '',
        addresses: [{ number: '', street: '', cityState: '' }],
      });
  
      function addAddress() {
        customer.value.addresses.push({ number: '', street: '', cityState: '' });
      }
  
      function deleteAddress(index) {
        customer.value.addresses.splice(index, 1);
      }
  
      function submitForm() {
        // Handle form submission
        console.log(customer.value);
        closeForm();
      }
  
      function closeForm() {
        isFormVisible.value = false;
        router.go(-1);
      }
  
      return {
        isFormVisible,
        customer,
        addAddress,
        deleteAddress,
        submitForm,
        closeForm,
      };
    },
  };
  </script>
  
  <style scoped>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(5px);
  }
  
  .add-customer-form {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    padding: 20px;
    border-radius: 10px;
    z-index: 100;
    /* Other styling as needed */
  }

  .close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}
  
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0;
  }
  
  .slide-up-enter-active, .slide-up-leave-active {
    transition: transform 0.5s;
  }
  .slide-up-enter, .slide-up-leave-to {
    transform: translateY(30px);
  }
  </style>
  