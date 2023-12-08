<template>
    <div class="dashboard">
      <header class="dashboard-header">
        <h1>Hello Evano 👋</h1>
        <button class="add-customer">+</button>
      </header>
      <div class="stats-cards">
        <div class="stats-card">
          <!-- Icon for total customers -->
          <span class="stats-title">Total Customers</span>
          <span class="stats-value">5,423</span>
          <!-- Include trend icon -->
          <span class="stats-change">16% this month</span>
        </div>
        <div class="stats-card">
          <!-- Icon for members -->
          <span class="stats-title">Members</span>
          <span class="stats-value">1,893</span>
          <!-- Include trend icon -->
          <span class="stats-change">1% this month</span>
        </div>
        <div class="stats-card">
          <!-- Icon for active now -->
          <span class="stats-title">Active Now</span>
          <span class="stats-value">189</span>
          <!-- Include user avatars if needed -->
        </div>
      </div>
      <!-- Customer list section -->
        <div class="stats-card">
            <span style="text-align: left;"><h2>All Customers</h2></span>

            <table>
                <th>
                    
                </th>
            </table>
         
        </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ListView',
    data() {
    return {
      stats: [
        { title: 'Total Customers', value: 5423, change: '16%', icon: 'fa-users' },
        { title: 'Members', value: 1893, change: '1%', icon: 'fa-user-friends' },
        { title: 'Active Now', value: 189, icon: 'fa-user-check' }
      ],
      customers: [
        { name: 'Jane Cooper', company: 'Microsoft', phone: '(255) 555-0118', email: 'jane@microsoft.com', country: 'United States', status: 'Active' },
        // More customers...
      ]
    };
  }
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
}

.stats-cards {
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
}

.stats-card {
  flex-basis: 30%;
  text-align: center;
  padding: 20px;
  border-radius: 10px;
  background-color: #f5f5f5;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.stats-title {
  font-size: 1rem;
  color: #888;
}

.stats-value {
  display: block;
  font-size: 2rem;
  font-weight: bold;
  color: #333;
}

.stats-change {
  font-size: 0.8rem;
  color: #4caf50;
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
  