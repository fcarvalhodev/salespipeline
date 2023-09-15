<template>
    <div class="checkbox-container" :class="{ 'selected': isSelected }" @click="toggleCheckbox">
        <input type="checkbox" class="checkbox-input" :checked="isSelected" />
        <span class="checkbox-label">{{ label }}</span>
    </div>
</template>

<script>
export default {
    props: ['label', 'isSelected'],
    methods: {
        toggleCheckbox() {
            this.$emit('checkboxToggled', this.label);
        }
    }
};
</script>

<style>
.checkbox-container {
    border: 2px solid lightgray;
    border-radius: 5px;
    padding: 10px;
    display: inline-block;
    margin: 5px;
    cursor: pointer;
    position: relative;
}

.checkbox-container.selected {
    border-color: #5564a4;
}

.checkbox-input {
    border: 2px solid lightgray;
    border-radius: 50%;
    display: inline-block;
    cursor: pointer;
}

.checkbox-input.checked {
    background-color: #5564a4;
    border-color: #5564a4;
}

.checkbox-label {
    margin-left: 5px;
}

.checkbox-container.selected::after {
    content: "";
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid #5564a4;
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
}
</style>
