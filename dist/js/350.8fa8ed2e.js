"use strict";(self.webpackChunkFootball_score=self.webpackChunkFootball_score||[]).push([[350,313,186,114,321],{84:(e,a,t)=>{function n(e){let a=new Date(e);return a.getFullYear()+"-"+(a.getMonth()+1)+"-"+a.getDate()}function s(e=new Date){let a=new Date(e);return a.getMonth()+1>=8?a.getFullYear()+"-08-01":a.getFullYear()-1+"-08-01"}function i(e=new Date){let a=new Date(e);return a.getMonth()+1>=8?a.getFullYear()+1+"-07-01":a.getFullYear()+"-07-01"}t.d(a,{Cx:()=>i,EP:()=>n,PD:()=>s})},587:(e,a,t)=>{t.d(a,{Z:()=>s});var n=t(313);const s=(e,a)=>{let t='<div class="listMatch">';0===e.length&&(t+='<p style="padding-left:15px">to wait or no match</p>');for(let a of e){t+=`<div class="matchs">\n            <h3>${a.date}</h3>\n            <ul class="list-match">`;for(let e of a.game)"1"===e.match_live?t+=`<li class="live" id="${e.match_id}">\n                    <span class="hour-match" id="${e.match_id}">${isNaN(e.match_status)?e.match_status:e.match_status+" min"}</span>`:t+=`<li id="${e.match_id}">\n                    <span class="hour-match" id="${e.match_id}">${"Postponed"===e.match_status?"postponed":e.match_time}</span>`,t+=`<div class="match-item" id="${e.match_id}">\n                        <div class="home" id="${e.match_id}">\n                            <span id="${e.match_id}">${e.match_hometeam_name}</span>\n                            <img src="${e.team_home_badge||"assets/img/logo2.png"}" alt="icon-team" id="${e.match_id}" onerror="this.src = 'assets/img/logo2.png'">\n                            <span class="score-home score" id="${e.match_id}">${e.match_hometeam_score.length>0?e.match_hometeam_score:"  "}</span> \n                        </div>\n                        <span class="vs" id="${e.match_id}">vs</span>\n                        <div class="away" id="${e.match_id}">\n                            <span class="away-home score" id="${e.match_id}">${e.match_awayteam_score.length>0?e.match_awayteam_score:"  "}</span>\n                            <img src="${e.team_away_badge||"assets/img/logo2.png"}" alt="icon-team" id="${e.match_id}" onerror="this.src = 'assets/img/logo2.png'">\n                            <span id="${e.match_id}">${e.match_awayteam_name}</span>\n                        </div>\n                    </div>\n                </li>`}return t+="</div>",document.querySelector(".current-item").innerHTML=t,document.querySelector(".nav-info .active").classList.remove("active"),document.querySelector("#"+a).classList.add("active"),document.querySelector(".listMatch").addEventListener("click",(e=>{let a=e.target.id;isNaN(a)||""===a||(0,n.default)(!1,a)})),a}},337:(e,a,t)=>{t.d(a,{Z:()=>n});const n=(e,...a)=>{let n='<table class="standing-container">\n        <tr class="head-table">\n            <td class="team">Team</td>\n            <td>P <span class="caption-td">played<span></td>\n            <td>GF <span class="caption-td">goal for<span></td>\n            <td>GA <span class="caption-td">goal against<span></td>\n            <td>GD <span class="caption-td gd">goal difference<span></td>\n            <td>Pts <span class="caption-td">points<span></td>\n        </tr>';for(let t of e)n+=`<tr class="item-container ${a.includes(t.team_id)?"current-team":""}" id="${t.league_id}t${t.team_id}">\n                <td class="team" id="${t.league_id}t${t.team_id}">\n                    <span class="number" id="${t.league_id}t${t.team_id}">${t.overall_league_position}</span> \n                    <img src="${t.team_badge||"assets/img/logo2.png"}" alt="icon-team" id="${t.league_id}t${t.team_id}" onerror="this.src = '../../assets/img/logo2.png'">\n                    <span class="name" id="${t.league_id}t${t.team_id}">${t.team_name}</span>\n                </td>\n                <td id="${t.league_id}t${t.team_id}">\n                    ${t.overall_league_payed} \n                    <span class="caption-td">played<span>\n                </td>\n                <td id="${t.league_id}t${t.team_id}">\n                    ${t.overall_league_GF}\n                    <span class="caption-td">goal for<span>\n                </td>\n                <td id="${t.league_id}t${t.team_id}">\n                    ${t.overall_league_GA}\n                    <span class="caption-td">goal against<span>\n                </td>\n                <td id="${t.league_id}t${t.team_id}">\n                    ${t.overall_league_GF-t.overall_league_GA}\n                    <span class="caption-td gd">goal difference<span>\n                </td>\n                <td id="${t.league_id}t${t.team_id}">\n                    ${t.overall_league_PTS}\n                    <span class="caption-td">points<span>\n                </td>\n            </tr>`;return n+="</table>",document.querySelector(".current-item").innerHTML=n,document.querySelector(".nav-info li.active").classList.remove("active"),document.querySelector("#standing").classList.add("active"),document.querySelector(".standing-container").addEventListener("click",(async e=>{let a=e.target.attributes.class;if(a&&a.nodeValue.includes("current-team"))return;let n=e.target.id.split("t");2===n.length&&(await t.e(785).then(t.bind(t,785))).default(!1,...n)})),"standing"}},565:(e,a,t)=>{t.d(a,{Z:()=>n});const n=(e,a)=>{let t=[],n=[];for(let a of e)n.includes(a.match_date)||(t.push({date:a.match_date,game:e.filter((e=>e.match_date===a.match_date))}),n.push(a.match_date));return"ASC"===a?t.sort(((e,a)=>new Date(e.date)-new Date(a.date))):t.sort(((e,a)=>new Date(a.date)-new Date(e.date))),t}},33:(e,a,t)=>{t.d(a,{Z:()=>o});var n=t(526),s=t(84);let i=(0,n.N)(),l=(0,n.Z)();const o=async(e,a=e,t=0,n=0)=>await new Promise(((o,c)=>{let r=`https://apiv3.apifootball.com/?action=get_events&from=${(0,s.EP)(e)}&to=${(0,s.EP)(a)}&APIkey=92268e4434769b7515b45be3b45cd3d9bdc9d3e4cf62885a85ada0a22c9acf8b&timezone=Africa/Nairobi`;t>0&&(r+=`&league_id=${t}`),n>0&&(r+=`&team_id=${n}`),console.log(r),fetch(r,{method:"get"}).then((e=>e.json())).then((e=>{if(e.error)return o([]);let a=e.filter((e=>l.includes(e.country_name)&&i.includes(e.league_name)));a.sort(((e,a)=>new Date(`${e.match_date} ${e.match_time}`)-new Date(`${a.match_date} ${a.match_time}`))),o(a)})).catch((e=>console.log(e)))}))},721:(e,a,t)=>{t.d(a,{Z:()=>n});const n=async e=>await new Promise(((a,t)=>{fetch(`https://apiv3.apifootball.com/?action=get_standings&league_id=${e}&APIkey=92268e4434769b7515b45be3b45cd3d9bdc9d3e4cf62885a85ada0a22c9acf8b`,{method:"get"}).then((e=>e.json())).then((e=>{a(e.error?[]:e)}))}))},114:(e,a,t)=>{t.r(a),t.d(a,{clearIntervalInfoLeague:()=>_,default:()=>h});var n=t(721);var s=t(33);var i=t(587);var l=t(84),o=t(337),c=t(186),r=t(565),d=t(212),m=t(2),p=t(232);let u,g;const h=async(e,a)=>{window.scroll(0,0),(0,d.V)(),e||(0,m.default)(`league/${a}`),a=a.slice(1);let t=[],h=[],_=[],v=[];(async e=>await new Promise(((a,t)=>{fetch(`https://apiv3.apifootball.com/?action=get_topscorers&league_id=${e}&APIkey=92268e4434769b7515b45be3b45cd3d9bdc9d3e4cf62885a85ada0a22c9acf8b`,{method:"get"}).then((e=>e.json())).then((e=>{a(e.error?[]:e)}))})))(a).then((e=>v=e)),(0,s.Z)((0,l.PD)(),new Date,a).then((e=>{h=(0,r.Z)(e),h.shift()})),(0,s.Z)(new Date,(0,l.Cx)(),a).then((e=>t=(0,r.Z)(e,"ASC"))),_=await(0,n.Z)(a);let y=(0,c.getLeagues)().filter((e=>e.league_id==a));if(0===y.length)return(0,p.Z)("league not found");y=y[0],(e=>{let a=document.querySelector(".current-element"),t=`<div class="info-league info">\n        <div class="country-league">\n            <div class="country">\n                <img src="${e.country_logo}" alt="icon-country" onerror="this.src = 'assets/img/logo2.png'">\n                <span>${e.country_name}</span>\n            </div>\n            <div class="league">\n                <img src="${e.league_logo}" alt="icon-league" onerror="this.src = 'assets/img/logo2.png'">\n                <div>\n                    <span class="name">${e.league_name}</span>\n                    <span class="season">${e.league_season}</span>\n                </div>\n            </div>\n        </div>\n        <ul class="nav-league nav-info">\n            <li class="active" id="standing">Standing</li> \n            <li id="calendar">Calendar</li>\n            <li id="result">Results</li>\n            <li id="scorer">Scorer</li> \n        </ul>\n        <div class="current-item">\n            \n        </div>\n    </div>`;a.innerHTML=t;let n=document.querySelector("#icon-toggle-calendar");n&&(n.style.visibility="hidden")})(y),g=(0,o.Z)(_),document.querySelector(".nav-league").addEventListener("click",(e=>{let a=e.target.id;g="result"===a?(0,i.Z)(h,"result"):"standing"===a?(0,o.Z)(_):"scorer"===a?(e=>{let a='<table class="standing-container top-scorer">\n        <tr class="head-table">\n            <td class="player-td">Player</td>\n            <td class="team-player">Team</td>\n            <td>Goals</td>\n            <td>Assists</td>\n            <td>Penalty </td>\n        </tr>';for(let t of e)a+=`<tr class="item-container">\n            <td class="player-td">\n                <span class="number">${t.player_place}</span>\n                <span class="name">${t.player_name}</span>\n            </td>\n            <td class="team-player">\n                <span class="name">${t.team_name}</span>\n            </td>\n            <td>${t.goals} <span class="caption-td">goals<span></td>\n            <td>${t.assists?t.assists:0} <span class="caption-td">assists<span></td>\n            <td>${t.penalty_goals?t.penalty_goals:0} <span class="caption-td">penalty<span></td>\n        </tr>`;return a+="</table>",document.querySelector(".current-item").innerHTML=a,document.querySelector(".info-league .active").classList.remove("active"),document.querySelector(".info-league #scorer").classList.add("active"),"scorer"})(v):(0,i.Z)(t,"calendar")})),(0,d.b)(),u=setInterval((async()=>{"calendar"===g?(g=(0,i.Z)(t,"calendar"),t=await(0,s.Z)(new Date,(0,l.Cx)(),a),t=(0,r.Z)(t,"ASC"),"calendar"===g&&(g=(0,i.Z)(t,"calendar"))):"result"===g&&(g=(0,i.Z)(h,"result"),h=await(0,s.Z)((0,l.PD)(),new Date,a),h=(0,r.Z)(h),h.shift(),"result"===g&&(g=(0,i.Z)(h,"result")))}),55e3)};function _(){clearInterval(u)}},375:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=game=>{let moment=[],goal=game.goalscorer,card=game.cards,substitutions=game.substitutions;for(let e of goal)moment.push({time:e.time,team:e.home_scorer?"home":"away",type:"goal",player:e.home_scorer||e.away_scorer,icon:"assets/img/goal.png"});for(let e of card)moment.push({time:e.time,team:e.home_fault?"home":"away",type:"yellow card"===e.card?"yellow-card":"red-card",player:e.home_fault||e.away_fault,icon:"yellow card"===e.card?"assets/img/yellow-card.png":"assets/img/red-card.png"});for(let e of substitutions.home)moment.push({time:e.time,team:"home",type:"substitution",player:e.substitution.split(" | ")});for(let e of substitutions.away)moment.push({time:e.time,team:"away",type:"substitution",player:e.substitution.split(" | ")});moment.sort(((a,b)=>eval(a.time)-eval(b.time)));let momentContainer=document.querySelector(".moment-container"),momentHTML="";for(let e of moment)momentHTML+=`<div class="moment ${e.team}">\n            <span class="time ${e.type}">${e.time}</span>`,"substitution"===e.type?momentHTML+=`<div class="item substitution">\n                <span class="in">in: ${e.player[1]}</span>\n                <span class="ti ti-reload" id="icon-substitute"></span>\n                <span class="out">out: ${e.player[0]}</span>\n            </div>`:momentHTML+=`<div class="item">\n                <img src="${e.icon}" alt="${e.type}">\n                <span class="scorer">${e.player}</span>\n            </div>`,momentHTML+='<div class="bar"></div>\n        </div>';moment.length>0&&(momentHTML+='\x3c!-- voir plus  --\x3e\n        <div class="show-more"><span>show more</span></div>'),momentContainer.innerHTML=momentHTML;let showMore=document.querySelector(".show-more");showMore&&showMore.addEventListener("click",(()=>{momentContainer.style.height="auto",showMore.style.display="none"}))}},313:(e,a,t)=>{t.r(a),t.d(a,{clearIntervalInfoMatch:()=>g,default:()=>u});var n=t(721),s=t(2),i=t(212);var l=t(375);const o=(e=!1,a)=>{e||Promise.resolve().then(t.bind(t,2)).then((e=>e.default(`game/pregame/${a.match_id}`)));let n={system:a.match_hometeam_system||"4-3-3",lineup:a.lineup.home.starting_lineups,coach:a.lineup.home.coach.length>0?a.lineup.home.coach[0].lineup_player:"to wait"},s={system:a.match_awayteam_system||"4-3-3",lineup:a.lineup.away.starting_lineups,coach:a.lineup.away.coach.length>0?a.lineup.away.coach[0].lineup_player:"to wait"};n.lineup.sort(((e,a)=>e.lineup_position-a.lineup_position)),s.lineup.sort(((e,a)=>e.lineup_position-a.lineup_position));let i="";if(n.lineup.length>0){i+=`<div class="lineup">\n            <img src="assets/img/terrain.png" alt="terrain" onerror="this.src = '../../assets/img/terrain.png'">\n            <div class="players-container">\n                <div class="home">\n                    \x3c!-- system  --\x3e\n                    <span class="system">${n.system}</span>\n                    <div class="row-item">\n                        <div class="player">\n                            <div class ="icon-player">${n.lineup[0].lineup_number}</div>\n                            <span class="player-name">${n.lineup[0].lineup_player}</span>\n                            <span class="player-name-resp">${n.lineup[0].lineup_player}</span>\n                        </div>\n                    </div>`,n.system=n.system.split("-");let e=1;for(let a of n.system){i+='<div class="row-item">';for(let t=1;t<=a;t++)i+=`<div class="player">\n                                <div class ="icon-player">${n.lineup[e].lineup_number}</div>\n                                <span class="player-name">${n.lineup[e].lineup_player}</span>\n                                <span class="player-name-resp">${n.lineup[e].lineup_player}</span>\n                            </div>`,e++;i+="</div>"}i+=`</div>\n                <div class="away">\n                    \x3c!-- system  --\x3e\n                    <span class="system">${s.system}</span>\n                    <div class="row-item">\n                        <div class="player">\n                            <div class ="icon-player">${s.lineup[0].lineup_number}</div>\n                            <span class="player-name">${s.lineup[0].lineup_player}</span>\n                            <span class="player-name-resp">${s.lineup[0].lineup_player}</span>\n                        </div>\n                    </div>`,s.system=s.system.split("-"),e=1;for(let a of s.system){i+='<div class="row-item">';for(let t=1;t<=a;t++)i+=`<div class="player">\n                                <div class ="icon-player">${s.lineup[e].lineup_number}</div>\n                                <span class="player-name">${s.lineup[e].lineup_player}</span>\n                                <span class="player-name-resp">${s.lineup[e].lineup_player}</span>\n                            </div>`,e++;i+="</div>"}i+="</div>\n            </div>\n        </div>"}return i+=`<div class="coach-missing">\n        \x3c!-- coach  --\x3e\n        <div class="coach">\n            <div class="team">\n                <div class="home">\n                    <img src="${a.team_home_badge||"assets/img/logo2.png"}" alt="icon-team">\n                    <span class="team-name">${a.match_hometeam_name}</span>\n                </div>\n                <div class="away">\n                    <img src="${a.team_away_badge||"assets/img/logo2.png"}" alt="icon-team">\n                    <span class="team-name">${a.match_awayteam_name}</span>\n                </div>\n            </div>\n            <div class="manager">\n                <div class="home">\n                    <span class="caption">Manager : </span>\n                    <span class="manager-name">${n.coach}</span>\n                </div>\n                <div class="away">\n                    <span class="caption">Manager : </span>\n                    <span class="manager-name">${s.coach}</span>\n                </div>\n            </div>\n        </div>\n    </div>\n    \x3c!-- end pre-game  --\x3e`,document.querySelector(".current-item").innerHTML=i,document.querySelector(".info-match .nav-match li.active").classList.remove("active"),document.querySelector("#pregame").classList.add("active"),"pregame"};var c=t(337);const r=(e=!1,a)=>{e||Promise.resolve().then(t.bind(t,2)).then((e=>e.default(`game/stats/${a.match_id}`)));let n=a.statistics.reverse(),s='<div class="statistics">\n        <h4>Statistics</h4>';for(let e of n)s+=`<div class="row-item">\n                <span class="home">${e.home}</span>\n                <span class="item">${e.type}</span>\n                <span class="away">${e.away}</span>\n            </div>`;return s+="</div>",document.querySelector(".current-item").innerHTML=s,document.querySelector(".info-match .nav-match li.active").classList.remove("active"),document.querySelector("#stats").classList.add("active"),"stats"};let d,m,p=!1;async function u(e=!1,a,g){p||((0,i.V)(),window.scroll(0,0));let h=[],_=[];h=await(async e=>await new Promise(((a,t)=>{fetch(`https://apiv3.apifootball.com/?action=get_events&APIkey=92268e4434769b7515b45be3b45cd3d9bdc9d3e4cf62885a85ada0a22c9acf8b&match_id=${e}&timezone=Africa/Nairobi`,{method:"get"}).then((e=>e.json())).then((e=>{a(e[0])}))})))(a),(e=>{let a=document.querySelector(".current-element"),n="",s=e.match_awayteam_id,i=e.match_hometeam_id;n="1"===e.match_live?isNaN(e.match_status)?e.match_status:e.match_status+" min":"Postponed"===e.match_status?"postponed":e.match_time;let l=`<div class="info-match">\n        <h3 class="country-league" id="l${e.league_id}">\n            <img src="${e.country_logo||"assets/img/logo2.png"}" alt="icon-country" onerror="this.src = 'assets/img/logo2.png'">\n            <span class="country">${e.country_name} : </span>\n            <span class="league">${e.league_name}</span>\n        </h3>\n        <div class="match ${"1"==e.match_live?"live":""}">\n            <div class="home team">\n                <img src="${e.team_home_badge||"assets/img/logo2.png"}" alt="icon-team" onerror="this.src = 'assets/img/logo2.png'">\n                <span class="team-name">${e.match_hometeam_name}</span>\n                <span class="score">${e.match_hometeam_score}</span>\n            </div>\n            <div class="info">\n                <span class="hour-match">${n}</span>\n                <span class="date-match">${e.match_date}</span>\n            </div>\n            <div class="away team">\n                <span class="score">${e.match_awayteam_score}</span>\n                <img src="${e.team_away_badge||"assets/img/logo2.png"}" alt="icon-team" onerror="this.src = 'assets/img/logo2.png'">\n                <span class="team-name">${e.match_awayteam_name}</span>\n            </div>\n        </div>\n        \x3c!-- moment fort  --\x3e\n        <div class="moment-container"></div>\n        <ul class="nav-match nav-info">\n            <li class="active" id="pregame">Pre-game</li>\n            <li id="standing" class="">Standing</li>\n            <li id="stats" class="">Stats</li> \n        </ul>\n        <div class="current-item">\n            \n        </div>\n    </div>`;a.innerHTML=l;let o=document.querySelector("#icon-toggle-calendar");o&&(o.style.visibility="hidden");let c=document.querySelector(".info-match h3");c.addEventListener("click",(()=>{t.e(114).then(t.bind(t,114)).then((e=>e.default(!1,c.id)))})),document.querySelector(".info-match .home").addEventListener("click",(()=>{t.e(785).then(t.bind(t,785)).then((a=>a.default(!1,e.league_id,i)))})),document.querySelector(".info-match .away").addEventListener("click",(()=>{t.e(785).then(t.bind(t,785)).then((a=>a.default(!1,e.league_id,s)))}))})(h),(0,l.Z)(h),"standing"===g||"standing"===m?(_=await(0,n.Z)(h.league_id),e||(0,s.default)(`game/standing/${h.match_id}`),m=(0,c.Z)(_,h.match_hometeam_id,h.match_awayteam_id)):"stats"===g||"stats"===m?((0,n.Z)(h.league_id).then((e=>_=e)),m=r(e,h)):((0,n.Z)(h.league_id).then((e=>_=e)),m=o(e,h)),(0,i.b)(),document.querySelector(".nav-match").addEventListener("click",(a=>{(0,i.V)(),"standing"===a.target.id?((0,i.V)(),e||(0,s.default)(`game/standing/${h.match_id}`),m=(0,c.Z)(_,h.match_hometeam_id,h.match_awayteam_id),(0,i.b)()):"stats"===a.target.id?((0,i.V)(),m=r(e,h),(0,i.b)()):((0,i.V)(),m=o(e,h),(0,i.b)())})),p||setTimeout((()=>{d=setInterval((async()=>{p=!0,u(!0,a)}),55e3)}),2e3)}function g(){clearInterval(d),p=!1}},186:(e,a,t)=>{t.r(a),t.d(a,{default:()=>r,getLeagues:()=>d});var n=t(526),s=t(852);let i=document.querySelector(".list-league"),l=(0,n.Z)(),o=(0,n.N)();l=l.split(","),o=o.split(",");let c=[];const r=async()=>{fetch("https://apiv3.apifootball.com/?action=get_leagues&APIkey=92268e4434769b7515b45be3b45cd3d9bdc9d3e4cf62885a85ada0a22c9acf8b",{method:"get"}).then((e=>e.json())).then((e=>{c=e.filter((e=>l.includes(e.country_name)&&o.includes(e.league_name)));let a=c.map((e=>e.league_id)),t=(0,s.up)(a),n=(0,s.Pn)(a),r=1;for(let e of n)c[e.index].league_logo=e.photo;for(let e of t)c[e.index].number=r,c[e.index].league_logo=e.photo,r++;for(let e of c)e.number||(e.number=r,r++);c.sort(((e,a)=>e.league_name-a.league_name)),c.sort(((e,a)=>e.number-a.number));let d="";for(let e of c)d+=`<li class="list-item kk${e.league_id}" id="${e.league_id}" onclick="league.getLeagueMatch(${e.league_id}, this)">\n                    <img src="${e.league_logo}" alt="icon-league" id="${e.league_id}" onerror="this.src = 'assets/img/logo2.png'">\n                    <span id="${e.league_id}">${e.league_name}\n                        <span class="line-list" id="${e.league_id}"></span>\n                    </span>\n                </li>`;i.innerHTML=d})).catch((e=>console.log(e)))};function d(){return c}},526:(e,a,t)=>{function n(){return"England,Belgium,Germany,Croatia,Spain,Czech Republic,France,Romania,Bulgaria,Italy,intl,eurocups,South Africa,Qatar,Worldcup,USA,Denmark,Norway,Sweden,Korea Republic,Netherlands,Mexico,Argentina,Portugal,Russia,Brazil,Switzerland,Brazil,Morocco"}function s(){return"Championship,Community Shield,FA Cup,League Cup,League One,Premier League,EFL Trophy,National League,Women's Championship,Copa del Rey,La Liga,Segunda División,Super Cup,Primera División Femenina,Primera División RFEF,DFB Pokal,Regionalliga,Super Cup,2. Bundesliga,Bundesliga,Ligue 1,Ligue 2,Coupe de la Ligue,Feminine Division 1,National 1,Trophée des Champions,Coupe de France,Serie A,Serie B,Super Cup,Coppa Italia,First Division A,Challenger Pro League,First NL,Czech Liga,Liga I,First League,CAF Super Cup,Club Friendlies,COSAFA Cup,Friendlies,UEFA U21 Championship,Africa Cup of Nations,CAF Champions League,CAF Confederation Cup,UEFA Champions League,UEFA Champions League - Group Stage,UEFA Europa League,UEFA Europa League - Group Stage,UEFA Youth League,UEFA Youth League - Group Stage,PSL,QSL Cup,World Cup,MLS,Superliga,1. Division,Damallsvenskan,K League 1,Eredivisie,Eerste Divisie,Liga MX,Liga Profesional Argentina,Primeira Liga,Premier League,Serie A,Super League,Botola Pro,Premier League"}t.d(a,{N:()=>s,Z:()=>n})},852:(e,a,t)=>{function n(e){return[{index:e.indexOf("152"),id:152,photo:"assets/img/pl.jpg"},{index:e.indexOf("175"),id:175,photo:"assets/img/Bundesliga.svg.png"},{index:e.indexOf("302"),id:302,photo:"assets/img/laliga.png"},{index:e.indexOf("168"),id:168,photo:"assets/img/ligue1.png"},{index:e.indexOf("207"),id:207,photo:"assets/img/serie a.svg"},{index:e.indexOf("3"),id:3,photo:"assets/img/ldc.png"},{index:e.indexOf("4"),id:4,photo:"assets/img/uel.png"},{index:e.indexOf("244"),id:244,photo:"assets/img/eredivisie.png"},{index:e.indexOf("28"),id:28,photo:"assets/img/worldcup.jpg"}]}function s(e){return[{index:e.indexOf("301"),photo:"assets/img/laliga.png"},{index:e.indexOf("688"),photo:"assets/img/cosafa.png"},{index:e.indexOf("365"),photo:"assets/img/psl.jpeg"},{index:e.indexOf("579"),photo:"assets/img/PrimeiraLigaBrasil.png"},{index:e.indexOf("647"),photo:"assets/img/qsl.png"},{index:e.indexOf("412"),photo:"assets/img/supercoupnorway.png"},{index:e.indexOf("380"),photo:"assets/img/Czech_Republic_Football_Supercup.jpg"},{index:e.indexOf("268"),photo:"assets/img/supertaca.jpg"},{index:e.indexOf("574"),photo:"assets/img/belgium-super-league-women.webp"},{index:e.indexOf("652"),photo:"assets/img/FA_Women's_Championship.png"}]}t.d(a,{Pn:()=>s,up:()=>n})}}]);
//# sourceMappingURL=350.8fa8ed2e.js.map