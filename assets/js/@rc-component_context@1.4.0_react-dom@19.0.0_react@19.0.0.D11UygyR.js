import{h as e,k as r}from"./@babel_runtime@7.26.9.Bt-OOtGO.js";import{a as t,e as n,i as u,s as a}from"./rc-util@5.44.4_react-dom@19.0.0_react@19.0.0.iKXSQ1s6.js";import{r as o}from"./react@19.0.0.C56gzhl-.js";import{r as c}from"./react-dom@19.0.0_react@19.0.0.BNMklCqC.js";function i(r){var n=o.createContext(void 0);return{Context:n,Provider:function(r){var u=r.value,a=r.children,i=o.useRef(u);i.current=u;var f=o.useState((function(){return{getValue:function(){return i.current},listeners:new Set}})),s=e(f,1)[0];return t((function(){c.unstable_batchedUpdates((function(){s.listeners.forEach((function(e){e(u)}))}))}),[u]),o.createElement(n.Provider,{value:s},a)},defaultValue:r}}function f(r,a){var c=n("function"==typeof a?a:function(e){if(void 0===a)return e;if(!Array.isArray(a))return e[a];var r={};return a.forEach((function(t){r[t]=e[t]})),r}),i=o.useContext(null==r?void 0:r.Context),f=i||{},s=f.listeners,l=f.getValue,m=o.useRef();m.current=c(i?l():null==r?void 0:r.defaultValue);var v=o.useState({}),d=e(v,2)[1];return t((function(){if(i)return s.add(e),function(){s.delete(e)};function e(e){var r=c(e);u(m.current,r,!0)||d({})}}),[i]),m.current}function s(){var e=o.createContext(null);function t(){return o.useContext(e)}return{makeImmutable:function(n,u){var c=a(n),i=function(a,i){var f=c?{ref:i}:{},s=o.useRef(0),l=o.useRef(a);return null!==t()?o.createElement(n,r({},a,f)):(u&&!u(l.current,a)||(s.current+=1),l.current=a,o.createElement(e.Provider,{value:s.current},o.createElement(n,r({},a,f))))};return c?o.forwardRef(i):i},responseImmutable:function(e,n){var u=a(e),c=function(n,a){var c=u?{ref:a}:{};return t(),o.createElement(e,r({},n,c))};return u?o.memo(o.forwardRef(c),n):o.memo(c,n)},useImmutableMark:t}}export{i as a,s as c,f as u};
