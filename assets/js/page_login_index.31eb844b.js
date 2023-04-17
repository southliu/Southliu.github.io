import{r as d,j as e}from"./react.e58b2294.js";import{u as I,a as P}from"./react-redux.72b6d945.js";import{T as g,e as v,u as M}from"./components_Business.343b3670.js";import{g as S,p as x,s as j,a as k,L as O,l as _}from"./layouts.bd67cf77.js";import{u as B}from"./page_content_article.669883db.js";import{s as C}from"./components_Fullscreen.85b6d1ad.js";import{c as u,d as p}from"./components_GlobalSearch.15535e9b.js";import{u as U}from"./react-router.d965eaa6.js";import{F as l,I as b,B as R,m as q}from"./antd.2930504f.js";import{Z as A,_ as D}from"./@ant-design_icons.0f48b97e.js";function Q(){B("登录");const m=U(),r=I(),[w,y]=M(),[F,n]=d.useState(!1),h=P(s=>s.user.permissions),a=localStorage.getItem(g)||"light";d.useEffect(()=>{a||localStorage.setItem(g,"light"),a==="dark"&&(document.body.className="theme-dark"),r(C(a==="dark"?"dark":"light"))},[a]),d.useEffect(()=>{if(w())if(!h.length)N();else{const s=u(p,h);m(s)}},[]);const N=async()=>{try{n(!0);const{data:s}=await S({refresh_cache:!1});if(s){const{data:{user:c,permissions:o}}=s,i=x(o),t=u(p,i);r(j(c)),r(k(i)),m(t)}}finally{n(!1)}},L=async s=>{try{n(!0);const{data:c}=await _(s),{data:{token:o,user:i,permissions:t}}=c;if(!(t!=null&&t.length)||!o)return q.error({content:"用户暂无权限登录",key:"permissions"});const f=x(t),E=u(p,f);y(o),r(j(i)),r(k(f)),m(E)}finally{n(!1)}},T=s=>{console.error("错误信息:",s)};return e.jsx(e.Fragment,{children:e.jsx("div",{className:`
        ${a==="dark"?"bg-black text-white":"bg-light-400"}
        w-screen
        h-screen
        relative
      `,children:e.jsxs("div",{className:`
          w-300px
          h-290px
          p-30px
          rounded-5px
          ${a==="dark"?"bg-black bg-dark-200":"bg-white"}
          box-border
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
        `,children:[e.jsxs("div",{className:"pb-30px pt-10px flex items-center justify-center",children:[e.jsx("img",{className:"mr-2 object-contain",width:"30",height:"30",src:O,alt:"LOGO"}),e.jsx("span",{className:"text-xl font-bold tracking-2px",children:"系统登录"})]}),e.jsxs(l,{name:"horizontal_login",autoComplete:"on",onFinish:L,onFinishFailed:T,initialValues:{username:"admin",password:"admin123456"},children:[e.jsx(l.Item,{name:"username",rules:[{required:!0,message:"请输入用户名"}],children:e.jsx(b,{"allow-clear":"true",placeholder:"用户名","data-test":"username",autoComplete:"username",addonBefore:e.jsx(A,{className:"change"})})}),e.jsx(l.Item,{name:"password",rules:[{required:!0,message:"请输入密码"},v],children:e.jsx(b.Password,{placeholder:"密码",autoComplete:"current-password",addonBefore:e.jsx(D,{className:"change"})})}),e.jsx(l.Item,{children:e.jsx(R,{type:"primary",htmlType:"submit",className:"w-full mt-5px rounded-5px tracking-2px",loading:F,children:"登录"})})]})]})})})}export{Q as L};
