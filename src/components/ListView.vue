<template>
    <div class="dashboard">
        <header class="dashboard-header">
            <h1>Hello Evano 👋🏻,</h1>
            <button class="add-customer" @click="goToAddCustomerForm">&plus;</button>
        </header>
        <div class="stats-card">
            <!-- <div class="stat-item d-flex justify-content-center"> -->
            <div class="stat-item d-flex flex-column flex-md-row justify-content-center">
                <div class="stat-icon bg-customers">
                    <i class="fas fa-users iconbackground"></i>
                </div>
                <div class="stat-content p-3">
                    <p class="stat-title text-secondary">Total Customers</p>
                    <p class="stat-value">5,423</p>
                    <p class="stat-change">
                        <i class="fas fa-arrow-up up"></i>&nbsp;<span class="up"> 16% </span>&nbsp; this month
                    </p>
                </div>
            </div>
            <div class="divider"></div>
            <!-- <div class="stat-item d-flex justify-content-center"> -->
            <div class="stat-item d-flex flex-column flex-md-row justify-content-center">
                <div class="stat-icon bg-members">
                    <i class="fas fa-user-friends iconbackground"></i>
                </div>
                <div class="stat-content p-3">
                    <p class="stat-title text-secondary">Members</p>
                    <p class="stat-value">1,893</p>
                    <p class="stat-change">
                        <i class="fas fa-arrow-down down"></i>&nbsp;<span class="down"> 1% </span>&nbsp; this month
                    </p>
                </div>
            </div>
            <div class="divider"></div>
            <!-- <div class="stat-item d-flex justify-content-center"> -->
            <div class="stat-item d-flex flex-column flex-md-row justify-content-center">
                <div class="stat-icon bg-active">
                    <i class="fas fa-broadcast-tower iconbackground"></i>
                </div>
                <div class="stat-content p-3">
                    <p class="stat-title text-secondary">Active Now</p>
                    <p class="stat-value">189</p>
                    <div class="user-avatars">
                        <img src="https://www.theventuretours.com/wp-content/uploads/2020/03/avatar-icon-png-1-300x300.png"
                            alt="User 1" class="user-avatar" />
                        <img src="https://cdn2.iconfinder.com/data/icons/office-and-business-special-set-1/260/27-512.png"
                            alt="User 2" class="user-avatar" />
                        <img src=" https://cdn1.iconfinder.com/data/icons/avatar-97/32/avatar-04-512.png" alt="User 3"
                            class="user-avatar" />
                        <img src="https://cdn2.iconfinder.com/data/icons/office-and-business-special-set-1/260/27-512.png"
                            alt="User 4" class="user-avatar" />
                    </div>
                </div>
            </div>
        </div>
        <!-- Customer list section -->
        <div class="stats-card2">
            <div class="p-2 ">
                <span class="fs-3 fw-bold">All Customers</span>
            </div>

            <div class="container pb-3">
                <div class="row">
                    <!-- <div class="col-sm-6 d-flex align-items-center"> -->
                    <div class="col-12 col-md-6 d-flex align-items-center">
                        <span class="activemember">Active members</span>
                    </div>
                    <!-- <div class="col-sm-3"> -->
                    <div class="col-12 col-md-3 mt-2 mt-md-0">
                        <div class="input-group">
                            <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search"
                                aria-describedby="search-addon" />
                            <span class="input-group-text border-0" id="search-addon">
                                <i class="fas fa-search"></i>
                            </span>
                        </div>
                    </div>
                    <!-- <div class="col-sm-3 d-flex justify-content-end"> -->
                    <div class="col-12 col-md-3 mt-2 mt-md-0 d-flex justify-content-end">
                        <button class="btn dropbtn">Sort by: Newest <i class="arrow ddown"></i></button>
                    </div>
                </div>
            </div>


            <div class="table-responsive">
                <table class="table">
                    <thead>
                        <tr>
                            <th class="text-secondary user-select-none" scope="col">Customer Name</th>
                            <th class="text-secondary user-select-none" scope="col">Company</th>
                            <th class="text-secondary user-select-none" scope="col">Phone Number</th>
                            <th class="text-secondary user-select-none" scope="col">Email</th>
                            <th class="text-secondary user-select-none" scope="col">Country</th>
                            <th class="text-secondary user-select-none" scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <template v-for="customer in customers" :key="customer.id">
                            <tr @click="toggleDetails(customer)">
                                <td class="tablecontent user-select-none justify-content-center">{{ customer.name }}</td>
                                <td class="tablecontent user-select-none">{{ customer.company }}</td>
                                <td class="tablecontent user-select-none">{{ customer.phone }}</td>
                                <td class="tablecontent user-select-none">{{ customer.email }}</td>
                                <td class="tablecontent user-select-none">{{ customer.country }}</td>
                                <td class="text-center align-middle">
                                    <span class="tablecontent user-select-none active-button">Active</span>
                                </td>


                            </tr>
                            <template v-if="customer.detailsVisible">
                                <tr v-for="(address, index) in customer.addresses" :key="`address-${customer.id}-${index}`">
                                    <td></td>
                                    <td class="fw-light">
                                        Address {{ index + 1 }}:
                                    </td>
                                    <td class="fw-light">{{ address.street }}</td>
                                    <td class="fw-light">{{ address.number }}</td>
                                    <td class="fw-light">{{ address.cityState }}</td>
                                </tr>
                            </template>
                        </template>
                    </tbody>
                </table>
                <div class="data-pagination-wrapper">
                    <div class="text-muted">Showing data 1 to 8 of 256K entiers</div>
                    <div class="pagination">
                        <a href="#">&lt;</a>
                        <a href="#">1</a>
                        <a href="#" class="active">2</a>
                        <a href="#">3</a>
                        <a href="#">4</a>
                        <a href="#">...</a>
                        <a href="#">40</a>
                        <a href="#">&gt;</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useRouter } from "vue-router";
import { ref, onMounted } from "vue";
import axios from "axios";

export default {
    name: "ListView",
    setup() {
        const router = useRouter();
        const customers = ref([]);

        const fetchCustomers = async () => {
            try {
                const response = await axios.get("http://localhost:3000/customers");
                customers.value = response.data.map((customer) => ({
                    ...customer,
                    detailsVisible: false,
                }));
            } catch (error) {
                console.error("Error fetching customers:", error);
            }
        };

        const toggleDetails = (customer) => {
            customer.detailsVisible = !customer.detailsVisible;

            customers.value.forEach((cust) => {
                if (cust.id !== customer.id) {
                    cust.detailsVisible = false;
                }
            });
        };

        onMounted(fetchCustomers);
        const goToAddCustomerForm = () => {
            router.push({ name: "AddCustomerForm" });
        };

        return {
            goToAddCustomerForm,
            customers,
            toggleDetails,
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
    background-color: #a8f3aa;
}

.bg-members {
    background-color: #a8f3aa;
}

.bg-active {
    background-color: #a8f3aa;
}

.stat-content {
    /* text-align: center; */
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

.up {
    color: #51ec56;
}

.down {
    color: rgb(241, 59, 59);
}

.add-customer {
    background-color: #a8f3aa;
    border: 1px solid rgb(0, 182, 0);
    border-radius: 50%;
    width: 50px;
    height: 50px;
    color: rgb(0, 165, 0);
    font-size: 2rem;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
}

.iconbackground {
    color: rgb(255, 255, 255);
    padding: .5em;
    border-radius: .25em;
}

.activemember {
    color: #44b848;
    font-size: medium;
}

.tablecontent {
    color: #4d4d4d;
    font-weight: bold;
}

.user-avatars {
    display: flex;
    align-items: center;
}

.user-avatar {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: -10px;
    border: 2px solid white;
}

.user-avatar:nth-child(1) {
    z-index: 5;
}

.user-avatar:nth-child(2) {
    z-index: 4;
}

.user-avatar:nth-child(3) {
    z-index: 3;
}

.active-button {
  background-color: #a8f3aa;
  border: 1px solid rgb(0, 182, 0);
  padding: 5px 10px; 
  color: #44b848;
  display: inline-block; 
  text-align: center;
  border-radius: 0.25rem;
  font-weight: bold; 
}


.inactive-button {
    background-color: #FFCDD2;
    border: none;
    border-radius: 12px;
    padding: 5px 10px;
    color: red;
}

.pagination {
    padding-top: 10px;
    display: inline-block;
    float: right;
}

.pagination a {
    color: black;
    float: left;
    padding: 4px 8px;
    text-decoration: none;
    transition: background-color .3s;
    border: 1px solid #ddd;
    margin: 0 2px;
    font-size: 0.8rem;
}

.pagination a.active {
    background-color: #5C34EC;
    color: white;

}

.pagination a:hover:not(.active) {
    background-color: #ddd;
}

.data-pagination-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
}


.dropbtn {
    background-color: #f5f5f5;
    color: black;
    padding: 6px 10px;
    font-size: 14px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-weight: bold;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.arrow {
    border: solid black;
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 3px;
    margin-left: 5px;
}

.ddown {
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
}

.dropbtn:hover,
.dropbtn:focus {
    background-color: #e6e6e6;
}

.divider {
  background-color: #e7e7e7; 
  width: 1px; 
  height: auto; 
  margin: 1px 15px; 
}

 /* @media (max-width: 576px) {
  .dashboard-header h1 {
    font-size: 1.5rem; 
  }
  
  .add-customer {
    font-size: 1.5rem; 
    padding: 0.5rem; 
  }

  .stat-item {
    flex-direction: column;
    text-align: center;
  }
  
  .stat-icon, .stat-content {
    width: 100%; 
    margin-bottom: 0.5rem;
  }

  .user-avatars img {
    width: 20px; 
    height: 20px;
  }

  .pagination {
    font-size: 0.7rem; 
  }
}  */
</style>

