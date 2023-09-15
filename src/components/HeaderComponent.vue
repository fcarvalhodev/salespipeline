<template>
  <div class="d-flex flex-column align-items-center py-1" style="background-color: #f0f3f6">
    <div class="d-flex justify-content-between header__button-container">
      <div class="header__left-buttons">
        <div class="header__search-button-wrapper">
          <button class="header__search-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="header__bi-search"
              viewBox="0 0 16 16">
              <path
                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.04.04.078.078.118.115l3.85 3.85a1 1 0 0 0 1.414-1.414l-3.85-3.85a1.007 1.007 0 0 0-.134-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </button>
        </div>
      </div>
      <div class="header__center-buttons">
        <div class="header__button-wrapper">
          <button @click="selectButton(1)" :style="buttonStyle(1)" class="header__button">1</button>
          <span class="header__small-phrase">Sales Pipeline Settings</span>
        </div>
        <div class="header__button-wrapper">
          <button @click="selectButton(2)" :style="buttonStyle(2)" class="header__button">2</button>
          <span class="header__small-phrase">Opportunity Details Settings</span>
        </div>
      </div>
      <div class="header__right-buttons">
        <div class="header__next-button-wrapper">
          <button class="header__next-button">Next</button>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      selected: 0
    };
  },
  methods: {
    selectButton(buttonNumber) {
      this.selected = buttonNumber;
    },
    buttonStyle(buttonNumber) {
      return {
        backgroundColor: this.selected === buttonNumber ? '#3a3e4e' : '#ffffff',
        borderColor: this.selected === buttonNumber ? '#ffffff' : '#3a3e4e',
        color: this.selected === buttonNumber ? '#ffffff' : '#3a3e4e'
      };
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../styles/header.scss';
</style>

