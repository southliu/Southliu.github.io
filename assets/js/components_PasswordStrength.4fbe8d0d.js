import{j as a,r as i}from"./react.402eeaf7.js";import{P as g}from"./components_Business.97a40718.js";import{u as c}from"./ahooks.59ab49ed.js";import{I as f}from"./antd.2a715811.js";const h=new Array(5).fill(0).map((n,t)=>t+1);function m(n){const{strength:t}=n;return a.jsx("div",{className:"flex items-center",children:h.map(s=>a.jsx("div",{className:`
              w-19%
              h-5px
              mt-5px
              mr-1%
              rounded-10px
              bg-light-900
              ${s<=t&&t>3?"!bg-green-400":""}
              ${s<=t&&t===3?"!bg-yellow-400":""}
              ${s<=t&&t<3?"!bg-red-400":""}
            `},s))})}function j(n){const{value:t}=n,[s,l]=i.useState(0),o=c(e=>{if(!e)return;let r=0;/\d/.test(e)&&r++,/[a-z]/.test(e)&&r++,/[A-Z]/.test(e)&&r++,e.length>10&&r++,/[\.\~\@\#\$\^\&\*]/.test(e)&&r++,l(r)},{wait:500});return i.useEffect(()=>{o.run(t)},[o,t]),a.jsxs(a.Fragment,{children:[a.jsx(f.Password,{value:t,allowClear:!0,placeholder:g,autoComplete:"password",...n,onChange:e=>{var r;(r=n.onChange)==null||r.call(n,e),o.run(e.target.value)}}),!!s&&a.jsx(m,{strength:s})]})}export{j as P};
