var e=Object.defineProperty,t=(t,r,n)=>(((t,r,n)=>{r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[r]=n})(t,"symbol"!=typeof r?r+"":r,n),n);import{a as r}from"./components_Form.857a2a0b.js";import{j as n}from"./react.a7da97a2.js";import{m as s,A as o}from"./antd.850acb68.js";import{a,U as i}from"./crypto-js.07c9f78c.js";import{a as l}from"./axios.743c2fba.js";import{A as c,a as u}from"./components_Selects.b161c5c6.js";const p=e=>e("public.currentName"),m="admin_token",d="lang",h="-",f="__Vite_Admin_Secret__",b="theme_key",g="responsive",v=e=>[{required:!0,message:e("public.inputPleaseEnter")}],j=e=>[{required:!0,message:e("public.inputPleaseSelect")}],y="https://mock.mengxuegu.com/mock/63f830b1c5a76a117cab185e/v1/authority/file/upload-file",C=(e,t)=>e("public.createTitle",{title:t??""}),S=(e,t,r)=>`${e("public.editTitle",{title:r??""})}${t?`(${t})`:""}`,A=e=>({pattern:/^(?=.*\d)(?=.*[a-zA-Z])[\da-zA-Z~!@#$%^&*+\.\_\-*]{6,30}$/,message:e("login.passwordRuleMessage")});function I(e,t,r=172800){const n=function(e,t=f){const r=JSON.stringify(e);return a.encrypt(r,t).toString()}({value:t,expire:null!==r?(new Date).getTime()+1e3*r:null});localStorage.setItem(e,n)}function M(e){const t=localStorage.getItem(e);if(t){let r=null;try{r=function(e,t=f){const r=a.decrypt(e,t).toString(i);return r?JSON.parse(r):null}(t)}catch{s.error({content:"数据解密失败",key:"decryption"})}if(r){const{value:e,expire:t}=r;if(null===t||t>=Date.now())return e}return q(e),null}return null}function q(e){localStorage.removeItem(e)}let _=s;function w(){const e=o.useApp();return _=e.message,e.notification,e.modal,null}class x{constructor(e){var r,n,s,o;t(this,"instance"),t(this,"interceptorsObj"),t(this,"abortControllerMap"),this.instance=l.create(e),this.abortControllerMap=new Map,this.interceptorsObj=e.interceptors,this.instance.interceptors.request.use((e=>{const t=new AbortController,r=e.url||"";return e.signal=t.signal,this.abortControllerMap.get(r)?this.cancelRequest(r):this.abortControllerMap.set(r,t),e}),(e=>e)),this.instance.interceptors.request.use(null==(r=this.interceptorsObj)?void 0:r.requestInterceptors,null==(n=this.interceptorsObj)?void 0:n.requestInterceptorsCatch),this.instance.interceptors.response.use(null==(s=this.interceptorsObj)?void 0:s.responseInterceptors,null==(o=this.interceptorsObj)?void 0:o.responseInterceptorsCatch),this.instance.interceptors.response.use((e=>{const t=e.config.url||"";return this.abortControllerMap.delete(t),e.data}),(e=>e))}cancelAllRequest(){for(const[,e]of this.abortControllerMap)e.abort();this.abortControllerMap.clear()}cancelRequest(e){var t;const r=Array.isArray(e)?e:[e];for(const n of r)null==(t=this.abortControllerMap.get(n))||t.abort(),this.abortControllerMap.delete(n)}get(e,t={}){return this.instance.get(e,t)}post(e,t={},r){return this.instance.post(e,t,r)}put(e,t={},r){return this.instance.put(e,t,r)}delete(e,t={}){return this.instance.delete(e,t)}}const O=new x({baseURL:"https://mock.mengxuegu.com/mock/63f830b1c5a76a117cab185e/v1",timeout:18e4,interceptors:{requestInterceptors(e){const t=M(m)||"";return(null==e?void 0:e.headers)&&t&&(e.headers.Authorization=`Bearer ${t}`),e},requestInterceptorsCatch:e=>(_.error("请求超时！"),e),responseInterceptors(e){const{data:t}=e;return 401===(null==t?void 0:t.code)?(_.error("权限不足，请重新登录！"),q(m),setTimeout((()=>{window.location.href="/"}),1e3),k(null==t?void 0:t.message),e):200!==(null==t?void 0:t.code)?(k(null==t?void 0:t.message),e):e},responseInterceptorsCatch:e=>l.isCancel(e)?(e.data=e.data||{},e):(k("服务器错误！"),e)}});const k=(e,t)=>{_.error({content:t||e||"服务器错误",key:"error"})};function $(e){return O.get("/authority/common/games",{params:e})}function N(e){return n.jsx(n.Fragment,{children:n.jsx(c,{...e,multiple:!0,api:$,fieldNames:{label:"name",value:"id"}})})}function P(e){return O.get("/platform/partner",{params:e})}function R(e){return n.jsx(u,{...e,api:P,mode:"multiple",fieldNames:{label:"name",value:"id"}})}function T(){r("GameSelect",N),r("PartnerSelect",R)}export{C as A,T as C,h as E,y as F,v as I,d as L,g as M,A as P,j as S,b as T,m as a,O as b,p as c,S as d,w as e,M as g,q as r,I as s};
