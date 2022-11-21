var App = (function () {
    'use strict';

    // const sayHello = (message) => {
    //     alert(message);
    // }

    // export default sayHello;

    // export var sayHello = '10';


    var GLB = {};

    const sayHello = (message) => {
        console.log(message);
    };

    // export Alert from './components/Alert/Alert';

    // console.log('sayHello',sayHello);
    // SayMessage("vasya");

    function app (){ 

    	console.log('GLB',GLB);
    	sayHello("wow!!");

    	// let a = {
    	// 	init:function() {
    	// 		console.log("init");
    	// 	}
    	// }

    	// a.init();

    	console.log("123");


    }

    return app;

}());
