import{b as t,d as e,g as r,a as n}from"./szfe-tools@0.0.0-beta.7.Bf-t9pxN.js";import{a as o}from"./react@19.1.0.BqYkxQ4a.js";var a,c,u={exports:{}},i={exports:{}};function f(){return a||(a=1,function(t,e,r,n,o,a){function c(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function u(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function p(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n,o=i(t);return!(n=e?(r=i(this).constructor,Reflect.construct(o,arguments,r)):o.apply(this,arguments))||"object"!=typeof n&&"function"!=typeof n?l(this):n}}function s(t){return function(t){if(Array.isArray(t))return y(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return y(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?y(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function d(){var t=0,e=new Map;return function(r){var n=e.get(r);return n||(n=(++t).toString(32),e.set(r,n)),n}}function b(t){var e,r,n,c=_(a(t,"type.$$typeof",t.type)),u=(r=a(e=t,"key")||e.index,n=a(e,"memoizedProps._nk")||a(e,"pendingProps._nk"),o(n)&&m.test(n)?"".concat(n,".").concat(r):n||r);return"".concat(c,",").concat(u)}function v(t){var e,r,n,c=g(t.type),u=(r=a(e=t,"key")||e.index,n=a(e,"props._nk"),o(n)&&j.test(n)?"".concat(n,".").concat(r):n||r);return"".concat(c,",").concat(u)}e=e&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e,n=n&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n,o=o&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o,a=a&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a;var h,m=/^iAr/,_=d(),O=function(t,r){var o,a,c=(o=function t(e){return e.return?[e].concat(s(t(e.return))):[e]}(t),a=r,o.map((function(t){var r=b(t);return n(a)?e(a,void 0,t,r):r})).filter(Boolean).join("|"));return _(c)},j=/^iAr/,g=d(),w=function(t,r){var o,a,c=(o=function t(e){return e.__?[e].concat(s(t(e.__))):[e]}(t),a=r,o.map((function(t){var r=v(t);return n(a)?e(a,void 0,t,r):r})).filter(Boolean).join("|"));return g(c)},P=function(){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(o,r.Component);var t,n=p(o);function o(){var t;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,o);for(var e=arguments.length,r=new Array(e),a=0;a<e;a++)r[a]=arguments[a];return u(l(t=n.call.apply(n,[this].concat(r))),"key",null),u(l(t),"genKey",(function(e){switch(h||((t._reactInternalFiber||t._reactInternals)&&(h="React"),t.__v&&(h="Preact")),h){case"Preact":t.key=w(t.__v,e);break;case"React":var r=t._reactInternalFiber||t._reactInternals;t.key=O(r,e)}return t.key})),t}return(t=[{key:"render",value:function(){var t=this.props,r=(t.manualKey,t.children),n=t.prefix,o=t.onHandleNode;return e(r,void 0,"".concat(n).concat(this.key||this.genKey(o)))}}])&&c(o.prototype,t),o}();u(P,"defaultProps",{onHandleNode:void 0,manualKey:void 0,prefix:""}),t.default=P,Object.defineProperty(t,"__esModule",{value:!0})}(i.exports,t(),o(),e(),r(),n())),i.exports}function l(){return c||(c=1,u.exports=f()),u.exports}export{l as r};
