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

/***/ "./src/css/animation.css":
/*!*******************************!*\
  !*** ./src/css/animation.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/css/color.css":
/*!***************************!*\
  !*** ./src/css/color.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/css/infoMatch.css":
/*!*******************************!*\
  !*** ./src/css/infoMatch.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/css/listMatch.css":
/*!*******************************!*\
  !*** ./src/css/listMatch.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/js/404.js":
/*!***********************!*\
  !*** ./src/js/404.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
    document.querySelector('.current-element').innerHTML = 'page not found'
});

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
        tbody = document.querySelector('.day-container tbody');

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
            dayContainer += `<td><span class="day-item day-out" onclick="calendar.setDate(false, ${month-1},${endMonthBefore})">${endMonthBefore}</span></td>`;
            endMonthBefore++;
        } else {
            // premiere jour du mois
            if(countDay === date) {
                dayContainer += `<td><span class="day-item currentDate" onclick="calendar.setDate(false, ${month},${countDay})">${countDay}</span></td>`;
            } else {
                dayContainer += `<td><span class="day-item" onclick="calendar.setDate(false, ${month},${countDay})">${countDay}</span></td>`;
            }
            countDay++;
        }
    }
    dayContainer += '</tr>';

    // créer la seconde
    dayContainer += '<tr class="day" >';
    for(let i=1; i<=7; i++) {
        if(countDay === date) {
            dayContainer += `<td><span class="day-item currentDate" onclick="calendar.setDate(false, ${month},${countDay})">${countDay}</span></td>`;
        } else {
            dayContainer += `<td><span class="day-item" onclick="calendar.setDate(false, ${month},${countDay})">${countDay}</span></td>`;
        }
        countDay++;
    }
    dayContainer += '</tr>';

    // créer la troiseme
    dayContainer += '<tr class="day" >';
    for(let i=1; i<=7; i++) {
        if(countDay === date) {
            dayContainer += `<td><span class="day-item currentDate" onclick="calendar.setDate(false, ${month},${countDay})">${countDay}</span></td>`;
        } else {
            dayContainer += `<td><span class="day-item" onclick="calendar.setDate(false, ${month},${countDay})">${countDay}</span></td>`;
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
                dayContainer += `<td><span class="day-item currentDate" onclick="calendar.setDate(false, ${month},${countDay})">${countDay}</span></td>`;
            } else {
                dayContainer += `<td><span class="day-item" onclick="calendar.setDate(false, ${month},${countDay})">${countDay}</span></td>`;
            }
            countDay++;
        } else {
            // si c'est apres la fin du mois
            dayContainer += `<td><span class="day-item day-out" onclick="calendar.setDate(false, ${month+1},${dayAfterMonth})">${dayAfterMonth}</span></td>`;
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
                dayContainer += `<td><span class="day-item currentDate" onclick="calendar.setDate(false, ${month},${countDay})">${countDay}</span></td>`;
            } else {
                dayContainer += `<td><span class="day-item" onclick="calendar.setDate(false, ${month},${countDay})">${countDay}</span></td>`;
            }
            countDay++;
        } else {
            // si c'est apres la fin du mois
            dayContainer += `<td><span class="day-item day-out" onclick="calendar.setDate(false, ${month+1},${dayAfterMonth})">${dayAfterMonth}</span></td>`;
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
                dayContainer += `<td><span class="day-item currentDate" onclick="calendar.setDate(false, ${month},${countDay})">${countDay}</span></td>`;
            } else {
                dayContainer += `<td><span class="day-item" onclick="calendar.setDate(false, ${month},${countDay})">${countDay}</span></td>`;
            }
            countDay++;
        } else {
            // si c'est apres la fin du mois
            dayContainer += `<td><span class="day-item day-out" onclick="calendar.setDate(false, ${month+1},${dayAfterMonth})">${dayAfterMonth}</span></td>`;
            dayAfterMonth++;
        }
    }
    dayContainer += '</tr>';

    currentMonthHTML.innerHTML = monthFrench[month-1] + ' ' + year;
    if(window.innerWidth <= 768) 
        document.querySelector('#icon-toggle-calendar').style.display = 'block'
    tbody.insertAdjacentHTML('beforeend', dayContainer)
}

function downMonth() {
    month--;
    // si annee precedent
    if(month < 1) {
        year--;
        month = 12;
    }
    deleteCurrentMonth();
    createCalendar(month,year, currentDate);
}

function upMonth() {
    month++;
    // si anne suivant
    if(month > 12) {
        year++;
        month = 1;
    }
    deleteCurrentMonth();
    createCalendar(month,year, currentDate);
}
function deleteCurrentMonth() {
    let dayContainer = document.querySelectorAll('.day');
    dayContainer.forEach(e => e.remove())
}

function getCurrentDate() {
    return {
        year, month, currentDate
    }
}

let currentIdLeague = undefined; // tazomina le idLeague jerena raha misy
function setDate(isPopState=false, m, d, idLeague, toDisplay) {
    // raha sendra amle date efa affiché no click-eny ary tsy miova ny idLeague
    // if((d === currentDate) && (m === month)) return
    // hideCalendar (valable ito rehefa le ecran <= 768)
    let actualContainer = document.querySelector('.actual')
    if(actualContainer) actualContainer.style.top = '-100%' // raha misy
    
    ;(0,_animation__WEBPACK_IMPORTED_MODULE_1__.loading)()

    if(idLeague !== undefined) currentIdLeague = idLeague // raha misy valeur vao ovaina
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
    (0,_listMatch__WEBPACK_IMPORTED_MODULE_0__.listMatch)(isPopState, (`${year}-${month}-${currentDate}`), currentIdLeague, toDisplay)
}
/* end calendar */

/***/ }),

/***/ "./src/js/checkHistory.js":
/*!********************************!*\
  !*** ./src/js/checkHistory.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _infoMatch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./infoMatch */ "./src/js/infoMatch.js");
/* harmony import */ var _calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calendar */ "./src/js/calendar.js");
/* harmony import */ var _listLeague__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./listLeague */ "./src/js/listLeague.js");
/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./animation */ "./src/js/animation.js");
/* harmony import */ var _404__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./404 */ "./src/js/404.js");






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((isPopState) => {
    let hash = window.location.hash;
    console.log(hash);
    (0,_listLeague__WEBPACK_IMPORTED_MODULE_2__["default"])()
    if((hash.length === 0) || (hash === "#")) {
        (0,_animation__WEBPACK_IMPORTED_MODULE_3__.loading)()
        let d = new Date();
        // ovaina aloha ny date de ao vao maka ny listMatch
        (0,_calendar__WEBPACK_IMPORTED_MODULE_1__.setDate)(isPopState, (d.getMonth()+1), d.getDate(), 0) 
        // let intervalListMatch = setInterval(() => {
        //     listMatch(new Date())
        // }, 10000)
        return
    }
    // verifier si listgame ou game (asorina le #)
    let item = hash.slice(1, hash.indexOf('/'));
    // asorina ilay efa azo
    hash = hash.slice(hash.indexOf('/')+1)
    if(item === "listgame") {
        let index = hash.indexOf('&');
        if(index > 0) {
            let date = hash.slice(0,index),
                idLeague = hash.slice(index+1)
            date = new Date(date);
            // si date n'est pas valide et l'id n'est pas un nombre
            if((date.toString() === "Invalid Date") && isNaN(idLeague))
                return (0,_404__WEBPACK_IMPORTED_MODULE_4__["default"])() // 404
            // ovaina aloha ny date de ao vao maka ny listMatch
            ;(0,_calendar__WEBPACK_IMPORTED_MODULE_1__.setDate)(isPopState, (date.getMonth()+1), date.getDate(), idLeague) 
        } else {
            // hash correspond au date, le izy notapahana mantsy
            hash = new Date(hash)
            if(hash.toString() === "Invalid Date")
                return (0,_404__WEBPACK_IMPORTED_MODULE_4__["default"])() // 404
            ;(0,_calendar__WEBPACK_IMPORTED_MODULE_1__.setDate)(isPopState, (hash.getMonth()+1), hash.getDate()) 
        }
    } else if(item === "game") {
        let indexSlash = hash.indexOf('/'),
            type = hash.slice(0,indexSlash); // mety ho pregame,standing,stats
        hash = hash.slice(indexSlash+1); // asorina izay efa azo
        indexSlash = hash.indexOf('/'); // slash manaraka
        let id = hash.slice(0) // idMatch
        // raha tsy nombre le id
        if(isNaN(id)) return (0,_404__WEBPACK_IMPORTED_MODULE_4__["default"])() // 404
        if(type === "pregame") 
            (0,_infoMatch__WEBPACK_IMPORTED_MODULE_0__["default"])(isPopState, id)
        else if(type === "standing") 
            (0,_infoMatch__WEBPACK_IMPORTED_MODULE_0__["default"])(isPopState, id, "standing")
        else if(type === "stats")
            (0,_infoMatch__WEBPACK_IMPORTED_MODULE_0__["default"])(isPopState, id, "stats")
        else return (0,_404__WEBPACK_IMPORTED_MODULE_4__["default"])() // 404
    } else 
        return (0,_404__WEBPACK_IMPORTED_MODULE_4__["default"])() // 404
});


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
/* harmony import */ var _infoMatch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./infoMatch */ "./src/js/infoMatch.js");
/* harmony import */ var _listMatch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listMatch */ "./src/js/listMatch.js");



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(listGame) {
    let currentElement = document.querySelector('.current-element');
    
    let countryGameHTML = ``;
    for(let country of listGame) {
        countryGameHTML += 
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
            // match mbola tsy nandeha; finished game and postponed
            else 
            countryGameHTML += 
                `<li id="${game.match_id}">
                    <span class="hour-match" id="${game.match_id}">${(game.match_status === 'Postponed') ? 'postponed' : game.match_time}</span>`
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
        countryGameHTML += 
        `   </ul>
        </div>`
    }

    let listMatchHTML =
    `<div class="match-container">
        <nav class="navbar-match">
            <ul class="nav-list">
                <li class="active col-4 match-today">Today</li>
                <li class="col-4 match-live">Live</li>
                <li class="col-4 match-finished">Finished</li>
            </ul>
        </nav>
        ${countryGameHTML}
    </div>
    <!-- actual  -->
    <div class="actual">
        <!-- calendar  -->
        <div class="calendar-month">
            <div class="current-month">
                <div class="jump-month left">
                    <div class="jump" onclick="calendar.downMonth();">
                        <span class="ti ti-angle-left"></span>
                    </div>
    
                </div>
                <div class="current-date">
                    date du jour
                </div>
                <div class="jump-month right">
                    <div class="jump" onclick="calendar.upMonth()">
                        <span class="ti ti-angle-right"></span>
                    </div>
                </div>
            </div>
            <div class="day-container">
                <table style="border-collapse: collapse; display: flex;">
                    <tbody style="width: 100%;" class="addDayMonth">
                        <tr class="week">
                            <td>Lun</td>
                            <td>Mar</td>
                            <td>Mer</td>
                            <td>Jeu</td>
                            <td>Ven</td>
                            <td>Sam</td>
                            <td>Dim</td>
                        </tr>
                        <!-- day month here -->
                    </tbody>
                
                </table>
            </div>
        </div>
        <span id="close-calendar" class="ti ti-close close""></span>
    </div>`;
    currentElement.innerHTML = listMatchHTML;
    // event onclick 
    listMatchHTML = document.querySelector('.match-container')
    listMatchHTML.addEventListener('click', (e) => {
        console.log(e.target.id);
        let idMatch = e.target.id
        if(isNaN(idMatch) || idMatch === '') return; // au cas ou tsy nombre
        (0,_infoMatch__WEBPACK_IMPORTED_MODULE_0__["default"])(false, idMatch)
    })

    /* onclick match today, live, finished */
    document.querySelector('.match-today').addEventListener('click', () => {
        console.log('ati');
        (0,_listMatch__WEBPACK_IMPORTED_MODULE_1__.listMatchToday)()
    })

    document.querySelector('.match-live').addEventListener('click', () => {
        ;(0,_listMatch__WEBPACK_IMPORTED_MODULE_1__.listMatchLive)()
    })

    document.querySelector('.match-finished').addEventListener('click', () => {
        ;(0,_listMatch__WEBPACK_IMPORTED_MODULE_1__.listMatchFinished)()
    })

    /* onclick close calendar */
    document.querySelector('#close-calendar').addEventListener('click', () => {
        console.log('closec');
        document.querySelector('.actual').style.top = '-100%'
    })
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
        let url = `https://apiv3.apifootball.com/?action=get_events&APIkey=${apiKey}&match_id=${idMatch}&timezone=Africa/Nairobi`;
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
        month = d.getMonth()+1,
        dateToday = d.getDate();
    (0,_calendar__WEBPACK_IMPORTED_MODULE_0__.setDate)(false, month, dateToday, idLeague, _listMatch__WEBPACK_IMPORTED_MODULE_1__.listMatchToday)
    // to active
    if(currentLeagueHTML) currentLeagueHTML.classList.remove('active')
    item.classList.add('active')
    document.querySelector('.league-container').style.left = '-100%' // rehefa le responsive
    currentLeagueHTML = item
    window.scroll(0,0)
}

/***/ }),

/***/ "./src/js/getStanding.js":
/*!*******************************!*\
  !*** ./src/js/getStanding.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
let apiKey = "5abf557ce643bfb8836e00496fc0e64543d61180848a164763839561abbbafda";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (idLeague) => {
    return await new Promise((resolve, reject) => {
        let url = `https://apiv3.apifootball.com/?action=get_standings&league_id=${idLeague}&APIkey=${apiKey}`;
        fetch(url, {method : 'get'})
        .then(response => response.json())
        .then((value) => {
            console.log('getStanding');
            console.log(value);
            resolve(value.error ? [] : value)
        })
    })
}); 

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
/* harmony import */ var _getStanding__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getStanding */ "./src/js/getStanding.js");
/* harmony import */ var _addHistory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addHistory */ "./src/js/addHistory.js");
/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./animation */ "./src/js/animation.js");
 




let navMatch = undefined,
    container = undefined;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (isPopState=false, idMatch, toDisplay) => {
    (0,_animation__WEBPACK_IMPORTED_MODULE_3__.loading)()
    let game = [],
        standing = [];
    
    game = await (0,_getInfoMatch__WEBPACK_IMPORTED_MODULE_0__["default"])(idMatch)
    // classement
    console.log('game');
    console.log(game);
    // display game (home vs away)
    displayGame(game)
    navMatch = document.querySelector('.nav-match');
    container = navMatch.nextElementSibling;
    // display moment fort
    displayMoment(game)
    if(toDisplay === "standing") { // raha tiana specifie-na ho classement
        standing = await (0,_getStanding__WEBPACK_IMPORTED_MODULE_1__["default"])(game.league_id)
        displayStanding(isPopState, standing, game.match_id)
    } else if(toDisplay === "stats") {
        (0,_getStanding__WEBPACK_IMPORTED_MODULE_1__["default"])(game.league_id).then((value) => standing = value)
        displayStats(isPopState, game)
    } else {
        (0,_getStanding__WEBPACK_IMPORTED_MODULE_1__["default"])(game.league_id).then((value) => standing = value)
        displayPreGame(isPopState, game)
    }
    (0,_animation__WEBPACK_IMPORTED_MODULE_3__.stopLoading)()

    navMatch.addEventListener('click', (e) => {
        ;(0,_animation__WEBPACK_IMPORTED_MODULE_3__.loading)()
        console.log(e.target);
        if(e.target.id === 'standing') {
            (0,_animation__WEBPACK_IMPORTED_MODULE_3__.loading)()
            // display
            displayStanding(isPopState, standing, game.match_id)
            ;(0,_animation__WEBPACK_IMPORTED_MODULE_3__.stopLoading)()
        }else if(e.target.id === 'stats') {
            (0,_animation__WEBPACK_IMPORTED_MODULE_3__.loading)()
            // display
            displayStats(isPopState, game)
            ;(0,_animation__WEBPACK_IMPORTED_MODULE_3__.stopLoading)()
        } else {
            (0,_animation__WEBPACK_IMPORTED_MODULE_3__.loading)()
            // display
            displayPreGame(isPopState, game)
            ;(0,_animation__WEBPACK_IMPORTED_MODULE_3__.stopLoading)()
        }
    })
});


function displayGame(game) {
    let currentElement = document.querySelector('.current-element'),
        hour = '';
    if(game.match_live === '1') 
        hour = isNaN(game.match_status) ? game.match_status : (game.match_status + ' min')
    else
        hour = (game.match_status === 'Postponed') ? 'postponed' : game.match_time
    let gameHTML =
    `<div class="info-match">
        <h3 class="country-league">
            <img src="${game.country_logo || "assets/img/logo2.png"}" alt="icon-country">
            <span class="country">${game.country_name} : </span>
            <span class="league">${game.league_name}</span>
        </h3>
        <div class="match ${(game.match_live == "1") ? 'live' : ''}">
            <div class="home team">
                <img src="${game.team_home_badge || "assets/img/logo2.png"}" alt="icon-team">
                <span class="team-name">${game.match_hometeam_name}</span>
                <span class="score">${game.match_hometeam_score}</span>
            </div>
            <div class="info">
                <span class="hour-match">${hour}</span>
                <span class="date-match">${game.match_date}</span>
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
            <li id="standing" class="">Standing</li>
            <li id="stats" class="">Stats</li> 
        </ul>
        <div style="padding: 10px;">
            
        </div>
    </div>`
    currentElement.innerHTML = gameHTML
    document.querySelector('#icon-toggle-calendar').style.display = 'none'
}

function displayMoment(game) {
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
}

function displayPreGame(isPopState=false,game) {
    // add history
    if(!isPopState) // rehefa popstate de tsy mila mi-ajouter
        (0,_addHistory__WEBPACK_IMPORTED_MODULE_2__["default"])(`game/pregame/${game.match_id}`);
    let home = {
        system : game.match_hometeam_system || "4-3-3",
        lineup : game.lineup.home.starting_lineups,
        coach : (game.lineup.home.coach.length > 0) ? game.lineup.home.coach[0].lineup_player : 'à attendre' 
    },
        away = {
            system : game.match_awayteam_system || "4-3-3",
            lineup : game.lineup.away.starting_lineups,
            coach : (game.lineup.away.coach.length > 0) ? game.lineup.away.coach[0].lineup_player : 'à attendre' 
    };
    // trier selon le position du joueur
    home.lineup.sort((a,b) => a.lineup_position - b.lineup_position);
    away.lineup.sort((a,b) => a.lineup_position - b.lineup_position);
    let preGameHTML = ``;
    // raha efa misy formation
    if(home.lineup.length > 0) {
        preGameHTML += 
        `<div class="lineup">
            <img src="assets/img/terrain.png" alt="terrain">
            <div class="players-container">
                <div class="home">
                    <!-- system  -->
                    <span class="system">${home.system}</span>
                    <div class="row-item">
                        <div class="player">
                            <div class ="icon-player">${home.lineup[0].lineup_number}</div>
                            <span class="player-name">${home.lineup[0].lineup_player}</span>
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
                    <span class="manager">${home.coach}</span>
                </div>
                <div class="away">
                    <span class="caption">Manager : </span>
                    <span class="manager">${away.coach}</span>
                </div>
            </div>
        </div>
    </div>
    <!-- end pre-game  -->`
    container.innerHTML = preGameHTML
    // active
    document.querySelector('.info-match .nav-match li.active').classList.remove('active');
    document.querySelectorAll('.info-match .nav-match li')[0].classList.add('active');
}

function displayStanding(isPopState=false ,standing, idMatch) {
    // add history
    if(!isPopState) // rehefa popstate de tsy mila mi-ajouter
        (0,_addHistory__WEBPACK_IMPORTED_MODULE_2__["default"])(`game/standing/${idMatch}`);
    let standingHTML =
    `<table class="standing-container">
        <tr class="head-table">
            <td class="team">Team</td>
            <td>P</td>
            <td>GF</td>
            <td>GA</td>
            <td>GD</td>
            <td>Pts</td>
        </tr>`;
        for(let element of standing) {
            standingHTML += 
            `<tr class="team-container">
                <td class="team">
                    <span class="number">${element.overall_league_position}</span> 
                    <img src="${element.team_badge || 'assets/img/logo2.png'}" alt="icon-team">
                    <span class="name">${element.team_name}</span>
                </td>
                <td>${element.overall_league_payed}</td>
                <td>${element.overall_league_GF}</td>
                <td>${element.overall_league_GA}</td>
                <td>${element.overall_league_GF - element.overall_league_GA}</td>
                <td>${element.overall_league_PTS}</td>
            </tr>`
        }
    standingHTML += `</table>`
    container.innerHTML = standingHTML
    // active
    document.querySelector('.info-match .nav-match li.active').classList.remove('active');
    document.querySelectorAll('.info-match .nav-match li')[1].classList.add('active');
}

function displayStats(isPopState=false, game) {
    // add history
    if(!isPopState) // rehefa popstate de tsy mila mi-ajouter
        (0,_addHistory__WEBPACK_IMPORTED_MODULE_2__["default"])(`game/stats/${game.match_id}`);
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
    container.innerHTML = statsHTML
    // active
    document.querySelector('.info-match .nav-match li.active').classList.remove('active');
    document.querySelectorAll('.info-match .nav-match li')[2].classList.add('active');
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
                exceptionLeague = (0,_league__WEBPACK_IMPORTED_MODULE_2__.getExceptionLeague)(leagueId),
                currentNumber = 1;
            console.log('popularLeague listleague');
            console.log(popularLeague);
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
                `<li class="list-item" id="${e.league_id}" onclick="league.getLeagueMatch(${e.league_id}, this)">
                    <img src="${e.league_logo}" alt="icon-league" id="${e.league_id}">
                    <span id="${e.league_id}">${e.league_name}
                        <span class="line-list" id="${e.league_id}"></span>
                    </span>
                </li>`;
            }
            listContainer.innerHTML = listItem
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
/* harmony import */ var _calendar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./calendar */ "./src/js/calendar.js");
/* harmony import */ var _addHistory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addHistory */ "./src/js/addHistory.js");







let APIkey = "5abf557ce643bfb8836e00496fc0e64543d61180848a164763839561abbbafda"
let listLeague = (0,_contryAndLeague__WEBPACK_IMPORTED_MODULE_0__.getListLeague)(),
    listCountry = (0,_contryAndLeague__WEBPACK_IMPORTED_MODULE_0__.getListCountry)(),
    gamePerLeague = [],
    activeInNavBar = document.querySelector('.navbar-match .nav-list li.active'),
    currentItem = listMatchToday; // ilaina amle update-na score

async function listMatch(isPopState=false, date, idLeague, toDisplay) {
    gamePerLeague = [];
    let d = new Date(date),
        currentYear = d.getFullYear(),
        currentMonth = d.getMonth()+1,
        currentDay = d.getDate(),
        currentDate = currentYear + '-' + currentMonth + '-' + currentDay;
    console.log('date');
    console.log(date);
    // add history (rehefa popstate de tsy mila mi-ajouter)
    if(!isPopState)
        (0,_addHistory__WEBPACK_IMPORTED_MODULE_5__["default"])(`listgame/${currentDate}${idLeague ? ('&'+idLeague) : ''}`)
    let url = `https://apiv3.apifootball.com/?action=get_events&from=${currentDate}&to=${currentDate}&APIkey=${APIkey}&timezone=Africa/Nairobi`;
    fetch(url, {method : 'get'})
        .then(response => response.json())
        .then((value) => {
            // ireo anaty liste iany no alaina
            let list = value.filter(e => listCountry.includes(e.country_name) && listLeague.includes(e.league_name)),
                leagueId = [],
                countryId = [];
            // au cas ou idLeague est donne
            if(idLeague > 0) {
                list = list.filter(e => e.league_id == idLeague)
            }
            // trier selon l'heure du match
            list.sort((a,b) => new Date(`${a.match_date} ${a.match_time}`) - new Date(`${b.match_date} ${b.match_time}`))
            console.log('list match');
            console.log(list);
            // filter by country and league
            // sady alaina ny liste ana leagueId (tsy azo asiana miverina) ary tonga dia alaina ny match 
            for(let e of list) {
                if(!leagueId.includes(e.league_id)) {  // raha mbola tsy ao
                    gamePerLeague.push({
                        number : undefined,
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
            let currentNumber = 1;
            // asorina izay tsy hita ao anaty tableau ny indice-ny, zany oe tsy misy match
            // omena numero voalohany ireo popular league mba anamorana ny ampisehoana azy voalohany
            popularLeague = popularLeague.filter(e => e.index >= 0)
            for(let element of popularLeague) {
                gamePerLeague[element.index].number = currentNumber;
                currentNumber++;
            }
            // omena numero ireo mbola tsy nahazo
            for(let element of gamePerLeague) {
                if(element.number === undefined){
                    element.number = currentNumber;
                    currentNumber++
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
    
            // trier-na selon an'ny numero any
            gamePerLeague.sort((a,b) => a.number - b.number)
            console.log('gamePerLeague');
            console.log(gamePerLeague);
            // affiche-na ny match androany na ireo live na ireo match vita
            if(toDisplay) { // raha misy no specifie-na
                currentItem = toDisplay
            } 
            currentItem()
            ;(0,_animation__WEBPACK_IMPORTED_MODULE_2__.stopLoading)()
        })
}

function listMatchToday() {
    currentItem = listMatchToday;
    (0,_animation__WEBPACK_IMPORTED_MODULE_2__.loading)()
    ;(0,_displayListMatch__WEBPACK_IMPORTED_MODULE_3__["default"])(gamePerLeague)
    activeInNavBar = document.querySelector('.match-container .nav-list li.active')
    activeInNavBar.classList.remove('active')
    activeInNavBar = document.querySelector('.match-today');
    activeInNavBar.classList.add('active')
    // re-creer le calendrier (eviter queqlue erreur)
    let {year, month, currentDate} = (0,_calendar__WEBPACK_IMPORTED_MODULE_4__.getCurrentDate)()
    ;(0,_calendar__WEBPACK_IMPORTED_MODULE_4__.deleteCurrentMonth)()
    ;(0,_calendar__WEBPACK_IMPORTED_MODULE_4__.createCalendar)(month, year, currentDate)
    ;(0,_animation__WEBPACK_IMPORTED_MODULE_2__.stopLoading)()
}

async function listMatchLive() {
    currentItem = listMatchLive;
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
    activeInNavBar = document.querySelector('.match-container .nav-list li.active')
    activeInNavBar.classList.remove('active')
    activeInNavBar = document.querySelector('.match-live');
    activeInNavBar.classList.add('active')
    // re-creer le calendrier (eviter queqlue erreur)
    let {year, month, currentDate} = (0,_calendar__WEBPACK_IMPORTED_MODULE_4__.getCurrentDate)()
    ;(0,_calendar__WEBPACK_IMPORTED_MODULE_4__.deleteCurrentMonth)()
    ;(0,_calendar__WEBPACK_IMPORTED_MODULE_4__.createCalendar)(month, year, currentDate)
    ;(0,_animation__WEBPACK_IMPORTED_MODULE_2__.stopLoading)()
}

function listMatchFinished() {
    currentItem = listMatchFinished;
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
    activeInNavBar = document.querySelector('.match-container .nav-list li.active')
    activeInNavBar.classList.remove('active')
    activeInNavBar = document.querySelector('.match-finished');
    activeInNavBar.classList.add('active')
    // re-creer le calendrier (eviter queqlue erreur)
    let {year, month, currentDate} = (0,_calendar__WEBPACK_IMPORTED_MODULE_4__.getCurrentDate)()
    ;(0,_calendar__WEBPACK_IMPORTED_MODULE_4__.deleteCurrentMonth)()
    ;(0,_calendar__WEBPACK_IMPORTED_MODULE_4__.createCalendar)(month, year, currentDate)
    ;(0,_animation__WEBPACK_IMPORTED_MODULE_2__.stopLoading)()
}

async function updateScore() {
    currentItem()
}

/***/ }),

/***/ "./src/js/someEventlistener.js":
/*!*************************************!*\
  !*** ./src/js/someEventlistener.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
    let iconCalendar = document.querySelector('#icon-toggle-calendar'),
        iconListLeague = document.querySelector('#icon-toggle-league'),
        closeCalendar = document.querySelector('#close-calendar'),
        closeListLeague = document.querySelector('#close-league');

    let leagueContainer = document.querySelector('.league-container'),
        matchContainer = document.querySelector('.match-container');

    /* icon calendar */
    console.log(closeCalendar);
    iconCalendar.addEventListener('click', () => {
        document.querySelector('.actual').style.top = '0'
    })

    closeCalendar.addEventListener('click', () => {
        console.log('closec');
        document.querySelector('.actual').style.top = '-100%'
    })

    /* icon listLeague */
    iconListLeague.addEventListener('click', () => {
        leagueContainer.style.left = '0'
        matchContainer.style.display = 'none' // eviter queqlue bug
    })

    closeListLeague.addEventListener('click', () => {
        leagueContainer.style.left = '-100%'
        matchContainer.style.display = 'block'
    })
});

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
/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animation */ "./src/js/animation.js");
/* harmony import */ var expose_loader_exposes_calendar_calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! expose-loader?exposes=calendar!./calendar */ "./node_modules/.pnpm/expose-loader@4.0.0_webpack@5.74.0/node_modules/expose-loader/dist/cjs.js?exposes=calendar!./src/js/calendar.js");
/* harmony import */ var expose_loader_exposes_calendar_calendar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(expose_loader_exposes_calendar_calendar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var expose_loader_exposes_league_getLeagueMatch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! expose-loader?exposes=league!./getLeagueMatch */ "./node_modules/.pnpm/expose-loader@4.0.0_webpack@5.74.0/node_modules/expose-loader/dist/cjs.js?exposes=league!./src/js/getLeagueMatch.js");
/* harmony import */ var expose_loader_exposes_league_getLeagueMatch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(expose_loader_exposes_league_getLeagueMatch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _checkHistory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./checkHistory */ "./src/js/checkHistory.js");
/* harmony import */ var _addHistory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./addHistory */ "./src/js/addHistory.js");
/* harmony import */ var _someEventlistener__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./someEventlistener */ "./src/js/someEventlistener.js");
/* harmony import */ var _css_color_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../css/color.css */ "./src/css/color.css");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../css/style.css */ "./src/css/style.css");
/* harmony import */ var _css_listMatch_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../css/listMatch.css */ "./src/css/listMatch.css");
/* harmony import */ var _css_infoMatch_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../css/infoMatch.css */ "./src/css/infoMatch.css");
/* harmony import */ var _css_animation_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../css/animation.css */ "./src/css/animation.css");












(0,_animation__WEBPACK_IMPORTED_MODULE_0__.loading)()
;(0,_someEventlistener__WEBPACK_IMPORTED_MODULE_5__["default"])() // onclick sy ny namany
;(0,_checkHistory__WEBPACK_IMPORTED_MODULE_3__["default"])(false) // false satria pushstate 

window.onpopstate = (e) => {
    console.log('onpopstate');
    console.log(e);
    (0,_checkHistory__WEBPACK_IMPORTED_MODULE_3__["default"])(true)
}

/* logo onclick */
document.querySelector('.nav-bar .logo').addEventListener('click', () => {
    ;(0,_addHistory__WEBPACK_IMPORTED_MODULE_4__["default"])('')
    ;(0,_checkHistory__WEBPACK_IMPORTED_MODULE_3__["default"])(false)
})

// stopLoading()
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map