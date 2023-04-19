import{j as a,r as s}from"./react.e58b2294.js";import{I as T,S as ce,r as x,A as U,d as le}from"./components_Business.db97bd84.js";import{O as ue}from"./components_Dates.9082f5b0.js";import{u as me}from"./page_content_article.c256091a.js";import{a as de}from"./react-redux.72b6d945.js";import{c as g}from"./layouts.11a7ed11.js";import{U as pe,D as fe}from"./components_Buttons.9343c59d.js";import{s as he,g as ge}from"./page_system_menu.9bbe1ef7.js";import{B as xe}from"./components_Content.cfdbe891.js";import{B as ye}from"./components_Search.995fbb7a.js";import{B as Se}from"./components_Modal.de1498d3.js";import{B as Ce}from"./components_Form.d7e2d81d.js";import{B as Ie}from"./components_Table.61158a82.js";import{B as be}from"./components_Pagination.85509c55.js";import{r as Pe,s as De,B as F,m as w}from"./antd.2930504f.js";const je=[{label:"年龄",name:"age",component:"InputNumber"},{label:"名字",name:"keyword",component:"Input"}],ke=n=>[{title:"ID",dataIndex:"id",width:400,fixed:"left"},{title:"用户名",dataIndex:"username",width:400,fixed:"left"},{title:"姓名",dataIndex:"real_name",width:400},{title:"角色",dataIndex:"roles_name",width:400},{title:"手机号",dataIndex:"phone",width:400},{title:"状态",dataIndex:"status",width:200,render:o=>a.jsx("span",{children:o?"开启":"关闭"})},{title:"操作",dataIndex:"operate",width:200,fixed:"right",render:(o,i)=>n(o,i)}],Be=[{label:"用户名",name:"username",rules:T,component:"Input"},{label:"姓名",name:"real_name",rules:T,component:"Input"},{label:"角色",name:"roles_name",rules:T,component:"Input"},{label:"状态",name:"status",rules:ce,component:"Select",componentProps:{options:ue}}];function Te(n){return x.get("/authority/user/index",{params:n})}function we(n){return x.get(`/authority/user/${n}`)}function Ee(n){return x.post("/authority/user",n)}function Re(n,o){return x.put(`/authority/user/${n}`,o)}function $e(n){return x.delete(`/authority/user/${n}`)}function Le(n){const{title:o,isVisible:i,treeData:c,checkedKeys:b,onClose:m,onSubmit:P}=n,[l,D]=s.useState(b),y=()=>{P(l)},S=a.jsx(F,{type:"primary",onClick:y,children:"提交"}),C=j=>{D(j)};return a.jsx(Pe,{open:i,title:o||"权限配置",placement:"right",extra:S,onClose:m,children:a.jsx(De,{checkable:!0,checkedKeys:l,treeData:c,onCheck:C})})}const I={page:1,pageSize:20},_={status:1};function Je(){me("用户管理");const n=s.useRef(null),o=s.useRef(null),[i,c]=s.useState(!1),[b,m]=s.useState(!1),[P,l]=s.useState(!1),[D,y]=s.useState(U),[S,C]=s.useState(""),[j,E]=s.useState(_),[R,$]=s.useState(I.page),[k,K]=s.useState(I.pageSize),[O,N]=s.useState(0),[V,z]=s.useState([]),[A,Q]=s.useState(""),[q,B]=s.useState(!1),[v,M]=s.useState([]),[G,H]=s.useState([]),p=de(e=>e.user.permissions),f="/authority/user",u={page:g(`${f}/index`,p),create:g(`${f}/create`,p),update:g(`${f}/update`,p),delete:g(`${f}/delete`,p),permission:g(`${f}/authority`,p)},J=e=>{$(1),h({page:1,pageSize:k,...e})},h=s.useCallback(async e=>{try{c(!0);const{data:{data:t}}=await Te(e),{items:r,total:d}=t;N(d),z(r)}finally{c(!1)}},[]);s.useEffect(()=>{u.page&&h({...I})},[h,u.page]);const W=async e=>{try{c(!0);const t={userId:e},{data:r}=await ge(t),{data:{defaultCheckedKeys:d,treeData:ie}}=r;Q(e),H(ie),M(Object.values(d)),B(!0)}finally{c(!1)}},X=()=>{B(!1)},Y=async e=>{try{c(!0);const t={menuIds:e,userId:A},{data:r}=await he(t);w.success(r.message||"授权成功"),B(!1)}finally{c(!1)}},Z=()=>{l(!0),y(U),C(""),E(_)},ee=async e=>{try{l(!0),y(le(e)),C(e),m(!0);const{data:{data:t}}=await we(e);E(t)}finally{m(!1)}},te=()=>{var e;(e=o.current)==null||e.handleSubmit()},se=()=>{l(!1)},L=()=>{var r;const t={...((r=n.current)==null?void 0:r.getFieldsValue())||{},page:R,pageSize:k};h(t)},ae=async e=>{try{m(!0);const t=()=>S?Re(S,e):Ee(e),{data:r}=await t();w.success((r==null?void 0:r.message)||"操作成功"),l(!1),L()}finally{m(!1)}},ne=async e=>{try{c(!0);const{data:t}=await $e(e);(t==null?void 0:t.code)===200&&(w.success((t==null?void 0:t.message)||"删除成功"),L())}finally{c(!1)}},re=(e,t)=>{var d;$(e),K(t);const r=(d=n.current)==null?void 0:d.getFieldsValue();h({...r,page:e,pageSize:t})},oe=(e,t)=>a.jsxs(a.Fragment,{children:[u.permission===!0&&a.jsx(F,{className:"mr-2",loading:i,onClick:()=>W(t.id),children:"权限"}),u.update===!0&&a.jsx(pe,{className:"mr-5px",isLoading:i,onClick:()=>ee(t.id)}),u.delete===!0&&a.jsx(fe,{className:"mr-5px",isLoading:i,handleDelete:()=>ne(t.id)})]});return a.jsx(xe,{isPermission:u.page,children:a.jsxs(a.Fragment,{children:[a.jsx(ye,{formRef:n,list:je,data:I,isLoading:i,isCreate:u.create,onCreate:Z,handleFinish:J}),a.jsx(Ie,{loading:i,columns:ke(oe),dataSource:V}),a.jsx(be,{disabled:i,current:R,pageSize:k,total:O,onChange:re}),a.jsx(Se,{title:D,open:P,confirmLoading:b,onOk:te,onCancel:se,children:a.jsx(Ce,{formRef:o,list:Be,data:j,labelCol:{span:6},handleFinish:ae})}),a.jsx(Le,{isVisible:q,treeData:G,checkedKeys:v,onClose:X,onSubmit:Y})]})})}export{Je as P};