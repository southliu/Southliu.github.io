import{j as e,a as r}from"./components_Bottom.c0f53a97.js";import{r as m}from"./react.bfbbfd99.js";import{H as o}from"./page_dataScreen_comp_Header.58f94f27.js";import{s as a}from"./page_dataScreen_index.module.less_used.17883765.js";import{d as s}from"./page_dataScreen_images.add76275.js";import{V as v}from"./page_dataScreen_comp_RealTimeAccessChart.486410e7.js";import{M as N}from"./page_dataScreen_comp_MaleFemaleRatioChart.d8dae7f6.js";import{A as p}from"./page_dataScreen_comp_AgeRatioChart.f3af1e8a.js";import{P as f}from"./page_dataScreen_comp_ChinaMapChart.ca7cfaf1.js";import{O as u}from"./page_dataScreen_comp_OverNext30Chart.81c29858.js";import{H as g}from"./page_dataScreen_comp_HotPlateChart.44224364.js";import{A as C}from"./page_dataScreen_comp_AnnualUseChart.dfe88544.js";import{P as w}from"./page_dataScreen_comp_PlatformSourceChart.39c08391.js";function M(){const i=m.useRef(null),t=(d=1920,h=1080)=>{const l=window.innerWidth/d,n=window.innerHeight/h;return l<n?l:n},c=()=>{i.current&&(i.current.style.transform=`scale(${t()}) translate(-50%, -50%)`)};return m.useLayoutEffect(()=>(i.current&&(i.current.style.transform=`scale(${t()}) translate(-50%, -50%)`,i.current.style.width="1920px",i.current.style.height="1080px"),window.addEventListener("resize",c),()=>{window.removeEventListener("resize",c)}),[]),e("div",{className:a.container,children:r("div",{ref:i,className:a.dataScreen,children:[e(o,{}),r("div",{className:a.main,children:[r("div",{className:a.mainLeft,children:[r("div",{className:a.top,children:[r("div",{className:a.title,children:[e("span",{children:"实时游客统计"}),e("img",{src:s,alt:"title"})]}),e("div",{className:a.mainChart,children:e(v,{})})]}),r("div",{className:a.center,children:[r("div",{className:a.title,children:[e("span",{children:"男女比例"}),e("img",{src:s,alt:""})]}),e("div",{className:a.mainChart,children:e(N,{})})]}),r("div",{className:a.bottom,children:[r("div",{className:a.title,children:[e("span",{children:"年龄比例"}),e("img",{src:s,alt:""})]}),e("div",{className:a.mainChart,children:e(p,{})})]})]}),r("div",{className:a.mainCenter,children:[r("div",{className:a.map,children:[e("div",{className:a.mapTitle,children:"景区实时客流量"}),e(f,{})]}),r("div",{className:a.mapBottom,children:[r("div",{className:a.title,children:[e("span",{children:"未来30天游客量趋势图"}),e("img",{src:s,alt:""})]}),e("div",{className:a.mainChart,children:e(u,{})})]})]}),r("div",{className:a.mainRight,children:[r("div",{className:a.top,children:[r("div",{className:a.title,children:[e("span",{children:"热门景区排行"}),e("img",{src:s,alt:""})]}),e("div",{className:a.mainChart,children:e(g,{})})]}),r("div",{className:a.center,children:[r("div",{className:a.title,children:[e("span",{children:"年度游客量对比"}),e("img",{src:s,alt:""})]}),e("div",{className:a.mainChart,children:e(C,{})})]}),r("div",{className:a.bottom,children:[r("div",{className:a.title,children:[e("span",{children:"预约渠道数据统计"}),e("img",{src:s,alt:""})]}),e("div",{className:a.mainChart,children:e(w,{})})]})]})]})]})})}export{M as P};
