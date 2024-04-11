"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[682],{4734:function(e,t,n){t.Z=function(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=function e(t){var n,i,r="";if("string"==typeof t||"number"==typeof t)r+=t;else if("object"==typeof t){if(Array.isArray(t))for(n=0;n<t.length;n++)t[n]&&(i=e(t[n]))&&(r&&(r+=" "),r+=i);else for(n in t)t[n]&&(r&&(r+=" "),r+=n)}return r}(e))&&(i&&(i+=" "),i+=t);return i}},7948:function(e,t,n){let i;n.d(t,{JO:function(){return ev}});var r=n(2265);let o=/^[a-z0-9]+(-[a-z0-9]+)*$/,l=(e,t,n,i="")=>{let r=e.split(":");if("@"===e.slice(0,1)){if(r.length<2||r.length>3)return null;i=r.shift().slice(1)}if(r.length>3||!r.length)return null;if(r.length>1){let e=r.pop(),n=r.pop(),o={provider:r.length>0?r[0]:i,prefix:n,name:e};return t&&!a(o)?null:o}let o=r[0],l=o.split("-");if(l.length>1){let e={provider:i,prefix:l.shift(),name:l.join("-")};return t&&!a(e)?null:e}if(n&&""===i){let e={provider:i,prefix:"",name:o};return t&&!a(e,n)?null:e}return null},a=(e,t)=>!!e&&!!((""===e.provider||e.provider.match(o))&&(t&&""===e.prefix||e.prefix.match(o))&&e.name.match(o)),s=Object.freeze({left:0,top:0,width:16,height:16}),c=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),f=Object.freeze({...s,...c}),u=Object.freeze({...f,body:"",hidden:!1});function d(e,t){let n=function(e,t){let n={};!e.hFlip!=!t.hFlip&&(n.hFlip=!0),!e.vFlip!=!t.vFlip&&(n.vFlip=!0);let i=((e.rotate||0)+(t.rotate||0))%4;return i&&(n.rotate=i),n}(e,t);for(let i in u)i in c?i in e&&!(i in n)&&(n[i]=c[i]):i in t?n[i]=t[i]:i in e&&(n[i]=e[i]);return n}function p(e,t){let n=[];if("object"!=typeof e||"object"!=typeof e.icons)return n;e.not_found instanceof Array&&e.not_found.forEach(e=>{t(e,null),n.push(e)});let i=function(e,t){let n=e.icons,i=e.aliases||Object.create(null),r=Object.create(null);return Object.keys(n).concat(Object.keys(i)).forEach(function e(t){if(n[t])return r[t]=[];if(!(t in r)){r[t]=null;let n=i[t]&&i[t].parent,o=n&&e(n);o&&(r[t]=[n].concat(o))}return r[t]}),r}(e);for(let r in i){let o=i[r];o&&(t(r,function(e,t,n){let i=e.icons,r=e.aliases||Object.create(null),o={};function l(e){o=d(i[e]||r[e],o)}return l(t),n.forEach(l),d(e,o)}(e,r,o)),n.push(r))}return n}let h={provider:"",aliases:{},not_found:{},...s};function g(e,t){for(let n in t)if(n in e&&typeof e[n]!=typeof t[n])return!1;return!0}function m(e){if("object"!=typeof e||null===e||"string"!=typeof e.prefix||!e.icons||"object"!=typeof e.icons||!g(e,h))return null;let t=e.icons;for(let e in t){let n=t[e];if(!e.match(o)||"string"!=typeof n.body||!g(n,u))return null}let n=e.aliases||Object.create(null);for(let e in n){let i=n[e],r=i.parent;if(!e.match(o)||"string"!=typeof r||!t[r]&&!n[r]||!g(i,u))return null}return e}let y=Object.create(null);function b(e,t){let n=y[e]||(y[e]=Object.create(null));return n[t]||(n[t]={provider:e,prefix:t,icons:Object.create(null),missing:new Set})}function v(e,t){return m(t)?p(t,(t,n)=>{n?e.icons[t]=n:e.missing.add(t)}):[]}let x=!1;function w(e){return"boolean"==typeof e&&(x=e),x}let k=Object.freeze({width:null,height:null}),j=Object.freeze({...k,...c}),_=/(-?[0-9.]*[0-9]+[0-9.]*)/g,S=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function E(e,t,n){if(1===t)return e;if(n=n||100,"number"==typeof e)return Math.ceil(e*t*n)/n;if("string"!=typeof e)return e;let i=e.split(_);if(null===i||!i.length)return e;let r=[],o=i.shift(),l=S.test(o);for(;;){if(l){let e=parseFloat(o);isNaN(e)?r.push(o):r.push(Math.ceil(e*t*n)/n)}else r.push(o);if(void 0===(o=i.shift()))return r.join("");l=!l}}let O=e=>"unset"===e||"undefined"===e||"none"===e,M=/\sid="(\S+)"/g,I="IconifyId"+Date.now().toString(16)+(16777216*Math.random()|0).toString(16),L=0,C=Object.create(null);function F(e){return C[e]||C[""]}function T(e){let t;if("string"==typeof e.resources)t=[e.resources];else if(!((t=e.resources)instanceof Array)||!t.length)return null;return{resources:t,path:e.path||"/",maxURL:e.maxURL||500,rotate:e.rotate||750,timeout:e.timeout||5e3,random:!0===e.random,index:e.index||0,dataAfterTimeout:!1!==e.dataAfterTimeout}}let D=Object.create(null),N=["https://api.simplesvg.com","https://api.unisvg.com"],z=[];for(;N.length>0;)1===N.length?z.push(N.shift()):Math.random()>.5?z.push(N.shift()):z.push(N.pop());D[""]=T({resources:["https://api.iconify.design"].concat(z)});let A=(()=>{let e;try{if(e=fetch,"function"==typeof e)return e}catch(e){}})();function R(e,t){e.forEach(e=>{let n=e.loaderCallbacks;n&&(e.loaderCallbacks=n.filter(e=>e.id!==t))})}let P=0;var U={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function $(e){let t={...U,...e},n=[];function i(){n=n.filter(e=>"pending"===e().status)}return{query:function(e,r,o){let l=function(e,t,n,i){let r,o;let l=e.resources.length,a=e.random?Math.floor(Math.random()*l):e.index;if(e.random){let t=e.resources.slice(0);for(r=[];t.length>1;){let e=Math.floor(Math.random()*t.length);r.push(t[e]),t=t.slice(0,e).concat(t.slice(e+1))}r=r.concat(t)}else r=e.resources.slice(a).concat(e.resources.slice(0,a));let s=Date.now(),c="pending",f=0,u=null,d=[],p=[];function h(){u&&(clearTimeout(u),u=null)}function g(){"pending"===c&&(c="aborted"),h(),d.forEach(e=>{"pending"===e.status&&(e.status="aborted")}),d=[]}function m(e,t){t&&(p=[]),"function"==typeof e&&p.push(e)}function y(){c="failed",p.forEach(e=>{e(void 0,o)})}function b(){d.forEach(e=>{"pending"===e.status&&(e.status="aborted")}),d=[]}return"function"==typeof i&&p.push(i),setTimeout(function i(){if("pending"!==c)return;h();let l=r.shift();if(void 0===l){if(d.length){u=setTimeout(()=>{h(),"pending"===c&&(b(),y())},e.timeout);return}y();return}let a={status:"pending",resource:l,callback:(t,n)=>{!function(t,n,l){let a="success"!==n;switch(d=d.filter(e=>e!==t),c){case"pending":break;case"failed":if(a||!e.dataAfterTimeout)return;break;default:return}if("abort"===n){o=l,y();return}if(a){o=l,d.length||(r.length?i():y());return}if(h(),b(),!e.random){let n=e.resources.indexOf(t.resource);-1!==n&&n!==e.index&&(e.index=n)}c="completed",p.forEach(e=>{e(l)})}(a,t,n)}};d.push(a),f++,u=setTimeout(i,e.rotate),n(l,t,a.callback)}),function(){return{startTime:s,payload:t,status:c,queriesSent:f,queriesPending:d.length,subscribe:m,abort:g}}}(t,e,r,(e,t)=>{i(),o&&o(e,t)});return n.push(l),l},find:function(e){return n.find(t=>e(t))||null},setIndex:e=>{t.index=e},getIndex:()=>t.index,cleanup:i}}let H=Object.create(null),q="iconify2",J="iconify",Q=J+"-count",W=J+"-version";function B(e,t){try{return e.getItem(t)}catch(e){}}function X(e,t,n){try{return e.setItem(t,n),!0}catch(e){}}function Z(e,t){try{e.removeItem(t)}catch(e){}}function G(e,t){return X(e,Q,t.toString())}function K(e){return parseInt(B(e,Q))||0}let V={local:!0,session:!0},Y={local:new Set,session:new Set},ee=!1,et="undefined"==typeof window?{}:window;function en(e){let t=e+"Storage";try{if(et&&et[t]&&"number"==typeof et[t].length)return et[t]}catch(e){}V[e]=!1}function ei(e,t){let n=en(e);if(!n)return;let i=B(n,W);if(i!==q){if(i){let e=K(n);for(let t=0;t<e;t++)Z(n,J+t.toString())}X(n,W,q),G(n,0);return}let r=Math.floor(Date.now()/36e5)-168,o=e=>{let i=J+e.toString(),o=B(n,i);if("string"==typeof o){try{let n=JSON.parse(o);if("object"==typeof n&&"number"==typeof n.cached&&n.cached>r&&"string"==typeof n.provider&&"object"==typeof n.data&&"string"==typeof n.data.prefix&&t(n,e))return!0}catch(e){}Z(n,i)}},l=K(n);for(let t=l-1;t>=0;t--)o(t)||(t===l-1?G(n,--l):Y[e].add(t))}function er(){if(!ee)for(let e in ee=!0,V)ei(e,e=>{let t=e.data,n=b(e.provider,t.prefix);if(!v(n,t).length)return!1;let i=t.lastModified||-1;return n.lastModifiedCached=n.lastModifiedCached?Math.min(n.lastModifiedCached,i):i,!0})}function eo(){}let el=(e,t)=>{let n,i;let r=function(e){let t={loaded:[],missing:[],pending:[]},n=Object.create(null);e.sort((e,t)=>e.provider!==t.provider?e.provider.localeCompare(t.provider):e.prefix!==t.prefix?e.prefix.localeCompare(t.prefix):e.name.localeCompare(t.name));let i={provider:"",prefix:"",name:""};return e.forEach(e=>{if(i.name===e.name&&i.prefix===e.prefix&&i.provider===e.provider)return;i=e;let r=e.provider,o=e.prefix,l=e.name,a=n[r]||(n[r]=Object.create(null)),s=a[o]||(a[o]=b(r,o));(l in s.icons?t.loaded:""===o||s.missing.has(l)?t.missing:t.pending).push({provider:r,prefix:o,name:l})}),t}(function(e,t=!0,n=!1){let i=[];return e.forEach(e=>{let r="string"==typeof e?l(e,t,n):e;r&&i.push(r)}),i}(e,!0,w()));if(!r.pending.length){let e=!0;return t&&setTimeout(()=>{e&&t(r.loaded,r.missing,r.pending,eo)}),()=>{e=!1}}let o=Object.create(null),a=[];return r.pending.forEach(e=>{let{provider:t,prefix:r}=e;if(r===i&&t===n)return;n=t,i=r,a.push(b(t,r));let l=o[t]||(o[t]=Object.create(null));l[r]||(l[r]=[])}),r.pending.forEach(e=>{let{provider:t,prefix:n,name:i}=e,r=b(t,n),l=r.pendingIcons||(r.pendingIcons=new Set);l.has(i)||(l.add(i),o[t][n].push(i))}),a.forEach(e=>{let{provider:t,prefix:n}=e;if(o[t][n].length){var i;i=o[t][n],e.iconsToLoad?e.iconsToLoad=e.iconsToLoad.concat(i).sort():e.iconsToLoad=i,e.iconsQueueFlag||(e.iconsQueueFlag=!0,setTimeout(()=>{let t;e.iconsQueueFlag=!1;let{provider:n,prefix:i}=e,r=e.iconsToLoad;delete e.iconsToLoad,r&&(t=F(n))&&t.prepare(n,i,r).forEach(t=>{!function(e,t,n){let i,r;if("string"==typeof e){let t=F(e);if(!t)return n(void 0,424);r=t.send;let o=function(e){if(!H[e]){let t=D[e];if(!t)return;let n=$(t);H[e]={config:t,redundancy:n}}return H[e]}(e);o&&(i=o.redundancy)}else{let t=T(e);if(t){i=$(t);let n=F(e.resources?e.resources[0]:"");n&&(r=n.send)}}i&&r?i.query(t,r,n)().abort:n(void 0,424)}(n,t,n=>{if("object"!=typeof n)t.icons.forEach(t=>{e.missing.add(t)});else try{let t=v(e,n);if(!t.length)return;let i=e.pendingIcons;i&&t.forEach(e=>{i.delete(e)}),function(e,t){function n(n){let i,r;if(!V[n]||!(i=en(n)))return;let o=Y[n];if(o.size)o.delete(r=Array.from(o).shift());else if(r=K(i),!G(i,r+1))return;let l={cached:Math.floor(Date.now()/36e5),provider:e.provider,data:t};return X(i,J+r.toString(),JSON.stringify(l))}ee||er(),(!t.lastModified||function(e,t){let n=e.lastModifiedCached;if(n&&n>=t)return n===t;if(e.lastModifiedCached=t,n)for(let n in V)ei(n,n=>{let i=n.data;return n.provider!==e.provider||i.prefix!==e.prefix||i.lastModified===t});return!0}(e,t.lastModified))&&Object.keys(t.icons).length&&(t.not_found&&(t=Object.assign({},t),delete t.not_found),n("local")||n("session"))}(e,n)}catch(e){console.error(e)}e.iconsLoaderFlag||(e.iconsLoaderFlag=!0,setTimeout(()=>{e.iconsLoaderFlag=!1,e.pendingCallbacksFlag||(e.pendingCallbacksFlag=!0,setTimeout(()=>{e.pendingCallbacksFlag=!1;let t=e.loaderCallbacks?e.loaderCallbacks.slice(0):[];if(!t.length)return;let n=!1,i=e.provider,r=e.prefix;t.forEach(t=>{let o=t.icons,l=o.pending.length;o.pending=o.pending.filter(t=>{if(t.prefix!==r)return!0;let l=t.name;if(e.icons[l])o.loaded.push({provider:i,prefix:r,name:l});else{if(!e.missing.has(l))return n=!0,!0;o.missing.push({provider:i,prefix:r,name:l})}return!1}),o.pending.length!==l&&(n||R([e],t.id),t.callback(o.loaded.slice(0),o.missing.slice(0),o.pending.slice(0),t.abort))})}))}))})})}))}}),t?function(e,t,n){let i=P++,r=R.bind(null,n,i);if(!t.pending.length)return r;let o={id:i,icons:t,callback:e,abort:r};return n.forEach(e=>{(e.loaderCallbacks||(e.loaderCallbacks=[])).push(o)}),r}(t,r,a):eo},ea=/[\s,]+/,es={...j,inline:!1},ec={xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},ef={display:"inline-block"},eu={backgroundColor:"currentColor"},ed={backgroundColor:"transparent"},ep={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},eh={WebkitMask:eu,mask:eu,background:ed};for(let e in eh){let t=eh[e];for(let n in ep)t[e+n]=ep[n]}let eg={...es,inline:!0};function em(e){return e+(e.match(/^[-0-9.]+$/)?"px":"")}let ey=(e,t,n,o)=>{let l=n?eg:es,a=function(e,t){let n={...e};for(let e in t){let i=t[e],r=typeof i;e in k?(null===i||i&&("string"===r||"number"===r))&&(n[e]=i):r===typeof n[e]&&(n[e]="rotate"===e?i%4:i)}return n}(l,t),s=t.mode||"svg",c={},u=t.style||{},d={..."svg"===s?ec:{},ref:o};for(let e in t){let n=t[e];if(void 0!==n)switch(e){case"icon":case"style":case"children":case"onLoad":case"mode":case"_ref":case"_inline":break;case"inline":case"hFlip":case"vFlip":a[e]=!0===n||"true"===n||1===n;break;case"flip":"string"==typeof n&&function(e,t){t.split(ea).forEach(t=>{switch(t.trim()){case"horizontal":e.hFlip=!0;break;case"vertical":e.vFlip=!0}})}(a,n);break;case"color":c.color=n;break;case"rotate":"string"==typeof n?a[e]=function(e,t=0){let n=e.replace(/^-?[0-9.]*/,"");function i(e){for(;e<0;)e+=4;return e%4}if(""===n){let t=parseInt(e);return isNaN(t)?0:i(t)}if(n!==e){let t=0;switch(n){case"%":t=25;break;case"deg":t=90}if(t){let r=parseFloat(e.slice(0,e.length-n.length));return isNaN(r)?0:(r/=t)%1==0?i(r):0}}return t}(n):"number"==typeof n&&(a[e]=n);break;case"ariaHidden":case"aria-hidden":!0!==n&&"true"!==n&&delete d["aria-hidden"];break;default:void 0===l[e]&&(d[e]=n)}}let p=function(e,t){let n,i;let r={...f,...e},o={...j,...t},l={left:r.left,top:r.top,width:r.width,height:r.height},a=r.body;[r,o].forEach(e=>{let t;let n=[],i=e.hFlip,r=e.vFlip,o=e.rotate;switch(i?r?o+=2:(n.push("translate("+(l.width+l.left).toString()+" "+(0-l.top).toString()+")"),n.push("scale(-1 1)"),l.top=l.left=0):r&&(n.push("translate("+(0-l.left).toString()+" "+(l.height+l.top).toString()+")"),n.push("scale(1 -1)"),l.top=l.left=0),o<0&&(o-=4*Math.floor(o/4)),o%=4){case 1:n.unshift("rotate(90 "+(t=l.height/2+l.top).toString()+" "+t.toString()+")");break;case 2:n.unshift("rotate(180 "+(l.width/2+l.left).toString()+" "+(l.height/2+l.top).toString()+")");break;case 3:n.unshift("rotate(-90 "+(t=l.width/2+l.left).toString()+" "+t.toString()+")")}o%2==1&&(l.left!==l.top&&(t=l.left,l.left=l.top,l.top=t),l.width!==l.height&&(t=l.width,l.width=l.height,l.height=t)),n.length&&(a='<g transform="'+n.join(" ")+'">'+a+"</g>")});let s=o.width,c=o.height,u=l.width,d=l.height;null===s?n=E(i=null===c?"1em":"auto"===c?d:c,u/d):(n="auto"===s?u:s,i=null===c?E(n,d/u):"auto"===c?d:c);let p={},h=(e,t)=>{O(t)||(p[e]=t.toString())};return h("width",n),h("height",i),p.viewBox=l.left.toString()+" "+l.top.toString()+" "+u.toString()+" "+d.toString(),{attributes:p,body:a}}(e,a),h=p.attributes;if(a.inline&&(c.verticalAlign="-0.125em"),"svg"===s){var g;d.style={...c,...u},Object.assign(d,h);let e=0,n=t.id;return"string"==typeof n&&(n=n.replace(/-/g,"_")),d.dangerouslySetInnerHTML={__html:(g=function(e,t=I){let n;let i=[];for(;n=M.exec(e);)i.push(n[1]);if(!i.length)return e;let r="suffix"+(16777216*Math.random()|Date.now()).toString(16);return i.forEach(n=>{let i="function"==typeof t?t(n):t+(L++).toString(),o=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");e=e.replace(RegExp('([#;"])('+o+')([")]|\\.[a-z])',"g"),"$1"+i+r+"$3")}),e=e.replace(RegExp(r,"g"),"")}(p.body,n?()=>n+"ID"+e++:"iconifyReact"),void 0===i&&function(){try{i=window.trustedTypes.createPolicy("iconify",{createHTML:e=>e})}catch(e){i=null}}(),i?i.createHTML(g):g)},r.createElement("svg",d)}let{body:m,width:y,height:b}=e,v="mask"===s||"bg"!==s&&-1!==m.indexOf("currentColor"),x=function(e,t){let n=-1===e.indexOf("xlink:")?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(let e in t)n+=" "+e+'="'+t[e]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+e+"</svg>"}(m,{...h,width:y+"",height:b+""});return d.style={...c,"--svg":'url("data:image/svg+xml,'+x.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")+'")',width:em(h.width),height:em(h.height),...ef,...v?eu:ed,...u},r.createElement("span",d)};if(w(!0),C[""]={prepare:(e,t,n)=>{let i=[],r=function(e,t){let n;let i=D[e];if(!i)return 0;if(i.maxURL){let e=0;i.resources.forEach(t=>{e=Math.max(e,t.length)}),n=i.maxURL-e-i.path.length-(t+".json?icons=").length}else n=0;return n}(e,t),o="icons",l={type:o,provider:e,prefix:t,icons:[]},a=0;return n.forEach((n,s)=>{(a+=n.length+1)>=r&&s>0&&(i.push(l),l={type:o,provider:e,prefix:t,icons:[]},a=n.length),l.icons.push(n)}),i.push(l),i},send:(e,t,n)=>{if(!A){n("abort",424);return}let i=function(e){if("string"==typeof e){let t=D[e];if(t)return t.path}return"/"}(t.provider);switch(t.type){case"icons":{let e=t.prefix,n=t.icons.join(",");i+=e+".json?"+new URLSearchParams({icons:n}).toString();break}case"custom":{let e=t.uri;i+="/"===e.slice(0,1)?e.slice(1):e;break}default:n("abort",400);return}let r=503;A(e+i).then(e=>{let t=e.status;if(200!==t){setTimeout(()=>{n(404===t?"abort":"next",t)});return}return r=501,e.json()}).then(e=>{if("object"!=typeof e||null===e){setTimeout(()=>{404===e?n("abort",e):n("next",r)});return}setTimeout(()=>{n("success",e)})}).catch(()=>{n("next",r)})}},"undefined"!=typeof document&&"undefined"!=typeof window){er();let e=window;if(void 0!==e.IconifyPreload){let t=e.IconifyPreload,n="Invalid IconifyPreload syntax.";"object"==typeof t&&null!==t&&(t instanceof Array?t:[t]).forEach(e=>{try{("object"!=typeof e||null===e||e instanceof Array||"object"!=typeof e.icons||"string"!=typeof e.prefix||!function(e,t){if("object"!=typeof e)return!1;if("string"!=typeof t&&(t=e.provider||""),x&&!t&&!e.prefix){let t=!1;return m(e)&&(e.prefix="",p(e,(e,n)=>{n&&function(e,t){let n=l(e,!0,x);return!!n&&function(e,t,n){try{if("string"==typeof n.body)return e.icons[t]={...n},!0}catch(e){}return!1}(b(n.provider,n.prefix),n.name,t)}(e,n)&&(t=!0)})),t}let n=e.prefix;return!!a({provider:t,prefix:n,name:"a"})&&!!v(b(t,n),e)}(e))&&console.error(n)}catch(e){console.error(n)}})}if(void 0!==e.IconifyProviders){let t=e.IconifyProviders;if("object"==typeof t&&null!==t)for(let e in t){let n="IconifyProviders["+e+"] is invalid.";try{let i=t[e];if("object"!=typeof i||!i||void 0===i.resources)continue;!function(e,t){let n=T(t);return null!==n&&(D[e]=n,!0)}(e,i)&&console.error(n)}catch(e){console.error(n)}}}}class eb extends r.Component{constructor(e){super(e),this.state={icon:null}}_abortLoading(){this._loading&&(this._loading.abort(),this._loading=null)}_setData(e){this.state.icon!==e&&this.setState({icon:e})}_checkIcon(e){let t;let n=this.state,i=this.props.icon;if("object"==typeof i&&null!==i&&"string"==typeof i.body){this._icon="",this._abortLoading(),(e||null===n.icon)&&this._setData({data:i});return}if("string"!=typeof i||null===(t=l(i,!1,!0))){this._abortLoading(),this._setData(null);return}let r=function(e){let t="string"==typeof e?l(e,!0,x):e;if(t){let e=b(t.provider,t.prefix),n=t.name;return e.icons[n]||(e.missing.has(n)?null:void 0)}}(t);if(!r){this._loading&&this._loading.name===i||(this._abortLoading(),this._icon="",this._setData(null),null!==r&&(this._loading={name:i,abort:el([t],this._checkIcon.bind(this,!1))}));return}if(this._icon!==i||null===n.icon){this._abortLoading(),this._icon=i;let e=["iconify"];""!==t.prefix&&e.push("iconify--"+t.prefix),""!==t.provider&&e.push("iconify--"+t.provider),this._setData({data:r,classes:e}),this.props.onLoad&&this.props.onLoad(i)}}componentDidMount(){this._checkIcon(!1)}componentDidUpdate(e){e.icon!==this.props.icon&&this._checkIcon(!0)}componentWillUnmount(){this._abortLoading()}render(){let e=this.props,t=this.state.icon;if(null===t)return e.children?e.children:r.createElement("span",{});let n=e;return t.classes&&(n={...e,className:("string"==typeof e.className?e.className+" ":"")+t.classes.join(" ")}),ey({...f,...t.data},n,e._inline,e._ref)}}let ev=r.forwardRef(function(e,t){let n={...e,_ref:t,_inline:!1};return r.createElement(eb,n)});r.forwardRef(function(e,t){let n={...e,_ref:t,_inline:!0};return r.createElement(eb,n)})}}]);