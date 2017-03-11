<template>
  <div>
    <span class="title">{{this.title}}<br><i>{{this.description}}</i></span>
    <input id="setOutDate" type="text" @focus="isActive=true" :value="selectedDate" v-clickoutside="handleClose" name="" value="2016-10-01 星期一">
    <i class="date-btn prev"></i>
    <i class="date-btn next"></i>
    <datepicker :isActive="isActive" isDoubleCalendar="2" ref="reference" @date="changeSelected"></datepicker>
  </div>
</template>
<script>
var Vue = require('vue');
var Clickoutside = require('./utils/clickoutside.js');
module.exports = {
  name: 'datepanel',
  props: ['title', 'description'],
  data: function () {
    return {
      isActive: false,
      popperElm: null,
      selectedDate: ''
    };
  },
  mounted: function () {
    this.popperElm = this.$refs.reference.$el;
  },
  components: {
    datepicker: require('./datepicker.vue')
  },
  directives: {
    Clickoutside
  },
  methods: {
    handleClose: function () {
      this.isActive = false;
    },
    changeSelected: function (date) {
      this.selectedDate = date;
      this.handleClose();
    }
  }
};
</script>
