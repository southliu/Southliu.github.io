let U=t=>typeof t=="object"&&t!=null&&t.nodeType===1,Z=(t,l)=>(!l||t!=="hidden")&&t!=="visible"&&t!=="clip",F=(t,l)=>{if(t.clientHeight<t.scrollHeight||t.clientWidth<t.scrollWidth){let d=getComputedStyle(t,null);return Z(d.overflowY,l)||Z(d.overflowX,l)||(u=>{let s=(n=>{if(!n.ownerDocument||!n.ownerDocument.defaultView)return null;try{return n.ownerDocument.defaultView.frameElement}catch{return null}})(u);return!!s&&(s.clientHeight<u.scrollHeight||s.clientWidth<u.scrollWidth)})(t)}return!1},L=(t,l,d,u,s,n,h,m)=>n<t&&h>l||n>t&&h<l?0:n<=t&&m<=d||h>=l&&m>=d?n-t-u:h>l&&m<d||n<t&&m>d?h-l+s:0,et=t=>{let l=t.parentElement;return l??(t.getRootNode().host||null)};var lt=(t,l)=>{var d,u,s,n,h,m;if(typeof document>"u")return[];let{scrollMode:_,block:f,inline:c,boundary:S,skipOverflowHiddenElements:$}=l,tt=typeof S=="function"?S:y=>y!==S;if(!U(t))throw new TypeError("Invalid target");let G=document.scrollingElement||document.documentElement,E=[],i=t;for(;U(i)&&tt(i);){if(i=et(i),i===G){E.push(i);break}i!=null&&i===document.body&&F(i)&&!F(document.documentElement)||i!=null&&F(i,$)&&E.push(i)}let p=(u=(d=window.visualViewport)==null?void 0:d.width)!=null?u:innerWidth,w=(n=(s=window.visualViewport)==null?void 0:s.height)!=null?n:innerHeight,W=(h=window.scrollX)!=null?h:pageXOffset,b=(m=window.scrollY)!=null?m:pageYOffset,{height:H,width:v,top:M,right:j,bottom:N,left:x}=t.getBoundingClientRect(),o=f==="start"||f==="nearest"?M:f==="end"?N:M+H/2,r=c==="center"?x+v/2:c==="end"?j:x,q=[];for(let y=0;y<E.length;y++){let e=E[y],{height:I,width:C,top:R,right:z,bottom:A,left:T}=e.getBoundingClientRect();if(_==="if-needed"&&M>=0&&x>=0&&N<=w&&j<=p&&M>=R&&N<=A&&x>=T&&j<=z)return q;let V=getComputedStyle(e),k=parseInt(V.borderLeftWidth,10),B=parseInt(V.borderTopWidth,10),D=parseInt(V.borderRightWidth,10),O=parseInt(V.borderBottomWidth,10),a=0,g=0,X="offsetWidth"in e?e.offsetWidth-e.clientWidth-k-D:0,Y="offsetHeight"in e?e.offsetHeight-e.clientHeight-B-O:0,J="offsetWidth"in e?e.offsetWidth===0?0:C/e.offsetWidth:0,K="offsetHeight"in e?e.offsetHeight===0?0:I/e.offsetHeight:0;if(G===e)a=f==="start"?o:f==="end"?o-w:f==="nearest"?L(b,b+w,w,B,O,b+o,b+o+H,H):o-w/2,g=c==="start"?r:c==="center"?r-p/2:c==="end"?r-p:L(W,W+p,p,k,D,W+r,W+r+v,v),a=Math.max(0,a+b),g=Math.max(0,g+W);else{a=f==="start"?o-R-B:f==="end"?o-A+O+Y:f==="nearest"?L(R,A,I,B,O+Y,o,o+H,H):o-(R+I/2)+Y/2,g=c==="start"?r-T-k:c==="center"?r-(T+C/2)+X/2:c==="end"?r-z+D+X:L(T,z,C,k,D+X,r,r+v,v);let{scrollLeft:P,scrollTop:Q}=e;a=Math.max(0,Math.min(Q+a/K,e.scrollHeight-I/K+Y)),g=Math.max(0,Math.min(P+g/J,e.scrollWidth-C/J+X)),o+=Q-a,r+=P-g}q.push({el:e,top:a,left:g})}return q};export{lt as o};
