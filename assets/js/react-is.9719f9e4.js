var S={},G={get exports(){return S},set exports(e){S=e}},t={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var q;function H(){if(q)return t;q=1;var e=typeof Symbol=="function"&&Symbol.for,f=e?Symbol.for("react.element"):60103,h=e?Symbol.for("react.portal"):60106,s=e?Symbol.for("react.fragment"):60107,u=e?Symbol.for("react.strict_mode"):60108,i=e?Symbol.for("react.profiler"):60114,y=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,R=e?Symbol.for("react.async_mode"):60111,m=e?Symbol.for("react.concurrent_mode"):60111,p=e?Symbol.for("react.forward_ref"):60112,a=e?Symbol.for("react.suspense"):60113,O=e?Symbol.for("react.suspense_list"):60120,d=e?Symbol.for("react.memo"):60115,$=e?Symbol.for("react.lazy"):60116,T=e?Symbol.for("react.block"):60121,V=e?Symbol.for("react.fundamental"):60117,B=e?Symbol.for("react.responder"):60118,D=e?Symbol.for("react.scope"):60119;function n(r){if(typeof r=="object"&&r!==null){var E=r.$$typeof;switch(E){case f:switch(r=r.type,r){case R:case m:case s:case i:case u:case a:return r;default:switch(r=r&&r.$$typeof,r){case l:case p:case $:case d:case y:return r;default:return E}}case h:return E}}}function j(r){return n(r)===m}return t.AsyncMode=R,t.ConcurrentMode=m,t.ContextConsumer=l,t.ContextProvider=y,t.Element=f,t.ForwardRef=p,t.Fragment=s,t.Lazy=$,t.Memo=d,t.Portal=h,t.Profiler=i,t.StrictMode=u,t.Suspense=a,t.isAsyncMode=function(r){return j(r)||n(r)===R},t.isConcurrentMode=j,t.isContextConsumer=function(r){return n(r)===l},t.isContextProvider=function(r){return n(r)===y},t.isElement=function(r){return typeof r=="object"&&r!==null&&r.$$typeof===f},t.isForwardRef=function(r){return n(r)===p},t.isFragment=function(r){return n(r)===s},t.isLazy=function(r){return n(r)===$},t.isMemo=function(r){return n(r)===d},t.isPortal=function(r){return n(r)===h},t.isProfiler=function(r){return n(r)===i},t.isStrictMode=function(r){return n(r)===u},t.isSuspense=function(r){return n(r)===a},t.isValidElementType=function(r){return typeof r=="string"||typeof r=="function"||r===s||r===m||r===i||r===u||r===a||r===O||typeof r=="object"&&r!==null&&(r.$$typeof===$||r.$$typeof===d||r.$$typeof===y||r.$$typeof===l||r.$$typeof===p||r.$$typeof===V||r.$$typeof===B||r.$$typeof===D||r.$$typeof===T)},t.typeOf=n,t}var L;function J(){return L||(L=1,function(e){e.exports=H()}(G)),S}var U=J(),A={},K={get exports(){return A},set exports(e){A=e}},o={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var F=Symbol.for("react.element"),z=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),v=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),C=Symbol.for("react.context"),N=Symbol.for("react.server_context"),M=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),w=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),P=Symbol.for("react.lazy"),Q=Symbol.for("react.offscreen"),k;k=Symbol.for("react.module.reference");function c(e){if(typeof e=="object"&&e!==null){var f=e.$$typeof;switch(f){case F:switch(e=e.type,e){case b:case x:case v:case g:case w:return e;default:switch(e=e&&e.$$typeof,e){case N:case C:case M:case P:case I:case _:return e;default:return f}}case z:return f}}}o.ContextConsumer=C;o.ContextProvider=_;o.Element=F;o.ForwardRef=M;o.Fragment=b;o.Lazy=P;o.Memo=I;o.Portal=z;o.Profiler=x;o.StrictMode=v;o.Suspense=g;o.SuspenseList=w;o.isAsyncMode=function(){return!1};o.isConcurrentMode=function(){return!1};o.isContextConsumer=function(e){return c(e)===C};o.isContextProvider=function(e){return c(e)===_};o.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===F};o.isForwardRef=function(e){return c(e)===M};o.isFragment=function(e){return c(e)===b};o.isLazy=function(e){return c(e)===P};o.isMemo=function(e){return c(e)===I};o.isPortal=function(e){return c(e)===z};o.isProfiler=function(e){return c(e)===x};o.isStrictMode=function(e){return c(e)===v};o.isSuspense=function(e){return c(e)===g};o.isSuspenseList=function(e){return c(e)===w};o.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===b||e===x||e===v||e===g||e===w||e===Q||typeof e=="object"&&e!==null&&(e.$$typeof===P||e.$$typeof===I||e.$$typeof===_||e.$$typeof===C||e.$$typeof===M||e.$$typeof===k||e.getModuleId!==void 0)};o.typeOf=c;(function(e){e.exports=o})(K);export{U as a,J as r};
