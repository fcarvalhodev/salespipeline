<template>
    <div :class="['column__container', toggleStyle]" :style="{ backgroundColor: bgColor }">
        <div class="column__text-above">{{ title }}</div>
        <div :class="['column__toggle-button', toggleState ? 'active' : '']" @click="toggle"
            :style="{ backgroundColor: toggleColors.toggleBg }">
            <div class="column__inner-circle" :style="{ backgroundColor: toggleColors.circleColor }"></div>
        </div>
        <div class="column__small-box" :style="{ borderColor: toggleColors.circleColor }"></div>
    </div>
</template>

<script>
export default {
    props: ['bgColor', 'strongColor', 'toggleStyle', 'toggleColors', 'title'],
    data() {
        return {
            toggleState: false
        };
    },
    mounted() {
        console.log(this.toggleStyle);  // Debugging line
    },
    methods: {
        toggle() {
            this.toggleState = !this.toggleState;
        }
    }
};
</script>
  
<style lang="scss" scoped>
@import '../styles/column.scss';
</style>
  