<template>
    <div class="main-card p-4" :style="{ backgroundColor: '#ffffff', opacity: opacityLevel }">
        <ColumnComponent :bgColor="'#f5f1ff'" :style="{ borderColor: strongColor }" />
        <ColumnComponent :bgColor="'#fbf6f0'" :style="{ borderColor: strongColor }" />
        <ColumnComponent :bgColor="'#eaf4fe'" :style="{ borderColor: strongColor }" />
        <ColumnComponent :bgColor="'#e5f4f7'" :style="{ borderColor: strongColor }" />
        <ColumnComponent :bgColor="'#fcf1f5'" :style="{ borderColor: strongColor }" />
        <ColumnComponent :bgColor="'#f3f7fa'" :style="{ borderColor: strongColor }" />
    </div>
</template>
  
<script>
import ColumnComponent from './ColumnComponent.vue';

export default {
    props: ['bgColor', 'strongColor'],
    components: {
        ColumnComponent
    },
    data() {
        return {
            opacityLevel: 1  // Wrapped inside a return statement
        };
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            const scrolled = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
            if (scrolled > 0.6) {
                this.opacityLevel = 0.8 + 0.2 * (scrolled - 0.6) / 0.4;
            } else {
                this.opacityLevel = 1;
            }
        }
    }

};
</script>
  
<style>
.main-card {
    display: flex;
}

.main-card::after {
  content: "";
  position: absolute;
  top: 60%;  /* Starts at 60% from the top */
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1));
  pointer-events: none;  /* So it doesn't interfere with clicks */
}

.strongColor {
    border: 1px solid;
}
</style>
  