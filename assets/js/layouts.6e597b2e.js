import{a as C,F as H,j as e}from"./components_Bottom.39240bb9.js";import{r as V,P as me,u as _}from"./components_Business.687152b7.js";import{r as p}from"./react.4fb287ef.js";import{u as X,a as m}from"./react-redux.6833b3bd.js";import{c as de}from"./@reduxjs_toolkit.11904599.js";import{g as fe,s as q,a as he,f as pe,d as j,b as J,c as ve,t as U,e as R,h as K,i as z,j as $,G as ge,k as ye,l as be,m as xe,n as Ne,o as ee,p as Ce,q as Ae,r as Me}from"./components_GlobalSearch.3b628bfb.js";import{u as ke}from"./ahooks.45b975e3.js";import{I as S}from"./@iconify_react.18d81252.js";import{u as E,a as W,b as Oe}from"./react-router.4a1ee0c8.js";import{j as we,F as B,I as Pe,m as L,k as se,l as F,M as Te,T as ne,n as Xe,h as Be}from"./antd.b33563c8.js";import{r as te,K as Ee}from"./react-activation.c19e812c.js";import{F as Ie,a as Q}from"./components_Fullscreen.1294bdf0.js";import{D as je}from"./components_DataScreen.9695fc12.js";import{T as Re}from"./components_Theme.86042621.js";import{B as Ke}from"./components_Modal.83f00c0d.js";import{P as G}from"./components_PasswordStrength.b8862078.js";import{K as ze,N as Se,O as We,T as De,B as Le,V as He,W as Ve,X as Ue,Y}from"./@ant-design_icons.7280c15e.js";import{F as Fe}from"./page_403.tsx_index.ef8ca3c7.js";function Ds(s){return V.post("/login",s)}function qe(s){return V.post("/update-password",s)}const oe=de({name:"user",initialState:{permissions:[],userInfo:{id:0,username:"",email:"",phone:""}},reducers:{setUserInfo:(s,n)=>{s.userInfo=n.payload},setPermissions:(s,n)=>{s.permissions=n.payload},clearInfo:s=>{s.userInfo={id:0,username:"",email:"",phone:""}}}}),{setUserInfo:Je,setPermissions:Z,clearInfo:Qe}=oe.actions,Ls=oe.reducer,Ge=s=>{const n=[];for(let o=0;o<s.length;o++){const{id:u,operation:a}=s[o];n.push(`/${u}`);for(let v=0;v<a.length;v++)n.push(`/${u}/${a[v]}`)}return n},Hs=(s,n)=>!n||n.length===0?!1:n.includes(s),Ye="/assets/svg/logo.17e50649.svg";function Ze(s){return V.get("/authority/user/refresh-permissions",{params:s})}const _e="_header_11yja_1",$e="_headerCloseMenu_11yja_12",es="_headerDriver_11yja_15",ss="_menu_11yja_18",ns="_menuClose_11yja_26",ts="_con_11yja_29",os="_conCloseMenu_11yja_36",as="_conMaximize_11yja_39",rs="_headerNone_11yja_43",is="_none_11yja_47",cs="_menuNone_11yja_50",ls="_conPhone_11yja_54",us="_headerPhone_11yja_57",ms="_leftDivide_11yja_60",N={header:_e,headerCloseMenu:$e,headerDriver:es,menu:ss,menuClose:ns,con:ts,conCloseMenu:os,conMaximize:as,headerNone:rs,none:is,menuNone:cs,conPhone:ls,headerPhone:us,leftDivide:ms};function ds(){const s=E(),{pathname:n}=W(),o=X(),[u,a]=p.useState([]),v=m(t=>t.menu.selectedKeys),d=m(t=>t.menu.openKeys),x=m(t=>t.tabs.isMaximize),f=m(t=>t.menu.isCollapsed),h=m(t=>t.menu.isPhone),b=m(t=>t.user.permissions);p.useEffect(()=>{const t=fe(n);!h&&!f&&(o(q(t)),o(he(n)))},[n]),p.useEffect(()=>{if(b.length>0){const t=pe(j,b);a(t||[])}},[b]);const g=t=>{s(t);const y=R({menus:u,permissions:b,key:t});y&&(o(K(y.key)),o(z(y.nav)),o($(y)))},r=t=>{g(t.key),h&&w()},A=(t,l)=>{let y=!0;for(let O=0;O<t.length;O++)if(t[O]!==l[O]){y=!1;break}return y},c=t=>{const l=[];let y="";if(t.length>0){y=t[t.length-1];const O=J(y);l.push(y);for(let P=t.length-2;P>=0;P--){const D=J(t[P]);A(D,O)&&l.unshift(t[P])}}o(q(l))},M=()=>{const t=ve(u,b);g(t),h&&w()},w=()=>{o(U(!0))};return C(H,{children:[C("div",{className:`
          transition-all
          overflow-auto
          z-2
          ${N.menu}
          ${f?N.menuClose:""}
          ${x||h&&f?N.menuNone:""}
          ${h?"!z-1002":""}
        `,children:[C("div",{className:`
            text-white
            flex
            content-center
            px-5
            py-2
            cursor-pointer
            ${f?"justify-center":""}
          `,onClick:M,children:[e("img",{src:Ye,width:30,height:30,className:"object-contain",alt:"logo"}),e("span",{className:`
            text-white
            ml-3
            text-xl
            font-bold
            truncate
            ${f?"hidden":""}
          `,children:"后台管理系统"})]}),e(we,{className:"z-1000",selectedKeys:[v],openKeys:d,mode:"inline",theme:"dark",inlineCollapsed:f,items:u,onClick:r,onOpenChange:c})]}),h&&!f&&e("div",{className:`${N.cover} fixed w-full h-full bg-gray-500 bg-opacity-10 z-1001`,onClick:w})]})}const fs="data:image/png;base64,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";function hs(s){const{passwordRef:n}=s,[o]=B.useForm(),[u,a]=p.useState(!1),[v,d]=p.useState(!1);return p.useImperativeHandle(n,()=>({open:()=>{a(!0)}})),e(Ke,{title:"修改密码",open:u,confirmLoading:v,onOk:()=>{o.submit()},onCancel:()=>a(!1),children:C(B,{name:"UpdatePassword",form:o,labelCol:{span:5},wrapperCol:{span:16},onFinish:async h=>{if(h.password!==h.confirmPassword)return L.warning({content:"密码和确认密码不相同!",key:"confirmPassword"});try{d(!0);const{data:b}=await qe(h);b.code===200&&(a(!1),L.success(b.message))}finally{d(!1)}},autoComplete:"off",children:[e(B.Item,{label:"用户名",name:"username",rules:[{required:!0,message:"请输入用户名!"}],children:e(Pe,{placeholder:me})}),e(B.Item,{label:"密码",name:"password",rules:[{required:!0,message:"请输入密码!"}],children:e(G,{})}),e(B.Item,{label:"确认密码",name:"confirmPassword",rules:[{required:!0,message:"请输入确认密码!"}],children:e(G,{})})]})})}const{Item:ps}=se;function vs(s){const{className:n,list:o}=s,u=m(a=>a.menu.isPhone);return e(H,{children:!u&&e("div",{className:`${n} flex items-center`,children:e(se,{children:o==null?void 0:o.map(a=>e(ps,{className:"whitespace-nowrap",children:a},a))})})})}function gs(){const s=m(c=>c.menu.isCollapsed),n=m(c=>c.user.userInfo.username),o=X(),u=E(),[,,a]=_(),{clear:v}=te.useAliveController(),d=m(c=>c.tabs.isMaximize),x=m(c=>c.tabs.nav),f=p.useRef(null),h=[{key:"password",label:e("span",{children:"修改密码"}),icon:e(We,{className:"mr-1"})},{key:"logout",label:e("span",{children:"退出登录"}),icon:e(De,{className:"mr-1"})}],b=c=>{var M;switch(c.key){case"password":(M=f.current)==null||M.open();break;case"logout":g();break}},g=()=>{Te.confirm({title:"温馨提示",icon:e(Le,{}),content:"是否确定退出系统?",onOk(){o(Qe()),o(ye()),o(K("")),a(),v(),u("/login")}})},r=()=>C("div",{className:"flex items-center",children:[e(je,{}),e(ge,{}),e(Ie,{}),e(Re,{}),e(F,{className:"min-w-50px",menu:{items:h,onClick:b},children:C("div",{className:"ant-dropdown-link flex items-center cursor-pointer",onClick:c=>c.preventDefault(),children:[e("img",{src:fs,width:27,height:27,alt:"头像",className:"rounded-1/2 overflow-hidden object-cover bg-light-500"}),e("span",{className:"ml-2 text-15px min-w-50px truncate",children:n||"south-admin"})]})})]}),A=()=>C("div",{className:"text-lg cursor-pointer",onClick:()=>o(U(!s)),children:[s&&e(ze,{}),!s&&e(Se,{})]});return C(H,{children:[C("header",{className:`
          border-bottom
          flex
          items-center
          justify-between
          px-6
          py-6px
          box-border
          transition-all
          ${N.headerDriver}
          ${d?N.none:""}
        `,children:[C("div",{className:"flex item-center",children:[e(A,{}),e(vs,{className:"ml-15px",list:x})]}),e(r,{})]}),e(hs,{passwordRef:f})]})}function ae(s){const{activeKey:n,onOpenChange:o,handleRefresh:u}=s,{pathname:a}=W(),v=E(),d=X(),x=m(g=>g.tabs.tabs),f=m(g=>g.user.permissions);return[(g=n)=>{const r=x.findIndex(A=>A.key===g);return[{key:"refresh",label:"重新加载",disabled:g!==a,icon:e(He,{className:"mr-5px transform rotate-270"})},{key:"close_current",label:"关闭标签",disabled:x.length<=1,icon:e(Ve,{className:"mr-5px"})},{key:"close_other",label:"关闭其他",disabled:x.length<=1,icon:e(Ue,{className:"mr-5px transform rotate-90"})},{key:"close_left",label:"关闭左侧",disabled:r===0,icon:e(Y,{className:"mr-5px transform rotate-270"})},{key:"close_right",label:"关闭右侧",disabled:r===x.length-1,icon:e(Y,{className:"mr-5px transform rotate-90"})}]},(g,r=n)=>{switch(o==null||o(!1),g){case"refresh":u(r);break;case"close_current":d(ee(r));break;case"close_other":d(Ne(r));break;case"close_left":if(d(xe(r)),a!==r){const c=R({menus:j,permissions:f,key:r});c!=null&&c.key&&(v(r),d(z(c.nav)))}break;case"close_right":if(d(be(r)),a!==r){const c=R({menus:j,permissions:f,key:r});c!=null&&c.key&&(v(r),d(z(c.nav)))}break}}]}function ys(s){const{isRefresh:n,onClick:o}=s;return e(ne,{title:"重新加载",placement:"bottom",children:e(S,{className:`
          change
          flex
          items-center
          justify-center
          text-lg
          cursor-pointer
          ${n?"animate-spin pointer-events-none":""}
        `,onClick:()=>o(),icon:"ant-design:reload-outlined"})})}function bs(){const s=X(),n=m(u=>u.tabs.isMaximize);return e(ne,{title:n?"最小化":"最大化",placement:"bottom",children:e(S,{className:`
          flex
          items-center
          justify-center
          text-lg
          cursor-pointer
        `,icon:n?"ant-design:compress-outlined":"ant-design:expand-outlined",onClick:()=>{s(Ce(!n))}})})}function xs(s){const{activeKey:n,handleRefresh:o}=s,[u,a]=p.useState(!1),v=h=>{a(h)},d={activeKey:n,onOpenChange:v,handleRefresh:o},[x,f]=ae(d);return e(F,{trigger:["click"],menu:{items:x(),onClick:h=>f(h.key)},onOpenChange:v,children:e(S,{className:`
          flex
          items-center
          justify-center
          text-lg
          cursor-pointer
          transition-all
          transform
          ${u?"rotate-180":"rotate-0"}
        `,icon:"ant-design:down-outlined"})})}function Ns(){const s=E(),{pathname:n,search:o}=W(),u=n+o,a=X(),{refresh:v}=te.useAliveController(),[d,x]=p.useState(null),[f,h]=p.useState(null),b=m(i=>i.tabs.tabs),g=m(i=>i.tabs.isLock),r=m(i=>i.tabs.activeKey),A=m(i=>i.user.permissions),c=m(i=>i.tabs.isMaximize),M=p.useCallback((i=u)=>{if(A.length>0){if(i==="/")return;const k=R({menus:j,permissions:A,key:i});k!=null&&k.key?(a(K(k.key)),a(z(k.nav)),a($(k))):a(K(i))}},[A]);p.useEffect(()=>{M()},[M]),p.useEffect(()=>()=>{d&&(clearTimeout(d),x(null)),f&&(clearTimeout(f),h(null))},[]),p.useEffect(()=>{if(r!==u){const i=g?r:u;M(i),g&&(s(i),a(Ae(!1)))}},[r,u]);const w=i=>{s(i)},t=i=>{a(ee(i))},l=(i,T)=>{T==="remove"&&t(i)},y=p.useCallback((i=r)=>{typeof i=="string"&&(d||(a(Q(!0)),v(i),x(setTimeout(()=>{L.success({content:"刷新成功",key:"refresh"}),a(Q(!1)),x(null)},100)),h(setTimeout(()=>{h(null)},1e3))))},[r,d]),O=p.useMemo(()=>e(ys,{isRefresh:!!f,onClick:y}),[f,y]),P=p.useMemo(()=>e(xs,{activeKey:r,handleRefresh:y}),[r,y]),D=p.useMemo(()=>e(bs,{}),[]),I=[{element:O},{element:P},{element:D}],re={activeKey:r,handleRefresh:y},[ie,ce]=ae(re),le=(i,T)=>e(T,{...i,children:k=>e(F,{menu:{items:ie(k.key),onClick:ue=>ce(ue.key,k.key)},trigger:["contextMenu"],children:e("div",{className:"mr-3px",children:k})},k.key)});return C("div",{className:`
      flex
      items-center
      justify-between
      mx-2
      transition-all
      ${c?N.conMaximize:""}
    `,children:[b.length>0?e(Xe,{hideAdd:!0,className:"w-full h-30px py-0",onChange:w,activeKey:r,type:"editable-card",onEdit:l,items:b,renderTabBar:le}):e("span",{}),e("div",{className:"flex",children:I==null?void 0:I.map((i,T)=>e("div",{className:`
                ${N.leftDivide}
                change
                divide-solid
                w-36px
                h-36px
                hover:opacity-70
                flex
                place-content-center
                items-center
              `,children:i.element},T))})]})}function Vs(){const s=X(),n=E(),[o]=_(),{pathname:u,search:a}=W(),v=u+a,d=o(),x=Oe(),[f,h]=p.useState(!0),b=m(l=>l.user.permissions),g=m(l=>l.user.userInfo.id),r=m(l=>l.tabs.isMaximize),A=m(l=>l.menu.isCollapsed),c=m(l=>l.menu.isPhone),M=m(l=>l.public.isRefresh),w=p.useCallback(async()=>{try{h(!0);const{data:l}=await Ze({refresh_cache:!1});if(l){const{data:{user:y,permissions:O}}=l,P=Ge(O);s(Je(y)),s(Z(P))}}catch(l){console.error("获取用户数据失败:",l),Z([])}finally{h(!1)}},[]);p.useEffect(()=>{d||n("/login"),d&&!g&&w()},[w,n,d,g]);const t=ke(()=>{const l=window.innerWidth<=768;l&&s(U(!0)),s(Me(l))},{wait:500});return p.useEffect(()=>(window.addEventListener("resize",t.run()),()=>{window.removeEventListener("resize",t.run())}),[]),C("div",{id:"layout",children:[e(ds,{}),C("div",{className:N.layout_right,children:[C("div",{id:"header",className:`
            border-bottom
            transition-all
            ${N.header}
            ${A?N.headerCloseMenu:""}
            ${r?N.headerNone:""}
            ${c?"!left-0 z-999":""}
          `,children:[e(gs,{}),e(Ns,{})]}),C("div",{id:"layoutContent",className:`
            overflow-auto
            transition-all
            ${N.con}
            ${r?N.conMaximize:""}
            ${A?N.conCloseMenu:""}
            ${c?"!left-0":""}
          `,children:[f&&b.length===0&&e(Be,{active:!0,className:"p-30px",paragraph:{rows:10}}),!f&&b.length===0&&e(Fe,{}),M&&e("div",{className:`
              absolute
              left-50%
              top-50%
              -rotate-x-50%
              -rotate-y-50%
            `,children:e(S,{className:"text-40px animate-spin",icon:"ri:loader-2-fill"})}),b.length>0&&!M&&e(Ee,{id:v,name:v,children:x})]})]})]})}export{Ye as L,Z as a,Vs as b,Hs as c,Ds as l,Ge as p,Je as s,Ls as u};
