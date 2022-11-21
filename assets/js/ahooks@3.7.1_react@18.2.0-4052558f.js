import{r as c}from"./react@18.2.0-44b760b7.js";import{d,t as h}from"./lodash@4.17.21-d8256171.js";import"./resize-observer-polyfill@1.5.1-1e2b0dc8.js";var i=function(r){return typeof r=="function"},m=!1;const f=m;function s(e){var r=c.exports.useRef(e);return r.current=e,r}var g=function(r){f&&(i(r)||console.error("useUnmount expected parameter is a function, got "+typeof r));var t=s(r);c.exports.useEffect(function(){return function(){t.current()}},[])};const v=g;var p=globalThis&&globalThis.__read||function(e,r){var t=typeof Symbol=="function"&&e[Symbol.iterator];if(!t)return e;var a=t.call(e),o,n=[],u;try{for(;(r===void 0||r-- >0)&&!(o=a.next()).done;)n.push(o.value)}catch(l){u={error:l}}finally{try{o&&!o.done&&(t=a.return)&&t.call(a)}finally{if(u)throw u.error}}return n},y=globalThis&&globalThis.__spread||function(){for(var e=[],r=0;r<arguments.length;r++)e=e.concat(p(arguments[r]));return e};function F(e,r){var t;f&&(i(e)||console.error("useDebounceFn expected parameter is a function, got "+typeof e));var a=s(e),o=(t=r==null?void 0:r.wait)!==null&&t!==void 0?t:1e3,n=c.exports.useMemo(function(){return d(function(){for(var u=[],l=0;l<arguments.length;l++)u[l]=arguments[l];return a.current.apply(a,y(u))},o,r)},[]);return v(function(){n.cancel()}),{run:n,cancel:n.cancel,flush:n.flush}}var b=globalThis&&globalThis.__read||function(e,r){var t=typeof Symbol=="function"&&e[Symbol.iterator];if(!t)return e;var a=t.call(e),o,n=[],u;try{for(;(r===void 0||r-- >0)&&!(o=a.next()).done;)n.push(o.value)}catch(l){u={error:l}}finally{try{o&&!o.done&&(t=a.return)&&t.call(a)}finally{if(u)throw u.error}}return n},_=globalThis&&globalThis.__spread||function(){for(var e=[],r=0;r<arguments.length;r++)e=e.concat(b(arguments[r]));return e};function D(e,r){var t;f&&(i(e)||console.error("useThrottleFn expected parameter is a function, got "+typeof e));var a=s(e),o=(t=r==null?void 0:r.wait)!==null&&t!==void 0?t:1e3,n=c.exports.useMemo(function(){return h(function(){for(var u=[],l=0;l<arguments.length;l++)u[l]=arguments[l];return a.current.apply(a,_(u))},o,r)},[]);return v(function(){n.cancel()}),{run:n,cancel:n.cancel,flush:n.flush}}export{D as a,F as u};
