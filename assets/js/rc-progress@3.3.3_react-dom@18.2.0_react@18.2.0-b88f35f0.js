import{r as g}from"./react@18.2.0-9cdefec6.js";import{c as $}from"./classnames@2.3.2-d75d9a59.js";import{c as F,b as M,_ as L}from"./@babel_runtime@7.19.0-16d3a89d.js";import{c as X}from"./rc-util@5.24.4_react-dom@18.2.0_react@18.2.0-c033d194.js";import{b as Z,j as f}from"./@ant-design_icons@4.7.0_react-dom@18.2.0_react@18.2.0-0d73ff6d.js";var _={className:"",percent:0,prefixCls:"rc-progress",strokeColor:"#2db7f5",strokeLinecap:"round",strokeWidth:1,style:{},trailColor:"#D9D9D9",trailWidth:1,gapPosition:"bottom"},q=function(){var r=g.useRef([]),a=g.useRef(null);return g.useEffect(function(){var s=Date.now(),e=!1;r.current.forEach(function(o){if(!!o){e=!0;var n=o.style;n.transitionDuration=".3s, .3s, .3s, .06s",a.current&&s-a.current<100&&(n.transitionDuration="0s, 0s")}}),e&&(a.current=Date.now())}),r.current},b=0,z=X();function H(){var t;return z?(t=b,b+=1):t="TEST_OR_SSR",t}const J=function(t){var r=g.useState(),a=F(r,2),s=a[0],e=a[1];return g.useEffect(function(){e("rc_progress_".concat(H()))},[]),t||s};var K=["id","prefixCls","strokeWidth","trailWidth","gapDegree","gapPosition","trailColor","strokeLinecap","style","className","strokeColor","percent"];function N(t){return+t.replace("%","")}function j(t){var r=t!=null?t:[];return Array.isArray(r)?r:[r]}var c=100,E=function(r,a,s,e){var o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:0,n=arguments.length>5?arguments[5]:void 0,v=arguments.length>6?arguments[6]:void 0,m=arguments.length>7?arguments[7]:void 0,l=o>0?90+o/2:-90,h=Math.PI*2*r,u=h*((360-o)/360),D=a/100*360*((360-o)/360),C=o===0?0:{bottom:0,top:180,left:90,right:-90}[n],d=(100-s)/100*u;return v==="round"&&s!==100&&(d+=m/2,d>=u&&(d=u-.01)),{stroke:typeof e=="string"?e:void 0,strokeDasharray:"".concat(u,"px ").concat(h),strokeDashoffset:d,transform:"rotate(".concat(l+D+C,"deg)"),transformOrigin:"50% 50%",transition:"stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s, opacity .3s ease 0s",fillOpacity:0}},R=function(r){var a=r.id,s=r.prefixCls,e=r.strokeWidth,o=r.trailWidth,n=r.gapDegree,v=r.gapPosition,m=r.trailColor,l=r.strokeLinecap,h=r.style,u=r.className,D=r.strokeColor,C=r.percent,d=M(r,K),T=J(a),I="".concat(T,"-gradient"),k=c/2-e/2,w=E(k,0,100,m,n,v,l,e),O=j(C),y=j(D),S=y.find(function(i){return i&&L(i)==="object"}),A=q(),B=function(){var p=0;return O.map(function(W,x){var P=y[x]||y[y.length-1],U=P&&L(P)==="object"?"url(#".concat(I,")"):void 0,G=E(k,p,W,P,n,v,l,e);return p+=W,f("circle",{className:"".concat(s,"-circle-path"),r:k,cx:c/2,cy:c/2,stroke:U,strokeLinecap:l,strokeWidth:e,opacity:W===0?0:1,style:G,ref:function(V){A[x]=V}},x)}).reverse()};return Z("svg",{className:$("".concat(s,"-circle"),u),viewBox:"0 0 ".concat(c," ").concat(c),style:h,id:a,...d,children:[S&&f("defs",{children:f("linearGradient",{id:I,x1:"100%",y1:"0%",x2:"0%",y2:"0%",children:Object.keys(S).sort(function(i,p){return N(i)-N(p)}).map(function(i,p){return f("stop",{offset:i,stopColor:S[i]},p)})})}),f("circle",{className:"".concat(s,"-circle-trail"),r:k,cx:c/2,cy:c/2,stroke:m,strokeLinecap:l,strokeWidth:o||e,style:w}),B()]})};R.defaultProps=_;R.displayName="Circle";export{R as C};
