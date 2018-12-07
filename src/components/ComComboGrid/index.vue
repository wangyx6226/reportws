<template>
  <el-input
    :value="displayValue"
    :placeholder="placeholder"
    v-clickoutside="handleClose"
    @focus="handleFocus"
    :validateEvent="false"
    :readonly="true" 
    size="mini" 
    ref="reference">
  </el-input>
</template>

<script>
import Vue from 'vue';
import Clickoutside from 'element-ui/src/utils/clickoutside';
import Picker from './piker';

export default {
  name: '',

  props: {
    type: String,
    value: {},
  },

  data() {
    return {
      pickerVisible: false,
      displayValue: 'super_user',  //默认显示
      placeholder: '请选择',
    }
  },

  computed: {
   
  },

  watch: {
    pickerVisible(val) {
      if (val) {
        this.showPicker();
      } else {
        this.hidePicker();
      }
    },
  },


  methods: {
    handleFocus() {
      const type = this.type;
      this.pickerVisible = true;
    },

    handleClose() {
      if (!this.pickerVisible) return;
      this.pickerVisible = false;
    },

    showPicker() {
      if (!this.picker) {
        this.mountPicker();
      }
      this.pickerVisible = this.picker.visible = true;
      this.picker.clearSearchInput();
    },

    hidePicker() {
      if (this.picker) {
        this.pickerVisible = this.picker.visible = false;
      }
    },

    mountPicker() {
      this.picker = new Vue(Picker).$mount();
      this.picker.type = this.type;
      this.$el.appendChild(this.picker.$el);

      this.picker.$on('input', (row = '', visible = false) => {
        this.pickerVisible = this.picker.visible = visible;
        this.emitInput(row);
      });
      // console.log(this.$root)
      // console.log(this.$parent.$data)
    },

    emitInput(row) {
      this.displayValue = row.text;
      this.$emit('input', row.value);
    },

  },

  directives: { Clickoutside },
}
</script>