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
/* harmony import */ var _others_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../others/animation */ "./src/js/others/animation.js");


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
                dayContainer += `<td><span class="day-item currentDate">${countDay}</span></td>`;
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
            dayContainer += `<td><span class="day-item currentDate">${countDay}</span></td>`;
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
            dayContainer += `<td><span class="day-item currentDate">${countDay}</span></td>`;
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
                dayContainer += `<td><span class="day-item currentDate">${countDay}</span></td>`;
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
                dayContainer += `<td><span class="day-item currentDate">${countDay}</span></td>`;
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
                dayContainer += `<td><span class="day-item currentDate">${countDay}</span></td>`;
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
    document.querySelector('#close-calendar').addEventListener('click', () => {
        document.querySelector('.actual').style.top = '-100%'
    })
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
async function setDate(isPopState=false, m, d, idLeague, toDisplay) {
    // hideCalendar (valable ito rehefa le ecran <= 768)
    let actualContainer = document.querySelector('.actual')
    if(actualContainer) actualContainer.style.top = '-100%' // raha misy
    ;(0,_others_animation__WEBPACK_IMPORTED_MODULE_0__.loading)()

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
    
    let listMatch = await __webpack_require__.e(/*! import() */ "src_js_listMatch_displayListMatch_js-src_js_listMatch_listMatch_js").then(__webpack_require__.bind(__webpack_require__, /*! ../listMatch/listMatch */ "./src/js/listMatch/listMatch.js"));
    listMatch.listMatch(isPopState, (`${currentYear}-${currentMonth}-${currentDate}`), currentIdLeague, toDisplay)
}
/* end calendar */

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
    // console.log(hash);
    return new Promise(async (resolve, reject) => {
        let url = location.protocol + '//' + location.host + '#' + hash
        window.history.pushState(null,'', url)
        // effacer le setInterval'interval
        let {clearIntervalInfoMatch} = await __webpack_require__.e(/*! import() */ "src_js_infoMatch_infoMatch_js").then(__webpack_require__.bind(__webpack_require__, /*! ../infoMatch/infoMatch */ "./src/js/infoMatch/infoMatch.js"))
        let {clearIntervalInfoLeague} = await Promise.all(/*! import() */[__webpack_require__.e("src_js_infoMatch_infoMatch_js"), __webpack_require__.e("src_js_infoLeague_infoLeague_js"), __webpack_require__.e("src_js_func_getMatch_js-src_js_others_popularAndException_js-_9c97-_855b0")]).then(__webpack_require__.bind(__webpack_require__, /*! ../infoLeague/infoLeague */ "./src/js/infoLeague/infoLeague.js"))
        let {clearIntervalListMatch} = await __webpack_require__.e(/*! import() */ "src_js_listMatch_displayListMatch_js-src_js_listMatch_listMatch_js").then(__webpack_require__.bind(__webpack_require__, /*! ../listMatch/listMatch */ "./src/js/listMatch/listMatch.js"))
        let {clearIntervalInfoTeam} = await Promise.all(/*! import() */[__webpack_require__.e("src_js_infoMatch_infoMatch_js"), __webpack_require__.e("src_js_infoTeam_infoTeam_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ../infoTeam/infoTeam */ "./src/js/infoTeam/infoTeam.js"))
        clearIntervalInfoLeague()
        clearIntervalInfoMatch()
        clearIntervalListMatch()
        clearIntervalInfoTeam()
        resolve('cleared')
    })
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
/* harmony import */ var _404__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../404 */ "./src/js/404.js");
/* harmony import */ var _others_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../others/animation */ "./src/js/others/animation.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((isPopState) => {
    let hash = window.location.hash;
    // console.log(hash);
    (0,_others_animation__WEBPACK_IMPORTED_MODULE_1__.loading)()
    importInit();
    
    if (hash.length === 0 || hash === "#") {
        let d = new Date();
        // ovaina aloha ny date de ao vao maka ny listMatch
        importCalendar(isPopState, d.getMonth() + 1, d.getDate(), 0);
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

        let index = hash.indexOf("&");
        if (index > 0) {
            let date = hash.slice(0, index),
                idLeague = hash.slice(index + 1);
            date = new Date(date);
            // si date n'est pas valide et l'id n'est pas un nombre
            if (date.toString() === "Invalid Date" && isNaN(idLeague))
                return (0,_404__WEBPACK_IMPORTED_MODULE_0__["default"])(); // 404
            // ovaina aloha ny date de ao vao maka ny listMatch
            importCalendar(isPopState, date.getMonth() + 1, date.getDate(), idLeague);
        } else {
            // hash correspond au date, le izy notapahana mantsy
            hash = new Date(hash);
            if (hash.toString() === "Invalid Date") return (0,_404__WEBPACK_IMPORTED_MODULE_0__["default"])(); // 404
            importCalendar(isPopState, hash.getMonth() + 1, hash.getDate());
        }

    } else if (item === "game") {

        let indexSlash = hash.indexOf("/"),
            type = hash.slice(0, indexSlash); // mety ho pregame,standing,stats
        hash = hash.slice(indexSlash + 1); // asorina izay efa azo
        indexSlash = hash.indexOf("/"); // slash manaraka
        let id = hash.slice(0); // idMatch
        // raha tsy nombre le id
        if (isNaN(id)) return (0,_404__WEBPACK_IMPORTED_MODULE_0__["default"])(); // 404
        if (type === "pregame") importInfoMatch(isPopState, id);
        else if (type === "standing") importInfoMatch(isPopState, id, "standing");
        else if (type === "stats") importInfoMatch(isPopState, id, "stats");
        else return (0,_404__WEBPACK_IMPORTED_MODULE_0__["default"])(); // 404

    } else if (item === "league") {

        if(hash.includes('l')) { // raha misy "l"
            let id = hash.slice(1); // asorina le "l"
            if(isNaN(id)) return (0,_404__WEBPACK_IMPORTED_MODULE_0__["default"])(); // 404
            importInfoLeague(true, hash)
        } else return (0,_404__WEBPACK_IMPORTED_MODULE_0__["default"])(); // 404

    } else if(item === "team") {

        hash = hash.split('&') // sarahana le idTeam sy idLeague
        if (hash.length !== 2)
            return (0,_404__WEBPACK_IMPORTED_MODULE_0__["default"])("team not found"); // 404
        // sao de tsy nombre le id
        let isCorrect = true;
        hash.forEach(element => {
            if(isNaN(element))
                return isCorrect = false
        });
        
        if(isCorrect)importInfoTeam(isPopState, ...hash)
        else (0,_404__WEBPACK_IMPORTED_MODULE_0__["default"])("team not found"); // 404

    } else return (0,_404__WEBPACK_IMPORTED_MODULE_0__["default"])(); // 404
});

function importInit() {
    return new Promise(async (resolve, reject) => {
        __webpack_require__.e(/*! import() */ "src_js_league_listLeague_js").then(__webpack_require__.bind(__webpack_require__, /*! ../league/listLeague */ "./src/js/league/listLeague.js")).then(module => module.default())
        // effacer le setInterval'interval
        let {clearIntervalInfoMatch} = await __webpack_require__.e(/*! import() */ "src_js_infoMatch_infoMatch_js").then(__webpack_require__.bind(__webpack_require__, /*! ../infoMatch/infoMatch */ "./src/js/infoMatch/infoMatch.js"))
        let {clearIntervalInfoLeague} = await Promise.all(/*! import() */[__webpack_require__.e("src_js_infoMatch_infoMatch_js"), __webpack_require__.e("src_js_infoLeague_infoLeague_js"), __webpack_require__.e("src_js_func_getMatch_js-src_js_others_popularAndException_js-_9c97-_855b0")]).then(__webpack_require__.bind(__webpack_require__, /*! ../infoLeague/infoLeague */ "./src/js/infoLeague/infoLeague.js"))
        let {clearIntervalListMatch} = await __webpack_require__.e(/*! import() */ "src_js_listMatch_displayListMatch_js-src_js_listMatch_listMatch_js").then(__webpack_require__.bind(__webpack_require__, /*! ../listMatch/listMatch */ "./src/js/listMatch/listMatch.js"))
        let {clearIntervalInfoTeam} = await Promise.all(/*! import() */[__webpack_require__.e("src_js_infoMatch_infoMatch_js"), __webpack_require__.e("src_js_infoTeam_infoTeam_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ../infoTeam/infoTeam */ "./src/js/infoTeam/infoTeam.js"))
        clearIntervalInfoLeague()
        clearIntervalInfoMatch()
        clearIntervalListMatch()
        clearIntervalInfoTeam()
        resolve('init')
    })
}

async function importInfoLeague(isPopState, idLeague) {
    let infoLeague = await Promise.all(/*! import() */[__webpack_require__.e("src_js_infoMatch_infoMatch_js"), __webpack_require__.e("src_js_infoLeague_infoLeague_js"), __webpack_require__.e("src_js_func_getMatch_js-src_js_others_popularAndException_js-_9c97-_855b0")]).then(__webpack_require__.bind(__webpack_require__, /*! ../infoLeague/infoLeague */ "./src/js/infoLeague/infoLeague.js"));
    infoLeague.default(isPopState, idLeague)
}

async function importInfoTeam(isPopState, idLeague, idTeam) {
    let infoTeam = await Promise.all(/*! import() */[__webpack_require__.e("src_js_infoMatch_infoMatch_js"), __webpack_require__.e("src_js_infoTeam_infoTeam_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ../infoTeam/infoTeam */ "./src/js/infoTeam/infoTeam.js"));
    infoTeam.default(isPopState, idLeague, idTeam)
}

async function importInfoMatch(isPopState, idMatch, toDisplay) {
    let infoMatch = await __webpack_require__.e(/*! import() */ "src_js_infoMatch_infoMatch_js").then(__webpack_require__.bind(__webpack_require__, /*! ../infoMatch/infoMatch */ "./src/js/infoMatch/infoMatch.js"));
    infoMatch.default(isPopState, idMatch, toDisplay)
}


async function importCalendar(isPopState, m, d, idLeague) {
    let calendar = await Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../calendar/calendar */ "./src/js/calendar/calendar.js"));
    calendar.setDate(isPopState, m, d, idLeague)
}

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
let currentLeagueHTML = undefined;
async function getLeagueMatch (idLeague, item) {
    let d = new Date(),
        month = d.getMonth()+1,
        dateToday = d.getDate();
    // to active
    if(currentLeagueHTML) currentLeagueHTML.classList.remove('active')
    item.classList.add('active')
    document.querySelector('.league-container').style.left = '-100%' // rehefa le responsive
    let {listMatchToday} = await __webpack_require__.e(/*! import() */ "src_js_listMatch_displayListMatch_js-src_js_listMatch_listMatch_js").then(__webpack_require__.bind(__webpack_require__, /*! ../listMatch/listMatch */ "./src/js/listMatch/listMatch.js"))
    let {setDate} = await Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../calendar/calendar */ "./src/js/calendar/calendar.js"))
    setDate(false, month, dateToday, idLeague, listMatchToday)
    currentLeagueHTML = item
    window.scroll(0,0)
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
        closeListLeague = document.querySelector('#close-league');

    let leagueContainer = document.querySelector('.league-container'),
        matchContainer = document.querySelector('.match-container');

    let searchContainer = document.querySelector('.search-container'),
        inputSearch = document.querySelector('#search');

    /* icon calendar */
    iconCalendar.addEventListener('click', () => {
        document.querySelector('.actual').style.top = '0'
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "js/" + chunkId + ".bundle.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
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
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "Football score:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkFootball_score"] = self["webpackChunkFootball_score"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
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
// stopLoading()
;(0,_others_someEventlistener__WEBPACK_IMPORTED_MODULE_5__["default"])() // onclick sy ny namany
;(0,_history_checkHistory__WEBPACK_IMPORTED_MODULE_3__["default"])(false) // false satria pushstate 

window.onpopstate = (e) => {
    ;(0,_others_animation__WEBPACK_IMPORTED_MODULE_0__.loading)()
    // console.log('onpopstate');
    // console.log(e);
    ;(0,_history_checkHistory__WEBPACK_IMPORTED_MODULE_3__["default"])(true)
    __webpack_require__.e(/*! import() */ "src_js_infoMatch_infoMatch_js").then(__webpack_require__.bind(__webpack_require__, /*! ./infoMatch/infoMatch */ "./src/js/infoMatch/infoMatch.js")).then(module => module.clearIntervalInfoMatch())
    Promise.all(/*! import() */[__webpack_require__.e("src_js_infoMatch_infoMatch_js"), __webpack_require__.e("src_js_infoLeague_infoLeague_js"), __webpack_require__.e("src_js_func_getMatch_js-src_js_others_popularAndException_js-_9c97-_855b0")]).then(__webpack_require__.bind(__webpack_require__, /*! ./infoLeague/infoLeague */ "./src/js/infoLeague/infoLeague.js")).then(module => module.clearIntervalInfoLeague())
    __webpack_require__.e(/*! import() */ "src_js_listMatch_displayListMatch_js-src_js_listMatch_listMatch_js").then(__webpack_require__.bind(__webpack_require__, /*! ./listMatch/listMatch */ "./src/js/listMatch/listMatch.js")).then(module => module.clearIntervalListMatch())
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
//# sourceMappingURL=main.bundle.js.map