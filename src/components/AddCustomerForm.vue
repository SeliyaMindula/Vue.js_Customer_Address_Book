<template>
    <transition name="fade">
        <div class="modal-overlay" v-if="isFormVisible" @click="closeForm"></div>
    </transition>

    <transition name="slide-up">
        <div class="add-customer-form" v-if="isFormVisible">
            <button class="close-btn" @click="closeForm">X</button>
            <form @submit.prevent="submitForm">
                <div class="fs-2 fw-bold text-center">Add New Customer</div>
                <div class="form-field">
                    <input type="text" id="customerName" v-model="customer.name" placeholder="Customer name" />
                </div>
                <div class="form-field">
                    <input type="text" id="company" v-model="customer.company" placeholder="Company name" />
                </div>
                <div class="form-field">
                    <input type="tel" id="phone" v-model="customer.phone" placeholder="contact phone">
                    <span v-if="!isPhoneValid" class="validation-error">Phone number must be 10 digits.</span> 
                </div>
                <div class="form-field">
                    <input type="email" id="email" v-model="customer.email" placeholder="Email address" />
                </div>
                <div class="form-field">
                    <input type="text" id="country" v-model="customer.country" placeholder="Country" />
                </div>
                <div class="fs-4 fw-normal text-start">Address Details</div>
                <!-- Dynamic address input fields -->
                <div class="form-section" v-for="(address, index) in customer.addresses" :key="index">
                    <div class="fs-6 fw-light text-start">Address {{ index + 1 }} :</div>
                    <div class="address-fields">
                        <input type="text" placeholder="Number" v-model="address.number" />
                        <input type="text" placeholder="Street" v-model="address.street" />
                        <input type="text" placeholder="City, State" v-model="address.cityState" />
                    </div>
                    <div class="float-end">
                        <button class="btn btn-outline-success" @click.prevent="deleteAddress(index)">Delete</button>
                    </div>
                </div>
                <div class="pt-3">
                    <button class=" btn btn-outline-success" @click.prevent="addAddress">Add Address</button>
                </div>
                <!-- Submit button -->
                <button type="submit" class="submit-btn btn btn-success">Submit</button>
            </form>
        </div>
    </transition>
</template>

<script>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import axios from 'axios';


export default {
    setup() {
        const router = useRouter();
        const isFormVisible = ref(true);

        const customer = ref({
            name: "",
            company: "",
            phone: "",
            email: "",
            country: "",
            addresses: [{ number: "", street: "", cityState: "" }],
        });

        const isNameValid = computed(() => customer.value.name.trim().length > 0);
        const isCompanyValid = computed(() => customer.value.company.trim().length > 0);
        const isPhoneValid = computed(() => customer.value.phone.length === 10 && /^\d+$/.test(customer.value.phone));
        const isEmailValid = computed(() => /\S+@\S+\.\S+/.test(customer.value.email));
        const isCountryValid = computed(() => customer.value.country.trim().length > 0);
        const areAddressesValid = computed(() => customer.value.addresses.every(address => 
            address.number.trim().length > 0 &&
            address.street.trim().length > 0 &&
            address.cityState.trim().length > 0
        ));

        const isFormValid = computed(() => 
            isNameValid.value && 
            isCompanyValid.value && 
            isPhoneValid.value && 
            isEmailValid.value && 
            isCountryValid.value && 
            areAddressesValid.value
        );

        function addAddress() {
            customer.value.addresses.push({ number: "", street: "", cityState: "" });
        }

        function deleteAddress(index) {
            if (customer.value.addresses.length > 1) {
                customer.value.addresses.splice(index, 1);
            } else {
                alert("At least one address is required.");
            }
        }

        const submitForm = async () => {
            if (isFormValid.value) {
                try {
                    const response = await axios.post('http://localhost:3000/customers', customer.value);
                    console.log("Form submitted: ", response.data);
                    closeForm();
                } catch (error) {
                    console.error("Error submitting form: ", error);
                }
            } else {
                alert("Please make sure all fields are filled out correctly.");
            }
        };

        // Add PUT functionality
        // const updateCustomer = async () => {
        //     if (customer.value.phone && customer.value.phone.length === 10) {
        //         try {
        //             const response = await axios.put('http://localhost:3000/customers/' + customer.value.id, customer.value);
        //             console.log("Customer updated: ", response.data);
        //             closeForm();
        //         } catch (error) {
        //             console.error("Error updating customer: ", error);
        //         }
        //     } else {
        //         alert("Phone number must be 10 digits.");
        //     }
        // };

        // Add DELETE functionality
        // const deleteCustomer = async () => {
        //     try {
        //         const response = await axios.delete('http://localhost:3000/customers/' + customer.value.id);
        //         console.log("Customer deleted: ", response.data);
        //         closeForm();
        //     } catch (error) {
        //         console.error("Error deleting customer: ", error);
        //     }
        // };

        function closeForm() {
            isFormVisible.value = false;
            router.go(-1);
        }

        return {
            isFormVisible,
            customer,
            isNameValid,
            isCompanyValid,
            isPhoneValid,
            isEmailValid,
            isCountryValid,
            areAddressesValid,
            isFormValid,
            addAddress,
            deleteAddress,
            submitForm,
            closeForm,
            // updateCustomer,
            // deleteCustomer

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
    width: 80%;
    max-width: 500px;
    padding: 20px;
}

.close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    color: #000000;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
}

.form-field {
    margin-bottom: 20px;
}

.form-field label {
    display: block;
    margin-bottom: 5px;
}

.form-field input[type="text"],
.form-field input[type="tel"],
.form-field input[type="email"] {
    width: 100%;
    padding: 8px;
    border: none;
    border-bottom: 1px solid #ccc;
    outline: none;
}

.form-field input::placeholder {
    color: #aaa;
}

.address-details {
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
}

.address-fields {
    display: flex;
    gap: 10px;
    margin-bottom: 10px;
}

.address-fields input {
    border: none;
    border-bottom: 1px solid #ccc;
    padding: 8px;
    outline: none;
    width: 100%;
}

.address-fields input[type="text"]:first-child {
    flex-grow: 1;
}


button.delete-address {
    background-color: #f44336;
}

.submit-btn {
    width: 100%;
    padding: 15px;
    margin-top: 20px;
}

.validation-error {
    color: green;
    font-size: 0.8rem;
}
</style>
