import{j as e,F as N,a as o}from"./components_Bottom.2678ed38.js";import{s as L}from"./components_Fullscreen.f5d80c1d.js";import{r as i}from"./react.8863f702.js";import{T as u,f as T,u as I}from"./components_Business.af3e585e.js";import{L as E,l as v,p as S,s as j,a as M}from"./layouts.9317e341.js";import{u as O}from"./page_content_article.ae51e739.js";import{u as B,a as C}from"./react-redux.953c17d1.js";import{c as p,d as h}from"./components_GlobalSearch.9543c3ec.js";import{u as P}from"./react-router.95035bde.js";import{F as r,I as f,B as U,m as _}from"./antd.704edbd5.js";import{W as q,X as A}from"./@ant-design_icons.ddd1ba54.js";function Z(){O("登录");const l=P(),n=B(),[g,x]=I(),[k,m]=i.useState(!1),b=C(s=>s.user.permissions),a=localStorage.getItem(u)||"light";return i.useEffect(()=>{a||localStorage.setItem(u,"light"),a==="dark"&&(document.body.className="theme-dark"),n(L(a==="dark"?"dark":"light"))},[a]),i.useEffect(()=>{if(g()){const s=p(h,b);l(s)}},[]),e(N,{children:e("div",{className:`
        ${a==="dark"?"bg-black text-white":"bg-light-400"}
        w-screen
        h-screen
        relative
      `,children:o("div",{className:`
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
        `,children:[o("div",{className:"pb-30px pt-10px flex items-center justify-center",children:[e("img",{className:"mr-2 object-contain",width:"30",height:"30",src:E,alt:"LOGO"}),e("span",{className:"text-xl font-bold tracking-2px",children:"系统登录"})]}),o(r,{name:"horizontal_login",autoComplete:"on",onFinish:async s=>{try{m(!0);const{data:F}=await v(s),{data:{token:c,user:w,permissions:t}}=F;if(!(t!=null&&t.length)||!c)return _.error({content:"用户暂无权限登录",key:"permissions"});const d=S(t),y=p(h,d);x(c),n(j(w)),n(M(d)),l(y)}finally{m(!1)}},onFinishFailed:s=>{console.error("错误信息:",s)},initialValues:{username:"admin",password:"admin123456"},children:[e(r.Item,{name:"username",rules:[{required:!0,message:"请输入用户名"}],children:e(f,{"allow-clear":"true",placeholder:"用户名","data-test":"username",autoComplete:"username",addonBefore:e(q,{className:"change"})})}),e(r.Item,{name:"password",rules:[{required:!0,message:"请输入密码"},T],children:e(f.Password,{placeholder:"密码",autoComplete:"current-password",addonBefore:e(A,{className:"change"})})}),e(r.Item,{children:e(U,{type:"primary",htmlType:"submit",className:"w-full mt-5px rounded-5px tracking-2px",loading:k,children:"登录"})})]})]})})})}export{Z as L};
