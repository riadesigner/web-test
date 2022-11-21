var App = (function (React, ReactDOM) {
	'use strict';

	React = React && Object.prototype.hasOwnProperty.call(React, 'default') ? React['default'] : React;
	ReactDOM = ReactDOM && Object.prototype.hasOwnProperty.call(ReactDOM, 'default') ? ReactDOM['default'] : ReactDOM;

	function app () {
	  console.log("start!!");
	  ReactDOM.render( /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Hello, world!"), /*#__PURE__*/React.createElement("button", null, "hello!")), document.getElementById('root'));
	}

	return app;

}(React, ReactDOM));
