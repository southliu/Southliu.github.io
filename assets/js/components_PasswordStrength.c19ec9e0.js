import{j as a,a as f,F as g}from"./components_Bottom.2678ed38.js";import{r as i}from"./react.8863f702.js";import{P as c}from"./components_Business.af3e585e.js";import{u as m}from"./ahooks.01d12e2f.js";import{I as h}from"./antd.704edbd5.js";const d=new Array(5).fill(0).map((n,t)=>t+1);function u(n){const{strength:t}=n;return a("div",{className:"flex items-center",children:d.map(s=>a("div",{className:`
              w-19%
              h-5px
              mt-5px
              mr-1%
              rounded-10px
              bg-light-900
              ${s<=t&&t>3?"!bg-green-400":""}
              ${s<=t&&t===3?"!bg-yellow-400":""}
              ${s<=t&&t<3?"!bg-red-400":""}
            `},s))})}function P(n){const{value:t}=n,[s,l]=i.useState(0),o=m(e=>{if(!e)return;let r=0;/\d/.test(e)&&r++,/[a-z]/.test(e)&&r++,/[A-Z]/.test(e)&&r++,e.length>10&&r++,/[\.\~\@\#\$\^\&\*]/.test(e)&&r++,l(r)},{wait:500});return i.useEffect(()=>{o.run(t)},[o,t]),f(g,{children:[a(h.Password,{value:t,allowClear:!0,placeholder:c,autoComplete:"password",...n,onChange:e=>{var r;(r=n.onChange)==null||r.call(n,e),o.run(e.target.value)}}),!!s&&a(u,{strength:s})]})}export{P};
