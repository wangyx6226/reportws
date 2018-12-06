<template>
  <div class="combo_wrap" v-clickoutside="handleClose">
    <el-input 
      size="mini" 
      :readonly="true" 
      :placeholder="placeholder" 
      @focus="handleFocus" 
      :value="displayValue" 
      @input="value => userInput = value"
      @mouseenter.native="handleMouseEnter"
      @mouseleave.native="showClose = false"
      :validateEvent="false"
      ref="reference">
      <i slot="suffix"
        class="el-input__icon"
        @click="handleClickIcon"
        :class="[showClose ? '' + clearIcon : '']">
      </i>
    </el-input>
  </div>
</template>

<script>
import Vue from 'vue';
import Clickoutside from 'element-ui/src/utils/clickoutside';
import Picker from './piker';

export default {
  name: '',

  props: {
    type: String,
    
  },

  data() {
    return {
      pickerVisible: false,
      displayValue: '',  //默认显示
      defaultValue: '', //默认值
      clearIcon: 'el-icon-circle-close',
      placeholder: '请选择',
      showClose: false,
      userInput: null,
    }
  },

  watch: {
    pickerVisible(val) {
      if (val) {
        this.showPicker();
      } else {
        this.hidePicker();
        // this.blur();
      }
    },
    userInput(val) {
      console.log(val,222222)
    }
    // displayValue(val) {
    //   if (this.picker) {
    //     //该值由用户设置
    //     this.picker.defaultValue = val
    //   }
    // }
  },

  computed: {
  
  },

  methods: {
    handleInput(val) {
      console.log(111111111)
      console.log(val)
      this.userInput = val
    },
    focus() {
      this.$refs.reference.focus();
    },
    blur() {
      this.refInput.forEach(input => input.blur());
    },
    handleFocus() {
      const type = this.type;

      this.pickerVisible = true;
      this.$emit('focus', this);
      
    },
    handleClose() {
      if (!this.pickerVisible) return;
      this.pickerVisible = false;
    },
    handleMouseEnter() {

    },
    handleClickIcon() {

    },
    showPicker() {
      if (!this.picker) {
        this.mountPicker();
      }
      this.pickerVisible = this.picker.visible = true;
    },
    hidePicker() {
      if (this.picker) {
        this.pickerVisible = this.picker.visible = false;
      }
    },
    mountPicker() {
      this.picker = new Vue(Picker).$mount();
      this.$el.appendChild(this.picker.$el);
      this.picker.$on('input', (date = '', visible = false) => {
        this.userInput = null;
        this.pickerVisible = this.picker.visible = visible;
        this.emitInput(date);
      });
    },
    emitInput(val) {
      this.displayValue = val.text
      // const formatted = this.formatToValue(val);
      // if (!valueEquals(this.value, formatted)) {
        // this.$emit('input', val);
      // }
    },

  },

  directives: { Clickoutside },
}
</script>