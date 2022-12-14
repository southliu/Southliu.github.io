import{_ as d,a as S,f as u}from"./@babel_runtime@7.20.6-0b96ec9f.js";function v(){return typeof BigInt=="function"}function l(i){var t=i.trim(),e=t.startsWith("-");e&&(t=t.slice(1)),t=t.replace(/(\.\d*[^0])0*$/,"$1").replace(/\.0*$/,"").replace(/^0+/,""),t.startsWith(".")&&(t="0".concat(t));var r=t||"0",n=r.split("."),a=n[0]||"0",c=n[1]||"0";a==="0"&&c==="0"&&(e=!1);var s=e?"-":"";return{negative:e,negativeStr:s,trimStr:r,integerStr:a,decimalStr:c,fullStr:"".concat(s).concat(r)}}function N(i){var t=String(i);return!Number.isNaN(Number(t))&&t.includes("e")}function h(i){var t=String(i);if(N(i)){var e=Number(t.slice(t.indexOf("e-")+2)),r=t.match(/\.(\d+)/);return r!=null&&r[1]&&(e+=r[1].length),e}return t.includes(".")&&b(t)?t.length-t.indexOf(".")-1:0}function y(i){var t=String(i);if(N(i)){if(i>Number.MAX_SAFE_INTEGER)return String(v()?BigInt(i).toString():Number.MAX_SAFE_INTEGER);if(i<Number.MIN_SAFE_INTEGER)return String(v()?BigInt(i).toString():Number.MIN_SAFE_INTEGER);t=i.toFixed(h(t))}return l(t).fullStr}function b(i){return typeof i=="number"?!Number.isNaN(i):i?/^\s*-?\d+(\.\d+)?\s*$/.test(i)||/^\s*-?\d+\.\s*$/.test(i)||/^\s*-?\.\d+\s*$/.test(i):!1}function E(i){return!i&&i!==0&&!Number.isNaN(i)||!String(i).trim()}var I=function(){function i(t){if(S(this,i),u(this,"origin",""),u(this,"number",void 0),u(this,"empty",void 0),E(t)){this.empty=!0;return}this.origin=String(t),this.number=Number(t)}return d(i,[{key:"negate",value:function(){return new i(-this.toNumber())}},{key:"add",value:function(e){if(this.isInvalidate())return new i(e);var r=Number(e);if(Number.isNaN(r))return this;var n=this.number+r;if(n>Number.MAX_SAFE_INTEGER)return new i(Number.MAX_SAFE_INTEGER);if(n<Number.MIN_SAFE_INTEGER)return new i(Number.MIN_SAFE_INTEGER);var a=Math.max(h(this.number),h(r));return new i(n.toFixed(a))}},{key:"isEmpty",value:function(){return this.empty}},{key:"isNaN",value:function(){return Number.isNaN(this.number)}},{key:"isInvalidate",value:function(){return this.isEmpty()||this.isNaN()}},{key:"equals",value:function(e){return this.toNumber()===(e==null?void 0:e.toNumber())}},{key:"lessEquals",value:function(e){return this.add(e.negate().toString()).toNumber()<=0}},{key:"toNumber",value:function(){return this.number}},{key:"toString",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return e?this.isInvalidate()?"":y(this.number):this.origin}}]),i}(),k=function(){function i(t){if(S(this,i),u(this,"origin",""),u(this,"negative",void 0),u(this,"integer",void 0),u(this,"decimal",void 0),u(this,"decimalLen",void 0),u(this,"empty",void 0),u(this,"nan",void 0),E(t)){this.empty=!0;return}if(this.origin=String(t),t==="-"||Number.isNaN(t)){this.nan=!0;return}var e=t;if(N(e)&&(e=Number(e)),e=typeof e=="string"?e:y(e),b(e)){var r=l(e);this.negative=r.negative;var n=r.trimStr.split(".");this.integer=BigInt(n[0]);var a=n[1]||"0";this.decimal=BigInt(a),this.decimalLen=a.length}else this.nan=!0}return d(i,[{key:"getMark",value:function(){return this.negative?"-":""}},{key:"getIntegerStr",value:function(){return this.integer.toString()}},{key:"getDecimalStr",value:function(){return this.decimal.toString().padStart(this.decimalLen,"0")}},{key:"alignDecimal",value:function(e){var r="".concat(this.getMark()).concat(this.getIntegerStr()).concat(this.getDecimalStr().padEnd(e,"0"));return BigInt(r)}},{key:"negate",value:function(){var e=new i(this.toString());return e.negative=!e.negative,e}},{key:"add",value:function(e){if(this.isInvalidate())return new i(e);var r=new i(e);if(r.isInvalidate())return this;var n=Math.max(this.getDecimalStr().length,r.getDecimalStr().length),a=this.alignDecimal(n),c=r.alignDecimal(n),s=(a+c).toString(),g=l(s),o=g.negativeStr,m=g.trimStr,f="".concat(o).concat(m.padStart(n+1,"0"));return new i("".concat(f.slice(0,-n),".").concat(f.slice(-n)))}},{key:"isEmpty",value:function(){return this.empty}},{key:"isNaN",value:function(){return this.nan}},{key:"isInvalidate",value:function(){return this.isEmpty()||this.isNaN()}},{key:"equals",value:function(e){return this.toString()===(e==null?void 0:e.toString())}},{key:"lessEquals",value:function(e){return this.add(e.negate().toString()).toNumber()<=0}},{key:"toNumber",value:function(){return this.isNaN()?NaN:Number(this.toString())}},{key:"toString",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return e?this.isInvalidate()?"":l("".concat(this.getMark()).concat(this.getIntegerStr(),".").concat(this.getDecimalStr())).fullStr:this.origin}}]),i}();function p(i){return v()?new k(i):new I(i)}function _(i,t,e){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;if(i==="")return"";var n=l(i),a=n.negativeStr,c=n.integerStr,s=n.decimalStr,g="".concat(t).concat(s),o="".concat(a).concat(c);if(e>=0){var m=Number(s[e]);if(m>=5&&!r){var f=p(i).add("".concat(a,"0.").concat("0".repeat(e)).concat(10-m));return _(f.toString(),t,e,r)}return e===0?o:"".concat(o).concat(t).concat(s.padEnd(e,"0").slice(0,e))}return g===".0"?o:"".concat(o).concat(g)}export{h as a,_ as b,p as g,y as n,l as t,b as v};
