// export Alert from './components/Alert/Alert';

// import SayMessage from 'src/moduleSayMessage.js';

import {GLB} from './glb.js';
import sayHello from './MyModule.js';

// console.log('sayHello',sayHello);
// SayMessage("vasya");

export default function (){ 

	console.log('GLB',GLB);
	sayHello("wow!!");

	let b = s => s*2; 

	console.log('b',b(10));

	let a = {
		init() {

			console.log("init");
		}
	}

	a.init();

	console.log("123");


}
