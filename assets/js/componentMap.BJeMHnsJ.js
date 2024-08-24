import{j as e,r as t}from"./react@18.3.1.B8wSySjr.js";import{z as a,T as n,D as s,r,M as l,P as o}from"./index.BR75-S5-.js";import{e as i,h as u,i as c,j as p,k as d,m,I as f,n as h,o as j,p as v,q as x,r as g,u as b,v as P,U as y}from"./antd@5.20.2_react-dom@18.3.1_react@18.3.1.O37wOMW8.js";import{u as S}from"./react-i18next@14.1.1_i18next@23.11.4_react-dom@18.3.1_react@18.3.1.DJVsM5yd.js";import{d as C}from"./dayjs@1.11.11.DTKcLCjq.js";import{W as w}from"./index.BXGhSqmK.js";function D(t){const{isPermission:n,children:s}=t;return e.jsxs(e.Fragment,{children:[!1!==n&&e.jsx("div",{id:"content",className:"p-10px",children:s}),!1===n&&e.jsx("div",{className:"min-w-980px h-full p-10px box-border overflow-auto",children:e.jsx(a,{})})]})}function k(e){switch(e){case"Switch":case"Checkbox":case"CheckboxGroup":return"checked";case"Upload":return"fileList";default:return"value"}}function N(e,t,a){switch(t){case"Select":return{allowClear:!0,placeholder:e("public.inputPleaseSelect")};case"Input":return{allowClear:!0,placeholder:e("public.inputPleaseEnter"),onPressEnter:a};case"InputNumber":return{placeholder:e("public.inputPleaseEnter"),onPressEnter:a};case"Checkbox":case"CheckboxGroup":return{};case"DatePicker":return{placeholder:e("public.inputPleaseSelect"),format:s};case"RangePicker":return{placeholder:[e("public.inputPleaseSelect"),e("public.inputPleaseSelect")],format:[s,s]};case"TimePicker":return{placeholder:e("public.inputPleaseSelect"),format:n};case"TimeRangePicker":return{placeholder:[e("public.inputPleaseSelect"),e("public.inputPleaseSelect")],format:[n,n]};default:return{allowClear:!0,placeholder:e("public.inputPleaseEnter")}}}const R=e=>{const t=JSON.parse(JSON.stringify(e));return delete t.componentProps,t};function T(e){return r.get("/authority/common/games",{params:e})}function E(){return e.jsx("div",{className:"absolute left-50% top-50% -translate-x-1/2 -translate-y-1/2 text-center",children:e.jsx(i,{spinning:!0})})}function F(a){const{t:n}=S(),[s,r]=t.useState(!1),[o,i]=t.useState([]),c={...a};delete c.api,delete c.params,delete c.params2,delete c.params3,delete c.apiResultKey;const p=t.useCallback((async()=>{if(a.api)try{const{api:e,params:t,params2:n,params3:s,apiResultKey:l}=a;if(r(!0),e){const{code:a,data:r}=await e(t,n,s);if(200!==Number(a))return;const o=l?null==r?void 0:r[l]:r;i(o)}}finally{r(!1)}}),[a]);t.useEffect((()=>{a.value&&0===(null==o?void 0:o.length)&&p()}),[a.value]);return e.jsx(u,{allowClear:!0,maxTagCount:l,placeholder:n("public.inputPleaseSelect"),...c,loading:s,treeData:o,notFoundContent:s&&e.jsx(E,{}),onDropdownVisibleChange:e=>{var t;e&&p(),null==(t=a.onDropdownVisibleChange)||t.call(a,e)}})}function G(t){return e.jsx(e.Fragment,{children:e.jsx(F,{...t,multiple:!0,api:T,fieldNames:{label:"name",value:"id"}})})}function I(e){return r.get("/platform/partner",{params:e})}function A(a){const{t:n}=S(),[s,r]=t.useState(!1),[o,i]=t.useState([]),u={...a};delete u.api,delete u.params,delete u.params2,delete u.params3,delete u.apiResultKey;const p=t.useCallback((async()=>{if(a.api)try{const{api:e,params:t,params2:n,params3:s,apiResultKey:l}=a;if(r(!0),e){const{code:a,data:r}=await e(t,n,s);if(200!==Number(a))return;const o=l?null==r?void 0:r[l]:r;i(o)}}finally{r(!1)}}),[a]);t.useEffect((()=>{a.value&&0===o.length&&p()}),[a.value]);return e.jsx(c,{allowClear:!0,maxTagCount:l,placeholder:n("public.inputPleaseSelect"),optionFilterProp:"label",...u,loading:s,options:o,notFoundContent:s&&e.jsx(E,{}),onDropdownVisibleChange:e=>{var t;e&&p(),null==(t=a.onDropdownVisibleChange)||t.call(a,e)}})}function K(t){return e.jsx(A,{...t,api:I,mode:"multiple",fieldNames:{label:"name",value:"id"}})}function _(e,t=s){return C.isDayjs(e)?e.format(t):e}function V(e){return C.isDayjs(e)?e:C(e)}function z(e,t=s){if(e)return(null==e?void 0:e.length)>1&&C.isDayjs(null==e?void 0:e[0])&&C.isDayjs(null==e?void 0:e[1])?[e[0].format(t),e[1].format(t)]:e}function O(e){if(e)return(null==e?void 0:e.length)>1&&!C.isDayjs(null==e?void 0:e[0])&&C.isDayjs(null==e?void 0:e[1])?[C(e[0]),e[1]]:(null==e?void 0:e.length)>1&&C.isDayjs(null==e?void 0:e[0])&&!C.isDayjs(null==e?void 0:e[1])?[e[0],C(e[1])]:(null==e?void 0:e.length)>1&&!C.isDayjs(null==e?void 0:e[0])&&!C.isDayjs(null==e?void 0:e[1])?[C(e[0]),C(e[1])]:e}function U(e,t){var a;for(let n=0;n<e.length;n++)if(e[n].name===t)return(null==(a=e[n].componentProps)?void 0:a.format)||s;return s}function J(e,t){var a;for(const n in e){if(2===(null==(a=e[n])?void 0:a.length)&&C.isDayjs(e[n][0])&&C.isDayjs(e[n][1])){const a=U(t,n);e[n]=z(e[n],a)}if((null==e?void 0:e[n])&&C.isDayjs(e[n])){const a=U(t,n);e[n]=_(e[n],a)}}return e}const{RangePicker:M}=p;const{RangePicker:q}=d;const B=new Map;function L(t,a,n){const{component:s,componentProps:r}=a;if("customize"===s){const{render:t}=a;if(!t)return e.jsx(e.Fragment,{});Q("customize",t)}const l=B.get(s);return l?e.jsxs(e.Fragment,{children:[e.jsx(l,{...N(t,s,n),...r}),a.unit&&e.jsx("span",{className:"ml-5px whitespace-nowrap",children:a.unit})]}):e.jsx(e.Fragment,{})}function Q(e,t){B.set(e,t)}B.set("Input",f),B.set("TextArea",f.TextArea),B.set("InputNumber",h),B.set("InputPassword",f.Password),B.set("AutoComplete",j),B.set("Select",c),B.set("TreeSelect",u),B.set("Checkbox",v),B.set("CheckboxGroup",v.Group),B.set("RadioGroup",x.Group),B.set("Switch",g),B.set("Rate",b),B.set("Slider",P),B.set("Upload",y),B.set("Transfer",(function(a){const{value:n}=a,[s,r]=t.useState(n||[]);return e.jsx(m,{...a,targetKeys:s,onChange:e=>{var t;r(e),null==(t=null==a?void 0:a.onChange)||t.call(a,e)}})})),B.set("DatePicker",(function(t){const{value:a}=t,n={...t};return a&&(n.value=V(a)),e.jsx(p,{...n})})),B.set("RangePicker",(function(t){const{value:a}=t,n={...t};return a&&(n.value=O(a)),e.jsx(M,{...n})})),B.set("TimePicker",(function(t){const{value:a}=t,n={...t};return a&&(n.value=V(a)),e.jsx(d,{...n})})),B.set("TimeRangePicker",(function(t){const{value:a}=t,n={...t};return a&&(n.value=O(a)),e.jsx(q,{...n})})),B.set("ApiSelect",A),B.set("ApiTreeSelect",F),B.set("PasswordStrength",o),B.set("Editor",w),Q("GameSelect",G),Q("PartnerSelect",K);export{D as B,L as a,J as b,R as f,T as g,k as h};