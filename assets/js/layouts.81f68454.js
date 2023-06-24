import{r as f,j as e}from"./react.402eeaf7.js";import{r as D,P as ue,u as _}from"./components_Business.97a40718.js";import{a as T,u as F}from"./react-redux.a23d062c.js";import{c as me}from"./@reduxjs_toolkit.884780f1.js";import{g as de,s as q,a as fe,f as he,d as I,b as J,c as pe,t as H,e as R,h as K,i as S,j as $,G as xe,k as ge,l as ve,m as je,n as ye,o as ee,p as be,q as Ne,r as Ce}from"./components_GlobalSearch.04adc41b.js";import{u as w,F as Ae,a as Q}from"./components_Fullscreen.dc33051e.js";import{u as Oe}from"./ahooks.59ab49ed.js";import{I as B}from"./@iconify_react.233ce0ee.js";import{u as E,a as z,b as ke}from"./react-router.6ca0c4e9.js";import"./hoist-non-react-statics.a2c7d45a.js";import"./react-is.f75b9dc6.js";import{l as Me,F as X,m as se,I as we,n as Pe,A as Te,o as V,T as Xe,p as Be,i as Ee}from"./antd.2a715811.js";import{r as te,K as Ie}from"./react-activation.23049be8.js";import{D as Re}from"./components_DataScreen.a229f6cf.js";import{T as Ke}from"./components_Theme.1166b8ab.js";import{B as Se}from"./components_Modal.4a9be453.js";import{P as G}from"./components_PasswordStrength.4fbe8d0d.js";import{K as ze,N as We,O as Le,T as De,B as He,V as Ve,W as Ue,X as Fe,Y}from"./@ant-design_icons.27f5aa5e.js";import qe from"./page_403.tsx_index.c5a8cf1e.js";function Je(s){return D.get("/authority/user/refresh-permissions",{params:s})}const Qe=s=>{const n=[];for(let a=0;a<s.length;a++){const{id:u,operation:i}=s[a];n.push(`/${u}`);for(let o=0;o<i.length;o++)n.push(`/${u}/${i[o]}`)}return n},Ds=(s,n)=>!n||n.length===0?!1:n.includes(s),ne=me({name:"user",initialState:{permissions:[],userInfo:{id:0,username:"",email:"",phone:""}},reducers:{setUserInfo:(s,n)=>{s.userInfo=n.payload},setPermissions:(s,n)=>{s.permissions=n.payload},clearInfo:s=>{s.userInfo={id:0,username:"",email:"",phone:""}}}}),{setUserInfo:Ge,setPermissions:Z,clearInfo:Ye}=ne.actions,Hs=ne.reducer,Ze="_header_7p2mx_1",_e="_headerCloseMenu_7p2mx_14",$e="_headerDriver_7p2mx_17",es="_menu_7p2mx_20",ss="_menuClose_7p2mx_28",ts="_con_7p2mx_31",ns="_conCloseMenu_7p2mx_41",os="_conMaximize_7p2mx_45",as="_headerNone_7p2mx_50",rs="_none_7p2mx_54",is="_menuNone_7p2mx_57",cs="_conPhone_7p2mx_61",ls="_headerPhone_7p2mx_64",us="_leftDivide_7p2mx_67",b={header:Ze,headerCloseMenu:_e,headerDriver:$e,menu:es,menuClose:ss,con:ts,conCloseMenu:ns,conMaximize:os,headerNone:as,none:rs,menuNone:is,conPhone:cs,headerPhone:ls,leftDivide:us},ms="/assets/svg/logo.17e50649.svg";function ds(){const s=E(),{pathname:n}=z(),a=T(),[u,i]=f.useState([]),{isMaximize:o,isCollapsed:c,isPhone:m,openKeys:l,selectedKeys:v,permissions:x}=w();f.useEffect(()=>{const t=de(n);!m&&!c&&(a(q(t)),a(fe(n)))},[n]);const h=f.useCallback(t=>{var C,j,y;for(let N=0;N<t.length;N++)(C=t[N])!=null&&C.icon&&(t[N].icon=e.jsx(B,{icon:t[N].icon})),(y=(j=t[N])==null?void 0:j.children)!=null&&y.length&&h(t[N].children)},[]);f.useEffect(()=>{if(x.length>0){const t=he(I,x);h(t),i(t||[])}},[h,x]);const r=t=>{s(t);const j=R({menus:u,permissions:x,key:t});j&&(a(K(j.key)),a(S(j.nav)),a($(j)))},p=t=>{r(t.key),m&&k()},g=(t,C)=>{let j=!0;for(let y=0;y<t.length;y++)if(t[y]!==C[y]){j=!1;break}return j},A=t=>{const C=[];let j="";if(t.length>0){j=t[t.length-1];const y=J(j);C.push(j);for(let N=t.length-2;N>=0;N--){const W=J(t[N]);g(W,y)&&C.unshift(t[N])}}a(q(C))},M=()=>{const t=pe(u,x);r(t),m&&k()},k=()=>{a(H(!0))};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:`
          transition-all
          overflow-auto
          z-2
          ${b.menu}
          ${c?b.menuClose:""}
          ${o||m&&c?b.menuNone:""}
          ${m?"!z-1002":""}
        `,children:[e.jsxs("div",{className:`
            text-white
            flex
            content-center
            px-5
            py-2
            cursor-pointer
            ${c?"justify-center":""}
          `,onClick:M,children:[e.jsx("img",{src:ms,width:30,height:30,className:"object-contain",alt:"logo"}),e.jsx("span",{className:`
            text-white
            ml-3
            text-xl
            font-bold
            truncate
            ${c?"hidden":""}
          `,children:"后台管理系统"})]}),e.jsx(Me,{className:"z-1000",selectedKeys:[v],openKeys:l,mode:"inline",theme:"dark",inlineCollapsed:c,items:u,onClick:p,onOpenChange:A})]}),m&&!c&&e.jsx("div",{className:`
            ${b.cover}
            fixed
            w-full
            h-full
            bg-gray-500
            bg-opacity-10
            z-1001
          `,onClick:k})]})}const fs="data:image/png;base64,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";function Vs(s){return D.post("/login",s)}function hs(s){return D.post("/update-password",s)}function ps(s){const{passwordRef:n}=s,[a]=X.useForm(),[u,i]=se.useMessage(),[o,c]=f.useState(!1),[m,l]=f.useState(!1);f.useImperativeHandle(n,()=>({open:()=>{c(!0)}}));const v=()=>{a.submit()},x=async h=>{if(h.password!==h.confirmPassword)return u.warning({content:"密码和确认密码不相同!",key:"confirmPassword"});try{l(!0);const r=await hs(h);r.code===200&&(c(!1),u.success(r.message))}finally{l(!1)}};return e.jsxs(e.Fragment,{children:[i,e.jsx(Se,{title:"修改密码",open:o,confirmLoading:m,onOk:v,onCancel:()=>c(!1),children:e.jsxs(X,{name:"UpdatePassword",form:a,labelCol:{span:5},wrapperCol:{span:16},onFinish:x,autoComplete:"off",children:[e.jsx(X.Item,{label:"用户名",name:"username",rules:[{required:!0,message:"请输入用户名!"}],children:e.jsx(we,{placeholder:ue})}),e.jsx(X.Item,{label:"密码",name:"password",rules:[{required:!0,message:"请输入密码!"}],children:e.jsx(G,{})}),e.jsx(X.Item,{label:"确认密码",name:"confirmPassword",rules:[{required:!0,message:"请输入确认密码!"}],children:e.jsx(G,{})})]})})]})}function xs(s){const{className:n,list:a}=s,{isPhone:u}=w(),i=o=>{const c=[];if(!(o!=null&&o.length))return[];for(let m=0;m<(o==null?void 0:o.length);m++){const l=o==null?void 0:o[m];c.push({title:l})}return c};return e.jsx(e.Fragment,{children:!u&&e.jsx("div",{className:`${n} flex items-center`,children:e.jsx(Pe,{items:i(a)})})})}function gs(){const s=T(),n=E(),[,,a]=_(),{clear:u}=te.useAliveController(),{modal:i}=Te.useApp(),{isCollapsed:o,isMaximize:c,username:m,nav:l}=w(),v=f.useRef(null),x=[{key:"password",label:e.jsx("span",{children:"修改密码"}),icon:e.jsx(Le,{className:"mr-1"})},{key:"logout",label:e.jsx("span",{children:"退出登录"}),icon:e.jsx(De,{className:"mr-1"})}],h=A=>{var M;switch(A.key){case"password":(M=v.current)==null||M.open();break;case"logout":r();break}},r=()=>{i.confirm({title:"温馨提示",icon:e.jsx(He,{}),content:"是否确定退出系统?",onOk(){s(Ye()),s(ge()),s(K("")),a(),u(),n("/login")}})},p=()=>e.jsxs("div",{className:"flex items-center",children:[e.jsx(Re,{}),e.jsx(xe,{}),e.jsx(Ae,{}),e.jsx(Ke,{}),e.jsx(V,{className:"min-w-50px",menu:{items:x,onClick:h},children:e.jsxs("div",{className:"ant-dropdown-link flex items-center cursor-pointer",onClick:A=>A.preventDefault(),children:[e.jsx("img",{src:fs,width:27,height:27,alt:"头像",className:"rounded-1/2 overflow-hidden object-cover bg-light-500"}),e.jsx("span",{className:"ml-2 text-15px min-w-50px truncate",children:m||"south-admin"})]})})]}),g=()=>e.jsxs("div",{className:"text-lg cursor-pointer",onClick:()=>s(H(!o)),children:[o&&e.jsx(ze,{}),!o&&e.jsx(We,{})]});return e.jsxs(e.Fragment,{children:[e.jsxs("header",{className:`
          border-bottom
          flex
          items-center
          justify-between
          px-6
          py-6px
          box-border
          transition-all
          ${b.headerDriver}
          ${c?b.none:""}
        `,children:[e.jsxs("div",{className:"flex item-center",children:[e.jsx(g,{}),e.jsx(xs,{className:"ml-15px",list:l})]}),e.jsx(p,{})]}),e.jsx(ps,{passwordRef:v})]})}function oe(s){const{activeKey:n,onOpenChange:a,handleRefresh:u}=s,{pathname:i}=z(),{tabs:o,permissions:c}=w(),m=E(),l=T();return[(h=n)=>{const r=o.findIndex(p=>p.key===h);return[{key:"refresh",label:"重新加载",disabled:h!==i,icon:e.jsx(Ve,{className:"mr-5px transform rotate-270"})},{key:"close_current",label:"关闭标签",disabled:o.length<=1,icon:e.jsx(Ue,{className:"mr-5px"})},{key:"close_other",label:"关闭其他",disabled:o.length<=1,icon:e.jsx(Fe,{className:"mr-5px transform rotate-90"})},{key:"close_left",label:"关闭左侧",disabled:r===0,icon:e.jsx(Y,{className:"mr-5px transform rotate-270"})},{key:"close_right",label:"关闭右侧",disabled:r===o.length-1,icon:e.jsx(Y,{className:"mr-5px transform rotate-90"})}]},(h,r=n)=>{switch(a==null||a(!1),h){case"refresh":u(r);break;case"close_current":l(ee(r));break;case"close_other":l(ye(r));break;case"close_left":if(l(je(r)),i!==r){const g=R({menus:I,permissions:c,key:r});g!=null&&g.key&&(m(r),l(S(g.nav)))}break;case"close_right":if(l(ve(r)),i!==r){const g=R({menus:I,permissions:c,key:r});g!=null&&g.key&&(m(r),l(S(g.nav)))}break}}]}function vs(s){const{isRefresh:n,onClick:a}=s;return e.jsx(Xe,{title:"重新加载",placement:"bottom",children:e.jsx(B,{className:`
          change
          flex
          items-center
          justify-center
          text-lg
          cursor-pointer
          ${n?"animate-spin pointer-events-none":""}
        `,onClick:()=>a(),icon:"ant-design:reload-outlined"})})}function js(){const s=T(),{isMaximize:n}=w(),a=()=>{s(be(!n))};return e.jsx(B,{className:`
        flex
        items-center
        justify-center
        text-lg
        cursor-pointer
      `,icon:n?"ant-design:compress-outlined":"ant-design:expand-outlined",onClick:a})}function ys(s){const{activeKey:n,handleRefresh:a}=s,[u,i]=f.useState(!1),o=v=>{i(v)},c={activeKey:n,onOpenChange:o,handleRefresh:a},[m,l]=oe(c);return e.jsx(V,{trigger:["click"],menu:{items:m(),onClick:v=>l(v.key)},onOpenChange:o,children:e.jsx(B,{className:`
          flex
          items-center
          justify-center
          text-lg
          cursor-pointer
          transition-all
          transform
          ${u?"rotate-180":"rotate-0"}
        `,icon:"ant-design:down-outlined"})})}function bs(){const s=E(),{pathname:n,search:a}=z(),u=n+a,i=T(),{refresh:o}=te.useAliveController(),[c,m]=se.useMessage(),[l,v]=f.useState(null),[x,h]=f.useState(null),r=F(d=>d.tabs.isLock),p=F(d=>d.tabs.activeKey),{tabs:g,permissions:A,isMaximize:M}=w(),k=f.useCallback((d=u)=>{if(A.length>0){if(d==="/")return;const O=R({menus:I,permissions:A,key:d});O!=null&&O.key?(i(K(O.key)),i(S(O.nav)),i($(O))):i(K(d))}},[A]);f.useEffect(()=>{k()},[k]),f.useEffect(()=>()=>{l&&(clearTimeout(l),v(null)),x&&(clearTimeout(x),h(null))},[]),f.useEffect(()=>{if(p!==u){const d=r?p:u;k(d),r&&(s(d),i(Ne(!1)))}},[p,u]);const t=d=>{s(d)},C=d=>{i(ee(d))},j=(d,P)=>{P==="remove"&&C(d)},y=f.useCallback((d=p)=>{typeof d=="string"&&(l||(i(Q(!0)),o(d),v(setTimeout(()=>{c.success({content:"刷新成功",key:"refresh"}),i(Q(!1)),v(null)},100)),h(setTimeout(()=>{h(null)},1e3))))},[p,l]),N=f.useMemo(()=>e.jsx(vs,{isRefresh:!!x,onClick:y}),[x,y]),W=f.useMemo(()=>e.jsx(ys,{activeKey:p,handleRefresh:y}),[p,y]),U=f.useMemo(()=>e.jsx(js,{}),[]),L=[{element:N},{element:W},{element:U}],ae={activeKey:p,handleRefresh:y},[re,ie]=oe(ae),ce=(d,P)=>e.jsx(P,{...d,children:O=>e.jsx(V,{menu:{items:re(O.key),onClick:le=>ie(le.key,O.key)},trigger:["contextMenu"],children:e.jsx("div",{className:"mr-3px",children:O})},O.key)});return e.jsxs("div",{className:`
      flex
      items-center
      justify-between
      mx-2
      transition-all
      ${M?b.conMaximize:""}
    `,children:[m,g.length>0?e.jsx(Be,{hideAdd:!0,className:"w-full h-30px py-0",onChange:t,activeKey:p,type:"editable-card",onEdit:j,items:g,renderTabBar:ce}):e.jsx("span",{}),e.jsx("div",{className:"flex",children:L==null?void 0:L.map((d,P)=>e.jsx("div",{className:`
                ${b.leftDivide}
                change
                divide-solid
                w-36px
                h-36px
                hover:opacity-70
                flex
                place-content-center
                items-center
              `,children:d.element},P))})]})}function Us(){const s=T(),n=E(),[a]=_(),{pathname:u,search:i}=z(),o=u+i,c=a(),m=ke(),[l,v]=f.useState(!0),{permissions:x,userId:h,isMaximize:r,isCollapsed:p,isPhone:g,isRefresh:A}=w(),M=f.useCallback(async()=>{try{v(!0);const{data:t}=await Je({refresh_cache:!1}),{user:C,permissions:j}=t,y=Qe(j);s(Ge(C)),s(Z(y))}catch(t){console.error("获取用户数据失败:",t),Z([])}finally{v(!1)}},[]);f.useEffect(()=>{c||n("/login"),c&&!h&&M()},[M,n,c,h]);const k=Oe(()=>{const t=window.innerWidth<=768;t&&s(H(!0)),s(Ce(t))},{wait:500});return f.useEffect(()=>(window.addEventListener("resize",k.run()),()=>{window.removeEventListener("resize",k.run())}),[]),e.jsxs("div",{id:"layout",children:[e.jsx(ds,{}),e.jsxs("div",{className:b.layout_right,children:[e.jsxs("div",{id:"header",className:`
            border-bottom
            transition-all
            ${b.header}
            ${p?b.headerCloseMenu:""}
            ${r?b.headerNone:""}
            ${g?"!left-0 z-999":""}
          `,children:[e.jsx(gs,{}),e.jsx(bs,{})]}),e.jsxs("div",{id:"layoutContent",className:`
            overflow-auto
            transition-all
            ${b.con}
            ${r?b.conMaximize:""}
            ${p?b.conCloseMenu:""}
            ${g?"!left-0 !w-full":""}
          `,children:[l&&x.length===0&&e.jsx(Ee,{active:!0,className:"p-30px",paragraph:{rows:10}}),!l&&x.length===0&&e.jsx(qe,{}),A&&e.jsx("div",{className:`
              absolute
              left-50%
              top-50%
              -rotate-x-50%
              -rotate-y-50%
            `,children:e.jsx(B,{className:"text-40px animate-spin",icon:"ri:loader-2-fill"})}),x.length>0&&!A&&e.jsx(Ie,{id:o,name:o,children:m})]})]})]})}export{ms as L,Z as a,Us as b,Ds as c,Je as g,Vs as l,Qe as p,Ge as s,Hs as u};
