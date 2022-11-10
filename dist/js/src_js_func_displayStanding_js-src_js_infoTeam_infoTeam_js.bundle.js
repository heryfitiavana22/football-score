"use strict";
(self["webpackChunkFootball_score"] = self["webpackChunkFootball_score"] || []).push([["src_js_func_displayStanding_js-src_js_infoTeam_infoTeam_js"],{

/***/ "./src/js/func/displayMatchByDate.js":
/*!*******************************************!*\
  !*** ./src/js/func/displayMatchByDate.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _infoMatch_infoMatch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../infoMatch/infoMatch */ "./src/js/infoMatch/infoMatch.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((game, idHTML) => {
    // console.log(idHTML);
    // console.log(game);
    let listGameHTML =
    `<div class="listMatch">`;
    if(game.length === 0)
        listGameHTML +=  `<p style="padding-left:15px">to wait</p>`
    for(let date of game) {
        listGameHTML +=
        `<div class="matchs">
            <h3>${date.date}</h3>
            <ul class="list-match">`;
            for(let match of date.game) {
                // live match
                if(match.match_live === '1') 
                listGameHTML += 
                `<li class="live" id="${match.match_id}">
                    <span class="hour-match" id="${match.match_id}">${isNaN(match.match_status) ? match.match_status : ((match.match_status + ' min'))}</span>`;
                // match mbola tsy nandeha; finished game and postponed
                else 
                listGameHTML += 
                `<li id="${match.match_id}">
                    <span class="hour-match" id="${match.match_id}">${(match.match_status === 'Postponed') ? 'postponed' : match.match_time}</span>`
                listGameHTML += 
                    `<div class="match-item" id="${match.match_id}">
                        <div class="home" id="${match.match_id}">
                            <span id="${match.match_id}">${match.match_hometeam_name}</span>
                            <img src="${match.team_home_badge || 'assets/img/logo2.png'}" alt="icon-team" id="${match.match_id}" onerror="this.src = 'assets/img/logo2.png'">
                            <span class="score-home score" id="${match.match_id}">${(match.match_hometeam_score.length > 0) ? match.match_hometeam_score : '  '}</span> 
                        </div>
                        <span class="vs" id="${match.match_id}">vs</span>
                        <div class="away" id="${match.match_id}">
                            <span class="away-home score" id="${match.match_id}">${(match.match_awayteam_score.length > 0) ? match.match_awayteam_score : '  '}</span>
                            <img src="${match.team_away_badge || 'assets/img/logo2.png'}" alt="icon-team" id="${match.match_id}" onerror="this.src = 'assets/img/logo2.png'">
                            <span id="${match.match_id}">${match.match_awayteam_name}</span>
                        </div>
                    </div>
                </li>`;
            }
            `</ul>
        </div>`
    }
    listGameHTML +=
    `</div>`;
    document.querySelector('.current-item').innerHTML = listGameHTML
    document.querySelector('.nav-info .active').classList.remove('active')
    document.querySelector('#'+idHTML).classList.add('active')
    /* onclick match */
    document.querySelector('.listMatch').addEventListener('click', (e) => {
        let id = e.target.id
        if(isNaN(id) || id === '') 
            return; // au cas ou tsy nombre
        (0,_infoMatch_infoMatch__WEBPACK_IMPORTED_MODULE_0__["default"])(false, id)
    })
    return idHTML;
});


/***/ }),

/***/ "./src/js/func/displayStanding.js":
/*!****************************************!*\
  !*** ./src/js/func/displayStanding.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _infoTeam_infoTeam__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../infoTeam/infoTeam */ "./src/js/infoTeam/infoTeam.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((standing, ...idTeams) => {
    // console.log(idTeams);
    let standingHTML =
    `<table class="standing-container">
        <tr class="head-table">
            <td class="team">Team</td>
            <td>P <span>played<span></td>
            <td>GF <span>goal for<span></td>
            <td>GA <span>goal against<span></td>
            <td>GD <span>goal difference<span></td>
            <td>Pts <span>points<span></td>
        </tr>`;
        for(let element of standing) {
            standingHTML += 
            `<tr class="item-container ${idTeams.includes(element.team_id) ? 'current-team' : ''}" id="${element.league_id}t${element.team_id}">
                <td class="team" id="${element.league_id}t${element.team_id}">
                    <span class="number" id="${element.league_id}t${element.team_id}">${element.overall_league_position}</span> 
                    <img src="${element.team_badge || 'assets/img/logo2.png'}" alt="icon-team" id="${element.league_id}t${element.team_id}" onerror="this.src = '../../assets/img/logo2.png'">
                    <span class="name" id="${element.league_id}t${element.team_id}">${element.team_name}</span>
                </td>
                <td id="${element.league_id}t${element.team_id}">${element.overall_league_payed}</td>
                <td id="${element.league_id}t${element.team_id}">${element.overall_league_GF}</td>
                <td id="${element.league_id}t${element.team_id}">${element.overall_league_GA}</td>
                <td id="${element.league_id}t${element.team_id}">${element.overall_league_GF - element.overall_league_GA}</td>
                <td id="${element.league_id}t${element.team_id}">${element.overall_league_PTS}</td>
            </tr>`
        }
    standingHTML += `</table>`
    document.querySelector('.current-item').innerHTML = standingHTML
    // active
    document.querySelector('.nav-info li.active').classList.remove('active');
    document.querySelector('#standing').classList.add('active');

    document.querySelector('.standing-container').addEventListener('click', (e) => {
        // console.log(e.target.attributes.class);
        if(e.target.attributes.class.nodeValue.includes("current-team")) return

        let id = e.target.id.split('t');
        if(id.length !== 2) return

        ;(0,_infoTeam_infoTeam__WEBPACK_IMPORTED_MODULE_0__["default"])(false, ...id)
    })
    return "standing"
});

/***/ }),

/***/ "./src/js/func/filterByDate.js":
/*!*************************************!*\
  !*** ./src/js/func/filterByDate.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((game, type) => {
    let result = [],
        listDate = [];
    for (let element of game) {
        // raha mbola tsy ao le date
        if (!listDate.includes(element.match_date)) {
            result.push({
                date: element.match_date,
                game: game.filter((g) => g.match_date === element.match_date), // ireo match amnio date io
            });
            listDate.push(element.match_date);
        }
    }
    if (type === "ASC")
        result.sort((a, b) => new Date(a.date) - new Date(b.date));
    else result.sort((a, b) => new Date(b.date) - new Date(a.date));
    return result;
});


/***/ }),

/***/ "./src/js/func/getStanding.js":
/*!************************************!*\
  !*** ./src/js/func/getStanding.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
let apiKey = "92268e4434769b7515b45be3b45cd3d9bdc9d3e4cf62885a85ada0a22c9acf8b";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (idLeague) => {
    return await new Promise((resolve, reject) => {
        let url = `https://apiv3.apifootball.com/?action=get_standings&league_id=${idLeague}&APIkey=${apiKey}`;
        fetch(url, {method : 'get'})
        .then(response => response.json())
        .then((value) => {
            // console.log('getStanding');
            // console.log(value);
            resolve(value.error ? [] : value)
        })
    })
}); 

/***/ }),

/***/ "./src/js/infoMatch/displayGame.js":
/*!*****************************************!*\
  !*** ./src/js/infoMatch/displayGame.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((game) => {
    let currentElement = document.querySelector('.current-element'),
        hour = '',
        awayId = game.match_awayteam_id,
        homeId = game.match_hometeam_id;
    if(game.match_live === '1') 
        hour = isNaN(game.match_status) ? game.match_status : (game.match_status + ' min')
    else
        hour = (game.match_status === 'Postponed') ? 'postponed' : game.match_time
    let gameHTML =
    `<div class="info-match">
        <h3 class="country-league" id="l${game.league_id}">
            <img src="${game.country_logo || "assets/img/logo2.png"}" alt="icon-country" onerror="this.src = 'assets/img/logo2.png'">
            <span class="country">${game.country_name} : </span>
            <span class="league">${game.league_name}</span>
        </h3>
        <div class="match ${(game.match_live == "1") ? 'live' : ''}">
            <div class="home team">
                <img src="${game.team_home_badge || "assets/img/logo2.png"}" alt="icon-team" onerror="this.src = 'assets/img/logo2.png'">
                <span class="team-name">${game.match_hometeam_name}</span>
                <span class="score">${game.match_hometeam_score}</span>
            </div>
            <div class="info">
                <span class="hour-match">${hour}</span>
                <span class="date-match">${game.match_date}</span>
            </div>
            <div class="away team">
                <span class="score">${game.match_awayteam_score}</span>
                <img src="${game.team_away_badge || "assets/img/logo2.png"}" alt="icon-team" onerror="this.src = 'assets/img/logo2.png'">
                <span class="team-name">${game.match_awayteam_name}</span>
            </div>
        </div>
        <!-- moment fort  -->
        <div class="moment-container"></div>
        <ul class="nav-match nav-info">
            <li class="active" id="pregame">Pre-game</li>
            <li id="standing" class="">Standing</li>
            <li id="stats" class="">Stats</li> 
        </ul>
        <div class="current-item">
            
        </div>
    </div>`
    currentElement.innerHTML = gameHTML
    let iconCalendar = document.querySelector('#icon-toggle-calendar')
    if(iconCalendar) iconCalendar.style.visibility = 'hidden' 
    
    let league = document.querySelector('.info-match h3');

    league.addEventListener('click', () => {
        __webpack_require__.e(/*! import() */ "src_js_infoLeague_infoLeague_js-_d8991").then(__webpack_require__.bind(__webpack_require__, /*! ../infoLeague/infoLeague */ "./src/js/infoLeague/infoLeague.js")).then(module => 
            module.default(false, league.id)
        )
    })

    document.querySelector('.info-match .home').addEventListener('click', () => {
        Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../infoTeam/infoTeam */ "./src/js/infoTeam/infoTeam.js")).then(module => 
            module.default(false, game.league_id, homeId)
        )
    })

    document.querySelector('.info-match .away').addEventListener('click', () => {
        Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../infoTeam/infoTeam */ "./src/js/infoTeam/infoTeam.js")).then(module => 
            module.default(false, game.league_id, awayId)
        )
    })
});

/***/ }),

/***/ "./src/js/infoMatch/displayMoment.js":
/*!*******************************************!*\
  !*** ./src/js/infoMatch/displayMoment.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((game) => {
    window.scroll(0,0)
    let moment = [],
        goal = game.goalscorer,
        card = game.cards,
        substitutions = game.substitutions;
    // goal
    for(let element of goal) {
        moment.push({
            time : element.time,
            team : element.home_scorer ? 'home' : 'away',
            type : "goal",
            player : element.home_scorer || element.away_scorer,
            icon : 'assets/img/goal.png'
        })
    }
    // card
    for(let element of card) {
        moment.push({
            time : element.time,
            team : element.home_fault ? 'home' : 'away',
            type : (element.card === 'yellow card') ? "yellow-card" : "red-card",
            player : element.home_fault || element.away_fault,
            icon : (element.card === 'yellow card') ? 'assets/img/yellow-card.png' : 'assets/img/red-card.png'
        })
    }
    // substitution home
    for(let element of substitutions.home) {
        moment.push({
            time : element.time,
            team : 'home',
            type : "substitution",
            player : element.substitution.split(' | ')
        })
    }
    // substitution away
    for(let element of substitutions.away) {
        moment.push({
            time : element.time,
            team : 'away',
            type : "substitution",
            player : element.substitution.split(' | ')
        })
    }
    // sort by time
    moment.sort((a,b) => eval(a.time) - eval(b.time)) // i-eviter-na 45+1, 90+4 reny amle temps additionnel
    // console.log('moment');
    // console.log(moment);

    let momentContainer = document.querySelector('.moment-container');
    let momentHTML = '';
    for(let element of moment) {
        momentHTML += 
        `<div class="moment ${element.team}">
            <span class="time ${element.type}">${element.time}</span>`;
        if(element.type === 'substitution') {
            momentHTML += 
            `<div class="item substitution">
                <span class="in">in: ${element.player[1]}</span>
                <span class="ti ti-reload" id="icon-substitute"></span>
                <span class="out">out: ${element.player[0]}</span>
            </div>`
        } else {
            momentHTML += 
            `<div class="item">
                <img src="${element.icon}" alt="${element.type}">
                <span class="scorer">${element.player}</span>
            </div>`
        }
        momentHTML += 
            `<div class="bar"></div>
        </div>`
    }
    if(moment.length > 0)
        momentHTML += 
        `<!-- voir plus  -->
        <div class="show-more"><span>show more</span></div>`;
    momentContainer.innerHTML = momentHTML;
    let showMore = document.querySelector('.show-more')
    if(showMore) // raha misy
        showMore.addEventListener('click', () => {
            momentContainer.style.height = "auto"
            showMore.style.display = 'none'
        })
});

/***/ }),

/***/ "./src/js/infoMatch/displayPregame.js":
/*!********************************************!*\
  !*** ./src/js/infoMatch/displayPregame.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((isPopState=false, game) => {
    // add history
    
    if(!isPopState) // rehefa popstate de tsy mila mi-ajouter
        Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../history/addHistory */ "./src/js/history/addHistory.js")).then(module => 
            module.default(`game/pregame/${game.match_id}`)
        )
    let home = {
        system : game.match_hometeam_system || "4-3-3",
        lineup : game.lineup.home.starting_lineups,
        coach : (game.lineup.home.coach.length > 0) ? game.lineup.home.coach[0].lineup_player : 'to wait' 
    },
        away = {
            system : game.match_awayteam_system || "4-3-3",
            lineup : game.lineup.away.starting_lineups,
            coach : (game.lineup.away.coach.length > 0) ? game.lineup.away.coach[0].lineup_player : 'to wait' 
    };
    // trier selon le position du joueur
    home.lineup.sort((a,b) => a.lineup_position - b.lineup_position);
    away.lineup.sort((a,b) => a.lineup_position - b.lineup_position);
    let preGameHTML = ``;
    // raha efa misy formation
    if(home.lineup.length > 0) {
        preGameHTML += 
        `<div class="lineup">
            <img src="assets/img/terrain.png" alt="terrain" onerror="this.src = '../../assets/img/terrain.png'">
            <div class="players-container">
                <div class="home">
                    <!-- system  -->
                    <span class="system">${home.system}</span>
                    <div class="row-item">
                        <div class="player">
                            <div class ="icon-player">${home.lineup[0].lineup_number}</div>
                            <span class="player-name">${home.lineup[0].lineup_player}</span>
                            <span class="player-name-resp">${home.lineup[0].lineup_player}</span>
                        </div>
                    </div>`;
                    home.system = home.system.split('-')
                    let currentPosition = 1; // tsy raisina intsony ny gardien
                    // generer la formation
                    for(let row of home.system) {
                        preGameHTML += 
                        `<div class="row-item">`;
                        for(let i=1; i<=row; i++) {
                
                            preGameHTML += 
                            `<div class="player">
                                <div class ="icon-player">${home.lineup[currentPosition].lineup_number}</div>
                                <span class="player-name">${home.lineup[currentPosition].lineup_player}</span>
                                <span class="player-name-resp">${home.lineup[currentPosition].lineup_player}</span>
                            </div>`;
                            currentPosition++;
                        }
                        preGameHTML += `</div>`
                    }
                preGameHTML +=
                `</div>
                <div class="away">
                    <!-- system  -->
                    <span class="system">${away.system}</span>
                    <div class="row-item">
                        <div class="player">
                            <div class ="icon-player">${away.lineup[0].lineup_number}</div>
                            <span class="player-name">${away.lineup[0].lineup_player}</span>
                            <span class="player-name-resp">${away.lineup[0].lineup_player}</span>
                        </div>
                    </div>`;
                    away.system = away.system.split('-')
                    currentPosition = 1; // tsy raisina intsony ny gardien
                    // generer la formation
                    for(let row of away.system) {
                        preGameHTML += 
                        `<div class="row-item">`;
                        for(let i=1; i<=row; i++) {
                            preGameHTML += 
                            `<div class="player">
                                <div class ="icon-player">${away.lineup[currentPosition].lineup_number}</div>
                                <span class="player-name">${away.lineup[currentPosition].lineup_player}</span>
                                <span class="player-name-resp">${away.lineup[currentPosition].lineup_player}</span>
                            </div>`;
                            currentPosition++;
                        }
                        preGameHTML += `</div>`
                    }
                preGameHTML +=
                `</div>
            </div>
        </div>`
    }
    preGameHTML +=
    `<div class="coach-missing">
        <!-- coach  -->
        <div class="coach">
            <div class="team">
                <div class="home">
                    <img src="${game.team_home_badge || "assets/img/logo2.png"}" alt="icon-team">
                    <span class="team-name">${game.match_hometeam_name}</span>
                </div>
                <div class="away">
                    <img src="${game.team_away_badge || "assets/img/logo2.png"}" alt="icon-team">
                    <span class="team-name">${game.match_awayteam_name}</span>
                </div>
            </div>
            <div class="manager">
                <div class="home">
                    <span class="caption">Manager : </span>
                    <span class="manager-name">${home.coach}</span>
                </div>
                <div class="away">
                    <span class="caption">Manager : </span>
                    <span class="manager-name">${away.coach}</span>
                </div>
            </div>
        </div>
    </div>
    <!-- end pre-game  -->`
    document.querySelector('.current-item').innerHTML = preGameHTML
    // active
    document.querySelector('.info-match .nav-match li.active').classList.remove('active');
    document.querySelector('#pregame').classList.add('active');
    return "pregame"
});

/***/ }),

/***/ "./src/js/infoMatch/displayStats.js":
/*!******************************************!*\
  !*** ./src/js/infoMatch/displayStats.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((isPopState=false, game) => {
    // add history
    if(!isPopState) // rehefa popstate de tsy mila mi-ajouter
        Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../history/addHistory */ "./src/js/history/addHistory.js")).then(module => 
            module.default(`game/stats/${game.match_id}`)
        )
    let statistics = game.statistics.reverse();
    let statsHTML = 
    `<div class="statistics">
        <h4>Statistics</h4>`;
        for(let element of statistics) {
            statsHTML += 
            `<div class="row-item">
                <span class="home">${element.home}</span>
                <span class="item">${element.type}</span>
                <span class="away">${element.away}</span>
            </div>`
        }
    statsHTML += 
    `</div>`
    document.querySelector('.current-item').innerHTML = statsHTML
    // active
    document.querySelector('.info-match .nav-match li.active').classList.remove('active');
    document.querySelector('#stats').classList.add('active');
    return "stat"
});

/***/ }),

/***/ "./src/js/infoMatch/getInfoMatch.js":
/*!******************************************!*\
  !*** ./src/js/infoMatch/getInfoMatch.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
let apiKey = "92268e4434769b7515b45be3b45cd3d9bdc9d3e4cf62885a85ada0a22c9acf8b";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (idMatch) => {
    return await new Promise((reslove, reject) => {
        let url = `https://apiv3.apifootball.com/?action=get_events&APIkey=${apiKey}&match_id=${idMatch}&timezone=Africa/Nairobi`;
        fetch(url, {method : 'get'})
        .then(response => response.json())
        .then((value) => {
            // console.log('getInfoMatch');
            // console.log(value);
            reslove(value[0])
        })
    })
});


/***/ }),

/***/ "./src/js/infoMatch/infoMatch.js":
/*!***************************************!*\
  !*** ./src/js/infoMatch/infoMatch.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearIntervalInfoMatch": () => (/* binding */ clearIntervalInfoMatch),
/* harmony export */   "default": () => (/* binding */ infoMatch)
/* harmony export */ });
/* harmony import */ var _getInfoMatch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getInfoMatch */ "./src/js/infoMatch/getInfoMatch.js");
/* harmony import */ var _func_getStanding__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../func/getStanding */ "./src/js/func/getStanding.js");
/* harmony import */ var _history_addHistory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../history/addHistory */ "./src/js/history/addHistory.js");
/* harmony import */ var _others_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../others/animation */ "./src/js/others/animation.js");
/* harmony import */ var _displayGame__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./displayGame */ "./src/js/infoMatch/displayGame.js");
/* harmony import */ var _displayMoment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./displayMoment */ "./src/js/infoMatch/displayMoment.js");
/* harmony import */ var _displayPregame__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./displayPregame */ "./src/js/infoMatch/displayPregame.js");
/* harmony import */ var _func_displayStanding__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../func/displayStanding */ "./src/js/func/displayStanding.js");
/* harmony import */ var _displayStats__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./displayStats */ "./src/js/infoMatch/displayStats.js");
 









let interval = undefined,
    currentDisplay = undefined,
    isUpdate = false;

async function infoMatch(isPopState=false, idMatch, toDisplay) {
    // tsy mila manao loading rehefa manao update
    if(!isUpdate) {
        (0,_others_animation__WEBPACK_IMPORTED_MODULE_3__.loading)()
        window.scroll(0,0)
    }

    let game = [],
        standing = [];
    
    game = await (0,_getInfoMatch__WEBPACK_IMPORTED_MODULE_0__["default"])(idMatch)
    // console.log('game');
    // console.log(game);
    // display game (home vs away)
    ;(0,_displayGame__WEBPACK_IMPORTED_MODULE_4__["default"])(game)
    // display moment fort
    ;(0,_displayMoment__WEBPACK_IMPORTED_MODULE_5__["default"])(game)

    if(toDisplay === "standing") { // raha tiana specifie-na ho classement
        standing = await (0,_func_getStanding__WEBPACK_IMPORTED_MODULE_1__["default"])(game.league_id)
        // add history (ajouteko mitokana ito)
        if(!isPopState) // rehefa popstate de tsy mila mi-ajouter
            (0,_history_addHistory__WEBPACK_IMPORTED_MODULE_2__["default"])(`game/standing/${game.match_id}`);
        currentDisplay = (0,_func_displayStanding__WEBPACK_IMPORTED_MODULE_7__["default"])(standing, game.match_hometeam_id, game.match_awayteam_id)
    } else if(toDisplay === "stats") {
        (0,_func_getStanding__WEBPACK_IMPORTED_MODULE_1__["default"])(game.league_id).then((value) => standing = value)
        currentDisplay = (0,_displayStats__WEBPACK_IMPORTED_MODULE_8__["default"])(isPopState, game)
    } else {
        (0,_func_getStanding__WEBPACK_IMPORTED_MODULE_1__["default"])(game.league_id).then((value) => standing = value)
        currentDisplay = (0,_displayPregame__WEBPACK_IMPORTED_MODULE_6__["default"])(isPopState, game)
    }
    (0,_others_animation__WEBPACK_IMPORTED_MODULE_3__.stopLoading)()

    /* nav match (standing, pregame, stats) */
    document.querySelector('.nav-match').addEventListener('click', (e) => {
        ;(0,_others_animation__WEBPACK_IMPORTED_MODULE_3__.loading)()
        // console.log(e.target);
        if(e.target.id === 'standing') {
            (0,_others_animation__WEBPACK_IMPORTED_MODULE_3__.loading)()
            // add history (ajouteko mitokana ito)
            if(!isPopState) // rehefa popstate de tsy mila mi-ajouter
                (0,_history_addHistory__WEBPACK_IMPORTED_MODULE_2__["default"])(`game/standing/${game.match_id}`);
            // display
            currentDisplay = (0,_func_displayStanding__WEBPACK_IMPORTED_MODULE_7__["default"])(standing, game.match_hometeam_id, game.match_awayteam_id)
            ;(0,_others_animation__WEBPACK_IMPORTED_MODULE_3__.stopLoading)()
        }else if(e.target.id === 'stats') {
            (0,_others_animation__WEBPACK_IMPORTED_MODULE_3__.loading)()
            // display
            currentDisplay = (0,_displayStats__WEBPACK_IMPORTED_MODULE_8__["default"])(isPopState, game)
            ;(0,_others_animation__WEBPACK_IMPORTED_MODULE_3__.stopLoading)()
        } else {
            (0,_others_animation__WEBPACK_IMPORTED_MODULE_3__.loading)()
            // display
            currentDisplay = (0,_displayPregame__WEBPACK_IMPORTED_MODULE_6__["default"])(isPopState, game)
            ;(0,_others_animation__WEBPACK_IMPORTED_MODULE_3__.stopLoading)()
        }
    })

    // rehefa mandeha ny a jour de tsy atao intsony
    if(isUpdate) return

    // ataoko miandry kely fa misy erreur
    // setTimeout(() => {
    //     // mettre a jour le resultat chaque 60 seconde 
    //     interval = setInterval(async () => {
    //         isUpdate = true
    //         // console.log('maj info');
    //         infoMatch(true, idMatch, toDisplay)
    //     },60000)
    //     // console.log("interval");
    // }, 2000)
}

function clearIntervalInfoMatch() {
    clearInterval(interval)
    isUpdate = false
}

/***/ }),

/***/ "./src/js/infoTeam/displayInfoTeam.js":
/*!********************************************!*\
  !*** ./src/js/infoTeam/displayInfoTeam.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((logo, teamName) => {
    let infoTeamHTML =
    `<div class="info-team info">
        <div class="country-league">
            <div class="league">
                <img src="${logo}" alt="icon-league" onerror="this.src='assets/img/logo2.png'">
                <div>
                    <span class="name">${teamName}</span>
                </div>
            </div>
        </div>
        <ul class="nav-team nav-info">
            <li id="players" class="active">Players</li>
            <li id="calendar">Calendar</li> 
            <li id="results">Results</li>
            <li id="standing">Standing</li> 
            <li id="stats">Stats</li>
        </ul>
        <div class="current-item">
            
        </div>
    </div>`;
    document.querySelector('.current-element').innerHTML = infoTeamHTML

    let iconCalendar = document.querySelector('#icon-toggle-calendar')
    if(iconCalendar) iconCalendar.style.visibility = 'hidden' 
});

/***/ }),

/***/ "./src/js/infoTeam/displayPlayers.js":
/*!*******************************************!*\
  !*** ./src/js/infoTeam/displayPlayers.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((players, coach) => {
    let playerHTML = ``;
    for(let element of players) {
        playerHTML +=
        `<div class="type">
            <span class="caption ${element.place}">${element.place}</span>`;
        for(let p of element.players) {
            playerHTML +=
            `<div class="player">
                <div class="img-player">
                    <img src="${p.player_image || "assets/img/player.jpg"}" alt="img-player" onerror="this.src='assets/img/player.jpg'">
                </div>
                <span class="name">${p.player_name}</span>
                <span class="number">${p.player_number}</span>
                <footer>
                    ${p.player_age} years
                    <span class="rate">
                        <span class="ti ti-star"></span>
                        ${p.player_rating} 
                    </span>
                </footer>
            </div>`
        }
        playerHTML +=
        `</div>`
    }
    if(players.length > 0)
        playerHTML +=
        `<div class="type">
            <span class="caption">Coach</span>
            <div class="player">
                <div class="img-player">
                <img src="assets/img/player.jpg" alt="img-player" onerror="this.src='assets/img/player.jpg'">
                </div>
                <span class="name">${coach.coach_name}</span>
            </div>
        </div>`
    else 
        playerHTML +=
        `<p style="padding-left:15px">not given</p>`

    document.querySelector('.current-item').innerHTML = playerHTML
    document.querySelector('.nav-team li.active').classList.remove('active')
    document.querySelector('#players').classList.add('active');
});

/***/ }),

/***/ "./src/js/infoTeam/displayStatsPlayer.js":
/*!***********************************************!*\
  !*** ./src/js/infoTeam/displayStatsPlayer.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((players) => {
    let statsHTML =
    `<ul class="nav-stats">
        <li id="default" class="active">default</li>
        <li id="dribble">dribble</li>
        <li id="passes">passes</li>
        <li id="tackles">tackles</li>
        <li id="duels">duels</li>
        <li id="goal">goal</li>
    </ul>
    <table class="standing-container stats-player">
        <tr class="head-table">
            <td class="player-table">Player</td>
            <td>P <span>played<span></td>
            <td>age</td>
            <td><img src="assets/img/goal.png" alt="goal" onerror="this.src='assets/img/goal.png'"> <span>goal<span></td>
            <td><img src="assets/img/l.png" alt="assists" onerror="this.src='assets/img/l.png'"> <span>assists<span></td>
            <td><img src="assets/img/yellow-card.png" alt="yellow-card" onerror="this.src='assets/img/yellow-card.png'"> <span>yellow card<span></td>
            <td><img src="assets/img/red-card.png" alt="red-card" onerror="this.src='assets/img/red-card.png'"> <span>red card<span></td>
            <td><img src="assets/img/injury.png" alt="injury-card" onerror="this.src='assets/img/injury.png'"> <span>injury<span></td>
        </tr>`;
    for(let element of players) { // satria le izy filtrer par place (milieu, attaquant, ...)
        for(let p of element.players) {
            statsHTML +=
            `<tr class="tr-player">
                <td class="player-table">
                    <span class="number">${p.player_number}</span> 
                    <span>${p.player_name}</span>
                </td>
                <td>${p.player_match_played}</td>
                <td>${p.player_age}</td>
                <td>${p.player_goals}</td>
                <td>${p.player_assists}</td>
                <td>${p.player_yellow_cards}</td>
                <td>${p.player_red_cards}</td>
                <td>${(p.player_injured === "No" ? "" : "yes")}</td>
            </tr>`
        }
    }
    statsHTML +=
    `</table>`
        
    document.querySelector('.current-item').innerHTML = statsHTML
    document.querySelector('.nav-team li.active').classList.remove('active')
    document.querySelector('#stats').classList.add('active');

    document.querySelector('.nav-stats').addEventListener('click', (e) => {
        let id = e.target.id,
            headTr = document.querySelector('.head-table'),
            tr = document.querySelectorAll('.tr-player');
        if(id === "dribble") displayDribble(players, headTr, tr)
        else if(id === "passes") displayPasses(players, headTr, tr)
        else if(id === "tackles") displayTackles(players, headTr, tr)
        else if(id === "duels") displayDuels(players, headTr, tr)
        else if(id === "goal") displayGoal(players, headTr, tr)
        else displayDefault(players, headTr, tr)
    })
});

function displayDefault(players, headTr, tr) {
    let i=0;
    headTr.innerHTML = 
    `<td class="player-table">Player</td>
    <td>P <span>played<span></td>
    <td>age</td>
    <td><img src="assets/img/goal.png" alt="goal" onerror="this.src='assets/img/goal.png'"> <span>goal<span></td>
    <td><img src="assets/img/l.png" alt="assists" onerror="this.src='assets/img/l.png'"> <span>assists<span></td>
    <td><img src="assets/img/yellow-card.png" alt="yellow-card" onerror="this.src='assets/img/yellow-card.png'"> <span>yellow card<span></td>
    <td><img src="assets/img/red-card.png" alt="red-card" onerror="this.src='assets/img/red-card.png'"> <span>red card<span></td>
    <td><img src="assets/img/injury.png" alt="injury-card" onerror="this.src='assets/img/injury.png'"> <span>injury<span></td>`;
    
    for(let element of players) { // satria le izy filtrer par place (milieu, attaquant, ...)
        for(let p of element.players) {
            tr[i].innerHTML = 
            `<td class="player-table">
                <span class="number">${p.player_number}</span> 
                <span>${p.player_name}</span>
            </td>
            <td>${p.player_match_played}</td>
            <td>${p.player_age}</td>
            <td>${p.player_goals}</td>
            <td>${p.player_assists}</td>
            <td>${p.player_yellow_cards}</td>
            <td>${p.player_red_cards}</td>
            <td>${(p.player_injured === "No" ? "" : "yes")}</td>`;
            i++;
        }
    }
    document.querySelector('.nav-stats .active').classList.remove('active')
    document.querySelector('#default').classList.add('active')
}

function displayDribble(players, headTr, tr) {
    let i=0;
    headTr.innerHTML = 
    `<td class="player-table">Player</td>
    <td>P <span>played<span></td>
    <td>age</td>
    <td><img src="assets/img/goal.png" alt="goal" onerror="this.src='assets/img/goal.png'"> <span>goal<span></td>
    <td><img src="assets/img/l.png" alt="assists" onerror="this.src='assets/img/l.png'"> <span>assists<span></td>
    <td>DA <span>dribble attempts<span></td>
    <td>DS <span>dribble succeed<span></td>
    <td>shots</td>`    
    for(let element of players) { // satria le izy filtrer par place (milieu, attaquant, ...)
        for(let p of element.players) {
            tr[i].innerHTML = 
            `<td class="player-table">
                <span class="number">${p.player_number}</span> 
                <span>${p.player_name}</span>
            </td>
            <td>${p.player_match_played}</td>
            <td>${p.player_age}</td>
            <td>${p.player_goals}</td>
            <td>${p.player_assists}</td>
            <td>${p.player_dribble_attempts}</td>
            <td>${p.player_dribble_succ}</td>
            <td>${p.player_shots_total}</td>`;
            i++;
        }
    }
    document.querySelector('.nav-stats .active').classList.remove('active')
    document.querySelector('#dribble').classList.add('active')
}

function displayPasses(players, headTr, tr) {
    let i=0;
    headTr.innerHTML = 
    `<td class="player-table">Player</td>
    <td>P <span>played<span></td>
    <td>age</td>
    <td><img src="assets/img/l.png" alt="assists" onerror="this.src='assets/img/l.png'"> <span>assists<span></td>
    <td>TP <span>total passes<span></td>
    <td>PA <span>passes accuracy<span></td>
    <td>KP<span>key passes<span></td>
    <td><img src="assets/img/injury.png" alt="injury-card" onerror="this.src='assets/img/injury.png'"> <span>injury<span></td>`
    
    for(let element of players) { // satria le izy filtrer par place (milieu, attaquant, ...)
        for(let p of element.players) {
            tr[i].innerHTML = 
            `<td class="player-table">
                <span class="number">${p.player_number}</span> 
                <span>${p.player_name}</span>
            </td>
            <td>${p.player_match_played}</td>
            <td>${p.player_age}</td>
            <td>${p.player_assists}</td>
            <td>${p.player_passes}</td>
            <td>${p.player_passes_accuracy}</td>
            <td>${p.player_key_passes}</td>
            <td>${(p.player_injured === "No" ? "" : "yes")}</td>`;
            i++;
        }
    }
    document.querySelector('.nav-stats .active').classList.remove('active')
    document.querySelector('#passes').classList.add('active')
}

function displayTackles(players, headTr, tr) {
    let i=0;
    headTr.innerHTML = 
    `<td class="player-table">Player</td>
    <td>P <span>played<span></td>
    <td>tackles</td>
    <td>INT <span>interceptions<span></td>
    <td>F <span>fouls<span></td>
    <td><img src="assets/img/yellow-card.png" alt="yellow-card" onerror="this.src='assets/img/yellow-card.png'"> <span>yellow card<span></td>
    <td><img src="assets/img/red-card.png" alt="red-card" onerror="this.src='assets/img/red-card.png'"> <span>red card<span></td>
    <td><img src="assets/img/injury.png" alt="injury-card" onerror="this.src='assets/img/injury.png'"> <span>injury<span></td>`
    
    for(let element of players) { // satria le izy filtrer par place (milieu, attaquant, ...)
        for(let p of element.players) {
            tr[i].innerHTML = 
            `<td class="player-table">
                <span class="number">${p.player_number}</span> 
                <span>${p.player_name}</span>
            </td>
            <td>${p.player_match_played}</td>
            <td>${p.player_tackles}</td>
            <td>${p.player_interceptions}</td>
            <td>${p.player_fouls_committed}</td>
            <td>${p.player_yellow_cards}</td>
            <td>${p.player_red_cards}</td>
            <td>${(p.player_injured === "No" ? "" : "yes")}</td>`;
            i++;
        }
    }
    document.querySelector('.nav-stats .active').classList.remove('active')
    document.querySelector('#tackles').classList.add('active')
}

function displayDuels(players, headTr, tr) {
    let i=0;
    headTr.innerHTML = 
    `<td class="player-table">Player</td>
    <td>P <span>played<span></td>
    <td>age</td>
    <td>DT <span>duels total<span></td>
    <td>DW <span>duels won<span></td>
    <td><img src="assets/img/yellow-card.png" alt="yellow-card" onerror="this.src='assets/img/yellow-card.png'"> <span>yellow card<span></td>
    <td><img src="assets/img/red-card.png" alt="red-card" onerror="this.src='assets/img/red-card.png'"> <span>red card<span></td>
    <td><img src="assets/img/injury.png" alt="injury-card" onerror="this.src='assets/img/injury.png'"> <span>injury<span></td>`
    
    for(let element of players) { // satria le izy filtrer par place (milieu, attaquant, ...)
        for(let p of element.players) {
            tr[i].innerHTML = 
            `<td class="player-table">
                <span class="number">${p.player_number}</span> 
                <span>${p.player_name}</span>
            </td>
            <td>${p.player_match_played}</td>
            <td>${p.player_age}</td>
            <td>${p.player_duels_total}</td>
            <td>${p.player_duels_won}</td>
            <td>${p.player_yellow_cards}</td>
            <td>${p.player_red_cards}</td>
            <td>${(p.player_injured === "No" ? "" : "yes")}</td>`;
            i++;
        }
    }
    document.querySelector('.nav-stats .active').classList.remove('active')
    document.querySelector('#duels').classList.add('active')
}

function displayGoal(players, headTr, tr) {
    let i=0;
    headTr.innerHTML = 
    `<td class="player-table">Player</td>
    <td>P <span>played<span></td>
    <td>age</td>
    <td>GC<span>goal conceded<span></td>
    <td>saves</td>
    <td><img src="assets/img/yellow-card.png" alt="yellow-card" onerror="this.src='assets/img/yellow-card.png'"> <span>yellow card<span></td>
    <td><img src="assets/img/red-card.png" alt="red-card" onerror="this.src='assets/img/red-card.png'"> <span>red card<span></td>
    <td><img src="assets/img/injury.png" alt="injury-card" onerror="this.src='assets/img/injury.png'"> <span>injury<span></td>`;
    
    for(let element of players) { // satria le izy filtrer par place (milieu, attaquant, ...)
        for(let p of element.players) {
            tr[i].innerHTML = 
            `<td class="player-table">
                <span class="number">${p.player_number}</span> 
                <span>${p.player_name}</span>
            </td>
            <td>${p.player_match_played}</td>
            <td>${p.player_age}</td>
            <td>${(p.player_goals_conceded == 0 || p.player_goals_conceded === "") ? '' : p.player_goals_conceded}</td>
            <td>${p.player_saves ? p.player_saves : ''}</td>
            <td>${p.player_yellow_cards}</td>
            <td>${p.player_red_cards}</td>
            <td>${(p.player_injured === "No" ? "" : "yes")}</td>`;
            i++;
        }
    }
    document.querySelector('.nav-stats .active').classList.remove('active')
    document.querySelector('#goal').classList.add('active')
}

/***/ }),

/***/ "./src/js/infoTeam/filterByPlace.js":
/*!******************************************!*\
  !*** ./src/js/infoTeam/filterByPlace.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((players) => {
    let result = [],
        listPlace = [];
    for(let element of players) {
        // raha mbola tsy ao
        if(!listPlace.includes(element.player_type)) {
            result.push({
                place : element.player_type,
                players : players.filter(p => p.player_type === element.player_type),
                number : undefined
            })
            listPlace.push(element.player_type)
        }
    }
    if(listPlace.indexOf('Goalkeepers') >= 0)
        result[listPlace.indexOf('Goalkeepers')].number = 1;
    if(listPlace.indexOf('Defenders') >= 0)
        result[listPlace.indexOf('Defenders')].number = 2;
    if(listPlace.indexOf('Midfielders') >= 0)
        result[listPlace.indexOf('Midfielders')].number = 3;
    if(listPlace.indexOf('Forwards') >= 0)
        result[listPlace.indexOf('Forwards')].number = 4;
    result.sort((a,b) => a.number - b.number)
    return result
});

/***/ }),

/***/ "./src/js/infoTeam/getPlayers.js":
/*!***************************************!*\
  !*** ./src/js/infoTeam/getPlayers.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
let APIkey = "92268e4434769b7515b45be3b45cd3d9bdc9d3e4cf62885a85ada0a22c9acf8b";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (teamID) => {
    return new Promise((resolve, reject) => {
        let url = `https://apiv3.apifootball.com/?action=get_teams&team_id=${teamID}&APIkey=${APIkey}`;
        fetch(url, { method: "get" })
            .then((response) => response.json())
            .then((value) => {
                // console.log(value);
                resolve(value[0]);
            });
    });
});


/***/ }),

/***/ "./src/js/infoTeam/infoTeam.js":
/*!*************************************!*\
  !*** ./src/js/infoTeam/infoTeam.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getPlayers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getPlayers */ "./src/js/infoTeam/getPlayers.js");
/* harmony import */ var _func_getStanding__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../func/getStanding */ "./src/js/func/getStanding.js");
/* harmony import */ var _func_getMatch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../func/getMatch */ "./src/js/func/getMatch.js");
/* harmony import */ var _displayInfoTeam__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./displayInfoTeam */ "./src/js/infoTeam/displayInfoTeam.js");
/* harmony import */ var _func_displayStanding__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../func/displayStanding */ "./src/js/func/displayStanding.js");
/* harmony import */ var _func_displayMatchByDate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../func/displayMatchByDate */ "./src/js/func/displayMatchByDate.js");
/* harmony import */ var _displayPlayers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./displayPlayers */ "./src/js/infoTeam/displayPlayers.js");
/* harmony import */ var _displayStatsPlayer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./displayStatsPlayer */ "./src/js/infoTeam/displayStatsPlayer.js");
/* harmony import */ var _history_addHistory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../history/addHistory */ "./src/js/history/addHistory.js");
/* harmony import */ var _filterByPlace__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./filterByPlace */ "./src/js/infoTeam/filterByPlace.js");
/* harmony import */ var _func_filterByDate__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../func/filterByDate */ "./src/js/func/filterByDate.js");
/* harmony import */ var _func_date__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../func/date */ "./src/js/func/date.js");
/* harmony import */ var _others_animation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../others/animation */ "./src/js/others/animation.js");














/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (isPopState = false, idLeague, idTeam) => {
    let calendar = [],
        result = [],
        standing = [],
        players = [],
        coach = []
    ;(0,_others_animation__WEBPACK_IMPORTED_MODULE_12__.loading)()

    window.scroll(0,0)
     // rehefa popstate de tsy mila mi-ajouter
    if(!isPopState) (0,_history_addHistory__WEBPACK_IMPORTED_MODULE_8__["default"])(`team/${idLeague}&${idTeam}`) 

    ;(0,_func_getMatch__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_func_date__WEBPACK_IMPORTED_MODULE_11__.minus15)(), new Date(), 0, idTeam).then((value) => {
        result = (0,_func_filterByDate__WEBPACK_IMPORTED_MODULE_10__["default"])(value);
        result.shift(); // shift satria lasa voaray ao le date androany
    });
    (0,_func_getMatch__WEBPACK_IMPORTED_MODULE_2__["default"])(new Date(), (0,_func_date__WEBPACK_IMPORTED_MODULE_11__.plus15)(), 0, idTeam).then(
        (value) => (calendar = (0,_func_filterByDate__WEBPACK_IMPORTED_MODULE_10__["default"])(value, "ASC"))
    );
    (0,_func_getStanding__WEBPACK_IMPORTED_MODULE_1__["default"])(idLeague).then((value) => (standing = value));
    // get player
    players = await (0,_getPlayers__WEBPACK_IMPORTED_MODULE_0__["default"])(idTeam);
    (0,_displayInfoTeam__WEBPACK_IMPORTED_MODULE_3__["default"])(players.team_badge, players.team_name)
    coach = players.coaches[0];
    players = (0,_filterByPlace__WEBPACK_IMPORTED_MODULE_9__["default"])(players.players)
    ;(0,_displayPlayers__WEBPACK_IMPORTED_MODULE_6__["default"])(players, coach)

    /* onclick nav */
    document.querySelector('.nav-team').addEventListener('click', (e) => {
        let id = e.target.id;
        if(id === "calendar") (0,_func_displayMatchByDate__WEBPACK_IMPORTED_MODULE_5__["default"])(calendar, "calendar")
        else if (id === "results") (0,_func_displayMatchByDate__WEBPACK_IMPORTED_MODULE_5__["default"])(result, "results")
        else if (id === "standing") (0,_func_displayStanding__WEBPACK_IMPORTED_MODULE_4__["default"])(standing, idTeam)
        else if (id === "stats") (0,_displayStatsPlayer__WEBPACK_IMPORTED_MODULE_7__["default"])(players)
        else (0,_displayPlayers__WEBPACK_IMPORTED_MODULE_6__["default"])(players, coach)
    })
    ;(0,_others_animation__WEBPACK_IMPORTED_MODULE_12__.stopLoading)()
});


/***/ })

}]);
//# sourceMappingURL=src_js_func_displayStanding_js-src_js_infoTeam_infoTeam_js.bundle.js.map