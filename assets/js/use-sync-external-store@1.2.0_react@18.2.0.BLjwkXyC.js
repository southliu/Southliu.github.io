import{r}from"./react@18.2.0.BNo5BOs9.js";var e={exports:{}},u={},n=r;var t="function"==typeof Object.is?Object.is:function(r,e){return r===e&&(0!==r||1/r==1/e)||r!=r&&e!=e},a=n.useSyncExternalStore,o=n.useRef,i=n.useEffect,l=n.useMemo,c=n.useDebugValue;u.useSyncExternalStoreWithSelector=function(r,e,u,n,f){var s=o(null);if(null===s.current){var v={hasValue:!1,value:null};s.current=v}else v=s.current;s=l((function(){function r(r){if(!i){if(i=!0,a=r,r=n(r),void 0!==f&&v.hasValue){var e=v.value;if(f(e,r))return o=e}return o=r}if(e=o,t(a,r))return e;var u=n(r);return void 0!==f&&f(e,u)?e:(a=r,o=u)}var a,o,i=!1,l=void 0===u?null:u;return[function(){return r(e())},null===l?void 0:function(){return r(l())}]}),[e,u,n,f]);var p=a(r,s[0],s[1]);return i((function(){v.hasValue=!0,v.value=p}),[p]),c(p),p},e.exports=u;var f=e.exports;export{f as w};
