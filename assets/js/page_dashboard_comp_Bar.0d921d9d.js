import{j as c}from"./components_Bottom.d993aacd.js";import{r}from"./react.017637b6.js";import{a as f}from"./react-redux.883a54e9.js";import{h as p}from"./echarts.996e01f2.js";const l=(e,n)=>{const t=r.exports.useRef(),s=r.exports.useRef(null),a=()=>{var o;s.current&&((o=t.current)==null||o.dispose())},i=r.exports.useCallback(()=>{e&&(a(),s.current&&(t.current=p(s.current),t.current.setOption(e)))},[e]);return r.exports.useEffect(()=>{e&&i()},[i,e]),r.exports.useEffect(()=>(i(),window.addEventListener("resize",i,!1),()=>{window.removeEventListener("resize",i),a()}),[]),r.exports.useEffect(()=>{var o;n&&((o=t==null?void 0:t.current)==null||o.setOption(e))},[n]),[s,i]},u=[96285,102352,111235,112356,123984,138205,142059,152362,162231,164324,178291,192830],d={title:{text:"当日充值排行",left:30,top:5},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"value",boundaryGap:[0,.01]},yAxis:{type:"category",data:["孤独的霸气","凌云齐天","夏至未至","叶璃溪","良辰美景奈何天","凹凸曼","六月离别","离歌","终极战犯","水洗晴空","安城如沫","渣渣灰"]},series:[{name:"充值数",type:"bar",data:u}]};function y(){const e=f(s=>s.user.permissions),[n,t]=l(d,u);return r.exports.useEffect(()=>{e.length&&setTimeout(()=>{t()},100)},[t,e.length]),c("div",{className:"w-38% h-550px border border-gray-200 rounded-10px",children:c("div",{ref:n,className:"w-full h-full"})})}export{y as B,l as u};