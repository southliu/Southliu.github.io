function S(){return S=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},S.apply(this,arguments)}var g;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(g||(g={}));const I="popstate";function ie(e){e===void 0&&(e={});function t(r,s){let{pathname:i="/",search:l="",hash:o=""}=v(r.location.hash.substr(1));return b("",{pathname:i,search:l,hash:o},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(r,s){let i=r.document.querySelector("base"),l="";if(i&&i.getAttribute("href")){let o=r.location.href,f=o.indexOf("#");l=f===-1?o:o.slice(0,f)}return l+"#"+(typeof s=="string"?s:E(s))}function a(r,s){H(r.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return B(t,n,a,e)}function y(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function H(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function O(){return Math.random().toString(36).substr(2,8)}function L(e){return{usr:e.state,key:e.key}}function b(e,t,n,a){return n===void 0&&(n=null),S({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?v(t):t,{state:n,key:t&&t.key||a||O()})}function E(e){let{pathname:t="/",search:n="",hash:a=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),a&&a!=="#"&&(t+=a.charAt(0)==="#"?a:"#"+a),t}function v(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let a=e.indexOf("?");a>=0&&(t.search=e.substr(a),e=e.substr(0,a)),e&&(t.pathname=e)}return t}function j(e){let t=typeof window<"u"&&typeof window.location<"u"&&window.location.origin!=="null"?window.location.origin:window.location.href,n=typeof e=="string"?e:E(e);return y(t,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,t)}function B(e,t,n,a){a===void 0&&(a={});let{window:r=document.defaultView,v5Compat:s=!1}=a,i=r.history,l=g.Pop,o=null;function f(){l=g.Pop,o&&o({action:l,location:u.location})}function h(c,p){l=g.Push;let m=b(u.location,c,p);n&&n(m,c);let x=L(m),w=u.createHref(m);try{i.pushState(x,"",w)}catch{r.location.assign(w)}s&&o&&o({action:l,location:u.location})}function d(c,p){l=g.Replace;let m=b(u.location,c,p);n&&n(m,c);let x=L(m),w=u.createHref(m);i.replaceState(x,"",w),s&&o&&o({action:l,location:u.location})}let u={get action(){return l},get location(){return e(r,i)},listen(c){if(o)throw new Error("A history only accepts one active listener");return r.addEventListener(I,f),o=c,()=>{r.removeEventListener(I,f),o=null}},createHref(c){return t(r,c)},encodeLocation(c){let p=j(typeof c=="string"?c:E(c));return{pathname:p.pathname,search:p.search,hash:p.hash}},push:h,replace:d,go(c){return i.go(c)}};return u}var W;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(W||(W={}));function se(e,t,n){n===void 0&&(n="/");let a=typeof t=="string"?v(t):t,r=Q(a.pathname||"/",n);if(r==null)return null;let s=C(e);T(s);let i=null;for(let l=0;i==null&&l<s.length;++l)i=_(s[l],K(r));return i}function C(e,t,n,a){return t===void 0&&(t=[]),n===void 0&&(n=[]),a===void 0&&(a=""),e.forEach((r,s)=>{let i={relativePath:r.path||"",caseSensitive:r.caseSensitive===!0,childrenIndex:s,route:r};i.relativePath.startsWith("/")&&(y(i.relativePath.startsWith(a),'Absolute route path "'+i.relativePath+'" nested under path '+('"'+a+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),i.relativePath=i.relativePath.slice(a.length));let l=P([a,i.relativePath]),o=n.concat(i);r.children&&r.children.length>0&&(y(r.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+l+'".')),C(r.children,t,o,l)),!(r.path==null&&!r.index)&&t.push({path:l,score:D(l,r.index),routesMeta:o})}),t}function T(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:J(t.routesMeta.map(a=>a.childrenIndex),n.routesMeta.map(a=>a.childrenIndex)))}const A=/^:\w+$/,V=3,k=2,M=1,z=10,N=-2,U=e=>e==="*";function D(e,t){let n=e.split("/"),a=n.length;return n.some(U)&&(a+=N),t&&(a+=k),n.filter(r=>!U(r)).reduce((r,s)=>r+(A.test(s)?V:s===""?M:z),a)}function J(e,t){return e.length===t.length&&e.slice(0,-1).every((a,r)=>a===t[r])?e[e.length-1]-t[t.length-1]:0}function _(e,t){let{routesMeta:n}=e,a={},r="/",s=[];for(let i=0;i<n.length;++i){let l=n[i],o=i===n.length-1,f=r==="/"?t:t.slice(r.length)||"/",h=q({path:l.relativePath,caseSensitive:l.caseSensitive,end:o},f);if(!h)return null;Object.assign(a,h.params);let d=l.route;s.push({params:a,pathname:P([r,h.pathname]),pathnameBase:Z(P([r,h.pathnameBase])),route:d}),h.pathnameBase!=="/"&&(r=P([r,h.pathnameBase]))}return s}function q(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,a]=G(e.path,e.caseSensitive,e.end),r=t.match(n);if(!r)return null;let s=r[0],i=s.replace(/(.)\/+$/,"$1"),l=r.slice(1);return{params:a.reduce((f,h,d)=>{if(h==="*"){let u=l[d]||"";i=s.slice(0,s.length-u.length).replace(/(.)\/+$/,"$1")}return f[h]=F(l[d]||"",h),f},{}),pathname:s,pathnameBase:i,pattern:e}}function G(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),$(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let a=[],r="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(i,l)=>(a.push(l),"([^\\/]+)"));return e.endsWith("*")?(a.push("*"),r+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":e!==""&&e!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,t?void 0:"i"),a]}function K(e){try{return decodeURI(e)}catch(t){return $(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function F(e,t){try{return decodeURIComponent(e)}catch(n){return $(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Q(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,a=e.charAt(n);return a&&a!=="/"?null:e.slice(n)||"/"}function $(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function X(e,t){t===void 0&&(t="/");let{pathname:n,search:a="",hash:r=""}=typeof e=="string"?v(e):e;return{pathname:n?n.startsWith("/")?n:Y(n,t):t,search:ee(a),hash:te(r)}}function Y(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function R(e,t,n,a){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(a)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function le(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function oe(e,t,n,a){a===void 0&&(a=!1);let r;typeof e=="string"?r=v(e):(r=S({},e),y(!r.pathname||!r.pathname.includes("?"),R("?","pathname","search",r)),y(!r.pathname||!r.pathname.includes("#"),R("#","pathname","hash",r)),y(!r.search||!r.search.includes("#"),R("#","search","hash",r)));let s=e===""||r.pathname==="",i=s?"/":r.pathname,l;if(a||i==null)l=n;else{let d=t.length-1;if(i.startsWith("..")){let u=i.split("/");for(;u[0]==="..";)u.shift(),d-=1;r.pathname=u.join("/")}l=d>=0?t[d]:"/"}let o=X(r,l),f=i&&i!=="/"&&i.endsWith("/"),h=(s||i===".")&&n.endsWith("/");return!o.pathname.endsWith("/")&&(f||h)&&(o.pathname+="/"),o}const P=e=>e.join("/").replace(/\/\/+/g,"/"),Z=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),ee=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,te=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class ne{constructor(t,n,a,r){r===void 0&&(r=!1),this.status=t,this.statusText=n||"",this.internal=r,a instanceof Error?(this.data=a.toString(),this.error=a):this.data=a}}function ce(e){return e instanceof ne}const re=["post","put","patch","delete"];[...re];export{g as A,ce as a,E as b,ie as c,le as g,y as i,P as j,se as m,v as p,oe as r,Q as s};