<template>
    <div :class="['checkbox__container', { 'selected': isSelected }]" @click="toggleCheckbox">
        <input type="checkbox" :class="['checkbox__input', { 'checked': isSelected }]" :checked="isSelected" />
        <span class="checkbox__label">{{ label }}</span>
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

<style lang="scss" scoped>
@import '../styles/checkbox.scss';
</style>
