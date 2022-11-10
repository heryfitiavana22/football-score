"use strict";
(self["webpackChunkFootball_score"] = self["webpackChunkFootball_score"] || []).push([["src_js_league_listLeague_js"],{

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
//# sourceMappingURL=src_js_league_listLeague_js.bundle.js.map