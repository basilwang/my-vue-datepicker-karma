<template>
  <div id="calendar" class="calendar-wrap" :style="styleSheets" :class="{open:isDatePickerActive}">
    <!-- 按钮 -->
    <i id="prev" @click="prevFn()" class="prev"></i>
    <i id="next" @click="nextFn()" class="next"></i>
    <!-- 日历主体 -->
    <div class="calendar-box">
      <datetable v-for="calendar in calendarList" :calendar="calendar" :isSundayFirstDayOfWeek="isSundayFirstDayOfWeek" :isDoubleCalendar="isDoubleCalendar"></datetable>
    </div>
  </div>
</template>
<script>
var Vue = require('vue');
module.exports = {
  name: 'datepicker',
  components: {
    datetable: require('./datetable.vue')
  },
  props: ['isActive', 'isDoubleCalendar'],
  data: function () {
    var today = new Date();
    return {
      year: today.getFullYear(),
      month: today.getMonth(),
      date: today.getDate(),
      selected: ''

    };
  },
  computed: {
    isDatePickerActive: function () {
      return this.isActive
    },
    calendarList: function (val) {
      // this.slots = []
      var isDoubleCalendar = this.isDoubleCalendar;
      var year = this.year;
      var month = this.month;
      var months = [];
      months.push({
        'year': year,
        'month': month
      })
      for (var i = 1; i < isDoubleCalendar; i++) {
        month = month == 11 ? 0 : month + 1,
          year = month == 0 ? this.year + 1 : this.year;
        months.push({
          'year': year,
          'month': month
        })
      }
      return months;
    }

  },
  // mounted:function(){
  //      this.styleSheets={
  //        top: this.$parent.$el.offsetTop + 50 + 'px',
  //        left: '20px'
  //      };
  // },
  methods: {
    //点击prev按钮
    prevFn: function () {
      this.month = this.month == 0 ? 11 : this.month - 1;

      if (this.month == 11) {
        this.year = this.year - 1
      }
    },
    //点击next按钮
    nextFn: function () {

      this.month = this.month == 11 ? 0 : this.month + 1;

      if (this.month == 0) {
        this.year = this.year + 1
      }
    }
  }
};
</script>
