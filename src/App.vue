<template>
  <div id="app">
    <AppSidebar />
    <div class="content">
      <ListView/>
    </div>
  </div>
</template>

<script>
import ListView from './components/ListView.vue';
import AppSidebar from './components/AppSidebar.vue'; 

export default {
  name: 'App',
  components: {
    ListView,
    AppSidebar 
  }
}
</script>

<style>
#app {
  display: flex;
  background-color: #f1f1f1; 
  min-height: 100vh;
  margin: 0;


}
.content {
  flex-grow: 1;
  padding: 20px; /* Adjust as necessary */
}

</style>
