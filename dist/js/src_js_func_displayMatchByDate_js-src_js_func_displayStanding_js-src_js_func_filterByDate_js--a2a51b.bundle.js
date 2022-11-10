(self["webpackChunkFootball_score"] = self["webpackChunkFootball_score"] || []).push([["src_js_func_displayMatchByDate_js-src_js_func_displayStanding_js-src_js_func_filterByDate_js--a2a51b"],{

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((standing, ...idTeams) => {
    // console.log(idTeams);
    let standingHTML =
    `<table class="standing-container">
        <tr class="head-table">
            <td class="team">Team</td>
            <td>P <span class="caption-td">played<span></td>
            <td>GF <span class="caption-td">goal for<span></td>
            <td>GA <span class="caption-td">goal against<span></td>
            <td>GD <span class="caption-td gd">goal difference<span></td>
            <td>Pts <span class="caption-td">points<span></td>
        </tr>`;
        for(let element of standing) {
            standingHTML += 
            `<tr class="item-container ${idTeams.includes(element.team_id) ? 'current-team' : ''}" id="${element.league_id}t${element.team_id}">
                <td class="team" id="${element.league_id}t${element.team_id}">
                    <span class="number" id="${element.league_id}t${element.team_id}">${element.overall_league_position}</span> 
                    <img src="${element.team_badge || 'assets/img/logo2.png'}" alt="icon-team" id="${element.league_id}t${element.team_id}" onerror="this.src = '../../assets/img/logo2.png'">
                    <span class="name" id="${element.league_id}t${element.team_id}">${element.team_name}</span>
                </td>
                <td id="${element.league_id}t${element.team_id}">
                    ${element.overall_league_payed} 
                    <span class="caption-td">played<span>
                </td>
                <td id="${element.league_id}t${element.team_id}">
                    ${element.overall_league_GF}
                    <span class="caption-td">goal for<span>
                </td>
                <td id="${element.league_id}t${element.team_id}">
                    ${element.overall_league_GA}
                    <span class="caption-td">goal against<span>
                </td>
                <td id="${element.league_id}t${element.team_id}">
                    ${element.overall_league_GF - element.overall_league_GA}
                    <span class="caption-td gd">goal difference<span>
                </td>
                <td id="${element.league_id}t${element.team_id}">
                    ${element.overall_league_PTS}
                    <span class="caption-td">points<span>
                </td>
            </tr>`
        }
    standingHTML += `</table>`
    document.querySelector('.current-item').innerHTML = standingHTML
    // active
    document.querySelector('.nav-info li.active').classList.remove('active');
    document.querySelector('#standing').classList.add('active');

    document.querySelector('.standing-container').addEventListener('click', async (e) => {
        let className = e.target.attributes.class;
        if(className && className.nodeValue.includes("current-team")) return


        let id = e.target.id.split('t');
        if(id.length !== 2) return
        let infoTeam = await __webpack_require__.e(/*! import() */ "src_js_infoTeam_infoTeam_js").then(__webpack_require__.bind(__webpack_require__, /*! ../infoTeam/infoTeam */ "./src/js/infoTeam/infoTeam.js"))
        infoTeam.default(false, ...id)
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

/***/ "./src/js/infoMatch/infoMatch.js":
/*!***************************************!*\
  !*** ./src/js/infoMatch/infoMatch.js ***!
  \***************************************/
/***/ (() => {

throw new Error("Module parse failed: Invalid number (86:7)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n|         }, 55000) // tous les une minutes  (alatsako kely amle mbola alaina)\n|         console.log(\"interval\");\n>     }, 00)\n| }\n| ");

/***/ })

}]);
//# sourceMappingURL=src_js_func_displayMatchByDate_js-src_js_func_displayStanding_js-src_js_func_filterByDate_js--a2a51b.bundle.js.map