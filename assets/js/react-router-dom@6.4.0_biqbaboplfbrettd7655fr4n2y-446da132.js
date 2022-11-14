import{r as o}from"./react@18.2.0-9cdefec6.js";import{R as l}from"./react-router@6.4.0_react@18.2.0-bb9b9142.js";import{c as u}from"./@remix-run_router@1.0.2-86c67200.js";import{j as m}from"./@ant-design_icons@4.7.0_biqbaboplfbrettd7655fr4n2y-770bcbdb.js";/**
 * React Router DOM v6.4.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function R(a){let{basename:i,children:n,window:s}=a,e=o.useRef();e.current==null&&(e.current=u({window:s,v5Compat:!0}));let t=e.current,[r,c]=o.useState({action:t.action,location:t.location});return o.useLayoutEffect(()=>t.listen(c),[t]),m(l,{basename:i,children:n,location:r.location,navigationType:r.action,navigator:t})}export{R as H};
