<template>
    <div class="dashboard">
        <header class="dashboard-header">
            <h1>Hello Evano 👋🏻,</h1>
            <button class="add-customer" @click="goToAddCustomerForm">+</button>
        </header>
        <div class="stats-card">
            <div class="stat-item d-flex justify-content-center">
                <div class="stat-icon bg-customers">
                    <i class="fas fa-users"></i>
                </div>
                <div class="stat-content">
                    <p class="stat-title">Total Customers</p>
                    <p class="stat-value">5,423</p>
                    <p class="stat-change">
                        <i class="fas fa-arrow-up"></i> 16% this month
                    </p>
                </div>
            </div>
            <div class="stat-item d-flex justify-content-center">
                <div class="stat-icon bg-members">
                    <i class="fas fa-user-friends"></i>
                </div>
                <div class="stat-content">
                    <p class="stat-title">Members</p>
                    <p class="stat-value">1,893</p>
                    <p class="stat-change">
                        <i class="fas fa-arrow-down"></i> 1% this month
                    </p>
                </div>
            </div>
            <div class="stat-item d-flex justify-content-center">
                <div class="stat-icon bg-active">
                    <i class="fas fa-broadcast-tower"></i>
                </div>
                <div class="stat-content">
                    <p class="stat-title">Active Now</p>
                    <p class="stat-value">189</p>
                    <!-- Place user avatars here -->
                </div>
            </div>
        </div>
        <!-- Customer list section -->
        <div class="stats-card2">
            <div class="pb-2">
                <span class="fs-3 fw-bold">All Customers</span>
            </div>
            <div class="container pb-3">
                <div class="row">
                    <div class="col-sm">
                        <span class="fs-5 fw-normal text-success">Active members</span>
                    </div>
                    <div class="input-group rounded col-sm">
                        <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search"
                            aria-describedby="search-addon" />
                        <span class="input-group-text border-0" id="search-addon">
                            <i class="fas fa-search"></i>
                        </span>
                    </div>
                </div>
            </div>

            <div style="overflow-x: auto">
                <table class="table table-responsive">
                    <thead>
                        <tr>
                            <th scope="col">Customer Name</th>
                            <th scope="col">Company</th>
                            <th scope="col">Phone Number</th>
                            <th scope="col">Email</th>
                            <th scope="col">Country</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="customer in customers" :key="customer.id">
                            <td>{{ customer.name }}</td>
                            <td>{{ customer.company }}</td>
                            <td>{{ customer.phone }}</td>
                            <td>{{ customer.email }}</td>
                            <td>{{ customer.country }}</td>
                            <td>{{ customer.status }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import { useRouter } from 'vue-router';
import { ref, onMounted } from 'vue';
import axios from 'axios';

export default {
    name: "ListView",
    setup() {
        const router = useRouter();
        const customers = ref([]);

        const fetchCustomers = async () => {
            try {
                const response = await axios.get('http://localhost:3000/customers');
                customers.value = response.data;
            } catch (error) {
                console.error("Error fetching customers:", error);
            }
        };

        onMounted(fetchCustomers);
        const goToAddCustomerForm = () => {
            router.push({ name: 'AddCustomerForm' });
        };

        return {
            goToAddCustomerForm,
            customers
        };
    },
};
</script>

<style scoped>
.dashboard {
    max-width: 1200px;
    margin: auto;
}

.dashboard-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px;
}

.stats-card2 {
    justify-content: space-around;
    background: white;
    border-radius: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;
    margin: 20px;
}

.stats-card {
    display: flex;
    justify-content: space-around;
    background: white;
    border-radius: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;
    margin: 20px;
}

.stat-item {
    display: flex;
    /* flex-direction: column; */
    align-items: center;
    flex: 1;
}

.stat-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
}

.bg-customers {
    background-color: #dff9fb;
}

.bg-members {
    background-color: #c7ecee;
}

.bg-active {
    background-color: #7ed6df;
}

.stat-content {
    text-align: center;
}

.stat-title {
    font-size: 16px;
    color: #333;
}

.stat-value {
    font-size: 28px;
    font-weight: bold;
}

.stat-change {
    font-size: 14px;
    color: #333;
    display: flex;
    align-items: center;
}

.fa-arrow-up {
    color: green;
}

.fa-arrow-down {
    color: red;
}

.add-customer {
    background-color: #4caf50;
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    color: white;
    font-size: 2rem;
    cursor: pointer;
}
</style>
