import{a as p}from"./components_Bottom.b6a39c54.js";import{r}from"./react.75970298.js";import{a as d}from"./components_Business.2faa3595.js";function I(u){const{prefix:c,start:n,end:e}=u,[s,a]=r.useState(n),[t,o]=r.useState(null);return r.useEffect(()=>{const f=e-n,l=2*60,m=Math.floor(f/l)||1;o(setInterval(()=>{a(i=>i+m)}))},[e,n]),r.useEffect(()=>{s>=e&&(t&&(clearInterval(t),o(null)),a(e))},[e,s,t]),r.useEffect(()=>()=>{t&&(clearInterval(t),o(null))},[t]),p("span",{children:[c,d(s)]})}export{I as C};