import{N as U,t as L,f as X,r as z}from"./immer@9.0.16-e2cce9e7.js";import{c as B,a as Y,b as H,d as I}from"./redux@4.2.0-49e9e73d.js";import{t as k}from"./redux-thunk@2.4.2_redux@4.2.0-ef899f4c.js";var J=globalThis&&globalThis.__extends||function(){var e=function(t,r){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(n[o]=i[o])},e(t,r)};return function(t,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");e(t,r);function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}(),K=globalThis&&globalThis.__generator||function(e,t){var r={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},n,i,o,v;return v={next:h(0),throw:h(1),return:h(2)},typeof Symbol=="function"&&(v[Symbol.iterator]=function(){return this}),v;function h(a){return function(c){return s([a,c])}}function s(a){if(n)throw new TypeError("Generator is already executing.");for(;r;)try{if(n=1,i&&(o=a[0]&2?i.return:a[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,a[1])).done)return o;switch(i=0,o&&(a=[a[0]&2,o.value]),a[0]){case 0:case 1:o=a;break;case 4:return r.label++,{value:a[1],done:!1};case 5:r.label++,i=a[1],a=[0];continue;case 7:a=r.ops.pop(),r.trys.pop();continue;default:if(o=r.trys,!(o=o.length>0&&o[o.length-1])&&(a[0]===6||a[0]===2)){r=0;continue}if(a[0]===3&&(!o||a[1]>o[0]&&a[1]<o[3])){r.label=a[1];break}if(a[0]===6&&r.label<o[1]){r.label=o[1],o=a;break}if(o&&r.label<o[2]){r.label=o[2],r.ops.push(a);break}o[2]&&r.ops.pop(),r.trys.pop();continue}a=t.call(e,r)}catch(c){a=[6,c],i=0}finally{n=o=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}},C=globalThis&&globalThis.__spreadArray||function(e,t){for(var r=0,n=t.length,i=e.length;r<n;r++,i++)e[i]=t[r];return e},Q=Object.defineProperty,Z=Object.defineProperties,$=Object.getOwnPropertyDescriptors,W=Object.getOwnPropertySymbols,ee=Object.prototype.hasOwnProperty,re=Object.prototype.propertyIsEnumerable,V=function(e,t,r){return t in e?Q(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r},O=function(e,t){for(var r in t||(t={}))ee.call(t,r)&&V(e,r,t[r]);if(W)for(var n=0,i=W(t);n<i.length;n++){var r=i[n];re.call(t,r)&&V(e,r,t[r])}return e},T=function(e,t){return Z(e,$(t))},te=function(e,t,r){return new Promise(function(n,i){var o=function(s){try{h(r.next(s))}catch(a){i(a)}},v=function(s){try{h(r.throw(s))}catch(a){i(a)}},h=function(s){return s.done?n(s.value):Promise.resolve(s.value).then(o,v)};h((r=r.apply(e,t)).next())})},ne=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?I:I.apply(null,arguments)};function ae(e){if(typeof e!="object"||e===null)return!1;var t=Object.getPrototypeOf(e);if(t===null)return!0;for(var r=t;Object.getPrototypeOf(r)!==null;)r=Object.getPrototypeOf(r);return t===r}var oe=function(e){J(t,e);function t(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];var i=e.apply(this,r)||this;return Object.setPrototypeOf(i,t.prototype),i}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return e.prototype.concat.apply(this,r)},t.prototype.prepend=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return r.length===1&&Array.isArray(r[0])?new(t.bind.apply(t,C([void 0],r[0].concat(this)))):new(t.bind.apply(t,C([void 0],r.concat(this))))},t}(Array);function D(e){return L(e)?X(e,function(){}):e}function ie(e){return typeof e=="boolean"}function ue(){return function(t){return ce(t)}}function ce(e){e===void 0&&(e={});var t=e.thunk,r=t===void 0?!0:t;e.immutableCheck,e.serializableCheck;var n=new oe;return r&&(ie(r)?n.push(k):n.push(k.withExtraArgument(r.extraArgument))),n}var fe=!0;function Oe(e){var t=ue(),r=e||{},n=r.reducer,i=n===void 0?void 0:n,o=r.middleware,v=o===void 0?t():o,h=r.devTools,s=h===void 0?!0:h,a=r.preloadedState,c=a===void 0?void 0:a,f=r.enhancers,d=f===void 0?void 0:f,l;if(typeof i=="function")l=i;else if(ae(i))l=B(i);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var u=v;typeof u=="function"&&(u=u(t));var y=Y.apply(void 0,u),g=I;s&&(g=ne(O({trace:!fe},typeof s=="object"&&s)));var p=[y];Array.isArray(d)?p=C([y],d):typeof d=="function"&&(p=d(p));var m=g.apply(void 0,p);return H(l,c,m)}function j(e,t){function r(){for(var n=[],i=0;i<arguments.length;i++)n[i]=arguments[i];if(t){var o=t.apply(void 0,n);if(!o)throw new Error("prepareAction did not return an object");return O(O({type:e,payload:o.payload},"meta"in o&&{meta:o.meta}),"error"in o&&{error:o.error})}return{type:e,payload:n[0]}}return r.toString=function(){return""+e},r.type=e,r.match=function(n){return n.type===e},r}function F(e){var t={},r=[],n,i={addCase:function(o,v){var h=typeof o=="string"?o:o.type;if(h in t)throw new Error("addCase cannot be called with two reducers for the same action type");return t[h]=v,i},addMatcher:function(o,v){return r.push({matcher:o,reducer:v}),i},addDefaultCase:function(o){return n=o,i}};return e(i),[t,r,n]}function le(e){return typeof e=="function"}function de(e,t,r,n){r===void 0&&(r=[]);var i=typeof t=="function"?F(t):[t,r,n],o=i[0],v=i[1],h=i[2],s;if(le(e))s=function(){return D(e())};else{var a=D(e);s=function(){return a}}function c(f,d){f===void 0&&(f=s());var l=C([o[d.type]],v.filter(function(u){var y=u.matcher;return y(d)}).map(function(u){var y=u.reducer;return y}));return l.filter(function(u){return!!u}).length===0&&(l=[h]),l.reduce(function(u,y){if(y)if(z(u)){var g=u,p=y(g,d);return p===void 0?u:p}else{if(L(u))return X(u,function(m){return y(m,d)});var p=y(u,d);if(p===void 0){if(u===null)return u;throw Error("A case reducer on a non-draftable value must not return undefined")}return p}return u},f)}return c.getInitialState=s,c}function se(e,t){return e+"/"+t}function je(e){var t=e.name;if(!t)throw new Error("`name` is a required option for createSlice");typeof process<"u";var r=typeof e.initialState=="function"?e.initialState:D(e.initialState),n=e.reducers||{},i=Object.keys(n),o={},v={},h={};i.forEach(function(c){var f=n[c],d=se(t,c),l,u;"reducer"in f?(l=f.reducer,u=f.prepare):l=f,o[c]=l,v[d]=l,h[c]=u?j(d,u):j(d)});function s(){var c=typeof e.extraReducers=="function"?F(e.extraReducers):[e.extraReducers],f=c[0],d=f===void 0?{}:f,l=c[1],u=l===void 0?[]:l,y=c[2],g=y===void 0?void 0:y,p=O(O({},d),v);return de(r,function(m){for(var P in p)m.addCase(P,p[P]);for(var w=0,_=u;w<_.length;w++){var S=_[w];m.addMatcher(S.matcher,S.reducer)}g&&m.addDefaultCase(g)})}var a;return{name:t,reducer:function(c,f){return a||(a=s()),a(c,f)},actions:h,caseReducers:o,getInitialState:function(){return a||(a=s()),a.getInitialState()}}}var ve="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",he=function(e){e===void 0&&(e=21);for(var t="",r=e;r--;)t+=ve[Math.random()*64|0];return t},ye=["name","message","stack","code"],M=function(){function e(t,r){this.payload=t,this.meta=r}return e}(),G=function(){function e(t,r){this.payload=t,this.meta=r}return e}(),pe=function(e){if(typeof e=="object"&&e!==null){for(var t={},r=0,n=ye;r<n.length;r++){var i=n[r];typeof e[i]=="string"&&(t[i]=e[i])}return t}return{message:String(e)}};(function(){function e(t,r,n){var i=j(t+"/fulfilled",function(a,c,f,d){return{payload:a,meta:T(O({},d||{}),{arg:f,requestId:c,requestStatus:"fulfilled"})}}),o=j(t+"/pending",function(a,c,f){return{payload:void 0,meta:T(O({},f||{}),{arg:c,requestId:a,requestStatus:"pending"})}}),v=j(t+"/rejected",function(a,c,f,d,l){return{payload:d,error:(n&&n.serializeError||pe)(a||"Rejected"),meta:T(O({},l||{}),{arg:f,requestId:c,rejectedWithValue:!!d,requestStatus:"rejected",aborted:(a==null?void 0:a.name)==="AbortError",condition:(a==null?void 0:a.name)==="ConditionError"})}}),h=typeof AbortController<"u"?AbortController:function(){function a(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return a.prototype.abort=function(){},a}();function s(a){return function(c,f,d){var l=n!=null&&n.idGenerator?n.idGenerator(a):he(),u=new h,y;function g(m){y=m,u.abort()}var p=function(){return te(this,null,function(){var m,P,w,_,S,R,x;return K(this,function(E){switch(E.label){case 0:return E.trys.push([0,4,,5]),_=(m=n==null?void 0:n.condition)==null?void 0:m.call(n,a,{getState:f,extra:d}),be(_)?[4,_]:[3,2];case 1:_=E.sent(),E.label=2;case 2:if(_===!1||u.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return S=new Promise(function(b,A){return u.signal.addEventListener("abort",function(){return A({name:"AbortError",message:y||"Aborted"})})}),c(o(l,a,(P=n==null?void 0:n.getPendingMeta)==null?void 0:P.call(n,{requestId:l,arg:a},{getState:f,extra:d}))),[4,Promise.race([S,Promise.resolve(r(a,{dispatch:c,getState:f,extra:d,requestId:l,signal:u.signal,abort:g,rejectWithValue:function(b,A){return new M(b,A)},fulfillWithValue:function(b,A){return new G(b,A)}})).then(function(b){if(b instanceof M)throw b;return b instanceof G?i(b.payload,l,a,b.meta):i(b,l,a)})])];case 3:return w=E.sent(),[3,5];case 4:return R=E.sent(),w=R instanceof M?v(null,l,a,R.payload,R.meta):v(R,l,a),[3,5];case 5:return x=n&&!n.dispatchConditionRejection&&v.match(w)&&w.meta.condition,x||c(w),[2,w]}})})}();return Object.assign(p,{abort:g,requestId:l,arg:a,unwrap:function(){return p.then(me)}})}}return Object.assign(s,{pending:o,rejected:v,fulfilled:i,typePrefix:t})}return e.withTypes=function(){return e},e})();function me(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function be(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var q="listenerMiddleware";j(q+"/add");j(q+"/removeAll");j(q+"/remove");var N;typeof queueMicrotask=="function"&&queueMicrotask.bind(typeof window<"u"?window:typeof global<"u"?global:globalThis);U();export{Oe as a,je as c};
