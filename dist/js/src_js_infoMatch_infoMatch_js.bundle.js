"use strict";
(self["webpackChunkFootball_score"] = self["webpackChunkFootball_score"] || []).push([["src_js_infoMatch_infoMatch_js"],{

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
            <li id="h2h">H2H</li>
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
        __webpack_require__.e(/*! import() */ "src_js_infoTeam_infoTeam_js").then(__webpack_require__.bind(__webpack_require__, /*! ../infoTeam/infoTeam */ "./src/js/infoTeam/infoTeam.js")).then(module => 
            module.default(false, game.league_id, homeId)
        )
    })

    document.querySelector('.info-match .away').addEventListener('click', () => {
        __webpack_require__.e(/*! import() */ "src_js_infoTeam_infoTeam_js").then(__webpack_require__.bind(__webpack_require__, /*! ../infoTeam/infoTeam */ "./src/js/infoTeam/infoTeam.js")).then(module => 
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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "initMoment": () => (/* binding */ initMoment)
/* harmony export */ });
let isClicked = false; // raha efa clicke le "show more"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((game) => {
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

    if(isClicked) momentContainer.style.height = "auto"
    let showMore = document.querySelector('.show-more')
    if(showMore) // raha misy
        showMore.addEventListener('click', () => {
            momentContainer.style.height = "auto"
            showMore.style.display = 'none'
            isClicked = true
        })
});

function initMoment() {
    isClicked = false
}

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
    return "stats"
});

/***/ }),

/***/ "./src/js/infoMatch/getH2H.js":
/*!************************************!*\
  !*** ./src/js/infoMatch/getH2H.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
let apiKey = "92268e4434769b7515b45be3b45cd3d9bdc9d3e4cf62885a85ada0a22c9acf8b";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (first, second) => {
    return await new Promise((reslove, reject) => {
        let url = `https://apiv3.apifootball.com/?action=get_H2H&firstTeamId=${first}&secondTeamId=${second}&APIkey=${apiKey}&timezone=Africa/Nairobi`;
        fetch(url, {method : 'get'})
        .then(response => response.json())
        .then((value) => {
            console.log('get_H2H');
            console.log(value);
            reslove(value.error ? [] : value)
        })
    })
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
/* harmony import */ var _getH2H__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getH2H */ "./src/js/infoMatch/getH2H.js");
/* harmony import */ var _func_getStanding__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../func/getStanding */ "./src/js/func/getStanding.js");
/* harmony import */ var _history_addHistory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../history/addHistory */ "./src/js/history/addHistory.js");
/* harmony import */ var _others_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../others/animation */ "./src/js/others/animation.js");
/* harmony import */ var _displayGame__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./displayGame */ "./src/js/infoMatch/displayGame.js");
/* harmony import */ var _displayMoment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./displayMoment */ "./src/js/infoMatch/displayMoment.js");
/* harmony import */ var _displayPregame__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./displayPregame */ "./src/js/infoMatch/displayPregame.js");
/* harmony import */ var _func_displayStanding__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../func/displayStanding */ "./src/js/func/displayStanding.js");
/* harmony import */ var _displayStats__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./displayStats */ "./src/js/infoMatch/displayStats.js");
/* harmony import */ var _func_displayMatchByDate__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../func/displayMatchByDate */ "./src/js/func/displayMatchByDate.js");
 
 











let interval = undefined,
    currentDisplay = undefined,
    isUpdate = false;

async function infoMatch(isPopState=false, idMatch, toDisplay) {
    // tsy mila manao loading rehefa manao update
    if(!isUpdate) {
        (0,_others_animation__WEBPACK_IMPORTED_MODULE_4__.loading)()
        window.scroll(0,0)
    }

    let game = [],
        standing = [],
        h2h = [];
    
    game = await (0,_getInfoMatch__WEBPACK_IMPORTED_MODULE_0__["default"])(idMatch)
    // console.log('game');
    // console.log(game);
    // display game (home vs away)
    ;(0,_displayGame__WEBPACK_IMPORTED_MODULE_5__["default"])(game)
    // display moment fort
    ;(0,_displayMoment__WEBPACK_IMPORTED_MODULE_6__["default"])(game)

    if((toDisplay === "standing") || (currentDisplay === "standing")) { // raha tiana specifie-na ho classement
        standing = await (0,_func_getStanding__WEBPACK_IMPORTED_MODULE_2__["default"])(game.league_id)
        // add history (ajouteko mitokana ito)
        // rehefa popstate de tsy mila mi-ajouter
        if(!isPopState) (0,_history_addHistory__WEBPACK_IMPORTED_MODULE_3__["default"])(`game/standing/${game.match_id}`);
        currentDisplay = (0,_func_displayStanding__WEBPACK_IMPORTED_MODULE_8__["default"])(standing, game.match_hometeam_id, game.match_awayteam_id)
    } else if((toDisplay === "stats") || (currentDisplay === "stats")) {
        // alaina any ambadika le standing
        (0,_func_getStanding__WEBPACK_IMPORTED_MODULE_2__["default"])(game.league_id).then((value) => standing = value)
        currentDisplay = (0,_displayStats__WEBPACK_IMPORTED_MODULE_9__["default"])(isPopState, game)
    } else if((toDisplay === "h2h") || (currentDisplay === "h2h")) {
        // rehefa popstate de tsy mila mi-ajouter
        if(!isPopState) (0,_history_addHistory__WEBPACK_IMPORTED_MODULE_3__["default"])(`game/h2h/${game.match_id}`);
        // alaina any ambadika le standing
        (0,_func_getStanding__WEBPACK_IMPORTED_MODULE_2__["default"])(game.league_id).then((value) => standing = value)
        h2h = await (0,_getH2H__WEBPACK_IMPORTED_MODULE_1__["default"])(game.match_hometeam_id, game.match_awayteam_id)
        currentDisplay = (0,_func_displayMatchByDate__WEBPACK_IMPORTED_MODULE_10__["default"])(h2h.firstTeam_VS_secondTeam, "h2h")
    } else {
        (0,_getH2H__WEBPACK_IMPORTED_MODULE_1__["default"])(game.match_hometeam_id, game.match_awayteam_id).then((value) => h2h = value)
        currentDisplay = (0,_displayPregame__WEBPACK_IMPORTED_MODULE_7__["default"])(isPopState, game)
        h2h = await (0,_getH2H__WEBPACK_IMPORTED_MODULE_1__["default"])(game.match_hometeam_id, game.match_awayteam_id)
    }
    (0,_others_animation__WEBPACK_IMPORTED_MODULE_4__.stopLoading)()

    /* nav match (standing, pregame, stats) */
    document.querySelector('.nav-match').addEventListener('click', (e) => {
        ;(0,_others_animation__WEBPACK_IMPORTED_MODULE_4__.loading)()
        let id = e.target.id;
        // console.log(e.target);
        if(id === 'standing') {
            (0,_others_animation__WEBPACK_IMPORTED_MODULE_4__.loading)()
            ;(0,_history_addHistory__WEBPACK_IMPORTED_MODULE_3__["default"])(`game/standing/${game.match_id}`);
            // display
            currentDisplay = (0,_func_displayStanding__WEBPACK_IMPORTED_MODULE_8__["default"])(standing, game.match_hometeam_id, game.match_awayteam_id)
            ;(0,_others_animation__WEBPACK_IMPORTED_MODULE_4__.stopLoading)()
        } else if(id === 'stats') {
            (0,_others_animation__WEBPACK_IMPORTED_MODULE_4__.loading)()
            // display
            currentDisplay = (0,_displayStats__WEBPACK_IMPORTED_MODULE_9__["default"])(false, game)
            ;(0,_others_animation__WEBPACK_IMPORTED_MODULE_4__.stopLoading)()
        } else if(id === 'h2h') {
            (0,_others_animation__WEBPACK_IMPORTED_MODULE_4__.loading)()
            ;(0,_history_addHistory__WEBPACK_IMPORTED_MODULE_3__["default"])(`game/h2h/${game.match_id}`);
            // display
            currentDisplay = (0,_func_displayMatchByDate__WEBPACK_IMPORTED_MODULE_10__["default"])(h2h.firstTeam_VS_secondTeam, "h2h")
            ;(0,_others_animation__WEBPACK_IMPORTED_MODULE_4__.stopLoading)()
        } else {
            (0,_others_animation__WEBPACK_IMPORTED_MODULE_4__.loading)()
            // display
            currentDisplay = (0,_displayPregame__WEBPACK_IMPORTED_MODULE_7__["default"])(false, game)
            ;(0,_others_animation__WEBPACK_IMPORTED_MODULE_4__.stopLoading)()
        }
    })

    // asorina ny league active raha misy
    let activeLeague = document.querySelector('.list-league li.active');
    if(activeLeague) activeLeague.classList.remove('active')

    // rehefa mandeha ny a jour de tsy atao intsony
    if(isUpdate) return

    // rehefa live iany vao manao update    
    if(game.match_status=== "1") {
        // ataoko miandry kely fa misy erreur
        setTimeout(() => {
            // mettre a jour le resultat chaque 60 seconde 
            interval = setInterval(async () => {
                isUpdate = true
                // console.log(currentDisplay);
                // console.log('maj info');
                infoMatch(true, idMatch)
            }, 55000) // tous les une minutes  (alatsako kely amle mbola alaina)
            // console.log("interval");
        }, 250)
    }
}

function clearIntervalInfoMatch() {
    clearInterval(interval)
    isUpdate = false
    currentDisplay = undefined
    ;(0,_displayMoment__WEBPACK_IMPORTED_MODULE_6__.initMoment)()
    // console.log('clearr');
}

/***/ })

}]);
//# sourceMappingURL=src_js_infoMatch_infoMatch_js.bundle.js.map