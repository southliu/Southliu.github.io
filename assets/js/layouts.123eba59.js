import{r as h,j as e}from"./react.e58b2294.js";import{r as L,P as le,u as Z}from"./components_Business.ac78b8d1.js";import{u as T,a as m}from"./react-redux.95773f8e.js";import{c as ue}from"./@reduxjs_toolkit.c56278b4.js";import{g as me,s as F,a as de,f as fe,d as R,b as q,c as he,t as H,e as K,h as z,i as S,j as _,G as pe,k as xe,l as ge,m as ve,n as je,o as $,p as be,q as ye,r as Ne}from"./components_GlobalSearch.77d489aa.js";import{u as Ce}from"./ahooks.d42ebba8.js";import{I as E}from"./@iconify_react.fa3c46fd.js";import{u as I,a as W,b as Ae}from"./react-router.d965eaa6.js";import{k as Me,F as B,I as ke,m as D,l as ee,n as V,M as Oe,T as se,o as we,h as Pe}from"./antd.a9b3ffac.js";import{r as ne,K as Te}from"./react-activation.27c4d2cc.js";import{F as Xe,a as J}from"./components_Fullscreen.c1798143.js";import{D as Be}from"./components_DataScreen.1974cbf4.js";import{T as Ee}from"./components_Theme.0589c6cf.js";import{B as Ie}from"./components_Modal.333e849a.js";import{P as Q}from"./components_PasswordStrength.3cd63933.js";import{K as Re,N as Ke,O as ze,T as Se,B as We,V as De,W as Le,X as He,Y as G}from"./@ant-design_icons.dd6603bd.js";import{F as Ve}from"./page_403.tsx_index.1ed5acbe.js";function zs(n){return L.post("/login",n)}function Ue(n){return L.post("/update-password",n)}const Fe=n=>{const t=[];for(let o=0;o<n.length;o++){const{id:l,operation:a}=n[o];t.push(`/${l}`);for(let p=0;p<a.length;p++)t.push(`/${l}/${a[p]}`)}return t},Ss=(n,t)=>!t||t.length===0?!1:t.includes(n),te=ue({name:"user",initialState:{permissions:[],userInfo:{id:0,username:"",email:"",phone:""}},reducers:{setUserInfo:(n,t)=>{n.userInfo=t.payload},setPermissions:(n,t)=>{n.permissions=t.payload},clearInfo:n=>{n.userInfo={id:0,username:"",email:"",phone:""}}}}),{setUserInfo:qe,setPermissions:Y,clearInfo:Je}=te.actions,Ws=te.reducer;function Qe(n){return L.get("/authority/user/refresh-permissions",{params:n})}const Ge="/assets/svg/logo.17e50649.svg",Ye="_header_17bj0_1",Ze="_headerCloseMenu_17bj0_14",_e="_headerDriver_17bj0_17",$e="_menu_17bj0_20",es="_menuClose_17bj0_28",ss="_con_17bj0_31",ns="_conCloseMenu_17bj0_39",ts="_conMaximize_17bj0_43",os="_headerNone_17bj0_47",as="_none_17bj0_51",rs="_menuNone_17bj0_54",is="_conPhone_17bj0_58",cs="_headerPhone_17bj0_61",ls="_leftDivide_17bj0_64",y={header:Ye,headerCloseMenu:Ze,headerDriver:_e,menu:$e,menuClose:es,con:ss,conCloseMenu:ns,conMaximize:ts,headerNone:os,none:as,menuNone:rs,conPhone:is,headerPhone:cs,leftDivide:ls};function us(){const n=I(),{pathname:t}=W(),o=T(),[l,a]=h.useState([]),p=m(s=>s.menu.selectedKeys),d=m(s=>s.menu.openKeys),g=m(s=>s.tabs.isMaximize),u=m(s=>s.menu.isCollapsed),f=m(s=>s.menu.isPhone),v=m(s=>s.user.permissions);h.useEffect(()=>{const s=me(t);!f&&!u&&(o(F(s)),o(de(t)))},[t]);const x=h.useCallback(s=>{var b,j,A;for(let C=0;C<s.length;C++)(b=s[C])!=null&&b.icon&&(s[C].icon=e.jsx(E,{icon:s[C].icon})),(A=(j=s[C])==null?void 0:j.children)!=null&&A.length&&x(s[C].children)},[]);h.useEffect(()=>{if(v.length>0){const s=fe(R,v);x(s),a(s||[])}},[x,v]);const r=s=>{n(s);const j=K({menus:l,permissions:v,key:s});j&&(o(z(j.key)),o(S(j.nav)),o(_(j)))},N=s=>{r(s.key),f&&O()},c=(s,b)=>{let j=!0;for(let A=0;A<s.length;A++)if(s[A]!==b[A]){j=!1;break}return j},M=s=>{const b=[];let j="";if(s.length>0){j=s[s.length-1];const A=q(j);b.push(j);for(let C=s.length-2;C>=0;C--){const X=q(s[C]);c(X,A)&&b.unshift(s[C])}}o(F(b))},w=()=>{const s=he(l,v);r(s),f&&O()},O=()=>{o(H(!0))};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:`
          transition-all
          overflow-auto
          z-2
          ${y.menu}
          ${u?y.menuClose:""}
          ${g||f&&u?y.menuNone:""}
          ${f?"!z-1002":""}
        `,children:[e.jsxs("div",{className:`
            text-white
            flex
            content-center
            px-5
            py-2
            cursor-pointer
            ${u?"justify-center":""}
          `,onClick:w,children:[e.jsx("img",{src:Ge,width:30,height:30,className:"object-contain",alt:"logo"}),e.jsx("span",{className:`
            text-white
            ml-3
            text-xl
            font-bold
            truncate
            ${u?"hidden":""}
          `,children:"后台管理系统"})]}),e.jsx(Me,{className:"z-1000",selectedKeys:[p],openKeys:d,mode:"inline",theme:"dark",inlineCollapsed:u,items:l,onClick:N,onOpenChange:M})]}),f&&!u&&e.jsx("div",{className:`
            ${y.cover}
            fixed
            w-full
            h-full
            bg-gray-500
            bg-opacity-10
            z-1001
          `,onClick:O})]})}const ms="data:image/png;base64,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";function ds(n){const{passwordRef:t}=n,[o]=B.useForm(),[l,a]=h.useState(!1),[p,d]=h.useState(!1);h.useImperativeHandle(t,()=>({open:()=>{a(!0)}}));const g=()=>{o.submit()},u=async f=>{if(f.password!==f.confirmPassword)return D.warning({content:"密码和确认密码不相同!",key:"confirmPassword"});try{d(!0);const{data:v}=await Ue(f);v.code===200&&(a(!1),D.success(v.message))}finally{d(!1)}};return e.jsx(Ie,{title:"修改密码",open:l,confirmLoading:p,onOk:g,onCancel:()=>a(!1),children:e.jsxs(B,{name:"UpdatePassword",form:o,labelCol:{span:5},wrapperCol:{span:16},onFinish:u,autoComplete:"off",children:[e.jsx(B.Item,{label:"用户名",name:"username",rules:[{required:!0,message:"请输入用户名!"}],children:e.jsx(ke,{placeholder:le})}),e.jsx(B.Item,{label:"密码",name:"password",rules:[{required:!0,message:"请输入密码!"}],children:e.jsx(Q,{})}),e.jsx(B.Item,{label:"确认密码",name:"confirmPassword",rules:[{required:!0,message:"请输入确认密码!"}],children:e.jsx(Q,{})})]})})}const{Item:fs}=ee;function hs(n){const{className:t,list:o}=n,l=m(a=>a.menu.isPhone);return e.jsx(e.Fragment,{children:!l&&e.jsx("div",{className:`${t} flex items-center`,children:e.jsx(ee,{children:o==null?void 0:o.map(a=>e.jsx(fs,{className:"whitespace-nowrap",children:a},a))})})})}function ps(){const n=m(c=>c.menu.isCollapsed),t=m(c=>c.user.userInfo.username),o=T(),l=I(),[,,a]=Z(),{clear:p}=ne.useAliveController(),d=m(c=>c.tabs.isMaximize),g=m(c=>c.tabs.nav),u=h.useRef(null),f=[{key:"password",label:e.jsx("span",{children:"修改密码"}),icon:e.jsx(ze,{className:"mr-1"})},{key:"logout",label:e.jsx("span",{children:"退出登录"}),icon:e.jsx(Se,{className:"mr-1"})}],v=c=>{var M;switch(c.key){case"password":(M=u.current)==null||M.open();break;case"logout":x();break}},x=()=>{Oe.confirm({title:"温馨提示",icon:e.jsx(We,{}),content:"是否确定退出系统?",onOk(){o(Je()),o(xe()),o(z("")),a(),p(),l("/login")}})},r=()=>e.jsxs("div",{className:"flex items-center",children:[e.jsx(Be,{}),e.jsx(pe,{}),e.jsx(Xe,{}),e.jsx(Ee,{}),e.jsx(V,{className:"min-w-50px",menu:{items:f,onClick:v},children:e.jsxs("div",{className:"ant-dropdown-link flex items-center cursor-pointer",onClick:c=>c.preventDefault(),children:[e.jsx("img",{src:ms,width:27,height:27,alt:"头像",className:"rounded-1/2 overflow-hidden object-cover bg-light-500"}),e.jsx("span",{className:"ml-2 text-15px min-w-50px truncate",children:t||"south-admin"})]})})]}),N=()=>e.jsxs("div",{className:"text-lg cursor-pointer",onClick:()=>o(H(!n)),children:[n&&e.jsx(Re,{}),!n&&e.jsx(Ke,{})]});return e.jsxs(e.Fragment,{children:[e.jsxs("header",{className:`
          border-bottom
          flex
          items-center
          justify-between
          px-6
          py-6px
          box-border
          transition-all
          ${y.headerDriver}
          ${d?y.none:""}
        `,children:[e.jsxs("div",{className:"flex item-center",children:[e.jsx(N,{}),e.jsx(hs,{className:"ml-15px",list:g})]}),e.jsx(r,{})]}),e.jsx(ds,{passwordRef:u})]})}function oe(n){const{activeKey:t,onOpenChange:o,handleRefresh:l}=n,{pathname:a}=W(),p=I(),d=T(),g=m(x=>x.tabs.tabs),u=m(x=>x.user.permissions);return[(x=t)=>{const r=g.findIndex(N=>N.key===x);return[{key:"refresh",label:"重新加载",disabled:x!==a,icon:e.jsx(De,{className:"mr-5px transform rotate-270"})},{key:"close_current",label:"关闭标签",disabled:g.length<=1,icon:e.jsx(Le,{className:"mr-5px"})},{key:"close_other",label:"关闭其他",disabled:g.length<=1,icon:e.jsx(He,{className:"mr-5px transform rotate-90"})},{key:"close_left",label:"关闭左侧",disabled:r===0,icon:e.jsx(G,{className:"mr-5px transform rotate-270"})},{key:"close_right",label:"关闭右侧",disabled:r===g.length-1,icon:e.jsx(G,{className:"mr-5px transform rotate-90"})}]},(x,r=t)=>{switch(o==null||o(!1),x){case"refresh":l(r);break;case"close_current":d($(r));break;case"close_other":d(je(r));break;case"close_left":if(d(ve(r)),a!==r){const c=K({menus:R,permissions:u,key:r});c!=null&&c.key&&(p(r),d(S(c.nav)))}break;case"close_right":if(d(ge(r)),a!==r){const c=K({menus:R,permissions:u,key:r});c!=null&&c.key&&(p(r),d(S(c.nav)))}break}}]}function xs(n){const{isRefresh:t,onClick:o}=n;return e.jsx(se,{title:"重新加载",placement:"bottom",children:e.jsx(E,{className:`
          change
          flex
          items-center
          justify-center
          text-lg
          cursor-pointer
          ${t?"animate-spin pointer-events-none":""}
        `,onClick:()=>o(),icon:"ant-design:reload-outlined"})})}function gs(){const n=T(),t=m(l=>l.tabs.isMaximize),o=()=>{n(be(!t))};return e.jsx(se,{title:t?"最小化":"最大化",placement:"bottom",children:e.jsx(E,{className:`
          flex
          items-center
          justify-center
          text-lg
          cursor-pointer
        `,icon:t?"ant-design:compress-outlined":"ant-design:expand-outlined",onClick:o})})}function vs(n){const{activeKey:t,handleRefresh:o}=n,[l,a]=h.useState(!1),p=f=>{a(f)},d={activeKey:t,onOpenChange:p,handleRefresh:o},[g,u]=oe(d);return e.jsx(V,{trigger:["click"],menu:{items:g(),onClick:f=>u(f.key)},onOpenChange:p,children:e.jsx(E,{className:`
          flex
          items-center
          justify-center
          text-lg
          cursor-pointer
          transition-all
          transform
          ${l?"rotate-180":"rotate-0"}
        `,icon:"ant-design:down-outlined"})})}function js(){const n=I(),{pathname:t,search:o}=W(),l=t+o,a=T(),{refresh:p}=ne.useAliveController(),[d,g]=h.useState(null),[u,f]=h.useState(null),v=m(i=>i.tabs.tabs),x=m(i=>i.tabs.isLock),r=m(i=>i.tabs.activeKey),N=m(i=>i.user.permissions),c=m(i=>i.tabs.isMaximize),M=h.useCallback((i=l)=>{if(N.length>0){if(i==="/")return;const k=K({menus:R,permissions:N,key:i});k!=null&&k.key?(a(z(k.key)),a(S(k.nav)),a(_(k))):a(z(i))}},[N]);h.useEffect(()=>{M()},[M]),h.useEffect(()=>()=>{d&&(clearTimeout(d),g(null)),u&&(clearTimeout(u),f(null))},[]),h.useEffect(()=>{if(r!==l){const i=x?r:l;M(i),x&&(n(i),a(ye(!1)))}},[r,l]);const w=i=>{n(i)},O=i=>{a($(i))},s=(i,P)=>{P==="remove"&&O(i)},b=h.useCallback((i=r)=>{typeof i=="string"&&(d||(a(J(!0)),p(i),g(setTimeout(()=>{D.success({content:"刷新成功",key:"refresh"}),a(J(!1)),g(null)},100)),f(setTimeout(()=>{f(null)},1e3))))},[r,d]),j=h.useMemo(()=>e.jsx(xs,{isRefresh:!!u,onClick:b}),[u,b]),A=h.useMemo(()=>e.jsx(vs,{activeKey:r,handleRefresh:b}),[r,b]),C=h.useMemo(()=>e.jsx(gs,{}),[]),X=[{element:j},{element:A},{element:C}],U={activeKey:r,handleRefresh:b},[ae,re]=oe(U),ie=(i,P)=>e.jsx(P,{...i,children:k=>e.jsx(V,{menu:{items:ae(k.key),onClick:ce=>re(ce.key,k.key)},trigger:["contextMenu"],children:e.jsx("div",{className:"mr-3px",children:k})},k.key)});return e.jsxs("div",{className:`
      flex
      items-center
      justify-between
      mx-2
      transition-all
      ${c?y.conMaximize:""}
    `,children:[v.length>0?e.jsx(we,{hideAdd:!0,className:"w-full h-30px py-0",onChange:w,activeKey:r,type:"editable-card",onEdit:s,items:v,renderTabBar:ie}):e.jsx("span",{}),e.jsx("div",{className:"flex",children:X==null?void 0:X.map((i,P)=>e.jsx("div",{className:`
                ${y.leftDivide}
                change
                divide-solid
                w-36px
                h-36px
                hover:opacity-70
                flex
                place-content-center
                items-center
              `,children:i.element},P))})]})}function Ds(){const n=T(),t=I(),[o]=Z(),{pathname:l,search:a}=W(),p=l+a,d=o(),g=Ae(),[u,f]=h.useState(!0),v=m(s=>s.user.permissions),x=m(s=>s.user.userInfo.id),r=m(s=>s.tabs.isMaximize),N=m(s=>s.menu.isCollapsed),c=m(s=>s.menu.isPhone),M=m(s=>s.public.isRefresh),w=h.useCallback(async()=>{try{f(!0);const{data:s}=await Qe({refresh_cache:!1});if(s){const{data:{user:b,permissions:j}}=s,A=Fe(j);n(qe(b)),n(Y(A))}}catch(s){console.error("获取用户数据失败:",s),Y([])}finally{f(!1)}},[]);h.useEffect(()=>{d||t("/login"),d&&!x&&w()},[w,t,d,x]);const O=Ce(()=>{const s=window.innerWidth<=768;s&&n(H(!0)),n(Ne(s))},{wait:500});return h.useEffect(()=>(window.addEventListener("resize",O.run()),()=>{window.removeEventListener("resize",O.run())}),[]),e.jsxs("div",{id:"layout",children:[e.jsx(us,{}),e.jsxs("div",{className:y.layout_right,children:[e.jsxs("div",{id:"header",className:`
            border-bottom
            transition-all
            ${y.header}
            ${N?y.headerCloseMenu:""}
            ${r?y.headerNone:""}
            ${c?"!left-0 z-999":""}
          `,children:[e.jsx(ps,{}),e.jsx(js,{})]}),e.jsxs("div",{id:"layoutContent",className:`
            overflow-auto
            transition-all
            ${y.con}
            ${r?y.conMaximize:""}
            ${N?y.conCloseMenu:""}
            ${c?"!left-0 !w-full":""}
          `,children:[u&&v.length===0&&e.jsx(Pe,{active:!0,className:"p-30px",paragraph:{rows:10}}),!u&&v.length===0&&e.jsx(Ve,{}),M&&e.jsx("div",{className:`
              absolute
              left-50%
              top-50%
              -rotate-x-50%
              -rotate-y-50%
            `,children:e.jsx(E,{className:"text-40px animate-spin",icon:"ri:loader-2-fill"})}),v.length>0&&!M&&e.jsx(Te,{id:p,name:p,children:g})]})]})]})}export{Ge as L,Y as a,Ds as b,Ss as c,Qe as g,zs as l,Fe as p,qe as s,Ws as u};
