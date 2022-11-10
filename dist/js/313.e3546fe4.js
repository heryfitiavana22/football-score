"use strict";(self.webpackChunkFootball_score=self.webpackChunkFootball_score||[]).push([[313],{337:(e,a,n)=>{n.d(a,{Z:()=>t});const t=(e,...a)=>{let t='<table class="standing-container">\n        <tr class="head-table">\n            <td class="team">Team</td>\n            <td>P <span class="caption-td">played<span></td>\n            <td>GF <span class="caption-td">goal for<span></td>\n            <td>GA <span class="caption-td">goal against<span></td>\n            <td>GD <span class="caption-td gd">goal difference<span></td>\n            <td>Pts <span class="caption-td">points<span></td>\n        </tr>';for(let n of e)t+=`<tr class="item-container ${a.includes(n.team_id)?"current-team":""}" id="${n.league_id}t${n.team_id}">\n                <td class="team" id="${n.league_id}t${n.team_id}">\n                    <span class="number" id="${n.league_id}t${n.team_id}">${n.overall_league_position}</span> \n                    <img src="${n.team_badge||"assets/img/logo2.png"}" alt="icon-team" id="${n.league_id}t${n.team_id}" onerror="this.src = '../../assets/img/logo2.png'">\n                    <span class="name" id="${n.league_id}t${n.team_id}">${n.team_name}</span>\n                </td>\n                <td id="${n.league_id}t${n.team_id}">\n                    ${n.overall_league_payed} \n                    <span class="caption-td">played<span>\n                </td>\n                <td id="${n.league_id}t${n.team_id}">\n                    ${n.overall_league_GF}\n                    <span class="caption-td">goal for<span>\n                </td>\n                <td id="${n.league_id}t${n.team_id}">\n                    ${n.overall_league_GA}\n                    <span class="caption-td">goal against<span>\n                </td>\n                <td id="${n.league_id}t${n.team_id}">\n                    ${n.overall_league_GF-n.overall_league_GA}\n                    <span class="caption-td gd">goal difference<span>\n                </td>\n                <td id="${n.league_id}t${n.team_id}">\n                    ${n.overall_league_PTS}\n                    <span class="caption-td">points<span>\n                </td>\n            </tr>`;return t+="</table>",document.querySelector(".current-item").innerHTML=t,document.querySelector(".nav-info li.active").classList.remove("active"),document.querySelector("#standing").classList.add("active"),document.querySelector(".standing-container").addEventListener("click",(async e=>{let a=e.target.attributes.class;if(a&&a.nodeValue.includes("current-team"))return;let t=e.target.id.split("t");2===t.length&&(await n.e(785).then(n.bind(n,785))).default(!1,...t)})),"standing"}},721:(e,a,n)=>{n.d(a,{Z:()=>t});const t=async e=>await new Promise(((a,n)=>{fetch(`https://apiv3.apifootball.com/?action=get_standings&league_id=${e}&APIkey=92268e4434769b7515b45be3b45cd3d9bdc9d3e4cf62885a85ada0a22c9acf8b`,{method:"get"}).then((e=>e.json())).then((e=>{a(e.error?[]:e)}))}))},375:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=game=>{let moment=[],goal=game.goalscorer,card=game.cards,substitutions=game.substitutions;for(let e of goal)moment.push({time:e.time,team:e.home_scorer?"home":"away",type:"goal",player:e.home_scorer||e.away_scorer,icon:"assets/img/goal.png"});for(let e of card)moment.push({time:e.time,team:e.home_fault?"home":"away",type:"yellow card"===e.card?"yellow-card":"red-card",player:e.home_fault||e.away_fault,icon:"yellow card"===e.card?"assets/img/yellow-card.png":"assets/img/red-card.png"});for(let e of substitutions.home)moment.push({time:e.time,team:"home",type:"substitution",player:e.substitution.split(" | ")});for(let e of substitutions.away)moment.push({time:e.time,team:"away",type:"substitution",player:e.substitution.split(" | ")});moment.sort(((a,b)=>eval(a.time)-eval(b.time)));let momentContainer=document.querySelector(".moment-container"),momentHTML="";for(let e of moment)momentHTML+=`<div class="moment ${e.team}">\n            <span class="time ${e.type}">${e.time}</span>`,"substitution"===e.type?momentHTML+=`<div class="item substitution">\n                <span class="in">in: ${e.player[1]}</span>\n                <span class="ti ti-reload" id="icon-substitute"></span>\n                <span class="out">out: ${e.player[0]}</span>\n            </div>`:momentHTML+=`<div class="item">\n                <img src="${e.icon}" alt="${e.type}">\n                <span class="scorer">${e.player}</span>\n            </div>`,momentHTML+='<div class="bar"></div>\n        </div>';moment.length>0&&(momentHTML+='\x3c!-- voir plus  --\x3e\n        <div class="show-more"><span>show more</span></div>'),momentContainer.innerHTML=momentHTML;let showMore=document.querySelector(".show-more");showMore&&showMore.addEventListener("click",(()=>{momentContainer.style.height="auto",showMore.style.display="none"}))}},313:(e,a,n)=>{n.r(a),n.d(a,{clearIntervalInfoMatch:()=>_,default:()=>u});var t=n(721),s=n(2),i=n(212);var l=n(375);const c=(e=!1,a)=>{e||Promise.resolve().then(n.bind(n,2)).then((e=>e.default(`game/pregame/${a.match_id}`)));let t={system:a.match_hometeam_system||"4-3-3",lineup:a.lineup.home.starting_lineups,coach:a.lineup.home.coach.length>0?a.lineup.home.coach[0].lineup_player:"to wait"},s={system:a.match_awayteam_system||"4-3-3",lineup:a.lineup.away.starting_lineups,coach:a.lineup.away.coach.length>0?a.lineup.away.coach[0].lineup_player:"to wait"};t.lineup.sort(((e,a)=>e.lineup_position-a.lineup_position)),s.lineup.sort(((e,a)=>e.lineup_position-a.lineup_position));let i="";if(t.lineup.length>0){i+=`<div class="lineup">\n            <img src="assets/img/terrain.png" alt="terrain" onerror="this.src = '../../assets/img/terrain.png'">\n            <div class="players-container">\n                <div class="home">\n                    \x3c!-- system  --\x3e\n                    <span class="system">${t.system}</span>\n                    <div class="row-item">\n                        <div class="player">\n                            <div class ="icon-player">${t.lineup[0].lineup_number}</div>\n                            <span class="player-name">${t.lineup[0].lineup_player}</span>\n                            <span class="player-name-resp">${t.lineup[0].lineup_player}</span>\n                        </div>\n                    </div>`,t.system=t.system.split("-");let e=1;for(let a of t.system){i+='<div class="row-item">';for(let n=1;n<=a;n++)i+=`<div class="player">\n                                <div class ="icon-player">${t.lineup[e].lineup_number}</div>\n                                <span class="player-name">${t.lineup[e].lineup_player}</span>\n                                <span class="player-name-resp">${t.lineup[e].lineup_player}</span>\n                            </div>`,e++;i+="</div>"}i+=`</div>\n                <div class="away">\n                    \x3c!-- system  --\x3e\n                    <span class="system">${s.system}</span>\n                    <div class="row-item">\n                        <div class="player">\n                            <div class ="icon-player">${s.lineup[0].lineup_number}</div>\n                            <span class="player-name">${s.lineup[0].lineup_player}</span>\n                            <span class="player-name-resp">${s.lineup[0].lineup_player}</span>\n                        </div>\n                    </div>`,s.system=s.system.split("-"),e=1;for(let a of s.system){i+='<div class="row-item">';for(let n=1;n<=a;n++)i+=`<div class="player">\n                                <div class ="icon-player">${s.lineup[e].lineup_number}</div>\n                                <span class="player-name">${s.lineup[e].lineup_player}</span>\n                                <span class="player-name-resp">${s.lineup[e].lineup_player}</span>\n                            </div>`,e++;i+="</div>"}i+="</div>\n            </div>\n        </div>"}return i+=`<div class="coach-missing">\n        \x3c!-- coach  --\x3e\n        <div class="coach">\n            <div class="team">\n                <div class="home">\n                    <img src="${a.team_home_badge||"assets/img/logo2.png"}" alt="icon-team">\n                    <span class="team-name">${a.match_hometeam_name}</span>\n                </div>\n                <div class="away">\n                    <img src="${a.team_away_badge||"assets/img/logo2.png"}" alt="icon-team">\n                    <span class="team-name">${a.match_awayteam_name}</span>\n                </div>\n            </div>\n            <div class="manager">\n                <div class="home">\n                    <span class="caption">Manager : </span>\n                    <span class="manager-name">${t.coach}</span>\n                </div>\n                <div class="away">\n                    <span class="caption">Manager : </span>\n                    <span class="manager-name">${s.coach}</span>\n                </div>\n            </div>\n        </div>\n    </div>\n    \x3c!-- end pre-game  --\x3e`,document.querySelector(".current-item").innerHTML=i,document.querySelector(".info-match .nav-match li.active").classList.remove("active"),document.querySelector("#pregame").classList.add("active"),"pregame"};var o=n(337);const m=(e=!1,a)=>{e||Promise.resolve().then(n.bind(n,2)).then((e=>e.default(`game/stats/${a.match_id}`)));let t=a.statistics.reverse(),s='<div class="statistics">\n        <h4>Statistics</h4>';for(let e of t)s+=`<div class="row-item">\n                <span class="home">${e.home}</span>\n                <span class="item">${e.type}</span>\n                <span class="away">${e.away}</span>\n            </div>`;return s+="</div>",document.querySelector(".current-item").innerHTML=s,document.querySelector(".info-match .nav-match li.active").classList.remove("active"),document.querySelector("#stats").classList.add("active"),"stat"};let d,r,p=!1;async function u(e=!1,a,d){p||((0,i.V)(),window.scroll(0,0));let u=[],_=[];u=await(async e=>await new Promise(((a,n)=>{fetch(`https://apiv3.apifootball.com/?action=get_events&APIkey=92268e4434769b7515b45be3b45cd3d9bdc9d3e4cf62885a85ada0a22c9acf8b&match_id=${e}&timezone=Africa/Nairobi`,{method:"get"}).then((e=>e.json())).then((e=>{a(e[0])}))})))(a),(e=>{let a=document.querySelector(".current-element"),t="",s=e.match_awayteam_id,i=e.match_hometeam_id;t="1"===e.match_live?isNaN(e.match_status)?e.match_status:e.match_status+" min":"Postponed"===e.match_status?"postponed":e.match_time;let l=`<div class="info-match">\n        <h3 class="country-league" id="l${e.league_id}">\n            <img src="${e.country_logo||"assets/img/logo2.png"}" alt="icon-country" onerror="this.src = 'assets/img/logo2.png'">\n            <span class="country">${e.country_name} : </span>\n            <span class="league">${e.league_name}</span>\n        </h3>\n        <div class="match ${"1"==e.match_live?"live":""}">\n            <div class="home team">\n                <img src="${e.team_home_badge||"assets/img/logo2.png"}" alt="icon-team" onerror="this.src = 'assets/img/logo2.png'">\n                <span class="team-name">${e.match_hometeam_name}</span>\n                <span class="score">${e.match_hometeam_score}</span>\n            </div>\n            <div class="info">\n                <span class="hour-match">${t}</span>\n                <span class="date-match">${e.match_date}</span>\n            </div>\n            <div class="away team">\n                <span class="score">${e.match_awayteam_score}</span>\n                <img src="${e.team_away_badge||"assets/img/logo2.png"}" alt="icon-team" onerror="this.src = 'assets/img/logo2.png'">\n                <span class="team-name">${e.match_awayteam_name}</span>\n            </div>\n        </div>\n        \x3c!-- moment fort  --\x3e\n        <div class="moment-container"></div>\n        <ul class="nav-match nav-info">\n            <li class="active" id="pregame">Pre-game</li>\n            <li id="standing" class="">Standing</li>\n            <li id="stats" class="">Stats</li> \n        </ul>\n        <div class="current-item">\n            \n        </div>\n    </div>`;a.innerHTML=l;let c=document.querySelector("#icon-toggle-calendar");c&&(c.style.visibility="hidden");let o=document.querySelector(".info-match h3");o.addEventListener("click",(()=>{n.e(63).then(n.bind(n,114)).then((e=>e.default(!1,o.id)))})),document.querySelector(".info-match .home").addEventListener("click",(()=>{n.e(785).then(n.bind(n,785)).then((a=>a.default(!1,e.league_id,i)))})),document.querySelector(".info-match .away").addEventListener("click",(()=>{n.e(785).then(n.bind(n,785)).then((a=>a.default(!1,e.league_id,s)))}))})(u),(0,l.Z)(u),"standing"===d||"standing"===r?(_=await(0,t.Z)(u.league_id),e||(0,s.default)(`game/standing/${u.match_id}`),r=(0,o.Z)(_,u.match_hometeam_id,u.match_awayteam_id)):"stats"===d||"stats"===r?((0,t.Z)(u.league_id).then((e=>_=e)),r=m(e,u)):((0,t.Z)(u.league_id).then((e=>_=e)),r=c(e,u)),(0,i.b)(),document.querySelector(".nav-match").addEventListener("click",(a=>{(0,i.V)(),"standing"===a.target.id?((0,i.V)(),e||(0,s.default)(`game/standing/${u.match_id}`),r=(0,o.Z)(_,u.match_hometeam_id,u.match_awayteam_id),(0,i.b)()):"stats"===a.target.id?((0,i.V)(),r=m(e,u),(0,i.b)()):((0,i.V)(),r=c(e,u),(0,i.b)())}))}function _(){clearInterval(d),p=!1}}}]);
//# sourceMappingURL=313.e3546fe4.js.map