(()=>{var e,t,a={370:(e,t,a)=>{var n=a(625),r=a(142);void 0===r.calendar&&(r.calendar=n),e.exports=n},395:(e,t,a)=>{var n=a(219),r=a(142);void 0===r.league&&(r.league=n),e.exports=n},142:(e,t,a)=>{"use strict";e.exports=function(){if("object"==typeof globalThis)return globalThis;var e;try{e=this||new Function("return this")()}catch(e){if("object"==typeof window)return window;if("object"==typeof self)return self;if(void 0!==a.g)return a.g}return e}()},232:(e,t,a)=>{"use strict";a.d(t,{Z:()=>r});var n=a(212);const r=(e="page not found")=>{document.querySelector(".current-element").innerHTML=e,(0,n.b)()}},625:(e,t,a)=>{"use strict";a.r(t),a.d(t,{createCalendar:()=>u,deleteCurrentMonth:()=>y,downMonth:()=>f,getCurrentDate:()=>p,setDate:()=>m,upMonth:()=>h});var n=a(212);let r,l=new Date,c=l.getDate(),o=l.getMonth()+1,s=o,i=l.getFullYear(),d=i;function u(e,t,a){let n=document.querySelector(".current-date"),r=document.querySelector(".day-container tbody"),l=new Date(t+"-"+e+"-01"),c=l.getDay(),s=[31,28,31,30,31,30,31,31,30,31,30,31],d=1,u=s[l.getMonth()],f=s[l.getMonth()-1],h=1;0==c&&(c=7),null==f&&(f=31);let y="";y+='<tr class="day" >',f=f-c+2;for(let n=1;n<=7;n++)c>n?(y+=`<td><span class="day-item day-out" onclick="calendar.setDate(false, ${e-1},${f})">${f}</span></td>`,f++):(y+=d===a&&e===o&&t===i?`<td><span class="day-item currentDate" onclick="calendar.setDate(false, ${e},${d})">${d}</span></td>`:`<td><span class="day-item" onclick="calendar.setDate(false, ${e},${d})">${d}</span></td>`,d++);y+="</tr>",y+='<tr class="day" >';for(let n=1;n<=7;n++)y+=d===a&&e===o&&t===i?`<td><span class="day-item currentDate" onclick="calendar.setDate(false, ${e},${d})">${d}</span></td>`:`<td><span class="day-item" onclick="calendar.setDate(false, ${e},${d})">${d}</span></td>`,d++;y+="</tr>",y+='<tr class="day" >';for(let n=1;n<=7;n++)y+=d===a&&e===o&&t===i?`<td><span class="day-item currentDate" onclick="calendar.setDate(false, ${e},${d})">${d}</span></td>`:`<td><span class="day-item" onclick="calendar.setDate(false, ${e},${d})">${d}</span></td>`,d++;y+="</tr>",y+='<tr class="day" >';for(let n=1;n<=7;n++)u>=d?(y+=d===a&&e===o&&t===i?`<td><span class="day-item currentDate" onclick="calendar.setDate(false, ${e},${d})">${d}</span></td>`:`<td><span class="day-item" onclick="calendar.setDate(false, ${e},${d})">${d}</span></td>`,d++):(y+=`<td><span class="day-item day-out" onclick="calendar.setDate(false, ${e+1},${h})">${h}</span></td>`,h++);y+="</tr>",y+='<tr class="day" >';for(let n=1;n<=7;n++)u>=d?(y+=d===a&&e===o&&t===i?`<td><span class="day-item currentDate" onclick="calendar.setDate(false, ${e},${d})">${d}</span></td>`:`<td><span class="day-item" onclick="calendar.setDate(false, ${e},${d})">${d}</span></td>`,d++):(y+=`<td><span class="day-item day-out" onclick="calendar.setDate(false, ${e+1},${h})">${h}</span></td>`,h++);y+="</tr>",y+='<tr class="day" >';for(let n=1;n<=7;n++)u>=d?(y+=d===a&&e===o&&t===i?`<td><span class="day-item currentDate" onclick="calendar.setDate(false, ${e},${d})">${d}</span></td>`:`<td><span class="day-item" onclick="calendar.setDate(false, ${e},${d})">${d}</span></td>`,d++):(y+=`<td><span class="day-item day-out" onclick="calendar.setDate(false, ${e+1},${h})">${h}</span></td>`,h++);y+="</tr>",n.innerHTML=["January","February","Mars","April","May","June","July","August","September","October","November","December"][e-1]+" "+t,document.querySelector("#icon-toggle-calendar").style.visibility="visible",r.insertAdjacentHTML("beforeend",y),document.querySelector("#close-calendar").addEventListener("click",(()=>{document.querySelector(".actual").style.top="-100%"}))}function f(){s--,s<1&&(d--,s=12),y(),u(s,d,c)}function h(){s++,s>12&&(d++,s=1),y(),u(s,d,c)}function y(){document.querySelectorAll(".day").forEach((e=>e.remove()))}function p(){return{currentYear:d,currentMonth:s,currentDate:c}}async function m(e=!1,t,l,u,f){let h=document.querySelector(".actual");h&&(h.style.top="-100%"),(0,n.V)(),void 0!==u&&(r=u),s=t,c=l,t>12?(s=1,d++):t<1&&(s=12,d--),o=s,i=d,(await a.e(776).then(a.bind(a,776))).listMatch(e,`${d}-${s}-${c}`,r,f)}},2:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>n});const n=e=>{console.log(e);let t=location.protocol+"//"+location.host+"#"+e;window.history.pushState(null,"",t),a.e(313).then(a.bind(a,313)).then((e=>e.clearIntervalInfoMatch())),Promise.all([a.e(313),a.e(114)]).then(a.bind(a,114)).then((e=>e.clearIntervalInfoLeague())),a.e(776).then(a.bind(a,776)).then((e=>e.clearIntervalListMatch())),Promise.all([a.e(313),a.e(785)]).then(a.bind(a,785)).then((e=>e.clearIntervalInfoTeam()))}},219:(e,t,a)=>{"use strict";let n;async function r(e,t){let r=new Date,l=r.getMonth()+1,c=r.getDate();n&&n.classList.remove("active"),t.classList.add("active"),document.querySelector(".league-container").style.left="-100%";let{listMatchToday:o}=await a.e(776).then(a.bind(a,776)),{setDate:s}=await Promise.resolve().then(a.bind(a,625));s(!1,l,c,e,o),n=t,window.scroll(0,0)}a.r(t),a.d(t,{getLeagueMatch:()=>r})},212:(e,t,a)=>{"use strict";a.d(t,{V:()=>r,b:()=>l});let n=document.querySelector(".animation");function r(){n.style.display="flex",n.classList.add("loading")}function l(){n.style.display="none",n.classList.remove("loading")}}},n={};function r(e){var t=n[e];if(void 0!==t)return t.exports;var l=n[e]={exports:{}};return a[e](l,l.exports,r),l.exports}r.m=a,r.d=(e,t)=>{for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,a)=>(r.f[a](e,t),t)),[])),r.u=e=>"js/"+e+"."+{63:"f4afde36",114:"fe524227",186:"adad7195",313:"e3546fe4",597:"b9f3c441",776:"797a74f2",785:"c81b42be"}[e]+".js",r.miniCssF=e=>{},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="Football score:",r.l=(a,n,l,c)=>{if(e[a])e[a].push(n);else{var o,s;if(void 0!==l)for(var i=document.getElementsByTagName("script"),d=0;d<i.length;d++){var u=i[d];if(u.getAttribute("src")==a||u.getAttribute("data-webpack")==t+l){o=u;break}}o||(s=!0,(o=document.createElement("script")).charset="utf-8",o.timeout=120,r.nc&&o.setAttribute("nonce",r.nc),o.setAttribute("data-webpack",t+l),o.src=a),e[a]=[n];var f=(t,n)=>{o.onerror=o.onload=null,clearTimeout(h);var r=e[a];if(delete e[a],o.parentNode&&o.parentNode.removeChild(o),r&&r.forEach((e=>e(n))),t)return t(n)},h=setTimeout(f.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=f.bind(null,o.onerror),o.onload=f.bind(null,o.onload),s&&document.head.appendChild(o)}},r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var a=t.getElementsByTagName("script");a.length&&(e=a[a.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e+"../"})(),(()=>{var e={179:0};r.f.j=(t,a)=>{var n=r.o(e,t)?e[t]:void 0;if(0!==n)if(n)a.push(n[2]);else{var l=new Promise(((a,r)=>n=e[t]=[a,r]));a.push(n[2]=l);var c=r.p+r.u(t),o=new Error;r.l(c,(a=>{if(r.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var l=a&&("load"===a.type?"missing":a.type),c=a&&a.target&&a.target.src;o.message="Loading chunk "+t+" failed.\n("+l+": "+c+")",o.name="ChunkLoadError",o.type=l,o.request=c,n[1](o)}}),"chunk-"+t,t)}};var t=(t,a)=>{var n,l,[c,o,s]=a,i=0;if(c.some((t=>0!==e[t]))){for(n in o)r.o(o,n)&&(r.m[n]=o[n]);if(s)s(r)}for(t&&t(a);i<c.length;i++)l=c[i],r.o(e,l)&&e[l]&&e[l][0](),e[l]=0},a=self.webpackChunkFootball_score=self.webpackChunkFootball_score||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})(),(()=>{"use strict";var e=r(212),t=(r(370),r(395),r(232));const a=a=>{let c=window.location.hash;if((0,e.V)(),r.e(186).then(r.bind(r,186)).then((e=>e.default())),r.e(313).then(r.bind(r,313)).then((e=>e.clearIntervalInfoMatch())),Promise.all([r.e(313),r.e(114)]).then(r.bind(r,114)).then((e=>e.clearIntervalInfoLeague())),r.e(776).then(r.bind(r,776)).then((e=>e.clearIntervalListMatch())),Promise.all([r.e(313),r.e(785)]).then(r.bind(r,785)).then((e=>e.clearIntervalInfoTeam())),0===c.length||"#"===c){let e=new Date;return void l(a,e.getMonth()+1,e.getDate(),0)}let o=c.slice(1,c.indexOf("/"));if(c=c.slice(c.indexOf("/")+1),"listgame"===o){let e=c.indexOf("&");if(e>0){let n=c.slice(0,e),r=c.slice(e+1);if(n=new Date(n),"Invalid Date"===n.toString()&&isNaN(r))return(0,t.Z)();l(a,n.getMonth()+1,n.getDate(),r)}else{if(c=new Date(c),"Invalid Date"===c.toString())return(0,t.Z)();l(a,c.getMonth()+1,c.getDate())}}else if("game"===o){let e=c.indexOf("/"),r=c.slice(0,e);c=c.slice(e+1),e=c.indexOf("/");let l=c.slice(0);if(isNaN(l))return(0,t.Z)();if("pregame"===r)n(a,l);else if("standing"===r)n(a,l,"standing");else{if("stats"!==r)return(0,t.Z)();n(a,l,"stats")}}else if("league"===o){if(!c.includes("l"))return(0,t.Z)();{let e=c.slice(1);if(isNaN(e))return(0,t.Z)();!async function(e,t){(await Promise.all([r.e(313),r.e(114)]).then(r.bind(r,114))).default(e,t)}(!0,c)}}else{if("team"!==o)return(0,t.Z)();{if(c=c.split("&"),2!==c.length)return(0,t.Z)("team not found");let e=!0;c.forEach((t=>{if(isNaN(t))return e=!1})),e?async function(e,t,a){(await Promise.all([r.e(313),r.e(785)]).then(r.bind(r,785))).default(e,t,a)}(a,...c):(0,t.Z)("team not found")}}};async function n(e,t,a){(await r.e(313).then(r.bind(r,313))).default(e,t,a)}async function l(e,t,a,n){(await Promise.resolve().then(r.bind(r,625))).setDate(e,t,a,n)}var c=r(2);(0,e.V)(),(()=>{let e=document.querySelector("#icon-toggle-calendar"),t=document.querySelector("#icon-toggle-league"),a=document.querySelector("#close-league"),n=document.querySelector(".league-container"),r=document.querySelector(".match-container"),l=document.querySelector(".search-container"),c=document.querySelector("#search");e.addEventListener("click",(()=>{document.querySelector(".actual").style.top="0"})),t.addEventListener("click",(()=>{n.style.left="0",r.style.display="none"})),a.addEventListener("click",(()=>{n.style.left="-100%",r.style.display="block"})),document.querySelector(".search-container").addEventListener("click",(()=>{l.style.overflow="visible",c.style.top="26px"})),window.onclick=e=>{e.target.matches("#icon-search")||e.target.matches("#search")||e.target.matches(".search-container")||(c.style.top="-29px",setTimeout((()=>{l.style.overflow="hidden"}),200))}})(),a(!1),window.onpopstate=t=>{(0,e.V)(),a(!0),r.e(313).then(r.bind(r,313)).then((e=>e.clearIntervalInfoMatch())),Promise.all([r.e(313),r.e(114)]).then(r.bind(r,114)).then((e=>e.clearIntervalInfoLeague())),r.e(776).then(r.bind(r,776)).then((e=>e.clearIntervalListMatch()))},document.querySelector(".nav-bar .logo").addEventListener("click",(()=>{(0,c.default)(""),a(!1)}))})()})();
//# sourceMappingURL=main.5f8e223b.js.map