import{j as e}from"./react.a7da97a2.js";import{I as s}from"./@iconify_react.bcaf6c88.js";import{c as r}from"./@reduxjs_toolkit.fb91ade4.js";import{u as t,a as i}from"./react-redux.5cd65198.js";import"./hoist-non-react-statics.b23c5de2.js";import"./react-is.90ab392a.js";import{u as n}from"./react-i18next.1d91db1a.js";import{T as l}from"./antd.850acb68.js";const u=()=>{const e=t((e=>e.user.permissions)),s=t((e=>e.user.userInfo.id)),r=t((e=>e.user.userInfo.username)),i=t((e=>e.tabs.isMaximize)),n=t((e=>e.tabs.nav));return{isMaximize:i,isCollapsed:t((e=>e.menu.isCollapsed)),isPhone:t((e=>e.menu.isPhone)),isRefresh:t((e=>e.public.isRefresh)),isFullscreen:t((e=>e.public.isFullscreen)),nav:n,permissions:e,userId:s,username:r,openKeys:t((e=>e.menu.openKeys)),selectedKeys:t((e=>e.menu.selectedKeys)),tabs:t((e=>e.tabs.tabs)),theme:t((e=>e.public.theme))}},c=r({name:"public",initialState:{theme:"light",isFullscreen:!1,isRefresh:!1,isRefreshPage:!1},reducers:{setThemeValue:(e,s)=>{e.theme=s.payload},setFullscreen:(e,s)=>{e.isFullscreen=s.payload},setRefresh:(e,s)=>{e.isRefresh=s.payload},setRefreshPage:(e,s)=>{e.isRefreshPage=s.payload}}}),{setThemeValue:o,setFullscreen:a,setRefresh:m,setRefreshPage:d}=c.actions,p=c.reducer;function f(){const{t:r}=n(),[t,c]=function(){const e=i(),{isFullscreen:s}=u();return[s,()=>{var r;return!s&&(null==(r=document.documentElement)?void 0:r.requestFullscreen)?(document.documentElement.requestFullscreen(),e(a(!0)),!0):s&&(null==document?void 0:document.exitFullscreen)?(document.exitFullscreen(),e(a(!1)),!0):void 0}]}();return e.jsx(l,{title:r(t?"public.exitFullscreen":"public.fullScreen"),children:e.jsxs("div",{className:"flex items-center justify-center text-lg mr-3 cursor-pointer",onClick:c,children:[t&&e.jsx(s,{icon:"gridicons-fullscreen-exit"}),!t&&e.jsx(s,{icon:"gridicons-fullscreen"})]})})}export{f as F,m as a,d as b,p,o as s,u};