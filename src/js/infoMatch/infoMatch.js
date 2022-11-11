import getInfoMatch from './getInfoMatch' 
import getH2H from './getH2H' 
import getStanding from '../func/getStanding'
import addHistory from "../history/addHistory"
import {loading, stopLoading} from '../others/animation'
import displayGame from './displayGame'
import displayMoment from './displayMoment'
import {initMoment} from './displayMoment'
import displayPreGame from './displayPregame'
import displayStanding from '../func/displayStanding'
import displayStats from './displayStats'
import displayMatch from "../func/displayMatchByDate";

let interval = undefined,
    currentDisplay = undefined,
    isUpdate = false;

export default async function infoMatch(isPopState=false, idMatch, toDisplay) {
    // tsy mila manao loading rehefa manao update
    if(!isUpdate) {
        loading()
        window.scroll(0,0)
    }

    let game = [],
        standing = [],
        h2h = [];
    
    game = await getInfoMatch(idMatch)
    // console.log('game');
    // console.log(game);
    // display game (home vs away)
    displayGame(game)
    // display moment fort
    displayMoment(game)

    if((toDisplay === "standing") || (currentDisplay === "standing")) { // raha tiana specifie-na ho classement
        standing = await getStanding(game.league_id)
        // add history (ajouteko mitokana ito)
        // rehefa popstate de tsy mila mi-ajouter
        if(!isPopState) addHistory(`game/standing/${game.match_id}`);
        currentDisplay = displayStanding(standing, game.match_hometeam_id, game.match_awayteam_id)
    } else if((toDisplay === "stats") || (currentDisplay === "stats")) {
        // alaina any ambadika le standing
        getStanding(game.league_id).then((value) => standing = value)
        currentDisplay = displayStats(isPopState, game)
    } else if((toDisplay === "h2h") || (currentDisplay === "h2h")) {
        // rehefa popstate de tsy mila mi-ajouter
        if(!isPopState) addHistory(`game/h2h/${game.match_id}`);
        // alaina any ambadika le standing
        getStanding(game.league_id).then((value) => standing = value)
        h2h = await getH2H(game.match_hometeam_id, game.match_awayteam_id)
        currentDisplay = displayMatch(h2h.firstTeam_VS_secondTeam, "h2h")
    } else {
        getStanding(game.league_id).then((value) => standing = value)
        currentDisplay = displayPreGame(isPopState, game)
        h2h = await getH2H(game.match_hometeam_id, game.match_awayteam_id)
    }
    stopLoading()

    /* nav match (standing, pregame, stats) */
    document.querySelector('.nav-match').addEventListener('click', (e) => {
        loading()
        let id = e.target.id;
        // console.log(e.target);
        if(id === 'standing') {
            loading()
            addHistory(`game/standing/${game.match_id}`);
            // display
            currentDisplay = displayStanding(standing, game.match_hometeam_id, game.match_awayteam_id)
            stopLoading()
        } else if(id === 'stats') {
            loading()
            // display
            currentDisplay = displayStats(false, game)
            stopLoading()
        } else if(id === 'h2h') {
            loading()
            addHistory(`game/h2h/${game.match_id}`);
            // display
            currentDisplay = displayMatch(h2h.firstTeam_VS_secondTeam, "h2h")
            stopLoading()
        } else {
            loading()
            // display
            currentDisplay = displayPreGame(false, game)
            stopLoading()
        }
    })

    // asorina ny league active raha misy
    let activeLeague = document.querySelector('.list-league li.active');
    if(activeLeague) activeLeague.classList.remove('active')

    // rehefa mandeha ny a jour de tsy atao intsony
    if(isUpdate) return

    // rehefa live iany vao manao update   
    if(game.match_live === "1") {
        // ataoko miandry kely fa misy erreur
        setTimeout(() => {
            // mettre a jour le resultat chaque 60 seconde 
            interval = setInterval(async () => {
                isUpdate = true
                // console.log(currentDisplay);
                // console.log('maj info');
                infoMatch(true, idMatch)
            }, 55000) // tous les une minutes  (alatsako kely amle mbola alaina)
            // console.log("interval");
        }, 250)
    }
}

export function clearIntervalInfoMatch() {
    clearInterval(interval)
    isUpdate = false
    currentDisplay = undefined
    initMoment()
}