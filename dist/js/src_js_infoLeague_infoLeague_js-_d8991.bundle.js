"use strict";
(self["webpackChunkFootball_score"] = self["webpackChunkFootball_score"] || []).push([["src_js_infoLeague_infoLeague_js-_d8991"],{

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
            <td>${player.goals}</td>
            <td>${player.assists ? player.assists : 0}</td>
            <td>${player.penalty_goals ? player.penalty_goals : 0}</td>
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
    (0,_func_getMatch__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_func_date__WEBPACK_IMPORTED_MODULE_6__.minus15)(), new Date(), idLeague).then((value) => {
        result = (0,_func_filterByDate__WEBPACK_IMPORTED_MODULE_9__["default"])(value);
        result.shift(); // shift satria lasa voaray ao le date androany
    });
    (0,_func_getMatch__WEBPACK_IMPORTED_MODULE_2__["default"])(new Date(), (0,_func_date__WEBPACK_IMPORTED_MODULE_6__.plus15)(), idLeague).then(
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
    (0,_others_animation__WEBPACK_IMPORTED_MODULE_10__.stopLoading)();
    // intervalUpdate = setInterval(async () => {
    //     if (currentDisplay === "calendar") {
    //         // affiche-na aloha sao taraiky le resultat teo aloha
    //         currentDisplay = displayMatch(calendar, "calendar");
    //         // maka vaovao
    //         calendar = await getMatch(new Date(), plus15(), idLeague);
    //         calendar = filterByDate(calendar, "ASC");
    //         // sao novainy tampoka nefa taraiky vao azo
    //         if (currentDisplay === "calendar")
    //             currentDisplay = displayMatch(calendar, "calendar");
    //     } else if (currentDisplay === "result") {
    //         // affiche-na aloha sao taraiky le resultat teo aloha
    //         currentDisplay = displayMatch(result, "result");
    //         // maka vaovao
    //         result = await getMatch(minus15(), new Date(), idLeague);
    //         result = filterByDate(result);
    //         result.shift(); // shift satria lasa voaray ao le date androany;
    //         // sao novainy tampoka nefa taraiky vao azo
    //         if (currentDisplay === "result")
    //             currentDisplay = displayMatch(result, "result");
    //     }
    // }, 60000); // tous les une minute
});

function clearIntervalInfoLeague() {
    clearInterval(intervalUpdate)
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
//# sourceMappingURL=src_js_infoLeague_infoLeague_js-_d8991.bundle.js.map