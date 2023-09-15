<template>
  <div class="d-flex flex-column align-items-center py-1" style="background-color: #f0f3f6">
    <div class="d-flex justify-content-between button-container">
      <div class="left-buttons">
        <div class="search-button-wrapper">
          <button class="search-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search"
              viewBox="0 0 16 16">
              <path
                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.04.04.078.078.118.115l3.85 3.85a1 1 0 0 0 1.414-1.414l-3.85-3.85a1.007 1.007 0 0 0-.134-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </button>
        </div>
      </div>
      <div class="center-buttons">
        <div class="button-wrapper">
          <button @click="selectButton(1)" :style="buttonStyle(1)">1</button>
          <span class="small-phrase">Sales Pipeline Settings</span>
        </div>
        <div class="button-wrapper">
          <button @click="selectButton(2)" :style="buttonStyle(2)">2</button>
          <span class="small-phrase">Opportunity Details Settings</span>
        </div>
      </div>

      <div class="right-buttons">
        <div class="next-button-wrapper">
          <button class="next-button">Next</button>
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

<style>
.button-container {
  width: 100%;
  justify-content: space-between;
  align-items: center;
}

.left-buttons,
.right-buttons {
  flex: 1;
  display: flex;
  justify-content: flex-start;
}

.center-buttons {
  flex: 2;
  display: flex;
  justify-content: center;
}

.button-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 15px;
}


button {
  width: 4em;
  height: 4em;
  border: 2px solid #3a3e4e;
  border-radius: 12px !important;
  cursor: pointer;
  transition: all 0.3s ease;
}

.small-phrase {
  margin-top: 5px;
  font-size: 10px;
  font-weight: bold;
}

/* Estilo do botão de pesquisa */
.search-button {
  background-color: #313747;
  transform: rotate(45deg);
  border-radius: 12px !important;
  height: 3em;
  width: 3em;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 1px;
}

.bi-search {
  color: white;
  transform: rotate(45deg);
}

/* Estilo do botão Next */
.next-button {
  background-color: blue;
  color: white;
  border-radius: 12px !important;
  height: 3em;
  width: 5em;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1px;
}

.next-button-wrapper {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}

</style>
