import{r as e}from"./react@18.2.0.BNo5BOs9.js";import{i as t,g as r,r as a,j as n,p as o,m as l,A as u,s as i,a as s}from"./@remix-run_router@1.15.3.Di2mmZ39.js";
/**
 * React Router v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},c.apply(this,arguments)}const d=e.createContext(null),m=e.createContext(null),v=e.createContext(null),p=e.createContext(null),h=e.createContext({outlet:null,matches:[],isDataRoute:!1}),f=e.createContext(null);function g(){return null!=e.useContext(p)}function C(){return g()||t(!1),e.useContext(p).location}function x(t){e.useContext(v).static||e.useLayoutEffect(t)}function E(){let{isDataRoute:o}=e.useContext(h);return o?function(){let{router:r}=function(r){let a=e.useContext(d);return a||t(!1),a}(B.UseNavigateStable),a=N(S.UseNavigateStable),n=e.useRef(!1);return x((()=>{n.current=!0})),e.useCallback((function(e,t){void 0===t&&(t={}),n.current&&("number"==typeof e?r.navigate(e):r.navigate(e,c({fromRouteId:a},t)))}),[r,a])}():function(){g()||t(!1);let o=e.useContext(d),{basename:l,future:u,navigator:i}=e.useContext(v),{matches:s}=e.useContext(h),{pathname:c}=C(),m=JSON.stringify(r(s,u.v7_relativeSplatPath)),p=e.useRef(!1);return x((()=>{p.current=!0})),e.useCallback((function(e,t){if(void 0===t&&(t={}),!p.current)return;if("number"==typeof e)return void i.go(e);let r=a(e,JSON.parse(m),c,"path"===t.relative);null==o&&"/"!==l&&(r.pathname="/"===r.pathname?l:n([l,r.pathname])),(t.replace?i.replace:i.push)(r,t.state,t)}),[l,i,m,c,o])}()}const y=e.createContext(null);function b(t){let r=e.useContext(h).outlet;return r?e.createElement(y.Provider,{value:t},r):r}function R(r,a){return function(r,a,i,s){g()||t(!1);let{navigator:d}=e.useContext(v),{matches:m}=e.useContext(h),f=m[m.length-1],x=f?f.params:{};!f||f.pathname;let E=f?f.pathnameBase:"/";f&&f.route;let y,b=C();if(a){var R;let e="string"==typeof a?o(a):a;"/"===E||(null==(R=e.pathname)?void 0:R.startsWith(E))||t(!1),y=e}else y=b;let U=y.pathname||"/",B=U;if("/"!==E){let e=E.replace(/^\//,"").split("/");B="/"+U.replace(/^\//,"").split("/").slice(e.length).join("/")}let S=l(r,{pathname:B}),N=function(r,a,n,o){var l,u;void 0===a&&(a=[]);void 0===n&&(n=null);void 0===o&&(o=null);if(null==r){if(null==(u=n)||!u.errors)return null;r=n.matches}let i=r,s=null==(l=n)?void 0:l.errors;if(null!=s){let e=i.findIndex((e=>e.route.id&&(null==s?void 0:s[e.route.id])));e>=0||t(!1),i=i.slice(0,Math.min(i.length,e+1))}let c=!1,d=-1;if(n&&o&&o.v7_partialHydration)for(let e=0;e<i.length;e++){let t=i[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(d=e),t.route.id){let{loaderData:e,errors:r}=n,a=t.route.loader&&void 0===e[t.route.id]&&(!r||void 0===r[t.route.id]);if(t.route.lazy||a){c=!0,i=d>=0?i.slice(0,d+1):[i[0]];break}}}return i.reduceRight(((t,r,o)=>{let l,u=!1,m=null,v=null;var p;n&&(l=s&&r.route.id?s[r.route.id]:void 0,m=r.route.errorElement||k,c&&(d<0&&0===o?(p="route-fallback",!1||j[p]||(j[p]=!0),u=!0,v=null):d===o&&(u=!0,v=r.route.hydrateFallbackElement||null)));let h=a.concat(i.slice(0,o+1)),f=()=>{let a;return a=l?m:u?v:r.route.Component?e.createElement(r.route.Component,null):r.route.element?r.route.element:t,e.createElement(P,{match:r,routeContext:{outlet:t,matches:h,isDataRoute:null!=n},children:a})};return n&&(r.route.ErrorBoundary||r.route.errorElement||0===o)?e.createElement(D,{location:n.location,revalidation:n.revalidation,component:m,error:l,children:f(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):f()}),null)}(S&&S.map((e=>Object.assign({},e,{params:Object.assign({},x,e.params),pathname:n([E,d.encodeLocation?d.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?E:n([E,d.encodeLocation?d.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])}))),m,i,s);if(a&&N)return e.createElement(p.Provider,{value:{location:c({pathname:"/",search:"",hash:"",state:null,key:"default"},y),navigationType:u.Pop}},N);return N}(r,a)}function U(){let r=function(){var r;let a=e.useContext(f),n=function(r){let a=e.useContext(m);return a||t(!1),a}(S.UseRouteError),o=N(S.UseRouteError);if(void 0!==a)return a;return null==(r=n.errors)?void 0:r[o]}(),a=s(r)?r.status+" "+r.statusText:r instanceof Error?r.message:JSON.stringify(r),n=r instanceof Error?r.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return e.createElement(e.Fragment,null,e.createElement("h2",null,"Unexpected Application Error!"),e.createElement("h3",{style:{fontStyle:"italic"}},a),n?e.createElement("pre",{style:o},n):null,null)}const k=e.createElement(U,null);class D extends e.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){}render(){return void 0!==this.state.error?e.createElement(h.Provider,{value:this.props.routeContext},e.createElement(f.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function P(t){let{routeContext:r,match:a,children:n}=t,o=e.useContext(d);return o&&o.static&&o.staticContext&&(a.route.errorElement||a.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=a.route.id),e.createElement(h.Provider,{value:r},n)}var B=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(B||{}),S=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(S||{});function N(r){let a=function(r){let a=e.useContext(h);return a||t(!1),a}(),n=a.matches[a.matches.length-1];return n.route.id||t(!1),n.route.id}const j={};function L(r){let{basename:a="/",children:n=null,location:l,navigationType:s=u.Pop,navigator:d,static:m=!1,future:h}=r;g()&&t(!1);let f=a.replace(/^\/*/,"/"),C=e.useMemo((()=>({basename:f,navigator:d,static:m,future:c({v7_relativeSplatPath:!1},h)})),[f,h,d,m]);"string"==typeof l&&(l=o(l));let{pathname:x="/",search:E="",hash:y="",state:b=null,key:R="default"}=l,U=e.useMemo((()=>{let e=i(x,f);return null==e?null:{location:{pathname:e,search:E,hash:y,state:b,key:R},navigationType:s}}),[f,x,E,y,b,R,s]);return null==U?null:e.createElement(v.Provider,{value:C},e.createElement(p.Provider,{children:n,value:U}))}new Promise((()=>{}));export{L as R,C as a,b,R as c,E as u};
