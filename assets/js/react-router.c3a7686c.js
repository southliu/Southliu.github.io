import{i as h,g as N,r as L,j as E,p as M,m as J,A as j,s as k,a as F}from"./@remix-run_router.ed478df4.js";import{a as D,r}from"./react.c6268275.js";/**
 * React Router v6.6.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function O(){return O=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},O.apply(this,arguments)}function T(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const V=typeof Object.is=="function"?Object.is:T,{useState:$,useEffect:G,useLayoutEffect:W,useDebugValue:X}=D;function Y(e,t,n){const o=t(),[{inst:a},l]=$({inst:{value:o,getSnapshot:t}});return W(()=>{a.value=o,a.getSnapshot=t,b(a)&&l({inst:a})},[e,o,t]),G(()=>(b(a)&&l({inst:a}),e(()=>{b(a)&&l({inst:a})})),[e]),X(o),o}function b(e){const t=e.getSnapshot,n=e.value;try{const o=t();return!V(n,o)}catch{return!0}}function _(e,t,n){return t()}const q=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",z=!q,K=z?_:Y;"useSyncExternalStore"in D&&(e=>e.useSyncExternalStore)(D);const Q=r.createContext(null),w=r.createContext(null),P=r.createContext(null),R=r.createContext(null),p=r.createContext({outlet:null,matches:[]}),I=r.createContext(null);function ie(e,t){let{relative:n}=t===void 0?{}:t;C()||h(!1);let{basename:o,navigator:a}=r.useContext(P),{hash:l,pathname:s,search:u}=H(e,{relative:n}),i=s;return o!=="/"&&(i=s==="/"?o:E([o,s])),a.createHref({pathname:i,search:u,hash:l})}function C(){return r.useContext(R)!=null}function S(){return C()||h(!1),r.useContext(R).location}function ce(){C()||h(!1);let{basename:e,navigator:t}=r.useContext(P),{matches:n}=r.useContext(p),{pathname:o}=S(),a=JSON.stringify(N(n).map(u=>u.pathnameBase)),l=r.useRef(!1);return r.useEffect(()=>{l.current=!0}),r.useCallback(function(u,i){if(i===void 0&&(i={}),!l.current)return;if(typeof u=="number"){t.go(u);return}let c=L(u,JSON.parse(a),o,i.relative==="path");e!=="/"&&(c.pathname=c.pathname==="/"?e:E([e,c.pathname])),(i.replace?t.replace:t.push)(c,i.state,i)},[e,t,a,o])}const Z=r.createContext(null);function de(e){let t=r.useContext(p).outlet;return t&&r.createElement(Z.Provider,{value:e},t)}function H(e,t){let{relative:n}=t===void 0?{}:t,{matches:o}=r.useContext(p),{pathname:a}=S(),l=JSON.stringify(N(o).map(s=>s.pathnameBase));return r.useMemo(()=>L(e,JSON.parse(l),a,n==="path"),[e,l,a,n])}function he(e,t){C()||h(!1);let{navigator:n}=r.useContext(P),o=r.useContext(w),{matches:a}=r.useContext(p),l=a[a.length-1],s=l?l.params:{};l&&l.pathname;let u=l?l.pathnameBase:"/";l&&l.route;let i=S(),c;if(t){var m;let d=typeof t=="string"?M(t):t;u==="/"||(m=d.pathname)!=null&&m.startsWith(u)||h(!1),c=d}else c=i;let f=c.pathname||"/",x=u==="/"?f:f.slice(u.length)||"/",g=J(e,{pathname:x}),v=ne(g&&g.map(d=>Object.assign({},d,{params:Object.assign({},s,d.params),pathname:E([u,n.encodeLocation?n.encodeLocation(d.pathname).pathname:d.pathname]),pathnameBase:d.pathnameBase==="/"?u:E([u,n.encodeLocation?n.encodeLocation(d.pathnameBase).pathname:d.pathnameBase])})),a,o||void 0);return t&&v?r.createElement(R.Provider,{value:{location:O({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:j.Pop}},v):v}function A(){let e=le(),t=F(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:o},l={padding:"2px 4px",backgroundColor:o};return r.createElement(r.Fragment,null,r.createElement("h2",null,"Unhandled Thrown Error!"),r.createElement("h3",{style:{fontStyle:"italic"}},t),n?r.createElement("pre",{style:a},n):null,r.createElement("p",null,"💿 Hey developer 👋"),r.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",r.createElement("code",{style:l},"errorElement")," props on ",r.createElement("code",{style:l},"<Route>")))}class ee extends r.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?r.createElement(p.Provider,{value:this.props.routeContext},r.createElement(I.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function te(e){let{routeContext:t,match:n,children:o}=e,a=r.useContext(Q);return a&&a.static&&a.staticContext&&n.route.errorElement&&(a.staticContext._deepestRenderedBoundaryId=n.route.id),r.createElement(p.Provider,{value:t},o)}function ne(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let o=e,a=n==null?void 0:n.errors;if(a!=null){let l=o.findIndex(s=>s.route.id&&(a==null?void 0:a[s.route.id]));l>=0||h(!1),o=o.slice(0,Math.min(o.length,l+1))}return o.reduceRight((l,s,u)=>{let i=s.route.id?a==null?void 0:a[s.route.id]:null,c=n?s.route.errorElement||r.createElement(A,null):null,m=t.concat(o.slice(0,u+1)),f=()=>r.createElement(te,{match:s,routeContext:{outlet:l,matches:m}},i?c:s.route.element!==void 0?s.route.element:l);return n&&(s.route.errorElement||u===0)?r.createElement(ee,{location:n.location,component:c,error:i,children:f(),routeContext:{outlet:null,matches:m}}):f()},null)}var U;(function(e){e.UseRevalidator="useRevalidator"})(U||(U={}));var y;(function(e){e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(y||(y={}));function re(e){let t=r.useContext(w);return t||h(!1),t}function oe(e){let t=r.useContext(p);return t||h(!1),t}function ae(e){let t=oe(),n=t.matches[t.matches.length-1];return n.route.id||h(!1),n.route.id}function le(){var e;let t=r.useContext(I),n=re(y.UseRouteError),o=ae(y.UseRouteError);return t||((e=n.errors)==null?void 0:e[o])}function me(e){let{basename:t="/",children:n=null,location:o,navigationType:a=j.Pop,navigator:l,static:s=!1}=e;C()&&h(!1);let u=t.replace(/^\/*/,"/"),i=r.useMemo(()=>({basename:u,navigator:l,static:s}),[u,l,s]);typeof o=="string"&&(o=M(o));let{pathname:c="/",search:m="",hash:f="",state:x=null,key:g="default"}=o,v=r.useMemo(()=>{let d=k(c,u);return d==null?null:{pathname:d,search:m,hash:f,state:x,key:g}},[u,c,m,f,x,g]);return v==null?null:r.createElement(P.Provider,{value:i},r.createElement(R.Provider,{children:n,value:{location:v,navigationType:a}}))}var B;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(B||(B={}));new Promise(()=>{});export{me as R,S as a,de as b,ie as c,H as d,he as e,ce as u};
