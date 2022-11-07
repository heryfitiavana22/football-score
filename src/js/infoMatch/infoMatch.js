import getInfoMatch from './getInfoMatch' 
import getStanding from '../func/getStanding'
import addHistory from "../history/addHistory"
import {loading, stopLoading} from '../others/animation'
import displayGame from './displayGame'
import displayMoment from './displayMoment'
import displayPreGame from './displayPregame'
import displayStanding from './displayStanding'

let navMatch = undefined,
    container = undefined,
    interval = undefined,
    currentDisplay = undefined;
export default async (isPopState=false, idMatch, toDisplay) => {
    loading()
    let game = [],
        standing = [];
    
    game = await getInfoMatch(idMatch)
    // console.log('game');
    // console.log(game);
    // display game (home vs away)
    displayGame(game)
    navMatch = document.querySelector('.nav-match');
    container = navMatch.nextElementSibling;
    // display moment fort
    displayMoment(game)
    if(toDisplay === "standing") { // raha tiana specifie-na ho classement
        standing = await getStanding(game.league_id)
        // add history (ajouteko mitokana ito)
        if(!isPopState) // rehefa popstate de tsy mila mi-ajouter
            addHistory(`game/standing/${game.match_id}`);
        currentDisplay = displayStanding(standing, container)
    } else if(toDisplay === "stats") {
        getStanding(game.league_id).then((value) => standing = value)
        currentDisplay = displayStats(isPopState, game, container)
    } else {
        getStanding(game.league_id).then((value) => standing = value)
        currentDisplay = displayPreGame(isPopState, game, container)
    }
    stopLoading()

    /* nav match (standing, pregame, stats) */
    navMatch.addEventListener('click', (e) => {
        loading()
        // console.log(e.target);
        if(e.target.id === 'standing') {
            loading()
            // add history (ajouteko mitokana ito)
            if(!isPopState) // rehefa popstate de tsy mila mi-ajouter
                addHistory(`game/standing/${game.match_id}`);
            // display
            currentDisplay = displayStanding(standing, container)
            stopLoading()
        }else if(e.target.id === 'stats') {
            loading()
            // display
            currentDisplay = displayStats(isPopState, game, container)
            stopLoading()
        } else {
            loading()
            // display
            currentDisplay = displayPreGame(isPopState, game, container)
            stopLoading()
        }
    })
    // mettre a jour le resultat chaque 60 seconde 
    // interval = setInterval(async () => {
    //     // console.log('maj info');
    //     game = await getInfoMatch(idMatch)
    //     // true : tsy mila enregistre-na anaty historique
    //     if(currentDisplay === "standing") 
    //         currentDisplay = displayStanding(true, standing, game.match_id, container)
    //     else if(toDisplay === "stats")
    //         currentDisplay = displayStats(true, game, container)
    //     else 
    //         currentDisplay = displayPreGame(true, game, container)
    // },60000)
}

export function clearIntervalUpdate() {
    clearInterval(interval)
}