var L={exports:{}},r={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o=typeof Symbol=="function"&&Symbol.for,h=o?Symbol.for("react.element"):60103,F=o?Symbol.for("react.portal"):60106,s=o?Symbol.for("react.fragment"):60107,u=o?Symbol.for("react.strict_mode"):60108,i=o?Symbol.for("react.profiler"):60114,y=o?Symbol.for("react.provider"):60109,l=o?Symbol.for("react.context"):60110,z=o?Symbol.for("react.async_mode"):60111,m=o?Symbol.for("react.concurrent_mode"):60111,p=o?Symbol.for("react.forward_ref"):60112,$=o?Symbol.for("react.suspense"):60113,R=o?Symbol.for("react.suspense_list"):60120,S=o?Symbol.for("react.memo"):60115,a=o?Symbol.for("react.lazy"):60116,k=o?Symbol.for("react.block"):60121,q=o?Symbol.for("react.fundamental"):60117,O=o?Symbol.for("react.responder"):60118,T=o?Symbol.for("react.scope"):60119;function n(e){if(typeof e=="object"&&e!==null){var f=e.$$typeof;switch(f){case h:switch(e=e.type,e){case z:case m:case s:case i:case u:case $:return e;default:switch(e=e&&e.$$typeof,e){case l:case p:case a:case S:case y:return e;default:return f}}case F:return f}}}function I(e){return n(e)===m}r.AsyncMode=z;r.ConcurrentMode=m;r.ContextConsumer=l;r.ContextProvider=y;r.Element=h;r.ForwardRef=p;r.Fragment=s;r.Lazy=a;r.Memo=S;r.Portal=F;r.Profiler=i;r.StrictMode=u;r.Suspense=$;r.isAsyncMode=function(e){return I(e)||n(e)===z};r.isConcurrentMode=I;r.isContextConsumer=function(e){return n(e)===l};r.isContextProvider=function(e){return n(e)===y};r.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===h};r.isForwardRef=function(e){return n(e)===p};r.isFragment=function(e){return n(e)===s};r.isLazy=function(e){return n(e)===a};r.isMemo=function(e){return n(e)===S};r.isPortal=function(e){return n(e)===F};r.isProfiler=function(e){return n(e)===i};r.isStrictMode=function(e){return n(e)===u};r.isSuspense=function(e){return n(e)===$};r.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===s||e===m||e===i||e===u||e===$||e===R||typeof e=="object"&&e!==null&&(e.$$typeof===a||e.$$typeof===S||e.$$typeof===y||e.$$typeof===l||e.$$typeof===p||e.$$typeof===q||e.$$typeof===O||e.$$typeof===T||e.$$typeof===k)};r.typeOf=n;L.exports=r;var D=L.exports,t={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E=Symbol.for("react.element"),j=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),C=Symbol.for("react.context"),V=Symbol.for("react.server_context"),M=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),_=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),B=Symbol.for("react.offscreen"),A;A=Symbol.for("react.module.reference");function c(e){if(typeof e=="object"&&e!==null){var f=e.$$typeof;switch(f){case E:switch(e=e.type,e){case b:case v:case d:case w:case _:return e;default:switch(e=e&&e.$$typeof,e){case V:case C:case M:case g:case P:case x:return e;default:return f}}case j:return f}}}t.ContextConsumer=C;t.ContextProvider=x;t.Element=E;t.ForwardRef=M;t.Fragment=b;t.Lazy=g;t.Memo=P;t.Portal=j;t.Profiler=v;t.StrictMode=d;t.Suspense=w;t.SuspenseList=_;t.isAsyncMode=function(){return!1};t.isConcurrentMode=function(){return!1};t.isContextConsumer=function(e){return c(e)===C};t.isContextProvider=function(e){return c(e)===x};t.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===E};t.isForwardRef=function(e){return c(e)===M};t.isFragment=function(e){return c(e)===b};t.isLazy=function(e){return c(e)===g};t.isMemo=function(e){return c(e)===P};t.isPortal=function(e){return c(e)===j};t.isProfiler=function(e){return c(e)===v};t.isStrictMode=function(e){return c(e)===d};t.isSuspense=function(e){return c(e)===w};t.isSuspenseList=function(e){return c(e)===_};t.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===b||e===v||e===d||e===w||e===_||e===B||typeof e=="object"&&e!==null&&(e.$$typeof===g||e.$$typeof===P||e.$$typeof===x||e.$$typeof===C||e.$$typeof===M||e.$$typeof===A||e.getModuleId!==void 0)};t.typeOf=c;export{D as r};