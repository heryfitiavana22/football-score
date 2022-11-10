"use strict";(self.webpackChunkFootball_score=self.webpackChunkFootball_score||[]).push([[63,114,186,597],{84:(e,a,t)=>{function n(e){let a=new Date(e);return a.getFullYear()+"-"+(a.getMonth()+1)+"-"+a.getDate()}function i(e=new Date){let a=new Date(e),t=new Date(a.getFullYear(),a.getMonth(),a.getDate()+15);return t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate()}function s(e=new Date){let a=new Date(e),t=new Date(a.getFullYear(),a.getMonth(),a.getDate()-15);return t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate()}t.d(a,{EP:()=>n,WU:()=>i,jG:()=>s})},587:(e,a,t)=>{t.d(a,{Z:()=>i});var n=t(313);const i=(e,a)=>{let t='<div class="listMatch">';0===e.length&&(t+='<p style="padding-left:15px">to wait</p>');for(let a of e){t+=`<div class="matchs">\n            <h3>${a.date}</h3>\n            <ul class="list-match">`;for(let e of a.game)"1"===e.match_live?t+=`<li class="live" id="${e.match_id}">\n                    <span class="hour-match" id="${e.match_id}">${isNaN(e.match_status)?e.match_status:e.match_status+" min"}</span>`:t+=`<li id="${e.match_id}">\n                    <span class="hour-match" id="${e.match_id}">${"Postponed"===e.match_status?"postponed":e.match_time}</span>`,t+=`<div class="match-item" id="${e.match_id}">\n                        <div class="home" id="${e.match_id}">\n                            <span id="${e.match_id}">${e.match_hometeam_name}</span>\n                            <img src="${e.team_home_badge||"assets/img/logo2.png"}" alt="icon-team" id="${e.match_id}" onerror="this.src = 'assets/img/logo2.png'">\n                            <span class="score-home score" id="${e.match_id}">${e.match_hometeam_score.length>0?e.match_hometeam_score:"  "}</span> \n                        </div>\n                        <span class="vs" id="${e.match_id}">vs</span>\n                        <div class="away" id="${e.match_id}">\n                            <span class="away-home score" id="${e.match_id}">${e.match_awayteam_score.length>0?e.match_awayteam_score:"  "}</span>\n                            <img src="${e.team_away_badge||"assets/img/logo2.png"}" alt="icon-team" id="${e.match_id}" onerror="this.src = 'assets/img/logo2.png'">\n                            <span id="${e.match_id}">${e.match_awayteam_name}</span>\n                        </div>\n                    </div>\n                </li>`}return t+="</div>",document.querySelector(".current-item").innerHTML=t,document.querySelector(".nav-info .active").classList.remove("active"),document.querySelector("#"+a).classList.add("active"),document.querySelector(".listMatch").addEventListener("click",(e=>{let a=e.target.id;isNaN(a)||""===a||(0,n.default)(!1,a)})),a}},565:(e,a,t)=>{t.d(a,{Z:()=>n});const n=(e,a)=>{let t=[],n=[];for(let a of e)n.includes(a.match_date)||(t.push({date:a.match_date,game:e.filter((e=>e.match_date===a.match_date))}),n.push(a.match_date));return"ASC"===a?t.sort(((e,a)=>new Date(e.date)-new Date(a.date))):t.sort(((e,a)=>new Date(a.date)-new Date(e.date))),t}},33:(e,a,t)=>{t.d(a,{Z:()=>l});var n=t(526),i=t(84);let s=(0,n.N)(),o=(0,n.Z)();const l=async(e,a=e,t=0,n=0)=>await new Promise(((l,r)=>{let d=(0,i.EP)(e),c=(0,i.EP)(a);console.log("from-to"),console.log(d+"-"+c);let u=`https://apiv3.apifootball.com/?action=get_events&from=${d}&to=${c}&APIkey=92268e4434769b7515b45be3b45cd3d9bdc9d3e4cf62885a85ada0a22c9acf8b&timezone=Africa/Nairobi`;t>0&&(u+=`&league_id=${t}`),n>0&&(u+=`&team_id=${n}`),fetch(u,{method:"get"}).then((e=>e.json())).then((e=>{if(e.error)return l([]);let a=e.filter((e=>o.includes(e.country_name)&&s.includes(e.league_name)));a.sort(((e,a)=>new Date(`${e.match_date} ${e.match_time}`)-new Date(`${a.match_date} ${a.match_time}`))),l(a)})).catch((e=>console.log(e)))}))},114:(e,a,t)=>{t.r(a),t.d(a,{clearIntervalInfoLeague:()=>f,default:()=>h});var n=t(721);var i=t(33);var s=t(587);var o=t(84),l=t(337),r=t(186),d=t(565),c=t(212),u=t(2),g=t(232);let m,p=null;const h=async(e,a)=>{window.scroll(0,0),(0,c.V)(),e||(0,u.default)(`league/${a}`),a=a.slice(1);let t=[],m=[],h=[],f=[];(async e=>await new Promise(((a,t)=>{fetch(`https://apiv3.apifootball.com/?action=get_topscorers&league_id=${e}&APIkey=92268e4434769b7515b45be3b45cd3d9bdc9d3e4cf62885a85ada0a22c9acf8b`,{method:"get"}).then((e=>e.json())).then((e=>{a(e.error?[]:e)}))})))(a).then((e=>f=e)),(0,i.Z)((0,o.jG)(),new Date,a).then((e=>{m=(0,d.Z)(e),m.shift()})),(0,i.Z)(new Date,(0,o.WU)(),a).then((e=>t=(0,d.Z)(e,"ASC"))),h=await(0,n.Z)(a);let _=(0,r.getLeagues)().filter((e=>e.league_id==a));if(0===_.length)return(0,g.Z)("league not found");_=_[0],(e=>{let a=document.querySelector(".current-element"),t=`<div class="info-league info">\n        <div class="country-league">\n            <div class="country">\n                <img src="${e.country_logo}" alt="icon-country" onerror="this.src = 'assets/img/logo2.png'">\n                <span>${e.country_name}</span>\n            </div>\n            <div class="league">\n                <img src="${e.league_logo}" alt="icon-league" onerror="this.src = 'assets/img/logo2.png'">\n                <div>\n                    <span class="name">${e.league_name}</span>\n                    <span class="season">${e.league_season}</span>\n                </div>\n            </div>\n        </div>\n        <ul class="nav-league nav-info">\n            <li class="active" id="standing">Standing</li> \n            <li id="calendar">Calendar</li>\n            <li id="result">Results</li>\n            <li id="scorer">Scorer</li> \n        </ul>\n        <div class="current-item">\n            \n        </div>\n    </div>`;a.innerHTML=t;let n=document.querySelector("#icon-toggle-calendar");n&&(n.style.visibility="hidden")})(_),p=(0,l.Z)(h),document.querySelector(".nav-league").addEventListener("click",(e=>{let a=e.target.id;p="result"===a?(0,s.Z)(m,"result"):"standing"===a?(0,l.Z)(h):"scorer"===a?(e=>{let a='<table class="standing-container top-scorer">\n        <tr class="head-table">\n            <td class="player-td">Player</td>\n            <td class="team-player">Team</td>\n            <td>Goals</td>\n            <td>Assists</td>\n            <td>Penalty </td>\n        </tr>';for(let t of e)a+=`<tr class="item-container">\n            <td class="player-td">\n                <span class="number">${t.player_place}</span>\n                <span class="name">${t.player_name}</span>\n            </td>\n            <td class="team-player">\n                <span class="name">${t.team_name}</span>\n            </td>\n            <td>${t.goals}</td>\n            <td>${t.assists?t.assists:0}</td>\n            <td>${t.penalty_goals?t.penalty_goals:0}</td>\n        </tr>`;return a+="</table>",document.querySelector(".current-item").innerHTML=a,document.querySelector(".info-league .active").classList.remove("active"),document.querySelector(".info-league #scorer").classList.add("active"),"scorer"})(f):(0,s.Z)(t,"calendar")})),(0,c.b)()};function f(){clearInterval(m)}},186:(e,a,t)=>{t.r(a),t.d(a,{default:()=>d,getLeagues:()=>c});var n=t(526),i=t(852);let s=document.querySelector(".list-league"),o=(0,n.Z)(),l=(0,n.N)();o=o.split(","),l=l.split(",");let r=[];const d=async()=>{fetch("https://apiv3.apifootball.com/?action=get_leagues&APIkey=92268e4434769b7515b45be3b45cd3d9bdc9d3e4cf62885a85ada0a22c9acf8b",{method:"get"}).then((e=>e.json())).then((e=>{r=e.filter((e=>o.includes(e.country_name)&&l.includes(e.league_name)));let a=r.map((e=>e.league_id)),t=(0,i.up)(a),n=(0,i.Pn)(a),d=1;for(let e of n)r[e.index].league_logo=e.photo;for(let e of t)r[e.index].number=d,r[e.index].league_logo=e.photo,d++;for(let e of r)e.number||(e.number=d,d++);r.sort(((e,a)=>e.league_name-a.league_name)),r.sort(((e,a)=>e.number-a.number));let c="";for(let e of r)c+=`<li class="list-item kk${e.league_id}" id="${e.league_id}" onclick="league.getLeagueMatch(${e.league_id}, this)">\n                    <img src="${e.league_logo}" alt="icon-league" id="${e.league_id}" onerror="this.src = 'assets/img/logo2.png'">\n                    <span id="${e.league_id}">${e.league_name}\n                        <span class="line-list" id="${e.league_id}"></span>\n                    </span>\n                </li>`;s.innerHTML=c})).catch((e=>console.log(e)))};function c(){return r}},526:(e,a,t)=>{function n(){return"England,Belgium,Germany,Croatia,Spain,Czech Republic,France,Romania,Bulgaria,Italy,intl,eurocups,South Africa,Qatar,Worldcup,USA,Denmark,Norway,Sweden,Korea Republic,Netherlands,Mexico,Argentina,Portugal,Russia,Brazil,Switzerland,Brazil,Morocco"}function i(){return"Championship,Community Shield,FA Cup,League Cup,League One,Premier League,EFL Trophy,National League,Women's Championship,Copa del Rey,La Liga,Segunda División,Super Cup,Primera División Femenina,Primera División RFEF,DFB Pokal,Regionalliga,Super Cup,2. Bundesliga,Bundesliga,Ligue 1,Ligue 2,Coupe de la Ligue,Feminine Division 1,National 1,Trophée des Champions,Coupe de France,Serie A,Serie B,Super Cup,Coppa Italia,First Division A,Challenger Pro League,First NL,Czech Liga,Liga I,First League,CAF Super Cup,Club Friendlies,COSAFA Cup,Friendlies,UEFA U21 Championship,Africa Cup of Nations,CAF Champions League,CAF Confederation Cup,UEFA Champions League,UEFA Champions League - Group Stage,UEFA Europa League,UEFA Europa League - Group Stage,UEFA Youth League,UEFA Youth League - Group Stage,PSL,QSL Cup,World Cup,MLS,Superliga,1. Division,Damallsvenskan,K League 1,Eredivisie,Eerste Divisie,Liga MX,Liga Profesional Argentina,Primeira Liga,Premier League,Serie A,Super League,Botola Pro,Premier League"}t.d(a,{N:()=>i,Z:()=>n})},852:(e,a,t)=>{function n(e){return[{index:e.indexOf("152"),id:152,photo:"assets/img/pl.jpg"},{index:e.indexOf("175"),id:175,photo:"assets/img/Bundesliga.svg.png"},{index:e.indexOf("302"),id:302,photo:"assets/img/laliga.png"},{index:e.indexOf("168"),id:168,photo:"assets/img/ligue1.png"},{index:e.indexOf("207"),id:207,photo:"assets/img/serie a.svg"},{index:e.indexOf("3"),id:3,photo:"assets/img/ldc.png"},{index:e.indexOf("4"),id:4,photo:"assets/img/uel.png"},{index:e.indexOf("244"),id:244,photo:"assets/img/eredivisie.png"},{index:e.indexOf("28"),id:28,photo:"assets/img/worldcup.jpg"}]}function i(e){return[{index:e.indexOf("301"),photo:"assets/img/laliga.png"},{index:e.indexOf("688"),photo:"assets/img/cosafa.png"},{index:e.indexOf("365"),photo:"assets/img/psl.jpeg"},{index:e.indexOf("579"),photo:"assets/img/PrimeiraLigaBrasil.png"},{index:e.indexOf("647"),photo:"assets/img/qsl.png"},{index:e.indexOf("412"),photo:"assets/img/supercoupnorway.png"},{index:e.indexOf("380"),photo:"assets/img/Czech_Republic_Football_Supercup.jpg"},{index:e.indexOf("268"),photo:"assets/img/supertaca.jpg"},{index:e.indexOf("574"),photo:"assets/img/belgium-super-league-women.webp"},{index:e.indexOf("652"),photo:"assets/img/FA_Women's_Championship.png"}]}t.d(a,{Pn:()=>i,up:()=>n})}}]);
//# sourceMappingURL=63.f4afde36.js.map