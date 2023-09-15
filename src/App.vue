<template>
  <div id="app" :style="{ backgroundColor: '#f0f3f6' }">
    <HeaderComponent />
    <MainCardComponent />
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import MainCardComponent from './components/MainCardComponent.vue';


export default {
  components: {
    HeaderComponent,
    MainCardComponent
  }
}
</script>

<style>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}


.d-flex {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  /* Center the main card vertically */
}
</style>
