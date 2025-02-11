import{r as e,j as l}from"./react@18.2.0.CwGjMYfB.js";import{t,u as r}from"./index.Byvhhw0N.js";import{R as n}from"./react-resizable@3.0.5_react-dom@18.2.0_react@18.2.0.BqjaEpGj.js";import{l as o}from"./lodash@4.17.21.CdzfGhvh.js";import{u as i}from"./react-i18next@14.1.1_i18next@23.11.4_react-dom@18.2.0_react@18.2.0.CoFanrD1.js";import{v as s,o as a,w as c,B as d,s as u,x as h}from"./antd@5.20.2_react-dom@18.2.0_react@18.2.0.DxyHYYAl.js";import{o as p,p as g,g as f}from"./@ant-design_icons@5.3.7_react-dom@18.2.0_react@18.2.0.1hpSyJyf.js";function m(e){switch(e){case"large":return 54;case"middle":return 46;default:return 38}}function v(e){for(let l=0;l<(null==e?void 0:e.length);l++){const r=e[l];void 0===r.ellipsis&&(r.ellipsis=!0),r.render||(r.render=e=>e||(0===e?e:t))}return e}function x(e){const{onResize:t,width:r,...o}=e;return r?l.jsx(n,{width:r,height:0,handle:l.jsx("span",{className:"react-resizable-handle",onClick:e=>{e.stopPropagation()}}),onResize:t,draggableOpts:{enableUserSelectHack:!1},children:l.jsx("th",{...o})}):l.jsx("th",{...o})}function b(e,l){switch(l.type){case"changeScroll":let t=l.curScrollTop||0,r=l.scrollHeight||0;const n=l.tableScrollY||0;return r<=0&&(r=0),0!==r&&n===e.tableScrollY&&(r=e.scrollHeight),e.scrollHeight&&t>e.scrollHeight&&(t=e.scrollHeight),{...e,curScrollTop:t,scrollHeight:r,tableScrollY:n};case"reset":return{...e,curScrollTop:0,scrollHeight:0};default:throw new Error("表格：未知错误类型!")}}function w(e){return"number"==typeof e&&isFinite(e)}const j=e.createContext({dispatch:void 0,renderLen:1,start:0,offsetStart:0,rowHeight:46,totalLen:0});function y(t){const{children:r,...n}=t,{renderLen:o,start:i,offsetStart:s}=e.useContext(j);let a=null;if(r&&null!==r){const e=null==r?void 0:r[1];a=Array.isArray(e)&&e.length?[null==r?void 0:r[0],e.slice(i,i+o).map((e=>Array.isArray(e)?e[0]:e))]:r}return l.jsx("tbody",{...n,style:{transform:`translateY(-${s}px)`},children:a})}const H={rowHeight:38,curScrollTop:0,scrollHeight:0,tableScrollY:0};let S=0;function N(t){var r,n,i,s,a;const{style:c,children:d,...u}=t,{width:h,...p}=c,[g,f]=e.useReducer(b,H),m=e.useRef(null),v=e.useRef(null),[x,y]=e.useState((null==(i=null==(n=null==(r=null==d?void 0:d[2])?void 0:r.props)?void 0:n.data)?void 0:i.length)??0);e.useEffect((()=>{var e,l,t,r,n,o;w(null==(t=null==(l=null==(e=null==d?void 0:d[1])?void 0:e.props)?void 0:l.data)?void 0:t.length)&&y(null==(o=null==(n=null==(r=null==d?void 0:d[1])?void 0:r.props)?void 0:n.data)?void 0:o.length)}),[d]);const N=e.useMemo((()=>{let e="auto";return g.rowHeight&&x&&(e=g.rowHeight*x),e}),[g.rowHeight,x]);let C=0;C="string"==typeof S?null==(a=null==(s=m.current)?void 0:s.parentNode)?void 0:a.offsetHeight:S,w(N)&&Number(N)<C&&(C=N),C<=0&&(C=0);const k=e.useMemo((()=>{let e=1;if(g.rowHeight&&x&&C)if(C<=0)e=0;else{const l=5+(C/g.rowHeight|0);e=l>x?x:l}return e}),[g.rowHeight,x,C]);let T=g.rowHeight?g.curScrollTop/g.rowHeight|0:0,z=g.rowHeight?g.curScrollTop%g.rowHeight:0;g.curScrollTop&&g.rowHeight&&g.curScrollTop>g.rowHeight?T>x-k?z=0:T>1&&(T-=1,z+=g.rowHeight):T=0,e.useEffect((()=>{var e;const l=null==(e=m.current)?void 0:e.parentNode;l&&(l.scrollTop=0),f({type:"reset"})}),[x]);const E=o.throttle((e=>{var l,t;const r=(null==(l=null==e?void 0:e.target)?void 0:l.scrollTop)??0;if(r!==g.curScrollTop){const l=(null==(t=null==e?void 0:e.target)?void 0:t.scrollHeight)-C;f({type:"changeScroll",curScrollTop:r,scrollHeight:l,tableScrollY:C})}}),60);return e.useEffect((()=>{var e;const l=null==(e=null==m?void 0:m.current)?void 0:e.parentNode;return l&&l.addEventListener("scroll",(e=>E(e))),()=>{l.removeEventListener("scroll",(e=>E(e)))}}),[m,g.curScrollTop,C,g.scrollHeight,E]),l.jsx("div",{className:"virtualTable",ref:m,style:{width:"100%",position:"relative",height:N,boxSizing:"border-box",paddingTop:g.curScrollTop},children:l.jsx(j.Provider,{value:{dispatch:f,rowHeight:g.rowHeight,start:T,offsetStart:z,renderLen:k,totalLen:x},children:l.jsx("table",{...u,ref:v,style:{...p,width:h,position:"relative"},children:d})})})}function C(t){const{columns:r,className:n,getTableChecks:o}=t,{t:h}=i(),[g,f]=e.useState(!1),[m,v]=e.useState([]),[x,b]=e.useState([]),w=m.length===x.length,j=x.length>0&&x.length<m.length,y={...t};delete y.getTableChecks,e.useEffect((()=>{S(r)}),[r]);const H=()=>{f(!g)},S=e=>{if(!(null==e?void 0:e.length))return[];const l=[],t=[];for(let r=0;r<(null==e?void 0:e.length);r++){const n=e[r],{dataIndex:o}=n;!n.hidden&&o&&(null==t||t.push(o)),l.push({label:n.title,value:o})}v(l),b(t)},N=e=>{b(e)},C=()=>{if(!(null==x?void 0:x.length))return u.warning({content:h("public.checkAllWarning"),key:"filter"});H(),o(x)},k=e=>{const l=e.target.checked?m.map((e=>e.value)):[];b(l)};return l.jsx(s,{content:()=>l.jsxs("div",{className:"min-w-130px",children:[l.jsx(a,{className:"!px-12px",indeterminate:j,onChange:k,checked:w,children:h("public.checkAll")}),l.jsx(a.Group,{className:"flex flex-col !px-12px",value:x,onChange:N,children:null==m?void 0:m.map((e=>l.jsx("div",{children:l.jsx(a,{value:e.value,children:e.label})},e.value)))}),l.jsx(c,{className:"!mt-10px !mb-5px"}),l.jsxs("div",{className:"flex justify-end px-10px",children:[l.jsx(d,{size:"small",className:"mr-5px",onClick:H,children:"取消"}),l.jsx(d,{type:"primary",size:"small",onClick:C,children:"筛选"})]})]}),trigger:"click",placement:"bottom",overlayInnerStyle:{padding:"12px 0 10px"},open:g,onOpenChange:H,children:l.jsx("div",{...y,className:`${n} inline-block cursor-pointer`,children:l.jsx(p,{})})})}function k(n){const{isLoading:o,isVirtual:s,isCreate:a,isZebra:c=!0,isBordered:p=!0,isOperate:b=!0,isAuthHeight:w,scrollX:j,scrollY:k,rowClassName:T,size:z,leftContent:E,rightContent:R,getPage:A,onCreate:_}=n,{t:L}=i(),{isPhone:B}=r(),[Y]=function(){const[l,t]=e.useState(!0);return[(e,r)=>{if(!(null==r?void 0:r.length)||!(null==e?void 0:e.length))return e||[];if(l)return t(!1),e||[];for(let l=0;l<(null==e?void 0:e.length);l++){const t=e[l];t.hidden=!r.includes(t.dataIndex)}return e}]}(),[$,P]=e.useState(v(n.columns)),I=e.useRef(null),[M,W]=e.useState([]);e.useEffect((()=>{P(v(n.columns))}),[n.columns]),e.useEffect((()=>{a&&!_&&u.warning(L("public.createMethodWarning"))}),[a]),e.useEffect((()=>{b&&!A&&u.warning(L("public.getPageWarning"))}),[A]);const O=function(e){var l,t;const r=document.documentElement.clientHeight||document.body.clientHeight,n=(null==(t=null==(l=null==e?void 0:e.getBoundingClientRect)?void 0:l.call(e))?void 0:t.top)||0,o=document.getElementById("pagination"),i=r-n-((null==o?void 0:o.offsetHeight)||0);return i>0?i-65:450}(I.current),F=e=>(l,{size:t})=>{const r=[...$];r[e]={...r[e],width:t.width},P(r)},K=function(e){const{height:l,size:t}=e;return S=l,H.rowHeight=m(t),{table:N,body:{wrapper:y}}}({height:O,size:z||"small"}),G=e.useMemo((()=>({header:{cell:x},body:{wrapper:K.body.wrapper},table:K.table})),[K]),U=s?G:{header:{cell:x}},V={...n.scroll,x:j??"max-content",y:k??(w?O:void 0)};return l.jsxs("div",{id:"table",className:`\n        overflow-auto\n        ${!1!==p?"bordered":""}\n        ${!1!==c?"zebra":""}\n      `,children:[b&&l.jsxs("div",{className:"flex justify-between !mb-10px",children:[l.jsxs("div",{className:"flex flex-wrap items-center",children:[!!a&&l.jsx(d,{type:"primary",className:"mr-10px",icon:l.jsx(g,{}),onClick:_,children:L("public.create")}),E]}),l.jsxs("div",{className:"flex flex-wrap items-center",children:[R?l.jsx("div",{className:"mr-10px",children:R}):void 0,l.jsx(f,{className:"mr-10px transform rotate-270 cursor-pointer",disabled:!!o,onClick:A}),l.jsx(C,{className:"mr-10px",columns:$,getTableChecks:e=>{W(e)}})]})]}),l.jsx("div",{ref:I,children:l.jsx(h,{size:"small",rowKey:"id",pagination:!1,loading:o,...n,rowClassName:(e,l,t)=>`${("string"==typeof T?T:null==T?void 0:T(e,l,t))||""} ${`!h-${m(z)}px`}`,style:{borderRadius:10,borderRight:"1px solid rgba(0, 0, 0, .05)",borderBottom:"1px solid rgba(0, 0, 0, .05)",overflow:"auto",...n.style},bordered:!1!==p,scroll:V,components:U,columns:(()=>{const e=Y($,M);if(!e)return[];return e.map(((e,r)=>({...e,fixed:!(!(null==e?void 0:e.fixed)||B&&!(null==e?void 0:e.isKeepFixed))&&e.fixed,onHeaderCell:(l,t)=>{var n;return{...null==(n=null==e?void 0:e.onHeaderCell)?void 0:n.call(e,l,t),width:e.width,onResize:F(r)}},render:(r,n,o)=>{var i;const s=null==(i=null==e?void 0:e.render)?void 0:i.call(e,r,n,o);let a,c=r;const d=null==e?void 0:e.enum;if(d&&"object"==typeof d)if(Array.isArray(d))for(let e=0;e<(null==d?void 0:d.length);e++){const l=d[e];if(l.value===r){c=l.label,a=l.color;break}}else for(const e in d)if(e===r){c=d[e];break}return["object","function"].includes(typeof s)?s:l.jsx("span",{style:{maxWidth:e.width,color:a},className:"ellipsis break-all",title:c,children:String(c??t)})}})))})()})})]})}export{k as B};
