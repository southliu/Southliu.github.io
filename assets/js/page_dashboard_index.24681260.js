import{j as a,a as o,F as c}from"./components_Bottom.46058eea.js";import{r as e}from"./react.c6268275.js";import{r as l}from"./components_Business.d046028a.js";import{s as f}from"./page_dashboard_model.ts.d4c4a16f.js";import{u as p}from"./page_content_article.8251ad95.js";import{B as d}from"./components_Search.bb803774.js";import{B as h}from"./components_Content.431f1b7a.js";import{L as u}from"./page_dashboard_comp_Line.0be82e41.js";import{B as y}from"./page_dashboard_comp_Bar.4333e923.js";import{B}from"./page_dashboard_comp_Block.e7c912d2.js";function x(r){return l.get("/dashboard",{params:r})}const n={pay_date:["2022-10-19","2022-10-29"]};function k(){p("数据展览");const[r,i]=e.useState(!1),s=e.useCallback(async t=>{t.all_pay=t.all_pay?1:void 0;const m={...t};try{i(!0),await x(m)}finally{i(!1)}},[]);return e.useEffect(()=>{s(n)},[s]),a(h,{isPermission:!0,children:o(c,{children:[a(d,{list:f,data:n,isLoading:r,isCreate:!1,handleFinish:s}),a("div",{className:"py-10px",children:a(B,{})}),o("div",{className:"flex justify-between w-full",children:[a(u,{}),a(y,{})]})]})})}export{k as D};