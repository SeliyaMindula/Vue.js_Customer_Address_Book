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
html, body, #app {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background-color: #e9e9e9; 
}

#app {
  display: flex;
}

.content {
  flex-grow: 1;
  padding: 20px;
  overflow: auto; /* Allows content to scroll if it overflows */
}
</style>
