import{F as f}from"./@ant-design_fast-color@2.0.6.GP31j37z.js";var a=[{index:7,amount:15},{index:6,amount:25},{index:5,amount:30},{index:5,amount:45},{index:5,amount:65},{index:5,amount:85},{index:4,amount:90},{index:3,amount:95},{index:2,amount:97},{index:1,amount:98}];function e(f,a,e){var r;return(r=Math.round(f.h)>=60&&Math.round(f.h)<=240?e?Math.round(f.h)-2*a:Math.round(f.h)+2*a:e?Math.round(f.h)+2*a:Math.round(f.h)-2*a)<0?r+=360:r>=360&&(r-=360),r}function r(f,a,e){return 0===f.h&&0===f.s?f.s:((r=e?f.s-.16*a:4===a?f.s+.16:f.s+.05*a)>1&&(r=1),e&&5===a&&r>.1&&(r=.1),r<.06&&(r=.06),Math.round(100*r)/100);var r}function d(f,a,e){var r;return r=e?f.v+.05*a:f.v-.15*a,r=Math.max(0,Math.min(1,r)),Math.round(100*r)/100}function n(n){for(var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=[],c=new f(n),u=c.toHsv(),b=5;b>0;b-=1){var i=new f({h:e(u,b,!0),s:r(u,b,!0),v:d(u,b,!0)});t.push(i)}t.push(c);for(var m=1;m<=4;m+=1){var v=new f({h:e(u,m),s:r(u,m),v:d(u,m)});t.push(v)}return"dark"===o.theme?a.map((function(a){var e=a.index,r=a.amount;return new f(o.backgroundColor||"#141414").mix(t[e],r).toHexString()})):t.map((function(f){return f.toHexString()}))}var o={red:"#F5222D",volcano:"#FA541C",orange:"#FA8C16",gold:"#FAAD14",yellow:"#FADB14",lime:"#A0D911",green:"#52C41A",cyan:"#13C2C2",blue:"#1677FF",geekblue:"#2F54EB",purple:"#722ED1",magenta:"#EB2F96",grey:"#666666"},t=["#fff1f0","#ffccc7","#ffa39e","#ff7875","#ff4d4f","#f5222d","#cf1322","#a8071a","#820014","#5c0011"];t.primary=t[5];var c=["#fff2e8","#ffd8bf","#ffbb96","#ff9c6e","#ff7a45","#fa541c","#d4380d","#ad2102","#871400","#610b00"];c.primary=c[5];var u=["#fff7e6","#ffe7ba","#ffd591","#ffc069","#ffa940","#fa8c16","#d46b08","#ad4e00","#873800","#612500"];u.primary=u[5];var b=["#fffbe6","#fff1b8","#ffe58f","#ffd666","#ffc53d","#faad14","#d48806","#ad6800","#874d00","#613400"];b.primary=b[5];var i=["#feffe6","#ffffb8","#fffb8f","#fff566","#ffec3d","#fadb14","#d4b106","#ad8b00","#876800","#614700"];i.primary=i[5];var m=["#fcffe6","#f4ffb8","#eaff8f","#d3f261","#bae637","#a0d911","#7cb305","#5b8c00","#3f6600","#254000"];m.primary=m[5];var v=["#f6ffed","#d9f7be","#b7eb8f","#95de64","#73d13d","#52c41a","#389e0d","#237804","#135200","#092b00"];v.primary=v[5];var p=["#e6fffb","#b5f5ec","#87e8de","#5cdbd3","#36cfc9","#13c2c2","#08979c","#006d75","#00474f","#002329"];p.primary=p[5];var h=["#e6f4ff","#bae0ff","#91caff","#69b1ff","#4096ff","#1677ff","#0958d9","#003eb3","#002c8c","#001d66"];h.primary=h[5];var l=["#f0f5ff","#d6e4ff","#adc6ff","#85a5ff","#597ef7","#2f54eb","#1d39c4","#10239e","#061178","#030852"];l.primary=l[5];var s=["#f9f0ff","#efdbff","#d3adf7","#b37feb","#9254de","#722ed1","#531dab","#391085","#22075e","#120338"];s.primary=s[5];var y=["#fff0f6","#ffd6e7","#ffadd2","#ff85c0","#f759ab","#eb2f96","#c41d7f","#9e1068","#780650","#520339"];y.primary=y[5];var g=["#a6a6a6","#999999","#8c8c8c","#808080","#737373","#666666","#404040","#1a1a1a","#000000","#000000"];g.primary=g[5];var x={red:t,volcano:c,orange:u,gold:b,yellow:i,lime:m,green:v,cyan:p,blue:h,geekblue:l,purple:s,magenta:y,grey:g};export{x as a,h as b,n as g,o as p};
