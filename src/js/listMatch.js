import {getListCountry, getListLeague} from './contryAndLeague'
import {getPopularLeague} from './league'
import {loading, stopLoading} from './animation'
import displayListMatch from './displayListMatch'

let APIkey = "5abf557ce643bfb8836e00496fc0e64543d61180848a164763839561abbbafda"
let listLeague = getListLeague(),
    listCountry = getListCountry(),
    gamePerLeague = [],
    activeInNavBar = document.querySelector('.navbar-match .nav-list li.active'),
    currentItem = listMatchToday; // ilaina amle update-na score

export async function listMatch(date, idLeague, toDisplay) {
    gamePerLeague = [];
    let d = new Date(date),
        currentYear = d.getFullYear(),
        currentMonth = d.getMonth()+1,
        currentDay = d.getDate(),
        currentDate = currentYear + '-' + currentMonth + '-' + currentDay;
    console.log(currentDate);
    let url = `https://apiv3.apifootball.com/?action=get_events&from=${currentDate}&to=${currentDate}&APIkey=${APIkey}&timezone=Africa/Nairobi`;
    console.log(url);
    fetch(url, {method : 'get'})
        .then(response => response.json())
        .then((value) => {
            // ireo anaty liste iany no alaina
            let list = value.filter(e => listCountry.includes(e.country_name) && listLeague.includes(e.league_name)),
                leagueId = [],
                countryId = [];
            // au cas ou idLeague est donne
            if(idLeague) {
                list = list.filter(e => e.league_id == idLeague)
            }
                console.log('list match');
                console.log(list);
            // filter by country and league
            // alaina ny liste ana leagueId (tsy azo asiana miverina) ary tonga dia alaina ny match 
            for(let e of list) {
                if(!leagueId.includes(e.league_id)) {  // raha mbola tsy ao
                    gamePerLeague.push({
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
            let indexFree = [],
                idPopularLeague = popularLeague.map(e => e.id);
            // jerena oe aiza ny place malalaka, izay isanle popular league
            for(let i=0; i<popularLeague.length; i++) {
                if(!idPopularLeague.includes(gamePerLeague[i] ? Number(gamePerLeague[i].id) : '')) {
                    indexFree.push(i)
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
            // asorina izay tsy hita ao anaty tableau ny indice-ny, zany oe tsy misy match
            // izay any ambonin' popularLeague.length iany no akisaka
            popularLeague = popularLeague.filter(e => (e.index >= 0 && e.index > popularLeague.length))
            // atao any amin farany ambony ireo league populaire
            for(let i=0; i<popularLeague.length; i++) {
                // apetraka any amle index malalaka
                let tmp = gamePerLeague[indexFree[i]];
                gamePerLeague[indexFree[i]] = gamePerLeague[popularLeague[i].index]
                gamePerLeague[popularLeague[i].index] = tmp
            }
            console.log('gamePerLeague');
            console.log(gamePerLeague);
            // affiche-na ny match androany na ireo live na vide fotsiny (dans le cas des match deja fini)
            if(toDisplay) { // raha misy no specifie-na
                activeInNavBar = document.querySelector('.currentDate');
                currentItem = toDisplay
            } 
            currentItem(activeInNavBar)
            // displayListMatch(gamePerLeague)
            stopLoading()
        })
}

export async function listMatchToday(item) {
    currentItem = listMatchToday;
    activeInNavBar.classList.remove('active')
    item.classList.add('active')
    activeInNavBar = item;
    loading()
    displayListMatch(gamePerLeague)
    stopLoading()
}

export async function listMatchLive(item) {
    currentItem = listMatchLive;
    activeInNavBar.classList.remove('active')
    item.classList.add('active')
    activeInNavBar = item;
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
    console.log('game live');
    console.log(gameLive);
    displayListMatch(gameLive)
    stopLoading()
}

export async function listMatchFinished(item) {
    currentItem = listMatchFinished;
    activeInNavBar.classList.remove('active')
    item.classList.add('active')
    activeInNavBar = item;
    loading()
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
    displayListMatch(gameFinished)
    stopLoading()
}

export async function updateScore() {
    currentItem()
}