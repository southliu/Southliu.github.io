import{j as e,r as t}from"./react@18.3.1.zIIbIvjs.js";import{z as n,T as a,D as s,r,M as l,P as o}from"./index.uva-D35o.js";import{e as i,h as u,i as c,j as p,k as d,m,I as f,n as h,o as x,p as v,q as j,r as b,u as g,v as P,U as y}from"./antd@5.19.1_react-dom@18.3.1_react@18.3.1.DznZxYdA.js";import{u as S}from"./react-i18next@14.1.1_i18next@23.11.4_react-dom@18.3.1_react@18.3.1.ZIWL9Uwt.js";import{d as w}from"./dayjs@1.11.11.D5DL0-0D.js";import{W as C}from"./index.3JfNIbCz.js";function D(t){const{isPermission:a,children:s}=t;return e.jsxs(e.Fragment,{children:[!1!==a&&e.jsx("div",{id:"content",className:"p-10px",children:s}),!1===a&&e.jsx("div",{className:"min-w-980px h-full p-10px box-border overflow-auto",children:e.jsx(n,{})})]})}function k(e){switch(e){case"Switch":case"Checkbox":case"CheckboxGroup":return"checked";case"Upload":return"fileList";default:return"value"}}function N(e,t,n){switch(t){case"Select":return{allowClear:!0,placeholder:e("public.inputPleaseSelect")};case"Input":return{allowClear:!0,placeholder:e("public.inputPleaseEnter"),onPressEnter:n};case"InputNumber":return{placeholder:e("public.inputPleaseEnter"),onPressEnter:n};case"Checkbox":case"CheckboxGroup":return{};case"DatePicker":return{placeholder:e("public.inputPleaseSelect"),format:s};case"RangePicker":return{placeholder:[e("public.inputPleaseSelect"),e("public.inputPleaseSelect")],format:[s,s]};case"TimePicker":return{placeholder:e("public.inputPleaseSelect"),format:a};case"TimeRangePicker":return{placeholder:[e("public.inputPleaseSelect"),e("public.inputPleaseSelect")],format:[a,a]};default:return{allowClear:!0,placeholder:e("public.inputPleaseEnter")}}}const R=e=>{const t=JSON.parse(JSON.stringify(e));return delete t.componentProps,t};function T(e){return r.get("/authority/common/games",{params:e})}function E(){return e.jsx("div",{className:"absolute left-50% top-50% -translate-x-1/2 -translate-y-1/2 text-center",children:e.jsx(i,{spinning:!0})})}function F(n){const{t:a}=S(),[s,r]=t.useState(!1),[o,i]=t.useState([]),c={...n};delete c.api,delete c.params,delete c.params2,delete c.params3,delete c.apiResultKey;const p=t.useCallback((async()=>{if(n.api)try{const{api:e,params:t,params2:a,params3:s,apiResultKey:l}=n;if(r(!0),e){const{code:n,data:r}=await e(t,a,s);if(200!==Number(n))return;const o=l?null==r?void 0:r[l]:r;i(o)}}finally{r(!1)}}),[n]);t.useEffect((()=>{n.value&&0===(null==o?void 0:o.length)&&p()}),[n.value]);return e.jsx(u,{allowClear:!0,maxTagCount:l,placeholder:a("public.inputPleaseSelect"),...c,loading:s,treeData:o,notFoundContent:s&&e.jsx(E,{}),onDropdownVisibleChange:e=>{var t;e&&p(),null==(t=n.onDropdownVisibleChange)||t.call(n,e)}})}function G(t){return e.jsx(e.Fragment,{children:e.jsx(F,{...t,multiple:!0,api:T,fieldNames:{label:"name",value:"id"}})})}function I(e){return r.get("/platform/partner",{params:e})}function K(n){const{t:a}=S(),[s,r]=t.useState(!1),[o,i]=t.useState([]),u={...n};delete u.api,delete u.params,delete u.params2,delete u.params3,delete u.apiResultKey;const p=t.useCallback((async()=>{if(n.api)try{const{api:e,params:t,params2:a,params3:s,apiResultKey:l}=n;if(r(!0),e){const{code:n,data:r}=await e(t,a,s);if(200!==Number(n))return;const o=l?null==r?void 0:r[l]:r;i(o)}}finally{r(!1)}}),[n]);t.useEffect((()=>{n.value&&0===o.length&&p()}),[n.value]);return e.jsx(c,{allowClear:!0,maxTagCount:l,placeholder:a("public.inputPleaseSelect"),optionFilterProp:"label",...u,loading:s,options:o,notFoundContent:s&&e.jsx(E,{}),onDropdownVisibleChange:e=>{var t;e&&p(),null==(t=n.onDropdownVisibleChange)||t.call(n,e)}})}function A(t){return e.jsx(K,{...t,api:I,mode:"multiple",fieldNames:{label:"name",value:"id"}})}function _(e,t=s){return w.isDayjs(e)?e.format(t):e}function M(e){return w.isDayjs(e)?e:w(e)}function V(e,t=s){if(e)return(null==e?void 0:e.length)>1&&w.isDayjs(null==e?void 0:e[0])&&w.isDayjs(null==e?void 0:e[1])?[e[0].format(t),e[1].format(t)]:e}function z(e){if(e)return(null==e?void 0:e.length)>1&&!w.isDayjs(null==e?void 0:e[0])&&w.isDayjs(null==e?void 0:e[1])?[w(e[0]),e[1]]:(null==e?void 0:e.length)>1&&w.isDayjs(null==e?void 0:e[0])&&!w.isDayjs(null==e?void 0:e[1])?[e[0],w(e[1])]:(null==e?void 0:e.length)>1&&!w.isDayjs(null==e?void 0:e[0])&&!w.isDayjs(null==e?void 0:e[1])?[w(e[0]),w(e[1])]:e}function U(e,t){var n;for(let a=0;a<e.length;a++)if(e[a].name===t)return(null==(n=e[a].componentProps)?void 0:n.format)||s;return s}function J(e,t){var n;for(const a in e){if(2===(null==(n=e[a])?void 0:n.length)&&w.isDayjs(e[a][0])&&w.isDayjs(e[a][1])){const n=U(t,a);e[a]=V(e[a],n)}if((null==e?void 0:e[a])&&w.isDayjs(e[a])){const n=U(t,a);e[a]=_(e[a],n)}}return e}const{RangePicker:O}=p;const{RangePicker:q}=d;const B=new Map;function L(t,n,a){const{component:s,componentProps:r}=n;if("customize"===s){const{render:t}=n;if(!t)return e.jsx(e.Fragment,{});W("customize",t)}const l=B.get(s);return l?e.jsxs(e.Fragment,{children:[e.jsx(l,{...N(t,s,a),...r}),n.unit&&e.jsx("span",{className:"ml-5px whitespace-nowrap",children:n.unit})]}):e.jsx(e.Fragment,{})}function W(e,t){B.set(e,t)}function $(t){const{children:n,className:a}=t;return e.jsx("div",{...t,id:"card",className:`\n        min-w-980px\n        h-full\n        box-border\n        overflow-auto\n        relative\n        box-border\n        px-5\n        py-3\n        rounded-5\n        ${a}\n      `,children:n})}B.set("Input",f),B.set("TextArea",f.TextArea),B.set("InputNumber",h),B.set("InputPassword",f.Password),B.set("AutoComplete",x),B.set("Select",c),B.set("TreeSelect",u),B.set("Checkbox",v),B.set("CheckboxGroup",v.Group),B.set("RadioGroup",j.Group),B.set("Switch",b),B.set("Rate",g),B.set("Slider",P),B.set("Upload",y),B.set("Transfer",(function(n){const{value:a}=n,[s,r]=t.useState(a||[]);return e.jsx(m,{...n,targetKeys:s,onChange:e=>{var t;r(e),null==(t=null==n?void 0:n.onChange)||t.call(n,e)}})})),B.set("DatePicker",(function(t){const{value:n}=t,a={...t};return n&&(a.value=M(n)),e.jsx(p,{...a})})),B.set("RangePicker",(function(t){const{value:n}=t,a={...t};return n&&(a.value=z(n)),e.jsx(O,{...a})})),B.set("TimePicker",(function(t){const{value:n}=t,a={...t};return n&&(a.value=M(n)),e.jsx(d,{...a})})),B.set("TimeRangePicker",(function(t){const{value:n}=t,a={...t};return n&&(a.value=z(n)),e.jsx(q,{...a})})),B.set("ApiSelect",K),B.set("ApiTreeSelect",F),B.set("PasswordStrength",o),B.set("Editor",C),W("GameSelect",G),W("PartnerSelect",A);export{D as B,$ as a,L as b,J as c,R as f,T as g,k as h};
