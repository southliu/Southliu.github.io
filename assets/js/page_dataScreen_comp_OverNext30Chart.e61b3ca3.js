import{j as c}from"./components_Bottom.d993aacd.js";import{u as f}from"./page_dashboard_comp_Bar.0d921d9d.js";import{e as d}from"./components_Business.51671154.js";const m="_bg_1tdz7_1",h={bg:m};function y(){const r=()=>{const e=[],t=new Date,o=new Date;for(o.setDate(t.getDate()+30),t.setDate(t.getDate()+1);o.getTime()-t.getTime()>=0;){const l=(t.getMonth()+1).toString().length===1?"0"+(t.getMonth()+1).toString():t.getMonth()+1,i=t.getDate().toString().length===1?"0"+t.getDate():t.getDate();e.push(l+"/"+i),t.setDate(t.getDate()+1)}return e},a={unit:["访问量"],data:new Array(30).fill("").map(e=>(e=d(1,2e4),e))},s={tooltip:{trigger:"axis",confine:!0,formatter:e=>{const t=e[0];return`<div class=${h.bg}>
                        <span style="">${t.name} <i >${t.value}</i> 人次访问</span>
                    </div>`},backgroundColor:"transparent",borderColor:"transparent",axisPointer:{lineStyle:{type:"dashed"},snap:!0},extraCssText:"box-shadow: none;padding:0"},grid:{top:"15%",left:"5%",right:"5%",bottom:"15%"},xAxis:[{type:"category",boundaryGap:!1,axisLine:{show:!0,symbol:["none","arrow"],symbolOffset:[0,30],lineStyle:{color:"#233653",shadowOffsetX:20,shadowColor:"#233653"}},axisLabel:{color:"#7ec7ff",padding:0,fontSize:12,formatter:function(e){return e}},splitLine:{show:!1,lineStyle:{color:"#192a44"}},axisTick:{show:!1},data:r()}],yAxis:a.unit.map((e,t)=>({name:"(访问量)",nameTextStyle:{color:"#7ec7ff",fontSize:12,padding:[0,30,-4,0]},minInterval:1,splitLine:{show:!1,lineStyle:{color:"#192a44"}},axisLine:{show:t===0,lineStyle:{color:"#233653"}},axisLabel:{show:!0,color:"#7ec7ff",padding:0,formatter:function(o){return Number(o)>=1e4&&(o=Number(o)/1e4+"w"),o}},axisTick:{show:!1}})),series:a.data.map(()=>({name:"",type:"line",symbol:"circle",showSymbol:!1,smooth:!0,lineStyle:{width:1,color:"#707070",borderColor:"#707070"},itemStyle:{color:"#F5B348",shadowColor:"rgba(245, 179, 72, 0.3)",shadowBlur:3},emphasis:{scale:!0},areaStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"#846B38"},{offset:.5,color:"#403E47"},{offset:1,color:"#11144E"}],global:!1},shadowColor:"rgba(255, 199, 37, 0)",shadowBlur:20},data:a.data}))},[n]=f(s,a);return c("div",{className:"echarts",ref:n})}export{y as O};
