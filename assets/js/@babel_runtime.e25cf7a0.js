var Zr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function rt(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}function tt(r){if(r.__esModule)return r;var t=r.default;if(typeof t=="function"){var e=function n(){if(this instanceof n){var u=[null];u.push.apply(u,arguments);var s=Function.bind.apply(t,u);return new s}return t.apply(this,arguments)};e.prototype=t.prototype}else e={};return Object.defineProperty(e,"__esModule",{value:!0}),Object.keys(r).forEach(function(n){var u=Object.getOwnPropertyDescriptor(r,n);Object.defineProperty(e,n,u.get?u:{enumerable:!0,get:function(){return r[n]}})}),e}function P(r){return P=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},P(r)}function Sr(r,t){if(P(r)!=="object"||r===null)return r;var e=r[Symbol.toPrimitive];if(e!==void 0){var n=e.call(r,t||"default");if(P(n)!=="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(r)}function br(r){var t=Sr(r,"string");return P(t)==="symbol"?t:String(t)}function Ar(r,t,e){return t=br(t),t in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e,r}function tr(r,t){var e=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);t&&(n=n.filter(function(u){return Object.getOwnPropertyDescriptor(r,u).enumerable})),e.push.apply(e,n)}return e}function et(r){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?tr(Object(e),!0).forEach(function(n){Ar(r,n,e[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(e)):tr(Object(e)).forEach(function(n){Object.defineProperty(r,n,Object.getOwnPropertyDescriptor(e,n))})}return r}function nt(r,t){if(!(r instanceof t))throw new TypeError("Cannot call a class as a function")}function er(r,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,br(n.key),n)}}function ot(r,t,e){return t&&er(r.prototype,t),e&&er(r,e),Object.defineProperty(r,"prototype",{writable:!1}),r}function I(r,t){return I=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,u){return n.__proto__=u,n},I(r,t)}function it(r,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(t&&t.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),Object.defineProperty(r,"prototype",{writable:!1}),t&&I(r,t)}function L(r){return L=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},L(r)}function Tr(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function jr(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Er(r,t){if(t&&(P(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return jr(r)}function at(r){var t=Tr();return function(){var n=L(r),u;if(t){var s=L(this).constructor;u=Reflect.construct(n,arguments,s)}else u=n.apply(this,arguments);return Er(this,u)}}function nr(){return nr=Object.assign?Object.assign.bind():function(r){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n])}return r},nr.apply(this,arguments)}function Q(r,t){(t==null||t>r.length)&&(t=r.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=r[e];return n}function Ir(r){if(Array.isArray(r))return Q(r)}function gr(r){if(typeof Symbol<"u"&&r[Symbol.iterator]!=null||r["@@iterator"]!=null)return Array.from(r)}function V(r,t){if(r){if(typeof r=="string")return Q(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);if(e==="Object"&&r.constructor&&(e=r.constructor.name),e==="Map"||e==="Set")return Array.from(r);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return Q(r,t)}}function Lr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ut(r){return Ir(r)||gr(r)||V(r)||Lr()}function qr(r,t){if(r==null)return{};var e={},n=Object.keys(r),u,s;for(s=0;s<n.length;s++)u=n[s],!(t.indexOf(u)>=0)&&(e[u]=r[u]);return e}function ft(r,t){if(r==null)return{};var e=qr(r,t),n,u;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(r);for(u=0;u<s.length;u++)n=s[u],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(r,n)&&(e[n]=r[n])}return e}function mr(r){if(Array.isArray(r))return r}function Rr(r,t){var e=r==null?null:typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(e!=null){var n,u,s,h,b=[],l=!0,_=!1;try{if(s=(e=e.call(r)).next,t===0){if(Object(e)!==e)return;l=!1}else for(;!(l=(n=s.call(e)).done)&&(b.push(n.value),b.length!==t);l=!0);}catch(A){_=!0,u=A}finally{try{if(!l&&e.return!=null&&(h=e.return(),Object(h)!==h))return}finally{if(_)throw u}}return b}}function _r(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function st(r,t){return mr(r)||Rr(r,t)||V(r,t)||_r()}function kr(){kr=function(){return r};var r={},t=Object.prototype,e=t.hasOwnProperty,n=Object.defineProperty||function(a,o,i){a[o]=i.value},u=typeof Symbol=="function"?Symbol:{},s=u.iterator||"@@iterator",h=u.asyncIterator||"@@asyncIterator",b=u.toStringTag||"@@toStringTag";function l(a,o,i){return Object.defineProperty(a,o,{value:i,enumerable:!0,configurable:!0,writable:!0}),a[o]}try{l({},"")}catch{l=function(i,f,p){return i[f]=p}}function _(a,o,i,f){var p=o&&o.prototype instanceof $?o:$,c=Object.create(p.prototype),y=new F(f||[]);return n(c,"_invoke",{value:Or(a,i,y)}),c}function A(a,o,i){try{return{type:"normal",arg:a.call(o,i)}}catch(f){return{type:"throw",arg:f}}}r.wrap=_;var g={};function $(){}function T(){}function w(){}var Y={};l(Y,s,function(){return this});var B=Object.getPrototypeOf,j=B&&B(B(J([])));j&&j!==t&&e.call(j,s)&&(Y=j);var S=w.prototype=$.prototype=Object.create(Y);function X(a){["next","throw","return"].forEach(function(o){l(a,o,function(i){return this._invoke(o,i)})})}function E(a,o){function i(p,c,y,v){var d=A(a[p],a,c);if(d.type!=="throw"){var x=d.arg,m=x.value;return m&&P(m)=="object"&&e.call(m,"__await")?o.resolve(m.__await).then(function(O){i("next",O,y,v)},function(O){i("throw",O,y,v)}):o.resolve(m).then(function(O){x.value=O,y(x)},function(O){return i("throw",O,y,v)})}v(d.arg)}var f;n(this,"_invoke",{value:function(c,y){function v(){return new o(function(d,x){i(c,y,d,x)})}return f=f?f.then(v,v):v()}})}function Or(a,o,i){var f="suspendedStart";return function(p,c){if(f==="executing")throw new Error("Generator is already running");if(f==="completed"){if(p==="throw")throw c;return rr()}for(i.method=p,i.arg=c;;){var y=i.delegate;if(y){var v=Z(y,i);if(v){if(v===g)continue;return v}}if(i.method==="next")i.sent=i._sent=i.arg;else if(i.method==="throw"){if(f==="suspendedStart")throw f="completed",i.arg;i.dispatchException(i.arg)}else i.method==="return"&&i.abrupt("return",i.arg);f="executing";var d=A(a,o,i);if(d.type==="normal"){if(f=i.done?"completed":"suspendedYield",d.arg===g)continue;return{value:d.arg,done:i.done}}d.type==="throw"&&(f="completed",i.method="throw",i.arg=d.arg)}}}function Z(a,o){var i=o.method,f=a.iterator[i];if(f===void 0)return o.delegate=null,i==="throw"&&a.iterator.return&&(o.method="return",o.arg=void 0,Z(a,o),o.method==="throw")||i!=="return"&&(o.method="throw",o.arg=new TypeError("The iterator does not provide a '"+i+"' method")),g;var p=A(f,a.iterator,o.arg);if(p.type==="throw")return o.method="throw",o.arg=p.arg,o.delegate=null,g;var c=p.arg;return c?c.done?(o[a.resultName]=c.value,o.next=a.nextLoc,o.method!=="return"&&(o.method="next",o.arg=void 0),o.delegate=null,g):c:(o.method="throw",o.arg=new TypeError("iterator result is not an object"),o.delegate=null,g)}function Pr(a){var o={tryLoc:a[0]};1 in a&&(o.catchLoc=a[1]),2 in a&&(o.finallyLoc=a[2],o.afterLoc=a[3]),this.tryEntries.push(o)}function z(a){var o=a.completion||{};o.type="normal",delete o.arg,a.completion=o}function F(a){this.tryEntries=[{tryLoc:"root"}],a.forEach(Pr,this),this.reset(!0)}function J(a){if(a){var o=a[s];if(o)return o.call(a);if(typeof a.next=="function")return a;if(!isNaN(a.length)){var i=-1,f=function p(){for(;++i<a.length;)if(e.call(a,i))return p.value=a[i],p.done=!1,p;return p.value=void 0,p.done=!0,p};return f.next=f}}return{next:rr}}function rr(){return{value:void 0,done:!0}}return T.prototype=w,n(S,"constructor",{value:w,configurable:!0}),n(w,"constructor",{value:T,configurable:!0}),T.displayName=l(w,b,"GeneratorFunction"),r.isGeneratorFunction=function(a){var o=typeof a=="function"&&a.constructor;return!!o&&(o===T||(o.displayName||o.name)==="GeneratorFunction")},r.mark=function(a){return Object.setPrototypeOf?Object.setPrototypeOf(a,w):(a.__proto__=w,l(a,b,"GeneratorFunction")),a.prototype=Object.create(S),a},r.awrap=function(a){return{__await:a}},X(E.prototype),l(E.prototype,h,function(){return this}),r.AsyncIterator=E,r.async=function(a,o,i,f,p){p===void 0&&(p=Promise);var c=new E(_(a,o,i,f),p);return r.isGeneratorFunction(o)?c:c.next().then(function(y){return y.done?y.value:c.next()})},X(S),l(S,b,"Generator"),l(S,s,function(){return this}),l(S,"toString",function(){return"[object Generator]"}),r.keys=function(a){var o=Object(a),i=[];for(var f in o)i.push(f);return i.reverse(),function p(){for(;i.length;){var c=i.pop();if(c in o)return p.value=c,p.done=!1,p}return p.done=!0,p}},r.values=J,F.prototype={constructor:F,reset:function(o){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(z),!o)for(var i in this)i.charAt(0)==="t"&&e.call(this,i)&&!isNaN(+i.slice(1))&&(this[i]=void 0)},stop:function(){this.done=!0;var o=this.tryEntries[0].completion;if(o.type==="throw")throw o.arg;return this.rval},dispatchException:function(o){if(this.done)throw o;var i=this;function f(x,m){return y.type="throw",y.arg=o,i.next=x,m&&(i.method="next",i.arg=void 0),!!m}for(var p=this.tryEntries.length-1;p>=0;--p){var c=this.tryEntries[p],y=c.completion;if(c.tryLoc==="root")return f("end");if(c.tryLoc<=this.prev){var v=e.call(c,"catchLoc"),d=e.call(c,"finallyLoc");if(v&&d){if(this.prev<c.catchLoc)return f(c.catchLoc,!0);if(this.prev<c.finallyLoc)return f(c.finallyLoc)}else if(v){if(this.prev<c.catchLoc)return f(c.catchLoc,!0)}else{if(!d)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return f(c.finallyLoc)}}}},abrupt:function(o,i){for(var f=this.tryEntries.length-1;f>=0;--f){var p=this.tryEntries[f];if(p.tryLoc<=this.prev&&e.call(p,"finallyLoc")&&this.prev<p.finallyLoc){var c=p;break}}c&&(o==="break"||o==="continue")&&c.tryLoc<=i&&i<=c.finallyLoc&&(c=null);var y=c?c.completion:{};return y.type=o,y.arg=i,c?(this.method="next",this.next=c.finallyLoc,g):this.complete(y)},complete:function(o,i){if(o.type==="throw")throw o.arg;return o.type==="break"||o.type==="continue"?this.next=o.arg:o.type==="return"?(this.rval=this.arg=o.arg,this.method="return",this.next="end"):o.type==="normal"&&i&&(this.next=i),g},finish:function(o){for(var i=this.tryEntries.length-1;i>=0;--i){var f=this.tryEntries[i];if(f.finallyLoc===o)return this.complete(f.completion,f.afterLoc),z(f),g}},catch:function(o){for(var i=this.tryEntries.length-1;i>=0;--i){var f=this.tryEntries[i];if(f.tryLoc===o){var p=f.completion;if(p.type==="throw"){var c=p.arg;z(f)}return c}}throw new Error("illegal catch attempt")},delegateYield:function(o,i,f){return this.delegate={iterator:J(o),resultName:i,nextLoc:f},this.method==="next"&&(this.arg=void 0),g}},r}function or(r,t,e,n,u,s,h){try{var b=r[s](h),l=b.value}catch(_){e(_);return}b.done?t(l):Promise.resolve(l).then(n,u)}function ct(r){return function(){var t=this,e=arguments;return new Promise(function(n,u){var s=r.apply(t,e);function h(l){or(s,n,u,h,b,"next",l)}function b(l){or(s,n,u,h,b,"throw",l)}h(void 0)})}}function pt(r){return mr(r)||gr(r)||V(r)||_r()}function lt(r){if(r==null)throw new TypeError("Cannot destructure "+r)}var q={},Mr={get exports(){return q},set exports(r){q=r}},ir;function yt(){return ir||(ir=1,function(r){function t(e){return e&&e.__esModule?e:{default:e}}r.exports=t,r.exports.__esModule=!0,r.exports.default=r.exports}(Mr)),q}var R={},Cr={get exports(){return R},set exports(r){R=r}},k={},Nr={get exports(){return k},set exports(r){k=r}},M={},Dr={get exports(){return M},set exports(r){M=r}},ar;function wr(){return ar||(ar=1,function(r){function t(e,n){(n==null||n>e.length)&&(n=e.length);for(var u=0,s=new Array(n);u<n;u++)s[u]=e[u];return s}r.exports=t,r.exports.__esModule=!0,r.exports.default=r.exports}(Dr)),M}var ur;function Gr(){return ur||(ur=1,function(r){var t=wr();function e(n){if(Array.isArray(n))return t(n)}r.exports=e,r.exports.__esModule=!0,r.exports.default=r.exports}(Nr)),k}var C={},Wr={get exports(){return C},set exports(r){C=r}},fr;function Hr(){return fr||(fr=1,function(r){function t(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}r.exports=t,r.exports.__esModule=!0,r.exports.default=r.exports}(Wr)),C}var N={},Kr={get exports(){return N},set exports(r){N=r}},sr;function Ur(){return sr||(sr=1,function(r){var t=wr();function e(n,u){if(n){if(typeof n=="string")return t(n,u);var s=Object.prototype.toString.call(n).slice(8,-1);if(s==="Object"&&n.constructor&&(s=n.constructor.name),s==="Map"||s==="Set")return Array.from(n);if(s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return t(n,u)}}r.exports=e,r.exports.__esModule=!0,r.exports.default=r.exports}(Kr)),N}var D={},$r={get exports(){return D},set exports(r){D=r}},cr;function Yr(){return cr||(cr=1,function(r){function t(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}r.exports=t,r.exports.__esModule=!0,r.exports.default=r.exports}($r)),D}var pr;function ht(){return pr||(pr=1,function(r){var t=Gr(),e=Hr(),n=Ur(),u=Yr();function s(h){return t(h)||e(h)||n(h)||u()}r.exports=s,r.exports.__esModule=!0,r.exports.default=r.exports}(Cr)),R}var G={},Br={get exports(){return G},set exports(r){G=r}},W={},zr={get exports(){return W},set exports(r){W=r}},H={},Fr={get exports(){return H},set exports(r){H=r}},lr;function xr(){return lr||(lr=1,function(r){function t(e){return r.exports=t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},r.exports.__esModule=!0,r.exports.default=r.exports,t(e)}r.exports=t,r.exports.__esModule=!0,r.exports.default=r.exports}(Fr)),H}var K={},Jr={get exports(){return K},set exports(r){K=r}},yr;function Qr(){return yr||(yr=1,function(r){var t=xr().default;function e(n,u){if(t(n)!=="object"||n===null)return n;var s=n[Symbol.toPrimitive];if(s!==void 0){var h=s.call(n,u||"default");if(t(h)!=="object")return h;throw new TypeError("@@toPrimitive must return a primitive value.")}return(u==="string"?String:Number)(n)}r.exports=e,r.exports.__esModule=!0,r.exports.default=r.exports}(Jr)),K}var hr;function Vr(){return hr||(hr=1,function(r){var t=xr().default,e=Qr();function n(u){var s=e(u,"string");return t(s)==="symbol"?s:String(s)}r.exports=n,r.exports.__esModule=!0,r.exports.default=r.exports}(zr)),W}var vr;function vt(){return vr||(vr=1,function(r){var t=Vr();function e(n,u,s){return u=t(u),u in n?Object.defineProperty(n,u,{value:s,enumerable:!0,configurable:!0,writable:!0}):n[u]=s,n}r.exports=e,r.exports.__esModule=!0,r.exports.default=r.exports}(Br)),G}var U={},Xr={get exports(){return U},set exports(r){U=r}},dr;function dt(){return dr||(dr=1,function(r){function t(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}r.exports=t,r.exports.__esModule=!0,r.exports.default=r.exports}(Xr)),U}function bt(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,I(r,t)}export{ot as _,nt as a,Ar as b,ft as c,et as d,ut as e,st as f,P as g,nr as h,rt as i,tt as j,Zr as k,it as l,at as m,ct as n,kr as o,jr as p,pt as q,lt as r,bt as s,yt as t,ht as u,vt as v,dt as w,xr as x};
