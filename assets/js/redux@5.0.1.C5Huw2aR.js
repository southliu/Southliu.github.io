function t(t){return`Minified Redux error #${t}; visit https://redux.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `}var r=(()=>"function"==typeof Symbol&&Symbol.observable||"@@observable")(),e=()=>Math.random().toString(36).substring(7).split("").join("."),n={INIT:`@@redux/INIT${e()}`,REPLACE:`@@redux/REPLACE${e()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${e()}`};function o(t){if("object"!=typeof t||null===t)return!1;let r=t;for(;null!==Object.getPrototypeOf(r);)r=Object.getPrototypeOf(r);return Object.getPrototypeOf(t)===r||null===Object.getPrototypeOf(t)}function i(e,f,c){if("function"!=typeof e)throw new Error(t(2));if("function"==typeof f&&"function"==typeof c||"function"==typeof c&&"function"==typeof arguments[3])throw new Error(t(0));if("function"==typeof f&&void 0===c&&(c=f,f=void 0),void 0!==c){if("function"!=typeof c)throw new Error(t(1));return c(i)(e,f)}let u=e,s=f,p=new Map,h=p,l=0,w=!1;function y(){h===p&&(h=new Map,p.forEach(((t,r)=>{h.set(r,t)})))}function E(){if(w)throw new Error(t(3));return s}function a(r){if("function"!=typeof r)throw new Error(t(4));if(w)throw new Error(t(5));let e=!0;y();const n=l++;return h.set(n,r),function(){if(e){if(w)throw new Error(t(6));e=!1,y(),h.delete(n),p=null}}}function d(r){if(!o(r))throw new Error(t(7));if(void 0===r.type)throw new Error(t(8));if("string"!=typeof r.type)throw new Error(t(17));if(w)throw new Error(t(9));try{w=!0,s=u(s,r)}finally{w=!1}return(p=h).forEach((t=>{t()})),r}d({type:n.INIT});return{dispatch:d,subscribe:a,getState:E,replaceReducer:function(r){if("function"!=typeof r)throw new Error(t(10));u=r,d({type:n.REPLACE})},[r]:function(){const e=a;return{subscribe(r){if("object"!=typeof r||null===r)throw new Error(t(11));function n(){const t=r;t.next&&t.next(E())}n();return{unsubscribe:e(n)}},[r](){return this}}}}}function f(r){const e=Object.keys(r),o={};for(let t=0;t<e.length;t++){const n=e[t];"function"==typeof r[n]&&(o[n]=r[n])}const i=Object.keys(o);let f;try{!function(r){Object.keys(r).forEach((e=>{const o=r[e];if(void 0===o(void 0,{type:n.INIT}))throw new Error(t(12));if(void 0===o(void 0,{type:n.PROBE_UNKNOWN_ACTION()}))throw new Error(t(13))}))}(o)}catch(c){f=c}return function(r={},e){if(f)throw f;let n=!1;const c={};for(let f=0;f<i.length;f++){const u=i[f],s=o[u],p=r[u],h=s(p,e);if(void 0===h)throw e&&e.type,new Error(t(14));c[u]=h,n=n||h!==p}return n=n||i.length!==Object.keys(r).length,n?c:r}}function c(...t){return 0===t.length?t=>t:1===t.length?t[0]:t.reduce(((t,r)=>(...e)=>t(r(...e))))}function u(...r){return e=>(n,o)=>{const i=e(n,o);let f=()=>{throw new Error(t(15))};const u={getState:i.getState,dispatch:(t,...r)=>f(t,...r)},s=r.map((t=>t(u)));return f=c(...s)(i.dispatch),{...i,dispatch:f}}}function s(t){return o(t)&&"type"in t&&"string"==typeof t.type}export{u as a,i as b,f as c,c as d,s as e,o as i};
