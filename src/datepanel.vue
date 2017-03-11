<template>
  <div>
    <span class="title">{{title}}<br><i>{{desc}}</i></span>
<<<<<<< HEAD
    <input id="setOutDate" @focus="isActive=true" type="text" name="" :value="selected">
    <i class="date-btn prev"></i>
    <i class="date-btn next"></i>
    <datepicker :isActive="isActive" :year="year" :month="month" @date="selectDate"></datepicker>
=======
    <input id="setOutDate" @focus="isActive=true" v-clickoutside="handleClose" type="text" name="" :value="selected">
    <i class="date-btn prev"></i>
    <i class="date-btn next"></i>
    <datepicker :isActive="isActive" ref="reference" @date="selectDate"></datepicker>
>>>>>>> origin/master
  </div>
</template>
<script>
var datepicker = require('./datepicker.vue');
<<<<<<< HEAD
module.exports = {
  name: 'datepanel',
  props: ['title', 'desc', 'value'],
=======
var Clickoutside = require('./utils/clickoutside.js');
module.exports = {
  name: 'datepanel',
  props: ['title', 'desc'],
>>>>>>> origin/master
  methods: {
    selectDate: function (date) {
      console.log('在父组件接受的值' + date);
      this.selected = date;
      this.isActive = false;
<<<<<<< HEAD
      this.$emit('input', date);
    }
=======
    },
    handleClose: function () {
      this.isActive = false;
    },
>>>>>>> origin/master
  },
  data: function () {
    return {
      isActive: false,
<<<<<<< HEAD
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
=======
      popperElm: null,
      selected: ''
    };
  },
  directives: {
    Clickoutside: Clickoutside
  },
  mounted: function () {
    this.popperElm = this.$refs.reference.$el;
>>>>>>> origin/master
  },
  components: {
    datepicker: datepicker
  }
};
</script>
