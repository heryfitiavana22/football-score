import getMatch from '../func/getMatch'
import {toYYYYMMDD} from '../func/date'
import {getPopularLeague} from '../others/popularAndException'
import {loading, stopLoading} from '../others/animation'
import displayListMatch from './displayListMatch'
import {deleteCurrentMonth, createCalendar, getCurrentDate} from '../calendar/calendar'
import addHistory from '../history/addHistory'

let gamePerLeague = [],
    activeInNavBar = document.querySelector('.navbar-match .nav-list li.active'),
    currentItem = listMatchToday, // ilaina amle update-na score
    interval = undefined,
    isUpdate = false;

export async function listMatch(isPopState=false, date, idLeague, toDisplay) {
    gamePerLeague = [];
    date = toYYYYMMDD(date)
    // add history (rehefa popstate de tsy mila mi-ajouter)
    if(!isPopState)
        addHistory(`listgame/${date}${idLeague ? ('&'+idLeague) : ''}`)
    // getMatch
    let list = await getMatch(date, date, idLeague),
        leagueId = [],
        countryId = [];
    // au cas ou efa lancé le izy nefa taraiky vao voafafa
    if(interval === "cleared") return
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
    
    let popularLeague = getPopularLeague(leagueId);
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
    stopLoading()
    // rehefa mandeha ny a jour de tsy atao intsony
    if(isUpdate) return

    interval = setInterval(() => {
        // console.log('update listMatch');
        isUpdate = true
        listMatch(true, date, idLeague)
    }, 55000) // tous les une minutes  (alatsako kely amle mbola alaina)
}

export function clearIntervalListMatch() {
    // rehefa mbola tsy nahazo valeur de tsy mila atao clearInterval
    if(interval === undefined) return
    clearInterval(interval)
    interval = "cleared"
    isUpdate = false
}


export function listMatchToday() {
    currentItem = listMatchToday;
    loading()
    displayListMatch(gamePerLeague)
    activeInNavBar = document.querySelector('.match-container .nav-list li.active')
    activeInNavBar.classList.remove('active')
    activeInNavBar = document.querySelector('.match-today');
    activeInNavBar.classList.add('active')
    // re-creer le calendrier (eviter queqlue erreur)
    let {currentYear, currentMonth, currentDate} = getCurrentDate()
    deleteCurrentMonth()
    createCalendar(currentMonth, currentYear, currentDate);
    stopLoading()
}

export async function listMatchLive() {
    currentItem = listMatchLive;
    loading()
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
    displayListMatch(gameLive)
    activeInNavBar = document.querySelector('.match-container .nav-list li.active')
    activeInNavBar.classList.remove('active')
    activeInNavBar = document.querySelector('.match-live');
    activeInNavBar.classList.add('active')
    // re-creer le calendrier (eviter queqlue erreur)
    let {currentYear, currentMonth, currentDate} = getCurrentDate()
    deleteCurrentMonth()
    createCalendar(currentMonth, currentYear, currentDate);
    stopLoading()
}

export function listMatchFinished() {
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
    displayListMatch(gameFinished)
    activeInNavBar = document.querySelector('.match-container .nav-list li.active')
    activeInNavBar.classList.remove('active')
    activeInNavBar = document.querySelector('.match-finished');
    activeInNavBar.classList.add('active')
    // re-creer le calendrier (eviter queqlue erreur)
    let {currentYear, currentMonth, currentDate} = getCurrentDate()
    deleteCurrentMonth()
    createCalendar(currentMonth, currentYear, currentDate);
    stopLoading()
}

export async function updateScore() {
    currentItem()
}