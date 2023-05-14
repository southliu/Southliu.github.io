import{r as m,j as e}from"./react.981c89a4.js";import{r as L,P as ue,u as _}from"./components_Business.0c4299c0.js";import{a as T,u as F}from"./react-redux.013ca0b6.js";import{c as de}from"./@reduxjs_toolkit.a647311b.js";import{g as me,s as q,a as fe,f as he,d as R,b as J,c as pe,t as H,e as K,h as S,i as z,j as $,G as xe,k as ge,l as ve,m as je,n as be,o as ee,p as ye,q as Ne,r as Ce}from"./components_GlobalSearch.2deb09dd.js";import{u as w,F as Ae,a as Q}from"./components_Fullscreen.5c803250.js";import{u as ke}from"./ahooks.ef7fba82.js";import{I as E}from"./@iconify_react.d009e835.js";import{u as I,a as W,b as Oe}from"./react-router.c2da9238.js";import{k as we,F as B,I as Me,m as D,l as se,n as V,M as Pe,T as te,o as Te,h as Xe}from"./antd.c52db168.js";import{r as ne,K as Be}from"./react-activation.fd665b9e.js";import{D as Ee}from"./components_DataScreen.0250640c.js";import{T as Ie}from"./components_Theme.c4c12a87.js";import{B as Re}from"./components_Modal.3a148aea.js";import{P as G}from"./components_PasswordStrength.3cb8ea79.js";import{K as Ke,N as Se,O as ze,T as We,B as De,V as Le,W as He,X as Ve,Y}from"./@ant-design_icons.ba8f7b85.js";import{F as Ue}from"./page_403.tsx_index.efa8efac.js";function zs(s){return L.post("/login",s)}function Fe(s){return L.post("/update-password",s)}const qe=s=>{const n=[];for(let o=0;o<s.length;o++){const{id:c,operation:a}=s[o];n.push(`/${c}`);for(let f=0;f<a.length;f++)n.push(`/${c}/${a[f]}`)}return n},Ws=(s,n)=>!n||n.length===0?!1:n.includes(s),oe=de({name:"user",initialState:{permissions:[],userInfo:{id:0,username:"",email:"",phone:""}},reducers:{setUserInfo:(s,n)=>{s.userInfo=n.payload},setPermissions:(s,n)=>{s.permissions=n.payload},clearInfo:s=>{s.userInfo={id:0,username:"",email:"",phone:""}}}}),{setUserInfo:Je,setPermissions:Z,clearInfo:Qe}=oe.actions,Ds=oe.reducer;function Ge(s){return L.get("/authority/user/refresh-permissions",{params:s})}const Ye="/assets/svg/logo.17e50649.svg",Ze="_header_17bj0_1",_e="_headerCloseMenu_17bj0_14",$e="_headerDriver_17bj0_17",es="_menu_17bj0_20",ss="_menuClose_17bj0_28",ts="_con_17bj0_31",ns="_conCloseMenu_17bj0_39",os="_conMaximize_17bj0_43",as="_headerNone_17bj0_47",rs="_none_17bj0_51",is="_menuNone_17bj0_54",cs="_conPhone_17bj0_58",ls="_headerPhone_17bj0_61",us="_leftDivide_17bj0_64",b={header:Ze,headerCloseMenu:_e,headerDriver:$e,menu:es,menuClose:ss,con:ts,conCloseMenu:ns,conMaximize:os,headerNone:as,none:rs,menuNone:is,conPhone:cs,headerPhone:ls,leftDivide:us};function ds(){const s=I(),{pathname:n}=W(),o=T(),[c,a]=m.useState([]),{isMaximize:f,isCollapsed:r,isPhone:h,openKeys:l,selectedKeys:x,permissions:g}=w();m.useEffect(()=>{const t=me(n);!h&&!r&&(o(q(t)),o(fe(n)))},[n]);const u=m.useCallback(t=>{var j,v,C;for(let N=0;N<t.length;N++)(j=t[N])!=null&&j.icon&&(t[N].icon=e.jsx(E,{icon:t[N].icon})),(C=(v=t[N])==null?void 0:v.children)!=null&&C.length&&u(t[N].children)},[]);m.useEffect(()=>{if(g.length>0){const t=he(R,g);u(t),a(t||[])}},[u,g]);const i=t=>{s(t);const v=K({menus:c,permissions:g,key:t});v&&(o(S(v.key)),o(z(v.nav)),o($(v)))},y=t=>{i(t.key),h&&O()},p=(t,j)=>{let v=!0;for(let C=0;C<t.length;C++)if(t[C]!==j[C]){v=!1;break}return v},A=t=>{const j=[];let v="";if(t.length>0){v=t[t.length-1];const C=J(v);j.push(v);for(let N=t.length-2;N>=0;N--){const X=J(t[N]);p(X,C)&&j.unshift(t[N])}}o(q(j))},M=()=>{const t=pe(c,g);i(t),h&&O()},O=()=>{o(H(!0))};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:`
          transition-all
          overflow-auto
          z-2
          ${b.menu}
          ${r?b.menuClose:""}
          ${f||h&&r?b.menuNone:""}
          ${h?"!z-1002":""}
        `,children:[e.jsxs("div",{className:`
            text-white
            flex
            content-center
            px-5
            py-2
            cursor-pointer
            ${r?"justify-center":""}
          `,onClick:M,children:[e.jsx("img",{src:Ye,width:30,height:30,className:"object-contain",alt:"logo"}),e.jsx("span",{className:`
            text-white
            ml-3
            text-xl
            font-bold
            truncate
            ${r?"hidden":""}
          `,children:"后台管理系统"})]}),e.jsx(we,{className:"z-1000",selectedKeys:[x],openKeys:l,mode:"inline",theme:"dark",inlineCollapsed:r,items:c,onClick:y,onOpenChange:A})]}),h&&!r&&e.jsx("div",{className:`
            ${b.cover}
            fixed
            w-full
            h-full
            bg-gray-500
            bg-opacity-10
            z-1001
          `,onClick:O})]})}const ms="data:image/png;base64,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";function fs(s){const{passwordRef:n}=s,[o]=B.useForm(),[c,a]=m.useState(!1),[f,r]=m.useState(!1);m.useImperativeHandle(n,()=>({open:()=>{a(!0)}}));const h=()=>{o.submit()},l=async x=>{if(x.password!==x.confirmPassword)return D.warning({content:"密码和确认密码不相同!",key:"confirmPassword"});try{r(!0);const{data:g}=await Fe(x);g.code===200&&(a(!1),D.success(g.message))}finally{r(!1)}};return e.jsx(Re,{title:"修改密码",open:c,confirmLoading:f,onOk:h,onCancel:()=>a(!1),children:e.jsxs(B,{name:"UpdatePassword",form:o,labelCol:{span:5},wrapperCol:{span:16},onFinish:l,autoComplete:"off",children:[e.jsx(B.Item,{label:"用户名",name:"username",rules:[{required:!0,message:"请输入用户名!"}],children:e.jsx(Me,{placeholder:ue})}),e.jsx(B.Item,{label:"密码",name:"password",rules:[{required:!0,message:"请输入密码!"}],children:e.jsx(G,{})}),e.jsx(B.Item,{label:"确认密码",name:"confirmPassword",rules:[{required:!0,message:"请输入确认密码!"}],children:e.jsx(G,{})})]})})}const{Item:hs}=se;function ps(s){const{className:n,list:o}=s,{isPhone:c}=w();return e.jsx(e.Fragment,{children:!c&&e.jsx("div",{className:`${n} flex items-center`,children:e.jsx(se,{children:o==null?void 0:o.map(a=>e.jsx(hs,{className:"whitespace-nowrap",children:a},a))})})})}function xs(){const s=T(),n=I(),[,,o]=_(),{clear:c}=ne.useAliveController(),{isCollapsed:a,isMaximize:f,username:r,nav:h}=w(),l=m.useRef(null),x=[{key:"password",label:e.jsx("span",{children:"修改密码"}),icon:e.jsx(ze,{className:"mr-1"})},{key:"logout",label:e.jsx("span",{children:"退出登录"}),icon:e.jsx(We,{className:"mr-1"})}],g=p=>{var A;switch(p.key){case"password":(A=l.current)==null||A.open();break;case"logout":u();break}},u=()=>{Pe.confirm({title:"温馨提示",icon:e.jsx(De,{}),content:"是否确定退出系统?",onOk(){s(Qe()),s(ge()),s(S("")),o(),c(),n("/login")}})},i=()=>e.jsxs("div",{className:"flex items-center",children:[e.jsx(Ee,{}),e.jsx(xe,{}),e.jsx(Ae,{}),e.jsx(Ie,{}),e.jsx(V,{className:"min-w-50px",menu:{items:x,onClick:g},children:e.jsxs("div",{className:"ant-dropdown-link flex items-center cursor-pointer",onClick:p=>p.preventDefault(),children:[e.jsx("img",{src:ms,width:27,height:27,alt:"头像",className:"rounded-1/2 overflow-hidden object-cover bg-light-500"}),e.jsx("span",{className:"ml-2 text-15px min-w-50px truncate",children:r||"south-admin"})]})})]}),y=()=>e.jsxs("div",{className:"text-lg cursor-pointer",onClick:()=>s(H(!a)),children:[a&&e.jsx(Ke,{}),!a&&e.jsx(Se,{})]});return e.jsxs(e.Fragment,{children:[e.jsxs("header",{className:`
          border-bottom
          flex
          items-center
          justify-between
          px-6
          py-6px
          box-border
          transition-all
          ${b.headerDriver}
          ${f?b.none:""}
        `,children:[e.jsxs("div",{className:"flex item-center",children:[e.jsx(y,{}),e.jsx(ps,{className:"ml-15px",list:h})]}),e.jsx(i,{})]}),e.jsx(fs,{passwordRef:l})]})}function ae(s){const{activeKey:n,onOpenChange:o,handleRefresh:c}=s,{pathname:a}=W(),{tabs:f,permissions:r}=w(),h=I(),l=T();return[(u=n)=>{const i=f.findIndex(y=>y.key===u);return[{key:"refresh",label:"重新加载",disabled:u!==a,icon:e.jsx(Le,{className:"mr-5px transform rotate-270"})},{key:"close_current",label:"关闭标签",disabled:f.length<=1,icon:e.jsx(He,{className:"mr-5px"})},{key:"close_other",label:"关闭其他",disabled:f.length<=1,icon:e.jsx(Ve,{className:"mr-5px transform rotate-90"})},{key:"close_left",label:"关闭左侧",disabled:i===0,icon:e.jsx(Y,{className:"mr-5px transform rotate-270"})},{key:"close_right",label:"关闭右侧",disabled:i===f.length-1,icon:e.jsx(Y,{className:"mr-5px transform rotate-90"})}]},(u,i=n)=>{switch(o==null||o(!1),u){case"refresh":c(i);break;case"close_current":l(ee(i));break;case"close_other":l(be(i));break;case"close_left":if(l(je(i)),a!==i){const p=K({menus:R,permissions:r,key:i});p!=null&&p.key&&(h(i),l(z(p.nav)))}break;case"close_right":if(l(ve(i)),a!==i){const p=K({menus:R,permissions:r,key:i});p!=null&&p.key&&(h(i),l(z(p.nav)))}break}}]}function gs(s){const{isRefresh:n,onClick:o}=s;return e.jsx(te,{title:"重新加载",placement:"bottom",children:e.jsx(E,{className:`
          change
          flex
          items-center
          justify-center
          text-lg
          cursor-pointer
          ${n?"animate-spin pointer-events-none":""}
        `,onClick:()=>o(),icon:"ant-design:reload-outlined"})})}function vs(){const s=T(),{isMaximize:n}=w(),o=()=>{s(ye(!n))};return e.jsx(te,{title:n?"最小化":"最大化",placement:"bottom",children:e.jsx(E,{className:`
          flex
          items-center
          justify-center
          text-lg
          cursor-pointer
        `,icon:n?"ant-design:compress-outlined":"ant-design:expand-outlined",onClick:o})})}function js(s){const{activeKey:n,handleRefresh:o}=s,[c,a]=m.useState(!1),f=x=>{a(x)},r={activeKey:n,onOpenChange:f,handleRefresh:o},[h,l]=ae(r);return e.jsx(V,{trigger:["click"],menu:{items:h(),onClick:x=>l(x.key)},onOpenChange:f,children:e.jsx(E,{className:`
          flex
          items-center
          justify-center
          text-lg
          cursor-pointer
          transition-all
          transform
          ${c?"rotate-180":"rotate-0"}
        `,icon:"ant-design:down-outlined"})})}function bs(){const s=I(),{pathname:n,search:o}=W(),c=n+o,a=T(),{refresh:f}=ne.useAliveController(),[r,h]=m.useState(null),[l,x]=m.useState(null),g=F(d=>d.tabs.isLock),u=F(d=>d.tabs.activeKey),{tabs:i,permissions:y,isMaximize:p}=w(),A=m.useCallback((d=c)=>{if(y.length>0){if(d==="/")return;const k=K({menus:R,permissions:y,key:d});k!=null&&k.key?(a(S(k.key)),a(z(k.nav)),a($(k))):a(S(d))}},[y]);m.useEffect(()=>{A()},[A]),m.useEffect(()=>()=>{r&&(clearTimeout(r),h(null)),l&&(clearTimeout(l),x(null))},[]),m.useEffect(()=>{if(u!==c){const d=g?u:c;A(d),g&&(s(d),a(Ne(!1)))}},[u,c]);const M=d=>{s(d)},O=d=>{a(ee(d))},t=(d,P)=>{P==="remove"&&O(d)},j=m.useCallback((d=u)=>{typeof d=="string"&&(r||(a(Q(!0)),f(d),h(setTimeout(()=>{D.success({content:"刷新成功",key:"refresh"}),a(Q(!1)),h(null)},100)),x(setTimeout(()=>{x(null)},1e3))))},[u,r]),v=m.useMemo(()=>e.jsx(gs,{isRefresh:!!l,onClick:j}),[l,j]),C=m.useMemo(()=>e.jsx(js,{activeKey:u,handleRefresh:j}),[u,j]),N=m.useMemo(()=>e.jsx(vs,{}),[]),X=[{element:v},{element:C},{element:N}],U={activeKey:u,handleRefresh:j},[re,ie]=ae(U),ce=(d,P)=>e.jsx(P,{...d,children:k=>e.jsx(V,{menu:{items:re(k.key),onClick:le=>ie(le.key,k.key)},trigger:["contextMenu"],children:e.jsx("div",{className:"mr-3px",children:k})},k.key)});return e.jsxs("div",{className:`
      flex
      items-center
      justify-between
      mx-2
      transition-all
      ${p?b.conMaximize:""}
    `,children:[i.length>0?e.jsx(Te,{hideAdd:!0,className:"w-full h-30px py-0",onChange:M,activeKey:u,type:"editable-card",onEdit:t,items:i,renderTabBar:ce}):e.jsx("span",{}),e.jsx("div",{className:"flex",children:X==null?void 0:X.map((d,P)=>e.jsx("div",{className:`
                ${b.leftDivide}
                change
                divide-solid
                w-36px
                h-36px
                hover:opacity-70
                flex
                place-content-center
                items-center
              `,children:d.element},P))})]})}function Ls(){const s=T(),n=I(),[o]=_(),{pathname:c,search:a}=W(),f=c+a,r=o(),h=Oe(),[l,x]=m.useState(!0),{permissions:g,userId:u,isMaximize:i,isCollapsed:y,isPhone:p,isRefresh:A}=w(),M=m.useCallback(async()=>{try{x(!0);const{data:t}=await Ge({refresh_cache:!1});if(t){const{data:{user:j,permissions:v}}=t,C=qe(v);s(Je(j)),s(Z(C))}}catch(t){console.error("获取用户数据失败:",t),Z([])}finally{x(!1)}},[]);m.useEffect(()=>{r||n("/login"),r&&!u&&M()},[M,n,r,u]);const O=ke(()=>{const t=window.innerWidth<=768;t&&s(H(!0)),s(Ce(t))},{wait:500});return m.useEffect(()=>(window.addEventListener("resize",O.run()),()=>{window.removeEventListener("resize",O.run())}),[]),e.jsxs("div",{id:"layout",children:[e.jsx(ds,{}),e.jsxs("div",{className:b.layout_right,children:[e.jsxs("div",{id:"header",className:`
            border-bottom
            transition-all
            ${b.header}
            ${y?b.headerCloseMenu:""}
            ${i?b.headerNone:""}
            ${p?"!left-0 z-999":""}
          `,children:[e.jsx(xs,{}),e.jsx(bs,{})]}),e.jsxs("div",{id:"layoutContent",className:`
            overflow-auto
            transition-all
            ${b.con}
            ${i?b.conMaximize:""}
            ${y?b.conCloseMenu:""}
            ${p?"!left-0 !w-full":""}
          `,children:[l&&g.length===0&&e.jsx(Xe,{active:!0,className:"p-30px",paragraph:{rows:10}}),!l&&g.length===0&&e.jsx(Ue,{}),A&&e.jsx("div",{className:`
              absolute
              left-50%
              top-50%
              -rotate-x-50%
              -rotate-y-50%
            `,children:e.jsx(E,{className:"text-40px animate-spin",icon:"ri:loader-2-fill"})}),g.length>0&&!A&&e.jsx(Be,{id:f,name:f,children:h})]})]})]})}export{Ye as L,Z as a,Ls as b,Ws as c,Ge as g,zs as l,qe as p,Je as s,Ds as u};
