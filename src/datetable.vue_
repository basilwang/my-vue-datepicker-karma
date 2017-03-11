<template>
  <div class="calendar">
    <!-- 表头 -->
    <div class="date-title">{{calendar.year}}年{{calendar.month + 1}}月</div>
    <!-- 表体 -->
    <table>
      <!-- 星期指示 -->
      <thead>
        <tr>
          <th v-for="week in weekList"><span>{{week}}</span></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="list in daysList">
          <td v-for="item in list" @click="selectDate(item)"><span v-if="item != '' ">{{item}}</span></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
var Vue = require('vue');
module.exports = {
  name: 'datetable',
  props: ['calendar'],
  data: function () {
    return {
      selected: ''

    };
  },
  computed: {
    isDatePickerActive: function () {
      return this.isActive
    },
    //返回weeklist
    weekList: function () {
      if (this.sunDayFir) {
        return ['日', '一', '二', '三', '四', '五', '六']
      } else {
        return ['一', '二', '三', '四', '五', '六', '日']
      }
    },
    //只做日历数组
    daysList: function () {
      //返回每个月的日长
      var currentMonthLength = new Date(this.calendar.year, this.calendar.month + 1, 0).getDate(),
        dateObj = [],
        dateList = [];

      //确定当月的第一天是星期几
      var startDay = new Date(this.calendar.year, this.calendar.month, 1).getDay();
      //先将当月日期塞入数组中
      for (var i = 0; i < currentMonthLength; i++) {
        dateObj[i] = i + 1
      }

      //补全剩余位置
      for (var j = 0; j <= 35; j++) {
        if (j < startDay) {
          dateObj = [''].concat(dateObj)
        }
        if (j > startDay + currentMonthLength) {
          dateObj = dateObj.concat('')
        }
      }

      //以7天为一组从新组合一个二维日期数组
      var timeStep = Math.ceil(dateObj.length / 7);
      for (var i = 0; i < timeStep; i++) {
        var stepArr = [];
        var stepRank = dateObj.length < 7 ? dateObj.length : 7;

        stepArr = dateObj.splice(0, stepRank);

        dateList.push(stepArr);
      }
      console.log(dateList);
      return dateList;
    },
    //表头语言控制
    title: function () {

      var month = {
        1: '一',
        2: '二',
        3: '三',
        4: '四',
        5: '五',
        6: '六',
        7: '七',
        8: '八',
        9: '九',
        10: '十',
        11: '十一',
        12: '十二'
      }[this.calendar.month + 1]
      return this.calendar.year + '年' + month + '月';

    }
  },
  // mounted:function(){
  //      this.styleSheets={
  //        top: this.$parent.$el.offsetTop + 50 + 'px',
  //        left: '20px'
  //      };
  // },
  methods: {
    //在选择框显示选中的时间
    selectDate: function (item) {
      if (item == '') return;
      this.selected = this.calendar.year + '-' + (this.calendar.month + 1 < 10 ? '0' + (this.calendar.month + 1) : this.calendar.month) + '-' + (item < 10 ? '0' + item : item);
      //组件内选择日期selected/mytoggle发生变更后向外部发送事件通知
      this.$parent.$emit('date', this.selected);
    }
  }
};
</script>
