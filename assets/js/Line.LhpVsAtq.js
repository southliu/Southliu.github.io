import{j as e}from"./react@19.1.0.BqYkxQ4a.js";import{u as r}from"./useEcharts.BQgpDxRy.js";import{u as a}from"./react-i18next@15.4.1_i18next@24.2.3_react-dom@19.1.0_react@19.1.0.Bl-q5qCL.js";import"./@babel_runtime@7.27.0.CgHJBUxY.js";import"./echarts@5.6.0.CR6xDgiN.js";import"./tslib@2.3.0.ZseNXxlj.js";import"./zrender@5.6.1.DQgPJaij.js";function t(){const{t:t}=a(),s={title:{text:t("dashboard.effectiveRechargeRatio"),left:30,top:5},xAxis:{type:"category",boundaryGap:!1,data:["07-11","07-12","07-13","07-14","07-15","07-16","07-17"]},yAxis:{type:"value"},tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},series:[{name:t("dashboard.rechargeAmount"),type:"line",areaStyle:{color:"#1890ff",opacity:.2},emphasis:{focus:"series"},data:[120,140,120,190,150,111,160]},{name:t("dashboard.usersNumber"),type:"line",areaStyle:{color:"#1890ff",opacity:.3},emphasis:{focus:"series"},data:[90,122,90,140,123,280,200]}]},[o]=r(s);return e.jsx("div",{className:"h-550px border border-gray-200 rounded-10px",children:e.jsx("div",{ref:o,className:"w-full h-full"})})}export{t as default};
