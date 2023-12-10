<template>
  <div id="app">
    <AppSidebar />
    <div class="content">
      <RouterView/>
    </div>
  </div>
</template>

<script>
import AppSidebar from './components/AppSidebar.vue'; 

export default {
  name: 'App',
  components: {
    AppSidebar, 
  }
}
</script>

<style>
html, body, #app {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background-color: #FAFBFF; 
}

#app {
  display: flex;
}

.content {
  flex-grow: 1;
  padding: 20px;
  overflow: auto; 
}
</style>
