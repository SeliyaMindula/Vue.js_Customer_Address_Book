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
html, body {
  margin: 0;
  height: 100%;
  width: 100%;
}

#app {
  display: flex;
  background-color: #e9e9e9; 
  min-height: 100vh;
  width: 100vw; 
  margin: 0;
}

.content {
  flex-grow: 1;
  padding: 40px; 
  overflow: auto; 
}
</style>
