(()=>{var __webpack_modules__={150:(e,a,t)=>{var n=t(90),s=t(142);void 0===s.calendar&&(s.calendar=n),e.exports=n},477:(e,a,t)=>{var n=t(103),s=t(142);void 0===s.league&&(s.league=n),e.exports=n},142:(e,a,t)=>{"use strict";e.exports=function(){if("object"==typeof globalThis)return globalThis;var e;try{e=this||new Function("return this")()}catch(e){if("object"==typeof window)return window;if("object"==typeof self)return self;if(void 0!==t.g)return t.g}return e}()},79:(e,a,t)=>{"use strict";t.d(a,{Z:()=>n});const n=e=>{let a=location.protocol+"//"+location.host+"#"+e;window.history.pushState(null,"",a)}},165:(e,a,t)=>{"use strict";t.d(a,{V:()=>s,b:()=>i});let n=document.querySelector(".animation");function s(){n.style.display="flex",n.classList.add("loading")}function i(){n.style.display="none",n.classList.remove("loading")}},90:(e,a,t)=>{"use strict";t.r(a),t.d(a,{createCalendar:()=>d,deleteCurrentMonth:()=>_,downMonth:()=>m,getCurrentDate:()=>p,setDate:()=>g,upMonth:()=>u});var n=t(807),s=t(165);let i,l=new Date,o=l.getDate(),c=l.getMonth()+1,r=l.getFullYear();function d(e,a,t){let n=document.querySelector(".current-date"),s=document.querySelector(".day-container tbody"),i=new Date(a+"-"+e+"-01"),l=i.getDay(),o=[31,28,31,30,31,30,31,31,30,31,30,31],c=1,r=o[i.getMonth()],d=o[i.getMonth()-1],m=1;0==l&&(l=7),null==d&&(d=31);let u="";u+='<tr class="day" >',d=d-l+2;for(let a=1;a<=7;a++)l>a?(u+=`<td><span class="day-item day-out" onclick="calendar.setDate(false, ${e-1},${d})">${d}</span></td>`,d++):(u+=c===t?`<td><span class="day-item currentDate" onclick="calendar.setDate(false, ${e},${c})">${c}</span></td>`:`<td><span class="day-item" onclick="calendar.setDate(false, ${e},${c})">${c}</span></td>`,c++);u+="</tr>",u+='<tr class="day" >';for(let a=1;a<=7;a++)u+=c===t?`<td><span class="day-item currentDate" onclick="calendar.setDate(false, ${e},${c})">${c}</span></td>`:`<td><span class="day-item" onclick="calendar.setDate(false, ${e},${c})">${c}</span></td>`,c++;u+="</tr>",u+='<tr class="day" >';for(let a=1;a<=7;a++)u+=c===t?`<td><span class="day-item currentDate" onclick="calendar.setDate(false, ${e},${c})">${c}</span></td>`:`<td><span class="day-item" onclick="calendar.setDate(false, ${e},${c})">${c}</span></td>`,c++;u+="</tr>",u+='<tr class="day" >';for(let a=1;a<=7;a++)r>=c?(u+=c===t?`<td><span class="day-item currentDate" onclick="calendar.setDate(false, ${e},${c})">${c}</span></td>`:`<td><span class="day-item" onclick="calendar.setDate(false, ${e},${c})">${c}</span></td>`,c++):(u+=`<td><span class="day-item day-out" onclick="calendar.setDate(false, ${e+1},${m})">${m}</span></td>`,m++);u+="</tr>",u+='<tr class="day" >';for(let a=1;a<=7;a++)r>=c?(u+=c===t?`<td><span class="day-item currentDate" onclick="calendar.setDate(false, ${e},${c})">${c}</span></td>`:`<td><span class="day-item" onclick="calendar.setDate(false, ${e},${c})">${c}</span></td>`,c++):(u+=`<td><span class="day-item day-out" onclick="calendar.setDate(false, ${e+1},${m})">${m}</span></td>`,m++);u+="</tr>",u+='<tr class="day" >';for(let a=1;a<=7;a++)r>=c?(u+=c===t?`<td><span class="day-item currentDate" onclick="calendar.setDate(false, ${e},${c})">${c}</span></td>`:`<td><span class="day-item" onclick="calendar.setDate(false, ${e},${c})">${c}</span></td>`,c++):(u+=`<td><span class="day-item day-out" onclick="calendar.setDate(false, ${e+1},${m})">${m}</span></td>`,m++);u+="</tr>",n.innerHTML=["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"][e-1]+" "+a,window.innerWidth<=768&&(document.querySelector("#icon-toggle-calendar").style.display="block"),s.insertAdjacentHTML("beforeend",u)}function m(){c--,c<1&&(r--,c=12),_(),d(c,r,o)}function u(){c++,c>12&&(r++,c=1),_(),d(c,r,o)}function _(){document.querySelectorAll(".day").forEach((e=>e.remove()))}function p(){return{year:r,month:c,currentDate:o}}function g(e=!1,a,t,l,d){let m=document.querySelector(".actual");m&&(m.style.top="-100%"),(0,s.V)(),void 0!==l&&(i=l),console.log("currentIdLeague"),console.log(i),c=a,o=t,a>12?(c=1,r++):a<1&&(c=12,r--),(0,n.XR)(e,`${r}-${c}-${o}`,i,d)}},860:(e,a,t)=>{"use strict";function n(){return"England,Belgium,Germany,Croatia,Spain,Czech Republic,France,Romania,Bulgaria,Italy,intl,eurocups,South Africa,Qatar,Worldcup,USA,Denmark,Norway,Sweden,Korea Republic,Netherlands,Mexico,Argentina,Portugal,Russia,Brazil,Switzerland,Brazil,Morocco"}function s(){return"Championship,Community Shield,FA Cup,League Cup,League One,Premier League,EFL Trophy,National League,Women's Championship,Copa del Rey,La Liga,Segunda División,Super Cup,Primera División Femenina,Primera División RFEF,DFB Pokal,Regionalliga,Super Cup,2. Bundesliga,Bundesliga,Ligue 1,Ligue 2,Coupe de la Ligue,Feminine Division 1,National 1,Trophée des Champions,Coupe de France,Serie A,Serie B,Super Cup,Coppa Italia,First Division A,Challenger Pro League,First NL,Czech Liga,Liga I,First League,CAF Super Cup,Club Friendlies,COSAFA Cup,Friendlies,UEFA U21 Championship,Africa Cup of Nations,CAF Champions League,CAF Confederation Cup,UEFA Champions League,UEFA Champions League - Group Stage,UEFA Europa League,UEFA Europa League - Group Stage,UEFA Youth League,UEFA Youth League - Group Stage,PSL,QSL Cup,World Cup,MLS,Superliga,1. Division,Damallsvenskan,K League 1,Eredivisie,Eerste Divisie,Liga MX,Liga Profesional Argentina,Primeira Liga,Premier League,Serie A,Super League,Botola Pro,Premier League"}t.d(a,{N:()=>s,Z:()=>n})},625:(e,a,t)=>{"use strict";t.d(a,{Z:()=>n});const n=async e=>(console.log("idMatch"),console.log(e),await new Promise(((a,t)=>{fetch(`https://apiv3.apifootball.com/?action=get_events&APIkey=5abf557ce643bfb8836e00496fc0e64543d61180848a164763839561abbbafda&match_id=${e}&timezone=Africa/Nairobi`,{method:"get"}).then((e=>e.json())).then((e=>{console.log("getInfoMatch"),console.log(e),a(e[0])}))})))},103:(e,a,t)=>{"use strict";t.r(a),t.d(a,{getLeagueMatch:()=>l});var n=t(90),s=t(807);let i;function l(e,a){let t=new Date,l=t.getMonth()+1,o=t.getDate();(0,n.setDate)(!1,l,o,e,s.kS),i&&i.classList.remove("active"),a.classList.add("active"),i=a,window.scroll(0,0)}},183:(e,a,t)=>{"use strict";t.d(a,{Z:()=>n});const n=async e=>await new Promise(((a,t)=>{fetch(`https://apiv3.apifootball.com/?action=get_standings&league_id=${e}&APIkey=5abf557ce643bfb8836e00496fc0e64543d61180848a164763839561abbbafda`,{method:"get"}).then((e=>e.json())).then((e=>{console.log("getStanding"),console.log(e),a(e.error?[]:e)}))}))},490:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _getInfoMatch__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(625),_getStanding__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(183),_addHistory__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(79),_animation__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(165);let navMatch,container;const __WEBPACK_DEFAULT_EXPORT__=async(e=!1,a,t)=>{(0,_animation__WEBPACK_IMPORTED_MODULE_0__.V)();let n=[],s=[];n=await(0,_getInfoMatch__WEBPACK_IMPORTED_MODULE_1__.Z)(a),console.log("game"),console.log(n),displayGame(n),navMatch=document.querySelector(".nav-match"),container=navMatch.nextElementSibling,displayMoment(n),"standing"===t?(s=await(0,_getStanding__WEBPACK_IMPORTED_MODULE_2__.Z)(n.league_id),displayStanding(e,s,n.match_id)):"stats"===t?((0,_getStanding__WEBPACK_IMPORTED_MODULE_2__.Z)(n.league_id).then((e=>s=e)),displayStats(e,n)):((0,_getStanding__WEBPACK_IMPORTED_MODULE_2__.Z)(n.league_id).then((e=>s=e)),displayPreGame(e,n)),(0,_animation__WEBPACK_IMPORTED_MODULE_0__.b)(),navMatch.addEventListener("click",(a=>{(0,_animation__WEBPACK_IMPORTED_MODULE_0__.V)(),console.log(a.target),"standing"===a.target.id?((0,_animation__WEBPACK_IMPORTED_MODULE_0__.V)(),displayStanding(e,s,n.match_id),(0,_animation__WEBPACK_IMPORTED_MODULE_0__.b)()):"stats"===a.target.id?((0,_animation__WEBPACK_IMPORTED_MODULE_0__.V)(),displayStats(e,n),(0,_animation__WEBPACK_IMPORTED_MODULE_0__.b)()):((0,_animation__WEBPACK_IMPORTED_MODULE_0__.V)(),displayPreGame(e,n),(0,_animation__WEBPACK_IMPORTED_MODULE_0__.b)())}))};function displayGame(e){let a=document.querySelector(".current-element"),t=`<div class="info-match">\n        <h3 class="country-league">\n            <img src="${e.country_logo||"assets/img/logo2.png"}" alt="icon-country">\n            <span class="country">${e.country_name} : </span>\n            <span class="league">${e.league_name}</span>\n        </h3>\n        <div class="match">\n            <div class="home team">\n                <img src="${e.team_home_badge||"assets/img/logo2.png"}" alt="icon-team">\n                <span class="team-name">${e.match_hometeam_name}</span>\n                <span class="score">${e.match_hometeam_score}</span>\n            </div>\n            <div class="info">\n                <span class="hour-match">${e.match_time}</span>\n                <span class="date-match">${e.match_date}</span>\n                \x3c!-- <span class="vs">vs</span> --\x3e\n            </div>\n            <div class="away team">\n                <span class="score">${e.match_awayteam_score}</span>\n                <img src="${e.team_away_badge||"assets/img/logo2.png"}" alt="icon-team">\n                <span class="team-name">${e.match_awayteam_name}</span>\n            </div>\n        </div>\n        \x3c!-- moment fort  --\x3e\n        <div class="moment-container"></div>\n        <ul class="nav-match">\n            <li class="active" id="pregame">Pre-game</li>\n            <li id="standing" class="">Standing</li>\n            <li id="stats" class="">Stats</li> \n        </ul>\n        <div style="padding: 10px;">\n            \n        </div>\n    </div>`;a.innerHTML=t,document.querySelector("#icon-toggle-calendar").style.display="none"}function displayMoment(game){window.scroll(0,0);let moment=[],goal=game.goalscorer,card=game.cards,substitutions=game.substitutions;for(let e of goal)moment.push({time:e.time,team:e.home_scorer?"home":"away",type:"goal",player:e.home_scorer||e.away_scorer,icon:"assets/img/goal.png"});for(let e of card)moment.push({time:e.time,team:e.home_fault?"home":"away",type:"yellow card"===e.card?"yellow-card":"red-card",player:e.home_fault||e.away_fault,icon:"yellow card"===e.card?"assets/img/yellow-card.png":"assets/img/red-card.png"});for(let e of substitutions.home)moment.push({time:e.time,team:"home",type:"substitution",player:e.substitution.split(" | ")});for(let e of substitutions.away)moment.push({time:e.time,team:"away",type:"substitution",player:e.substitution.split(" | ")});moment.sort(((a,b)=>eval(a.time)-eval(b.time))),console.log("moment"),console.log(moment);let momentContainer=document.querySelector(".moment-container"),momentHTML="";for(let e of moment)momentHTML+=`<div class="moment ${e.team}">\n            <span class="time ${e.type}">${e.time}</span>`,"substitution"===e.type?momentHTML+=`<div class="item substitution">\n                <span class="in">in: ${e.player[1]}</span>\n                <span class="ti ti-reload" id="icon-substitute"></span>\n                <span class="out">out: ${e.player[0]}</span>\n            </div>`:momentHTML+=`<div class="item">\n                <img src="${e.icon}" alt="${e.type}">\n                <span class="scorer">${e.player}</span>\n            </div>`,momentHTML+='<div class="bar"></div>\n        </div>';moment.length>0&&(momentHTML+='\x3c!-- voir plus  --\x3e\n        <div class="show-more"><span>show more</span></div>'),momentContainer.innerHTML=momentHTML;let showMore=document.querySelector(".show-more");showMore&&showMore.addEventListener("click",(()=>{momentContainer.style.height="auto"}))}function displayPreGame(e=!1,a){e||(0,_addHistory__WEBPACK_IMPORTED_MODULE_3__.Z)(`game/pregame/${a.match_id}`);let t={system:a.match_hometeam_system||"4-3-3",lineup:a.lineup.home.starting_lineups,coach:a.lineup.home.coach.length>0?a.lineup.home.coach[0].lineup_player:"à attendre"},n={system:a.match_awayteam_system||"4-3-3",lineup:a.lineup.away.starting_lineups,coach:a.lineup.away.coach.length>0?a.lineup.away.coach[0].lineup_player:"à attendre"};t.lineup.sort(((e,a)=>e.lineup_position-a.lineup_position)),n.lineup.sort(((e,a)=>e.lineup_position-a.lineup_position));let s="";if(t.lineup.length>0){s+=`<div class="lineup">\n            <img src="assets/img/terrain.png" alt="terrain">\n            <div class="players-container">\n                <div class="home">\n                    \x3c!-- system  --\x3e\n                    <span class="system">${t.system}</span>\n                    <div class="row-item">\n                        <div class="player">\n                            <div class ="icon-player">${t.lineup[0].lineup_number}</div>\n                            <span class="player-name">${t.lineup[0].lineup_player}</span>\n                        </div>\n                    </div>`,t.system=t.system.split("-");let e=1;for(let a of t.system){s+='<div class="row-item">';for(let n=1;n<=a;n++)s+=`<div class="player">\n                                <div class ="icon-player">${t.lineup[e].lineup_number}</div>\n                                <span class="player-name">${t.lineup[e].lineup_player}</span>\n                            </div>`,e++;s+="</div>"}s+=`</div>\n                <div class="away">\n                    \x3c!-- system  --\x3e\n                    <span class="system">${n.system}</span>\n                    <div class="row-item">\n                        <div class="player">\n                            <div class ="icon-player">${n.lineup[0].lineup_number}</div>\n                            <span class="player-name">${n.lineup[0].lineup_player}</span>\n                        </div>\n                    </div>`,n.system=n.system.split("-"),e=1;for(let a of n.system){s+='<div class="row-item">';for(let t=1;t<=a;t++)s+=`<div class="player">\n                                <div class ="icon-player">${n.lineup[e].lineup_number}</div>\n                                <span class="player-name">${n.lineup[e].lineup_player}</span>\n                            </div>`,e++;s+="</div>"}s+="</div>\n            </div>\n        </div>"}s+=`<div class="coach-missing">\n        \x3c!-- coach  --\x3e\n        <div class="coach">\n            <div class="team">\n                <div class="home">\n                    <img src="${a.team_home_badge||"assets/img/logo2.png"}" alt="icon-team">\n                    <span class="team-name">${a.match_hometeam_name}</span>\n                </div>\n                <div class="away">\n                    <img src="${a.team_away_badge||"assets/img/logo2.png"}" alt="icon-team">\n                    <span class="team-name">${a.match_awayteam_name}</span>\n                </div>\n            </div>\n            <div class="manager">\n                <div class="home">\n                    <span class="caption">Manager : </span>\n                    <span class="manager">${t.coach}</span>\n                </div>\n                <div class="away">\n                    <span class="caption">Manager : </span>\n                    <span class="manager">${n.coach}</span>\n                </div>\n            </div>\n        </div>\n    </div>\n    \x3c!-- end pre-game  --\x3e`,container.innerHTML=s,document.querySelector(".info-match .nav-match li.active").classList.remove("active"),document.querySelectorAll(".info-match .nav-match li")[0].classList.add("active")}function displayStanding(e=!1,a,t){e||(0,_addHistory__WEBPACK_IMPORTED_MODULE_3__.Z)(`game/standing/${t}`);let n='<table class="standing-container">\n        <tr class="head-table">\n            <td class="team">Team</td>\n            <td>P</td>\n            <td>GF</td>\n            <td>GA</td>\n            <td>GD</td>\n            <td>Pts</td>\n        </tr>';for(let e of a)n+=`<tr class="team-container">\n                <td class="team">\n                    <span class="number">${e.overall_league_position}</span> \n                    <img src="${e.team_badge||"assets/img/logo2.png"}" alt="icon-team">\n                    <span class="name">${e.team_name}</span>\n                </td>\n                <td>${e.overall_league_payed}</td>\n                <td>${e.overall_league_GF}</td>\n                <td>${e.overall_league_GA}</td>\n                <td>${e.overall_league_GF-e.overall_league_GA}</td>\n                <td>${e.overall_league_PTS}</td>\n            </tr>`;n+="</table>",container.innerHTML=n,document.querySelector(".info-match .nav-match li.active").classList.remove("active"),document.querySelectorAll(".info-match .nav-match li")[1].classList.add("active")}function displayStats(e=!1,a){e||(0,_addHistory__WEBPACK_IMPORTED_MODULE_3__.Z)(`game/stats/${a.match_id}`);let t=a.statistics.reverse(),n='<div class="statistics">\n        <h4>Statistics</h4>';for(let e of t)n+=`<div class="row-item">\n                <span class="home">${e.home}</span>\n                <span class="item">${e.type}</span>\n                <span class="away">${e.away}</span>\n            </div>`;n+="</div>",container.innerHTML=n,document.querySelector(".info-match .nav-match li.active").classList.remove("active"),document.querySelectorAll(".info-match .nav-match li")[2].classList.add("active")}},218:(e,a,t)=>{"use strict";function n(e){return[{index:e.indexOf("152"),id:152,photo:"assets/img/pl.jpg"},{index:e.indexOf("175"),id:175,photo:"assets/img/Bundesliga.svg.png"},{index:e.indexOf("302"),id:302,photo:"assets/img/laliga.png"},{index:e.indexOf("168"),id:168,photo:"assets/img/ligue1.png"},{index:e.indexOf("207"),id:207,photo:"assets/img/serie a.svg"},{index:e.indexOf("3"),id:3,photo:"assets/img/ldc.png"},{index:e.indexOf("4"),id:4,photo:"assets/img/uel.png"},{index:e.indexOf("244"),id:244,photo:"assets/img/eredivisie.png"},{index:e.indexOf("28"),id:28,photo:"assets/img/worldcup.jpg"}]}function s(e){return[{index:e.indexOf("301"),photo:"assets/img/laliga.png"},{index:e.indexOf("688"),photo:"assets/img/cosafa.png"},{index:e.indexOf("365"),photo:"assets/img/psl.jpeg"},{index:e.indexOf("579"),photo:"assets/img/PrimeiraLigaBrasil.png"},{index:e.indexOf("647"),photo:"assets/img/qsl.png"},{index:e.indexOf("412"),photo:"assets/img/supercoupnorway.png"},{index:e.indexOf("380"),photo:"assets/img/Czech_Republic_Football_Supercup.jpg"},{index:e.indexOf("268"),photo:"assets/img/supertaca.jpg"},{index:e.indexOf("574"),photo:"assets/img/belgium-super-league-women.webp"},{index:e.indexOf("652"),photo:"assets/img/FA_Women's_Championship.png"}]}t.d(a,{Pn:()=>s,up:()=>n})},807:(e,a,t)=>{"use strict";t.d(a,{XR:()=>g,vS:()=>v,uq:()=>y,kS:()=>h});var n=t(860),s=t(218),i=t(165),l=t(490);function o(e){let a=document.querySelector(".current-element"),t="";for(let a of e){t+=`<div class="matchs">\n            <h3>\n                <img src="${a.logoCountry}" alt="icon-country">\n                <div class="d-inline">\n                    <span class="country">${a.countryName}</span>\n                    <span class="league">${a.leagueName}</span>\n                </div>\n            </h3>\n            <ul class="list-match">`;for(let e of a.game)"1"===e.match_live?t+=`<li class="live" id="${e.match_id}">\n                        <span class="hour-match" id="${e.match_id}">${isNaN(e.match_status)?e.match_status:e.match_status+" min"}</span>`:"Finished"===e.match_status||"After ET"===e.match_status||"After Pen."===e.match_status?t+=`<li class="finished" id="${e.match_id}">\n                        <span class="hour-match" id="${e.match_id}">${e.match_time}</span>`:"Postponed"===e.match_status?t+=`<li id="${e.match_id}">\n                    <span class="hour-match" id="${e.match_id}">postponed</span>`:t+=`<li id="${e.match_id}">\n                        <span class="hour-match"  id="${e.match_id}">${e.match_time}</span>`,t+=`<div class="match-item" id="${e.match_id}">\n                    <div class="home" id="${e.match_id}">\n                        <img src="${e.team_home_badge||"assets/img/logo2.png"}" alt="icon-team" id="${e.match_id}">\n                        <span id="${e.match_id}">${e.match_hometeam_name}</span>\n                        <span class="score-home score" id="${e.match_id}">${e.match_hometeam_score.length>0?e.match_hometeam_score:"  "}</span> \n                    </div>\n                    <span class="vs" id="${e.match_id}">vs</span>\n                    <div class="away" id="${e.match_id}">\n                        <span class="away-home score" id="${e.match_id}">${e.match_awayteam_score.length>0?e.match_awayteam_score:"  "}</span>\n                        <img src="${e.team_away_badge||"assets/img/logo2.png"}" alt="icon-team" id="${e.match_id}">\n                        <span id="${e.match_id}">${e.match_awayteam_name}</span>\n                    </div>\n                </div>\n            </li>`;t+="   </ul>\n        </div>"}let n=`<div class="match-container">\n        <nav class="navbar-match">\n            <ul class="nav-list">\n                <li class="active col-4 match-today">Today</li>\n                <li class="col-4 match-live">Live</li>\n                <li class="col-4 match-finished">Finished</li>\n            </ul>\n        </nav>\n        ${t}\n    </div>\n    \x3c!-- actual  --\x3e\n    <div class="actual">\n        \x3c!-- calendar  --\x3e\n        <div class="calendar-month">\n            <div class="current-month">\n                <div class="jump-month left">\n                    <div class="jump" onclick="calendar.downMonth();">\n                        <span class="ti ti-angle-left"></span>\n                    </div>\n    \n                </div>\n                <div class="current-date">\n                    date du jour\n                </div>\n                <div class="jump-month right">\n                    <div class="jump" onclick="calendar.upMonth()">\n                        <span class="ti ti-angle-right"></span>\n                    </div>\n                </div>\n            </div>\n            <div class="day-container">\n                <table style="border-collapse: collapse; display: flex;">\n                    <tbody style="width: 100%;" class="addDayMonth">\n                        <tr class="week">\n                            <td>Lun</td>\n                            <td>Mar</td>\n                            <td>Mer</td>\n                            <td>Jeu</td>\n                            <td>Ven</td>\n                            <td>Sam</td>\n                            <td>Dim</td>\n                        </tr>\n                        \x3c!-- day month here --\x3e\n                    </tbody>\n                \n                </table>\n            </div>\n        </div>\n        <span id="close-calendar" class="ti ti-close close""></span>\n    </div>`;a.innerHTML=n,n=document.querySelector(".match-container"),n.addEventListener("click",(e=>{console.log(e.target.id);let a=e.target.id;isNaN(a)||""===a||(0,l.Z)(!1,a)})),document.querySelector(".match-today").addEventListener("click",(()=>{console.log("ati"),h()})),document.querySelector(".match-live").addEventListener("click",(()=>{y()})),document.querySelector(".match-finished").addEventListener("click",(()=>{v()}))}var c=t(90),r=t(79);let d=(0,n.N)(),m=(0,n.Z)(),u=[],_=document.querySelector(".navbar-match .nav-list li.active"),p=h;async function g(e=!1,a,t,n){u=[];let l=new Date(a),o=l.getFullYear()+"-"+(l.getMonth()+1)+"-"+l.getDate();console.log("date"),console.log(a),e||(0,r.Z)(`listgame/${o}${t?"&"+t:""}`),fetch(`https://apiv3.apifootball.com/?action=get_events&from=${o}&to=${o}&APIkey=5abf557ce643bfb8836e00496fc0e64543d61180848a164763839561abbbafda&timezone=Africa/Nairobi`,{method:"get"}).then((e=>e.json())).then((e=>{let a=e.filter((e=>m.includes(e.country_name)&&d.includes(e.league_name))),l=[],o=[];t>0&&(a=a.filter((e=>e.league_id==t))),console.log("list match"),console.log(a);for(let e of a)l.includes(e.league_id)||(u.push({id:e.league_id,countryName:e.country_name,leagueName:e.league_name,logoCountry:e.country_logo||e.league_logo,game:a.filter((a=>a.league_id===e.league_id))}),l.push(e.league_id),o.push(e.country_id));let c=(0,s.up)(l),r=[],_=c.map((e=>e.id));for(let e=0;e<c.length;e++)_.includes(u[e]?Number(u[e].id):"")||r.push(e);o.includes("2")&&(u[o.indexOf("2")].logoCountry="assets/img/intl.png"),l.includes("4")&&(u[l.indexOf("4")].logoCountry="assets/img/uel.png"),l.includes("3")&&(u[l.indexOf("3")].logoCountry="assets/img/ldc.png"),c=c.filter((e=>e.index>=0&&e.index>c.length));for(let e=0;e<c.length;e++){let a=u[r[e]];u[r[e]]=u[c[e].index],u[c[e].index]=a}console.log("gamePerLeague"),console.log(u),n&&(p=n),p(),(0,i.b)()}))}function h(){p=h,(0,i.V)(),o(u),_=document.querySelector(".match-container .nav-list li.active"),_.classList.remove("active"),_=document.querySelector(".match-today"),_.classList.add("active");let{year:e,month:a,currentDate:t}=(0,c.getCurrentDate)();(0,c.deleteCurrentMonth)(),(0,c.createCalendar)(a,e,t),(0,i.b)()}async function y(){p=y,(0,i.V)();let e=[];for(let a of u)e.push({countryName:a.countryName,leagueName:a.leagueName,logoCountry:a.logoCountry,game:a.game.filter((e=>"1"===e.match_live))});e=e.filter((e=>e.game.length>0)),console.log("game live"),console.log(e),o(e),_=document.querySelector(".match-container .nav-list li.active"),_.classList.remove("active"),_=document.querySelector(".match-live"),_.classList.add("active");let{year:a,month:t,currentDate:n}=(0,c.getCurrentDate)();(0,c.deleteCurrentMonth)(),(0,c.createCalendar)(t,a,n),(0,i.b)()}function v(){p=v;let e=[];e=u.map((e=>({countryName:e.countryName,leagueName:e.leagueName,logoCountry:e.logoCountry,game:e.game.filter((e=>"0"===e.match_live&&(e.match_hometeam_score.length>0||e.match_awayteam_score.length>0)))}))),e=e.filter((e=>e.game.length>0)),console.log("gameFinished"),console.log(e),o(e),_=document.querySelector(".match-container .nav-list li.active"),_.classList.remove("active"),_=document.querySelector(".match-finished"),_.classList.add("active");let{year:a,month:t,currentDate:n}=(0,c.getCurrentDate)();(0,c.deleteCurrentMonth)(),(0,c.createCalendar)(t,a,n),(0,i.b)()}}},__webpack_module_cache__={};function __webpack_require__(e){var a=__webpack_module_cache__[e];if(void 0!==a)return a.exports;var t=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](t,t.exports,__webpack_require__),t.exports}__webpack_require__.d=(e,a)=>{for(var t in a)__webpack_require__.o(a,t)&&!__webpack_require__.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})},__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),__webpack_require__.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var __webpack_exports__={};(()=>{"use strict";var e=__webpack_require__(165),a=(__webpack_require__(150),__webpack_require__(477),__webpack_require__(490)),t=__webpack_require__(90),n=__webpack_require__(860),s=__webpack_require__(218);let i=document.querySelector(".list-league"),l=(0,n.Z)(),o=(0,n.N)();l=l.split(","),o=o.split(",");__webpack_require__(807);const c=()=>{document.querySelector(".current-element").innerHTML="page not found"},r=n=>{let r=window.location.hash;if(console.log(r),(async()=>{fetch("https://apiv3.apifootball.com/?action=get_leagues&APIkey=5abf557ce643bfb8836e00496fc0e64543d61180848a164763839561abbbafda",{method:"get"}).then((e=>e.json())).then((a=>{let t=a.filter((e=>l.includes(e.country_name)&&o.includes(e.league_name))),n=t.map((e=>e.league_id));console.log("listleague"),console.log(t);let c=(0,s.up)(n),r=(0,s.Pn)(n);for(let e=0;e<c.length;e++){let a=t[e];t[e]=t[c[e].index],t[c[e].index]=a,t[e].league_logo=c[e].photo}for(let e of r)t[e.index].league_logo=e.photo;let d="";for(let e of t)d+=`<li class="list-item" id="${e.league_id}" onclick="league.getLeagueMatch(${e.league_id}, this)">\n                    <img src="${e.league_logo}" alt="icon-league" id="${e.league_id}">\n                    <span id="${e.league_id}">${e.league_name}\n                        <span class="line-list" id="${e.league_id}"></span>\n                    </span>\n                </li>`;i.innerHTML=d,(0,e.b)()})).catch((e=>console.log(e)))})(),0===r.length||"#"===r){(0,e.V)();let a=new Date;return void(0,t.setDate)(n,a.getMonth()+1,a.getDate(),0)}let d=r.slice(1,r.indexOf("/"));if(r=r.slice(r.indexOf("/")+1),"listgame"===d){let e=r.indexOf("&");if(e>0){let a=r.slice(0,e),s=r.slice(e+1);if(a=new Date(a),"Invalid Date"===a.toString()&&isNaN(s))return c();(0,t.setDate)(n,a.getMonth()+1,a.getDate(),s)}else{if(r=new Date(r),"Invalid Date"===r.toString())return c();(0,t.setDate)(n,r.getMonth()+1,r.getDate())}}else{if("game"!==d)return c();{let e=r.indexOf("/"),t=r.slice(0,e);r=r.slice(e+1),e=r.indexOf("/");let s=r.slice(0);if(isNaN(s))return c();if("pregame"===t)(0,a.Z)(n,s);else if("standing"===t)(0,a.Z)(n,s,"standing");else{if("stats"!==t)return c();(0,a.Z)(n,s,"stats")}}}};var d=__webpack_require__(79);__webpack_require__(103);(0,e.V)(),(()=>{let e=document.querySelector("#icon-toggle-calendar"),a=document.querySelector("#icon-toggle-league"),t=document.querySelector("#close-calendar"),n=document.querySelector("#close-league"),s=document.querySelector(".league-container"),i=document.querySelector(".match-container");e.addEventListener("click",(()=>{document.querySelector(".actual").style.top="0"})),t.addEventListener("click",(()=>{document.querySelector(".actual").style.top="-100%"})),a.addEventListener("click",(()=>{s.style.left="0",i.style.display="none"})),n.addEventListener("click",(()=>{s.style.left="-100%",i.style.display="block"})),document.querySelector(".list-league").addEventListener("click",(e=>{console.log(e.target)}))})(),r(!1),window.onpopstate=e=>{console.log("onpopstate"),console.log(e),r(!0)},document.querySelector(".nav-bar .logo").addEventListener("click",(()=>{(0,d.Z)(""),r(!1)}))})()})();
//# sourceMappingURL=bundle.js.map