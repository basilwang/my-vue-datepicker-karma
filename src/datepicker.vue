<template>
  <div class="calendar-wrap" :class="{open:isActive}">
    <i id="prev" @click="preMonth" class="prev"></i>
    <i id="next" @click="nextMonth" class="next"></i>
    <div class="calendar-box">
      <div class="calendar" data-date="2017-3-">
        <div class="date-title">{{YearMonthTitle}}</div>
        <table>
          <thead>
            <tr>
              <th v-for="item in weekList">{{item}}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="list in padDayList">
              <td v-for="item in list" @click="selectDate(item)">
                <span v-if="item !=''">{{item}}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
module.exports = {
  name: 'datepicker',
<<<<<<< HEAD
  props: ['isActive', 'year', 'month'],
=======
  props: ['isActive'],
>>>>>>> origin/master
  methods: {
    selectDate: function (item) {
      var selectDateString = this.selectedYear + '-' + this.selectedMonth + '-' + item;
      console.log(selectDateString);
      this.$emit('date', selectDateString);
    },
    nextMonth: function () {
      console.log('nextMonth');
      this.selectedMonth += 1;
      if (this.selectedMonth === 13) {
        this.selectedMonth = 1;
        this.selectedYear += 1;
      }
      // console.log('本月有'+this.dayList+'天');
      // console.log(this.dayList);
      console.log(this.padDayList);
    },
    preMonth: function () {
      console.log('preMonth');
      this.selectedMonth -= 1;
      if (this.selectedMonth === 0) {
        this.selectedMonth = 12;
        this.selectedYear -= 1;
      }
      // console.log('本月有'+this.dayList+'天');
      // console.log(this.dayList);
      console.log(this.padDayList);
    }
  },
  data: function () {
<<<<<<< HEAD
    // var date = new Date();
    // var month = date.getMonth() + 1;
    // var year = date.getFullYear();
    return {
      selectedMonth: this.month,
      selectedYear: this.year,
      weekList: ['日', '一', '二', '三', '四', '五', '六']
    };
  },
  // created: function () {
  //   var numArr = this.selected.split('-');
  //   var date = new Date(numArr[0], numArr[1] - 1, numArr[2]);
  //   this.selectedMonth = date.getMonth() + 1;
  //   this.selectedYear = date.getFullYear();
  // },
=======
    var date = new Date();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    return {
      selectedMonth: month,
      selectedYear: year,
      weekList: ['日', '一', '二', '三', '四', '五', '六']
    };
  },
>>>>>>> origin/master
  computed: {
    YearMonthTitle: function () {
      return this.selectedYear + '年' + this.selectedMonth + '月';
    },
    dayList: function () {
      var maxDayCount = new Date(this.selectedYear, this.selectedMonth - 1 + 1, 0).getDate();
      var days = [];
      for (var i = 1; i <= maxDayCount; i++) {
        days.push(i);
      }
      return days;
    },
    padDayList: function () {
      var padCountBeforeFirstDay = new Date(this.selectedYear, this.selectedMonth - 1, 1).getDay();
      var padDays = [];
      for (var i = 1; i <= padCountBeforeFirstDay; i++) {
        padDays.push('');
      }
      padDays = padDays.concat(this.dayList);
      var padCountAfterLastDay = 6 - new Date(this.selectedYear, this.selectedMonth - 1 + 1, 0).getDay();
      for (var i = 1; i <= padCountAfterLastDay; i++) {
        padDays.push('');
      }
      // return padDays;
      var padDaysListTemp = [];
      var weekCount = padDays.length / 7;
      for (var i = 0; i < weekCount; i++) {
        var arr = padDays.splice(0, 7);
        padDaysListTemp.push(arr);
      }
      return padDaysListTemp;
    }
  }
};
</script>
