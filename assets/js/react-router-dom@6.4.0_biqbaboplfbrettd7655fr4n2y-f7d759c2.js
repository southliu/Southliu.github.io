import{r as o}from"./react@18.2.0-44b760b7.js";import{R as l}from"./react-router@6.4.0_react@18.2.0-a4bc9657.js";import{c as u}from"./@remix-run_router@1.0.2-86c67200.js";import{j as m}from"./@ant-design_icons@4.7.0_biqbaboplfbrettd7655fr4n2y-a11e4fd7.js";/**
 * React Router DOM v6.4.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function y(a){let{basename:i,children:n,window:s}=a,e=o.exports.useRef();e.current==null&&(e.current=u({window:s,v5Compat:!0}));let t=e.current,[r,c]=o.exports.useState({action:t.action,location:t.location});return o.exports.useLayoutEffect(()=>t.listen(c),[t]),m(l,{basename:i,children:n,location:r.location,navigationType:r.action,navigator:t})}export{y as H};
