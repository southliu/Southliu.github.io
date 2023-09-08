import{j as e,r as t}from"./react.a7da97a2.js";import{I as s,S as a,A as o,d as n}from"./components_Business.8bae5923.js";import{M as l,d as r,e as i}from"./components_Dates.13b0bc4e.js";import{v as m}from"./components_Count.a83ac5a4.js";import{u as c}from"./page_content_article.7001747d.js";import{c as p,d as u,e as d,f,h as g,i as b}from"./layouts.3bb77d44.js";import{u as j}from"./components_Fullscreen.8cfdd543.js";import{U as y,D as h}from"./components_Buttons.19c6045b.js";import{B as S}from"./components_Content.9871ddaa.js";import{B as x}from"./components_Search.cd4e7e34.js";import{B as _}from"./components_Modal.ba600df6.js";import{B as w}from"./components_Form.857a2a0b.js";import{B as C}from"./components_Table.3ceb1c02.js";import{B as I}from"./components_Pagination.732bb587.js";import{u as v}from"./react-i18next.1d91db1a.js";import{m as F}from"./antd.850acb68.js";const P=e=>[{label:e("system.state"),name:"status",component:"Select",componentProps:{options:l}},{label:e("system.module"),name:"module",wrapperCol:170,component:"Select",componentProps:{options:r}},{label:e("system.controller"),name:"controller",component:"Input"}],z=(t,s)=>[{title:"ID",dataIndex:"id",width:200},{title:t("public.name"),dataIndex:"name",width:200},{title:t("system.state"),dataIndex:"status",width:200,render:t=>e.jsx("span",{children:m(t,l)})},{title:t("system.module"),dataIndex:"module",width:200},{title:t("system.controller"),dataIndex:"controller",width:200},{title:t("public.creationTime"),dataIndex:"created_at",width:200},{title:t("public.updateTime"),dataIndex:"updated_at",width:200},{title:t("public.operate"),dataIndex:"operate",width:200,fixed:"right",render:(e,t)=>s(e,t)}],B=(e,t)=>[{label:e("public.name"),name:"name",rules:s(e),component:"Input"},{label:e("system.state"),name:"status",rules:a(e),component:"Select",componentProps:{options:l}},{label:e("system.module"),name:"module",rules:a(e),component:"Select",componentProps:{options:r}},{label:e("system.controller"),name:"controller",rules:s(e),component:"Input"},{label:e("system.createMenu"),name:"actions",hidden:!!t,component:"CheckboxGroup",componentProps:{options:i}}],L=Object.freeze(Object.defineProperty({__proto__:null,createList:B,searchList:P,tableColumns:z},Symbol.toStringTag,{value:"Module"})),M={page:1,pageSize:20},N={status:1};const O=Object.freeze(Object.defineProperty({__proto__:null,default:function(){const{t:s}=v();c(s,s("system.menuTitle"));const a=t.useRef(null),l=t.useRef(null),[r,i]=t.useState(!1),[m,L]=t.useState(!1),[O,T]=t.useState(!1),[k,D]=t.useState(o(s)),[R,$]=t.useState(""),[V,A]=t.useState(N),[E,G]=t.useState(M.page),[Q,U]=t.useState(M.pageSize),[Z,q]=t.useState(0),[H,J]=t.useState([]),[K,W]=F.useMessage(),{permissions:X}=j(),Y="/authority/menu",ee={page:p(`${Y}/index`,X),create:p(`${Y}/create`,X),update:p(`${Y}/update`,X),delete:p(`${Y}/delete`,X)},te=t.useCallback((async e=>{try{L(!0);const t=await u(e),{code:s,data:a}=t;if(200!==Number(s))return;const{items:o,total:n}=a;q(n),J(o)}finally{L(!1)}}),[]);t.useEffect((()=>{ee.page&&te({...M}),ee.page&&te({...M})}),[te,ee.page]);const se=()=>{var e;const t={...(null==(e=a.current)?void 0:e.getFieldsValue())||{},page:E,pageSize:Q};te(t)},ae=t.useCallback(((e,t)=>{var s;G(e),U(t);const o=null==(s=a.current)?void 0:s.getFieldsValue();te({...o,page:e,pageSize:t})}),[te]);return e.jsx(S,{isPermission:ee.page,children:e.jsxs(e.Fragment,{children:[W,e.jsx(x,{formRef:a,list:P(s),data:M,isLoading:m,isCreate:ee.create,onCreate:()=>{i(!0),D(o(s)),$(""),A(N)},handleFinish:e=>{G(1),te({page:1,pageSize:Q,...e})}}),e.jsx(C,{loading:m,columns:z(s,((t,a)=>e.jsxs(e.Fragment,{children:[!0===ee.update&&e.jsx(y,{className:"mr-5px",isLoading:m,onClick:()=>(async e=>{try{i(!0),D(n(s,e)),$(e),T(!0);const{code:t,data:a}=await g(e);if(200!==Number(t))return;A(a)}finally{T(!1)}})(a.id)}),!0===ee.delete&&e.jsx(h,{className:"mr-5px",isLoading:m,handleDelete:()=>(async e=>{try{L(!0);const{code:t,message:a}=await b(e);200===Number(t)&&(K.success(a||s("public.successfullyDeleted")),se())}finally{L(!1)}})(a.id)})]}))),dataSource:H}),e.jsx(I,{disabled:m,current:E,pageSize:Q,total:Z,onChange:ae}),e.jsx(_,{width:600,title:k,open:r,confirmLoading:O,onOk:()=>{var e;null==(e=l.current)||e.handleSubmit()},onCancel:()=>{i(!1)},children:e.jsx(w,{formRef:l,list:B(s,R),data:V,labelCol:{span:4},wrapperCol:{span:19},handleFinish:async e=>{try{T(!0);const t=()=>R?d(R,e):f(e),{code:a,message:o}=await t();if(200!==Number(a))return;K.success(o||s("public.successfulOperation")),i(!1),se()}finally{T(!1)}}})})]})})}},Symbol.toStringTag,{value:"Module"}));export{O as i,L as m};
