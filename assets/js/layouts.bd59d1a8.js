import{a as C,F as A,j as e}from"./components_Bottom.46058eea.js";import{r as U,P as me,u as Y}from"./components_Business.d046028a.js";import{r as p}from"./react.c6268275.js";import{u as O,a as m}from"./react-redux.3eb615c4.js";import{c as de}from"./@reduxjs_toolkit.effa545d.js";import{g as fe,s as V,a as he,f as pe,d as K,b as H,c as ge,t as q,e as L,h as I,i as E,j as Z,G as ye,k as be,l as xe,m as ve,n as ke,o as ee,p as Ce,q as _e,r as we}from"./components_GlobalSearch.b84c4cbb.js";import{u as Ne}from"./ahooks.7831a49e.js";import{I as S}from"./@iconify_react.8d8aee98.js";import{u as z,a as B,b as Me}from"./react-router.c3a7686c.js";import{j as Pe,F as R,I as Te,m as F,k as se,l as G,M as je,T as ne,n as Oe,h as Re}from"./antd.4201ff29.js";import{r as te,K as ze}from"./react-activation.789d5ea2.js";import{F as $e,a as J}from"./components_Fullscreen.3d2bf12a.js";import{D as Ke}from"./components_DataScreen.05f85285.js";import{T as Le}from"./components_Theme.3098b0bd.js";import{B as Ie}from"./components_Modal.38076ee8.js";import{P as W}from"./components_PasswordStrength.c6968711.js";import{G as Ee,J as Se,K as Be,N as De,B as Fe,O as Ae,c as Ue,V as qe,T as Q}from"./@ant-design_icons.8dd7e71a.js";import{F as Ge}from"./page_403.tsx_index.e1964a49.js";function Ds(s){return U.post("/login",s)}function Ve(s){return U.post("/update-password",s)}const oe=de({name:"user",initialState:{permissions:[],userInfo:{id:0,username:"",email:"",phone:""}},reducers:{setUserInfo:(s,n)=>{s.userInfo=n.payload},setPermissions:(s,n)=>{s.permissions=n.payload},clearInfo:s=>{s.userInfo={id:0,username:"",email:"",phone:""}}}}),{setUserInfo:He,setPermissions:X,clearInfo:Je}=oe.actions,Fs=oe.reducer,We=s=>{const n=[];for(let o=0;o<s.length;o++){const{id:u,operation:a}=s[o];n.push(`/${u}`);for(let g=0;g<a.length;g++)n.push(`/${u}/${a[g]}`)}return n},As=(s,n)=>!n||n.length===0?!1:n.includes(s),Qe="/assets/svg/logo.17e50649.svg";function Xe(s){return U.get("/authority/user/refresh-permissions",{params:s})}const Ye="_header_11yja_1",Ze="_headerCloseMenu_11yja_12",es="_headerDriver_11yja_15",ss="_menu_11yja_18",ns="_menuClose_11yja_26",ts="_con_11yja_29",os="_conCloseMenu_11yja_36",as="_conMaximize_11yja_39",rs="_headerNone_11yja_43",is="_none_11yja_47",cs="_menuNone_11yja_50",ls="_conPhone_11yja_54",us="_headerPhone_11yja_57",ms="_leftDivide_11yja_60",k={header:Ye,headerCloseMenu:Ze,headerDriver:es,menu:ss,menuClose:ns,con:ts,conCloseMenu:os,conMaximize:as,headerNone:rs,none:is,menuNone:cs,conPhone:ls,headerPhone:us,leftDivide:ms};function ds(){const s=z(),{pathname:n}=B(),o=O(),[u,a]=p.useState([]),g=m(t=>t.menu.selectedKeys),d=m(t=>t.menu.openKeys),v=m(t=>t.tabs.isMaximize),f=m(t=>t.menu.isCollapsed),h=m(t=>t.menu.isPhone),x=m(t=>t.user.permissions);p.useEffect(()=>{const t=fe(n);!h&&!f&&(o(V(t)),o(he(n)))},[n]),p.useEffect(()=>{if(x.length>0){const t=pe(K,x);a(t||[])}},[x]);const y=t=>{s(t);const b=L({menus:u,permissions:x,key:t});b&&(o(I(b.key)),o(E(b.nav)),o(Z(b)))},r=t=>{y(t.key),h&&P()},_=(t,l)=>{let b=!0;for(let M=0;M<t.length;M++)if(t[M]!==l[M]){b=!1;break}return b},c=t=>{const l=[];let b="";if(t.length>0){b=t[t.length-1];const M=H(b);l.push(b);for(let T=t.length-2;T>=0;T--){const D=H(t[T]);_(D,M)&&l.unshift(t[T])}}o(V(l))},w=()=>{const t=ge(u,x);y(t),h&&P()},P=()=>{o(q(!0))};return C(A,{children:[C("div",{className:`
          transition-all
          overflow-auto
          z-2
          ${k.menu}
          ${f?k.menuClose:""}
          ${v||h&&f?k.menuNone:""}
          ${h?"!z-1002":""}
        `,children:[C("div",{className:`
            text-white
            flex
            content-center
            px-5
            py-2
            cursor-pointer
            ${f?"justify-center":""}
          `,onClick:w,children:[e("img",{src:Qe,width:30,height:30,className:"object-contain",alt:"logo"}),e("span",{className:`
            text-white
            ml-3
            text-xl
            font-bold
            truncate
            ${f?"hidden":""}
          `,children:"后台管理系统"})]}),e(Pe,{className:"z-1000",selectedKeys:[g],openKeys:d,mode:"inline",theme:"dark",inlineCollapsed:f,items:u,onClick:r,onOpenChange:c})]}),h&&!f&&e("div",{className:`${k.cover} fixed w-full h-full bg-gray-500 bg-opacity-10 z-1001`,onClick:P})]})}const fs="/assets/png/avatar.07151444.png";function hs(s){const{passwordRef:n}=s,[o]=R.useForm(),[u,a]=p.useState(!1),[g,d]=p.useState(!1);return p.useImperativeHandle(n,()=>({open:()=>{a(!0)}})),e(Ie,{title:"修改密码",open:u,confirmLoading:g,onOk:()=>{o.submit()},onCancel:()=>a(!1),children:C(R,{name:"UpdatePassword",form:o,labelCol:{span:5},wrapperCol:{span:16},onFinish:async h=>{if(h.password!==h.confirmPassword)return F.warning({content:"密码和确认密码不相同!",key:"confirmPassword"});try{d(!0);const{data:x}=await Ve(h);x.code===200&&(a(!1),F.success(x.message))}finally{d(!1)}},autoComplete:"off",children:[e(R.Item,{label:"用户名",name:"username",rules:[{required:!0,message:"请输入用户名!"}],children:e(Te,{placeholder:me})}),e(R.Item,{label:"密码",name:"password",rules:[{required:!0,message:"请输入密码!"}],children:e(W,{})}),e(R.Item,{label:"确认密码",name:"confirmPassword",rules:[{required:!0,message:"请输入确认密码!"}],children:e(W,{})})]})})}const{Item:ps}=se;function gs(s){const{className:n,list:o}=s,u=m(a=>a.menu.isPhone);return e(A,{children:!u&&e("div",{className:`${n} flex items-center`,children:e(se,{children:o==null?void 0:o.map(a=>e(ps,{className:"whitespace-nowrap",children:a},a))})})})}function ys(){const s=m(c=>c.menu.isCollapsed),n=m(c=>c.user.userInfo.username),o=O(),u=z(),[,,a]=Y(),{clear:g}=te.useAliveController(),d=m(c=>c.tabs.isMaximize),v=m(c=>c.tabs.nav),f=p.useRef(null),h=[{key:"password",label:e("span",{children:"修改密码"}),icon:e(Be,{className:"mr-1"})},{key:"logout",label:e("span",{children:"退出登录"}),icon:e(De,{className:"mr-1"})}],x=c=>{var w;switch(c.key){case"password":(w=f.current)==null||w.open();break;case"logout":y();break}},y=()=>{je.confirm({title:"温馨提示",icon:e(Fe,{}),content:"是否确定退出系统?",onOk(){o(Je()),o(be()),o(I("")),a(),g(),u("/login")}})},r=()=>C("div",{className:"flex items-center",children:[e(Ke,{}),e(ye,{}),e($e,{}),e(Le,{}),e(G,{className:"min-w-50px",menu:{items:h,onClick:x},children:C("div",{className:"ant-dropdown-link flex items-center cursor-pointer",onClick:c=>c.preventDefault(),children:[e("img",{src:fs,width:27,height:27,alt:"头像",className:"rounded-1/2 overflow-hidden object-cover bg-light-500"}),e("span",{className:"ml-2 text-15px min-w-50px truncate",children:n||"south-admin"})]})})]}),_=()=>C("div",{className:"text-lg cursor-pointer",onClick:()=>o(q(!s)),children:[s&&e(Ee,{}),!s&&e(Se,{})]});return C(A,{children:[C("header",{className:`
          border-bottom
          flex
          items-center
          justify-between
          px-6
          py-6px
          box-border
          transition-all
          ${k.headerDriver}
          ${d?k.none:""}
        `,children:[C("div",{className:"flex item-center",children:[e(_,{}),e(gs,{className:"ml-15px",list:v})]}),e(r,{})]}),e(hs,{passwordRef:f})]})}function ae(s){const{activeKey:n,onOpenChange:o,handleRefresh:u}=s,{pathname:a}=B(),g=z(),d=O(),v=m(y=>y.tabs.tabs),f=m(y=>y.user.permissions);return[(y=n)=>{const r=v.findIndex(_=>_.key===y);return[{key:"refresh",label:"重新加载",disabled:y!==a,icon:e(Ae,{className:"mr-5px transform rotate-270"})},{key:"close_current",label:"关闭标签",disabled:v.length<=1,icon:e(Ue,{className:"mr-5px"})},{key:"close_other",label:"关闭其他",disabled:v.length<=1,icon:e(qe,{className:"mr-5px transform rotate-90"})},{key:"close_left",label:"关闭左侧",disabled:r===0,icon:e(Q,{className:"mr-5px transform rotate-270"})},{key:"close_right",label:"关闭右侧",disabled:r===v.length-1,icon:e(Q,{className:"mr-5px transform rotate-90"})}]},(y,r=n)=>{switch(o==null||o(!1),y){case"refresh":u(r);break;case"close_current":d(ee(r));break;case"close_other":d(ke(r));break;case"close_left":if(d(ve(r)),a!==r){const c=L({menus:K,permissions:f,key:r});c!=null&&c.key&&(g(r),d(E(c.nav)))}break;case"close_right":if(d(xe(r)),a!==r){const c=L({menus:K,permissions:f,key:r});c!=null&&c.key&&(g(r),d(E(c.nav)))}break}}]}function bs(s){const{isRefresh:n,onClick:o}=s;return e(ne,{title:"重新加载",placement:"bottom",children:e(S,{className:`
          change
          flex
          items-center
          justify-center
          text-lg
          cursor-pointer
          ${n?"animate-spin pointer-events-none":""}
        `,onClick:()=>o(),icon:"ant-design:reload-outlined"})})}function xs(){const s=O(),n=m(u=>u.tabs.isMaximize);return e(ne,{title:n?"最小化":"最大化",placement:"bottom",children:e(S,{className:`
          flex
          items-center
          justify-center
          text-lg
          cursor-pointer
        `,icon:n?"ant-design:compress-outlined":"ant-design:expand-outlined",onClick:()=>{s(Ce(!n))}})})}function vs(s){const{activeKey:n,handleRefresh:o}=s,[u,a]=p.useState(!1),g=h=>{a(h)},d={activeKey:n,onOpenChange:g,handleRefresh:o},[v,f]=ae(d);return e(G,{trigger:["click"],menu:{items:v(),onClick:h=>f(h.key)},onOpenChange:g,children:e(S,{className:`
          flex
          items-center
          justify-center
          text-lg
          cursor-pointer
          transition-all
          transform
          ${u?"rotate-180":"rotate-0"}
        `,icon:"ant-design:down-outlined"})})}function ks(){const s=z(),{pathname:n,search:o}=B(),u=n+o,a=O(),{refresh:g}=te.useAliveController(),[d,v]=p.useState(null),[f,h]=p.useState(null),x=m(i=>i.tabs.tabs),y=m(i=>i.tabs.isLock),r=m(i=>i.tabs.activeKey),_=m(i=>i.user.permissions),c=m(i=>i.tabs.isMaximize),w=p.useCallback((i=u)=>{if(_.length>0){if(i==="/")return;const N=L({menus:K,permissions:_,key:i});N!=null&&N.key?(a(I(N.key)),a(E(N.nav)),a(Z(N))):a(I(i))}},[_]);p.useEffect(()=>{w()},[w]),p.useEffect(()=>()=>{d&&(clearTimeout(d),v(null)),f&&(clearTimeout(f),h(null))},[]),p.useEffect(()=>{if(r!==u){const i=y?r:u;w(i),y&&(s(i),a(_e(!1)))}},[r,u]);const P=i=>{s(i)},t=i=>{a(ee(i))},l=(i,j)=>{j==="remove"&&t(i)},b=p.useCallback((i=r)=>{typeof i=="string"&&(d||(a(J(!0)),g(i),v(setTimeout(()=>{F.success({content:"刷新成功",key:"refresh"}),a(J(!1)),v(null)},100)),h(setTimeout(()=>{h(null)},1e3))))},[r,d]),M=p.useMemo(()=>e(bs,{isRefresh:!!f,onClick:b}),[f,b]),T=p.useMemo(()=>e(vs,{activeKey:r,handleRefresh:b}),[r,b]),D=p.useMemo(()=>e(xs,{}),[]),$=[{element:M},{element:T},{element:D}],re={activeKey:r,handleRefresh:b},[ie,ce]=ae(re),le=(i,j)=>e(j,{...i,children:N=>e(G,{menu:{items:ie(N.key),onClick:ue=>ce(ue.key,N.key)},trigger:["contextMenu"],children:e("div",{className:"mr-3px",children:N})},N.key)});return C("div",{className:`
      flex
      items-center
      justify-between
      mx-2
      transition-all
      ${c?k.conMaximize:""}
    `,children:[x.length>0?e(Oe,{hideAdd:!0,className:"w-full h-30px py-0",onChange:P,activeKey:r,type:"editable-card",onEdit:l,items:x,renderTabBar:le}):e("span",{}),e("div",{className:"flex",children:$==null?void 0:$.map((i,j)=>e("div",{className:`
                ${k.leftDivide}
                change
                divide-solid
                w-36px
                h-36px
                hover:opacity-70
                flex
                place-content-center
                items-center
              `,children:i.element},j))})]})}function Us(){const s=O(),n=z(),[o]=Y(),{pathname:u,search:a}=B(),g=u+a,d=o(),v=Me(),[f,h]=p.useState(!0),x=m(l=>l.user.permissions),y=m(l=>l.user.userInfo.id),r=m(l=>l.tabs.isMaximize),_=m(l=>l.menu.isCollapsed),c=m(l=>l.menu.isPhone),w=m(l=>l.public.isRefresh),P=p.useCallback(async()=>{try{h(!0);const{data:l}=await Xe({refresh_cache:!1});if(l){const{data:{user:b,permissions:M}}=l,T=We(M);s(He(b)),s(X(T))}}catch(l){console.error("获取用户数据失败:",l),X([])}finally{h(!1)}},[]);p.useEffect(()=>{d||n("/login"),d&&!y&&P()},[P,n,d,y]);const t=Ne(()=>{const l=window.innerWidth<=768;l&&s(q(!0)),s(we(l))},{wait:500});return p.useEffect(()=>(window.addEventListener("resize",t.run()),()=>{window.removeEventListener("resize",t.run())}),[]),C("div",{id:"layout",children:[e(ds,{}),C("div",{className:k.layout_right,children:[C("div",{id:"header",className:`
            border-bottom
            transition-all
            ${k.header}
            ${_?k.headerCloseMenu:""}
            ${r?k.headerNone:""}
            ${c?"!left-0 z-999":""}
          `,children:[e(ys,{}),e(ks,{})]}),C("div",{id:"layoutContent",className:`
            overflow-auto
            transition-all
            ${k.con}
            ${r?k.conMaximize:""}
            ${_?k.conCloseMenu:""}
            ${c?"!left-0":""}
          `,children:[f&&x.length===0&&e(Re,{active:!0,className:"p-30px",paragraph:{rows:10}}),!f&&x.length===0&&e(Ge,{}),w&&e("div",{className:`
              absolute
              left-50%
              top-50%
              -rotate-x-50%
              -rotate-y-50%
            `,children:e(S,{className:"text-40px animate-spin",icon:"ri:loader-2-fill"})}),x.length>0&&!w&&e(ze,{id:g,name:g,children:v})]})]})]})}export{Qe as L,X as a,Us as b,As as c,Ds as l,We as p,He as s,Fs as u};
