/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/.pnpm/expose-loader@4.0.0_webpack@5.74.0/node_modules/expose-loader/dist/cjs.js?exposes=calendar!./src/js/calendar/calendar.js":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/expose-loader@4.0.0_webpack@5.74.0/node_modules/expose-loader/dist/cjs.js?exposes=calendar!./src/js/calendar/calendar-exposed.js ***!
  \*************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ___EXPOSE_LOADER_IMPORT___ = __webpack_require__(/*! -!./calendar.js */ "./src/js/calendar/calendar.js");
var ___EXPOSE_LOADER_GET_GLOBAL_THIS___ = __webpack_require__(/*! ../../../node_modules/.pnpm/expose-loader@4.0.0_webpack@5.74.0/node_modules/expose-loader/dist/runtime/getGlobalThis.js */ "./node_modules/.pnpm/expose-loader@4.0.0_webpack@5.74.0/node_modules/expose-loader/dist/runtime/getGlobalThis.js");
var ___EXPOSE_LOADER_GLOBAL_THIS___ = ___EXPOSE_LOADER_GET_GLOBAL_THIS___;
if (typeof ___EXPOSE_LOADER_GLOBAL_THIS___["calendar"] === 'undefined') ___EXPOSE_LOADER_GLOBAL_THIS___["calendar"] = ___EXPOSE_LOADER_IMPORT___;
else throw new Error('[exposes-loader] The "calendar" value exists in the global scope, it may not be safe to overwrite it, use the "override" option')
module.exports = ___EXPOSE_LOADER_IMPORT___;


/***/ }),

/***/ "./node_modules/.pnpm/expose-loader@4.0.0_webpack@5.74.0/node_modules/expose-loader/dist/cjs.js?exposes=league!./src/js/league/getLeagueMatch.js":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/expose-loader@4.0.0_webpack@5.74.0/node_modules/expose-loader/dist/cjs.js?exposes=league!./src/js/league/getLeagueMatch-exposed.js ***!
  \***************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ___EXPOSE_LOADER_IMPORT___ = __webpack_require__(/*! -!./getLeagueMatch.js */ "./src/js/league/getLeagueMatch.js");
var ___EXPOSE_LOADER_GET_GLOBAL_THIS___ = __webpack_require__(/*! ../../../node_modules/.pnpm/expose-loader@4.0.0_webpack@5.74.0/node_modules/expose-loader/dist/runtime/getGlobalThis.js */ "./node_modules/.pnpm/expose-loader@4.0.0_webpack@5.74.0/node_modules/expose-loader/dist/runtime/getGlobalThis.js");
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

/***/ "./src/css/infoLeague.css":
/*!********************************!*\
  !*** ./src/css/infoLeague.css ***!
  \********************************/
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

/***/ "./src/css/infoTeam.css":
/*!******************************!*\
  !*** ./src/css/infoTeam.css ***!
  \******************************/
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
/* harmony import */ var _others_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./others/animation */ "./src/js/others/animation.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((message = 'page not found') => {
    document.querySelector('.current-element').innerHTML = message
    ;(0,_others_animation__WEBPACK_IMPORTED_MODULE_0__.stopLoading)()
});

/***/ }),

/***/ "./src/js/calendar/calendar.js":
/*!*************************************!*\
  !*** ./src/js/calendar/calendar.js ***!
  \*************************************/
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
/* harmony import */ var _listMatch_listMatch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../listMatch/listMatch */ "./src/js/listMatch/listMatch.js");
/* harmony import */ var _others_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../others/animation */ "./src/js/others/animation.js");



/* calendar */
let date =  new Date(),
    currentDate = date.getDate(),
    monthSelected = date.getMonth() + 1, // mois selectionné (miova rehefa manao setDate)
    currentMonth = monthSelected, // ilay miovaova rehfe upMonth sy down
    yearSelected = date.getFullYear(), // annee selectionné (miova rehefa manao setDate)
    currentYear = yearSelected; // ilay miovaova rehfe upMonth sy down

function createCalendar(month,year,date) {
    let currentMonthHTML = document.querySelector('.current-date'),
        tbody = document.querySelector('.day-container tbody');

    let monthText = ['January','February','Mars','April','May','June','July','August','September','October','November','December'];

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
            if((countDay === date) && (month === monthSelected) && (year === yearSelected)) { // raha date courant
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
        if((countDay === date) && (month === monthSelected) && (year === yearSelected)) { // raha date courant
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
        if((countDay === date) && (month === monthSelected) && (year === yearSelected)) { // raha date courant
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
            if((countDay === date) && (month === monthSelected) && (year === yearSelected)) { // raha date courant
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
            if((countDay === date) && (month === monthSelected) && (year === yearSelected)) { // raha date courant
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
            if((countDay === date) && (month === monthSelected) && (year === yearSelected)) { // raha date courant
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

    currentMonthHTML.innerHTML = monthText[month-1] + ' ' + year;
    document.querySelector('#icon-toggle-calendar').style.visibility = 'visible'
    tbody.insertAdjacentHTML('beforeend', dayContainer)
}

/* mampidina mois */
function downMonth() {
    currentMonth--;
    // si annee precedent
    if(currentMonth < 1) {
        currentYear--;
        currentMonth = 12;
    }
    deleteCurrentMonth();
    createCalendar(currentMonth, currentYear, currentDate);
}

/* mampiakatra mois */
function upMonth() {
    currentMonth++;
    // si anne suivant
    if(currentMonth > 12) {
        currentYear++;
        currentMonth = 1;
    }
    deleteCurrentMonth();
    createCalendar(currentMonth, currentYear, currentDate);
}

/* mamafa anle mi-affiche eo */
function deleteCurrentMonth() {
    let dayContainer = document.querySelectorAll('.day');
    dayContainer.forEach(e => e.remove())
}

/* maka ireo annee, mois , date courant */
function getCurrentDate() {
    return {
        currentYear, currentMonth, currentDate
    }
}

let currentIdLeague = undefined; // tazomina le idLeague jerena raha misy
/* manova date */
function setDate(isPopState=false, m, d, idLeague, toDisplay) {
    // hideCalendar (valable ito rehefa le ecran <= 768)
    let actualContainer = document.querySelector('.actual')
    if(actualContainer) actualContainer.style.top = '-100%' // raha misy
    // raha sendra amle date efa affiché no click-eny ary tsy miova ny idLeague
    // if((currentDate === d) && (m === monthSelected) && (idLeague === currentIdLeague)) 
    //     return
    
    ;(0,_others_animation__WEBPACK_IMPORTED_MODULE_1__.loading)()

    if(idLeague !== undefined) currentIdLeague = idLeague // raha misy valeur vao ovaina
    // console.log('currentIdLeague');
    // console.log(currentIdLeague);
    currentMonth = m;
    currentDate = d
    if(m > 12) {
        currentMonth = 1
        currentYear++
    } else if(m < 1) {
        currentMonth = 12
        currentYear--
    }
    monthSelected = currentMonth;
    yearSelected = currentYear;
    (0,_listMatch_listMatch__WEBPACK_IMPORTED_MODULE_0__.listMatch)(isPopState, (`${currentYear}-${currentMonth}-${currentDate}`), currentIdLeague, toDisplay)
}
/* end calendar */

/***/ }),

/***/ "./src/js/func/date.js":
/*!*****************************!*\
  !*** ./src/js/func/date.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "minus15": () => (/* binding */ minus15),
/* harmony export */   "plus15": () => (/* binding */ plus15),
/* harmony export */   "toYYYYMMDD": () => (/* binding */ toYYYYMMDD)
/* harmony export */ });
function toYYYYMMDD(date) {
    let d = new Date(date),
        year = d.getFullYear(),
        month = d.getMonth() + 1,
        day = d.getDate();
    return year + "-" + month + "-" + day;
}
/* ampiana 15 jours */
function plus15(date = new Date()) {
    let d = new Date(date),
        dateEnd = new Date(d.getFullYear(), d.getMonth(), d.getDate()+15);
    return dateEnd.getFullYear() + '-' + (dateEnd.getMonth()+1) + '-' + dateEnd.getDate()
}
/* anasorana 15 jous */
function minus15(date = new Date()) {
    let d = new Date(date),
        dateFirst = new Date(d.getFullYear(), d.getMonth(), d.getDate()-15);
    return dateFirst.getFullYear() + '-' + (dateFirst.getMonth()+1) + '-' + dateFirst.getDate()
}


/***/ }),

/***/ "./src/js/func/displayMatchByDate.js":
/*!*******************************************!*\
  !*** ./src/js/func/displayMatchByDate.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";
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

/***/ "./src/js/func/getMatch.js":
/*!*********************************!*\
  !*** ./src/js/func/getMatch.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _others_contryAndLeague__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../others/contryAndLeague */ "./src/js/others/contryAndLeague.js");
/* harmony import */ var _date__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./date */ "./src/js/func/date.js");



let APIkey = "92268e4434769b7515b45be3b45cd3d9bdc9d3e4cf62885a85ada0a22c9acf8b";
let listLeague = (0,_others_contryAndLeague__WEBPACK_IMPORTED_MODULE_0__.getListLeague)(),
    listCountry = (0,_others_contryAndLeague__WEBPACK_IMPORTED_MODULE_0__.getListCountry)();

// raha tsy mahazo valeur le "to" de atao mitovy amin "from"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (from, to = from, idLeague = 0, idTeam = 0) => {
    return await new Promise((resolve, reject) => {
        let fromDate = (0,_date__WEBPACK_IMPORTED_MODULE_1__.toYYYYMMDD)(from),
            toDate = (0,_date__WEBPACK_IMPORTED_MODULE_1__.toYYYYMMDD)(to);
        console.log("from-to");
        console.log(fromDate+'-'+toDate);
        let url = `https://apiv3.apifootball.com/?action=get_events&from=${fromDate}&to=${toDate}&APIkey=${APIkey}&timezone=Africa/Nairobi`;
        
        // au cas ou idLeague est donne
        if(idLeague > 0) url += `&league_id=${idLeague}`
        // au cas ou idLeague est donne
        if(idTeam > 0) url += `&team_id=${idTeam}`
        
        fetch(url, { method: "get" })
            .then((response) => response.json())
            .then((value) => {
                if(value.error) return resolve([])
                // ireo anaty liste iany no alaina
                let list = value.filter(e => listCountry.includes(e.country_name) && listLeague.includes(e.league_name));
                // trier selon l'heure du match
                list.sort((a,b) => new Date(`${a.match_date} ${a.match_time}`) - new Date(`${b.match_date} ${b.match_time}`))
                resolve(list)
            })
            .catch(err => console.log(err))
    });
});


/***/ }),

/***/ "./src/js/func/getScorer.js":
/*!**********************************!*\
  !*** ./src/js/func/getScorer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./src/js/func/getStanding.js":
/*!************************************!*\
  !*** ./src/js/func/getStanding.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./src/js/history/addHistory.js":
/*!**************************************!*\
  !*** ./src/js/history/addHistory.js ***!
  \**************************************/
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

/***/ "./src/js/history/checkHistory.js":
/*!****************************************!*\
  !*** ./src/js/history/checkHistory.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _infoMatch_infoMatch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../infoMatch/infoMatch */ "./src/js/infoMatch/infoMatch.js");
/* harmony import */ var _infoLeague_infoLeague__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../infoLeague/infoLeague */ "./src/js/infoLeague/infoLeague.js");
/* harmony import */ var _infoTeam_infoTeam__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../infoTeam/infoTeam */ "./src/js/infoTeam/infoTeam.js");
/* harmony import */ var _calendar_calendar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../calendar/calendar */ "./src/js/calendar/calendar.js");
/* harmony import */ var _league_listLeague__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../league/listLeague */ "./src/js/league/listLeague.js");
/* harmony import */ var _others_animation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../others/animation */ "./src/js/others/animation.js");
/* harmony import */ var _404__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../404 */ "./src/js/404.js");










/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((isPopState) => {
    let hash = window.location.hash;
    console.log(hash);
    (0,_others_animation__WEBPACK_IMPORTED_MODULE_5__.loading)()
    ;(0,_league_listLeague__WEBPACK_IMPORTED_MODULE_4__["default"])();
    if (hash.length === 0 || hash === "#") {
        (0,_infoMatch_infoMatch__WEBPACK_IMPORTED_MODULE_0__.clearIntervalUpdate)(); // ilay interval any amin' infoMatch
        (0,_infoLeague_infoLeague__WEBPACK_IMPORTED_MODULE_1__.clearIntervalInfoLeague)()
        let d = new Date();
        // ovaina aloha ny date de ao vao maka ny listMatch
        (0,_calendar_calendar__WEBPACK_IMPORTED_MODULE_3__.setDate)(isPopState, d.getMonth() + 1, d.getDate(), 0);
        // let intervalListMatch = setInterval(() => {
        //     listMatch(new Date())
        // }, 10000)
        return;
    }
    // verifier si listgame ou game (asorina le #)
    let item = hash.slice(1, hash.indexOf("/"));
    // asorina ilay efa azo
    hash = hash.slice(hash.indexOf("/") + 1);
    if (item === "listgame") {
        (0,_infoMatch_infoMatch__WEBPACK_IMPORTED_MODULE_0__.clearIntervalUpdate)(); // ilay interval any amin' infoMatch
        (0,_infoLeague_infoLeague__WEBPACK_IMPORTED_MODULE_1__.clearIntervalInfoLeague)()
        let index = hash.indexOf("&");
        if (index > 0) {
            let date = hash.slice(0, index),
                idLeague = hash.slice(index + 1);
            date = new Date(date);
            // si date n'est pas valide et l'id n'est pas un nombre
            if (date.toString() === "Invalid Date" && isNaN(idLeague))
                return (0,_404__WEBPACK_IMPORTED_MODULE_6__["default"])(); // 404
            // ovaina aloha ny date de ao vao maka ny listMatch
            (0,_calendar_calendar__WEBPACK_IMPORTED_MODULE_3__.setDate)(isPopState, date.getMonth() + 1, date.getDate(), idLeague);
        } else {
            // hash correspond au date, le izy notapahana mantsy
            hash = new Date(hash);
            if (hash.toString() === "Invalid Date") return (0,_404__WEBPACK_IMPORTED_MODULE_6__["default"])(); // 404
            (0,_calendar_calendar__WEBPACK_IMPORTED_MODULE_3__.setDate)(isPopState, hash.getMonth() + 1, hash.getDate());
        }
    } else if (item === "game") {
        let indexSlash = hash.indexOf("/"),
            type = hash.slice(0, indexSlash); // mety ho pregame,standing,stats
        hash = hash.slice(indexSlash + 1); // asorina izay efa azo
        indexSlash = hash.indexOf("/"); // slash manaraka
        let id = hash.slice(0); // idMatch
        // raha tsy nombre le id
        if (isNaN(id)) return (0,_404__WEBPACK_IMPORTED_MODULE_6__["default"])(); // 404
        if (type === "pregame") (0,_infoMatch_infoMatch__WEBPACK_IMPORTED_MODULE_0__["default"])(isPopState, id);
        else if (type === "standing") (0,_infoMatch_infoMatch__WEBPACK_IMPORTED_MODULE_0__["default"])(isPopState, id, "standing");
        else if (type === "stats") (0,_infoMatch_infoMatch__WEBPACK_IMPORTED_MODULE_0__["default"])(isPopState, id, "stats");
        else return (0,_404__WEBPACK_IMPORTED_MODULE_6__["default"])(); // 404
    } else if (item === "league") {
        if(hash.includes('l')) { // raha misy "l"
            let id = hash.slice(1); // asorina le "l"
            if(isNaN(id)) return (0,_404__WEBPACK_IMPORTED_MODULE_6__["default"])(); // 404
            (0,_infoLeague_infoLeague__WEBPACK_IMPORTED_MODULE_1__["default"])(true, hash)
        } else return (0,_404__WEBPACK_IMPORTED_MODULE_6__["default"])(); // 404
    } else if(item === "team") {
        hash = hash.split('&') // sarahana le idTeam sy idLeague
        if (hash.length !== 2)
            return (0,_404__WEBPACK_IMPORTED_MODULE_6__["default"])("team not found"); // 404
        // sao de tsy nombre le id
        hash.forEach(element => {
            if(isNaN(element))
                return (0,_404__WEBPACK_IMPORTED_MODULE_6__["default"])("team not found"); // 404
        });
        (0,_infoTeam_infoTeam__WEBPACK_IMPORTED_MODULE_2__["default"])(isPopState, ...hash)
    } else return (0,_404__WEBPACK_IMPORTED_MODULE_6__["default"])(); // 404
});


/***/ }),

/***/ "./src/js/infoLeague/displayLeague.js":
/*!********************************************!*\
  !*** ./src/js/infoLeague/displayLeague.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";
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
    intervalUpdate = setInterval(async () => {
        if (currentDisplay === "calendar") {
            // affiche-na aloha sao taraiky le resultat teo aloha
            currentDisplay = (0,_func_displayMatchByDate__WEBPACK_IMPORTED_MODULE_4__["default"])(calendar, "calendar");
            // maka vaovao
            calendar = await (0,_func_getMatch__WEBPACK_IMPORTED_MODULE_2__["default"])(new Date(), (0,_func_date__WEBPACK_IMPORTED_MODULE_6__.plus15)(), idLeague);
            calendar = (0,_func_filterByDate__WEBPACK_IMPORTED_MODULE_9__["default"])(calendar, "ASC");
            // sao novainy tampoka nefa taraiky vao azo
            if (currentDisplay === "calendar")
                currentDisplay = (0,_func_displayMatchByDate__WEBPACK_IMPORTED_MODULE_4__["default"])(calendar, "calendar");
        } else if (currentDisplay === "result") {
            // affiche-na aloha sao taraiky le resultat teo aloha
            currentDisplay = (0,_func_displayMatchByDate__WEBPACK_IMPORTED_MODULE_4__["default"])(result, "result");
            // maka vaovao
            result = await (0,_func_getMatch__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_func_date__WEBPACK_IMPORTED_MODULE_6__.minus15)(), new Date(), idLeague);
            result = (0,_func_filterByDate__WEBPACK_IMPORTED_MODULE_9__["default"])(result);
            result.shift(); // shift satria lasa voaray ao le date androany;
            // sao novainy tampoka nefa taraiky vao azo
            if (currentDisplay === "result")
                currentDisplay = (0,_func_displayMatchByDate__WEBPACK_IMPORTED_MODULE_4__["default"])(result, "result");
        }
    }, 60000); // tous les une minute
});

function clearIntervalInfoLeague() {
    clearInterval(intervalUpdate)
}

/***/ }),

/***/ "./src/js/infoMatch/displayGame.js":
/*!*****************************************!*\
  !*** ./src/js/infoMatch/displayGame.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _infoLeague_infoLeague__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../infoLeague/infoLeague */ "./src/js/infoLeague/infoLeague.js");
/* harmony import */ var _infoTeam_infoTeam__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../infoTeam/infoTeam */ "./src/js/infoTeam/infoTeam.js");



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
        (0,_infoLeague_infoLeague__WEBPACK_IMPORTED_MODULE_0__["default"])(false, league.id)
    })

    document.querySelector('.info-match .home').addEventListener('click', () => {
        ;(0,_infoTeam_infoTeam__WEBPACK_IMPORTED_MODULE_1__["default"])(false, game.league_id, homeId)
    })

    document.querySelector('.info-match .away').addEventListener('click', () => {
        ;(0,_infoTeam_infoTeam__WEBPACK_IMPORTED_MODULE_1__["default"])(false, game.league_id, awayId)
    })
});

/***/ }),

/***/ "./src/js/infoMatch/displayMoment.js":
/*!*******************************************!*\
  !*** ./src/js/infoMatch/displayMoment.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _history_addHistory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../history/addHistory */ "./src/js/history/addHistory.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((isPopState=false, game) => {
    // add history
    if(!isPopState) // rehefa popstate de tsy mila mi-ajouter
        (0,_history_addHistory__WEBPACK_IMPORTED_MODULE_0__["default"])(`game/pregame/${game.match_id}`);
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _history_addHistory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../history/addHistory */ "./src/js/history/addHistory.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((isPopState=false, game) => {
    // add history
    if(!isPopState) // rehefa popstate de tsy mila mi-ajouter
        (0,_history_addHistory__WEBPACK_IMPORTED_MODULE_0__["default"])(`game/stats/${game.match_id}`);
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

"use strict";
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearIntervalUpdate": () => (/* binding */ clearIntervalUpdate),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
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
/* harmony import */ var _infoLeague_infoLeague__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../infoLeague/infoLeague */ "./src/js/infoLeague/infoLeague.js");
 










let interval = undefined,
    currentDisplay = undefined;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (isPopState=false, idMatch, toDisplay) => {
    (0,_others_animation__WEBPACK_IMPORTED_MODULE_3__.loading)()
    ;(0,_infoLeague_infoLeague__WEBPACK_IMPORTED_MODULE_9__.clearIntervalInfoLeague)()
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
    // mettre a jour le resultat chaque 60 seconde 
    // interval = setInterval(async () => {
    //     // console.log('maj info');
    //     game = await getInfoMatch(idMatch)
    //     // true : tsy mila enregistre-na anaty historique
    //     if(currentDisplay === "standing") 
    //         currentDisplay = displayStanding(standing, game.match_hometeam_id, game.match_awayteam_id)
    //     else if(toDisplay === "stats")
    //         currentDisplay = displayStats(true, game)
    //     else 
    //         currentDisplay = displayPreGame(true, game)
    // },60000)
});

function clearIntervalUpdate() {
    clearInterval(interval)
}

/***/ }),

/***/ "./src/js/infoTeam/displayInfoTeam.js":
/*!********************************************!*\
  !*** ./src/js/infoTeam/displayInfoTeam.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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
/* harmony import */ var _infoLeague_infoLeague__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../infoLeague/infoLeague */ "./src/js/infoLeague/infoLeague.js");















/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (isPopState = false, idLeague, idTeam) => {
    let calendar = [],
        result = [],
        standing = [],
        players = [],
        coach = []
    ;(0,_others_animation__WEBPACK_IMPORTED_MODULE_12__.loading)()
    ;(0,_infoLeague_infoLeague__WEBPACK_IMPORTED_MODULE_13__.clearIntervalInfoLeague)()
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


/***/ }),

/***/ "./src/js/league/getLeagueMatch.js":
/*!*****************************************!*\
  !*** ./src/js/league/getLeagueMatch.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getLeagueMatch": () => (/* binding */ getLeagueMatch)
/* harmony export */ });
/* harmony import */ var _calendar_calendar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../calendar/calendar */ "./src/js/calendar/calendar.js");
/* harmony import */ var _listMatch_listMatch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../listMatch/listMatch */ "./src/js/listMatch/listMatch.js");



let currentLeagueHTML = undefined;
function getLeagueMatch (idLeague, item) {
    let d = new Date(),
        month = d.getMonth()+1,
        dateToday = d.getDate();
    // to active
    if(currentLeagueHTML) currentLeagueHTML.classList.remove('active')
    item.classList.add('active')
    document.querySelector('.league-container').style.left = '-100%' // rehefa le responsive
    ;(0,_calendar_calendar__WEBPACK_IMPORTED_MODULE_0__.setDate)(false, month, dateToday, idLeague, _listMatch_listMatch__WEBPACK_IMPORTED_MODULE_1__.listMatchToday)
    currentLeagueHTML = item
    window.scroll(0,0)
}

/***/ }),

/***/ "./src/js/league/listLeague.js":
/*!*************************************!*\
  !*** ./src/js/league/listLeague.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ }),

/***/ "./src/js/listMatch/displayListMatch.js":
/*!**********************************************!*\
  !*** ./src/js/listMatch/displayListMatch.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _infoMatch_infoMatch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../infoMatch/infoMatch */ "./src/js/infoMatch/infoMatch.js");
/* harmony import */ var _infoLeague_infoLeague__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../infoLeague/infoLeague */ "./src/js/infoLeague/infoLeague.js");
/* harmony import */ var _listMatch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./listMatch */ "./src/js/listMatch/listMatch.js");




/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(listGame) {
    let currentElement = document.querySelector('.current-element');
    
    let countryGameHTML = ``;
    if(listGame.length === 0) {
        countryGameHTML = `<p style="padding-left:15px">No match</p>`
    }
    for(let country of listGame) {
        countryGameHTML += 
        `<div class="matchs">
            <h3 id="l${country.id}">
                <img src="${country.logoCountry}" alt="icon-country" id="l${country.id}" onerror="this.src = 'assets/img/logo2.png'">
                <div class="d-inline" id="l${country.id}">
                    <span class="country" id="l${country.id}">${country.countryName}</span>
                    <span class="league" id="l${country.id}">${country.leagueName}</span>
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
                        <span id="${game.match_id}">${game.match_hometeam_name}</span>
                        <img src="${game.team_home_badge || 'assets/img/logo2.png'}" alt="icon-team" id="${game.match_id}" onerror="this.src = 'assets/img/logo2.png'">
                        <span class="score-home score" id="${game.match_id}">${(game.match_hometeam_score.length > 0) ? game.match_hometeam_score : '  '}</span> 
                    </div>
                    <span class="vs" id="${game.match_id}">vs</span>
                    <div class="away" id="${game.match_id}">
                        <span class="away-home score" id="${game.match_id}">${(game.match_awayteam_score.length > 0) ? game.match_awayteam_score : '  '}</span>
                        <img src="${game.team_away_badge || 'assets/img/logo2.png'}" alt="icon-team" id="${game.match_id}" onerror="this.src = 'assets/img/logo2.png'">
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
    `<div class="match-container listMatch">
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
    listMatchHTML = document.querySelector('.listMatch')
    listMatchHTML.addEventListener('click', (e) => {
        console.log(e.target.id);
        let id = e.target.id
        // raha id ana league
        if(id.includes('l')) { // nasiako "l" ny id ana league
            return (0,_infoLeague_infoLeague__WEBPACK_IMPORTED_MODULE_1__["default"])(false, id)
        }
        if(isNaN(id) || id === '') 
            return; // au cas ou tsy nombre
        (0,_infoMatch_infoMatch__WEBPACK_IMPORTED_MODULE_0__["default"])(false, id)
    })

    /* onclick match today, live, finished */
    document.querySelector('.match-today').addEventListener('click', () => {
        ;(0,_listMatch__WEBPACK_IMPORTED_MODULE_2__.listMatchToday)()
    })

    document.querySelector('.match-live').addEventListener('click', () => {
        ;(0,_listMatch__WEBPACK_IMPORTED_MODULE_2__.listMatchLive)()
    })

    document.querySelector('.match-finished').addEventListener('click', () => {
        ;(0,_listMatch__WEBPACK_IMPORTED_MODULE_2__.listMatchFinished)()
    })

    /* onclick close calendar */
    document.querySelector('#close-calendar').addEventListener('click', () => {
        document.querySelector('.actual').style.top = '-100%'
    })
}

/***/ }),

/***/ "./src/js/listMatch/listMatch.js":
/*!***************************************!*\
  !*** ./src/js/listMatch/listMatch.js ***!
  \***************************************/
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
/* harmony import */ var _func_getMatch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../func/getMatch */ "./src/js/func/getMatch.js");
/* harmony import */ var _func_date__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../func/date */ "./src/js/func/date.js");
/* harmony import */ var _others_popularAndException__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../others/popularAndException */ "./src/js/others/popularAndException.js");
/* harmony import */ var _others_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../others/animation */ "./src/js/others/animation.js");
/* harmony import */ var _displayListMatch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./displayListMatch */ "./src/js/listMatch/displayListMatch.js");
/* harmony import */ var _calendar_calendar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../calendar/calendar */ "./src/js/calendar/calendar.js");
/* harmony import */ var _history_addHistory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../history/addHistory */ "./src/js/history/addHistory.js");
/* harmony import */ var _infoLeague_infoLeague__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../infoLeague/infoLeague */ "./src/js/infoLeague/infoLeague.js");
/* harmony import */ var _infoMatch_infoMatch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../infoMatch/infoMatch */ "./src/js/infoMatch/infoMatch.js");










let gamePerLeague = [],
    activeInNavBar = document.querySelector('.navbar-match .nav-list li.active'),
    currentItem = listMatchToday; // ilaina amle update-na score

async function listMatch(isPopState=false, date, idLeague, toDisplay) {
    gamePerLeague = [];
    date = (0,_func_date__WEBPACK_IMPORTED_MODULE_1__.toYYYYMMDD)(date)
    ;(0,_infoLeague_infoLeague__WEBPACK_IMPORTED_MODULE_7__.clearIntervalInfoLeague)()
    ;(0,_infoMatch_infoMatch__WEBPACK_IMPORTED_MODULE_8__.clearIntervalUpdate)()
    // add history (rehefa popstate de tsy mila mi-ajouter)
    if(!isPopState)
        (0,_history_addHistory__WEBPACK_IMPORTED_MODULE_6__["default"])(`listgame/${date}${idLeague ? ('&'+idLeague) : ''}`)
    // getMatch
    let list = await (0,_func_getMatch__WEBPACK_IMPORTED_MODULE_0__["default"])(date, date, idLeague),
        leagueId = [],
        countryId = [];
    // au cas ou idLeague est donne
    if(idLeague > 0) {
        // active league (raha sendra ery amin url no novaina ny id no tena mahatonga azy ovaina eto)
        let activeLeague = document.querySelector('.list-league li.active');
        if(activeLeague) activeLeague.classList.remove('active')
        document.querySelector('.kk'+idLeague).classList.add('active') // nasiako "kk" de mora azo
    }
    // console.log('list match');
    // console.log(list);
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
    
    let popularLeague = (0,_others_popularAndException__WEBPACK_IMPORTED_MODULE_2__.getPopularLeague)(leagueId);
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
    // console.log('gamePerLeague');
    // console.log(gamePerLeague);
    // affiche-na ny match androany na ireo live na ireo match vita
    if(toDisplay) { // raha misy no specifie-na
        currentItem = toDisplay
    } 
    currentItem()
    ;(0,_others_animation__WEBPACK_IMPORTED_MODULE_3__.stopLoading)()
}

function listMatchToday() {
    currentItem = listMatchToday;
    (0,_others_animation__WEBPACK_IMPORTED_MODULE_3__.loading)()
    ;(0,_displayListMatch__WEBPACK_IMPORTED_MODULE_4__["default"])(gamePerLeague)
    activeInNavBar = document.querySelector('.match-container .nav-list li.active')
    activeInNavBar.classList.remove('active')
    activeInNavBar = document.querySelector('.match-today');
    activeInNavBar.classList.add('active')
    // re-creer le calendrier (eviter queqlue erreur)
    let {currentYear, currentMonth, currentDate} = (0,_calendar_calendar__WEBPACK_IMPORTED_MODULE_5__.getCurrentDate)()
    ;(0,_calendar_calendar__WEBPACK_IMPORTED_MODULE_5__.deleteCurrentMonth)()
    ;(0,_calendar_calendar__WEBPACK_IMPORTED_MODULE_5__.createCalendar)(currentMonth, currentYear, currentDate);
    (0,_others_animation__WEBPACK_IMPORTED_MODULE_3__.stopLoading)()
}

async function listMatchLive() {
    currentItem = listMatchLive;
    (0,_others_animation__WEBPACK_IMPORTED_MODULE_3__.loading)()
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
    // console.log('game live');
    // console.log(gameLive);
    ;(0,_displayListMatch__WEBPACK_IMPORTED_MODULE_4__["default"])(gameLive)
    activeInNavBar = document.querySelector('.match-container .nav-list li.active')
    activeInNavBar.classList.remove('active')
    activeInNavBar = document.querySelector('.match-live');
    activeInNavBar.classList.add('active')
    // re-creer le calendrier (eviter queqlue erreur)
    let {currentYear, currentMonth, currentDate} = (0,_calendar_calendar__WEBPACK_IMPORTED_MODULE_5__.getCurrentDate)()
    ;(0,_calendar_calendar__WEBPACK_IMPORTED_MODULE_5__.deleteCurrentMonth)()
    ;(0,_calendar_calendar__WEBPACK_IMPORTED_MODULE_5__.createCalendar)(currentMonth, currentYear, currentDate);
    (0,_others_animation__WEBPACK_IMPORTED_MODULE_3__.stopLoading)()
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
    // console.log('gameFinished');
    // console.log(gameFinished);
    ;(0,_displayListMatch__WEBPACK_IMPORTED_MODULE_4__["default"])(gameFinished)
    activeInNavBar = document.querySelector('.match-container .nav-list li.active')
    activeInNavBar.classList.remove('active')
    activeInNavBar = document.querySelector('.match-finished');
    activeInNavBar.classList.add('active')
    // re-creer le calendrier (eviter queqlue erreur)
    let {currentYear, currentMonth, currentDate} = (0,_calendar_calendar__WEBPACK_IMPORTED_MODULE_5__.getCurrentDate)()
    ;(0,_calendar_calendar__WEBPACK_IMPORTED_MODULE_5__.deleteCurrentMonth)()
    ;(0,_calendar_calendar__WEBPACK_IMPORTED_MODULE_5__.createCalendar)(currentMonth, currentYear, currentDate);
    (0,_others_animation__WEBPACK_IMPORTED_MODULE_3__.stopLoading)()
}

async function updateScore() {
    currentItem()
}

/***/ }),

/***/ "./src/js/others/animation.js":
/*!************************************!*\
  !*** ./src/js/others/animation.js ***!
  \************************************/
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

/***/ "./src/js/others/contryAndLeague.js":
/*!******************************************!*\
  !*** ./src/js/others/contryAndLeague.js ***!
  \******************************************/
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

/***/ "./src/js/others/popularAndException.js":
/*!**********************************************!*\
  !*** ./src/js/others/popularAndException.js ***!
  \**********************************************/
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

/***/ "./src/js/others/someEventlistener.js":
/*!********************************************!*\
  !*** ./src/js/others/someEventlistener.js ***!
  \********************************************/
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

    let searchContainer = document.querySelector('.search-container'),
        inputSearch = document.querySelector('#search');

    /* icon calendar */
    iconCalendar.addEventListener('click', () => {
        document.querySelector('.actual').style.top = '0'
    })

    closeCalendar.addEventListener('click', () => {
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

    /* search */
    document.querySelector('.search-container').addEventListener('click', () => {
        searchContainer.style.overflow = 'visible'
        inputSearch.style.top = '26px'
    })

    window.onclick = (e) => {
        // console.log(e);
        // hideInputSearch
        if(!e.target.matches('#icon-search') && !e.target.matches('#search') && !e.target.matches('.search-container')) {
            inputSearch.style.top = '-29px'
            setTimeout(() => {searchContainer.style.overflow = 'hidden'},200)
        }
    }
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
/* harmony import */ var _others_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./others/animation */ "./src/js/others/animation.js");
/* harmony import */ var expose_loader_exposes_calendar_calendar_calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! expose-loader?exposes=calendar!./calendar/calendar */ "./node_modules/.pnpm/expose-loader@4.0.0_webpack@5.74.0/node_modules/expose-loader/dist/cjs.js?exposes=calendar!./src/js/calendar/calendar.js");
/* harmony import */ var expose_loader_exposes_calendar_calendar_calendar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(expose_loader_exposes_calendar_calendar_calendar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var expose_loader_exposes_league_league_getLeagueMatch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! expose-loader?exposes=league!./league/getLeagueMatch */ "./node_modules/.pnpm/expose-loader@4.0.0_webpack@5.74.0/node_modules/expose-loader/dist/cjs.js?exposes=league!./src/js/league/getLeagueMatch.js");
/* harmony import */ var expose_loader_exposes_league_league_getLeagueMatch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(expose_loader_exposes_league_league_getLeagueMatch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _history_checkHistory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./history/checkHistory */ "./src/js/history/checkHistory.js");
/* harmony import */ var _history_addHistory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./history/addHistory */ "./src/js/history/addHistory.js");
/* harmony import */ var _others_someEventlistener__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./others/someEventlistener */ "./src/js/others/someEventlistener.js");
/* harmony import */ var _css_color_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../css/color.css */ "./src/css/color.css");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../css/style.css */ "./src/css/style.css");
/* harmony import */ var _css_listMatch_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../css/listMatch.css */ "./src/css/listMatch.css");
/* harmony import */ var _css_infoMatch_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../css/infoMatch.css */ "./src/css/infoMatch.css");
/* harmony import */ var _css_infoLeague_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../css/infoLeague.css */ "./src/css/infoLeague.css");
/* harmony import */ var _css_infoTeam_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../css/infoTeam.css */ "./src/css/infoTeam.css");
/* harmony import */ var _css_animation_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../css/animation.css */ "./src/css/animation.css");














(0,_others_animation__WEBPACK_IMPORTED_MODULE_0__.loading)()
;(0,_others_animation__WEBPACK_IMPORTED_MODULE_0__.stopLoading)()
;(0,_others_someEventlistener__WEBPACK_IMPORTED_MODULE_5__["default"])() // onclick sy ny namany
;(0,_history_checkHistory__WEBPACK_IMPORTED_MODULE_3__["default"])(false) // false satria pushstate 

window.onpopstate = (e) => {
    // console.log('onpopstate');
    // console.log(e);
    ;(0,_history_checkHistory__WEBPACK_IMPORTED_MODULE_3__["default"])(true)
}

/* logo onclick */
document.querySelector('.nav-bar .logo').addEventListener('click', () => {
    ;(0,_history_addHistory__WEBPACK_IMPORTED_MODULE_4__["default"])('')
    ;(0,_history_checkHistory__WEBPACK_IMPORTED_MODULE_3__["default"])(false)
})

// stopLoading()
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map