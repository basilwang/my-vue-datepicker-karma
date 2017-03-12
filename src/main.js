var Vue = require('vue');
var citypicker = require('./citypicker.vue');
var datepanel = require('./datepanel.vue');
var helloworld = require('./helloworld.vue');
var app = new Vue({
  el: '#app',
  data: function () {
    return {
      setOutDate: '2017-03-12',
      ReturnDate: ''
    };
  },
  components: { citypicker: citypicker, helloworld: helloworld, datepanel: datepanel }
});


var Ctor= Vue.extend(datepanel);
var vm=new Ctor({
	 propsData:{
	 	value:'2017-03-12'
	 }
}).$mount(); 
alert(vm.selected);

var vm1=new Vue({
	el:'#model-test',
    data:function(){
    	return {
    		something:'test'
    	}
    }
})

// alert(app.message);
// alert(citypicker.fromCity);
// alert('hello world');
