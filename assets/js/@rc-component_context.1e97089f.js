import{f as x,h as b}from"./@babel_runtime.e25cf7a0.js";import{d as E,e as R,i as S,s as p}from"./rc-util.716ca57d.js";import{r as e}from"./react.e58b2294.js";import{r as I}from"./react-dom.6884196c.js";import"./react-is.6aa2a333.js";function $(r){var t=e.createContext(void 0),u=function(i){var n=i.value,c=i.children,o=e.useRef(n);o.current=n;var s=e.useState(function(){return{getValue:function(){return o.current},listeners:new Set}}),m=x(s,1),v=m[0];return R(function(){I.unstable_batchedUpdates(function(){v.listeners.forEach(function(f){f(n)})})},[n]),e.createElement(t.Provider,{value:v},c)};return{Context:t,Provider:u,defaultValue:r}}function w(r,t){var u=E(typeof t=="function"?t:function(f){if(t===void 0)return f;if(!Array.isArray(t))return f[t];var l={};return t.forEach(function(d){l[d]=f[d]}),l}),a=e.useContext(r==null?void 0:r.Context),i=a||{},n=i.listeners,c=i.getValue,o=e.useRef();o.current=u(a?c():r==null?void 0:r.defaultValue);var s=e.useState({}),m=x(s,2),v=m[1];return R(function(){if(!a)return;function f(l){var d=u(l);S(o.current,d,!0)||v({})}return n.add(f),function(){n.delete(f)}},[a]),o.current}var C=e.createContext(0);function P(){return e.useContext(C)}function U(r,t){var u=p(r),a=function(n,c){var o=u?{ref:c}:{},s=e.useRef(0),m=e.useRef(n);return(!t||t(m.current,n))&&(s.current+=1),m.current=n,e.createElement(C.Provider,{value:s.current},e.createElement(r,b({},n,o)))};return u?e.forwardRef(a):a}function j(r,t){var u=p(r),a=function(n,c){var o=u?{ref:c}:{};return P(),e.createElement(r,b({},n,o))};return u?e.memo(e.forwardRef(a),t):e.memo(a,t)}export{w as a,$ as c,U as m,j as r,P as u};