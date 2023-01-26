import{R as I}from"./react.fd625a73.js";const _=/^[a-z0-9]+(-[a-z0-9]+)*$/,m=Object.freeze({left:0,top:0,width:16,height:16,rotate:0,vFlip:!1,hFlip:!1});function J(t){return{...m,...t}}const L=(t,e,n,i="")=>{const o=t.split(":");if(t.slice(0,1)==="@"){if(o.length<2||o.length>3)return null;i=o.shift().slice(1)}if(o.length>3||!o.length)return null;if(o.length>1){const c=o.pop(),l=o.pop(),f={provider:o.length>0?o[0]:i,prefix:l,name:c};return e&&!O(f)?null:f}const r=o[0],s=r.split("-");if(s.length>1){const c={provider:i,prefix:s.shift(),name:s.join("-")};return e&&!O(c)?null:c}if(n&&i===""){const c={provider:i,prefix:"",name:r};return e&&!O(c,n)?null:c}return null},O=(t,e)=>t?!!((t.provider===""||t.provider.match(_))&&(e&&t.prefix===""||t.prefix.match(_))&&t.name.match(_)):!1;function At(t,e){const n={...t};for(const i in m){const o=i;if(e[o]!==void 0){const r=e[o];if(n[o]===void 0){n[o]=r;continue}switch(o){case"rotate":n[o]=(n[o]+r)%4;break;case"hFlip":case"vFlip":n[o]=r!==n[o];break;default:n[o]=r}}}return n}function rt(t,e,n=!1){function i(r,s){if(t.icons[r]!==void 0)return Object.assign({},t.icons[r]);if(s>5)return null;const c=t.aliases;if(c&&c[r]!==void 0){const f=c[r],a=i(f.parent,s+1);return a&&At(a,f)}const l=t.chars;return!s&&l&&l[r]!==void 0?i(l[r],s+1):null}const o=i(e,0);if(o)for(const r in m)o[r]===void 0&&t[r]!==void 0&&(o[r]=t[r]);return o&&n?J(o):o}function Dt(t){for(const e in m)if(t[e]!==void 0)return!0;return!1}function at(t,e,n){n=n||{};const i=[];if(typeof t!="object"||typeof t.icons!="object")return i;t.not_found instanceof Array&&t.not_found.forEach(s=>{e(s,null),i.push(s)});const o=t.icons;Object.keys(o).forEach(s=>{const c=rt(t,s,!0);c&&(e(s,c),i.push(s))});const r=n.aliases||"all";if(r!=="none"&&typeof t.aliases=="object"){const s=t.aliases;Object.keys(s).forEach(c=>{if(r==="variations"&&Dt(s[c]))return;const l=rt(t,c,!0);l&&(e(c,l),i.push(c))})}return i}const B={provider:"string",aliases:"object",not_found:"object"};for(const t in m)B[t]=typeof m[t];function ut(t){if(typeof t!="object"||t===null)return null;const e=t;if(typeof e.prefix!="string"||!t.icons||typeof t.icons!="object")return null;for(const o in B)if(t[o]!==void 0&&typeof t[o]!==B[o])return null;const n=e.icons;for(const o in n){const r=n[o];if(!o.match(_)||typeof r.body!="string")return null;for(const s in m)if(r[s]!==void 0&&typeof r[s]!=typeof m[s])return null}const i=e.aliases;if(i)for(const o in i){const r=i[o],s=r.parent;if(!o.match(_)||typeof s!="string"||!n[s]&&!i[s])return null;for(const c in m)if(r[c]!==void 0&&typeof r[c]!=typeof m[c])return null}return e}const Ft=1;let F=Object.create(null);try{const t=window||self;t&&t._iconifyStorage.version===Ft&&(F=t._iconifyStorage.storage)}catch{}function Tt(t,e){return{provider:t,prefix:e,icons:Object.create(null),missing:Object.create(null)}}function x(t,e){F[t]===void 0&&(F[t]=Object.create(null));const n=F[t];return n[e]===void 0&&(n[e]=Tt(t,e)),n[e]}function W(t,e){if(!ut(e))return[];const n=Date.now();return at(e,(i,o)=>{o?t.icons[i]=o:t.missing[i]=n})}function Mt(t,e,n){try{if(typeof n.body=="string")return t.icons[e]=Object.freeze(J(n)),!0}catch{}return!1}function Lt(t,e){const n=t.icons[e];return n===void 0?null:n}let C=!1;function ht(t){return typeof t=="boolean"&&(C=t),C}function Rt(t){const e=typeof t=="string"?L(t,!0,C):t;return e?Lt(x(e.provider,e.prefix),e.name):null}function Nt(t,e){const n=L(t,!0,C);if(!n)return!1;const i=x(n.provider,n.prefix);return Mt(i,n.name,e)}function Ut(t,e){if(typeof t!="object")return!1;if(typeof e!="string"&&(e=typeof t.provider=="string"?t.provider:""),C&&e===""&&(typeof t.prefix!="string"||t.prefix==="")){let i=!1;return ut(t)&&(t.prefix="",at(t,(o,r)=>{r&&Nt(o,r)&&(i=!0)})),i}if(typeof t.prefix!="string"||!O({provider:e,prefix:t.prefix,name:"a"}))return!1;const n=x(e,t.prefix);return!!W(n,t)}const dt=Object.freeze({inline:!1,width:null,height:null,hAlign:"center",vAlign:"middle",slice:!1,hFlip:!1,vFlip:!1,rotate:0});function qt(t,e){const n={};for(const i in t){const o=i;if(n[o]=t[o],e[o]===void 0)continue;const r=e[o];switch(o){case"inline":case"slice":typeof r=="boolean"&&(n[o]=r);break;case"hFlip":case"vFlip":r===!0&&(n[o]=!n[o]);break;case"hAlign":case"vAlign":typeof r=="string"&&r!==""&&(n[o]=r);break;case"width":case"height":(typeof r=="string"&&r!==""||typeof r=="number"&&r||r===null)&&(n[o]=r);break;case"rotate":typeof r=="number"&&(n[o]+=r);break}}return n}const $t=/(-?[0-9.]*[0-9]+[0-9.]*)/g,Qt=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function U(t,e,n){if(e===1)return t;if(n=n===void 0?100:n,typeof t=="number")return Math.ceil(t*e*n)/n;if(typeof t!="string")return t;const i=t.split($t);if(i===null||!i.length)return t;const o=[];let r=i.shift(),s=Qt.test(r);for(;;){if(s){const c=parseFloat(r);isNaN(c)?o.push(r):o.push(Math.ceil(c*e*n)/n)}else o.push(r);if(r=i.shift(),r===void 0)return o.join("");s=!s}}function Vt(t){let e="";switch(t.hAlign){case"left":e+="xMin";break;case"right":e+="xMax";break;default:e+="xMid"}switch(t.vAlign){case"top":e+="YMin";break;case"bottom":e+="YMax";break;default:e+="YMid"}return e+=t.slice?" slice":" meet",e}function Kt(t,e){const n={left:t.left,top:t.top,width:t.width,height:t.height};let i=t.body;[t,e].forEach(c=>{const l=[],f=c.hFlip,a=c.vFlip;let h=c.rotate;f?a?h+=2:(l.push("translate("+(n.width+n.left).toString()+" "+(0-n.top).toString()+")"),l.push("scale(-1 1)"),n.top=n.left=0):a&&(l.push("translate("+(0-n.left).toString()+" "+(n.height+n.top).toString()+")"),l.push("scale(1 -1)"),n.top=n.left=0);let u;switch(h<0&&(h-=Math.floor(h/4)*4),h=h%4,h){case 1:u=n.height/2+n.top,l.unshift("rotate(90 "+u.toString()+" "+u.toString()+")");break;case 2:l.unshift("rotate(180 "+(n.width/2+n.left).toString()+" "+(n.height/2+n.top).toString()+")");break;case 3:u=n.width/2+n.left,l.unshift("rotate(-90 "+u.toString()+" "+u.toString()+")");break}h%2===1&&((n.left!==0||n.top!==0)&&(u=n.left,n.left=n.top,n.top=u),n.width!==n.height&&(u=n.width,n.width=n.height,n.height=u)),l.length&&(i='<g transform="'+l.join(" ")+'">'+i+"</g>")});let o,r;e.width===null&&e.height===null?(r="1em",o=U(r,n.width/n.height)):e.width!==null&&e.height!==null?(o=e.width,r=e.height):e.height!==null?(r=e.height,o=U(r,n.width/n.height)):(o=e.width,r=U(o,n.height/n.width)),o==="auto"&&(o=n.width),r==="auto"&&(r=n.height),o=typeof o=="string"?o:o.toString()+"",r=typeof r=="string"?r:r.toString()+"";const s={attributes:{width:o,height:r,preserveAspectRatio:Vt(e),viewBox:n.left.toString()+" "+n.top.toString()+" "+n.width.toString()+" "+n.height.toString()},body:i};return e.inline&&(s.inline=!0),s}const Bt=/\sid="(\S+)"/g,Ht="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let Yt=0;function zt(t,e=Ht){const n=[];let i;for(;i=Bt.exec(t);)n.push(i[1]);return n.length&&n.forEach(o=>{const r=typeof e=="function"?e(o):e+(Yt++).toString(),s=o.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");t=t.replace(new RegExp('([#;"])('+s+')([")]|\\.[a-z])',"g"),"$1"+r+"$3")}),t}const H=Object.create(null);function Gt(t,e){H[t]=e}function Y(t){return H[t]||H[""]}function X(t){let e;if(typeof t.resources=="string")e=[t.resources];else if(e=t.resources,!(e instanceof Array)||!e.length)return null;return{resources:e,path:t.path===void 0?"/":t.path,maxURL:t.maxURL?t.maxURL:500,rotate:t.rotate?t.rotate:750,timeout:t.timeout?t.timeout:5e3,random:t.random===!0,index:t.index?t.index:0,dataAfterTimeout:t.dataAfterTimeout!==!1}}const Z=Object.create(null),k=["https://api.simplesvg.com","https://api.unisvg.com"],T=[];for(;k.length>0;)k.length===1||Math.random()>.5?T.push(k.shift()):T.push(k.pop());Z[""]=X({resources:["https://api.iconify.design"].concat(T)});function Jt(t,e){const n=X(e);return n===null?!1:(Z[t]=n,!0)}function tt(t){return Z[t]}const pt=(t,e)=>{let n=t,i=n.indexOf("?")!==-1;function o(r){switch(typeof r){case"boolean":return r?"true":"false";case"number":return encodeURIComponent(r);case"string":return encodeURIComponent(r);default:throw new Error("Invalid parameter")}}return Object.keys(e).forEach(r=>{let s;try{s=o(e[r])}catch{return}n+=(i?"&":"?")+encodeURIComponent(r)+"="+s,i=!0}),n},gt={},M={},Wt=()=>{let t;try{if(t=fetch,typeof t=="function")return t}catch{}return null};let it=Wt();function Xt(t,e){const n=tt(t);if(!n)return 0;let i;if(!n.maxURL)i=0;else{let r=0;n.resources.forEach(c=>{r=Math.max(r,c.length)});const s=pt(e+".json",{icons:""});i=n.maxURL-r-n.path.length-s.length}const o=t+":"+e;return M[t]=n.path,gt[o]=i,i}function Zt(t){return t===404}const te=(t,e,n)=>{const i=[];let o=gt[e];o===void 0&&(o=Xt(t,e));const r="icons";let s={type:r,provider:t,prefix:e,icons:[]},c=0;return n.forEach((l,f)=>{c+=l.length+1,c>=o&&f>0&&(i.push(s),s={type:r,provider:t,prefix:e,icons:[]},c=l.length),s.icons.push(l)}),i.push(s),i};function ee(t){if(typeof t=="string"){if(M[t]===void 0){const e=tt(t);if(!e)return"/";M[t]=e.path}return M[t]}return"/"}const ne=(t,e,n)=>{if(!it){n("abort",424);return}let i=ee(e.provider);switch(e.type){case"icons":{const r=e.prefix,c=e.icons.join(",");i+=pt(r+".json",{icons:c});break}case"custom":{const r=e.uri;i+=r.slice(0,1)==="/"?r.slice(1):r;break}default:n("abort",400);return}let o=503;it(t+i).then(r=>{const s=r.status;if(s!==200){setTimeout(()=>{n(Zt(s)?"abort":"next",s)});return}return o=501,r.json()}).then(r=>{if(typeof r!="object"||r===null){setTimeout(()=>{n("next",o)});return}setTimeout(()=>{n("success",r)})}).catch(()=>{n("next",o)})},oe={prepare:te,send:ne};function re(t){const e={loaded:[],missing:[],pending:[]},n=Object.create(null);t.sort((o,r)=>o.provider!==r.provider?o.provider.localeCompare(r.provider):o.prefix!==r.prefix?o.prefix.localeCompare(r.prefix):o.name.localeCompare(r.name));let i={provider:"",prefix:"",name:""};return t.forEach(o=>{if(i.name===o.name&&i.prefix===o.prefix&&i.provider===o.provider)return;i=o;const r=o.provider,s=o.prefix,c=o.name;n[r]===void 0&&(n[r]=Object.create(null));const l=n[r];l[s]===void 0&&(l[s]=x(r,s));const f=l[s];let a;f.icons[c]!==void 0?a=e.loaded:s===""||f.missing[c]!==void 0?a=e.missing:a=e.pending;const h={provider:r,prefix:s,name:c};a.push(h)}),e}const b=Object.create(null),q=Object.create(null);function yt(t,e){t.forEach(n=>{const i=n.provider;if(b[i]===void 0)return;const o=b[i],r=n.prefix,s=o[r];s&&(o[r]=s.filter(c=>c.id!==e))})}function ie(t,e){q[t]===void 0&&(q[t]=Object.create(null));const n=q[t];n[e]||(n[e]=!0,setTimeout(()=>{if(n[e]=!1,b[t]===void 0||b[t][e]===void 0)return;const i=b[t][e].slice(0);if(!i.length)return;const o=x(t,e);let r=!1;i.forEach(s=>{const c=s.icons,l=c.pending.length;c.pending=c.pending.filter(f=>{if(f.prefix!==e)return!0;const a=f.name;if(o.icons[a]!==void 0)c.loaded.push({provider:t,prefix:e,name:a});else if(o.missing[a]!==void 0)c.missing.push({provider:t,prefix:e,name:a});else return r=!0,!0;return!1}),c.pending.length!==l&&(r||yt([{provider:t,prefix:e}],s.id),s.callback(c.loaded.slice(0),c.missing.slice(0),c.pending.slice(0),s.abort))})}))}let se=0;function ce(t,e,n){const i=se++,o=yt.bind(null,n,i);if(!e.pending.length)return o;const r={id:i,icons:e,callback:t,abort:o};return n.forEach(s=>{const c=s.provider,l=s.prefix;b[c]===void 0&&(b[c]=Object.create(null));const f=b[c];f[l]===void 0&&(f[l]=[]),f[l].push(r)}),o}function le(t,e=!0,n=!1){const i=[];return t.forEach(o=>{const r=typeof o=="string"?L(o,!1,n):o;(!e||O(r,n))&&i.push({provider:r.provider,prefix:r.prefix,name:r.name})}),i}var st={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function fe(t,e,n,i){const o=t.resources.length,r=t.random?Math.floor(Math.random()*o):t.index;let s;if(t.random){let d=t.resources.slice(0);for(s=[];d.length>1;){const g=Math.floor(Math.random()*d.length);s.push(d[g]),d=d.slice(0,g).concat(d.slice(g+1))}s=s.concat(d)}else s=t.resources.slice(r).concat(t.resources.slice(0,r));const c=Date.now();let l="pending",f=0,a,h=null,u=[],p=[];typeof i=="function"&&p.push(i);function y(){h&&(clearTimeout(h),h=null)}function j(){l==="pending"&&(l="aborted"),y(),u.forEach(d=>{d.status==="pending"&&(d.status="aborted")}),u=[]}function R(d,g){g&&(p=[]),typeof d=="function"&&p.push(d)}function Et(){return{startTime:c,payload:e,status:l,queriesSent:f,queriesPending:u.length,subscribe:R,abort:j}}function P(){l="failed",p.forEach(d=>{d(void 0,a)})}function ot(){u.forEach(d=>{d.status==="pending"&&(d.status="aborted")}),u=[]}function Pt(d,g,S){const A=g!=="success";switch(u=u.filter(v=>v!==d),l){case"pending":break;case"failed":if(A||!t.dataAfterTimeout)return;break;default:return}if(g==="abort"){a=S,P();return}if(A){a=S,u.length||(s.length?N():P());return}if(y(),ot(),!t.random){const v=t.resources.indexOf(d.resource);v!==-1&&v!==t.index&&(t.index=v)}l="completed",p.forEach(v=>{v(S)})}function N(){if(l!=="pending")return;y();const d=s.shift();if(d===void 0){if(u.length){h=setTimeout(()=>{y(),l==="pending"&&(ot(),P())},t.timeout);return}P();return}const g={status:"pending",resource:d,callback:(S,A)=>{Pt(g,S,A)}};u.push(g),f++,h=setTimeout(N,t.rotate),n(d,e,g.callback)}return setTimeout(N),Et}function ae(t){if(typeof t!="object"||typeof t.resources!="object"||!(t.resources instanceof Array)||!t.resources.length)throw new Error("Invalid Reduncancy configuration");const e=Object.create(null);let n;for(n in st)t[n]!==void 0?e[n]=t[n]:e[n]=st[n];return e}function mt(t){const e=ae(t);let n=[];function i(){n=n.filter(c=>c().status==="pending")}function o(c,l,f){const a=fe(e,c,l,(h,u)=>{i(),f&&f(h,u)});return n.push(a),a}function r(c){const l=n.find(f=>c(f));return l!==void 0?l:null}return{query:o,find:r,setIndex:c=>{e.index=c},getIndex:()=>e.index,cleanup:i}}function ct(){}const $=Object.create(null);function ue(t){if($[t]===void 0){const e=tt(t);if(!e)return;const n=mt(e),i={config:e,redundancy:n};$[t]=i}return $[t]}function he(t,e,n){let i,o;if(typeof t=="string"){const r=Y(t);if(!r)return n(void 0,424),ct;o=r.send;const s=ue(t);s&&(i=s.redundancy)}else{const r=X(t);if(r){i=mt(r);const s=t.resources?t.resources[0]:"",c=Y(s);c&&(o=c.send)}}return!i||!o?(n(void 0,424),ct):i.query(e,o,n)().abort}const z={};function lt(){}const w=Object.create(null),Q=Object.create(null),V=Object.create(null),K=Object.create(null);function de(t,e){V[t]===void 0&&(V[t]=Object.create(null));const n=V[t];n[e]||(n[e]=!0,setTimeout(()=>{n[e]=!1,ie(t,e)}))}const ft=Object.create(null);function pe(t,e,n){function i(){const c=(t===""?"":"@"+t+":")+e,l=Math.floor(Date.now()/6e4);ft[c]<l&&(ft[c]=l,console.error('Unable to retrieve icons for "'+c+'" because API is not configured properly.'))}Q[t]===void 0&&(Q[t]=Object.create(null));const o=Q[t];K[t]===void 0&&(K[t]=Object.create(null));const r=K[t];w[t]===void 0&&(w[t]=Object.create(null));const s=w[t];o[e]===void 0?o[e]=n:o[e]=o[e].concat(n).sort(),r[e]||(r[e]=!0,setTimeout(()=>{r[e]=!1;const c=o[e];delete o[e];const l=Y(t);if(!l){i();return}l.prepare(t,e,c).forEach(a=>{he(t,a,(h,u)=>{const p=x(t,e);if(typeof h!="object"){if(u!==404)return;const y=Date.now();a.icons.forEach(j=>{p.missing[j]=y})}else try{const y=W(p,h);if(!y.length)return;const j=s[e];y.forEach(R=>{delete j[R]}),z.store&&z.store(t,h)}catch(y){console.error(y)}de(t,e)})})}))}const ge=(t,e)=>{const n=le(t,!0,ht()),i=re(n);if(!i.pending.length){let f=!0;return e&&setTimeout(()=>{f&&e(i.loaded,i.missing,i.pending,lt)}),()=>{f=!1}}const o=Object.create(null),r=[];let s,c;i.pending.forEach(f=>{const a=f.provider,h=f.prefix;if(h===c&&a===s)return;s=a,c=h,r.push({provider:a,prefix:h}),w[a]===void 0&&(w[a]=Object.create(null));const u=w[a];u[h]===void 0&&(u[h]=Object.create(null)),o[a]===void 0&&(o[a]=Object.create(null));const p=o[a];p[h]===void 0&&(p[h]=[])});const l=Date.now();return i.pending.forEach(f=>{const a=f.provider,h=f.prefix,u=f.name,p=w[a][h];p[u]===void 0&&(p[u]=l,o[a][h].push(u))}),r.forEach(f=>{const a=f.provider,h=f.prefix;o[a][h].length&&pe(a,h,o[a][h])}),e?ce(e,i,r):lt},bt="iconify2",E="iconify",vt=E+"-count",wt=E+"-version",It=36e5,ye=168,et={local:!0,session:!0};let G=!1;const xt={local:0,session:0},jt={local:[],session:[]};let D=typeof window>"u"?{}:window;function St(t){const e=t+"Storage";try{if(D&&D[e]&&typeof D[e].length=="number")return D[e]}catch{}return et[t]=!1,null}function nt(t,e,n){try{return t.setItem(vt,n.toString()),xt[e]=n,!0}catch{return!1}}function kt(t){const e=t.getItem(vt);if(e){const n=parseInt(e);return n||0}return 0}function me(t,e){try{t.setItem(wt,bt)}catch{}nt(t,e,0)}function be(t){try{const e=kt(t);for(let n=0;n<e;n++)t.removeItem(E+n.toString())}catch{}}const _t=()=>{if(G)return;G=!0;const t=Math.floor(Date.now()/It)-ye;function e(n){const i=St(n);if(!i)return;const o=r=>{const s=E+r.toString(),c=i.getItem(s);if(typeof c!="string")return!1;let l=!0;try{const f=JSON.parse(c);if(typeof f!="object"||typeof f.cached!="number"||f.cached<t||typeof f.provider!="string"||typeof f.data!="object"||typeof f.data.prefix!="string")l=!1;else{const a=f.provider,h=f.data.prefix,u=x(a,h);l=W(u,f.data).length>0}}catch{l=!1}return l||i.removeItem(s),l};try{const r=i.getItem(wt);if(r!==bt){r&&be(i),me(i,n);return}let s=kt(i);for(let c=s-1;c>=0;c--)o(c)||(c===s-1?s--:jt[n].push(c));nt(i,n,s)}catch{}}for(const n in et)e(n)},ve=(t,e)=>{G||_t();function n(i){if(!et[i])return!1;const o=St(i);if(!o)return!1;let r=jt[i].shift();if(r===void 0&&(r=xt[i],!nt(o,i,r+1)))return!1;try{const s={cached:Math.floor(Date.now()/It),provider:t,data:e};o.setItem(E+r.toString(),JSON.stringify(s))}catch{return!1}return!0}Object.keys(e.icons).length&&(e.not_found&&(e=Object.assign({},e),delete e.not_found),n("local")||n("session"))},Ot=/[\s,]+/;function we(t,e){e.split(Ot).forEach(n=>{switch(n.trim()){case"horizontal":t.hFlip=!0;break;case"vertical":t.vFlip=!0;break}})}function Ie(t,e){e.split(Ot).forEach(n=>{const i=n.trim();switch(i){case"left":case"center":case"right":t.hAlign=i;break;case"top":case"middle":case"bottom":t.vAlign=i;break;case"slice":case"crop":t.slice=!0;break;case"meet":t.slice=!1}})}function xe(t,e=0){const n=t.replace(/^-?[0-9.]*/,"");function i(o){for(;o<0;)o+=4;return o%4}if(n===""){const o=parseInt(t);return isNaN(o)?0:i(o)}else if(n!==t){let o=0;switch(n){case"%":o=25;break;case"deg":o=90}if(o){let r=parseFloat(t.slice(0,t.length-n.length));return isNaN(r)?0:(r=r/o,r%1===0?i(r):0)}}return e}const je={xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img",style:{}},Se={...dt,inline:!0},ke=(t,e,n,i)=>{const o=n?Se:dt,r=qt(o,e),s=typeof e.style=="object"&&e.style!==null?e.style:{},c={...je,ref:i,style:s};for(let h in e){const u=e[h];if(u!==void 0)switch(h){case"icon":case"style":case"children":case"onLoad":case"_ref":case"_inline":break;case"inline":case"hFlip":case"vFlip":r[h]=u===!0||u==="true"||u===1;break;case"flip":typeof u=="string"&&we(r,u);break;case"align":typeof u=="string"&&Ie(r,u);break;case"color":s.color=u;break;case"rotate":typeof u=="string"?r[h]=xe(u):typeof u=="number"&&(r[h]=u);break;case"ariaHidden":case"aria-hidden":u!==!0&&u!=="true"&&delete c["aria-hidden"];break;default:o[h]===void 0&&(c[h]=u)}}const l=Kt(t,r);let f=0,a=e.id;typeof a=="string"&&(a=a.replace(/-/g,"_")),c.dangerouslySetInnerHTML={__html:zt(l.body,a?()=>a+"ID"+f++:"iconifyReact")};for(let h in l.attributes)c[h]=l.attributes[h];return l.inline&&s.verticalAlign===void 0&&(s.verticalAlign="-0.125em"),I.createElement("svg",c)};ht(!0);Gt("",oe);if(typeof document<"u"&&typeof window<"u"){z.store=ve,_t();const t=window;if(t.IconifyPreload!==void 0){const e=t.IconifyPreload,n="Invalid IconifyPreload syntax.";typeof e=="object"&&e!==null&&(e instanceof Array?e:[e]).forEach(i=>{try{(typeof i!="object"||i===null||i instanceof Array||typeof i.icons!="object"||typeof i.prefix!="string"||!Ut(i))&&console.error(n)}catch{console.error(n)}})}if(t.IconifyProviders!==void 0){const e=t.IconifyProviders;if(typeof e=="object"&&e!==null)for(let n in e){const i="IconifyProviders["+n+"] is invalid.";try{const o=e[n];if(typeof o!="object"||!o||o.resources===void 0)continue;Jt(n,o)||console.error(i)}catch{console.error(i)}}}}class Ct extends I.Component{constructor(e){super(e),this.state={icon:null}}_abortLoading(){this._loading&&(this._loading.abort(),this._loading=null)}_setData(e){this.state.icon!==e&&this.setState({icon:e})}_checkIcon(e){const n=this.state,i=this.props.icon;if(typeof i=="object"&&i!==null&&typeof i.body=="string"){this._icon="",this._abortLoading(),(e||n.icon===null)&&this._setData({data:J(i)});return}let o;if(typeof i!="string"||(o=L(i,!1,!0))===null){this._abortLoading(),this._setData(null);return}const r=Rt(o);if(r===null){(!this._loading||this._loading.name!==i)&&(this._abortLoading(),this._icon="",this._setData(null),this._loading={name:i,abort:ge([o],this._checkIcon.bind(this,!1))});return}if(this._icon!==i||n.icon===null){this._abortLoading(),this._icon=i;const s=["iconify"];o.prefix!==""&&s.push("iconify--"+o.prefix),o.provider!==""&&s.push("iconify--"+o.provider),this._setData({data:r,classes:s}),this.props.onLoad&&this.props.onLoad(i)}}componentDidMount(){this._checkIcon(!1)}componentDidUpdate(e){e.icon!==this.props.icon&&this._checkIcon(!0)}componentWillUnmount(){this._abortLoading()}render(){const e=this.props,n=this.state.icon;if(n===null)return e.children?e.children:I.createElement("span",{});let i=e;return n.classes&&(i={...e,className:(typeof e.className=="string"?e.className+" ":"")+n.classes.join(" ")}),ke(n.data,i,e._inline,e._ref)}}const Oe=I.forwardRef(function(e,n){const i={...e,_ref:n,_inline:!1};return I.createElement(Ct,i)});I.forwardRef(function(e,n){const i={...e,_ref:n,_inline:!0};return I.createElement(Ct,i)});export{Oe as I};
