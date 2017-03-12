var vue = require('vue');
var HelloWorld = require('../src/helloworld.vue');

describe('这是一个suite',
  function () {
    it('这是一个spec',
      function () {
        var ChildHelloWorld = vue.extend(HelloWorld);
        var helloworld = new ChildHelloWorld();
        expect(helloworld.message).toBe('hello world!');
      });
  });

// describe('这是一个suite',
//   function () {
//     var a;
//     it('这是一个spec',
//       function () {
//         a = true;
//         expect(a).toBe(true);
//       });
//   });
