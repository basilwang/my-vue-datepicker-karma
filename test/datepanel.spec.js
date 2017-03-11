var Vue = require('vue');
var DatePanel = require('../src/datepanel.vue');

describe('datepanel suite',
  function () {
    it('value spec',
      function () {
        var Ctor = Vue.extend(DatePanel);
        var vm = new Ctor({
          propsData: { value: '2017-02-14' }
        }).$mount();

        expect(vm.year).toBe('2017');
        expect(vm.selected).toBe('2017-02-14');
        expect(vm.$el.querySelector('div.date-title').textContent).toBe('2017年02月');
      });
  });
