import{j as u}from"./components_Bottom.c0f53a97.js";import{I as f,m as c,B as d}from"./antd.d4be7f9c.js";import{r as p}from"./react.bfbbfd99.js";import{I as C}from"./@iconify_react.c16649c5.js";function l(){const t=p.useRef(null),r=p.useCallback(n=>new Promise((s,e)=>{var y;try{let o=n;if(o||(o=(y=t.current)==null?void 0:y.value),!o){e("复制的内容不能为空");return}if(typeof o!="string"&&typeof o!="number"){e("复制的内容必须是字符串或数字");return}navigator.clipboard.writeText(o.toString()).then(()=>{s(o)}).catch(i=>{e(i)})}catch(o){e(o)}}),[]),a=p.useCallback(()=>navigator.clipboard.readText(),[]);return[t,r,a]}const{Search:m}=f;function x(t){const[,r]=l();return u(m,{...t,placeholder:"请输入",enterButton:"复制",onSearch:n=>{if(!n)return c.warning({content:"请输入复制内容",key:"copy"});try{r(n),c.success({content:"复制成功",key:"copy"})}catch{c.warning({content:"复制失败",key:"copy"})}}})}function T(t){const{text:r,value:a}=t,[,n]=l();return u(d,{...t,icon:u(C,{icon:"ant-design:copy-outlined"}),onClick:()=>{try{n(a),c.success({content:"复制成功",key:"copy"})}catch{c.warning({content:"复制失败",key:"copy"})}},children:r})}export{x as C,T as a};
