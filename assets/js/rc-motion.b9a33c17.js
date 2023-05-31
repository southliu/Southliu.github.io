import{n as de,y as Pe,z as Me,a as $e,_ as _e,c as ue,e as D,f as d,b as h,q as Le,g as cn}from"./@babel_runtime.e68bd868.js";import{c as vn}from"./classnames.8cb16634.js";import{k as We,q as Ge,_ as Re,v as $n,s as _n,$ as bn,c as He,z as Je,H as Ce,a0 as xn,C as On,a1 as Dn}from"./rc-util.1a6f23f3.js";import{r as u}from"./react.ab566f72.js";var Nn=["children"],fn=u.createContext({});function Tt(n){var e=n.children,t=de(n,Nn);return u.createElement(fn.Provider,{value:t},e)}var Vn=function(n){Pe(t,n);var e=Me(t);function t(){return $e(this,t),e.apply(this,arguments)}return _e(t,[{key:"render",value:function(){return this.props.children}}]),t}(u.Component),ne="none",pe="appear",Se="enter",ye="leave",Xe="none",j="prepare",re="start",ae="active",qe="end",ln="prepared";function Ye(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit".concat(n)]="webkit".concat(e),t["Moz".concat(n)]="moz".concat(e),t["ms".concat(n)]="MS".concat(e),t["O".concat(n)]="o".concat(e.toLowerCase()),t}function wn(n,e){var t={animationend:Ye("Animation","AnimationEnd"),transitionend:Ye("Transition","TransitionEnd")};return n&&("AnimationEvent"in e||delete t.animationend.animation,"TransitionEvent"in e||delete t.transitionend.transition),t}var Un=wn(We(),typeof window<"u"?window:{}),dn={};if(We()){var Fn=document.createElement("div");dn=Fn.style}var Ae={};function mn(n){if(Ae[n])return Ae[n];var e=Un[n];if(e)for(var t=Object.keys(e),r=t.length,a=0;a<r;a+=1){var s=t[a];if(Object.prototype.hasOwnProperty.call(e,s)&&s in dn)return Ae[n]=e[s],Ae[n]}return""}var En=mn("animationend"),pn=mn("transitionend"),Sn=!!(En&&pn),Ze=En||"animationend",en=pn||"transitionend";function nn(n,e){if(!n)return null;if(ue(n)==="object"){var t=e.replace(/-\w/g,function(r){return r[1].toUpperCase()});return n[t]}return"".concat(n,"-").concat(e)}const In=function(n){var e=u.useRef(),t=u.useRef(n);t.current=n;var r=u.useCallback(function(i){t.current(i)},[]);function a(i){i&&(i.removeEventListener(en,r),i.removeEventListener(Ze,r))}function s(i){e.current&&e.current!==i&&a(e.current),i&&i!==e.current&&(i.addEventListener(en,r),i.addEventListener(Ze,r),e.current=i)}return u.useEffect(function(){return function(){a(e.current)}},[]),[s,a]};var yn=We()?u.useLayoutEffect:u.useEffect;const Kn=function(){var n=u.useRef(null);function e(){Ge.cancel(n.current)}function t(r){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2;e();var s=Ge(function(){a<=1?r({isCanceled:function(){return s!==n.current}}):t(r,a-1)});n.current=s}return u.useEffect(function(){return function(){e()}},[]),[t,e]};var jn=[j,re,ae,qe],Qn=[j,ln],An=!1,zn=!0;function hn(n){return n===ae||n===qe}const Wn=function(n,e,t){var r=Re(Xe),a=D(r,2),s=a[0],i=a[1],m=Kn(),E=D(m,2),o=E[0],c=E[1];function v(){i(j,!0)}var f=e?Qn:jn;return yn(function(){if(s!==Xe&&s!==qe){var l=f.indexOf(s),S=f[l+1],R=t(s);R===An?i(S,!0):S&&o(function(L){function g(){L.isCanceled()||i(S,!0)}R===!0?g():Promise.resolve(R).then(g)})}},[n,s]),u.useEffect(function(){return function(){c()}},[]),[v,s]};function Hn(n,e,t,r){var a=r.motionEnter,s=a===void 0?!0:a,i=r.motionAppear,m=i===void 0?!0:i,E=r.motionLeave,o=E===void 0?!0:E,c=r.motionDeadline,v=r.motionLeaveImmediately,f=r.onAppearPrepare,l=r.onEnterPrepare,S=r.onLeavePrepare,R=r.onAppearStart,L=r.onEnterStart,g=r.onLeaveStart,N=r.onAppearActive,$=r.onEnterActive,F=r.onLeaveActive,V=r.onAppearEnd,C=r.onEnterEnd,_=r.onLeaveEnd,w=r.onVisibleChanged,G=Re(),U=D(G,2),y=U[0],I=U[1],P=Re(ne),b=D(P,2),p=b[0],x=b[1],Q=Re(null),X=D(Q,2),se=X[0],W=X[1],Y=u.useRef(!1),Z=u.useRef(null);function H(){return t()}var ce=u.useRef(!1);function ve(){x(ne,!0),W(null,!0)}function me(A){var M=H();if(!(A&&!A.deadline&&A.target!==M)){var O=ce.current,z;p===pe&&O?z=V==null?void 0:V(M,A):p===Se&&O?z=C==null?void 0:C(M,A):p===ye&&O&&(z=_==null?void 0:_(M,A)),p!==ne&&O&&z!==!1&&ve()}}var be=In(me),xe=D(be,1),ee=xe[0],Ee=function(M){var O,z,le;switch(M){case pe:return O={},h(O,j,f),h(O,re,R),h(O,ae,N),O;case Se:return z={},h(z,j,l),h(z,re,L),h(z,ae,$),z;case ye:return le={},h(le,j,S),h(le,re,g),h(le,ae,F),le;default:return{}}},J=u.useMemo(function(){return Ee(p)},[p]),Oe=Wn(p,!n,function(A){if(A===j){var M=J[j];return M?M(H()):An}if(K in J){var O;W(((O=J[K])===null||O===void 0?void 0:O.call(J,H(),null))||null)}return K===ae&&(ee(H()),c>0&&(clearTimeout(Z.current),Z.current=setTimeout(function(){me({deadline:!0})},c))),K===ln&&ve(),zn}),q=D(Oe,2),De=q[0],K=q[1],fe=hn(K);ce.current=fe,yn(function(){I(e);var A=Y.current;Y.current=!0;var M;!A&&e&&m&&(M=pe),A&&e&&s&&(M=Se),(A&&!e&&o||!A&&v&&!e&&o)&&(M=ye);var O=Ee(M);M&&(n||O[j])?(x(M),De()):x(ne)},[e]),u.useEffect(function(){(p===pe&&!m||p===Se&&!s||p===ye&&!o)&&x(ne)},[m,s,o]),u.useEffect(function(){return function(){Y.current=!1,clearTimeout(Z.current)}},[]);var T=u.useRef(!1);u.useEffect(function(){y&&(T.current=!0),y!==void 0&&p===ne&&((T.current||y)&&(w==null||w(y)),T.current=!0)},[y,p]);var k=se;return J[j]&&K===re&&(k=d({transition:"none"},k)),[p,K,k,y??e]}function qn(n){var e=n;ue(n)==="object"&&(e=n.transitionSupport);function t(a,s){return!!(a.motionName&&e&&s!==!1)}var r=u.forwardRef(function(a,s){var i=a.visible,m=i===void 0?!0:i,E=a.removeOnLeave,o=E===void 0?!0:E,c=a.forceRender,v=a.children,f=a.motionName,l=a.leavedClassName,S=a.eventProps,R=u.useContext(fn),L=R.motion,g=t(a,L),N=u.useRef(),$=u.useRef();function F(){try{return N.current instanceof HTMLElement?N.current:bn($.current)}catch{return null}}var V=Hn(g,m,F,a),C=D(V,4),_=C[0],w=C[1],G=C[2],U=C[3],y=u.useRef(U);U&&(y.current=!0);var I=u.useCallback(function(W){N.current=W,$n(s,W)},[s]),P,b=d(d({},S),{},{visible:m});if(!v)P=null;else if(_===ne)U?P=v(d({},b),I):!o&&y.current&&l?P=v(d(d({},b),{},{className:l}),I):c||!o&&!l?P=v(d(d({},b),{},{style:{display:"none"}}),I):P=null;else{var p,x;w===j?x="prepare":hn(w)?x="active":w===re&&(x="start");var Q=nn(f,"".concat(_,"-").concat(x));P=v(d(d({},b),{},{className:vn(nn(f,_),(p={},h(p,Q,Q&&x),h(p,f,typeof f=="string"),p)),style:G}),I)}if(u.isValidElement(P)&&_n(P)){var X=P,se=X.ref;se||(P=u.cloneElement(P,{ref:I}))}return u.createElement(Vn,{ref:$},P)});return r.displayName="CSSMotion",r}const Bn=qn(Sn);var we="add",Ue="keep",Fe="remove",Ne="removed";function Gn(n){var e;return n&&ue(n)==="object"&&"key"in n?e=n:e={key:n},d(d({},e),{},{key:String(e.key)})}function Ie(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return n.map(Gn)}function Jn(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],t=[],r=0,a=e.length,s=Ie(n),i=Ie(e);s.forEach(function(o){for(var c=!1,v=r;v<a;v+=1){var f=i[v];if(f.key===o.key){r<v&&(t=t.concat(i.slice(r,v).map(function(l){return d(d({},l),{},{status:we})})),r=v),t.push(d(d({},f),{},{status:Ue})),r+=1,c=!0;break}}c||t.push(d(d({},o),{},{status:Fe}))}),r<a&&(t=t.concat(i.slice(r).map(function(o){return d(d({},o),{},{status:we})})));var m={};t.forEach(function(o){var c=o.key;m[c]=(m[c]||0)+1});var E=Object.keys(m).filter(function(o){return m[o]>1});return E.forEach(function(o){t=t.filter(function(c){var v=c.key,f=c.status;return v!==o||f!==Fe}),t.forEach(function(c){c.key===o&&(c.status=Ue)})}),t}var Xn=["component","children","onVisibleChanged","onAllRemoved"],Yn=["status"],Zn=["eventProps","visible","children","motionName","motionAppear","motionEnter","motionLeave","motionLeaveImmediately","motionDeadline","removeOnLeave","leavedClassName","onAppearStart","onAppearActive","onAppearEnd","onEnterStart","onEnterActive","onEnterEnd","onLeaveStart","onLeaveActive","onLeaveEnd"];function et(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Bn,t=function(r){Pe(s,r);var a=Me(s);function s(){var i;$e(this,s);for(var m=arguments.length,E=new Array(m),o=0;o<m;o++)E[o]=arguments[o];return i=a.call.apply(a,[this].concat(E)),h(Le(i),"state",{keyEntities:[]}),h(Le(i),"removeKey",function(c){var v=i.state.keyEntities,f=v.map(function(l){return l.key!==c?l:d(d({},l),{},{status:Ne})});return i.setState({keyEntities:f}),f.filter(function(l){var S=l.status;return S!==Ne}).length}),i}return _e(s,[{key:"render",value:function(){var m=this,E=this.state.keyEntities,o=this.props,c=o.component,v=o.children,f=o.onVisibleChanged,l=o.onAllRemoved,S=de(o,Xn),R=c||u.Fragment,L={};return Zn.forEach(function(g){L[g]=S[g],delete S[g]}),delete S.keys,u.createElement(R,S,E.map(function(g){var N=g.status,$=de(g,Yn),F=N===we||N===Ue;return u.createElement(e,cn({},L,{key:$.key,visible:F,eventProps:$,onVisibleChanged:function(C){if(f==null||f(C,{key:$.key}),!C){var _=m.removeKey($.key);_===0&&l&&l()}}}),v)}))}}],[{key:"getDerivedStateFromProps",value:function(m,E){var o=m.keys,c=E.keyEntities,v=Ie(o),f=Jn(c,v);return{keyEntities:f.filter(function(l){var S=c.find(function(R){var L=R.key;return l.key===L});return!(S&&S.status===Ne&&l.status===Fe)})}}}]),s}(u.Component);return h(t,"defaultProps",{component:"div"}),t}const kt=et(Sn);function tn(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit".concat(n)]="webkit".concat(e),t["Moz".concat(n)]="moz".concat(e),t["ms".concat(n)]="MS".concat(e),t["O".concat(n)]="o".concat(e.toLowerCase()),t}function nt(n,e){var t={animationend:tn("Animation","AnimationEnd"),transitionend:tn("Transition","TransitionEnd")};return n&&("AnimationEvent"in e||delete t.animationend.animation,"TransitionEvent"in e||delete t.transitionend.transition),t}var tt=nt(He(),typeof window<"u"?window:{}),gn={};if(He()){var rt=document.createElement("div");gn=rt.style}var he={};function Tn(n){if(he[n])return he[n];var e=tt[n];if(e)for(var t=Object.keys(e),r=t.length,a=0;a<r;a+=1){var s=t[a];if(Object.prototype.hasOwnProperty.call(e,s)&&s in gn)return he[n]=e[s],he[n]}return""}var kn=Tn("animationend"),Rn=Tn("transitionend"),Cn=!!(kn&&Rn),rn=kn||"animationend",an=Rn||"transitionend";function on(n,e){if(!n)return null;if(ue(n)==="object"){var t=e.replace(/-\w/g,function(r){return r[1].toUpperCase()});return n[t]}return"".concat(n,"-").concat(e)}var te="none",ge="appear",Te="enter",ke="leave",un="none",B="prepare",ie="start",oe="active",Be="end";const at=function(){var n=u.useRef(null);function e(){Je.cancel(n.current)}function t(r){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2;e();var s=Je(function(){a<=1?r({isCanceled:function(){return s!==n.current}}):t(r,a-1)});n.current=s}return u.useEffect(function(){return function(){e()}},[]),[t,e]};var Ln=He()?u.useLayoutEffect:u.useEffect,sn=[B,ie,oe,Be],Pn=!1,it=!0;function Mn(n){return n===oe||n===Be}const ot=function(n,e){var t=Ce(un),r=D(t,2),a=r[0],s=r[1],i=at(),m=D(i,2),E=m[0],o=m[1];function c(){s(B,!0)}return Ln(function(){if(a!==un&&a!==Be){var v=sn.indexOf(a),f=sn[v+1],l=e(a);l===Pn?s(f,!0):E(function(S){function R(){S.isCanceled()||s(f,!0)}l===!0?R():Promise.resolve(l).then(R)})}},[n,a]),u.useEffect(function(){return function(){o()}},[]),[c,a]},ut=function(n){var e=u.useRef(),t=u.useRef(n);t.current=n;var r=u.useCallback(function(i){t.current(i)},[]);function a(i){i&&(i.removeEventListener(an,r),i.removeEventListener(rn,r))}function s(i){e.current&&e.current!==i&&a(e.current),i&&i!==e.current&&(i.addEventListener(an,r),i.addEventListener(rn,r),e.current=i)}return u.useEffect(function(){return function(){a(e.current)}},[]),[s,a]};function st(n,e,t,r){var a=r.motionEnter,s=a===void 0?!0:a,i=r.motionAppear,m=i===void 0?!0:i,E=r.motionLeave,o=E===void 0?!0:E,c=r.motionDeadline,v=r.motionLeaveImmediately,f=r.onAppearPrepare,l=r.onEnterPrepare,S=r.onLeavePrepare,R=r.onAppearStart,L=r.onEnterStart,g=r.onLeaveStart,N=r.onAppearActive,$=r.onEnterActive,F=r.onLeaveActive,V=r.onAppearEnd,C=r.onEnterEnd,_=r.onLeaveEnd,w=r.onVisibleChanged,G=Ce(),U=D(G,2),y=U[0],I=U[1],P=Ce(te),b=D(P,2),p=b[0],x=b[1],Q=Ce(null),X=D(Q,2),se=X[0],W=X[1],Y=u.useRef(!1),Z=u.useRef(null);function H(){return t()}var ce=u.useRef(!1);function ve(T){var k=H();if(!(T&&!T.deadline&&T.target!==k)){var A=ce.current,M;p===ge&&A?M=V==null?void 0:V(k,T):p===Te&&A?M=C==null?void 0:C(k,T):p===ke&&A&&(M=_==null?void 0:_(k,T)),p!==te&&A&&M!==!1&&(x(te,!0),W(null,!0))}}var me=ut(ve),be=D(me,1),xe=be[0],ee=u.useMemo(function(){var T,k,A;switch(p){case ge:return T={},h(T,B,f),h(T,ie,R),h(T,oe,N),T;case Te:return k={},h(k,B,l),h(k,ie,L),h(k,oe,$),k;case ke:return A={},h(A,B,S),h(A,ie,g),h(A,oe,F),A;default:return{}}},[p]),Ee=ot(p,function(T){if(T===B){var k=ee[B];return k?k(H()):Pn}if(q in ee){var A;W(((A=ee[q])===null||A===void 0?void 0:A.call(ee,H(),null))||null)}return q===oe&&(xe(H()),c>0&&(clearTimeout(Z.current),Z.current=setTimeout(function(){ve({deadline:!0})},c))),it}),J=D(Ee,2),Oe=J[0],q=J[1],De=Mn(q);ce.current=De,Ln(function(){I(e);var T=Y.current;if(Y.current=!0,!!n){var k;!T&&e&&m&&(k=ge),T&&e&&s&&(k=Te),(T&&!e&&o||!T&&v&&!e&&o)&&(k=ke),k&&(x(k),Oe())}},[e]),u.useEffect(function(){(p===ge&&!m||p===Te&&!s||p===ke&&!o)&&x(te)},[m,s,o]),u.useEffect(function(){return function(){Y.current=!1,clearTimeout(Z.current)}},[]);var K=u.useRef(!1);u.useEffect(function(){y&&(K.current=!0),y!==void 0&&p===te&&((K.current||y)&&(w==null||w(y)),K.current=!0)},[y,p]);var fe=se;return ee[B]&&q===ie&&(fe=d({transition:"none"},fe)),[p,q,fe,y??e]}var ct=function(n){Pe(t,n);var e=Me(t);function t(){return $e(this,t),e.apply(this,arguments)}return _e(t,[{key:"render",value:function(){return this.props.children}}]),t}(u.Component);function vt(n){var e=n;ue(n)==="object"&&(e=n.transitionSupport);function t(a){return!!(a.motionName&&e)}var r=u.forwardRef(function(a,s){var i=a.visible,m=i===void 0?!0:i,E=a.removeOnLeave,o=E===void 0?!0:E,c=a.forceRender,v=a.children,f=a.motionName,l=a.leavedClassName,S=a.eventProps,R=t(a),L=u.useRef(),g=u.useRef();function N(){try{return L.current instanceof HTMLElement?L.current:Dn(g.current)}catch{return null}}var $=st(R,m,N,a),F=D($,4),V=F[0],C=F[1],_=F[2],w=F[3],G=u.useRef(w);w&&(G.current=!0);var U=u.useCallback(function(Q){L.current=Q,xn(s,Q)},[s]),y,I=d(d({},S),{},{visible:m});if(!v)y=null;else if(V===te||!t(a))w?y=v(d({},I),U):!o&&G.current&&l?y=v(d(d({},I),{},{className:l}),U):c||!o&&!l?y=v(d(d({},I),{},{style:{display:"none"}}),U):y=null;else{var P,b;C===B?b="prepare":Mn(C)?b="active":C===ie&&(b="start"),y=v(d(d({},I),{},{className:vn(on(f,V),(P={},h(P,on(f,"".concat(V,"-").concat(b)),b),h(P,f,typeof f=="string"),P)),style:_}),U)}if(u.isValidElement(y)&&On(y)){var p=y,x=p.ref;x||(y=u.cloneElement(y,{ref:U}))}return u.createElement(ct,{ref:g},y)});return r.displayName="CSSMotion",r}const ft=vt(Cn);var Ke="add",je="keep",Qe="remove",Ve="removed";function lt(n){var e;return n&&ue(n)==="object"&&"key"in n?e=n:e={key:n},d(d({},e),{},{key:String(e.key)})}function ze(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return n.map(lt)}function dt(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],t=[],r=0,a=e.length,s=ze(n),i=ze(e);s.forEach(function(o){for(var c=!1,v=r;v<a;v+=1){var f=i[v];if(f.key===o.key){r<v&&(t=t.concat(i.slice(r,v).map(function(l){return d(d({},l),{},{status:Ke})})),r=v),t.push(d(d({},f),{},{status:je})),r+=1,c=!0;break}}c||t.push(d(d({},o),{},{status:Qe}))}),r<a&&(t=t.concat(i.slice(r).map(function(o){return d(d({},o),{},{status:Ke})})));var m={};t.forEach(function(o){var c=o.key;m[c]=(m[c]||0)+1});var E=Object.keys(m).filter(function(o){return m[o]>1});return E.forEach(function(o){t=t.filter(function(c){var v=c.key,f=c.status;return v!==o||f!==Qe}),t.forEach(function(c){c.key===o&&(c.status=je)})}),t}var mt=["component","children","onVisibleChanged","onAllRemoved"],Et=["status"],pt=["eventProps","visible","children","motionName","motionAppear","motionEnter","motionLeave","motionLeaveImmediately","motionDeadline","removeOnLeave","leavedClassName","onAppearStart","onAppearActive","onAppearEnd","onEnterStart","onEnterActive","onEnterEnd","onLeaveStart","onLeaveActive","onLeaveEnd"];function St(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ft,t=function(r){Pe(s,r);var a=Me(s);function s(){var i;$e(this,s);for(var m=arguments.length,E=new Array(m),o=0;o<m;o++)E[o]=arguments[o];return i=a.call.apply(a,[this].concat(E)),h(Le(i),"state",{keyEntities:[]}),h(Le(i),"removeKey",function(c){var v=i.state.keyEntities,f=v.map(function(l){return l.key!==c?l:d(d({},l),{},{status:Ve})});return i.setState({keyEntities:f}),f.filter(function(l){var S=l.status;return S!==Ve}).length}),i}return _e(s,[{key:"render",value:function(){var m=this,E=this.state.keyEntities,o=this.props,c=o.component,v=o.children,f=o.onVisibleChanged,l=o.onAllRemoved,S=de(o,mt),R=c||u.Fragment,L={};return pt.forEach(function(g){L[g]=S[g],delete S[g]}),delete S.keys,u.createElement(R,S,E.map(function(g){var N=g.status,$=de(g,Et),F=N===Ke||N===je;return u.createElement(e,cn({},L,{key:$.key,visible:F,eventProps:$,onVisibleChanged:function(C){if(f==null||f(C,{key:$.key}),!C){var _=m.removeKey($.key);_===0&&l&&l()}}}),v)}))}}],[{key:"getDerivedStateFromProps",value:function(m,E){var o=m.keys,c=E.keyEntities,v=ze(o),f=dt(c,v);return{keyEntities:f.filter(function(l){var S=c.find(function(R){var L=R.key;return l.key===L});return!(S&&S.status===Ve&&l.status===Qe)})}}}]),s}(u.Component);return h(t,"defaultProps",{component:"div"}),t}St(Cn);export{Bn as C,Tt as M,kt as a,ft as b};