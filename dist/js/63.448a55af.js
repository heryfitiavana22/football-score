"use strict";(self.webpackChunkFootball_score=self.webpackChunkFootball_score||[]).push([[63,186],{84:(e,a,n)=>{function t(e){let a=new Date(e);return a.getFullYear()+"-"+(a.getMonth()+1)+"-"+a.getDate()}function i(e=new Date){let a=new Date(e);return a.getMonth()+1>=8?a.getFullYear()+"-08-01":a.getFullYear()-1+"-08-01"}function s(e=new Date){let a=new Date(e);return a.getMonth()+1>=8?a.getFullYear()+1+"-07-01":a.getFullYear()+"-07-01"}n.d(a,{Cx:()=>s,EP:()=>t,PD:()=>i})},33:(e,a,n)=>{n.d(a,{Z:()=>o});var t=n(526),i=n(84);let s=(0,t.N)(),l=(0,t.Z)();const o=async(e,a=e,n=0,t=0)=>await new Promise(((o,r)=>{let u=`https://apiv3.apifootball.com/?action=get_events&from=${(0,i.EP)(e)}&to=${(0,i.EP)(a)}&APIkey=aeb8cfee1fe2069ff47ef42ad13a32ab605910fd7267a6cd39538190d1b705be&timezone=Africa/Nairobi`;n>0&&(u+=`&league_id=${n}`),t>0&&(u+=`&team_id=${t}`),fetch(u,{method:"get"}).then((e=>e.json())).then((e=>{if(e.error)return o([]);let a=e.filter((e=>l.includes(e.country_name)&&s.includes(e.league_name)));a.sort(((e,a)=>new Date(`${e.match_date} ${e.match_time}`)-new Date(`${a.match_date} ${a.match_time}`))),o(a)})).catch((e=>console.log(e)))}))},114:(e,a,n)=>{n.r(a),n.d(a,{clearIntervalInfoLeague:()=>f,default:()=>m});var t=n(721);var i=n(33);var s=n(587);var l=n(84),o=n(337),r=n(186),u=n(212),d=n(2),g=n(232);let c,p;const m=async(e,a)=>{window.scroll(0,0),(0,u.V)(),e||(0,d.default)(`league/${a}`),a=a.slice(1);let n=[],m=[],f=[],h=[];(async e=>await new Promise(((a,n)=>{fetch(`https://apiv3.apifootball.com/?action=get_topscorers&league_id=${e}&APIkey=aeb8cfee1fe2069ff47ef42ad13a32ab605910fd7267a6cd39538190d1b705be`,{method:"get"}).then((e=>e.json())).then((e=>{a(e.error?[]:e)}))})))(a).then((e=>h=e)),(0,i.Z)((0,l.PD)(),new Date,a).then((e=>{m=e})),(0,i.Z)(new Date,(0,l.Cx)(),a).then((e=>n=e)),f=await(0,t.Z)(a);let v=(0,r.getLeagues)().filter((e=>e.league_id==a));if(0===v.length)return(0,g.Z)("league not found");v=v[0],(e=>{let a=document.querySelector(".current-element"),n=`<div class="info-league info">\n        <div class="country-league">\n            <div class="country">\n                <img src="${e.country_logo}" alt="icon-country" onerror="this.src = 'assets/img/logo2.png'">\n                <span>${e.country_name}</span>\n            </div>\n            <div class="league">\n                <img src="${e.league_logo}" alt="icon-league" onerror="this.src = 'assets/img/logo2.png'">\n                <div>\n                    <span class="name">${e.league_name}</span>\n                    <span class="season">${e.league_season}</span>\n                </div>\n            </div>\n        </div>\n        <ul class="nav-league nav-info">\n            <li class="active" id="standing">Standing</li> \n            <li id="calendar">Calendar</li>\n            <li id="result">Results</li>\n            <li id="scorer">Scorer</li> \n        </ul>\n        <div class="current-item">\n            \n        </div>\n    </div>`;a.innerHTML=n;let t=document.querySelector("#icon-toggle-calendar");t&&(t.style.visibility="hidden")})(v),p=(0,o.Z)(f),document.querySelector(".nav-league").addEventListener("click",(e=>{let a=e.target.id;p="result"===a?(0,s.Z)(m,"result"):"standing"===a?(0,o.Z)(f):"scorer"===a?(e=>{let a='<table class="standing-container top-scorer">\n        <tr class="head-table">\n            <td class="player-td">Player</td>\n            <td class="team-player">Team</td>\n            <td>Goals</td>\n            <td>Assists</td>\n            <td>Penalty </td>\n        </tr>';for(let n of e)a+=`<tr class="item-container">\n            <td class="player-td">\n                <span class="number">${n.player_place}</span>\n                <span class="name">${n.player_name}</span>\n            </td>\n            <td class="team-player">\n                <span class="name">${n.team_name}</span>\n            </td>\n            <td>${n.goals} <span class="caption-td">goals<span></td>\n            <td>${n.assists?n.assists:0} <span class="caption-td">assists<span></td>\n            <td>${n.penalty_goals?n.penalty_goals:0} <span class="caption-td">penalty<span></td>\n        </tr>`;return a+="</table>",document.querySelector(".current-item").innerHTML=a,document.querySelector(".info-league .active").classList.remove("active"),document.querySelector(".info-league #scorer").classList.add("active"),"scorer"})(h):(0,s.Z)(n,"calendar","ASC")}));let x=document.querySelector(".list-league li.active");x&&x.classList.remove("active"),(0,u.b)(),c=setInterval((async()=>{"calendar"===p?(p=(0,s.Z)(n,"calendar"),n=await(0,i.Z)(new Date,(0,l.Cx)(),a),"calendar"===p&&(p=(0,s.Z)(n,"calendar","ASC"))):"result"===p&&(p=(0,s.Z)(m,"result"),m=await(0,i.Z)((0,l.PD)(),new Date,a),"result"===p&&(p=(0,s.Z)(m,"result")))}),55e3)};function f(){clearInterval(c),p=void 0}},186:(e,a,n)=>{n.r(a),n.d(a,{default:()=>u,getLeagues:()=>d});var t=n(526),i=n(852);let s=document.querySelector(".list-league"),l=(0,t.Z)(),o=(0,t.N)();l=l.split(","),o=o.split(",");let r=[];const u=async()=>{fetch("https://apiv3.apifootball.com/?action=get_leagues&APIkey=aeb8cfee1fe2069ff47ef42ad13a32ab605910fd7267a6cd39538190d1b705be",{method:"get"}).then((e=>e.json())).then((e=>{r=e.filter((e=>l.includes(e.country_name)&&o.includes(e.league_name)));let a=r.map((e=>e.league_id)),n=(0,i.up)(a),t=(0,i.Pn)(a),u=1;for(let e of t)r[e.index].league_logo=e.photo;let d=[];for(let e of n)r[e.index].number=u,r[e.index].league_logo=e.photo,d.push(r[e.index]),u++;let g=[];for(let e of r)e.number||g.push(e);g.sort(((e,a)=>e.country_id-a.country_id)),r=[...d,...g];let c="";for(let e of r)c+=`<li class="list-item kk${e.league_id}" id="${e.league_id}" onclick="league.getLeagueMatch(${e.league_id}, this)">\n                    <img src="${e.league_logo}" alt="icon-league" id="${e.league_id}" onerror="this.src = 'assets/img/logo2.png'">\n                    <span id="${e.league_id}">${e.league_name}\n                        <span class="line-list" id="${e.league_id}"></span>\n                    </span>\n                </li>`;s.innerHTML=c})).catch((e=>console.log(e)))};function d(){return r}},526:(e,a,n)=>{function t(){return"England,Belgium,Germany,Croatia,Spain,Czech Republic,France,Romania,Bulgaria,Italy,intl,eurocups,South Africa,Qatar,Worldcup,USA,Denmark,Norway,Sweden,Korea Republic,Netherlands,Mexico,Argentina,Portugal,Russia,Brazil,Switzerland,Brazil,Morocco"}function i(){return"Championship,Community Shield,FA Cup,League Cup,League One,Premier League,EFL Trophy,National League,Women's Championship,Copa del Rey,La Liga,Segunda División,Super Cup,Primera División Femenina,Primera División RFEF,DFB Pokal,Regionalliga,Super Cup,2. Bundesliga,Bundesliga,Ligue 1,Ligue 2,Coupe de la Ligue,Feminine Division 1,National 1,Trophée des Champions,Coupe de France,Serie A,Serie B,Super Cup,Coppa Italia,First Division A,Challenger Pro League,First NL,Czech Liga,Liga I,First League,CAF Super Cup,Club Friendlies,COSAFA Cup,Friendlies,UEFA U21 Championship,Africa Cup of Nations,CAF Champions League,CAF Confederation Cup,UEFA Champions League,UEFA Champions League - Group Stage,UEFA Europa League,UEFA Europa League - Group Stage,UEFA Youth League,UEFA Youth League - Group Stage,PSL,QSL Cup,World Cup,MLS,Superliga,1. Division,Damallsvenskan,K League 1,Eredivisie,Eerste Divisie,Liga MX,Liga Profesional Argentina,Primeira Liga,Premier League,Serie A,Super League,Botola Pro,Premier League"}n.d(a,{N:()=>i,Z:()=>t})},852:(e,a,n)=>{function t(e){return[{index:e.indexOf("152"),id:152,photo:"assets/img/pl.jpg"},{index:e.indexOf("175"),id:175,photo:"assets/img/Bundesliga.svg.png"},{index:e.indexOf("302"),id:302,photo:"assets/img/laliga.png"},{index:e.indexOf("168"),id:168,photo:"assets/img/ligue1.png"},{index:e.indexOf("207"),id:207,photo:"assets/img/serie a.svg"},{index:e.indexOf("3"),id:3,photo:"assets/img/ldc.png"},{index:e.indexOf("4"),id:4,photo:"assets/img/uel.png"},{index:e.indexOf("244"),id:244,photo:"assets/img/eredivisie.png"},{index:e.indexOf("28"),id:28,photo:"assets/img/worldcup.jpg"}]}function i(e){return[{index:e.indexOf("301"),photo:"assets/img/laliga.png"},{index:e.indexOf("688"),photo:"assets/img/cosafa.png"},{index:e.indexOf("365"),photo:"assets/img/psl.jpeg"},{index:e.indexOf("579"),photo:"assets/img/PrimeiraLigaBrasil.png"},{index:e.indexOf("647"),photo:"assets/img/qsl.png"},{index:e.indexOf("412"),photo:"assets/img/supercoupnorway.png"},{index:e.indexOf("380"),photo:"assets/img/Czech_Republic_Football_Supercup.jpg"},{index:e.indexOf("268"),photo:"assets/img/supertaca.jpg"},{index:e.indexOf("574"),photo:"assets/img/belgium-super-league-women.webp"},{index:e.indexOf("652"),photo:"assets/img/FA_Women's_Championship.png"}]}n.d(a,{Pn:()=>i,up:()=>t})}}]);
//# sourceMappingURL=63.448a55af.js.map