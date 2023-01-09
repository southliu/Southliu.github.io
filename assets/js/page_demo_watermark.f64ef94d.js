import{a as x,j as d}from"./components_Bottom.b74a73ac.js";import{u as g}from"./page_content_article.43484e2b.js";import{B as u}from"./antd.34832afa.js";function w(){return[n=>{const{content:a,height:i,width:l,rotate:p,color:h,fontSize:y,opacity:k}=n;if(document.getElementById("south_watermark")!==null)return;const f=Math.floor(document.body.clientWidth/l)*2;let m="";for(let t=0;t<f;t++){const v=`
        display: inline-block;
        line-height: ${i}px;
        width: ${l}px;
        text-align: center;
        transform:rotate( ${p}deg);
        color: ${h};
        font-size: ${y}px;
        opacity: ${k};
        `;m+=`
        <span style="${v}">
          ${a}
        </span>
      `}const s=document.createElement("div");s.innerHTML=m;const W=Math.floor(document.body.clientHeight/i)*2||4;let c="";for(let t=0;t<W;t++)c+=`<div style="white-space: nowrap;">${s.innerHTML}</div>`;const e=document.createElement("div");e.innerHTML=c,e.id="south_watermark",e.style.position="fixed",e.style.top="0px",e.style.left="-100px",e.style.zIndex="999999",e.style.pointerEvents="none",e.style.userSelect="none",document.body.appendChild(e)},()=>{if(document.getElementById("south_watermark")!==null&&document.getElementById("south_watermark")!==null){const n=document.getElementById("south_watermark");document.body.removeChild(n)}}]}function B(){g("水印");const[o,r]=w();return x("div",{className:"p-30px",children:[d(u,{onClick:()=>{o({content:"这是水印",height:300,width:350,rotate:-20,color:"#000",fontSize:30,opacity:.07})},children:"打开水印"}),d(u,{danger:!0,onClick:()=>{r()},children:"隐藏水印"})]})}export{B as W};
