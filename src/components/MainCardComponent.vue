<template>
    <div class="main-card p-4" :style="{ backgroundColor: '#ffffff', opacity: opacityLevel }">
        <ColumnComponent :title="'LEAD'" :bgColor="'#f5f1ff'" :style="{ borderColor: strongColor }"  :toggleStyle="'flat-style'" :toggleColors="{ toggleBg: '#e5dafc', circleColor: '#d4c1f9' }"/>
        <ColumnComponent :title="'RFP IN PROGRESS'" :bgColor="'#fbf6f0'" :style="{ borderColor: strongColor }"  :toggleStyle="'flat-style'" :toggleColors="{ toggleBg: '#f4d7b9', circleColor: '#f7e5cf' }"/>
        <ColumnComponent :title="'SUBMITTED'" :bgColor="'#eaf4fe'" :style="{ borderColor: strongColor }"  :toggleStyle="'flat-style'" :toggleColors="{ toggleBg: '#add0fa', circleColor: '#cae2fc' }"/>
        <ColumnComponent :title="'WON'" :bgColor="'#e5f4f7'" :style="{ borderColor: strongColor }"  :toggleStyle="'flat-style'" :toggleColors="{ toggleBg: '#a1dce4', circleColor: '#bfeaf1' }"/>
        <ColumnComponent :title="'LOST'" :bgColor="'#fcf1f5'" :style="{ borderColor: strongColor }"  :toggleStyle="'flat-style'" :toggleColors="{ toggleBg: '#f0c1d1', circleColor: '#f6dbe4' }"/>
        <ColumnComponent :title="'CLOSED'" :bgColor="'#f3f7fa'" :style="{ borderColor: strongColor }"  :toggleStyle="'flat-style'" :toggleColors="{ toggleBg: '#ced5df', circleColor: '#e4e9ef' }"/>
    </div>
</template>
  
<script>
import ColumnComponent from './ColumnComponent.vue';

export default {
    props: ['bgColor', 'strongColor', 'toggleStyle'],
    components: {
        ColumnComponent
    },
    data() {
        return {
            opacityLevel: 1
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
    width: 100%;
    margin-left: 2%;
    margin-right: 2%;
    height: 95%;
    display: flex;
    flex: 3;
    justify-content: center;
    align-items: center;
    border-radius: 1%;
}

.main-card::after {
    content: "";
    position: absolute;
    top: 60%;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1));
    pointer-events: none;
}

.strongColor {
    border: 1px solid;
}

@media (min-width: 768px) {
  .main-card {
    width: 99%;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
  