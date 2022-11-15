"use strict";
(self["webpackChunkFootball_score"] = self["webpackChunkFootball_score"] || []).push([["src_js_infoTeam_infoTeam_js"],{

/***/ "./src/js/func/date.js":
/*!*****************************!*\
  !*** ./src/js/func/date.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "endSeason": () => (/* binding */ endSeason),
/* harmony export */   "minus15": () => (/* binding */ minus15),
/* harmony export */   "plus15": () => (/* binding */ plus15),
/* harmony export */   "startSeason": () => (/* binding */ startSeason),
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

/* start season */
function startSeason(date = new Date()) {
    let d = new Date(date);
    if((d.getMonth()+1) >= 8) 
        return d.getFullYear() + '-08-01'
    return (d.getFullYear()-1) + '-08-01' // supposition oe mois d'aout ny debut
}

/* start season */
function endSeason(date = new Date()) {
    let d = new Date(date);
    if((d.getMonth()+1) >= 8) // (mois d'aout ny debut)
        return (d.getFullYear()+1) + '-07-01'
    return (d.getFullYear()) + '-07-01' // supposition oe mois de juillet ny fin
}


/***/ }),

/***/ "./src/js/func/getMatch.js":
/*!*********************************!*\
  !*** ./src/js/func/getMatch.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _others_contryAndLeague__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../others/contryAndLeague */ "./src/js/others/contryAndLeague.js");
/* harmony import */ var _date__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./date */ "./src/js/func/date.js");



let APIkey = "aeb8cfee1fe2069ff47ef42ad13a32ab605910fd7267a6cd39538190d1b705be";
let listLeague = (0,_others_contryAndLeague__WEBPACK_IMPORTED_MODULE_0__.getListLeague)(),
    listCountry = (0,_others_contryAndLeague__WEBPACK_IMPORTED_MODULE_0__.getListCountry)();

// raha tsy mahazo valeur le "to" de atao mitovy amin "from"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (from, to = from, idLeague = 0, idTeam = 0) => {
    return await new Promise((resolve, reject) => {
        let fromDate = (0,_date__WEBPACK_IMPORTED_MODULE_1__.toYYYYMMDD)(from),
            toDate = (0,_date__WEBPACK_IMPORTED_MODULE_1__.toYYYYMMDD)(to);
        // console.log("from-to");
        // console.log(fromDate+'-'+toDate);
        let url = `https://apiv3.apifootball.com/?action=get_events&from=${fromDate}&to=${toDate}&APIkey=${APIkey}&timezone=Africa/Nairobi`;
        
        // au cas ou idLeague est donne
        if(idLeague > 0) url += `&league_id=${idLeague}`
        // au cas ou idLeague est donne
        if(idTeam > 0) url += `&team_id=${idTeam}`
        // console.log(url);
        fetch(url, { method: "get" })
            .then((response) => response.json())
            .then((value) => {
                if(value.error) return resolve([])
                // ireo anaty liste iany no alaina
                let list = value.filter(e => listCountry.includes(e.country_name) && listLeague.includes(e.league_name));
                // trier selon l'heure du match
                list.sort((a,b) => new Date(`${a.match_date} ${a.match_time}`) - new Date(`${b.match_date} ${b.match_time}`))
                // console.log(list);
                resolve(list)
            })
            .catch(err => console.log(err))
    });
});


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
            <td>P <span class="caption-td">played<span></td>
            <td>age</td>
            <td>
                <img src="assets/img/goal.png" alt="goal" onerror="this.src='assets/img/goal.png'"> 
                <span class="caption-td">goal<span>
            </td>
            <td>
                <img src="assets/img/l.png" alt="assists" onerror="this.src='assets/img/l.png'"> 
                <span class="caption-td">assists<span>
            </td>
            <td>
                <img src="assets/img/yellow-card.png" alt="yellow-card" onerror="this.src='assets/img/yellow-card.png'"> 
                <span class="caption-td">yellow card<span>
            </td>
            <td>
                <img src="assets/img/red-card.png" alt="red-card" onerror="this.src='assets/img/red-card.png'"> 
                <span class="caption-td">red card<span>
            </td>
            <td>
                <img src="assets/img/injury.png" alt="injury-card" onerror="this.src='assets/img/injury.png'"> 
                <span class="caption-td">injury<span>
            </td>
        </tr>`;
    for(let element of players) { // satria le izy filtrer par place (milieu, attaquant, ...)
        for(let p of element.players) {
            statsHTML +=
            `<tr class="tr-player">
                <td class="player-table">
                    <span class="number">${p.player_number}</span> 
                    <span>${p.player_name}</span>
                </td>
                <td>${p.player_match_played} <span class="caption-td">played<span></td>
                <td>${p.player_age} <span class="caption-td">age<span></td>
                <td>${p.player_goals} <span class="caption-td">goal<span></td>
                <td>${p.player_assists} <span class="caption-td">assists<span></td>
                <td>${p.player_yellow_cards} <span class="caption-td">yellow card<span></td>
                <td>${p.player_red_cards} <span class="caption-td">red card<span></td>
                <td>${(p.player_injured === "No" ? "" : "yes")} <span class="caption-td">injury<span></td>
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
    <td>P <span class="caption-td">played<span></td>
    <td>age</td>
    <td><img src="assets/img/goal.png" alt="goal" onerror="this.src='assets/img/goal.png'"> <span class="caption-td">goal<span></td>
    <td><img src="assets/img/l.png" alt="assists" onerror="this.src='assets/img/l.png'"> <span class="caption-td">assists<span></td>
    <td><img src="assets/img/yellow-card.png" alt="yellow-card" onerror="this.src='assets/img/yellow-card.png'"> <span class="caption-td">yellow card<span></td>
    <td><img src="assets/img/red-card.png" alt="red-card" onerror="this.src='assets/img/red-card.png'"> <span class="caption-td">red card<span></td>
    <td><img src="assets/img/injury.png" alt="injury-card" onerror="this.src='assets/img/injury.png'"> <span class="caption-td">injury<span></td>`;
    
    for(let element of players) { // satria le izy filtrer par place (milieu, attaquant, ...)
        for(let p of element.players) {
            tr[i].innerHTML = 
            `<td class="player-table">
                <span class="number">${p.player_number}</span> 
                <span>${p.player_name}</span>
            </td>
            <td>${p.player_match_played} <span class="caption-td">played<span></td>
            <td>${p.player_age} <span class="caption-td">age<span></td>
            <td>${p.player_goals} <span class="caption-td">goal<span></td>
            <td>${p.player_assists} <span class="caption-td">assists<span></td>
            <td>${p.player_yellow_cards} <span class="caption-td">yellow card<span></td>
            <td>${p.player_red_cards} <span class="caption-td">red card<span></td>
                <td>${(p.player_injured === "No" ? "" : "yes")} <span class="caption-td">injury<span></td>`;
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
    <td>P <span class="caption-td">played<span></td>
    <td>age</td>
    <td><img src="assets/img/goal.png" alt="goal" onerror="this.src='assets/img/goal.png'"> <span class="caption-td">goal<span></td>
    <td><img src="assets/img/l.png" alt="assists" onerror="this.src='assets/img/l.png'"> <span class="caption-td">assists<span></td>
    <td>DA <spa class="caption-td">dribble attempts<span></td>
    <td>DS <span class="caption-td">dribble succeed<span></td>
    <td>shots</td>`    
    for(let element of players) { // satria le izy filtrer par place (milieu, attaquant, ...)
        for(let p of element.players) {
            tr[i].innerHTML = 
            `<td class="player-table">
                <span class="number">${p.player_number}</span> 
                <span>${p.player_name}</span>
            </td>
            <td>${p.player_match_played} <span class="caption-td">played<span></td>
            <td>${p.player_age} <span class="caption-td">age<span></td>
            <td>${p.player_goals} <span class="caption-td">goal<span></td>
            <td>${p.player_assists} <span class="caption-td">assists<span></td>
            <td>${p.player_dribble_attempts} <span class="caption-td">dribble attempts<span></td>
            <td>${p.player_dribble_succ} <span class="caption-td">dribble succeed<span></td>
            <td>${p.player_shots_total} <span class="caption-td">shots<span></td>`;
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
    <td>P <span class="caption-td">played<span></td>
    <td>age</td>
    <td><img src="assets/img/l.png" alt="assists" onerror="this.src='assets/img/l.png'"> <span class="caption-td">assists<span></td>
    <td>TP <span class="caption-td">total passes<span></td>
    <td>PA <span class="caption-td">passes accuracy<span></td>
    <td>KP <span class="caption-td">key passes<span></td>
    <td><img src="assets/img/injury.png" alt="injury-card" onerror="this.src='assets/img/injury.png'"> <span class="caption-td">injury<span></td>`
    
    for(let element of players) { // satria le izy filtrer par place (milieu, attaquant, ...)
        for(let p of element.players) {
            tr[i].innerHTML = 
            `<td class="player-table">
                <span class="number">${p.player_number}</span> 
                <span>${p.player_name}</span>
            </td>
            <td>${p.player_match_played} <span class="caption-td">played<span></td>
            <td>${p.player_age} <span class="caption-td">age<span></td>
            <td>${p.player_assists} <span class="caption-td">assists<span></td>
            <td>${p.player_passes} <span class="caption-td">total passes<span></td>
            <td>${p.player_passes_accuracy} <span class="caption-td">passes accuracy<span></td>
            <td>${p.player_key_passes} <span class="caption-td">key passes<span></td>
            <td>${(p.player_injured === "No" ? "" : "yes")} <span class="caption-td">injury<span></td>`;
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
    <td>P <span class="caption-td">played<span></td>
    <td>tackles</td>
    <td>INT <span class="caption-td">interceptions<span></td>
    <td>F <span class="caption-td">fouls<span></td>
    <td><img src="assets/img/yellow-card.png" alt="yellow-card" onerror="this.src='assets/img/yellow-card.png'"> <span class="caption-td">yellow card<span></td>
    <td><img src="assets/img/red-card.png" alt="red-card" onerror="this.src='assets/img/red-card.png'"> <span class="caption-td">red card<span></td>
    <td><img src="assets/img/injury.png" alt="injury-card" onerror="this.src='assets/img/injury.png'"> <span class="caption-td">injury<span></td>`
    
    for(let element of players) { // satria le izy filtrer par place (milieu, attaquant, ...)
        for(let p of element.players) {
            tr[i].innerHTML = 
            `<td class="player-table">
                <span class="number">${p.player_number}</span> 
                <span>${p.player_name}</span>
            </td>
            <td>${p.player_match_played} <span class="caption-td">played<span></td></td>
            <td>${p.player_tackles} <span class="caption-td">tackles<span></td>
            <td>${p.player_interceptions} <span class="caption-td">interceptions<span></td>
            <td>${p.player_fouls_committed} <span class="caption-td">fouls<span></td>
            <td>${p.player_yellow_cards} <span class="caption-td">yellow card<span></td>
            <td>${p.player_red_cards} <span class="caption-td">red card<span></td>
            <td>${(p.player_injured === "No" ? "" : "yes")} <span class="caption-td">injury<span></td>`;
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
    <td>P <span class="caption-td">played<span></td>
    <td>age</td>
    <td>DT <span class="caption-td">duels total<span></td>
    <td>DW <span class="caption-td">duels won<span></td>
    <td>
        <img src="assets/img/yellow-card.png" alt="yellow-card" onerror="this.src='assets/img/yellow-card.png'"> 
        <span class="caption-td">yellow card<span>
    </td>
    <td>
        <img src="assets/img/red-card.png" alt="red-card" onerror="this.src='assets/img/red-card.png'">
        <span class="caption-td">red card<span>
    </td>
    <td>
        <img src="assets/img/injury.png" alt="injury-card" onerror="this.src='assets/img/injury.png'"> 
        <span class="caption-td">injury<span>
    </td>`
    
    for(let element of players) { // satria le izy filtrer par place (milieu, attaquant, ...)
        for(let p of element.players) {
            tr[i].innerHTML = 
            `<td class="player-table">
                <span class="number">${p.player_number}</span> 
                <span>${p.player_name}</span>
            </td>
            <td>${p.player_match_played} <span class="caption-td">played<span></td>
            <td>${p.player_age} <span class="caption-td">age<span></td>
            <td>${p.player_duels_total} <span class="caption-td">duels total<span></td>
            <td>${p.player_duels_won} <span class="caption-td">duels won<span></td>
            <td>${p.player_yellow_cards} <span class="caption-td">yellow card<span></td>
            <td>${p.player_red_cards} <span class="caption-td">red card<span></td>
            <td>${(p.player_injured === "No" ? "" : "yes")} <span class="caption-td">injury<span></td>`;
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
    <td>P <span class="caption-td">played<span></td>
    <td>age</td>
    <td>GC <span class="caption-td">goal conceded<span></td>
    <td>saves</td>
    <td><img src="assets/img/yellow-card.png" alt="yellow-card" onerror="this.src='assets/img/yellow-card.png'"> <span class="caption-td">yellow card<span></td>
    <td><img src="assets/img/red-card.png" alt="red-card" onerror="this.src='assets/img/red-card.png'"> <span class="caption-td">red card<span></td>
    <td><img src="assets/img/injury.png" alt="injury-card" onerror="this.src='assets/img/injury.png'"> <span class="caption-td">injury<span></td>`;
    
    for(let element of players) { // satria le izy filtrer par place (milieu, attaquant, ...)
        for(let p of element.players) {
            tr[i].innerHTML = 
            `<td class="player-table">
                <span class="number">${p.player_number}</span> 
                <span>${p.player_name}</span>
            </td>
            <td>${p.player_match_played} <span class="caption-td">played<span></td>
            <td>${p.player_age} <span class="caption-td">age<span></td>
            <td>${(p.player_goals_conceded == 0 || p.player_goals_conceded === "") ? '' : p.player_goals_conceded} <span class="caption-td">goal conceded<span></td>
            <td>${p.player_saves ? p.player_saves : ''} <span class="caption-td">saves<span></td>
            <td>${p.player_yellow_cards} <span class="caption-td">yellow card<span></td>
            <td>${p.player_red_cards} <span class="caption-td">red card<span></td>
            <td>${(p.player_injured === "No" ? "" : "yes")} <span class="caption-td">injury<span></td>`;
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
let APIkey = "aeb8cfee1fe2069ff47ef42ad13a32ab605910fd7267a6cd39538190d1b705be";
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
/* harmony export */   "clearIntervalInfoTeam": () => (/* binding */ clearIntervalInfoTeam),
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
/* harmony import */ var _func_date__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../func/date */ "./src/js/func/date.js");
/* harmony import */ var _others_animation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../others/animation */ "./src/js/others/animation.js");













let currentDisplay = undefined,
    intervalUpdate;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (isPopState = false, idLeague, idTeam) => {
    let calendar = [],
        result = [],
        standing = [],
        players = [],
        coach = []
    ;(0,_others_animation__WEBPACK_IMPORTED_MODULE_11__.loading)()

    window.scroll(0,0)
     // rehefa popstate de tsy mila mi-ajouter
    if(!isPopState) (0,_history_addHistory__WEBPACK_IMPORTED_MODULE_8__["default"])(`team/${idLeague}&${idTeam}`) 

    ;(0,_func_getMatch__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_func_date__WEBPACK_IMPORTED_MODULE_10__.startSeason)(), new Date(), 0, idTeam).then((value) => {
        result = value;
    });
    (0,_func_getMatch__WEBPACK_IMPORTED_MODULE_2__["default"])(new Date(), (0,_func_date__WEBPACK_IMPORTED_MODULE_10__.endSeason)(), 0, idTeam).then(
        (value) => (calendar = value)
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
        if(id === "calendar") currentDisplay = (0,_func_displayMatchByDate__WEBPACK_IMPORTED_MODULE_5__["default"])(calendar, "calendar", "ASC")
        else if (id === "results") currentDisplay = (0,_func_displayMatchByDate__WEBPACK_IMPORTED_MODULE_5__["default"])(result, "results")
        else if (id === "standing") (0,_func_displayStanding__WEBPACK_IMPORTED_MODULE_4__["default"])(standing, idTeam)
        else if (id === "stats") (0,_displayStatsPlayer__WEBPACK_IMPORTED_MODULE_7__["default"])(players)
        else (0,_displayPlayers__WEBPACK_IMPORTED_MODULE_6__["default"])(players, coach)
    })
    ;(0,_others_animation__WEBPACK_IMPORTED_MODULE_11__.stopLoading)()

    // asorina ny league active raha misy
    let activeLeague = document.querySelector('.list-league li.active');
    if(activeLeague) activeLeague.classList.remove('active')

    intervalUpdate = setInterval(async () => {
        if (currentDisplay === "calendar") {
            // affiche-na aloha sao taraiky le resultat teo aloha
            currentDisplay = (0,_func_displayMatchByDate__WEBPACK_IMPORTED_MODULE_5__["default"])(calendar, "calendar");
            // maka vaovao
            calendar = await (0,_func_getMatch__WEBPACK_IMPORTED_MODULE_2__["default"])(new Date(), (0,_func_date__WEBPACK_IMPORTED_MODULE_10__.endSeason)(), 0, idTeam)
            // sao novainy tampoka nefa taraiky vao azo
            if (currentDisplay === "calendar")
                currentDisplay = (0,_func_displayMatchByDate__WEBPACK_IMPORTED_MODULE_5__["default"])(calendar, "calendar", "ASC");
        } else if (currentDisplay === "results") {
            // affiche-na aloha sao taraiky le resultat teo aloha
            currentDisplay = (0,_func_displayMatchByDate__WEBPACK_IMPORTED_MODULE_5__["default"])(result, "results");
            // maka vaovao
            result = await (0,_func_getMatch__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_func_date__WEBPACK_IMPORTED_MODULE_10__.startSeason)(), new Date(), 0, idTeam);
            // sao novainy tampoka nefa taraiky vao azo
            if (currentDisplay === "result")
                currentDisplay = (0,_func_displayMatchByDate__WEBPACK_IMPORTED_MODULE_5__["default"])(result, "result");
        }
        
        }, 55000) // tous les une minute  (alatsako kely amle mbola alaina)
});

function clearIntervalInfoTeam() {
    clearInterval(intervalUpdate)
    currentDisplay = undefined
}


/***/ }),

/***/ "./src/js/others/contryAndLeague.js":
/*!******************************************!*\
  !*** ./src/js/others/contryAndLeague.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ })

}]);
//# sourceMappingURL=src_js_infoTeam_infoTeam_js.bundle.js.map