import{r as e,R as t}from"./react@18.3.1.B8wSySjr.js";import"./react-dom@18.3.1_react@18.3.1.DWAyjvPq.js";import{R as r}from"./react-router@6.22.3_react@18.3.1.PEedDKQr.js";import{c as o}from"./@remix-run_router@1.15.3.Di2mmZ39.js";
/**
 * React Router DOM v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */try{window.__reactRouterVersion="6"}catch(l){}const a=t.startTransition;function s(t){let{basename:s,children:i,future:n,window:c}=t,u=e.useRef();null==u.current&&(u.current=o({window:c,v5Compat:!0}));let l=u.current,[m,h]=e.useState({action:l.action,location:l.location}),{v7_startTransition:S}=n||{},f=e.useCallback((e=>{S&&a?a((()=>h(e))):h(e)}),[h,S]);return e.useLayoutEffect((()=>l.listen(f)),[l,f]),e.createElement(r,{basename:s,children:i,location:m.location,navigationType:m.action,navigator:l,future:n})}var i,n,c,u;(n=i||(i={})).UseScrollRestoration="useScrollRestoration",n.UseSubmit="useSubmit",n.UseSubmitFetcher="useSubmitFetcher",n.UseFetcher="useFetcher",n.useViewTransitionState="useViewTransitionState",(u=c||(c={})).UseFetcher="useFetcher",u.UseFetchers="useFetchers",u.UseScrollRestoration="useScrollRestoration";export{s as H};
