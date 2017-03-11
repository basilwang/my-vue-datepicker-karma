<template>
  <div>
    <div>{{message}}</div>
    <button @click="showHelloWorld">点击弹出hello world</button>
  </div>
</template>
<script>
var Vue = require('vue');
module.exports = {
  name: 'helloworld',
  data: function () {
    return {
      message: 'hello world'
    };
  },
  methods: {
    showHelloWorld: function () {
      alert(this.message);
    }
  }
};
</script>
