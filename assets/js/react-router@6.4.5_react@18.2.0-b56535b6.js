import{i as d,g as L,r as M,j as E,p as j,m as F,A as w,s as I,b as T}from"./@remix-run_router@1.0.5-91f34653.js";import{a as R,r}from"./react@18.2.0-d68edc9f.js";function D(){return D=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},D.apply(this,arguments)}function k(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const V=typeof Object.is=="function"?Object.is:k,{useState:$,useEffect:G,useLayoutEffect:W,useDebugValue:X}=R;function Y(e,t,n){const o=t(),[{inst:a},s]=$({inst:{value:o,getSnapshot:t}});return W(()=>{a.value=o,a.getSnapshot=t,b(a)&&s({inst:a})},[e,o,t]),G(()=>(b(a)&&s({inst:a}),e(()=>{b(a)&&s({inst:a})})),[e]),X(o),o}function b(e){const t=e.getSnapshot,n=e.value;try{const o=t();return!V(n,o)}catch{return!0}}function _(e,t,n){return t()}const q=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",z=!q,K=z?_:Y;"useSyncExternalStore"in R&&(e=>e.useSyncExternalStore)(R);const Q=r.exports.createContext(null),N=r.exports.createContext(null),y=r.exports.createContext(null),P=r.exports.createContext(null),f=r.exports.createContext({outlet:null,matches:[]}),J=r.exports.createContext(null);function le(e,t){let{relative:n}=t===void 0?{}:t;g()||d(!1);let{basename:o,navigator:a}=r.exports.useContext(y),{hash:s,pathname:l,search:u}=H(e,{relative:n}),i=l;return o!=="/"&&(i=l==="/"?o:E([o,l])),a.createHref({pathname:i,search:u,hash:s})}function g(){return r.exports.useContext(P)!=null}function S(){return g()||d(!1),r.exports.useContext(P).location}function ue(){g()||d(!1);let{basename:e,navigator:t}=r.exports.useContext(y),{matches:n}=r.exports.useContext(f),{pathname:o}=S(),a=JSON.stringify(L(n).map(u=>u.pathnameBase)),s=r.exports.useRef(!1);return r.exports.useEffect(()=>{s.current=!0}),r.exports.useCallback(function(u,i){if(i===void 0&&(i={}),!s.current)return;if(typeof u=="number"){t.go(u);return}let c=M(u,JSON.parse(a),o,i.relative==="path");e!=="/"&&(c.pathname=c.pathname==="/"?e:E([e,c.pathname])),(i.replace?t.replace:t.push)(c,i.state,i)},[e,t,a,o])}const Z=r.exports.createContext(null);function ie(e){let t=r.exports.useContext(f).outlet;return t&&r.exports.createElement(Z.Provider,{value:e},t)}function H(e,t){let{relative:n}=t===void 0?{}:t,{matches:o}=r.exports.useContext(f),{pathname:a}=S(),s=JSON.stringify(L(o).map(l=>l.pathnameBase));return r.exports.useMemo(()=>M(e,JSON.parse(s),a,n==="path"),[e,s,a,n])}function ce(e,t){g()||d(!1);let{navigator:n}=r.exports.useContext(y),o=r.exports.useContext(N),{matches:a}=r.exports.useContext(f),s=a[a.length-1],l=s?s.params:{};s&&s.pathname;let u=s?s.pathnameBase:"/";s&&s.route;let i=S(),c;if(t){var h;let p=typeof t=="string"?j(t):t;u==="/"||((h=p.pathname)==null?void 0:h.startsWith(u))||d(!1),c=p}else c=i;let x=c.pathname||"/",C=u==="/"?x:x.slice(u.length)||"/",v=F(e,{pathname:C}),m=re(v&&v.map(p=>Object.assign({},p,{params:Object.assign({},l,p.params),pathname:E([u,n.encodeLocation?n.encodeLocation(p.pathname).pathname:p.pathname]),pathnameBase:p.pathnameBase==="/"?u:E([u,n.encodeLocation?n.encodeLocation(p.pathnameBase).pathname:p.pathnameBase])})),a,o||void 0);return t&&m?r.exports.createElement(P.Provider,{value:{location:D({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:w.Pop}},m):m}function A(){let e=oe(),t=T(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:o},s={padding:"2px 4px",backgroundColor:o};return r.exports.createElement(r.exports.Fragment,null,r.exports.createElement("h2",null,"Unhandled Thrown Error!"),r.exports.createElement("h3",{style:{fontStyle:"italic"}},t),n?r.exports.createElement("pre",{style:a},n):null,r.exports.createElement("p",null,"💿 Hey developer 👋"),r.exports.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",r.exports.createElement("code",{style:s},"errorElement")," props on ",r.exports.createElement("code",{style:s},"<Route>")))}class ee extends r.exports.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?r.exports.createElement(J.Provider,{value:this.state.error,children:this.props.component}):this.props.children}}function te(e){let{routeContext:t,match:n,children:o}=e,a=r.exports.useContext(Q);return a&&n.route.errorElement&&(a._deepestRenderedBoundaryId=n.route.id),r.exports.createElement(f.Provider,{value:t},o)}function re(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let o=e,a=n==null?void 0:n.errors;if(a!=null){let s=o.findIndex(l=>l.route.id&&(a==null?void 0:a[l.route.id]));s>=0||d(!1),o=o.slice(0,Math.min(o.length,s+1))}return o.reduceRight((s,l,u)=>{let i=l.route.id?a==null?void 0:a[l.route.id]:null,c=n?l.route.errorElement||r.exports.createElement(A,null):null,h=()=>r.exports.createElement(te,{match:l,routeContext:{outlet:s,matches:t.concat(o.slice(0,u+1))}},i?c:l.route.element!==void 0?l.route.element:s);return n&&(l.route.errorElement||u===0)?r.exports.createElement(ee,{location:n.location,component:c,error:i,children:h()}):h()},null)}var B;(function(e){e.UseRevalidator="useRevalidator"})(B||(B={}));var O;(function(e){e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(O||(O={}));function ne(e){let t=r.exports.useContext(N);return t||d(!1),t}function oe(){var e;let t=r.exports.useContext(J),n=ne(O.UseRouteError),o=r.exports.useContext(f),a=o.matches[o.matches.length-1];return t||(o||d(!1),a.route.id||d(!1),(e=n.errors)==null?void 0:e[a.route.id])}function pe(e){let{basename:t="/",children:n=null,location:o,navigationType:a=w.Pop,navigator:s,static:l=!1}=e;g()&&d(!1);let u=t.replace(/^\/*/,"/"),i=r.exports.useMemo(()=>({basename:u,navigator:s,static:l}),[u,s,l]);typeof o=="string"&&(o=j(o));let{pathname:c="/",search:h="",hash:x="",state:C=null,key:v="default"}=o,m=r.exports.useMemo(()=>{let p=I(c,u);return p==null?null:{pathname:p,search:h,hash:x,state:C,key:v}},[u,c,h,x,C,v]);return m==null?null:r.exports.createElement(y.Provider,{value:i},r.exports.createElement(P.Provider,{children:n,value:{location:m,navigationType:a}}))}var U;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(U||(U={}));new Promise(()=>{});export{pe as R,ue as a,S as b,H as c,ie as d,ce as e,le as u};
