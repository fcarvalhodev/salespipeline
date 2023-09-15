<template>
    <div :class="['column', toggleStyle]" :style="{ backgroundColor: bgColor }">
        <div class="text-above">{{ title }}</div>
        <div class="toggle-button" :class="['toggle-button', toggleState ? 'active' : '']" @click="toggle"
            :style="{ backgroundColor: toggleColors.toggleBg }">
            <div class="inner-circle" :style="{ backgroundColor: toggleColors.circleColor }"></div>
        </div>
        <div class="small-box" :style="{ borderColor: toggleColors.circleColor }"></div> <!-- Fixed here -->
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
  
<style>
.column {
    width: 15em;
    height: 30em;
    margin: 10px;
    position: relative;
    padding: 20px;
    border-radius: 2%;
}

.text-above {
    margin-bottom: 10px;
    color: #6d6a7d;
    font-weight: bold;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
}

.toggle-button {
    width: 115px;
    /* increased width */
    height: 28.75px;
    /* same height */
    background-color: grey;
    position: relative;
    border-radius: 14.375px;
    /* half of the height */
    overflow: hidden;
}

.inner-circle {
    position: absolute;
    top: 2px;
    left: 2px;
    width: 50px;
    /* increased size */
    height: 24.75px;
    /* increased size */
    background-color: white;
    border-radius: 30%;
    transition: left 0.3s ease;
}

.toggle-button.active .inner-circle {
    left: 67px;
}

.small-box {
    width: 12em;
    height: 12em;
    border: 2px solid;
    margin-top: 10px;
    border-radius: 3%;
}

.flat-style .toggle-button {
    background-color: lightgrey;
}

.flat-style .inner-circle {
    background-color: darkgrey;
}</style>
  