import{r as g}from"./react-dom.97ac771d.js";import"./hoist-non-react-statics.5fdadd91.js";import{r as c,R as m}from"./react.c6268275.js";import"./react-is.6aa2a333.js";import{w as C}from"./use-sync-external-store.7212c90d.js";function E(e){e()}let S=E;const v=e=>S=e,w=()=>S,a=c.createContext(null);function b(){return c.useContext(a)}const N=()=>{throw new Error("uSES not initialized!")};let p=N;const R=e=>{p=e},D=(e,o)=>e===o;function L(e=a){const o=e===a?b:()=>c.useContext(e);return function(t,s=D){const{store:n,subscription:i,getServerState:u}=o(),l=p(i.addNestedSub,n.getState,u||n.getState,t,s);return c.useDebugValue(l),l}}const q=L();function U(){const e=w();let o=null,r=null;return{clear(){o=null,r=null},notify(){e(()=>{let t=o;for(;t;)t.callback(),t=t.next})},get(){let t=[],s=o;for(;s;)t.push(s),s=s.next;return t},subscribe(t){let s=!0,n=r={callback:t,next:null,prev:r};return n.prev?n.prev.next=n:o=n,function(){!s||o===null||(s=!1,n.next?n.next.prev=n.prev:r=n.prev,n.prev?n.prev.next=n.next:o=n.next)}}}}const d={notify(){},get:()=>[]};function k(e,o){let r,t=d;function s(y){return l(),t.subscribe(y)}function n(){t.notify()}function i(){f.onStateChange&&f.onStateChange()}function u(){return Boolean(r)}function l(){r||(r=o?o.addNestedSub(i):e.subscribe(i),t=U())}function h(){r&&(r(),r=void 0,t.clear(),t=d)}const f={addNestedSub:s,notifyNestedSubs:n,handleChangeWrapper:i,isSubscribed:u,trySubscribe:l,tryUnsubscribe:h,getListeners:()=>t};return f}const B=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",V=B?c.useLayoutEffect:c.useEffect;function O({store:e,context:o,children:r,serverState:t}){const s=c.useMemo(()=>{const u=k(e);return{store:e,subscription:u,getServerState:t?()=>t:void 0}},[e,t]),n=c.useMemo(()=>e.getState(),[e]);V(()=>{const{subscription:u}=s;return u.onStateChange=u.notifyNestedSubs,u.trySubscribe(),n!==e.getState()&&u.notifyNestedSubs(),()=>{u.tryUnsubscribe(),u.onStateChange=void 0}},[s,n]);const i=o||a;return m.createElement(i.Provider,{value:s},r)}function x(e=a){const o=e===a?b:()=>c.useContext(e);return function(){const{store:t}=o();return t}}const z=x();function H(e=a){const o=e===a?z:x(e);return function(){return o().dispatch}}const _=H();R(C.useSyncExternalStoreWithSelector);v(g.unstable_batchedUpdates);export{O as P,q as a,_ as u};