import{j as e,a as r}from"./components_Bottom.d993aacd.js";import{r as m}from"./react.017637b6.js";import{H as h}from"./page_dataScreen_comp_Header.63e680f9.js";import{s as a}from"./page_dataScreen_index.module.less_used.0e1c2e86.js";import{d as s}from"./page_dataScreen_images.add76275.js";import{V as v}from"./page_dataScreen_comp_RealTimeAccessChart.721276ab.js";import{M as p}from"./page_dataScreen_comp_MaleFemaleRatioChart.58a6d80f.js";import{A as N}from"./page_dataScreen_comp_AgeRatioChart.43155bf0.js";import{P as f}from"./page_dataScreen_comp_ChinaMapChart.25f0658d.js";import{O as u}from"./page_dataScreen_comp_OverNext30Chart.e61b3ca3.js";import{H as g}from"./page_dataScreen_comp_HotPlateChart.90d02411.js";import{A as C}from"./page_dataScreen_comp_AnnualUseChart.63f14cf5.js";import{P as w}from"./page_dataScreen_comp_PlatformSourceChart.97a98715.js";function M(){const i=m.exports.useRef(null),t=(d=1920,o=1080)=>{const l=window.innerWidth/d,n=window.innerHeight/o;return l<n?l:n},c=()=>{i.current&&(i.current.style.transform=`scale(${t()}) translate(-50%, -50%)`)};return m.exports.useLayoutEffect(()=>(i.current&&(i.current.style.transform=`scale(${t()}) translate(-50%, -50%)`,i.current.style.width="1920px",i.current.style.height="1080px"),window.addEventListener("resize",c),()=>{window.removeEventListener("resize",c)}),[]),e("div",{className:a.container,children:r("div",{ref:i,className:a.dataScreen,children:[e(h,{}),r("div",{className:a.main,children:[r("div",{className:a.mainLeft,children:[r("div",{className:a.top,children:[r("div",{className:a.title,children:[e("span",{children:"实时游客统计"}),e("img",{src:s,alt:"title"})]}),e("div",{className:a.mainChart,children:e(v,{})})]}),r("div",{className:a.center,children:[r("div",{className:a.title,children:[e("span",{children:"男女比例"}),e("img",{src:s,alt:""})]}),e("div",{className:a.mainChart,children:e(p,{})})]}),r("div",{className:a.bottom,children:[r("div",{className:a.title,children:[e("span",{children:"年龄比例"}),e("img",{src:s,alt:""})]}),e("div",{className:a.mainChart,children:e(N,{})})]})]}),r("div",{className:a.mainCenter,children:[r("div",{className:a.map,children:[e("div",{className:a.mapTitle,children:"景区实时客流量"}),e(f,{})]}),r("div",{className:a.mapBottom,children:[r("div",{className:a.title,children:[e("span",{children:"未来30天游客量趋势图"}),e("img",{src:s,alt:""})]}),e("div",{className:a.mainChart,children:e(u,{})})]})]}),r("div",{className:a.mainRight,children:[r("div",{className:a.top,children:[r("div",{className:a.title,children:[e("span",{children:"热门景区排行"}),e("img",{src:s,alt:""})]}),e("div",{className:a.mainChart,children:e(g,{})})]}),r("div",{className:a.center,children:[r("div",{className:a.title,children:[e("span",{children:"年度游客量对比"}),e("img",{src:s,alt:""})]}),e("div",{className:a.mainChart,children:e(C,{})})]}),r("div",{className:a.bottom,children:[r("div",{className:a.title,children:[e("span",{children:"预约渠道数据统计"}),e("img",{src:s,alt:""})]}),e("div",{className:a.mainChart,children:e(w,{})})]})]})]})]})})}export{M as P};