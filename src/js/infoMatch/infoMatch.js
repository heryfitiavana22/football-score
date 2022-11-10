import getInfoMatch from './getInfoMatch' 
import getStanding from '../func/getStanding'
import addHistory from "../history/addHistory"
import {loading, stopLoading} from '../others/animation'
import displayGame from './displayGame'
import displayMoment from './displayMoment'
import displayPreGame from './displayPregame'
import displayStanding from '../func/displayStanding'
import displayStats from './displayStats'

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
        standing = [];
    
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
        if(!isPopState) // rehefa popstate de tsy mila mi-ajouter
            addHistory(`game/standing/${game.match_id}`);
        currentDisplay = displayStanding(standing, game.match_hometeam_id, game.match_awayteam_id)
    } else if((toDisplay === "stats") || (currentDisplay === "stats")) {
        getStanding(game.league_id).then((value) => standing = value)
        currentDisplay = displayStats(isPopState, game)
    } else {
        getStanding(game.league_id).then((value) => standing = value)
        currentDisplay = displayPreGame(isPopState, game)
    }
    stopLoading()

    /* nav match (standing, pregame, stats) */
    document.querySelector('.nav-match').addEventListener('click', (e) => {
        loading()
        // console.log(e.target);
        if(e.target.id === 'standing') {
            loading()
            // add history (ajouteko mitokana ito)
            if(!isPopState) // rehefa popstate de tsy mila mi-ajouter
                addHistory(`game/standing/${game.match_id}`);
            // display
            currentDisplay = displayStanding(standing, game.match_hometeam_id, game.match_awayteam_id)
            stopLoading()
        }else if(e.target.id === 'stats') {
            loading()
            // display
            currentDisplay = displayStats(isPopState, game)
            stopLoading()
        } else {
            loading()
            // display
            currentDisplay = displayPreGame(isPopState, game)
            stopLoading()
        }
    })

    // rehefa mandeha ny a jour de tsy atao intsony
    if(isUpdate) return

    // ataoko miandry kely fa misy erreur
    // setTimeout(() => {
    //     // mettre a jour le resultat chaque 60 seconde 
    //     interval = setInterval(async () => {
    //         isUpdate = true
    //         console.log(currentDisplay);
    //         console.log('maj info');
    //         infoMatch(true, idMatch)
    //     }, 55000) // tous les une minutes  (alatsako kely amle mbola alaina)
    //     // console.log("interval");
    // }, 2000)
}

export function clearIntervalInfoMatch() {
    clearInterval(interval)
    isUpdate = false
}