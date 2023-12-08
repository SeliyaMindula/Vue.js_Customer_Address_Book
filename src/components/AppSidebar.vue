<template>
  <nav class="appsidebar">
    <!-- Sidebar Header -->
    <div class="sidebar-header" style="padding-left: 10px;">
      <i class="fas fa-tachometer-alt"></i> 
      <b><span style="font-size: larger;">Dashboard</span></b> <span style="font-size: small;">v0.1</span>
    </div>
    <!-- Navigation List -->
    <ul>
      <li>
        <i class="fas fa-home"></i>
        <span>Dashboard</span>
        <i class="fas fa-chevron-right"></i>
      </li>
      <li>
        <i class="fas fa-project-diagram"></i>
        <span>Project</span>
        <i class="fas fa-chevron-right"></i>
      </li>
      <router-link to="/customers" class="sidebar-item">
        <i class="fas fa-users"></i>
        <span>Customers</span>
        <i class="fas fa-chevron-right"></i>
      </router-link>
      <li>
        <i class="fas fa-wallet"></i>
        <span>Income</span>
        <i class="fas fa-chevron-right"></i>
      </li>
      <li>
        <i class="fas fa-bullhorn"></i>
        <span>Promote</span>
        <i class="fas fa-chevron-right"></i>
      </li>
      <li>
        <i class="fas fa-question-circle"></i>
        <span>Help</span>
        <i class="fas fa-chevron-right"></i>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "AppSidebar",
};
</script>

<style scoped>
.appsidebar {
  width: 250px;
  background-color: #ffffff;
  color: rgb(56, 56, 56);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: left;
  padding: 10px;
}

.appsidebar ul {
  padding: 0;
  margin: 0;
  list-style-type: none; 
}

.appsidebar li, .appsidebar .sidebar-item {
  display: flex;
  align-items: center;
  justify-content: space-between; 
  margin: 10px 0;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
}

.appsidebar li:hover,
.appsidebar li.active,
.appsidebar .sidebar-item:hover,
.appsidebar .sidebar-item.active {
  background-color: rgb(75, 52, 94);
  color: white;
}

.appsidebar a {
  color: inherit; /* Ensure links are the same color as li elements */
  text-decoration: none; /* Remove underline from links */
  display: contents; /* Allow router-link to behave like its children */
}

.appsidebar i {
  margin-right: 10px; /* Space between icon and text */
}

/* Ensure all icons are aligned and have space between them and the text */
.appsidebar .fas {
  width: 20px; /* Give icons a fixed width */
  text-align: center; /* Center icons in their allocated space */
}

/* Adjust the space for the chevron icon */
.appsidebar .fa-chevron-right {
  margin-left: auto; /* Push the icon to the far right */
}
</style>
