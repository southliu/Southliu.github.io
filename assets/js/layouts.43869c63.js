import{r as f,j as e}from"./react.76efb1e3.js";import{g as me,b as D,s as de,r as fe,c as H,P as he}from"./components_Business.a1f9c3ad.js";import{a as P,u as q}from"./react-redux.bad75fc1.js";import{c as pe}from"./@reduxjs_toolkit.9c491c0a.js";import{g as xe,s as J,a as ge,f as ve,d as I,b as Q,c as je,t as V,e as R,h as K,i as S,j as $,G as ye,k as be,l as Ne,m as Ce,n as Ae,o as ee,p as ke,q as Oe,r as Me}from"./components_GlobalSearch.5998c80c.js";import{u as w,F as we,a as G}from"./components_Fullscreen.5db0d3c8.js";import{u as Te}from"./ahooks.3df0ac5f.js";import{I as X}from"./@iconify_react.d8386f11.js";import{u as B,a as z,b as Pe}from"./react-router.9cd949e8.js";import"./hoist-non-react-statics.eb1d43c9.js";import"./react-is.4e9f7c39.js";import{l as Ee,F as E,m as se,I as Xe,n as Be,A as Ie,o as U,T as Re,p as Ke,i as Se}from"./antd.469ebff6.js";import{r as te,K as ze}from"./react-activation.7038d76e.js";import{D as Le}from"./components_DataScreen.ca34df80.js";import{G as We}from"./components_Github.5f70b531.js";import{T as De}from"./components_Theme.6d182931.js";import{B as He}from"./components_Modal.5ee02306.js";import{P as Y}from"./components_PasswordStrength.34190b41.js";import{K as Ve,N as Ue,O as Fe,T as qe,B as Je,V as Qe,W as Ge,X as Ye,Y as Z}from"./@ant-design_icons.412fab6d.js";import Ze from"./page_403.tsx_index.456ac03e.js";function ne(){return[()=>me(D)||"",l=>{de(D,l)},()=>{fe(D)}]}function _e(s){return H.get("/authority/user/refresh-permissions",{params:s})}const $e=s=>{const t=[];for(let a=0;a<s.length;a++){const{id:l,operation:r}=s[a];t.push(`/${l}`);for(let o=0;o<r.length;o++)t.push(`/${l}/${r[o]}`)}return t},Js=(s,t)=>!t||t.length===0?!1:t.includes(s),oe=pe({name:"user",initialState:{permissions:[],userInfo:{id:0,username:"",email:"",phone:""}},reducers:{setUserInfo:(s,t)=>{s.userInfo=t.payload},setPermissions:(s,t)=>{s.permissions=t.payload},clearInfo:s=>{s.userInfo={id:0,username:"",email:"",phone:""}}}}),{setUserInfo:es,setPermissions:_,clearInfo:ss}=oe.actions,Qs=oe.reducer,ts="_header_7p2mx_1",ns="_headerCloseMenu_7p2mx_14",os="_headerDriver_7p2mx_17",as="_menu_7p2mx_20",rs="_menuClose_7p2mx_28",is="_con_7p2mx_31",cs="_conCloseMenu_7p2mx_41",ls="_conMaximize_7p2mx_45",us="_headerNone_7p2mx_50",ms="_none_7p2mx_54",ds="_menuNone_7p2mx_57",fs="_conPhone_7p2mx_61",hs="_headerPhone_7p2mx_64",ps="_leftDivide_7p2mx_67",N={header:ts,headerCloseMenu:ns,headerDriver:os,menu:as,menuClose:rs,con:is,conCloseMenu:cs,conMaximize:ls,headerNone:us,none:ms,menuNone:ds,conPhone:fs,headerPhone:hs,leftDivide:ps},xs="/assets/svg/logo.17e50649.svg";function gs(){const s=B(),{pathname:t}=z(),a=P(),[l,r]=f.useState([]),{isMaximize:o,isCollapsed:i,isPhone:m,openKeys:u,selectedKeys:v,permissions:x}=w();f.useEffect(()=>{const n=xe(t);!m&&!i&&(a(J(n)),a(ge(t)))},[t]);const p=f.useCallback(n=>{var C,j,y;for(let b=0;b<n.length;b++)(C=n[b])!=null&&C.icon&&(n[b].icon=e.jsx(X,{icon:n[b].icon})),(y=(j=n[b])==null?void 0:j.children)!=null&&y.length&&p(n[b].children)},[]);f.useEffect(()=>{if(x.length>0){const n=ve(I,x);p(n),r(n||[])}},[p,x]);const c=n=>{s(n);const j=R({menus:l,permissions:x,key:n});j&&(a(K(j.key)),a(S(j.nav)),a($(j)))},h=n=>{c(n.key),m&&O()},g=(n,C)=>{let j=!0;for(let y=0;y<n.length;y++)if(n[y]!==C[y]){j=!1;break}return j},A=n=>{const C=[];let j="";if(n.length>0){j=n[n.length-1];const y=Q(j);C.push(j);for(let b=n.length-2;b>=0;b--){const L=Q(n[b]);g(L,y)&&C.unshift(n[b])}}a(J(C))},M=()=>{const n=je(l,x);c(n),m&&O()},O=()=>{a(V(!0))};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:`
          transition-all
          overflow-auto
          z-2
          ${N.menu}
          ${i?N.menuClose:""}
          ${o||m&&i?N.menuNone:""}
          ${m?"!z-1002":""}
        `,children:[e.jsxs("div",{className:`
            text-white
            flex
            content-center
            px-5
            py-2
            cursor-pointer
            ${i?"justify-center":""}
          `,onClick:M,children:[e.jsx("img",{src:xs,width:30,height:30,className:"object-contain",alt:"logo"}),e.jsx("span",{className:`
            text-white
            ml-3
            text-xl
            font-bold
            truncate
            ${i?"hidden":""}
          `,children:"后台管理系统"})]}),e.jsx(Ee,{className:"z-1000",selectedKeys:[v],openKeys:u,mode:"inline",theme:"dark",inlineCollapsed:i,items:l,onClick:h,onOpenChange:A})]}),m&&!i&&e.jsx("div",{className:`
            ${N.cover}
            fixed
            w-full
            h-full
            bg-gray-500
            bg-opacity-10
            z-1001
          `,onClick:O})]})}const vs="data:image/png;base64,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";function Gs(s){return H.post("/login",s)}function js(s){return H.post("/update-password",s)}function ys(s){const{passwordRef:t}=s,[a]=E.useForm(),[l,r]=se.useMessage(),[o,i]=f.useState(!1),[m,u]=f.useState(!1);f.useImperativeHandle(t,()=>({open:()=>{i(!0)}}));const v=()=>{a.submit()},x=async p=>{if(p.password!==p.confirmPassword)return l.warning({content:"密码和确认密码不相同!",key:"confirmPassword"});try{u(!0);const{code:c,message:h}=await js(p);Number(c)===200&&(i(!1),l.success(h))}finally{u(!1)}};return e.jsxs(e.Fragment,{children:[r,e.jsx(He,{title:"修改密码",open:o,confirmLoading:m,onOk:v,onCancel:()=>i(!1),children:e.jsxs(E,{name:"UpdatePassword",form:a,labelCol:{span:5},wrapperCol:{span:16},onFinish:x,autoComplete:"off",children:[e.jsx(E.Item,{label:"用户名",name:"username",rules:[{required:!0,message:"请输入用户名!"}],children:e.jsx(Xe,{placeholder:he})}),e.jsx(E.Item,{label:"密码",name:"password",rules:[{required:!0,message:"请输入密码!"}],children:e.jsx(Y,{})}),e.jsx(E.Item,{label:"确认密码",name:"confirmPassword",rules:[{required:!0,message:"请输入确认密码!"}],children:e.jsx(Y,{})})]})})]})}function bs(s){const{className:t,list:a}=s,{isPhone:l}=w(),r=o=>{const i=[];if(!(o!=null&&o.length))return[];for(let m=0;m<(o==null?void 0:o.length);m++){const u=o==null?void 0:o[m];i.push({title:u})}return i};return e.jsx(e.Fragment,{children:!l&&e.jsx("div",{className:`${t} flex items-center`,children:e.jsx(Be,{items:r(a)})})})}function Ns(){const s=P(),t=B(),[,,a]=ne(),{clear:l}=te.useAliveController(),{modal:r}=Ie.useApp(),{isCollapsed:o,isMaximize:i,username:m,nav:u}=w(),v=f.useRef(null),x=[{key:"password",label:e.jsx("span",{children:"修改密码"}),icon:e.jsx(Fe,{className:"mr-1"})},{key:"logout",label:e.jsx("span",{children:"退出登录"}),icon:e.jsx(qe,{className:"mr-1"})}],p=A=>{var M;switch(A.key){case"password":(M=v.current)==null||M.open();break;case"logout":c();break}},c=()=>{r.confirm({title:"温馨提示",icon:e.jsx(Je,{}),content:"是否确定退出系统?",onOk(){s(ss()),s(be()),s(K("")),a(),l(),t("/login")}})},h=()=>e.jsxs("div",{className:"flex items-center",children:[e.jsx(We,{}),e.jsx(Le,{}),e.jsx(ye,{}),e.jsx(we,{}),e.jsx(De,{}),e.jsx(U,{className:"min-w-50px",menu:{items:x,onClick:p},children:e.jsxs("div",{className:"ant-dropdown-link flex items-center cursor-pointer",onClick:A=>A.preventDefault(),children:[e.jsx("img",{src:vs,width:27,height:27,alt:"头像",className:"rounded-1/2 overflow-hidden object-cover bg-light-500"}),e.jsx("span",{className:"ml-2 text-15px min-w-50px truncate",children:m||"south-admin"})]})})]}),g=()=>e.jsxs("div",{className:"text-lg cursor-pointer",onClick:()=>s(V(!o)),children:[o&&e.jsx(Ve,{}),!o&&e.jsx(Ue,{})]});return e.jsxs(e.Fragment,{children:[e.jsxs("header",{className:`
          border-bottom
          flex
          items-center
          justify-between
          px-6
          py-6px
          box-border
          transition-all
          ${N.headerDriver}
          ${i?N.none:""}
        `,children:[e.jsxs("div",{className:"flex item-center",children:[e.jsx(g,{}),e.jsx(bs,{className:"ml-15px",list:u})]}),e.jsx(h,{})]}),e.jsx(ys,{passwordRef:v})]})}function ae(s){const{activeKey:t,onOpenChange:a,handleRefresh:l}=s,{pathname:r}=z(),{tabs:o,permissions:i}=w(),m=B(),u=P();return[(p=t)=>{const c=o.findIndex(h=>h.key===p);return[{key:"refresh",label:"重新加载",disabled:p!==r,icon:e.jsx(Qe,{className:"mr-5px transform rotate-270"})},{key:"close_current",label:"关闭标签",disabled:o.length<=1,icon:e.jsx(Ge,{className:"mr-5px"})},{key:"close_other",label:"关闭其他",disabled:o.length<=1,icon:e.jsx(Ye,{className:"mr-5px transform rotate-90"})},{key:"close_left",label:"关闭左侧",disabled:c===0,icon:e.jsx(Z,{className:"mr-5px transform rotate-270"})},{key:"close_right",label:"关闭右侧",disabled:c===o.length-1,icon:e.jsx(Z,{className:"mr-5px transform rotate-90"})}]},(p,c=t)=>{switch(a==null||a(!1),p){case"refresh":l(c);break;case"close_current":u(ee(c));break;case"close_other":u(Ae(c));break;case"close_left":if(u(Ce(c)),r!==c){const g=R({menus:I,permissions:i,key:c});g!=null&&g.key&&(m(c),u(S(g.nav)))}break;case"close_right":if(u(Ne(c)),r!==c){const g=R({menus:I,permissions:i,key:c});g!=null&&g.key&&(m(c),u(S(g.nav)))}break}}]}function Cs(s){const{isRefresh:t,onClick:a}=s;return e.jsx(Re,{title:"重新加载",placement:"bottom",children:e.jsx(X,{className:`
          change
          flex
          items-center
          justify-center
          text-lg
          cursor-pointer
          ${t?"animate-spin pointer-events-none":""}
        `,onClick:()=>a(),icon:"ant-design:reload-outlined"})})}function As(){const s=P(),{isMaximize:t}=w(),a=()=>{s(ke(!t))};return e.jsx(X,{className:`
        flex
        items-center
        justify-center
        text-lg
        cursor-pointer
      `,icon:t?"ant-design:compress-outlined":"ant-design:expand-outlined",onClick:a})}function ks(s){const{activeKey:t,handleRefresh:a}=s,[l,r]=f.useState(!1),o=v=>{r(v)},i={activeKey:t,onOpenChange:o,handleRefresh:a},[m,u]=ae(i);return e.jsx(U,{trigger:["click"],menu:{items:m(),onClick:v=>u(v.key)},onOpenChange:o,children:e.jsx(X,{className:`
          flex
          items-center
          justify-center
          text-lg
          cursor-pointer
          transition-all
          transform
          ${l?"rotate-180":"rotate-0"}
        `,icon:"ant-design:down-outlined"})})}function Os(){const s=B(),{pathname:t,search:a}=z(),l=t+a,r=P(),{refresh:o}=te.useAliveController(),[i,m]=se.useMessage(),[u,v]=f.useState(null),[x,p]=f.useState(null),c=q(d=>d.tabs.isLock),h=q(d=>d.tabs.activeKey),{tabs:g,permissions:A,isMaximize:M}=w(),O=f.useCallback((d=l)=>{if(A.length>0){if(d==="/")return;const k=R({menus:I,permissions:A,key:d});k!=null&&k.key?(r(K(k.key)),r(S(k.nav)),r($(k))):r(K(d))}},[A]);f.useEffect(()=>{O()},[O]),f.useEffect(()=>()=>{u&&(clearTimeout(u),v(null)),x&&(clearTimeout(x),p(null))},[]),f.useEffect(()=>{if(h!==l){const d=c?h:l;O(d),c&&(s(d),r(Oe(!1)))}},[h,l]);const n=d=>{s(d)},C=d=>{r(ee(d))},j=(d,T)=>{T==="remove"&&C(d)},y=f.useCallback((d=h)=>{typeof d=="string"&&(u||(r(G(!0)),o(d),v(setTimeout(()=>{i.success({content:"刷新成功",key:"refresh"}),r(G(!1)),v(null)},100)),p(setTimeout(()=>{p(null)},1e3))))},[h,u]),b=f.useMemo(()=>e.jsx(Cs,{isRefresh:!!x,onClick:y}),[x,y]),L=f.useMemo(()=>e.jsx(ks,{activeKey:h,handleRefresh:y}),[h,y]),F=f.useMemo(()=>e.jsx(As,{}),[]),W=[{element:b},{element:L},{element:F}],re={activeKey:h,handleRefresh:y},[ie,ce]=ae(re),le=(d,T)=>e.jsx(T,{...d,children:k=>e.jsx(U,{menu:{items:ie(k.key),onClick:ue=>ce(ue.key,k.key)},trigger:["contextMenu"],children:e.jsx("div",{className:"mr-3px",children:k})},k.key)});return e.jsxs("div",{className:`
      flex
      items-center
      justify-between
      mx-2
      transition-all
      ${M?N.conMaximize:""}
    `,children:[m,g.length>0?e.jsx(Ke,{hideAdd:!0,className:"w-full h-30px py-0",onChange:n,activeKey:h,type:"editable-card",onEdit:j,items:g,renderTabBar:le}):e.jsx("span",{}),e.jsx("div",{className:"flex",children:W==null?void 0:W.map((d,T)=>e.jsx("div",{className:`
                ${N.leftDivide}
                change
                divide-solid
                w-36px
                h-36px
                hover:opacity-70
                flex
                place-content-center
                items-center
              `,children:d.element},T))})]})}function Ys(){const s=P(),t=B(),[a]=ne(),{pathname:l,search:r}=z(),o=l+r,i=a(),m=Pe(),[u,v]=f.useState(!0),{permissions:x,userId:p,isMaximize:c,isCollapsed:h,isPhone:g,isRefresh:A}=w(),M=f.useCallback(async()=>{try{v(!0);const{code:n,data:C}=await _e({refresh_cache:!1});if(Number(n)!==200)return;const{user:j,permissions:y}=C,b=$e(y);s(es(j)),s(_(b))}catch{_([])}finally{v(!1)}},[]);f.useEffect(()=>{i||t("/login"),i&&!p&&M()},[M,t,i,p]);const O=Te(()=>{const n=window.innerWidth<=768;n&&s(V(!0)),s(Me(n))},{wait:500});return f.useEffect(()=>(window.addEventListener("resize",O.run()),()=>{window.removeEventListener("resize",O.run())}),[]),e.jsxs("div",{id:"layout",children:[e.jsx(gs,{}),e.jsxs("div",{className:N.layout_right,children:[e.jsxs("div",{id:"header",className:`
            border-bottom
            transition-all
            ${N.header}
            ${h?N.headerCloseMenu:""}
            ${c?N.headerNone:""}
            ${g?"!left-0 z-999":""}
          `,children:[e.jsx(Ns,{}),e.jsx(Os,{})]}),e.jsxs("div",{id:"layoutContent",className:`
            overflow-auto
            transition-all
            ${N.con}
            ${c?N.conMaximize:""}
            ${h?N.conCloseMenu:""}
            ${g?"!left-0 !w-full":""}
          `,children:[u&&x.length===0&&e.jsx(Se,{active:!0,className:"p-30px",paragraph:{rows:10}}),!u&&x.length===0&&e.jsx(Ze,{}),A&&e.jsx("div",{className:`
              absolute
              left-50%
              top-50%
              -rotate-x-50%
              -rotate-y-50%
            `,children:e.jsx(X,{className:"text-40px animate-spin",icon:"ri:loader-2-fill"})}),x.length>0&&!A&&e.jsx(ze,{id:o,name:o,children:m})]})]})]})}export{xs as L,_ as a,Ys as b,Js as c,Qs as d,_e as g,Gs as l,$e as p,es as s,ne as u};
