import{r}from"./react@18.2.0-52f219d3.js";import{R as m}from"./react-router@6.4.3_react@18.2.0-257aa3a6.js";import{c as f}from"./@remix-run_router@1.0.3-a37d51dc.js";import{j as p}from"./@ant-design_cssinjs@1.0.2_biqbaboplfbrettd7655fr4n2y-bf6e9dad.js";/**
 * React Router DOM v6.4.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function x(t){let{basename:n,children:c,window:l}=t,o=r.exports.useRef();o.current==null&&(o.current=f({window:l,v5Compat:!0}));let e=o.current,[s,u]=r.exports.useState({action:e.action,location:e.location});return r.exports.useLayoutEffect(()=>e.listen(u),[e]),p(m,{basename:n,children:c,location:s.location,navigationType:s.action,navigator:e})}var a;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(a||(a={}));var i;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(i||(i={}));export{x as H};
