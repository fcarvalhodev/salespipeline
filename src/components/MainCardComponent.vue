<template>
    <div :class="['main-card__container', { 'main-card__strong-color': strongColor }]"
        :style="{ backgroundColor: '#ffffff', opacity: opacityLevel }">
        <h2 style="padding-top: 10px;">Please select the types of sales pipeline that best fits to your company</h2>
        <div class="main-card__check-container">
            <CheckboxComponent :label="'Basic'" :isSelected="selectedCheckbox === 'Basic'" @checkboxToggled="sortColumns" />
            <CheckboxComponent :label="'Advanced'" :isSelected="selectedCheckbox === 'Advanced'"
                @checkboxToggled="sortColumns" />
            <CheckboxComponent :label="'Expert'" :isSelected="selectedCheckbox === 'Expert'"
                @checkboxToggled="sortColumns" />
            <CheckboxComponent :label="'Custom'" :isSelected="selectedCheckbox === 'Custom'"
                @checkboxToggled="sortColumns" />
        </div>
        <div class="main-card__columns-container">
            <ColumnComponent v-if="visibleColumns.includes('LEAD')" :title="'LEAD'" :bgColor="'#f5f1ff'"
                :style="{ borderColor: strongColor }" :toggleStyle="'flat-style'"
                :toggleColors="{ toggleBg: '#e5dafc', circleColor: '#d4c1f9' }" />
            <ColumnComponent v-if="visibleColumns.includes('RFP IN PROGRESS')" :title="'RFP IN PROGRESS'"
                :bgColor="'#fbf6f0'" :style="{ borderColor: strongColor }" :toggleStyle="'flat-style'"
                :toggleColors="{ toggleBg: '#f4d7b9', circleColor: '#f7e5cf' }" />
            <ColumnComponent v-if="visibleColumns.includes('SUBMITTED')" :title="'SUBMITTED'" :bgColor="'#eaf4fe'"
                :style="{ borderColor: strongColor }" :toggleStyle="'flat-style'"
                :toggleColors="{ toggleBg: '#add0fa', circleColor: '#cae2fc' }" />
            <ColumnComponent v-if="visibleColumns.includes('WON')" :title="'WON'" :bgColor="'#e5f4f7'"
                :style="{ borderColor: strongColor }" :toggleStyle="'flat-style'"
                :toggleColors="{ toggleBg: '#a1dce4', circleColor: '#bfeaf1' }" />
            <ColumnComponent v-if="visibleColumns.includes('LOST')" :title="'LOST'" :bgColor="'#fcf1f5'"
                :style="{ borderColor: strongColor }" :toggleStyle="'flat-style'"
                :toggleColors="{ toggleBg: '#f0c1d1', circleColor: '#f6dbe4' }" />
            <ColumnComponent v-if="visibleColumns.includes('CLOSED')" :title="'CLOSED'" :bgColor="'#f3f7fa'"
                :style="{ borderColor: strongColor }" :toggleStyle="'flat-style'"
                :toggleColors="{ toggleBg: '#ced5df', circleColor: '#e4e9ef' }" />
        </div>

    </div>
</template>
  
<script>
import ColumnComponent from './ColumnComponent.vue';
import CheckboxComponent from './CheckBoxComponent.vue'

export default {
    props: ['bgColor', 'strongColor', 'toggleStyle'],
    components: {
        ColumnComponent,
        CheckboxComponent
    },
    data() {
        return {
            selectedCheckbox: null,
            opacityLevel: 1,
            visibleColumns: ['LEAD', 'RFP IN PROGRESS', 'SUBMITTED', 'WON', 'LOST', 'CLOSED']
        };
    },
    methods: {
        sortColumns(label) {
            if (this.selectedCheckbox === label) {
                this.selectedCheckbox = null;
                this.showAllColumns();
            } else {
                this.selectedCheckbox = label;
                this.sortBasedOnSelection(label);
            }
        },
        showAllColumns() {
            this.visibleColumns = ['LEAD', 'RFP IN PROGRESS', 'SUBMITTED', 'WON', 'LOST', 'CLOSED'];
        },
        sortBasedOnSelection(label) {
            switch (label) {
                case 'Basic':
                    this.visibleColumns = ['LEAD', 'RFP IN PROGRESS'];
                    break;
                case 'Advanced':
                    this.visibleColumns = ['LEAD', 'RFP IN PROGRESS', 'SUBMITTED', 'WON'];
                    break;
                case 'Expert':
                    this.visibleColumns = ['LEAD', 'RFP IN PROGRESS', 'SUBMITTED', 'WON', 'LOST'];
                    break;
                case 'Custom':
                    this.visibleColumns = ['LEAD', 'RFP IN PROGRESS', 'SUBMITTED', 'WON', 'LOST', 'CLOSED'];
                    break;
                default:
                    this.visibleColumns = ['LEAD', 'RFP IN PROGRESS', 'SUBMITTED', 'WON', 'LOST', 'CLOSED'];
            }
        }
    }

};
</script>
  
<style lang="scss" scoped>
@import '../styles/maincard.scss';
</style>
  