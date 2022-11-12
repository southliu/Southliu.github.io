import{a as x}from"./react@18.2.0-9cdefec6.js";var w={exports:{}},E={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f=x();function V(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var j=typeof Object.is=="function"?Object.is:V,O=f.useState,_=f.useEffect,q=f.useLayoutEffect,g=f.useDebugValue;function k(e,t){var r=t(),i=O({inst:{value:r,getSnapshot:t}}),n=i[0].inst,u=i[1];return q(function(){n.value=r,n.getSnapshot=t,S(n)&&u({inst:n})},[e,r,t]),_(function(){return S(n)&&u({inst:n}),e(function(){S(n)&&u({inst:n})})},[e]),g(r),r}function S(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!j(e,r)}catch{return!0}}function D(e,t){return t()}var R=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?D:k;E.useSyncExternalStore=f.useSyncExternalStore!==void 0?f.useSyncExternalStore:R;(function(e){e.exports=E})(w);var L={exports:{}},$={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v=x(),M=w.exports;function W(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var z=typeof Object.is=="function"?Object.is:W,A=M.useSyncExternalStore,B=v.useRef,C=v.useEffect,F=v.useMemo,G=v.useDebugValue;$.useSyncExternalStoreWithSelector=function(e,t,r,i,n){var u=B(null);if(u.current===null){var c={hasValue:!1,value:null};u.current=c}else c=u.current;u=F(function(){function p(o){if(!h){if(h=!0,d=o,o=i(o),n!==void 0&&c.hasValue){var s=c.value;if(n(s,o))return l=s}return l=o}if(s=l,z(d,o))return s;var m=i(o);return n!==void 0&&n(s,m)?s:(d=o,l=m)}var h=!1,d,l,y=r===void 0?null:r;return[function(){return p(t())},y===null?void 0:function(){return p(y())}]},[t,r,i,n]);var a=A(e,u[0],u[1]);return C(function(){c.hasValue=!0,c.value=a},[a]),G(a),a};(function(e){e.exports=$})(L);export{L as w};
