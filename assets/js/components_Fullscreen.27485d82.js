import{j as t,a as u}from"./components_Bottom.7f50d752.js";import{a8 as i,a7 as r}from"./inheritsLoose.4207bb94.js";import{u as a,a as o}from"./react-redux.c8a1c50f.js";import{T as f}from"./antd.b3f2ce6f.js";const n=i({name:"public",initialState:{theme:"light",isFullscreen:!1,isRefresh:!1,isRefreshPage:!1},reducers:{setThemeValue:(e,s)=>{e.theme=s.payload},setFullscreen:(e,s)=>{e.isFullscreen=s.payload},setRefresh:(e,s)=>{e.isRefresh=s.payload},setRefreshPage:(e,s)=>{e.isRefreshPage=s.payload}}}),{setThemeValue:R,setFullscreen:c,setRefresh:x,setRefreshPage:b}=n.actions,y=n.reducer;function m(){const e=a(),s=o(l=>l.public.isFullscreen);return[s,()=>{var l;if(!s&&((l=document.documentElement)!=null&&l.requestFullscreen))return document.documentElement.requestFullscreen(),e(c(!0)),!0;if(s&&(document!=null&&document.exitFullscreen))return document.exitFullscreen(),e(c(!1)),!0}]}function j(){const[e,s]=m();return t(f,{title:e?"退出全屏":"全屏",children:u("div",{className:"flex items-center justify-center text-lg mr-3 cursor-pointer",onClick:s,children:[e&&t(r,{icon:"gridicons-fullscreen-exit"}),!e&&t(r,{icon:"gridicons-fullscreen"})]})})}export{j as F,x as a,b,y as p,R as s};
