import{r as e,j as l}from"./react@18.3.1.B8wSySjr.js";import{h as s,b as a,c as i}from"./BasicCard.CYh9xk6c.js";import{u as n}from"./react-i18next@14.1.1_i18next@23.11.4_react-dom@18.3.1_react@18.3.1.DJVsM5yd.js";import{F as r,g as t,f as o,c as d}from"./antd@5.20.2_react-dom@18.3.1_react@18.3.1.DboGQtp9.js";import{l as c,m,n as h}from"./@ant-design_icons@5.3.7_react-dom@18.3.1_react@18.3.1.CzYZvJQn.js";const p=e.forwardRef(((p,u)=>{var f;const{list:x,data:j,isLoading:b,isSearch:C=!0,isClear:w=!0,isRowExpand:v=!0,children:g,labelCol:F,wrapperCol:y,defaultColCount:_=4,defaultRowExpand:N=2,handleFinish:S}=p,{t:E}=n(),[I]=r.useForm(),[R,k]=e.useState(!1),[B,L]=e.useState(v);e.useEffect((()=>{if(L(v),v){L(_*N<x.length)}}),[_,N,v,x.length]);const P={...p};delete P.isSearch,delete P.isClear,delete P.isLoading,delete P.handleFinish;const V=()=>{null==I||I.submit()};return l.jsx("div",{id:"searches",children:l.jsx(r,{layout:"inline",...P,ref:u,form:I,labelCol:F||{span:8},wrapperCol:y||{span:16},initialValues:j,onFinish:e=>{if(S){const l=i(e,x);null==S||S(l)}},onFinishFailed:e=>{},autoComplete:"off",children:l.jsxs(t,{wrap:!0,className:"w-full",children:[null==(f=(e=>{if(!B)return e;const l=_*N;for(let s=0;s<e.length;s++){const a=e[s];s<l?a.hidden=!1:a.hidden=!R}return e})(x))?void 0:f.map((e=>l.jsx("div",{style:{width:e.hidden?0:100/_+"%"},children:l.jsx(r.Item,{label:e.label,name:e.name,className:"!mb-5px",hidden:e.hidden,labelCol:{style:{width:e.labelCol}},wrapperCol:{style:{width:e.wrapperCol}},rules:e.rules,valuePropName:s(e.component),children:a(E,e,V)})},`${e.name}`))),l.jsx(o,{flex:(null==x?void 0:x.length)%_==0||B?"auto":void 0,children:l.jsx(t,{justify:"flex-end",children:l.jsxs("div",{className:"flex items-center flex-wrap",children:[!!C&&l.jsx(r.Item,{children:l.jsx(d,{type:"primary",htmlType:"submit",className:"!mb-5px",loading:b,icon:l.jsx(c,{}),children:E("public.search")})}),!!w&&l.jsx(r.Item,{children:l.jsx(d,{className:"!mb-5px",icon:l.jsx(m,{}),onClick:()=>{null==I||I.resetFields(),null==I||I.setFieldsValue(j?{...j}:{}),null==I||I.submit()},children:E("public.clear")})}),g,!!B&&l.jsxs("div",{className:"text-12px cursor-pointer color-#1677ff hover:color-#69b1ff",onClick:()=>{k(!R)},children:[l.jsx(h,{rotate:R?180:0}),R?"收缩":"展开"]})]})})})]})})})}));export{p as B};
