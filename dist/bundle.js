/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/.pnpm/expose-loader@4.0.0_webpack@5.74.0/node_modules/expose-loader/dist/cjs.js?exposes=calendar!./src/js/calendar.js":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/expose-loader@4.0.0_webpack@5.74.0/node_modules/expose-loader/dist/cjs.js?exposes=calendar!./src/js/calendar-exposed.js ***!
  \****************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ___EXPOSE_LOADER_IMPORT___ = __webpack_require__(/*! -!./calendar.js */ "./src/js/calendar.js");
var ___EXPOSE_LOADER_GET_GLOBAL_THIS___ = __webpack_require__(/*! ../../node_modules/.pnpm/expose-loader@4.0.0_webpack@5.74.0/node_modules/expose-loader/dist/runtime/getGlobalThis.js */ "./node_modules/.pnpm/expose-loader@4.0.0_webpack@5.74.0/node_modules/expose-loader/dist/runtime/getGlobalThis.js");
var ___EXPOSE_LOADER_GLOBAL_THIS___ = ___EXPOSE_LOADER_GET_GLOBAL_THIS___;
if (typeof ___EXPOSE_LOADER_GLOBAL_THIS___["calendar"] === 'undefined') ___EXPOSE_LOADER_GLOBAL_THIS___["calendar"] = ___EXPOSE_LOADER_IMPORT___;
else throw new Error('[exposes-loader] The "calendar" value exists in the global scope, it may not be safe to overwrite it, use the "override" option')
module.exports = ___EXPOSE_LOADER_IMPORT___;


/***/ }),

/***/ "./node_modules/.pnpm/expose-loader@4.0.0_webpack@5.74.0/node_modules/expose-loader/dist/cjs.js?exposes=game!./src/js/listMatch-exposed.js":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/expose-loader@4.0.0_webpack@5.74.0/node_modules/expose-loader/dist/cjs.js?exposes=game!./src/js/listMatch-exposed.js ***!
  \*************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ___EXPOSE_LOADER_IMPORT___ = __webpack_require__(/*! -!./listMatch.js */ "./src/js/listMatch.js");
var ___EXPOSE_LOADER_GET_GLOBAL_THIS___ = __webpack_require__(/*! ../../node_modules/.pnpm/expose-loader@4.0.0_webpack@5.74.0/node_modules/expose-loader/dist/runtime/getGlobalThis.js */ "./node_modules/.pnpm/expose-loader@4.0.0_webpack@5.74.0/node_modules/expose-loader/dist/runtime/getGlobalThis.js");
var ___EXPOSE_LOADER_GLOBAL_THIS___ = ___EXPOSE_LOADER_GET_GLOBAL_THIS___;
if (typeof ___EXPOSE_LOADER_GLOBAL_THIS___["game"] === 'undefined') ___EXPOSE_LOADER_GLOBAL_THIS___["game"] = ___EXPOSE_LOADER_IMPORT___;
else throw new Error('[exposes-loader] The "game" value exists in the global scope, it may not be safe to overwrite it, use the "override" option')
module.exports = ___EXPOSE_LOADER_IMPORT___;


/***/ }),

/***/ "./node_modules/.pnpm/expose-loader@4.0.0_webpack@5.74.0/node_modules/expose-loader/dist/cjs.js?exposes=league!./src/js/getLeagueMatch.js":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/expose-loader@4.0.0_webpack@5.74.0/node_modules/expose-loader/dist/cjs.js?exposes=league!./src/js/getLeagueMatch-exposed.js ***!
  \********************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ___EXPOSE_LOADER_IMPORT___ = __webpack_require__(/*! -!./getLeagueMatch.js */ "./src/js/getLeagueMatch.js");
var ___EXPOSE_LOADER_GET_GLOBAL_THIS___ = __webpack_require__(/*! ../../node_modules/.pnpm/expose-loader@4.0.0_webpack@5.74.0/node_modules/expose-loader/dist/runtime/getGlobalThis.js */ "./node_modules/.pnpm/expose-loader@4.0.0_webpack@5.74.0/node_modules/expose-loader/dist/runtime/getGlobalThis.js");
var ___EXPOSE_LOADER_GLOBAL_THIS___ = ___EXPOSE_LOADER_GET_GLOBAL_THIS___;
if (typeof ___EXPOSE_LOADER_GLOBAL_THIS___["league"] === 'undefined') ___EXPOSE_LOADER_GLOBAL_THIS___["league"] = ___EXPOSE_LOADER_IMPORT___;
else throw new Error('[exposes-loader] The "league" value exists in the global scope, it may not be safe to overwrite it, use the "override" option')
module.exports = ___EXPOSE_LOADER_IMPORT___;


/***/ }),

/***/ "./node_modules/.pnpm/expose-loader@4.0.0_webpack@5.74.0/node_modules/expose-loader/dist/runtime/getGlobalThis.js":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/expose-loader@4.0.0_webpack@5.74.0/node_modules/expose-loader/dist/runtime/getGlobalThis.js ***!
  \************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


// eslint-disable-next-line func-names
module.exports = function () {
  if (typeof globalThis === "object") {
    return globalThis;
  }

  var g;

  try {
    // This works if eval is allowed (see CSP)
    // eslint-disable-next-line no-new-func
    g = this || new Function("return this")();
  } catch (e) {
    // This works if the window reference is available
    if (typeof window === "object") {
      return window;
    } // This works if the self reference is available


    if (typeof self === "object") {
      return self;
    } // This works if the global reference is available


    if (typeof __webpack_require__.g !== "undefined") {
      return __webpack_require__.g;
    }
  }

  return g;
}();

/***/ }),

/***/ "./src/js/addHistory.js":
/*!******************************!*\
  !*** ./src/js/addHistory.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((hash) => {
    let url = location.protocol + '//' + location.host + '#' + hash
    window.history.pushState(null,'', url)
});

/***/ }),

/***/ "./src/js/animation.js":
/*!*****************************!*\
  !*** ./src/js/animation.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loading": () => (/* binding */ loading),
/* harmony export */   "stopLoading": () => (/* binding */ stopLoading)
/* harmony export */ });
let animation = document.querySelector('.animation');
function loading() {
    animation.style.display = 'flex'
    animation.classList.add('loading')
}

function stopLoading() {
    animation.style.display = 'none'
    animation.classList.remove('loading')
}

/***/ }),

/***/ "./src/js/calendar.js":
/*!****************************!*\
  !*** ./src/js/calendar.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createCalendar": () => (/* binding */ createCalendar),
/* harmony export */   "deleteCurrentMonth": () => (/* binding */ deleteCurrentMonth),
/* harmony export */   "downMonth": () => (/* binding */ downMonth),
/* harmony export */   "getCurrentDate": () => (/* binding */ getCurrentDate),
/* harmony export */   "setDate": () => (/* binding */ setDate),
/* harmony export */   "upMonth": () => (/* binding */ upMonth)
/* harmony export */ });
/* harmony import */ var _listMatch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listMatch */ "./src/js/listMatch.js");
/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animation */ "./src/js/animation.js");


/* calendar */
let date =  new Date(),
    currentDate = date.getDate(),
    month = date.getMonth() + 1,
    year = date.getFullYear();

function createCalendar(month,year,date) {
    let currentMonthHTML = document.querySelector('.current-date'),
        monthContainerHtml = document.querySelector('.addDayMonth');

    // recuperer la date du jour
    let monthFrench = ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'];

    let firstMonth = year + '-' + (month) + '-01',
        dateFirstMonth = new Date(firstMonth),
        dayFirstMonth = dateFirstMonth.getDay(),
        dayFinal = [31,28,31,30,31,30,31,31,30,31,30,31],
        countDay = 1,
        endMonth = dayFinal[dateFirstMonth.getMonth()],
        endMonthBefore = dayFinal[(dateFirstMonth.getMonth()-1)],
        dayAfterMonth = 1;

    // veirifier si c'est dimanche qui devra etre d'indice 7
    if(dayFirstMonth == 0) {dayFirstMonth = 7}
    // si on passe a l'annee suivante, endMonthBefore = 31 (decembre)
    if(endMonthBefore == undefined) {endMonthBefore = 31}

    let dayContainer = '';
    // créer la premiere ligne
    dayContainer += '<tr class="day" >';
    // calculeo amle sary 
    endMonthBefore = endMonthBefore - dayFirstMonth + 2;
    for(let i=1; i<=7; i++) {
        // verifier quelle est le jour du premier mois
        if(dayFirstMonth > i) {
            // jour pas dans le mois
            dayContainer += `<td><span class="day-item day-out" onclick="calendar.setDate(this,${month-1},${endMonthBefore})">${endMonthBefore}</span></td>`;
            endMonthBefore++;
        } else {
            // premiere jour du mois
            if(countDay === date) {
                dayContainer += `<td><span class="day-item currentDate" onclick="calendar.setDate(this,${month},${countDay})">${countDay}</span></td>`;
            } else {
                dayContainer += `<td><span class="day-item" onclick="calendar.setDate(this,${month},${countDay})">${countDay}</span></td>`;
            }
            countDay++;
        }
    }
    dayContainer += '</tr>';

    // créer la seconde
    dayContainer += '<tr class="day" >';
    for(let i=1; i<=7; i++) {
        if(countDay === date) {
            dayContainer += `<td><span class="day-item currentDate" onclick="calendar.setDate(this,${month},${countDay})">${countDay}</span></td>`;
        } else {
            dayContainer += `<td><span class="day-item" onclick="calendar.setDate(this,${month},${countDay})">${countDay}</span></td>`;
        }
        countDay++;
    }
    dayContainer += '</tr>';

    // créer la troiseme
    dayContainer += '<tr class="day" >';
    for(let i=1; i<=7; i++) {
        if(countDay === date) {
            dayContainer += `<td><span class="day-item currentDate" onclick="calendar.setDate(this,${month},${countDay})">${countDay}</span></td>`;
        } else {
            dayContainer += `<td><span class="day-item" onclick="calendar.setDate(this,${month},${countDay})">${countDay}</span></td>`;
        }
        countDay++;
    }
    dayContainer += '</tr>';

    // créer la quatrieme
    dayContainer += '<tr class="day" >';
    for(let i=1; i<=7; i++) {
        // verifier si c'est le fin du mois
        if(endMonth >= countDay) {
            if(countDay === date) {
                dayContainer += `<td><span class="day-item currentDate" onclick="calendar.setDate(this,${month},${countDay})">${countDay}</span></td>`;
            } else {
                dayContainer += `<td><span class="day-item" onclick="calendar.setDate(this,${month},${countDay})">${countDay}</span></td>`;
            }
            countDay++;
        } else {
            // si c'est apres la fin du mois
            dayContainer += `<td><span class="day-item day-out" onclick="calendar.setDate(this,${month+1},${dayAfterMonth})">${dayAfterMonth}</span></td>`;
            dayAfterMonth++;
        }
    }
    dayContainer += '</tr>';

    // créer la cinquieme
    dayContainer += '<tr class="day" >';
    for(let i=1; i<=7; i++) {
        // verifier si c'est le fin du mois
        if(endMonth >= countDay) {
            if(countDay === date) {
                dayContainer += `<td><span class="day-item currentDate" onclick="calendar.setDate(this,${month},${countDay})">${countDay}</span></td>`;
            } else {
                dayContainer += `<td><span class="day-item" onclick="calendar.setDate(this,${month},${countDay})">${countDay}</span></td>`;
            }
            countDay++;
        } else {
            // si c'est apres la fin du mois
            dayContainer += `<td><span class="day-item day-out" onclick="calendar.setDate(this,${month+1},${dayAfterMonth})">${dayAfterMonth}</span></td>`;
            dayAfterMonth++;
        }
    }
    dayContainer += '</tr>';

    // créer la sixieme
    dayContainer += '<tr class="day" >';
    for(let i=1; i<=7; i++) {
        // verifier si c'est le fin du mois
        if(endMonth >= countDay) {
            if(countDay === date) {
                dayContainer += `<td><span class="day-item currentDate" onclick="calendar.setDate(this,${month},${countDay})">${countDay}</span></td>`;
            } else {
                dayContainer += `<td><span class="day-item" onclick="calendar.setDate(this,${month},${countDay})">${countDay}</span></td>`;
            }
            countDay++;
        } else {
            // si c'est apres la fin du mois
            dayContainer += `<td><span class="day-item day-out" onclick="calendar.setDate(this,${month+1},${dayAfterMonth})">${dayAfterMonth}</span></td>`;
            dayAfterMonth++;
        }
    }
    dayContainer += '</tr>';

    currentMonthHTML.innerHTML = monthFrench[month-1] + ' ' + year;
    monthContainerHtml.insertAdjacentHTML('beforeend', dayContainer)
}

function downMonth() {
    month--;
    // si annee precedent
    if(month < 1) {
        year--;
        month = 12;
    }
    deleteCurrentMonth();
    createCalendar(month,year);
}

function upMonth() {
    month++;
    // si anne suivant
    if(month > 12) {
        year++;
        month = 1;
    }
    deleteCurrentMonth();
    createCalendar(month,year);
}
function deleteCurrentMonth() {
    let dayContainer = document.querySelectorAll('.day');
    for(let i=0; i<dayContainer.length; i++) {
        dayContainer[i].remove();
    }
}

function getCurrentDate() {
    return {
        year, month, currentDate
    }
}

let currentIdLeague = undefined; // tazomina le idLeague jerena raha misy
function setDate(item, m, d, idLeague, toDisplay) {
    // raha sendra amle date efa affiché no click-eny ary tsy miova ny idLeague
    if((d === currentDate) && (m === month) && (currentIdLeague == idLeague)) return
    // hideCalendar
    let actualContainer = document.querySelector('.actual')
    actualContainer.style.top = '-100%'
    if(window.innerWidth <= 768)
        actualContainer.style.display = 'flex'
    else actualContainer.style.display = 'block'
    
    ;(0,_animation__WEBPACK_IMPORTED_MODULE_1__.loading)()
    let currentDateHTML = document.querySelector('.currentDate');
    if(currentDateHTML) // raha misy, (tsy misy mantsy ito rehefa miova mois)
        currentDateHTML.classList.remove('currentDate')
    item.classList.add('currentDate')

    if(idLeague) currentIdLeague = idLeague // raha misy valeur vao ovaina
    console.log('currentIdLeague');
    console.log(currentIdLeague);
    month = m;
    currentDate = d
    if(m > 12) {
        month = 1
        year++
    } else if(m < 1) {
        month = 12
        year--
    }
    (0,_listMatch__WEBPACK_IMPORTED_MODULE_0__.listMatch)((`${year}-${month}-${currentDate}`), currentIdLeague, toDisplay)
}
/* end calendar */

/***/ }),

/***/ "./src/js/contryAndLeague.js":
/*!***********************************!*\
  !*** ./src/js/contryAndLeague.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getListCountry": () => (/* binding */ getListCountry),
/* harmony export */   "getListLeague": () => (/* binding */ getListLeague)
/* harmony export */ });
function getListCountry() {
    return "England,Belgium,Germany,Croatia,Spain,Czech Republic,France,Romania,Bulgaria,Italy,intl,eurocups,South Africa,Qatar,Worldcup,USA,Denmark,Norway,Sweden,Korea Republic,Netherlands,Mexico,Argentina,Portugal,Russia,Brazil,Switzerland,Brazil,Morocco"
};

function getListLeague() {
    return "Championship,Community Shield,FA Cup,League Cup,League One,Premier League,EFL Trophy,National League,Women's Championship,Copa del Rey,La Liga,Segunda División,Super Cup,Primera División Femenina,Primera División RFEF,DFB Pokal,Regionalliga,Super Cup,2. Bundesliga,Bundesliga,Ligue 1,Ligue 2,Coupe de la Ligue,Feminine Division 1,National 1,Trophée des Champions,Coupe de France,Serie A,Serie B,Super Cup,Coppa Italia,First Division A,Challenger Pro League,First NL,Czech Liga,Liga I,First League,CAF Super Cup,Club Friendlies,COSAFA Cup,Friendlies,UEFA U21 Championship,Africa Cup of Nations,CAF Champions League,CAF Confederation Cup,UEFA Champions League,UEFA Champions League - Group Stage,UEFA Europa League,UEFA Europa League - Group Stage,UEFA Youth League,UEFA Youth League - Group Stage,PSL,QSL Cup,World Cup,MLS,Superliga,1. Division,Damallsvenskan,K League 1,Eredivisie,Eerste Divisie,Liga MX,Liga Profesional Argentina,Primeira Liga,Premier League,Serie A,Super League,Botola Pro,Premier League";
}

/***/ }),

/***/ "./src/js/displayListMatch.js":
/*!************************************!*\
  !*** ./src/js/displayListMatch.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(listGame) {
    let matchContainer = document.querySelector('.match-container'),
        matchToRemoved = document.querySelectorAll('.matchs'),
        leagueContainer = document.querySelector('.league-container');
    // fafana le match misy eo
    matchToRemoved.forEach(e => e.remove())
    for(let country of listGame) {
        let countryGameHTML = 
        `<div class="matchs">
            <h3>
                <img src="${country.logoCountry}" alt="icon-country">
                <div class="d-inline">
                    <span class="country">${country.countryName}</span>
                    <span class="league">${country.leagueName}</span>
                </div>
            </h3>
            <ul class="list-match">`;
        for(let game of country.game) {
            // live match
            if(game.match_live === '1') 
                countryGameHTML += 
                    `<li class="live" id="${game.match_id}">
                        <span class="hour-match" id="${game.match_id}">${isNaN(game.match_status) ? game.match_status : ((game.match_status + ' min'))}</span>`;
            // finished game
            else if((game.match_status === 'Finished') || (game.match_status === 'After ET') || (game.match_status === 'After Pen.'))
                countryGameHTML += 
                    `<li class="finished" id="${game.match_id}">
                        <span class="hour-match" id="${game.match_id}">${game.match_time}</span>`
            // reporte
            else if(game.match_status === 'Postponed')
            countryGameHTML += 
                `<li id="${game.match_id}">
                    <span class="hour-match" id="${game.match_id}">postponed</span>`
            else 
                countryGameHTML += 
                    `<li id="${game.match_id}">
                        <span class="hour-match"  id="${game.match_id}">${game.match_time}</span>`
            countryGameHTML += 
                `<div class="match-item" id="${game.match_id}">
                    <div class="home" id="${game.match_id}">
                        <img src="${game.team_home_badge || 'assets/img/logo2.png'}" alt="icon-team" id="${game.match_id}">
                        <span id="${game.match_id}">${game.match_hometeam_name}</span>
                        <span class="score-home score" id="${game.match_id}">${(game.match_hometeam_score.length > 0) ? game.match_hometeam_score : '  '}</span> 
                    </div>
                    <span class="vs" id="${game.match_id}">vs</span>
                    <div class="away" id="${game.match_id}">
                        <span class="away-home score" id="${game.match_id}">${(game.match_awayteam_score.length > 0) ? game.match_awayteam_score : '  '}</span>
                        <img src="${game.team_away_badge || 'assets/img/logo2.png'}" alt="icon-team" id="${game.match_id}">
                        <span id="${game.match_id}">${game.match_awayteam_name}</span>
                    </div>
                </div>
            </li>`;
        }
        matchContainer.insertAdjacentHTML('beforeend', countryGameHTML)
    }
}

/***/ }),

/***/ "./src/js/getInfoMatch.js":
/*!********************************!*\
  !*** ./src/js/getInfoMatch.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
let apiKey = "5abf557ce643bfb8836e00496fc0e64543d61180848a164763839561abbbafda";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (idMatch) => {
    console.log('idMatch');
    console.log(idMatch);
    return await new Promise((reslove, reject) => {
        let url = `https://apiv3.apifootball.com/?action=get_events&APIkey=${apiKey}&match_id=${idMatch}`;
        console.log(url);
        fetch(url, {method : 'get'})
        .then(response => response.json())
        .then((value) => {
            console.log('getInfoMatch');
            console.log(value);
            reslove(value[0])
        })
    })
});


/***/ }),

/***/ "./src/js/getLeagueMatch.js":
/*!**********************************!*\
  !*** ./src/js/getLeagueMatch.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getLeagueMatch": () => (/* binding */ getLeagueMatch)
/* harmony export */ });
/* harmony import */ var _calendar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calendar */ "./src/js/calendar.js");
/* harmony import */ var _listMatch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listMatch */ "./src/js/listMatch.js");



let currentLeagueHTML = undefined;
function getLeagueMatch (idLeague, item) {
    let d = new Date(),
        year = d.getFullYear(),
        month = d.getMonth()+1,
        dateToday = d.getDate();
    (0,_calendar__WEBPACK_IMPORTED_MODULE_0__.deleteCurrentMonth)()
    ;(0,_calendar__WEBPACK_IMPORTED_MODULE_0__.createCalendar)(month, year, dateToday)
    let dateTodayHTML = document.querySelector('.currentDate');
    (0,_calendar__WEBPACK_IMPORTED_MODULE_0__.setDate)(dateTodayHTML, month, dateToday, idLeague, _listMatch__WEBPACK_IMPORTED_MODULE_1__.listMatchToday)
    // to active
    if(currentLeagueHTML) currentLeagueHTML.classList.add('active')
    item.classList.add('active')
    currentLeagueHTML = item
    window.scroll(0,0)
}

/***/ }),

/***/ "./src/js/infoMatch.js":
/*!*****************************!*\
  !*** ./src/js/infoMatch.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getInfoMatch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getInfoMatch */ "./src/js/getInfoMatch.js");
/* harmony import */ var _addHistory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addHistory */ "./src/js/addHistory.js");
/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animation */ "./src/js/animation.js");
 



let navMatch = undefined,
    container = undefined;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (idMatch) => {
    (0,_animation__WEBPACK_IMPORTED_MODULE_2__.loading)()
    let game = [];
    // addHistory(`game/${idMatch}`);
    game = await (0,_getInfoMatch__WEBPACK_IMPORTED_MODULE_0__["default"])(idMatch)
    console.log('game');
    console.log(game);
    displayGame(game)
    navMatch = document.querySelector('.nav-match');
    container = navMatch.nextElementSibling;
    displayMoment(game)
    displayPreGame()
    ;(0,_animation__WEBPACK_IMPORTED_MODULE_2__.stopLoading)()

    navMatch.addEventListener('click', (e) => {
        ;(0,_animation__WEBPACK_IMPORTED_MODULE_2__.loading)()
        // console.log(e.target.id);
        if(e.target.id === 'standing') {
            (0,_animation__WEBPACK_IMPORTED_MODULE_2__.loading)()
            displayStanding()
            ;(0,_animation__WEBPACK_IMPORTED_MODULE_2__.stopLoading)()
        }else if(e.target.id === 'stats') {
            (0,_animation__WEBPACK_IMPORTED_MODULE_2__.loading)()
            displayStats()
            ;(0,_animation__WEBPACK_IMPORTED_MODULE_2__.stopLoading)()
        } else {
            (0,_animation__WEBPACK_IMPORTED_MODULE_2__.loading)()
            displayPreGame()
            ;(0,_animation__WEBPACK_IMPORTED_MODULE_2__.stopLoading)()
        }
    })
});


function displayGame(game) {
    let infoMatchHTML = document.querySelector('.info-match');
    if(infoMatchHTML) return // au cas ou efa misy, ohatra oe voatsindry indroa
    let gameHTML =
    `<div class="info-match finished">
        <h3 class="country-league">
            <img src="${game.country_logo || "assets/img/logo2.png"}" alt="icon-country">
            <span class="country">${game.country_name} : </span>
            <span class="league">${game.league_name}</span>
        </h3>
        <div class="match">
            <div class="home team">
                <img src="${game.team_home_badge || "assets/img/logo2.png"}" alt="icon-team">
                <span class="team-name">${game.match_hometeam_name}</span>
                <span class="score">${game.match_hometeam_score}</span>
            </div>
            <div class="info">
                <span class="hour-match">${game.match_time}</span>
                <span class="date-match">${game.match_date}</span>
                <!-- <span class="vs">vs</span> -->
            </div>
            <div class="away team">
                <span class="score">${game.match_awayteam_score}</span>
                <img src="${game.team_away_badge || "assets/img/logo2.png"}" alt="icon-team">
                <span class="team-name">${game.match_awayteam_name}</span>
            </div>
        </div>
        <!-- moment fort  -->
        <div class="moment-container"></div>
        <ul class="nav-match">
            <li class="active" id="pregame">Pre-game</li>
            <li id="standing">Standing</li>
            <li id="stats">Stats</li> 
        </ul>
        <div style="padding: 10px;">
            
        </div>
    </div>`
    document.querySelector('.content').insertAdjacentHTML('beforeend', gameHTML)
}

function displayMoment(game) {
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
    moment.sort((a,b) => a.time - b.time)
    console.log('moment');
    console.log(moment);

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
    momentHTML += 
        `<!-- voir plus  -->
        <div class="show-more"><span>show more</span></div>`;
    momentContainer.innerHTML = momentHTML;
    document.querySelector('.show-more').addEventListener('click', () => {
        momentContainer.style.height = "auto"
    })
}

function displayPreGame(preGame) {
    let prgeGameHTML = 
    `<div class="lineup">
        <img src="assets/img/terrain.png" alt="terrain">
        <div class="players-container">
            <div class="home">
                <!-- system  -->
                <span class="system">4-1-4-1</span>
                <div class="row-item">
                    <div class="player">
                        <img src="assets/img/p1.png" alt="icon-player">
                        <span class="player-name">Fitiavana Fitiavana Fitiavana</span>
                    </div>
                </div>
            </div>
            <div class="away">
                <!-- system  -->
                <span class="system">4-3-3-3</span>
            </div>
            </div>
    </div>
    <div class="coach-missing">
        <!-- coach  -->
        <div class="coach">
            <div class="team">
                <div class="home">
                    <img src="assets/img/logo2.png" alt="icon-team">
                    <span class="team-name">Home home</span>
                </div>
                <div class="away">
                    <img src="assets/img/logo2.png" alt="icon-team">
                    <span class="team-name">Home</span>
                </div>
            </div>
            <div class="manager">
                <div class="home">
                    <span class="caption">Manager : </span>
                    <span class="manager">Hery dj</span>
                </div>
                <div class="away">
                    <span class="caption">Manager : </span>
                    <span class="manager">Hery dj</span>
                </div>
            </div>
        </div>
    </div>
    <!-- end pre-game  -->`
    container.innerHTML = prgeGameHTML
}

function displayStanding(standing) {
    let standingHTML =
    `<table class="standing-container">
        <tr class="head-table">
            <td class="team">Team</td>
            <td>P</td>
            <td>GF</td>
            <td>GA</td>
            <td>GD</td>
            <td>Pts</td>
        </tr>
        <tr class="team-container">
            <td class="team">
                <span class="number">1</span> 
                <img src="assets/img/logo2.png" alt="icon-team">
                <span class="name">Real Madrid</span>
            </td>
            <td>0</td>
            <td>100</td>
            <td>0</td>
            <td>0</td>
            <td>100</td>
        </tr>
        <tr class="team-container">
            <td class="team">
                <span class="number">1</span> 
                <img src="assets/img/logo2.png" alt="icon-team">
                <span class="name">Real Madrid</span>
            </td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
        </tr>
    </table>`
    container.innerHTML = standingHTML
}

function displayStats(stats) {
    let statsHTML = 
    `<div class="statistics">
        <h4>Statistics</h4>
        <div class="row-item">
            <span class="home">50%</span>
            <span class="item">ball possession</span>
            <span class="away">50%</span>
        </div>
        <div class="row-item">
            <span class="home">1</span>
            <span class="item">shots</span>
            <span class="away">5</span>
        </div>
    </div>`
    container.innerHTML = statsHTML
}

/***/ }),

/***/ "./src/js/league.js":
/*!**************************!*\
  !*** ./src/js/league.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getExceptionCountry": () => (/* binding */ getExceptionCountry),
/* harmony export */   "getExceptionLeague": () => (/* binding */ getExceptionLeague),
/* harmony export */   "getPopularCountry": () => (/* binding */ getPopularCountry),
/* harmony export */   "getPopularLeague": () => (/* binding */ getPopularLeague)
/* harmony export */ });
function getPopularLeague(leagueId) {
    // index : index anle ligue ao anatinle tableau
    return [
        {index : leagueId.indexOf('152'), id : 152 , photo : 'assets/img/pl.jpg'}, // PL
        {index : leagueId.indexOf('175'), id : 175 , photo : 'assets/img/Bundesliga.svg.png'}, // bundesliga
        {index : leagueId.indexOf('302'), id : 302 , photo : 'assets/img/laliga.png'}, // la liga
        {index : leagueId.indexOf('168'), id : 168 , photo : 'assets/img/ligue1.png'}, // ligue 1
        {index : leagueId.indexOf('207'), id : 207 , photo : 'assets/img/serie a.svg'}, // serie a
        {index : leagueId.indexOf('3'), id : 3 , photo : 'assets/img/ldc.png'}, // ldc
        {index : leagueId.indexOf('4'), id : 4 , photo : 'assets/img/uel.png'}, // europa league
        {index : leagueId.indexOf('244'), id : 244 , photo : 'assets/img/eredivisie.png'}, // eredivisie
        {index : leagueId.indexOf('28'), id : 28 , photo : 'assets/img/worldcup.jpg'}, //  world cup
    ]
}

function getExceptionLeague(leagueId) {
    return [
        {index : leagueId.indexOf('301'), photo : 'assets/img/laliga.png'}, 
        {index : leagueId.indexOf('688'), photo : 'assets/img/cosafa.png'}, 
        {index : leagueId.indexOf('365'), photo : 'assets/img/psl.jpeg'}, 
        {index : leagueId.indexOf('579'), photo : 'assets/img/PrimeiraLigaBrasil.png'}, 
        {index : leagueId.indexOf('647'), photo : 'assets/img/qsl.png'}, 
        {index : leagueId.indexOf('412'), photo : 'assets/img/supercoupnorway.png'}, 
        {index : leagueId.indexOf('380'), photo : 'assets/img/Czech_Republic_Football_Supercup.jpg'}, 
        {index : leagueId.indexOf('268'), photo : 'assets/img/supertaca.jpg'}, 
        {index : leagueId.indexOf('574'), photo : 'assets/img/belgium-super-league-women.webp'}, 
        {index : leagueId.indexOf('652'), photo : "assets/img/FA_Women's_Championship.png"}
    ]
}

function getPopularCountry(countryId) {
    return [
        {index : countryId.indexOf('44')}, // angleterre
        {index : countryId.indexOf('4')}, // allemagne
        {index : countryId.indexOf('6')}, // espagne
        {index : countryId.indexOf('3')}, // france
        {index : countryId.indexOf('5')}, // italy
        {index : countryId.indexOf('1')}, // ldc, uel
        {index : countryId.indexOf('8')} // world cup
    ]
}

function getExceptionCountry(countryId) {
    return [
        {index : countryId.indexOf('44'), photo : 'assets/img/england.png'}, // angleterre
        {index : countryId.indexOf('2'), photo : 'assets/img/intl.png'}, // intl
    ]
}

/***/ }),

/***/ "./src/js/listLeague.js":
/*!******************************!*\
  !*** ./src/js/listLeague.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animation */ "./src/js/animation.js");
/* harmony import */ var _contryAndLeague__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contryAndLeague */ "./src/js/contryAndLeague.js");
/* harmony import */ var _league__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./league */ "./src/js/league.js");




let listContainer = document.querySelector('.list-league'),
    url = "https://apiv3.apifootball.com/?action=get_leagues&APIkey=5abf557ce643bfb8836e00496fc0e64543d61180848a164763839561abbbafda",
    listCountry = (0,_contryAndLeague__WEBPACK_IMPORTED_MODULE_1__.getListCountry)(),
    listLeague = (0,_contryAndLeague__WEBPACK_IMPORTED_MODULE_1__.getListLeague)();
listCountry = listCountry.split(',');
listLeague = listLeague.split(',')

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async () => {
    fetch(url, {
        method : 'get'
    })
        .then(response => response.json())
        .then((value) => {
            // izay ao anaty liste iany no raisina
            let list = value
                    .filter(e => listCountry.includes(e.country_name) && listLeague.includes(e.league_name)),
                leagueId = list.map(e => e.league_id)
            console.log('listleague');
            console.log(list);
            // popular league and exception league
            let popularLeague = (0,_league__WEBPACK_IMPORTED_MODULE_2__.getPopularLeague)(leagueId),
                exceptionLeague = (0,_league__WEBPACK_IMPORTED_MODULE_2__.getExceptionLeague)(leagueId);
            // atao any amin farany ambony ireo ligue populaire
            for(let i=0; i<popularLeague.length; i++) {
                let tmp = list[i];
                list[i] = list[popularLeague[i].index]
                list[popularLeague[i].index] = tmp
                list[i].league_logo = popularLeague[i].photo
            }
            // correct league logo
            for(let element of exceptionLeague) {
                list[element.index].league_logo = element.photo
            }
            // display list league `<li class="list-item" onclick="getLeagueMatch(${e.league_id})">
            for(let e of list) {
                let listItem = 
                `<li class="list-item" onclick="league.getLeagueMatch(${e.league_id}, this)">
                    <img src="${e.league_logo}" alt="icon-league">
                    <span>${e.league_name}
                        <span class="line-list"></span>
                    </span>
                </li>`;
                listContainer.insertAdjacentHTML('beforeend', listItem)
            }
            (0,_animation__WEBPACK_IMPORTED_MODULE_0__.stopLoading)()
        })
        .catch(err => console.log(err))
});

/***/ }),

/***/ "./src/js/listMatch.js":
/*!*****************************!*\
  !*** ./src/js/listMatch.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "listMatch": () => (/* binding */ listMatch),
/* harmony export */   "listMatchFinished": () => (/* binding */ listMatchFinished),
/* harmony export */   "listMatchLive": () => (/* binding */ listMatchLive),
/* harmony export */   "listMatchToday": () => (/* binding */ listMatchToday),
/* harmony export */   "updateScore": () => (/* binding */ updateScore)
/* harmony export */ });
/* harmony import */ var _contryAndLeague__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contryAndLeague */ "./src/js/contryAndLeague.js");
/* harmony import */ var _league__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./league */ "./src/js/league.js");
/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animation */ "./src/js/animation.js");
/* harmony import */ var _displayListMatch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./displayListMatch */ "./src/js/displayListMatch.js");
/* harmony import */ var _infoMatch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./infoMatch */ "./src/js/infoMatch.js");






let APIkey = "5abf557ce643bfb8836e00496fc0e64543d61180848a164763839561abbbafda"
let listLeague = (0,_contryAndLeague__WEBPACK_IMPORTED_MODULE_0__.getListLeague)(),
    listCountry = (0,_contryAndLeague__WEBPACK_IMPORTED_MODULE_0__.getListCountry)(),
    gamePerLeague = [],
    activeInNavBar = document.querySelector('.navbar-match .nav-list li.active'),
    currentItem = listMatchToday; // ilaina amle update-na score

async function listMatch(date, idLeague, toDisplay) {
    gamePerLeague = [];
    let d = new Date(date),
        currentYear = d.getFullYear(),
        currentMonth = d.getMonth()+1,
        currentDay = d.getDate(),
        currentDate = currentYear + '-' + currentMonth + '-' + currentDay;
    console.log(currentDate);
    let url = `https://apiv3.apifootball.com/?action=get_events&from=${currentDate}&to=${currentDate}&APIkey=${APIkey}&timezone=Africa/Nairobi`;
    fetch(url, {method : 'get'})
        .then(response => response.json())
        .then((value) => {
            // ireo anaty liste iany no alaina
            let list = value.filter(e => listCountry.includes(e.country_name) && listLeague.includes(e.league_name)),
                leagueId = [],
                countryId = [];
            // au cas ou idLeague est donne
            if(idLeague) {
                list = list.filter(e => e.league_id == idLeague)
            }
                console.log('list match');
                console.log(list);
            // filter by country and league
            // alaina ny liste ana leagueId (tsy azo asiana miverina) ary tonga dia alaina ny match 
            for(let e of list) {
                if(!leagueId.includes(e.league_id)) {  // raha mbola tsy ao
                    gamePerLeague.push({
                        id : e.league_id,
                        countryName : e.country_name,
                        leagueName : e.league_name,
                        logoCountry : e.country_logo || e.league_logo,
                        game : list.filter(g => g.league_id === e.league_id)
                    })
                    leagueId.push(e.league_id)
                    countryId.push(e.country_id)
                }
                    
            }
            let popularLeague = (0,_league__WEBPACK_IMPORTED_MODULE_1__.getPopularLeague)(leagueId);
            let indexFree = [],
                idPopularLeague = popularLeague.map(e => e.id);
            // jerena oe aiza ny place malalaka, izay isanle popular league
            for(let i=0; i<popularLeague.length; i++) {
                if(!idPopularLeague.includes(gamePerLeague[i] ? Number(gamePerLeague[i].id) : '')) {
                    indexFree.push(i)
                }
            }
            // correct logo country
            if(countryId.includes('2'))
                gamePerLeague[countryId.indexOf('2')].logoCountry = 'assets/img/intl.png'
            // correct ldc and uel logo
            if(leagueId.includes('4'))
                gamePerLeague[leagueId.indexOf('4')].logoCountry = 'assets/img/uel.png'
            if(leagueId.includes('3'))
                gamePerLeague[leagueId.indexOf('3')].logoCountry = 'assets/img/ldc.png'
            // asorina izay tsy hita ao anaty tableau ny indice-ny, zany oe tsy misy match
            // izay any ambonin' popularLeague.length iany no akisaka
            popularLeague = popularLeague.filter(e => (e.index >= 0 && e.index > popularLeague.length))
            // atao any amin farany ambony ireo league populaire
            for(let i=0; i<popularLeague.length; i++) {
                // apetraka any amle index malalaka
                let tmp = gamePerLeague[indexFree[i]];
                gamePerLeague[indexFree[i]] = gamePerLeague[popularLeague[i].index]
                gamePerLeague[popularLeague[i].index] = tmp
            }
            console.log('gamePerLeague');
            console.log(gamePerLeague);
            // affiche-na ny match androany na ireo live na ireo match vita
            if(toDisplay) { // raha misy no specifie-na
                activeInNavBar = document.querySelector('.currentDate');
                currentItem = toDisplay
            } 
            // effacer le contenu courant
            let infoMatchHTML = document.querySelector('.info-match');
            if(infoMatchHTML) infoMatchHTML.remove()
            // raha mbola tsy misy le navbar
            currentItem(activeInNavBar)
            // event onclick 
            let listMatchHTML = document.querySelector('.match-container')
            listMatchHTML.addEventListener('click', (e) => {
                console.log(e.target.id);
                    // effacer le contenu courant
                let actual = document.querySelector('.actual');
                actual.style.display = 'none'
                listMatchHTML.remove();
                (0,_infoMatch__WEBPACK_IMPORTED_MODULE_4__["default"])(e.target.id)
            })
            ;(0,_animation__WEBPACK_IMPORTED_MODULE_2__.stopLoading)()
        })
}

function init() {
    let matchContainerHTML = document.createElement('div');
    matchContainerHTML.classList.add('match-container');

}

function listMatchToday(item) {
    currentItem = listMatchToday;
    activeInNavBar.classList.remove('active')
    item.classList.add('active')
    activeInNavBar = item;
    (0,_animation__WEBPACK_IMPORTED_MODULE_2__.loading)()
    ;(0,_displayListMatch__WEBPACK_IMPORTED_MODULE_3__["default"])(gamePerLeague)
    ;(0,_animation__WEBPACK_IMPORTED_MODULE_2__.stopLoading)()
}

async function listMatchLive(item) {
    currentItem = listMatchLive;
    activeInNavBar.classList.remove('active')
    item.classList.add('active')
    activeInNavBar = item;
    (0,_animation__WEBPACK_IMPORTED_MODULE_2__.loading)()
    // recuperena ireo match en live
    let gameLive = [];
    for(let e of gamePerLeague) {
        gameLive.push({
            countryName : e.countryName,
            leagueName : e.leagueName,
            logoCountry : e.logoCountry,
            game : e.game.filter(i => i.match_live === "1") // recuperena ireo match en live
        })
    }
    // asorina ireo tsy misy match
    gameLive = gameLive.filter(e => e.game.length > 0)
    console.log('game live');
    console.log(gameLive);
    (0,_displayListMatch__WEBPACK_IMPORTED_MODULE_3__["default"])(gameLive)
    ;(0,_animation__WEBPACK_IMPORTED_MODULE_2__.stopLoading)()
}

function listMatchFinished(item) {
    currentItem = listMatchFinished;
    activeInNavBar.classList.remove('active')
    item.classList.add('active')
    activeInNavBar = item;
    (0,_animation__WEBPACK_IMPORTED_MODULE_2__.loading)()
    // recuperena ireo match efa tapitra
    let initialGame = gamePerLeague,
        gameFinished = [];
    gameFinished = initialGame
        .map(e => {
            return {
                countryName : e.countryName,
                leagueName : e.leagueName,
                logoCountry : e.logoCountry,
                game : e.game
                    .filter(i => (i.match_live === "0") && ((i.match_hometeam_score.length > 0) || (i.match_awayteam_score.length > 0)))
            }
        })
    // asorina ireo tsy misy match
    gameFinished = gameFinished.filter(e => e.game.length > 0)
    console.log('gameFinished');
    console.log(gameFinished);
    (0,_displayListMatch__WEBPACK_IMPORTED_MODULE_3__["default"])(gameFinished)
    ;(0,_animation__WEBPACK_IMPORTED_MODULE_2__.stopLoading)()
}

async function updateScore() {
    currentItem()
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _listLeague__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listLeague */ "./src/js/listLeague.js");
/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animation */ "./src/js/animation.js");
/* harmony import */ var expose_loader_exposes_game_listMatch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! expose-loader?exposes=game!./listMatch */ "./node_modules/.pnpm/expose-loader@4.0.0_webpack@5.74.0/node_modules/expose-loader/dist/cjs.js?exposes=game!./src/js/listMatch-exposed.js");
/* harmony import */ var expose_loader_exposes_game_listMatch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(expose_loader_exposes_game_listMatch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var expose_loader_exposes_calendar_calendar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! expose-loader?exposes=calendar!./calendar */ "./node_modules/.pnpm/expose-loader@4.0.0_webpack@5.74.0/node_modules/expose-loader/dist/cjs.js?exposes=calendar!./src/js/calendar.js");
/* harmony import */ var expose_loader_exposes_calendar_calendar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(expose_loader_exposes_calendar_calendar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var expose_loader_exposes_league_getLeagueMatch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! expose-loader?exposes=league!./getLeagueMatch */ "./node_modules/.pnpm/expose-loader@4.0.0_webpack@5.74.0/node_modules/expose-loader/dist/cjs.js?exposes=league!./src/js/getLeagueMatch.js");
/* harmony import */ var expose_loader_exposes_league_getLeagueMatch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(expose_loader_exposes_league_getLeagueMatch__WEBPACK_IMPORTED_MODULE_4__);







let {year,month,currentDate} = (0,expose_loader_exposes_calendar_calendar__WEBPACK_IMPORTED_MODULE_3__.getCurrentDate)()

;(0,_animation__WEBPACK_IMPORTED_MODULE_1__.loading)()
;(0,expose_loader_exposes_game_listMatch__WEBPACK_IMPORTED_MODULE_2__.listMatch)(new Date())
;(0,_listLeague__WEBPACK_IMPORTED_MODULE_0__["default"])()
;(0,expose_loader_exposes_calendar_calendar__WEBPACK_IMPORTED_MODULE_3__.createCalendar)(month,year,currentDate)

// stopLoading()
// let intervalListMatch = setInterval(() => {
//     listMatch(new Date())
// }, 10000)
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map