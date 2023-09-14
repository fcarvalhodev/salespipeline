<template>
  <div class="d-flex flex-column align-items-center py-1" style="background-color: #f0f3f6">
    <div class="d-flex justify-content-center button-container">
      <div class="button-wrapper">
        <button @click="selectButton(1)" :style="buttonStyle(1)">1</button>
        <span>Phrase for 1</span>
      </div>
      <div class="button-wrapper">
        <button @click="selectButton(2)" :style="buttonStyle(2)">2</button>
        <span>Phrase for 2</span>
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

<style>
.button-container {
  gap: 30px;
}

.button-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}


button {
  width: 40px;
  height: 40px;
  border: 2px solid #3a3e4e;
  border-radius: 12px !important;  /* Explicitly set rounded corners */
  cursor: pointer;
  transition: all 0.3s ease;
}

.small-phrase {
  margin-top: 5px;
  font-size: 12px;
}
</style>
