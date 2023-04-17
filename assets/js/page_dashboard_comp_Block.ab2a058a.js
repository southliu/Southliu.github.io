import{j as e}from"./react.e58b2294.js";import{I as t}from"./@iconify_react.fa3c46fd.js";import{C as s}from"./components_Count.de0f20b5.js";import{p as o,q as r}from"./antd.2930504f.js";const a=[{title:"用户数",num:14966,all:16236,icon:"icon-park:peoples"},{title:"充值数",num:4286,all:6142,icon:"icon-park:paper-money"},{title:"订单数",num:5649,all:5232,icon:"icon-park:transaction-order"},{title:"游戏数",num:619,all:2132,icon:"icon-park:game-handle"}];function x(){return e.jsx(o,{gutter:16,children:a.map(n=>e.jsx(r,{span:6,children:e.jsxs("div",{className:`
                border
                border-gray-200
                px-30px
                py-20px
                box-border
                rounded-10px
              `,children:[e.jsx("div",{className:"text-20px font-bold",children:n.title}),e.jsxs("div",{className:"flex items-center justify-between text-35px mb-15px",children:[e.jsx(s,{className:"font-bold",start:0,end:n.num}),e.jsx(t,{icon:n.icon})]}),e.jsxs("div",{className:"flex align-center justify-between",children:[e.jsx("span",{children:"总数："}),e.jsx(s,{start:0,end:n.all})]})]})},n.title))})}export{x as B};
