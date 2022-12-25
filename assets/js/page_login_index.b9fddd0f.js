import{j as e,F as N,a as n}from"./components_Bottom.ec4afff7.js";import{s as L}from"./components_Fullscreen.d338cd5e.js";import{r as i}from"./react.017637b6.js";import{T as u,f as T,u as I}from"./components_Business.4feef370.js";import{L as v,l as E,p as S,s as j,a as M}from"./layouts.eb3aab1b.js";import{u as O}from"./page_content_article.43a87ef9.js";import{u as B,a as C}from"./react-redux.dedf6ab1.js";import{c as p,d as h}from"./components_GlobalSearch.6244d8a1.js";import{u as P}from"./react-router.f2f697d9.js";import{F as r,I as f,B as U,m as _}from"./antd.9976a9b6.js";import{W as q,X as A}from"./@ant-design_icons.b42e4810.js";function Z(){O("登录");const l=P(),o=B(),[g,x]=I(),[k,m]=i.exports.useState(!1),b=C(s=>s.user.permissions),a=localStorage.getItem(u)||"light";return i.exports.useEffect(()=>{a||localStorage.setItem(u,"light"),a==="dark"&&(document.body.className="theme-dark"),o(L(a==="dark"?"dark":"light"))},[a]),i.exports.useEffect(()=>{if(g()){const s=p(h,b);l(s)}},[]),e(N,{children:e("div",{className:`
        ${a==="dark"?"bg-black text-white":"bg-light-400"}
        w-screen
        h-screen
        relative
      `,children:n("div",{className:`
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
        `,children:[n("div",{className:"pb-30px pt-10px flex items-center justify-center",children:[e("img",{className:"mr-2 object-contain",width:"30",height:"30",src:v,alt:"LOGO"}),e("span",{className:"text-xl font-bold tracking-2px",children:"系统登录"})]}),n(r,{name:"horizontal_login",autoComplete:"on",onFinish:async s=>{try{m(!0);const{data:F}=await E(s),{data:{token:c,user:w,permissions:t}}=F;if(!(t!=null&&t.length)||!c)return _.error({content:"用户暂无权限登录",key:"permissions"});const d=S(t),y=p(h,d);x(c),o(j(w)),o(M(d)),l(y)}finally{m(!1)}},onFinishFailed:s=>{console.error("错误信息:",s)},initialValues:{username:"admin",password:"admin123456"},children:[e(r.Item,{name:"username",rules:[{required:!0,message:"请输入用户名"}],children:e(f,{"allow-clear":"true",placeholder:"用户名","data-test":"username",autoComplete:"username",addonBefore:e(q,{className:"change"})})}),e(r.Item,{name:"password",rules:[{required:!0,message:"请输入密码"},T],children:e(f.Password,{placeholder:"密码",autoComplete:"current-password",addonBefore:e(A,{className:"change"})})}),e(r.Item,{children:e(U,{type:"primary",htmlType:"submit",className:"w-full mt-5px rounded-5px tracking-2px",loading:k,children:"登录"})})]})]})})})}export{Z as L};
