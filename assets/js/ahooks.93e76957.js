import{r as n}from"./react.a7da97a2.js";import{d as r,t}from"./lodash.f155d9e4.js";import"./dayjs.f9062693.js";import{_ as u,a as e}from"./tslib.c9a5fa8e.js";import"./resize-observer-polyfill.ad543aa3.js";function o(r){var t=n.useRef(r);return t.current=r,t}const c=function(r){var t=o(r);n.useEffect((function(){return function(){t.current()}}),[])};function a(t,a){var l;var i=o(t),s=null!==(l=null==a?void 0:a.wait)&&void 0!==l?l:1e3,f=n.useMemo((function(){return r((function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return i.current.apply(i,u([],e(n),!1))}),s,a)}),[]);return c((function(){f.cancel()})),{run:f,cancel:f.cancel,flush:f.flush}}function l(r,a){var l;var i=o(r),s=null!==(l=null==a?void 0:a.wait)&&void 0!==l?l:1e3,f=n.useMemo((function(){return t((function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return i.current.apply(i,u([],e(n),!1))}),s,a)}),[]);return c((function(){f.cancel()})),{run:f,cancel:f.cancel,flush:f.flush}}export{l as a,a as u};