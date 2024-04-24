import{R as e,e as t}from"./react@18.2.0.BNo5BOs9.js";import{w as n}from"./use-sync-external-store@1.2.0_react@18.2.0.BLjwkXyC.js";var r="default"in e?t:e,o=Symbol.for("react-redux-context"),i="undefined"!=typeof globalThis?globalThis:{};function s(){if(!r.createContext)return{};const e=i[o]??(i[o]=new Map);let t=e.get(r.createContext);return t||(t=r.createContext(null),e.set(r.createContext,t)),t}var u=s();function c(e=u){return function(){return r.useContext(e)}}var a=c(),l=()=>{throw new Error("uSES not initialized!")},f=(e,t)=>e===t;function b(e=u){const t=e===u?a:c(e),n=(e,n={})=>{const{equalityFn:o=f,devModeChecks:i={}}="function"==typeof n?{equalityFn:n}:n,{store:s,subscription:u,getServerState:c,stabilityCheck:a,identityFunctionCheck:b}=t();r.useRef(!0);const d=r.useCallback({[e.name]:t=>e(t)}[e.name],[e,a,i.stabilityCheck]),y=l(u.addNestedSub,s.getState,c||s.getState,d,o);return r.useDebugValue(y),y};return Object.assign(n,{withTypes:()=>n}),n}var d=b();var y={notify(){},get:()=>[]};var v=!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement)?r.useLayoutEffect:r.useEffect;var S=function({store:e,context:t,children:n,serverState:o,stabilityCheck:i="once",identityFunctionCheck:s="once"}){const c=r.useMemo((()=>{const t=function(e,t){let n,r=y,o=0,i=!1;function s(){a.onStateChange&&a.onStateChange()}function u(){o++,n||(n=t?t.addNestedSub(s):e.subscribe(s),r=function(){let e=null,t=null;return{clear(){e=null,t=null},notify(){(()=>{let t=e;for(;t;)t.callback(),t=t.next})()},get(){const t=[];let n=e;for(;n;)t.push(n),n=n.next;return t},subscribe(n){let r=!0;const o=t={callback:n,next:null,prev:t};return o.prev?o.prev.next=o:e=o,function(){r&&null!==e&&(r=!1,o.next?o.next.prev=o.prev:t=o.prev,o.prev?o.prev.next=o.next:e=o.next)}}}}())}function c(){o--,n&&0===o&&(n(),n=void 0,r.clear(),r=y)}const a={addNestedSub:function(e){u();const t=r.subscribe(e);let n=!1;return()=>{n||(n=!0,t(),c())}},notifyNestedSubs:function(){r.notify()},handleChangeWrapper:s,isSubscribed:function(){return i},trySubscribe:function(){i||(i=!0,u())},tryUnsubscribe:function(){i&&(i=!1,c())},getListeners:()=>r};return a}(e);return{store:e,subscription:t,getServerState:o?()=>o:void 0,stabilityCheck:i,identityFunctionCheck:s}}),[e,o,i,s]),a=r.useMemo((()=>e.getState()),[e]);v((()=>{const{subscription:t}=c;return t.onStateChange=t.notifyNestedSubs,t.trySubscribe(),a!==e.getState()&&t.notifyNestedSubs(),()=>{t.tryUnsubscribe(),t.onStateChange=void 0}}),[c,a]);const l=t||u;return r.createElement(l.Provider,{value:c},n)};function p(e=u){const t=e===u?a:c(e),n=()=>{const{store:e}=t();return e};return Object.assign(n,{withTypes:()=>n}),n}var h=p();function g(e=u){const t=e===u?h:p(e),n=()=>t().dispatch;return Object.assign(n,{withTypes:()=>n}),n}var x,C=g();x=n.useSyncExternalStoreWithSelector,l=x;export{S as P,C as a,d as u};
