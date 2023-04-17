import{j as r}from"./react.e58b2294.js";import{u as W}from"./page_content_article.669883db.js";import{B as u}from"./antd.2930504f.js";function g(){return[t=>{const{content:o,height:l,width:s,rotate:p,color:h,fontSize:y,opacity:f}=t;if(document.getElementById("south_watermark")!==null)return;const k=Math.floor(document.body.clientWidth/s)*2;let m="";for(let n=0;n<k;n++){const v=`
        display: inline-block;
        line-height: ${l}px;
        width: ${s}px;
        text-align: center;
        transform:rotate( ${p}deg);
        color: ${h};
        font-size: ${y}px;
        opacity: ${f};
        `;m+=`
        <span style="${v}">
          ${o}
        </span>
      `}const c=document.createElement("div");c.innerHTML=m;const x=Math.floor(document.body.clientHeight/l)*2||4;let d="";for(let n=0;n<x;n++)d+=`<div style="white-space: nowrap;">${c.innerHTML}</div>`;const e=document.createElement("div");e.innerHTML=d,e.id="south_watermark",e.style.position="fixed",e.style.top="0px",e.style.left="-100px",e.style.zIndex="999999",e.style.pointerEvents="none",e.style.userSelect="none",document.body.appendChild(e)},()=>{if(document.getElementById("south_watermark")!==null&&document.getElementById("south_watermark")!==null){const t=document.getElementById("south_watermark");document.body.removeChild(t)}}]}function L(){W("水印");const[i,a]=g(),t=()=>{i({content:"这是水印",height:300,width:350,rotate:-20,color:"#000",fontSize:30,opacity:.07})},o=()=>{a()};return r.jsxs("div",{className:"p-30px",children:[r.jsx(u,{onClick:t,children:"打开水印"}),r.jsx(u,{danger:!0,onClick:o,children:"隐藏水印"})]})}export{L as W};
