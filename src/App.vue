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

<style lang="scss" scoped>
@import './styles/app.scss';
</style>