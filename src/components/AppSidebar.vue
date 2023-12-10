<template>
  <nav class="appsidebar">
    <!-- Sidebar Header -->
    <div class="sidebar-header pb-4 pt-2" style="padding-left: 10px;">
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
      <li :class="{ active: activeItem === 'customers' }" @click="setActiveItem('customers')">
        <i class="fas fa-users"></i>
        <span>Customers</span>
        <i class="fas fa-chevron-right"></i>
      </li>
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
  data() {
    return {
      activeItem: null,
    };
  },
  methods: {
    setActiveItem(item) {
      this.activeItem = item;
      if (item === 'customers') {
        this.$router.push('/customers');
      }
    }
  }
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

.appsidebar li,
.appsidebar .sidebar-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  color: rgb(82, 82, 82);
}

.appsidebar li:hover,
.appsidebar li.active,
.appsidebar .sidebar-item:hover,
.appsidebar .sidebar-item.active {
  background-color: #5C34EC;
  color: white;
}

.active {
  background-color: #5C34EC;
  color: white;
}

.appsidebar a {
  color: inherit;
  text-decoration: none;
  display: contents;
}

.appsidebar i {
  margin-right: 10px;
}


.appsidebar .fas {
  width: 20px;
  text-align: center;
}


.appsidebar .fa-chevron-right {
  margin-left: auto;
}
</style>
