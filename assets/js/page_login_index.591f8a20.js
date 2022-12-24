import{j as s,F as S,a as i}from"./components_Bottom.d993aacd.js";import{s as T}from"./components_Fullscreen.36ceb087.js";import{r as l}from"./react.017637b6.js";import{r as g,T as u,f as v,u as L}from"./components_Business.51671154.js";import{u as E,p as P}from"./page_content_article.d2938199.js";import{u as j,a as M}from"./react-redux.883a54e9.js";import{c as O}from"./@reduxjs_toolkit.d0210b58.js";import{g as p,d as h}from"./components_GlobalSearch.baf8e9df.js";import{u as B}from"./react-router.fee81168.js";import{F as n,I as f,B as C,m as U}from"./antd.117302a7.js";import{G as q,J as R}from"./@ant-design_icons.9775ab84.js";function _(e){return g.post("/login",e)}function ae(e){return g.post("/update-password",e)}const x=O({name:"user",initialState:{permissions:[],userInfo:{id:0,username:"",email:"",phone:""}},reducers:{setUserInfo:(e,a)=>{e.userInfo=a.payload},setPermissions:(e,a)=>{e.permissions=a.payload},clearInfo:e=>{e.userInfo={id:0,username:"",email:"",phone:""}}}}),{setUserInfo:A,setPermissions:D,clearInfo:te}=x.actions,re=x.reducer,G="/assets/svg/logo.63a26457.svg";function oe(){E("登录");const e=B(),a=j(),[k,b]=L(),[w,c]=l.exports.useState(!1),F=M(t=>t.user.permissions),r=localStorage.getItem(u)||"light";return l.exports.useEffect(()=>{r||localStorage.setItem(u,"light"),r==="dark"&&(document.body.className="theme-dark"),a(T(r==="dark"?"dark":"light"))},[r]),l.exports.useEffect(()=>{if(k()){const t=p(h,F);e(t)}},[]),s(S,{children:s("div",{className:`
        ${r==="dark"?"bg-black text-white":"bg-light-400"}
        w-screen
        h-screen
        relative
      `,children:i("div",{className:`
          w-300px
          h-290px
          p-30px
          rounded-5px
          ${r==="dark"?"bg-black bg-dark-200":"bg-white"}
          box-border
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
        `,children:[i("div",{className:"pb-30px pt-10px flex items-center justify-center",children:[s("img",{className:"mr-2 object-contain",width:"30",height:"30",src:G,alt:"LOGO"}),s("span",{className:"text-xl font-bold tracking-2px",children:"系统登录"})]}),i(n,{name:"horizontal_login",autoComplete:"on",onFinish:async t=>{try{c(!0);const{data:I}=await _(t),{data:{token:m,user:y,permissions:o}}=I;if(!(o!=null&&o.length)||!m)return U.error({content:"用户暂无权限登录",key:"permissions"});const d=P(o),N=p(h,d);b(m),a(A(y)),a(D(d)),e(N)}finally{c(!1)}},onFinishFailed:t=>{console.error("错误信息:",t)},initialValues:{username:"admin",password:"admin123456"},children:[s(n.Item,{name:"username",rules:[{required:!0,message:"请输入用户名"}],children:s(f,{"allow-clear":"true",placeholder:"用户名","data-test":"username",autoComplete:"username",addonBefore:s(q,{className:"change"})})}),s(n.Item,{name:"password",rules:[{required:!0,message:"请输入密码"},v],children:s(f.Password,{placeholder:"密码",autoComplete:"current-password",addonBefore:s(R,{className:"change"})})}),s(n.Item,{children:s(C,{type:"primary",htmlType:"submit",className:"w-full mt-5px rounded-5px tracking-2px",loading:w,children:"登录"})})]})]})})})}export{oe as L,G as a,D as b,te as c,re as d,A as s,ae as u};
