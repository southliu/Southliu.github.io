import{i as h,g as L,r as M,j as E,p as j,m as F,A as w,s as I,a as T}from"./@remix-run_router.f658f4a2.js";import{a as b,r as n}from"./react.bfbbfd99.js";function D(){return D=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},D.apply(this,arguments)}function k(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const V=typeof Object.is=="function"?Object.is:k,{useState:$,useEffect:G,useLayoutEffect:W,useDebugValue:X}=b;function Y(e,t,r){const a=t(),[{inst:o},l]=$({inst:{value:a,getSnapshot:t}});return W(()=>{o.value=a,o.getSnapshot=t,R(o)&&l({inst:o})},[e,a,t]),G(()=>(R(o)&&l({inst:o}),e(()=>{R(o)&&l({inst:o})})),[e]),X(a),a}function R(e){const t=e.getSnapshot,r=e.value;try{const a=t();return!V(r,a)}catch{return!0}}function _(e,t,r){return t()}const q=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",z=!q,K=z?_:Y;"useSyncExternalStore"in b&&(e=>e.useSyncExternalStore)(b);const Q=n.createContext(null),N=n.createContext(null),y=n.createContext(null),P=n.createContext(null),p=n.createContext({outlet:null,matches:[]}),J=n.createContext(null);function se(e,t){let{relative:r}=t===void 0?{}:t;C()||h(!1);let{basename:a,navigator:o}=n.useContext(y),{hash:l,pathname:s,search:u}=H(e,{relative:r}),i=s;return a!=="/"&&(i=s==="/"?a:E([a,s])),o.createHref({pathname:i,search:u,hash:l})}function C(){return n.useContext(P)!=null}function S(){return C()||h(!1),n.useContext(P).location}function ue(){C()||h(!1);let{basename:e,navigator:t}=n.useContext(y),{matches:r}=n.useContext(p),{pathname:a}=S(),o=JSON.stringify(L(r).map(u=>u.pathnameBase)),l=n.useRef(!1);return n.useEffect(()=>{l.current=!0}),n.useCallback(function(u,i){if(i===void 0&&(i={}),!l.current)return;if(typeof u=="number"){t.go(u);return}let c=M(u,JSON.parse(o),a,i.relative==="path");e!=="/"&&(c.pathname=c.pathname==="/"?e:E([e,c.pathname])),(i.replace?t.replace:t.push)(c,i.state,i)},[e,t,o,a])}const Z=n.createContext(null);function ie(e){let t=n.useContext(p).outlet;return t&&n.createElement(Z.Provider,{value:e},t)}function H(e,t){let{relative:r}=t===void 0?{}:t,{matches:a}=n.useContext(p),{pathname:o}=S(),l=JSON.stringify(L(a).map(s=>s.pathnameBase));return n.useMemo(()=>M(e,JSON.parse(l),o,r==="path"),[e,l,o,r])}function ce(e,t){C()||h(!1);let{navigator:r}=n.useContext(y),a=n.useContext(N),{matches:o}=n.useContext(p),l=o[o.length-1],s=l?l.params:{};l&&l.pathname;let u=l?l.pathnameBase:"/";l&&l.route;let i=S(),c;if(t){var m;let d=typeof t=="string"?j(t):t;u==="/"||((m=d.pathname)==null?void 0:m.startsWith(u))||h(!1),c=d}else c=i;let v=c.pathname||"/",x=u==="/"?v:v.slice(u.length)||"/",g=F(e,{pathname:x}),f=ne(g&&g.map(d=>Object.assign({},d,{params:Object.assign({},s,d.params),pathname:E([u,r.encodeLocation?r.encodeLocation(d.pathname).pathname:d.pathname]),pathnameBase:d.pathnameBase==="/"?u:E([u,r.encodeLocation?r.encodeLocation(d.pathnameBase).pathname:d.pathnameBase])})),o,a||void 0);return t&&f?n.createElement(P.Provider,{value:{location:D({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:w.Pop}},f):f}function A(){let e=ae(),t=T(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,a="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:a},l={padding:"2px 4px",backgroundColor:a};return n.createElement(n.Fragment,null,n.createElement("h2",null,"Unhandled Thrown Error!"),n.createElement("h3",{style:{fontStyle:"italic"}},t),r?n.createElement("pre",{style:o},r):null,n.createElement("p",null,"💿 Hey developer 👋"),n.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",n.createElement("code",{style:l},"errorElement")," props on ",n.createElement("code",{style:l},"<Route>")))}class ee extends n.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location?{error:t.error,location:t.location}:{error:t.error||r.error,location:r.location}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error?n.createElement(J.Provider,{value:this.state.error,children:this.props.component}):this.props.children}}function te(e){let{routeContext:t,match:r,children:a}=e,o=n.useContext(Q);return o&&r.route.errorElement&&(o._deepestRenderedBoundaryId=r.route.id),n.createElement(p.Provider,{value:t},a)}function ne(e,t,r){if(t===void 0&&(t=[]),e==null)if(r!=null&&r.errors)e=r.matches;else return null;let a=e,o=r==null?void 0:r.errors;if(o!=null){let l=a.findIndex(s=>s.route.id&&(o==null?void 0:o[s.route.id]));l>=0||h(!1),a=a.slice(0,Math.min(a.length,l+1))}return a.reduceRight((l,s,u)=>{let i=s.route.id?o==null?void 0:o[s.route.id]:null,c=r?s.route.errorElement||n.createElement(A,null):null,m=()=>n.createElement(te,{match:s,routeContext:{outlet:l,matches:t.concat(a.slice(0,u+1))}},i?c:s.route.element!==void 0?s.route.element:l);return r&&(s.route.errorElement||u===0)?n.createElement(ee,{location:r.location,component:c,error:i,children:m()}):m()},null)}var B;(function(e){e.UseRevalidator="useRevalidator"})(B||(B={}));var O;(function(e){e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(O||(O={}));function re(e){let t=n.useContext(N);return t||h(!1),t}function ae(){var e;let t=n.useContext(J),r=re(O.UseRouteError),a=n.useContext(p),o=a.matches[a.matches.length-1];return t||(a||h(!1),o.route.id||h(!1),(e=r.errors)==null?void 0:e[o.route.id])}function de(e){let{basename:t="/",children:r=null,location:a,navigationType:o=w.Pop,navigator:l,static:s=!1}=e;C()&&h(!1);let u=t.replace(/^\/*/,"/"),i=n.useMemo(()=>({basename:u,navigator:l,static:s}),[u,l,s]);typeof a=="string"&&(a=j(a));let{pathname:c="/",search:m="",hash:v="",state:x=null,key:g="default"}=a,f=n.useMemo(()=>{let d=I(c,u);return d==null?null:{pathname:d,search:m,hash:v,state:x,key:g}},[u,c,m,v,x,g]);return f==null?null:n.createElement(y.Provider,{value:i},n.createElement(P.Provider,{children:r,value:{location:f,navigationType:o}}))}var U;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(U||(U={}));new Promise(()=>{});export{de as R,S as a,ie as b,se as c,H as d,ce as e,ue as u};
