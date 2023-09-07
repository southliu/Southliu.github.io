import{j as e,r as l}from"./react.a7da97a2.js";import{I as n}from"./@iconify_react.bcaf6c88.js";import{u as t}from"./ahooks.93e76957.js";import{a}from"./react-redux.5cd65198.js";import{L as s}from"./components_Business.13a3a6ce.js";import{c as o}from"./@reduxjs_toolkit.fb91ade4.js";import{u as r}from"./components_Fullscreen.805c0516.js";import{u as i}from"./react-i18next.1d91db1a.js";import{u as c}from"./react-router.31c22429.js";import{M as u,I as d,T as h}from"./antd.850acb68.js";const m=o({name:"menu",initialState:{isPhone:!1,isCollapsed:!1,selectedKeys:"dashboard",openKeys:["Dashboard"]},reducers:{toggleCollapsed:(e,l)=>{e.isCollapsed=!!l.payload},togglePhone:(e,l)=>{e.isPhone=!!l.payload},setSelectedKeys:(e,l)=>{e.selectedKeys=l.payload},setOpenKeys:(e,l)=>{e.openKeys=l.payload}}}),{toggleCollapsed:p,togglePhone:b,setSelectedKeys:v,setOpenKeys:y}=m.actions,x=m.reducer,g=[{label:"仪表盘",labelEn:"Dashboard",key:"dashboard",icon:"la:tachometer-alt",children:[{label:"数据总览",labelEn:"Data Overview",key:"/dashboard",rule:"/dashboard"}]},{label:"组件",labelEn:"Components",key:"demo",icon:"fluent:box-20-regular",children:[{label:"剪切板",labelEn:"Copy",key:"/demo/copy",rule:"/demo/copy"},{label:"水印",labelEn:"Watermark",key:"/demo/watermark",rule:"/demo/watermark"},{label:"虚拟滚动",labelEn:"Virtual Scroll",key:"/demo/virtualScroll",rule:"/demo/virtualScroll"},{label:"富文本",labelEn:"Editor",key:"/demo/editor",rule:"/demo/editor"},{label:"层级1",labelEn:"Level1",key:"/demo/level1",children:[{label:"层级2",labelEn:"Level2",key:"/demo/level1/level2",children:[{label:"层级3",labelEn:"Level3",key:"/demo/level1/level2/level3",rule:"/demo/watermark"}]}]}]},{label:"系统管理",labelEn:"System Management",key:"system",icon:"ion:settings-outline",children:[{label:"用户管理",labelEn:"User Management",key:"/system/user",rule:"/authority/user"},{label:"菜单管理",labelEn:"Menu Management",key:"/system/menu",rule:"/authority/menu"}]},{label:"内容管理",labelEn:"Content Management",key:"content",icon:"majesticons:article-search-line",children:[{label:"文章管理",labelEn:"Article Management",key:"/content/article",rule:"/content/article"}]}],f=o({name:"tabs",initialState:{isLock:!1,isMaximize:!1,activeKey:"",nav:[],tabs:[]},reducers:{toggleLock:(e,l)=>{e.isLock=!!l.payload},toggleMaximize:(e,l)=>{e.isMaximize=!!l.payload},setActiveKey:(e,l)=>{e.activeKey=l.payload},setNav:(e,l)=>{e.nav=l.payload},switchTabsLang:(e,l)=>{const{tabs:n}=e,{payload:t}=l;for(let a=0;a<(null==n?void 0:n.length);a++){const e=n[a];e.label="en"===t?e.labelEn:e.labelZh}},addTabs:(e,l)=>{const{tabs:n}=e,{payload:t}=l;n.find((e=>e.key===t.key))||n.push(t),(null==n?void 0:n.length)&&(n[0].closable=(null==n?void 0:n.length)>1)},closeTabs:(e,l)=>{var n;const{tabs:t}=e,{payload:a}=l,s=t.findIndex((e=>e.key===a));if(s>=0&&t.splice(s,1),a===e.activeKey){let l="";l=0===s?(null==(n=null==t?void 0:t[s])?void 0:n.key)||"":t[s-1].key,e.activeKey=l,e.isLock=!0}(null==t?void 0:t.length)&&(t[0].closable=(null==t?void 0:t.length)>1)},closeTabGoNext:(e,l)=>{const{tabs:n}=e,{payload:t}=l,{key:a,nextPath:s}=t,o=n.findIndex((e=>e.key===a));o>=0&&n.splice(o,1),a===e.activeKey&&(e.activeKey=s,e.isLock=!0),(null==n?void 0:n.length)&&(n[0].closable=(null==n?void 0:n.length)>1)},closeLeft:(e,l)=>{const{tabs:n}=e,{payload:t}=l,a=n.findIndex((e=>e.key===t));a>=0&&n.splice(0,a),e.activeKey=n[0].key,(null==n?void 0:n.length)&&(n[0].closable=(null==n?void 0:n.length)>1)},closeRight:(e,l)=>{const{tabs:n}=e,{payload:t}=l,a=n.findIndex((e=>e.key===t));a>=0&&n.splice(a+1,n.length-a-1),e.activeKey=n[n.length-1].key,(null==n?void 0:n.length)&&(n[0].closable=(null==n?void 0:n.length)>1)},closeOther:(e,l)=>{const{tabs:n}=e,{payload:t}=l,a=n.find((e=>e.key===t));a&&(e.tabs=[a],e.activeKey=a.key,e.isLock=!0),n[0].closable=!1},closeAllTab:e=>{e.tabs=[]}}}),{toggleLock:k,toggleMaximize:j,setActiveKey:E,setNav:w,switchTabsLang:N,addTabs:L,closeTabs:K,closeTabGoNext:C,closeLeft:S,closeRight:A,closeOther:I,closeAllTab:M}=f.actions,T=f.reducer;function P(e){const l=O(e),n=[];if(l.length>0&&n.push(l[0]),l.length>2){let e="/"+l[0];for(let t=1;t<l.length-1;t++)e+="/"+l[t],n.push(e)}return n}function R(e,l,n){const t=[],a=O(l);let s=0;const o=a.length;for(let r=0;r<n.length;r++){const{path:l}=n[r];if((null==l?void 0:l[s])===a[s]&&(t.push("en"===e?n[r].labelEn:n[r].label),s<o-1&&s++),s===o)return t}return t}function O(e){if(!e||"string"!=typeof e)return[];const l=(null==e?void 0:e.split("/"))||[];return""===(null==l?void 0:l[0])&&l.shift(),l}function Z(e){var l,n,t,a,o;const{menus:r,permissions:i,value:c}=e;let{currentPath:u,result:d}=e;if(!(null==r?void 0:r.length)||!c)return[];u||(u=[]),d||(d=[]);const h=localStorage.getItem(s);for(let s=0;s<r.length;s++)if(z(r[s])){u.push({label:r[s].label,labelZh:r[s].label,labelEn:r[s].labelEn,path:O(r[s].key)});const e=Z({menus:r[s].children,permissions:i,value:c,currentPath:u,result:d});e.length?d.concat(e):u.pop()}else if(("en"===h&&(null==(t=null==(n=null==(l=r[s])?void 0:l.labelEn)?void 0:n.toLocaleUpperCase())?void 0:t.includes(null==c?void 0:c.toLocaleUpperCase()))||"en"!==h&&(null==(o=null==(a=r[s])?void 0:a.label)?void 0:o.includes(c)))&&$(r[s],i)){u.push({label:r[s].label,labelZh:r[s].label,labelEn:r[s].labelEn,path:O(r[s].key)});const e=R(h,r[s].key,u),{label:l,labelEn:n,key:t}=r[s];d.push({label:l,labelEn:n,key:t,nav:e})}return d}function _(e){var l;const{menus:n,permissions:t,key:a}=e,o=localStorage.getItem(s);let{fatherNav:r,result:i}=e;if(!(null==n?void 0:n.length))return i;r||(r=[]),(null==i?void 0:i.key)||(i={key:"",label:"",labelZh:"",labelEn:"",nav:[]});for(let s=0;s<n.length;s++){if(!a||i.key)return i;const{label:e,labelEn:c,children:u}=n[s],d="en"===o?c:e;if(z(n[s])){r.push({label:d,labelZh:e,labelEn:c});const l=_({menus:u,permissions:t,key:a,fatherNav:r,result:i});(null==l?void 0:l.key)?i=l:r.pop()}else if((null==(l=n[s])?void 0:l.key)===a&&$(n[s],t)){const{key:l}=n[s];r.push({label:d,labelZh:e,labelEn:c}),l&&(i={label:e,labelZh:e,labelEn:c,key:l,nav:r})}}return i}function D(e,l){const n=[],t=JSON.parse(JSON.stringify(e)),a=localStorage.getItem(s);for(let s=0;s<t.length;s++){if(z(t[s])){const e=D(t[s].children,l);t[s].children=(null==e?void 0:e.length)?e:void 0}($(t[s],l)||z(t[s]))&&("en"===a&&(t[s].label=t[s].labelEn),n.push(t[s]))}return n}function U(e,l,n=""){if(n)return n;for(let t=0;t<e.length;t++){if(z(e[t])&&!n){const a=U(e[t].children,l,n);if(a)return n=a}$(e[t],l)&&!z(e[t])&&(n=e[t].key)}return n}function F(e){var l;const n=[];for(let t=0;t<(null==e?void 0:e.length);t++){const a=e[t];let s=[];(null==(l=a.children)?void 0:l.length)&&(s=F(a.children));const o={...a};(null==s?void 0:s.length)&&(o.children=s),delete o.labelEn,n.push(o)}return n}function $(e,l){return null==l?void 0:l.includes((null==e?void 0:e.rule)||"")}function z(e){var l;return Boolean(null==(l=e.children)?void 0:l.length)}function G(t){const{list:s,active:o,onCancel:u,changActive:d}=t,{t:h,i18n:m}=i(),{permissions:p}=r(),b=c(),v=a(),x=m.language;return e.jsxs(e.Fragment,{children:[!(null==s?void 0:s.length)&&e.jsxs("div",{className:"flex flex-col items-center pt-5 text-warm-gray-400",children:[e.jsx(n,{className:"text-40px",icon:"mdi:archive-cancel-outline"}),e.jsx("span",{className:"mt-1",children:h("public.notSearchContent")})]}),(null==s?void 0:s.length)>0&&e.jsx("div",{className:"mt-5",children:null==s?void 0:s.map((t=>{var a;return e.jsxs("div",{className:`\n                h-56px\n                mt-8px\n                px-14px\n                rounded-4px\n                cursor-pointer\n                flex\n                items-center\n                justify-between\n                shadow-md\n                border\n                border-light-500\n                ${o===t.key?"bg-blue-500 text-white":""}\n              `,onClick:()=>(e=>{b(e);const l=_({menus:g,permissions:p,key:e});v(L(l)),v(E(e));const n=P(e);v(y(n)),u()})(t.key),onMouseEnter:()=>{return e=t.key,void d(e);var e},children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx(n,{className:"text-lg mr-1",icon:"gg:menu-boxed"}),t.nav&&(null==(a=t.nav)?void 0:a.length)>0&&t.nav.map(((n,t)=>e.jsxs(l.Fragment,{children:[t>0&&e.jsx("span",{className:"mx-5px",children:">"}),e.jsx("span",{children:n})]},n))),!t.nav&&e.jsx("span",{children:"en"===x?t.labelEn:t.label})]}),e.jsx(n,{className:"icon text-20px p-2px mr-5px",icon:"ant-design:enter-outlined"})]},t.key)}))})]})}const q={icon:"_icon_1eshe_1"};function B(){const{t:l}=i();return e.jsxs("div",{className:"flex items-center text-dark-50",children:[e.jsxs("span",{className:"mr-14px flex items-center",children:[e.jsx(n,{className:`${q.icon} text-20px p-2px mr-5px`,icon:"ant-design:enter-outlined"}),e.jsx("span",{children:l("public.confirm")})]}),e.jsxs("span",{className:"mr-14px flex items-center",children:[e.jsx(n,{className:`${q.icon} text-20px p-2px mr-5px`,icon:"mdi-arrow-up-thin"}),e.jsx(n,{className:`${q.icon} text-20px p-2px mr-5px`,icon:"mdi-arrow-down-thin"}),e.jsx("span",{children:l("public.switch")})]}),e.jsxs("span",{className:"flex items-center",children:[e.jsx(n,{className:`${q.icon} text-20px p-2px mr-5px`,icon:"mdi:keyboard-esc"}),e.jsx("span",{children:l("public.close")})]})]})}function J(s){const o=c(),h=l.useRef(null),{modalRef:m}=s,{t:p}=i(),{permissions:b}=r(),[v,x]=l.useState(""),[f,k]=l.useState(""),[j,w]=l.useState([]),[N,K]=l.useState(!1),C=a();l.useImperativeHandle(m,(()=>({toggle:()=>{K(!N)}}))),l.useLayoutEffect((()=>(N&&setTimeout((()=>{var e;null==(e=h.current)||e.focus({cursor:"end"})}),0),()=>{x(""),k(""),w([])})),[N]);const S=()=>{K(!1)},A=()=>{if(f){o(f);const e=_({menus:g,permissions:b,key:f});C(L(e)),C(E(f));const l=P(f);C(y(l)),S()}},I=t((e=>{var l;const n=Z({menus:g,permissions:b,value:e});(null==n?void 0:n.length)?(k((null==(l=null==n?void 0:n[0])?void 0:l.key)||""),w(n)):(k(""),w([]))}),{wait:200}),[M]=(T={ArrowUp:()=>{if(!j.length)return null;const e=j.findIndex((e=>e.key===f));if(0===e)return null;const l=j[e-1].key;k(l)},ArrowDown:()=>{if(!j.length)return null;const e=j.length-1,l=j.findIndex((e=>e.key===f));if(l===e)return null;const n=j[l+1].key;k(n)},Enter:A},[e=>{var l,n,t,a,s;switch(e.key){case"ArrowUp":null==(l=T.ArrowUp)||l.call(T);break;case"ArrowDown":null==(n=T.ArrowDown)||n.call(T);break;case"ArrowLeft":null==(t=T.ArrowLeft)||t.call(T);break;case"ArrowRight":null==(a=T.ArrowRight)||a.call(T);break;case"Enter":null==(s=T.Enter)||s.call(T)}}]);var T;return l.useEffect((()=>{if(j.length)return window.addEventListener("keydown",M),()=>{window.removeEventListener("keydown",M)}}),[j,f,M]),e.jsxs(u,{className:"rounded-100px",open:N,closable:!1,onCancel:S,footer:e.jsx(B,{}),children:[e.jsx(d,{ref:h,value:v,placeholder:p("public.inputPleaseEnter"),allowClear:!0,prefix:e.jsx(n,{className:"text-lg text-warm-gray-400",icon:"ant-design:search-outlined"}),onChange:e=>{const{value:l}=e.target;x(l),I.run(l)},onPressEnter:A}),e.jsx(G,{list:j,active:f,onCancel:S,changActive:e=>{k(e)}})]})}function H(){const{t:t}=i(),a=l.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(h,{title:t("public.search"),children:e.jsx(n,{className:"flex items-center justify-center text-lg mr-3 cursor-pointer",icon:"uil-search",onClick:()=>{var e;null==(e=a.current)||e.toggle()}})}),e.jsx(J,{modalRef:a})]})}export{H as G,v as a,O as b,U as c,g as d,_ as e,D as f,P as g,F as h,E as i,w as j,L as k,M as l,A as m,S as n,I as o,K as p,j as q,N as r,y as s,p as t,k as u,b as v,C as w,x,T as y};