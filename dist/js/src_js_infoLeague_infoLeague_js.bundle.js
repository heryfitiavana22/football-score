"use strict";
(self["webpackChunkFootball_score"] = self["webpackChunkFootball_score"] || []).push([["src_js_infoLeague_infoLeague_js"],{

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
        listGameHTML +=  `<p style="padding-left:15px">to wait or no match</p>`
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
    let filterByDate = [],
        listDate = [];
    for (let element of game) {
        // raha mbola tsy ao le date
        if (!listDate.includes(element.match_date)) {
            filterByDate.push({
                date: element.match_date,
                game: game.filter((g) => g.match_date === element.match_date), // ireo match amnio date io
            });
            listDate.push(element.match_date);
        }
    }
    if (type === "ASC")
        filterByDate.sort((a, b) => new Date(a.date) - new Date(b.date));
    else {
        filterByDate.sort((a, b) => new Date(b.date) - new Date(a.date));
        let d = new Date();
        // tsy raisina ny date androany 
        if(filterByDate[0].date === `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`) {
            filterByDate.shift()
        }
    }
    return filterByDate;
});


/***/ }),

/***/ "./src/js/func/getScorer.js":
/*!**********************************!*\
  !*** ./src/js/func/getScorer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
let apiKey = "92268e4434769b7515b45be3b45cd3d9bdc9d3e4cf62885a85ada0a22c9acf8b";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (idLeague) => {
    return await new Promise((resolve, reject) => {
        let url = `https://apiv3.apifootball.com/?action=get_topscorers&league_id=${idLeague}&APIkey=${apiKey}`;
        fetch(url, {method : 'get'})
        .then(response => response.json())
        .then((value) => {
            // console.log('get_topscorers');
            // console.log(value);
            resolve(value.error ? [] : value)
        })
    })
});

/***/ }),

/***/ "./src/js/infoLeague/displayLeague.js":
/*!********************************************!*\
  !*** ./src/js/infoLeague/displayLeague.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((league) => {
    let currentElement = document.querySelector('.current-element');
    let infoLeague =
    `<div class="info-league info">
        <div class="country-league">
            <div class="country">
                <img src="${league.country_logo}" alt="icon-country" onerror="this.src = 'assets/img/logo2.png'">
                <span>${league.country_name}</span>
            </div>
            <div class="league">
                <img src="${league.league_logo}" alt="icon-league" onerror="this.src = 'assets/img/logo2.png'">
                <div>
                    <span class="name">${league.league_name}</span>
                    <span class="season">${league.league_season}</span>
                </div>
            </div>
        </div>
        <ul class="nav-league nav-info">
            <li class="active" id="standing">Standing</li> 
            <li id="calendar">Calendar</li>
            <li id="result">Results</li>
            <li id="scorer">Scorer</li> 
        </ul>
        <div class="current-item">
            
        </div>
    </div>`;
    currentElement.innerHTML = infoLeague;
    let iconCalendar = document.querySelector('#icon-toggle-calendar')
    if(iconCalendar) iconCalendar.style.visibility = 'hidden' 
});

/***/ }),

/***/ "./src/js/infoLeague/displayScorer.js":
/*!********************************************!*\
  !*** ./src/js/infoLeague/displayScorer.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((scorer) => {
    let scorerHTML =
    `<table class="standing-container top-scorer">
        <tr class="head-table">
            <td class="player-td">Player</td>
            <td class="team-player">Team</td>
            <td>Goals</td>
            <td>Assists</td>
            <td>Penalty </td>
        </tr>`;
    for(let player of scorer) {
        scorerHTML += 
        `<tr class="item-container">
            <td class="player-td">
                <span class="number">${player.player_place}</span>
                <span class="name">${player.player_name}</span>
            </td>
            <td class="team-player">
                <span class="name">${player.team_name}</span>
            </td>
            <td>${player.goals} <span class="caption-td">goals<span></td>
            <td>${player.assists ? player.assists : 0} <span class="caption-td">assists<span></td>
            <td>${player.penalty_goals ? player.penalty_goals : 0} <span class="caption-td">penalty<span></td>
        </tr>`    
    }
    scorerHTML +=
    `</table>`
    document.querySelector('.current-item').innerHTML = scorerHTML
    document.querySelector('.info-league .active').classList.remove('active')
    document.querySelector('.info-league #scorer').classList.add('active')
    return "scorer"
});

/***/ }),

/***/ "./src/js/infoLeague/infoLeague.js":
/*!*****************************************!*\
  !*** ./src/js/infoLeague/infoLeague.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearIntervalInfoLeague": () => (/* binding */ clearIntervalInfoLeague),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _func_getStanding__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../func/getStanding */ "./src/js/func/getStanding.js");
/* harmony import */ var _func_getScorer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../func/getScorer */ "./src/js/func/getScorer.js");
/* harmony import */ var _func_getMatch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../func/getMatch */ "./src/js/func/getMatch.js");
/* harmony import */ var _displayLeague__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./displayLeague */ "./src/js/infoLeague/displayLeague.js");
/* harmony import */ var _func_displayMatchByDate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../func/displayMatchByDate */ "./src/js/func/displayMatchByDate.js");
/* harmony import */ var _displayScorer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./displayScorer */ "./src/js/infoLeague/displayScorer.js");
/* harmony import */ var _func_date__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../func/date */ "./src/js/func/date.js");
/* harmony import */ var _func_displayStanding__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../func/displayStanding */ "./src/js/func/displayStanding.js");
/* harmony import */ var _league_listLeague__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../league/listLeague */ "./src/js/league/listLeague.js");
/* harmony import */ var _func_filterByDate__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../func/filterByDate */ "./src/js/func/filterByDate.js");
/* harmony import */ var _others_animation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../others/animation */ "./src/js/others/animation.js");
/* harmony import */ var _history_addHistory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../history/addHistory */ "./src/js/history/addHistory.js");
/* harmony import */ var _404__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../404 */ "./src/js/404.js");














let intervalUpdate = undefined,
    currentDisplay = undefined;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (isPopState, idLeague) => {
    window.scroll(0,0)
    ;(0,_others_animation__WEBPACK_IMPORTED_MODULE_10__.loading)();
    // addHistory (rehefa popstate de tsy mila mi-ajouter)
    if (!isPopState) (0,_history_addHistory__WEBPACK_IMPORTED_MODULE_11__["default"])(`league/${idLeague}`);
    idLeague = idLeague.slice(1); // asoriko ilay "l"
    let calendar = [],
        result = [],
        standing = [],
        scorer = [];
    (0,_func_getScorer__WEBPACK_IMPORTED_MODULE_1__["default"])(idLeague).then((value) => (scorer = value));
    (0,_func_getMatch__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_func_date__WEBPACK_IMPORTED_MODULE_6__.startSeason)(), new Date(), idLeague).then((value) => {
        result = (0,_func_filterByDate__WEBPACK_IMPORTED_MODULE_9__["default"])(value);
    });
    (0,_func_getMatch__WEBPACK_IMPORTED_MODULE_2__["default"])(new Date(), (0,_func_date__WEBPACK_IMPORTED_MODULE_6__.endSeason)(), idLeague).then(
        (value) => (calendar = (0,_func_filterByDate__WEBPACK_IMPORTED_MODULE_9__["default"])(value, "ASC"))
    );
    // getStanding league
    standing = await (0,_func_getStanding__WEBPACK_IMPORTED_MODULE_0__["default"])(idLeague);
    let league = (0,_league_listLeague__WEBPACK_IMPORTED_MODULE_8__.getLeagues)().filter((e) => e.league_id == idLeague);
    if (league.length === 0)
        // tsy misy io league io
        return (0,_404__WEBPACK_IMPORTED_MODULE_12__["default"])("league not found");
    league = league[0];
    // afficher la ligue
    (0,_displayLeague__WEBPACK_IMPORTED_MODULE_3__["default"])(league);
    currentDisplay = (0,_func_displayStanding__WEBPACK_IMPORTED_MODULE_7__["default"])(standing);

    /* event onclick */
    document.querySelector(".nav-league").addEventListener("click", (e) => {
        let id = e.target.id;
        if (id === "result") currentDisplay = (0,_func_displayMatchByDate__WEBPACK_IMPORTED_MODULE_4__["default"])(result, "result");
        else if (id === "standing") currentDisplay = (0,_func_displayStanding__WEBPACK_IMPORTED_MODULE_7__["default"])(standing);
        else if (id === "scorer") currentDisplay = (0,_displayScorer__WEBPACK_IMPORTED_MODULE_5__["default"])(scorer);
        else currentDisplay = (0,_func_displayMatchByDate__WEBPACK_IMPORTED_MODULE_4__["default"])(calendar, "calendar");
    });

    // asorina ny league active raha misy
    let activeLeague = document.querySelector('.list-league li.active');
    if(activeLeague) activeLeague.classList.remove('active')
    
    ;(0,_others_animation__WEBPACK_IMPORTED_MODULE_10__.stopLoading)();
    intervalUpdate = setInterval(async () => {
        if (currentDisplay === "calendar") {
            // affiche-na aloha sao taraiky le resultat teo aloha
            currentDisplay = (0,_func_displayMatchByDate__WEBPACK_IMPORTED_MODULE_4__["default"])(calendar, "calendar");
            // maka vaovao
            calendar = await (0,_func_getMatch__WEBPACK_IMPORTED_MODULE_2__["default"])(new Date(), (0,_func_date__WEBPACK_IMPORTED_MODULE_6__.endSeason)(), idLeague);
            calendar = (0,_func_filterByDate__WEBPACK_IMPORTED_MODULE_9__["default"])(calendar, "ASC");
            // sao novainy tampoka nefa taraiky vao azo
            if (currentDisplay === "calendar")
                currentDisplay = (0,_func_displayMatchByDate__WEBPACK_IMPORTED_MODULE_4__["default"])(calendar, "calendar");
        } else if (currentDisplay === "result") {
            // affiche-na aloha sao taraiky le resultat teo aloha
            currentDisplay = (0,_func_displayMatchByDate__WEBPACK_IMPORTED_MODULE_4__["default"])(result, "result");
            // maka vaovao
            result = await (0,_func_getMatch__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_func_date__WEBPACK_IMPORTED_MODULE_6__.startSeason)(), new Date(), idLeague);
            result = (0,_func_filterByDate__WEBPACK_IMPORTED_MODULE_9__["default"])(result);
            // sao novainy tampoka nefa taraiky vao azo
            if (currentDisplay === "result")
                currentDisplay = (0,_func_displayMatchByDate__WEBPACK_IMPORTED_MODULE_4__["default"])(result, "result");
        }
    }, 55000) // tous les une minute  (alatsako kely amle mbola alaina)
});

function clearIntervalInfoLeague() {
    clearInterval(intervalUpdate)
    currentDisplay = undefined
}

/***/ }),

/***/ "./src/js/league/listLeague.js":
/*!*************************************!*\
  !*** ./src/js/league/listLeague.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getLeagues": () => (/* binding */ getLeagues)
/* harmony export */ });
/* harmony import */ var _others_contryAndLeague__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../others/contryAndLeague */ "./src/js/others/contryAndLeague.js");
/* harmony import */ var _others_popularAndException__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../others/popularAndException */ "./src/js/others/popularAndException.js");



let APIkey = "92268e4434769b7515b45be3b45cd3d9bdc9d3e4cf62885a85ada0a22c9acf8b";
let listContainer = document.querySelector('.list-league'),
    url = `https://apiv3.apifootball.com/?action=get_leagues&APIkey=${APIkey}`,
    listCountry = (0,_others_contryAndLeague__WEBPACK_IMPORTED_MODULE_0__.getListCountry)(),
    listLeague = (0,_others_contryAndLeague__WEBPACK_IMPORTED_MODULE_0__.getListLeague)();
listCountry = listCountry.split(',');
listLeague = listLeague.split(',')

let list = [];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async () => {
    fetch(url, {
        method : 'get'
    })
        .then(response => response.json())
        .then((value) => {
            // izay ao anaty liste iany no raisina
            list = value
                    .filter(e => listCountry.includes(e.country_name) && listLeague.includes(e.league_name));
            let leagueId = list.map(e => e.league_id)
            // console.log('listleague');
            // console.log(list);
            // popular league and exception league
            let popularLeague = (0,_others_popularAndException__WEBPACK_IMPORTED_MODULE_1__.getPopularLeague)(leagueId),
                exceptionLeague = (0,_others_popularAndException__WEBPACK_IMPORTED_MODULE_1__.getExceptionLeague)(leagueId),
                currentNumber = 1;
            // console.log('popularLeague listleague');
            // console.log(popularLeague);
            // correct league logo
            for(let element of exceptionLeague) {
                list[element.index].league_logo = element.photo
            }
            // atao any amin farany ambony ireo ligue populaire
            // omena numero voalohany ireo league popular
            for(let element of popularLeague) {
                list[element.index].number =  currentNumber
                list[element.index].league_logo = element.photo
                currentNumber++
            }
            // omena numero ireo league mbola tsy nahazo
            for(let element of list) {
                if(!element.number) {
                    element.number =  currentNumber
                    currentNumber++
                }
            }
            // trier-na selon ny nom ana league aloha
            list.sort((a,b) => a.league_name - b.league_name)
            // trier-na selon ny numero anle league
            list.sort((a,b) => a.number - b.number)

            // display list league `<li class="list-item" onclick="getLeagueMatch(${e.league_id})">
            let listItem = ``;
            for(let e of list) {
                listItem += 
                `<li class="list-item kk${e.league_id}" id="${e.league_id}" onclick="league.getLeagueMatch(${e.league_id}, this)">
                    <img src="${e.league_logo}" alt="icon-league" id="${e.league_id}" onerror="this.src = 'assets/img/logo2.png'">
                    <span id="${e.league_id}">${e.league_name}
                        <span class="line-list" id="${e.league_id}"></span>
                    </span>
                </li>`;
            }
            listContainer.innerHTML = listItem
        })
        .catch(err => console.log(err))
});

function getLeagues() {
    return list;
}

/***/ })

}]);
//# sourceMappingURL=src_js_infoLeague_infoLeague_js.bundle.js.map