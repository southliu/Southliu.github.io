import{j as r,a as k}from"./components_Bottom.d993aacd.js";import{s as n}from"./components_Fullscreen.36ceb087.js";import{I as l}from"./@iconify_react.5fde6161.js";import{r as h}from"./react.017637b6.js";import{T as a}from"./components_Business.51671154.js";import{u as x}from"./react-redux.883a54e9.js";import{T}from"./antd.117302a7.js";import{r as b}from"./react-activation.293aa711.js";function y(){const{clear:d,refresh:f,getCachingNodes:g}=b.exports.useAliveController(),s=x(),t=localStorage.getItem(a)||"light",[i,p]=h.exports.useState(t);h.exports.useEffect(()=>{t||localStorage.setItem(a,"light"),t==="dark"&&(document.body.className="theme-dark"),s(n(t==="dark"?"dark":"light"))},[t]);const u=()=>{const e=g();for(let o=0;o<(e==null?void 0:e.length);o++){const{name:m}=e[o];m&&f(m)}},c=e=>{switch(localStorage.setItem(a,e),s(n(e)),p(e),d(),u(),e){case"dark":document.body.className="theme-dark";break;default:document.body.className="theme-primary";break}};return r(T,{title:"主题模式",children:k("div",{className:"flex items-center justify-center text-lg mr-4 cursor-pointer",children:[i==="light"&&r(l,{icon:"mdi-white-balance-sunny",onClick:()=>c("dark")}),i!=="light"&&r(l,{icon:"mdi-moon-waning-crescent",onClick:()=>c("light")})]})})}export{y as T};
