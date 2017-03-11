var Vue = require('vue');
var DatePicker = require('../src/datepicker.vue');

describe('datepicker suite',
  function () {
    it('value spec',
      function () {
        var Ctor = Vue.extend(DatePicker);
        var vm = new Ctor({
          propsData: { year: '2017', month: '3' }
        }).$mount();
        expect(vm.selectedYear).toBe('2017');
        expect(vm.dayList).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]);
        expect(vm.padDayList).toEqual([
          ['', '', '', 1, 2, 3, 4],
          [5, 6, 7, 8, 9, 10, 11],
          [12, 13, 14, 15, 16, 17, 18],
          [19, 20, 21, 22, 23, 24, 25],
          [26, 27, 28, 29, 30, 31, '']
        ]);
        // expect(vm.$el.querySelector('div.date-title').textContent).toBe('2017年2月');
      });
  });
