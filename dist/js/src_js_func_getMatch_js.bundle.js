"use strict";
(self["webpackChunkFootball_score"] = self["webpackChunkFootball_score"] || []).push([["src_js_func_getMatch_js"],{

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
        console.log(url);
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
//# sourceMappingURL=src_js_func_getMatch_js.bundle.js.map