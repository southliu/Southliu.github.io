import{j as e}from"./react.e58b2294.js";import{u as a}from"./page_content_article.c256091a.js";import{a as l}from"./react-redux.72b6d945.js";import{F as o}from"./react-window.7a1c5c6e.js";import{A as n}from"./react-virtualized-auto-sizer.febbd09e.js";import{B as d}from"./components_Table.61158a82.js";function c(){const s=l(t=>t.public.theme),i=({index:t,style:r})=>e.jsxs("div",{className:`
        text-center
        ${t%2?"bg-#f8f8f0":""}
        ${s==="dark"&&t%2?"!bg-#141414":""}
      `,style:r,children:["Row ",t+1]});return e.jsx(n,{children:({height:t,width:r})=>e.jsx(o,{height:t,itemCount:1e4,itemSize:35,width:r,children:i})})}function m(){const s=[{title:"ID",dataIndex:"id",width:200},{title:"名称",dataIndex:"name",width:200},{title:"电话",dataIndex:"phone",width:200},{title:"数量",dataIndex:"number",width:200}],i=new Array(0).fill({});for(let t=0;t<1e4;t++){const r=t+1;i.push({id:r,name:"name"+r,phone:r*13,number:r*3})}return e.jsx(d,{isVirtual:!0,columns:s,dataSource:i,scrollY:500})}function b(){return a("虚拟滚动"),e.jsxs("div",{className:"flex px-30px h-full",children:[e.jsxs("div",{className:"flex flex-col mr-30px",children:[e.jsx("h2",{children:"虚拟滚动列表(10000条)："}),e.jsx("div",{className:"h-500px w-300px border border-cool-gray-100",children:e.jsx(c,{})})]}),e.jsxs("div",{children:[e.jsx("h2",{children:"虚拟滚动表格(10000条)："}),e.jsx(m,{})]})]})}export{b as V};