import{j as e,a}from"./components_Bottom.d993aacd.js";import{I as r}from"./@iconify_react.5fde6161.js";import{C as o}from"./components_Count.7982c745.js";import{j as t,k as l}from"./antd.117302a7.js";const i=[{title:"用户数",num:14966,all:16236,icon:"icon-park:peoples"},{title:"充值数",num:4286,all:6142,icon:"icon-park:paper-money"},{title:"订单数",num:5649,all:5232,icon:"icon-park:transaction-order"},{title:"游戏数",num:619,all:2132,icon:"icon-park:game-handle"}];function m(){return e(t,{gutter:16,children:i.map(n=>e(l,{span:6,children:a("div",{className:`
                border
                border-gray-200
                px-30px
                py-20px
                box-border
                rounded-10px
              `,children:[e("div",{className:"text-20px font-bold",children:n.title}),a("div",{className:"flex items-center justify-between text-35px mb-15px",children:[e(o,{className:"font-bold",start:0,end:n.num}),e(r,{icon:n.icon})]}),a("div",{className:"flex align-center justify-between",children:[e("span",{children:"总数："}),e(o,{start:0,end:n.all})]})]})},n.title))})}export{m as B};
