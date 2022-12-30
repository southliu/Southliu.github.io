import{a as C,F as A,j as e}from"./components_Bottom.fbcc2d20.js";import{r as U,P as me,u as Y}from"./components_Business.a44588e3.js";import{r as h}from"./react.017637b6.js";import{u as O,a as m}from"./react-redux.dedf6ab1.js";import{c as de}from"./@reduxjs_toolkit.d0210b58.js";import{g as pe,s as V,a as fe,f as he,d as K,b as H,c as ge,t as q,e as L,h as I,i as S,j as Z,G as xe,k as ye,l as be,m as ve,n as ke,o as ee,p as Ce,q as _e,r as we}from"./components_GlobalSearch.29b77ad5.js";import{u as Ne}from"./ahooks.0bfe52b7.js";import{I as B}from"./@iconify_react.5fde6161.js";import{u as z,a as D,b as Me}from"./react-router.f2f697d9.js";import{j as Pe,F as R,I as Te,m as F,k as se,l as G,M as je,T as ne,n as Oe,h as Re}from"./antd.ad9c6742.js";import{r as te,K as ze}from"./react-activation.d5ae3aea.js";import{F as $e,a as J}from"./components_Fullscreen.7c83ade3.js";import{D as Ke}from"./components_DataScreen.bda89425.js";import{T as Le}from"./components_Theme.4b2ec117.js";import{B as Ie}from"./components_Modal.8cc8adeb.js";import{P as W}from"./components_PasswordStrength.f34fab55.js";import{G as Se,J as Be,K as De,N as Ee,B as Fe,O as Ae,c as Ue,V as qe,T as Q}from"./@ant-design_icons.b42e4810.js";import{F as Ge}from"./page_403.tsx_index.95cf96f2.js";function Es(s){return U.post("/login",s)}function Ve(s){return U.post("/update-password",s)}const oe=de({name:"user",initialState:{permissions:[],userInfo:{id:0,username:"",email:"",phone:""}},reducers:{setUserInfo:(s,n)=>{s.userInfo=n.payload},setPermissions:(s,n)=>{s.permissions=n.payload},clearInfo:s=>{s.userInfo={id:0,username:"",email:"",phone:""}}}}),{setUserInfo:He,setPermissions:X,clearInfo:Je}=oe.actions,Fs=oe.reducer,We=s=>{const n=[];for(let o=0;o<s.length;o++){const{id:u,operation:a}=s[o];n.push(`/${u}`);for(let g=0;g<a.length;g++)n.push(`/${u}/${a[g]}`)}return n},As=(s,n)=>!n||n.length===0?!1:n.includes(s),Qe="/assets/svg/logo.17e50649.svg";function Xe(s){return U.get("/authority/user/refresh-permissions",{params:s})}const Ye="_header_11yja_1",Ze="_headerCloseMenu_11yja_12",es="_headerDriver_11yja_15",ss="_menu_11yja_18",ns="_menuClose_11yja_26",ts="_con_11yja_29",os="_conCloseMenu_11yja_36",as="_conMaximize_11yja_39",rs="_headerNone_11yja_43",is="_none_11yja_47",cs="_menuNone_11yja_50",ls="_conPhone_11yja_54",us="_headerPhone_11yja_57",ms="_leftDivide_11yja_60",k={header:Ye,headerCloseMenu:Ze,headerDriver:es,menu:ss,menuClose:ns,con:ts,conCloseMenu:os,conMaximize:as,headerNone:rs,none:is,menuNone:cs,conPhone:ls,headerPhone:us,leftDivide:ms};function ds(){const s=z(),{pathname:n}=D(),o=O(),[u,a]=h.exports.useState([]),g=m(t=>t.menu.selectedKeys),d=m(t=>t.menu.openKeys),v=m(t=>t.tabs.isMaximize),p=m(t=>t.menu.isCollapsed),f=m(t=>t.menu.isPhone),b=m(t=>t.user.permissions);h.exports.useEffect(()=>{const t=pe(n);!f&&!p&&(o(V(t)),o(fe(n)))},[n]),h.exports.useEffect(()=>{if(b.length>0){const t=he(K,b);a(t||[])}},[b]);const x=t=>{s(t);const y=L({menus:u,permissions:b,key:t});y&&(o(I(y.key)),o(S(y.nav)),o(Z(y)))},r=t=>{x(t.key),f&&P()},_=(t,l)=>{let y=!0;for(let M=0;M<t.length;M++)if(t[M]!==l[M]){y=!1;break}return y},c=t=>{const l=[];let y="";if(t.length>0){y=t[t.length-1];const M=H(y);l.push(y);for(let T=t.length-2;T>=0;T--){const E=H(t[T]);_(E,M)&&l.unshift(t[T])}}o(V(l))},w=()=>{const t=ge(u,b);x(t),f&&P()},P=()=>{o(q(!0))};return C(A,{children:[C("div",{className:`
          transition-all
          overflow-auto
          z-2
          ${k.menu}
          ${p?k.menuClose:""}
          ${v||f&&p?k.menuNone:""}
          ${f?"!z-1002":""}
        `,children:[C("div",{className:`
            text-white
            flex
            content-center
            px-5
            py-2
            cursor-pointer
            ${p?"justify-center":""}
          `,onClick:w,children:[e("img",{src:Qe,width:30,height:30,className:"object-contain",alt:"logo"}),e("span",{className:`
            text-white
            ml-3
            text-xl
            font-bold
            truncate
            ${p?"hidden":""}
          `,children:"后台管理系统"})]}),e(Pe,{className:"z-1000",selectedKeys:[g],openKeys:d,mode:"inline",theme:"dark",inlineCollapsed:p,items:u,onClick:r,onOpenChange:c})]}),f&&!p&&e("div",{className:`${k.cover} fixed w-full h-full bg-gray-500 bg-opacity-10 z-1001`,onClick:P})]})}const ps="/assets/png/avatar.07151444.png";function fs(s){const{passwordRef:n}=s,[o]=R.useForm(),[u,a]=h.exports.useState(!1),[g,d]=h.exports.useState(!1);return h.exports.useImperativeHandle(n,()=>({open:()=>{a(!0)}})),e(Ie,{title:"修改密码",open:u,confirmLoading:g,onOk:()=>{o.submit()},onCancel:()=>a(!1),children:C(R,{name:"UpdatePassword",form:o,labelCol:{span:5},wrapperCol:{span:16},onFinish:async f=>{if(f.password!==f.confirmPassword)return F.warning({content:"密码和确认密码不相同!",key:"confirmPassword"});try{d(!0);const{data:b}=await Ve(f);b.code===200&&(a(!1),F.success(b.message))}finally{d(!1)}},autoComplete:"off",children:[e(R.Item,{label:"用户名",name:"username",rules:[{required:!0,message:"请输入用户名!"}],children:e(Te,{placeholder:me})}),e(R.Item,{label:"密码",name:"password",rules:[{required:!0,message:"请输入密码!"}],children:e(W,{})}),e(R.Item,{label:"确认密码",name:"confirmPassword",rules:[{required:!0,message:"请输入确认密码!"}],children:e(W,{})})]})})}const{Item:hs}=se;function gs(s){const{className:n,list:o}=s,u=m(a=>a.menu.isPhone);return e(A,{children:!u&&e("div",{className:`${n} flex items-center`,children:e(se,{children:o==null?void 0:o.map(a=>e(hs,{className:"whitespace-nowrap",children:a},a))})})})}function xs(){const s=m(c=>c.menu.isCollapsed),n=m(c=>c.user.userInfo.username),o=O(),u=z(),[,,a]=Y(),{clear:g}=te.exports.useAliveController(),d=m(c=>c.tabs.isMaximize),v=m(c=>c.tabs.nav),p=h.exports.useRef(null),f=[{key:"password",label:e("span",{children:"修改密码"}),icon:e(De,{className:"mr-1"})},{key:"logout",label:e("span",{children:"退出登录"}),icon:e(Ee,{className:"mr-1"})}],b=c=>{var w;switch(c.key){case"password":(w=p.current)==null||w.open();break;case"logout":x();break}},x=()=>{je.confirm({title:"温馨提示",icon:e(Fe,{}),content:"是否确定退出系统?",onOk(){o(Je()),o(ye()),o(I("")),a(),g(),u("/login")}})},r=()=>C("div",{className:"flex items-center",children:[e(Ke,{}),e(xe,{}),e($e,{}),e(Le,{}),e(G,{className:"min-w-50px",menu:{items:f,onClick:b},children:C("div",{className:"ant-dropdown-link flex items-center cursor-pointer",onClick:c=>c.preventDefault(),children:[e("img",{src:ps,width:27,height:27,alt:"头像",className:"rounded-1/2 overflow-hidden object-cover bg-light-500"}),e("span",{className:"ml-2 text-15px min-w-50px truncate",children:n||"south-admin"})]})})]}),_=()=>C("div",{className:"text-lg cursor-pointer",onClick:()=>o(q(!s)),children:[s&&e(Se,{}),!s&&e(Be,{})]});return C(A,{children:[C("header",{className:`
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
        `,children:[C("div",{className:"flex item-center",children:[e(_,{}),e(gs,{className:"ml-15px",list:v})]}),e(r,{})]}),e(fs,{passwordRef:p})]})}function ae(s){const{activeKey:n,onOpenChange:o,handleRefresh:u}=s,{pathname:a}=D(),g=z(),d=O(),v=m(x=>x.tabs.tabs),p=m(x=>x.user.permissions);return[(x=n)=>{const r=v.findIndex(_=>_.key===x);return[{key:"refresh",label:"重新加载",disabled:x!==a,icon:e(Ae,{className:"mr-5px transform rotate-270"})},{key:"close_current",label:"关闭标签",disabled:v.length<=1,icon:e(Ue,{className:"mr-5px"})},{key:"close_other",label:"关闭其他",disabled:v.length<=1,icon:e(qe,{className:"mr-5px transform rotate-90"})},{key:"close_left",label:"关闭左侧",disabled:r===0,icon:e(Q,{className:"mr-5px transform rotate-270"})},{key:"close_right",label:"关闭右侧",disabled:r===v.length-1,icon:e(Q,{className:"mr-5px transform rotate-90"})}]},(x,r=n)=>{switch(o==null||o(!1),x){case"refresh":u(r);break;case"close_current":d(ee(r));break;case"close_other":d(ke(r));break;case"close_left":if(d(ve(r)),a!==r){const c=L({menus:K,permissions:p,key:r});c!=null&&c.key&&(g(r),d(S(c.nav)))}break;case"close_right":if(d(be(r)),a!==r){const c=L({menus:K,permissions:p,key:r});c!=null&&c.key&&(g(r),d(S(c.nav)))}break}}]}function ys(s){const{isRefresh:n,onClick:o}=s;return e(ne,{title:"重新加载",placement:"bottom",children:e(B,{className:`
          change
          flex
          items-center
          justify-center
          text-lg
          cursor-pointer
          ${n?"animate-spin pointer-events-none":""}
        `,onClick:()=>o(),icon:"ant-design:reload-outlined"})})}function bs(){const s=O(),n=m(u=>u.tabs.isMaximize);return e(ne,{title:n?"最小化":"最大化",placement:"bottom",children:e(B,{className:`
          flex
          items-center
          justify-center
          text-lg
          cursor-pointer
        `,icon:n?"ant-design:compress-outlined":"ant-design:expand-outlined",onClick:()=>{s(Ce(!n))}})})}function vs(s){const{activeKey:n,handleRefresh:o}=s,[u,a]=h.exports.useState(!1),g=f=>{a(f)},d={activeKey:n,onOpenChange:g,handleRefresh:o},[v,p]=ae(d);return e(G,{trigger:["click"],menu:{items:v(),onClick:f=>p(f.key)},onOpenChange:g,children:e(B,{className:`
          flex
          items-center
          justify-center
          text-lg
          cursor-pointer
          transition-all
          transform
          ${u?"rotate-180":"rotate-0"}
        `,icon:"ant-design:down-outlined"})})}function ks(){const s=z(),{pathname:n,search:o}=D(),u=n+o,a=O(),{refresh:g}=te.exports.useAliveController(),[d,v]=h.exports.useState(null),[p,f]=h.exports.useState(null),b=m(i=>i.tabs.tabs),x=m(i=>i.tabs.isLock),r=m(i=>i.tabs.activeKey),_=m(i=>i.user.permissions),c=m(i=>i.tabs.isMaximize),w=h.exports.useCallback((i=u)=>{if(_.length>0){if(i==="/")return;const N=L({menus:K,permissions:_,key:i});N!=null&&N.key?(a(I(N.key)),a(S(N.nav)),a(Z(N))):a(I(i))}},[_]);h.exports.useEffect(()=>{w()},[w]),h.exports.useEffect(()=>()=>{d&&(clearTimeout(d),v(null)),p&&(clearTimeout(p),f(null))},[]),h.exports.useEffect(()=>{if(r!==u){const i=x?r:u;w(i),x&&(s(i),a(_e(!1)))}},[r,u]);const P=i=>{s(i)},t=i=>{a(ee(i))},l=(i,j)=>{j==="remove"&&t(i)},y=h.exports.useCallback((i=r)=>{typeof i=="string"&&(d||(a(J(!0)),g(i),v(setTimeout(()=>{F.success({content:"刷新成功",key:"refresh"}),a(J(!1)),v(null)},100)),f(setTimeout(()=>{f(null)},1e3))))},[r,d]),M=h.exports.useMemo(()=>e(ys,{isRefresh:!!p,onClick:y}),[p,y]),T=h.exports.useMemo(()=>e(vs,{activeKey:r,handleRefresh:y}),[r,y]),E=h.exports.useMemo(()=>e(bs,{}),[]),$=[{element:M},{element:T},{element:E}],re={activeKey:r,handleRefresh:y},[ie,ce]=ae(re),le=(i,j)=>e(j,{...i,children:N=>e(G,{menu:{items:ie(N.key),onClick:ue=>ce(ue.key,N.key)},trigger:["contextMenu"],children:e("div",{className:"mr-3px",children:N})},N.key)});return C("div",{className:`
      flex
      items-center
      justify-between
      mx-2
      transition-all
      ${c?k.conMaximize:""}
    `,children:[b.length>0?e(Oe,{hideAdd:!0,className:"w-full h-30px py-0",onChange:P,activeKey:r,type:"editable-card",onEdit:l,items:b,renderTabBar:le}):e("span",{}),e("div",{className:"flex",children:$==null?void 0:$.map((i,j)=>e("div",{className:`
                ${k.leftDivide}
                change
                divide-solid
                w-36px
                h-36px
                hover:opacity-70
                flex
                place-content-center
                items-center
              `,children:i.element},j))})]})}function Us(){const s=O(),n=z(),[o]=Y(),{pathname:u,search:a}=D(),g=u+a,d=o(),v=Me(),[p,f]=h.exports.useState(!0),b=m(l=>l.user.permissions),x=m(l=>l.user.userInfo.id),r=m(l=>l.tabs.isMaximize),_=m(l=>l.menu.isCollapsed),c=m(l=>l.menu.isPhone),w=m(l=>l.public.isRefresh),P=h.exports.useCallback(async()=>{try{f(!0);const{data:l}=await Xe({refresh_cache:!1});if(l){const{data:{user:y,permissions:M}}=l,T=We(M);s(He(y)),s(X(T))}}catch(l){console.error("获取用户数据失败:",l),X([])}finally{f(!1)}},[]);h.exports.useEffect(()=>{d||n("/login"),d&&!x&&P()},[P,n,d,x]);const t=Ne(()=>{const l=window.innerWidth<=768;l&&s(q(!0)),s(we(l))},{wait:500});return h.exports.useEffect(()=>(window.addEventListener("resize",t.run()),()=>{window.removeEventListener("resize",t.run())}),[]),C("div",{id:"layout",children:[e(ds,{}),C("div",{className:k.layout_right,children:[C("div",{id:"header",className:`
            border-bottom
            transition-all
            ${k.header}
            ${_?k.headerCloseMenu:""}
            ${r?k.headerNone:""}
            ${c?"!left-0 z-999":""}
          `,children:[e(xs,{}),e(ks,{})]}),C("div",{id:"layoutContent",className:`
            overflow-auto
            transition-all
            ${k.con}
            ${r?k.conMaximize:""}
            ${_?k.conCloseMenu:""}
            ${c?"!left-0":""}
          `,children:[p&&b.length===0&&e(Re,{active:!0,className:"p-30px",paragraph:{rows:10}}),!p&&b.length===0&&e(Ge,{}),w&&e("div",{className:`
              absolute
              left-50%
              top-50%
              -rotate-x-50%
              -rotate-y-50%
            `,children:e(B,{className:"text-40px animate-spin",icon:"ri:loader-2-fill"})}),b.length>0&&!w&&e(ze,{id:g,name:g,children:v})]})]})]})}export{Qe as L,X as a,Us as b,As as c,Es as l,We as p,He as s,Fs as u};
