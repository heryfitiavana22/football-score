"use strict";
(self["webpackChunkFootball_score"] = self["webpackChunkFootball_score"] || []).push([["src_js_listMatch_displayListMatch_js-src_js_listMatch_listMatch_js"],{

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

/***/ "./src/js/listMatch/displayListMatch.js":
/*!**********************************************!*\
  !*** ./src/js/listMatch/displayListMatch.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _listMatch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listMatch */ "./src/js/listMatch/listMatch.js");


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
                        <span class="${(game.match_hometeam_score > game.match_awayteam_score) ? 'winner' : '  '}" id="${game.match_id}">${game.match_hometeam_name}</span>
                        <img src="${game.team_home_badge || 'assets/img/logo2.png'}" alt="icon-team" id="${game.match_id}" onerror="this.src = 'assets/img/logo2.png'">
                        <span class="score-home score" id="${game.match_id}">${(game.match_hometeam_score.length > 0) ? game.match_hometeam_score : '  '}</span> 
                    </div>
                    <span class="vs" id="${game.match_id}">vs</span>
                    <div class="away" id="${game.match_id}">
                        <span class="away-home score" id="${game.match_id}">${(game.match_awayteam_score.length > 0) ? game.match_awayteam_score : '  '}</span>
                        <img src="${game.team_away_badge || 'assets/img/logo2.png'}" alt="icon-team" id="${game.match_id}" onerror="this.src = 'assets/img/logo2.png'">
                        <span class="${(game.match_awayteam_score > game.match_hometeam_score) ? 'winner' : '  '}" id="${game.match_id}">${game.match_awayteam_name}</span>
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
        // console.log(e.target.id);
        let id = e.target.id
        // raha id ana league
        if(id.includes('l')) { // nasiako "l" ny id ana league
            return __webpack_require__.e(/*! import() */ "src_js_infoLeague_infoLeague_js-_d8992").then(__webpack_require__.bind(__webpack_require__, /*! ../infoLeague/infoLeague */ "./src/js/infoLeague/infoLeague.js")).then(module => 
                module.default(false, id)
            )
        }
        if(isNaN(id) || id === '') 
            return; // au cas ou tsy nombre
        // info Match
        Promise.all(/*! import() */[__webpack_require__.e("src_js_infoMatch_infoMatch_js"), __webpack_require__.e("src_js_func_displayMatchByDate_js-src_js_func_displayStanding_js-src_js_func_getStanding_js-_-7ce89f0")]).then(__webpack_require__.bind(__webpack_require__, /*! ../infoMatch/infoMatch */ "./src/js/infoMatch/infoMatch.js")).then(module => 
            module.default(false, id)
        )
    })

    /* onclick match today, live, finished */
    document.querySelector('.match-today').addEventListener('click', () => {
        ;(0,_listMatch__WEBPACK_IMPORTED_MODULE_0__.listMatchToday)()
    })

    document.querySelector('.match-live').addEventListener('click', () => {
        ;(0,_listMatch__WEBPACK_IMPORTED_MODULE_0__.listMatchLive)()
    })

    document.querySelector('.match-finished').addEventListener('click', () => {
        ;(0,_listMatch__WEBPACK_IMPORTED_MODULE_0__.listMatchFinished)()
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearIntervalListMatch": () => (/* binding */ clearIntervalListMatch),
/* harmony export */   "listMatch": () => (/* binding */ listMatch),
/* harmony export */   "listMatchFinished": () => (/* binding */ listMatchFinished),
/* harmony export */   "listMatchLive": () => (/* binding */ listMatchLive),
/* harmony export */   "listMatchToday": () => (/* binding */ listMatchToday)
/* harmony export */ });
/* harmony import */ var _func_getMatch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../func/getMatch */ "./src/js/func/getMatch.js");
/* harmony import */ var _func_date__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../func/date */ "./src/js/func/date.js");
/* harmony import */ var _others_popularAndException__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../others/popularAndException */ "./src/js/others/popularAndException.js");
/* harmony import */ var _others_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../others/animation */ "./src/js/others/animation.js");
/* harmony import */ var _displayListMatch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./displayListMatch */ "./src/js/listMatch/displayListMatch.js");
/* harmony import */ var _calendar_calendar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../calendar/calendar */ "./src/js/calendar/calendar.js");
/* harmony import */ var _history_addHistory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../history/addHistory */ "./src/js/history/addHistory.js");








let gamePerLeague = [],
    activeInNavBar = document.querySelector('.navbar-match .nav-list li.active'),
    currentItem = listMatchToday, // ilaina amle update-na score
    interval = undefined,
    isUpdate = false;

async function listMatch(isPopState=false, date, idLeague, toDisplay) {
    gamePerLeague = [];
    date = (0,_func_date__WEBPACK_IMPORTED_MODULE_1__.toYYYYMMDD)(date)
    // add history (rehefa popstate de tsy mila mi-ajouter)
    if(!isPopState)
        (0,_history_addHistory__WEBPACK_IMPORTED_MODULE_6__["default"])(`listgame/${date}${idLeague ? ('&'+idLeague) : ''}`)
    // getMatch
    let list = await (0,_func_getMatch__WEBPACK_IMPORTED_MODULE_0__["default"])(date, date, idLeague),
        leagueId = [],
        countryId = [];
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

    // au cas ou idLeague est donne
    if(idLeague > 0) {
        // active league (raha sendra ery amin url no novaina ny id no tena mahatonga azy ovaina eto)
        let activeLeague = document.querySelector('.list-league li.active');
        if(activeLeague) activeLeague.classList.remove('active')
        document.querySelector('.kk'+idLeague).classList.add('active') // nasiako "kk" de mora azo
    }
    
    // rehefa mandeha ny a jour de tsy atao intsony
    if(isUpdate) return

    interval = setInterval(() => {
        // console.log('update listMatch');
        isUpdate = true
        listMatch(true, date, idLeague)
    }, 55000) // tous les une minutes  (alatsako kely amle mbola alaina)
}

function clearIntervalListMatch() {
    clearInterval(interval)
    isUpdate = false
    currentItem = listMatchToday
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
//# sourceMappingURL=src_js_listMatch_displayListMatch_js-src_js_listMatch_listMatch_js.bundle.js.map