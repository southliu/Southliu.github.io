import{j as c}from"./components_Bottom.c0f53a97.js";import{r}from"./react.bfbbfd99.js";import{a as f}from"./react-redux.2fb2dac2.js";import{h as l}from"./echarts.996e01f2.js";const d=(e,o)=>{const t=r.useRef(),s=r.useRef(null),a=()=>{var n;s.current&&((n=t.current)==null||n.dispose())},i=r.useCallback(()=>{e&&(a(),s.current&&(t.current=l(s.current),t.current.setOption(e)))},[e]);return r.useEffect(()=>{e&&i()},[i,e]),r.useEffect(()=>(i(),window.addEventListener("resize",i,!1),()=>{window.removeEventListener("resize",i),a()}),[]),r.useEffect(()=>{var n;o&&((n=t==null?void 0:t.current)==null||n.setOption(e))},[o]),[s,i]},u=[96285,102352,111235,112356,123984,138205,142059,152362,162231,164324,178291,192830],m={title:{text:"当日充值排行",left:30,top:5},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"value",boundaryGap:[0,.01]},yAxis:{type:"category",data:["孤独的霸气","凌云齐天","夏至未至","叶璃溪","良辰美景奈何天","凹凸曼","六月离别","离歌","终极战犯","水洗晴空","安城如沫","渣渣灰"]},series:[{name:"充值数",type:"bar",data:u}]};function y(){const e=f(s=>s.user.permissions),[o,t]=d(m,u);return r.useEffect(()=>{e.length&&setTimeout(()=>{t()},100)},[t,e.length]),c("div",{className:"w-38% h-550px border border-gray-200 rounded-10px",children:c("div",{ref:o,className:"w-full h-full"})})}export{y as B,d as u};
