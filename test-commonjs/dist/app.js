var App = (function () {
    'use strict';

    // const sayHello = (message) => {
    //     alert(message);
    // }
    // export default sayHello;
    // export var sayHello = '10';
    var GLB = {};

    var sayHello = function sayHello(message) {
      console.log(message);
    };

    // export Alert from './components/Alert/Alert';
    // SayMessage("vasya");

    function app () {
      console.log('GLB', GLB);
      sayHello("wow!!");

      var b = function b(s) {
        return s * 2;
      };

      console.log('b', b(10));
      var a = {
        init: function init() {
          console.log("init");
        }
      };
      a.init();
      console.log("123");
    }

    return app;

}());
