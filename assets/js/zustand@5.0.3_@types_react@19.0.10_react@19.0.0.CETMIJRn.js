import{e as t}from"./react@19.0.0.C56gzhl-.js";const e=t=>{let e;const n=new Set,r=(t,r)=>{const o="function"==typeof t?t(e):t;if(!Object.is(o,e)){const t=e;e=(null!=r?r:"object"!=typeof o||null===o)?o:Object.assign({},e,o),n.forEach((n=>n(e,t)))}},o=()=>e,s={setState:r,getState:o,getInitialState:()=>i,subscribe:t=>(n.add(t),()=>n.delete(t))},i=e=t(r,o,s);return s},n=t=>t;const r=r=>{const o=(t=>t?e(t):e)(r),s=e=>function(e,r=n){const o=t.useSyncExternalStore(e.subscribe,(()=>r(e.getState())),(()=>r(e.getInitialState())));return t.useDebugValue(o),o}(o,e);return Object.assign(s,o),s},o=t=>r,s={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_BASE_URL:"https://mock.mengxuegu.com/mock/63f830b1c5a76a117cab185e/v1",VITE_ENV:"production",VITE_SECRET_KEY:"__Vite_Admin_Secret__"},i=new Map,a=t=>{const e=i.get(t);return e?Object.fromEntries(Object.entries(e.stores).map((([t,e])=>[t,e.getState()]))):{}},c=(t,e={})=>(n,r,o)=>{const{enabled:c,anonymousActionType:l,store:d,...p}=e;let S;try{S=(null!=c?c:"production"!==(s?"production":void 0))&&window.__REDUX_DEVTOOLS_EXTENSION__}catch(h){}if(!S)return t(n,r,o);const{connection:f,...m}=((t,e,n)=>{if(void 0===t)return{type:"untracked",connection:e.connect(n)};const r=i.get(n.name);if(r)return{type:"tracked",store:t,...r};const o={connection:e.connect(n),stores:{}};return i.set(n.name,o),{type:"tracked",store:t,...o}})(d,S,p);let v=!0;o.setState=(t,e,s)=>{const i=n(t,e);if(!v)return i;const c=void 0===s?{type:l||"anonymous"}:"string"==typeof s?{type:s}:s;return void 0===d?(null==f||f.send(c,r()),i):(null==f||f.send({...c,type:`${d}/${c.type}`},{...a(p.name),[d]:o.getState()}),i)};const g=(...t)=>{const e=v;v=!1,n(...t),v=e},y=t(o.setState,r,o);if("untracked"===m.type?null==f||f.init(y):(m.stores[m.store]=o,null==f||f.init(Object.fromEntries(Object.entries(m.stores).map((([t,e])=>[t,t===m.store?y:e.getState()]))))),o.dispatchFromDevtools&&"function"==typeof o.dispatch){let t=!1;const e=o.dispatch;o.dispatch=(...n)=>{"production"===(s?"production":void 0)||"__setState"!==n[0].type||t||(t=!0),e(...n)}}return f.subscribe((t=>{var e;switch(t.type){case"ACTION":if("string"!=typeof t.payload)return;return u(t.payload,(t=>{if("__setState"!==t.type)o.dispatchFromDevtools&&"function"==typeof o.dispatch&&o.dispatch(t);else{if(void 0===d)return void g(t.state);Object.keys(t.state).length;const e=t.state[d];if(null==e)return;JSON.stringify(o.getState())!==JSON.stringify(e)&&g(e)}}));case"DISPATCH":switch(t.payload.type){case"RESET":return g(y),void 0===d?null==f?void 0:f.init(o.getState()):null==f?void 0:f.init(a(p.name));case"COMMIT":return void 0===d?void(null==f||f.init(o.getState())):null==f?void 0:f.init(a(p.name));case"ROLLBACK":return u(t.state,(t=>{if(void 0===d)return g(t),void(null==f||f.init(o.getState()));g(t[d]),null==f||f.init(a(p.name))}));case"JUMP_TO_STATE":case"JUMP_TO_ACTION":return u(t.state,(t=>{void 0!==d?JSON.stringify(o.getState())!==JSON.stringify(t[d])&&g(t[d]):g(t)}));case"IMPORT_STATE":{const{nextLiftedState:n}=t.payload,r=null==(e=n.computedStates.slice(-1)[0])?void 0:e.state;if(!r)return;return g(void 0===d?r:r[d]),void(null==f||f.send(null,n))}case"PAUSE_RECORDING":return v=!v}return}})),y},u=(t,e)=>{let n;try{n=JSON.parse(t)}catch(r){}void 0!==n&&e(n)};function l(t,e){let n;try{n=t()}catch(r){return}return{getItem:t=>{var e;const r=t=>null===t?null:JSON.parse(t,void 0),o=null!=(e=n.getItem(t))?e:null;return o instanceof Promise?o.then(r):r(o)},setItem:(t,e)=>n.setItem(t,JSON.stringify(e,void 0)),removeItem:t=>n.removeItem(t)}}const d=t=>e=>{try{const n=t(e);return n instanceof Promise?n:{then:t=>d(t)(n),catch(t){return this}}}catch(n){return{then(t){return this},catch:t=>d(t)(n)}}},p=(t,e)=>(n,r,o)=>{let s={storage:l((()=>localStorage)),partialize:t=>t,version:0,merge:(t,e)=>({...e,...t}),...e},i=!1;const a=new Set,c=new Set;let u=s.storage;if(!u)return t(((...t)=>{n(...t)}),r,o);const p=()=>{const t=s.partialize({...r()});return u.setItem(s.name,{state:t,version:s.version})},S=o.setState;o.setState=(t,e)=>{S(t,e),p()};const f=t(((...t)=>{n(...t),p()}),r,o);let m;o.getInitialState=()=>f;const v=()=>{var t,e;if(!u)return;i=!1,a.forEach((t=>{var e;return t(null!=(e=r())?e:f)}));const o=(null==(e=s.onRehydrateStorage)?void 0:e.call(s,null!=(t=r())?t:f))||void 0;return d(u.getItem.bind(u))(s.name).then((t=>{if(t){if("number"!=typeof t.version||t.version===s.version)return[!1,t.state];if(s.migrate){const e=s.migrate(t.state,t.version);return e instanceof Promise?e.then((t=>[!0,t])):[!0,e]}}return[!1,void 0]})).then((t=>{var e;const[o,i]=t;if(m=s.merge(i,null!=(e=r())?e:f),n(m,!0),o)return p()})).then((()=>{null==o||o(m,void 0),m=r(),i=!0,c.forEach((t=>t(m)))})).catch((t=>{null==o||o(void 0,t)}))};return o.persist={setOptions:t=>{s={...s,...t},t.storage&&(u=t.storage)},clearStorage:()=>{null==u||u.removeItem(s.name)},getOptions:()=>s,rehydrate:()=>v(),hasHydrated:()=>i,onHydrate:t=>(a.add(t),()=>{a.delete(t)}),onFinishHydration:t=>(c.add(t),()=>{c.delete(t)})},s.skipHydration||v(),m||f};export{l as a,o as c,c as d,p};
