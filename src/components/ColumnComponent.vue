<template>
    <div class="column" :style="{ backgroundColor: bgColor }">
        <div class="text-above">Some Text</div>
        <div :class="['toggle-button', toggleState ? 'active' : '']" @click="toggle">
            <div class="inner-circle"></div>
        </div>
        <div class="small-box" :style="{ borderColor: strongColor }"></div> <!-- Fixed here -->
    </div>
</template>

<script>
export default {
    props: ['bgColor', 'strongColor'],
    data() {
        return {
            toggleState: false
        };
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
    width: 200px;
    height: 400px;
    margin: 10px;
    position: relative;
    padding: 20px;
}

.text-above {
    margin-bottom: 10px;
}

.toggle-button {
    width: 50px;
    height: 25px;
    background-color: grey;
    position: relative;
    border-radius: 12px;
}

.inner-circle {
    position: absolute;
    top: 2px;
    left: 2px;
    width: 21px;
    height: 21px;
    background-color: white;
    border-radius: 50%;
    transition: all 0.3s ease;
}

.inner-circle.active {
    left: 27px;
}

.small-box {
    width: 50px;
    height: 50px;
    border: 2px solid YourStrongColorHere;
    margin-top: 10px;
}

.toggle-button.active .inner-circle {
    left: 27px;
}
</style>
  