<template>
  <div>
    <span class="title">{{title}}<br><i>{{desc}}</i></span>
    <input id="setOutDate" @focus="isActive=true" type="text" name="" :value="selected">
    <i class="date-btn prev"></i>
    <i class="date-btn next"></i>
    <datepicker :isActive="isActive" :year="year" :month="month" @date="selectDate"></datepicker>
  </div>
</template>
<script>
var datepicker = require('./datepicker.vue');
module.exports = {
  name: 'datepanel',
  props: ['title', 'desc', 'value'],
  methods: {
    selectDate: function (date) {
      console.log('在父组件接受的值' + date);
      this.selected = date;
      this.isActive = false;
      this.$emit('input', date);
    },
    handleClose: function () {
      this.isActive = false;
    }
  },
  data: function () {
    return {
      isActive: false,
      selected: this.value,
      year: '',
      month: ''
    };
  },
  created: function () {
    if (this.selected !== undefined && this.selected !== '') {
      var numArr = this.selected.split('-');
      this.year = numArr[0];
      this.month = numArr[1];
    } else {
      var date = new Date();
      this.year = date.getFullYear();
      this.month = date.getMonth() + 1;
    }
  },
  components: {
    datepicker: datepicker
  }
};
</script>
