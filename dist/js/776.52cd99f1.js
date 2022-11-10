"use strict";(self.webpackChunkFootball_score=self.webpackChunkFootball_score||[]).push([[776],{84:(e,a,t)=>{function n(e){let a=new Date(e);return a.getFullYear()+"-"+(a.getMonth()+1)+"-"+a.getDate()}function i(e=new Date){let a=new Date(e);return a.getMonth()+1>=8?a.getFullYear()+"-08-01":a.getFullYear()-1+"-08-01"}function s(e=new Date){let a=new Date(e);return a.getMonth()+1>=8?a.getFullYear()+1+"-07-01":a.getFullYear()+"-07-01"}t.d(a,{Cx:()=>s,EP:()=>n,PD:()=>i})},33:(e,a,t)=>{t.d(a,{Z:()=>l});var n=t(526),i=t(84);let s=(0,n.N)(),o=(0,n.Z)();const l=async(e,a=e,t=0,n=0)=>await new Promise(((l,c)=>{let r=`https://apiv3.apifootball.com/?action=get_events&from=${(0,i.EP)(e)}&to=${(0,i.EP)(a)}&APIkey=92268e4434769b7515b45be3b45cd3d9bdc9d3e4cf62885a85ada0a22c9acf8b&timezone=Africa/Nairobi`;t>0&&(r+=`&league_id=${t}`),n>0&&(r+=`&team_id=${n}`),console.log(r),fetch(r,{method:"get"}).then((e=>e.json())).then((e=>{if(e.error)return l([]);let a=e.filter((e=>o.includes(e.country_name)&&s.includes(e.league_name)));a.sort(((e,a)=>new Date(`${e.match_date} ${e.match_time}`)-new Date(`${a.match_date} ${a.match_time}`))),l(a)})).catch((e=>console.log(e)))}))},776:(e,a,t)=>{t.r(a),t.d(a,{clearIntervalListMatch:()=>v,listMatch:()=>p,listMatchFinished:()=>_,listMatchLive:()=>y,listMatchToday:()=>f,updateScore:()=>C});var n=t(33),i=t(84),s=t(852),o=t(212);function l(e){let a=document.querySelector(".current-element"),n="";0===e.length&&(n='<p style="padding-left:15px">No match</p>');for(let a of e){n+=`<div class="matchs">\n            <h3 id="l${a.id}">\n                <img src="${a.logoCountry}" alt="icon-country" id="l${a.id}" onerror="this.src = 'assets/img/logo2.png'">\n                <div class="d-inline" id="l${a.id}">\n                    <span class="country" id="l${a.id}">${a.countryName}</span>\n                    <span class="league" id="l${a.id}">${a.leagueName}</span>\n                </div>\n            </h3>\n            <ul class="list-match">`;for(let e of a.game)"1"===e.match_live?n+=`<li class="live" id="${e.match_id}">\n                    <span class="hour-match" id="${e.match_id}">${isNaN(e.match_status)?e.match_status:e.match_status+" min"}</span>`:n+=`<li id="${e.match_id}">\n                    <span class="hour-match" id="${e.match_id}">${"Postponed"===e.match_status?"postponed":e.match_time}</span>`,n+=`<div class="match-item" id="${e.match_id}">\n                    <div class="home" id="${e.match_id}">\n                        <span id="${e.match_id}">${e.match_hometeam_name}</span>\n                        <img src="${e.team_home_badge||"assets/img/logo2.png"}" alt="icon-team" id="${e.match_id}" onerror="this.src = 'assets/img/logo2.png'">\n                        <span class="score-home score" id="${e.match_id}">${e.match_hometeam_score.length>0?e.match_hometeam_score:"  "}</span> \n                    </div>\n                    <span class="vs" id="${e.match_id}">vs</span>\n                    <div class="away" id="${e.match_id}">\n                        <span class="away-home score" id="${e.match_id}">${e.match_awayteam_score.length>0?e.match_awayteam_score:"  "}</span>\n                        <img src="${e.team_away_badge||"assets/img/logo2.png"}" alt="icon-team" id="${e.match_id}" onerror="this.src = 'assets/img/logo2.png'">\n                        <span id="${e.match_id}">${e.match_awayteam_name}</span>\n                    </div>\n                </div>\n            </li>`;n+="   </ul>\n        </div>"}let i=`<div class="match-container listMatch">\n        <nav class="navbar-match">\n            <ul class="nav-list">\n                <li class="active col-4 match-today">Today</li>\n                <li class="col-4 match-live">Live</li>\n                <li class="col-4 match-finished">Finished</li>\n            </ul>\n        </nav>\n        ${n}\n    </div>\n    \x3c!-- actual  --\x3e\n    <div class="actual">\n        \x3c!-- calendar  --\x3e\n        <div class="calendar-month">\n            <div class="current-month">\n                <div class="jump-month left">\n                    <div class="jump" onclick="calendar.downMonth();">\n                        <span class="ti ti-angle-left"></span>\n                    </div>\n    \n                </div>\n                <div class="current-date">\n                    date du jour\n                </div>\n                <div class="jump-month right">\n                    <div class="jump" onclick="calendar.upMonth()">\n                        <span class="ti ti-angle-right"></span>\n                    </div>\n                </div>\n            </div>\n            <div class="day-container">\n                <table style="border-collapse: collapse; display: flex;">\n                    <tbody style="width: 100%;" class="addDayMonth">\n                        <tr class="week">\n                            <td>Lun</td>\n                            <td>Mar</td>\n                            <td>Mer</td>\n                            <td>Jeu</td>\n                            <td>Ven</td>\n                            <td>Sam</td>\n                            <td>Dim</td>\n                        </tr>\n                        \x3c!-- day month here --\x3e\n                    </tbody>\n                \n                </table>\n            </div>\n        </div>\n        <span id="close-calendar" class="ti ti-close close""></span>\n    </div>`;a.innerHTML=i,i=document.querySelector(".listMatch"),i.addEventListener("click",(e=>{let a=e.target.id;if(a.includes("l"))return t.e(321).then(t.bind(t,114)).then((e=>e.default(!1,a)));isNaN(a)||""===a||t.e(313).then(t.bind(t,313)).then((e=>e.default(!1,a)))})),document.querySelector(".match-today").addEventListener("click",(()=>{f()})),document.querySelector(".match-live").addEventListener("click",(()=>{y()})),document.querySelector(".match-finished").addEventListener("click",(()=>{_()})),document.querySelector("#close-calendar").addEventListener("click",(()=>{document.querySelector(".actual").style.top="-100%"}))}var c=t(625),r=t(2);let d,u=[],m=document.querySelector(".navbar-match .nav-list li.active"),g=f,h=!1;async function p(e=!1,a,t,l){u=[],a=(0,i.EP)(a),e||(0,r.default)(`listgame/${a}${t?"&"+t:""}`);let c=await(0,n.Z)(a,a,t),m=[],v=[];if(t>0){let e=document.querySelector(".list-league li.active");e&&e.classList.remove("active"),document.querySelector(".kk"+t).classList.add("active")}for(let e of c)m.includes(e.league_id)||(u.push({number:void 0,id:e.league_id,countryName:e.country_name,leagueName:e.league_name,logoCountry:e.country_logo||e.league_logo,game:c.filter((a=>a.league_id===e.league_id))}),m.push(e.league_id),v.push(e.country_id));let f=(0,s.up)(m),y=1;f=f.filter((e=>e.index>=0));for(let e of f)u[e.index].number=y,y++;for(let e of u)void 0===e.number&&(e.number=y,y++);v.includes("2")&&(u[v.indexOf("2")].logoCountry="assets/img/intl.png"),m.includes("4")&&(u[m.indexOf("4")].logoCountry="assets/img/uel.png"),m.includes("3")&&(u[m.indexOf("3")].logoCountry="assets/img/ldc.png"),u.sort(((e,a)=>e.number-a.number)),l&&(g=l),g(),(0,o.b)(),h||(d=setInterval((()=>{h=!0,p(!0,a,t)}),55e3))}function v(){clearInterval(d),h=!1}function f(){g=f,(0,o.V)(),l(u),m=document.querySelector(".match-container .nav-list li.active"),m.classList.remove("active"),m=document.querySelector(".match-today"),m.classList.add("active");let{currentYear:e,currentMonth:a,currentDate:t}=(0,c.getCurrentDate)();(0,c.deleteCurrentMonth)(),(0,c.createCalendar)(a,e,t),(0,o.b)()}async function y(){g=y,(0,o.V)();let e=[];for(let a of u)e.push({countryName:a.countryName,leagueName:a.leagueName,logoCountry:a.logoCountry,game:a.game.filter((e=>"1"===e.match_live))});e=e.filter((e=>e.game.length>0)),l(e),m=document.querySelector(".match-container .nav-list li.active"),m.classList.remove("active"),m=document.querySelector(".match-live"),m.classList.add("active");let{currentYear:a,currentMonth:t,currentDate:n}=(0,c.getCurrentDate)();(0,c.deleteCurrentMonth)(),(0,c.createCalendar)(t,a,n),(0,o.b)()}function _(){g=_;let e=[];e=u.map((e=>({countryName:e.countryName,leagueName:e.leagueName,logoCountry:e.logoCountry,game:e.game.filter((e=>"0"===e.match_live&&(e.match_hometeam_score.length>0||e.match_awayteam_score.length>0)))}))),e=e.filter((e=>e.game.length>0)),l(e),m=document.querySelector(".match-container .nav-list li.active"),m.classList.remove("active"),m=document.querySelector(".match-finished"),m.classList.add("active");let{currentYear:a,currentMonth:t,currentDate:n}=(0,c.getCurrentDate)();(0,c.deleteCurrentMonth)(),(0,c.createCalendar)(t,a,n),(0,o.b)()}async function C(){g()}},526:(e,a,t)=>{function n(){return"England,Belgium,Germany,Croatia,Spain,Czech Republic,France,Romania,Bulgaria,Italy,intl,eurocups,South Africa,Qatar,Worldcup,USA,Denmark,Norway,Sweden,Korea Republic,Netherlands,Mexico,Argentina,Portugal,Russia,Brazil,Switzerland,Brazil,Morocco"}function i(){return"Championship,Community Shield,FA Cup,League Cup,League One,Premier League,EFL Trophy,National League,Women's Championship,Copa del Rey,La Liga,Segunda División,Super Cup,Primera División Femenina,Primera División RFEF,DFB Pokal,Regionalliga,Super Cup,2. Bundesliga,Bundesliga,Ligue 1,Ligue 2,Coupe de la Ligue,Feminine Division 1,National 1,Trophée des Champions,Coupe de France,Serie A,Serie B,Super Cup,Coppa Italia,First Division A,Challenger Pro League,First NL,Czech Liga,Liga I,First League,CAF Super Cup,Club Friendlies,COSAFA Cup,Friendlies,UEFA U21 Championship,Africa Cup of Nations,CAF Champions League,CAF Confederation Cup,UEFA Champions League,UEFA Champions League - Group Stage,UEFA Europa League,UEFA Europa League - Group Stage,UEFA Youth League,UEFA Youth League - Group Stage,PSL,QSL Cup,World Cup,MLS,Superliga,1. Division,Damallsvenskan,K League 1,Eredivisie,Eerste Divisie,Liga MX,Liga Profesional Argentina,Primeira Liga,Premier League,Serie A,Super League,Botola Pro,Premier League"}t.d(a,{N:()=>i,Z:()=>n})},852:(e,a,t)=>{function n(e){return[{index:e.indexOf("152"),id:152,photo:"assets/img/pl.jpg"},{index:e.indexOf("175"),id:175,photo:"assets/img/Bundesliga.svg.png"},{index:e.indexOf("302"),id:302,photo:"assets/img/laliga.png"},{index:e.indexOf("168"),id:168,photo:"assets/img/ligue1.png"},{index:e.indexOf("207"),id:207,photo:"assets/img/serie a.svg"},{index:e.indexOf("3"),id:3,photo:"assets/img/ldc.png"},{index:e.indexOf("4"),id:4,photo:"assets/img/uel.png"},{index:e.indexOf("244"),id:244,photo:"assets/img/eredivisie.png"},{index:e.indexOf("28"),id:28,photo:"assets/img/worldcup.jpg"}]}function i(e){return[{index:e.indexOf("301"),photo:"assets/img/laliga.png"},{index:e.indexOf("688"),photo:"assets/img/cosafa.png"},{index:e.indexOf("365"),photo:"assets/img/psl.jpeg"},{index:e.indexOf("579"),photo:"assets/img/PrimeiraLigaBrasil.png"},{index:e.indexOf("647"),photo:"assets/img/qsl.png"},{index:e.indexOf("412"),photo:"assets/img/supercoupnorway.png"},{index:e.indexOf("380"),photo:"assets/img/Czech_Republic_Football_Supercup.jpg"},{index:e.indexOf("268"),photo:"assets/img/supertaca.jpg"},{index:e.indexOf("574"),photo:"assets/img/belgium-super-league-women.webp"},{index:e.indexOf("652"),photo:"assets/img/FA_Women's_Championship.png"}]}t.d(a,{Pn:()=>i,up:()=>n})}}]);
//# sourceMappingURL=776.52cd99f1.js.map