// export Alert from './components/Alert/Alert';

// import SayMessage from 'src/moduleSayMessage.js';

import {GLB} from './glb.js';
import sayHello from './MyModule.js';

// console.log('sayHello',sayHello);
// SayMessage("vasya");

export default function (){ 

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
