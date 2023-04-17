import{r as o,j as a}from"./react.e58b2294.js";import{u as _,a as I}from"./react-redux.72b6d945.js";import{b as O}from"./components_Fullscreen.85b6d1ad.js";import{c as y}from"./layouts.bd67cf77.js";import{U as H,D as J}from"./components_Buttons.9343c59d.js";import{B as V}from"./components_Content.cfdbe891.js";import{B as W}from"./components_Search.b2ef74e0.js";import{B as Y}from"./components_Table.4ed866dd.js";import{B as Z}from"./components_Pagination.85509c55.js";import{u as ee,a as te}from"./react-router.d965eaa6.js";import{I as ae,m as q,g as se}from"./antd.2930504f.js";import{c as z,I as N,r as $,g as ne,A as oe,d as re}from"./components_Business.343b3670.js";import{r as G}from"./react-activation.ffcfc6ae.js";import{g as ce,s as ie,a as le,h as ue,i as me,j as de,u as pe}from"./components_GlobalSearch.15535e9b.js";import{B as fe}from"./components_Form.31bfd4d6.js";import{S as ge}from"./components_Bottom.b615ae2d.js";function M(e){const r=z+e?`${e} - ${z}`:"";o.useEffect(()=>{document.title=r},[r]),G.useActivate(()=>{document.title=r})}function he(e){return a.jsxs(a.Fragment,{children:[a.jsx(ae,{...e,placeholder:"请输入"}),a.jsx("div",{className:"mb-5px text-red",children:"注：标题不能含有敏感信息!"})]})}const xe=[{label:"用户名",name:"username",component:"Input"},{label:"标题",name:"title",component:"Input"}],ye=e=>[{title:"ID",dataIndex:"id",width:400,fixed:"left"},{title:"用户名",dataIndex:"username",width:400,fixed:"left"},{title:"标题",dataIndex:"title",width:400},{title:"内容",dataIndex:"content",width:400},{title:"操作",dataIndex:"operate",width:200,fixed:"right",render:(r,d)=>e(r,d)}],be=e=>[{label:"用户名",name:"username",rules:N,component:"Input"},{label:"嵌套数据",name:["user","name","test"],rules:N,component:"Input"},{label:"标题",name:"title",rules:N,component:"customize",render:he},{label:"数据传输",name:"transfer",component:"Transfer",componentProps:e},{label:"内容",name:"content",component:"Editor"}];function Pe(e){return $.get("/content/article/index",{params:e})}function Se(e){return $.get(`/content/article/${e}`)}function Ie(e){return $.post("/content/article",e)}function $e(e,r){return $.put(`/content/article/${e}`,r)}function je(e){return $.delete(`/content/article/${e}`)}const R={page:1,pageSize:20};function _e(){M("文章管理");const e=ee(),r=_(),d=o.useRef(null),[i,u]=o.useState(!1),[l,b]=o.useState(R.page),[p,j]=o.useState(R.pageSize),[T,k]=o.useState(0),[D,B]=o.useState([]),h=I(s=>s.user.permissions),P=I(s=>s.public.isRefreshPage),f="/content/article",m={page:y(`${f}/index`,h),create:y(`${f}/create`,h),update:y(`${f}/update`,h),delete:y(`${f}/delete`,h)},C=s=>{b(1),g({page:1,pageSize:p,...s})},g=o.useCallback(async s=>{try{u(!0);const{data:{data:n}}=await Pe(s),{items:t,total:c}=n;k(c),B(t)}finally{u(!1)}},[]);o.useEffect(()=>{m.page&&!P&&g({...R})},[m.page]),o.useEffect(()=>{P&&(r(O(!1)),x())},[P]);const E=()=>{e("/content/article/option?type=create")},A=s=>{e(`/content/article/option?type=update&id=${s}`)},x=()=>{var t;const n={...((t=d.current)==null?void 0:t.getFieldsValue())||{},page:l,pageSize:p};g(n)},F=async s=>{try{u(!0);const{data:n}=await je(s);(n==null?void 0:n.code)===200&&(q.success((n==null?void 0:n.message)||"删除成功"),x())}finally{u(!1)}},v=(s,n)=>{var c;b(s),j(n);const t=(c=d.current)==null?void 0:c.getFieldsValue();g({...t,page:s,pageSize:n})},w=(s,n)=>a.jsxs(a.Fragment,{children:[m.update===!0&&a.jsx(H,{className:"mr-5px",isLoading:i,onClick:()=>A(n.id)}),m.delete===!0&&a.jsx(J,{className:"mr-5px",isLoading:i,handleDelete:()=>F(n.id)})]});return a.jsx(V,{isPermission:m.page,children:a.jsxs(a.Fragment,{children:[a.jsx(W,{formRef:d,list:xe,data:R,isLoading:i,isCreate:m.create,onCreate:E,handleFinish:C}),a.jsx(Y,{loading:i,columns:ye(w),dataSource:D}),a.jsx(Z,{disabled:i,current:l,pageSize:p,total:T,onChange:v})]})})}const Q=Array.from({length:20}).map((e,r)=>({key:r.toString(),title:`content${r+1}`,description:`description of content${r+1}`})),X=Q.filter(e=>Number(e.key)>10).map(e=>e.key),K={content:"<h4>初始化内容</h4>",transfer:X},U="/content/article";function Oe(){const{pathname:e,search:r}=te(),d=e+r,i=ne(r,"id"),u=o.useRef(null),l=_(),[b,p]=o.useState(!1),[j,T]=o.useState(""),[k,D]=o.useState(K),B=I(t=>t.user.permissions),h=I(t=>t.menu.isCollapsed),P=I(t=>t.menu.isPhone),f="文章管理",m=`${oe}${f}`,C=`${re(i,f)}`;M(i?C:m);const g="/content/article",E={create:y(`${g}/create`,B),update:y(`${g}/update`,B)},A={dataSource:Q,targetKeys:X,render:t=>t.title};o.useEffect(()=>{const t=ce(U);!P&&!h&&(l(ie(t)),l(le(U)))},[]);const x=o.useCallback((t=e)=>{if(t==="/")return;const c=i?C:m,S={label:c,key:d,nav:["内容管理","文章管理",c]};l(ue(S.key)),l(me(S.nav)),l(de(S))},[i,e,r]);o.useEffect(()=>{x()},[x]),G.useActivate(()=>{x()}),o.useEffect(()=>{i?v(i):F()},[]);const F=()=>{T(""),D(K)},v=async t=>{try{T(t),p(!0);const{data:{data:c}}=await Se(t);D(c)}finally{p(!1)}},w=()=>{var t;(t=u.current)==null||t.handleSubmit()},s=t=>{var c;(c=u.current)==null||c.handleReset(),t&&l(O(!0)),l(pe({key:d,nextPath:U}))},n=async t=>{var c;try{p(!0);const S=()=>j?$e(j,t):Ie(t),{data:L}=await S();q.success((L==null?void 0:L.message)||"操作成功"),(c=u.current)==null||c.handleReset(),s(!0)}finally{p(!1)}};return a.jsx(V,{isPermission:i?E.update:E.create,children:a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"mb-50px",children:a.jsx(se,{spinning:b,children:a.jsx(fe,{formRef:u,list:be(A),data:k,labelCol:{span:5},handleFinish:n})})}),a.jsx(ge,{isLoading:b,goBack:()=>s(),handleSubmit:w})]})})}export{_e as P,Oe as a,M as u};
