"use strict";
(self["webpackChunkFootball_score"] = self["webpackChunkFootball_score"] || []).push([["src_js_func_displayStanding_js-src_js_func_getMatch_js-src_js_func_getStanding_js-src_js_othe-1fee3a"],{

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

/***/ "./src/js/func/displayStanding.js":
/*!****************************************!*\
  !*** ./src/js/func/displayStanding.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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



let APIkey = "92268e4434769b7515b45be3b45cd3d9bdc9d3e4cf62885a85ada0a22c9acf8b";
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

/***/ }),

/***/ "./src/js/others/popularAndException.js":
/*!**********************************************!*\
  !*** ./src/js/others/popularAndException.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ })

}]);
//# sourceMappingURL=src_js_func_displayStanding_js-src_js_func_getMatch_js-src_js_func_getStanding_js-src_js_othe-1fee3a.bundle.js.map