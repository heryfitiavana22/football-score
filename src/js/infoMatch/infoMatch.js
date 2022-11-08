import getInfoMatch from './getInfoMatch' 
import getStanding from '../func/getStanding'
import addHistory from "../history/addHistory"
import {loading, stopLoading} from '../others/animation'
import displayGame from './displayGame'
import displayMoment from './displayMoment'
import displayPreGame from './displayPregame'
import displayStanding from '../func/displayStanding'
import displayStats from './displayStats'
import {clearIntervalInfoLeague} from '../infoLeague/infoLeague'

let interval = undefined,
    currentDisplay = undefined;
export default async (isPopState=false, idMatch, toDisplay) => {
    loading()
    clearIntervalInfoLeague()
    let game = [],
        standing = [];
    
    game = await getInfoMatch(idMatch)
    // console.log('game');
    // console.log(game);
    // display game (home vs away)
    displayGame(game)
    // display moment fort
    displayMoment(game)
    if(toDisplay === "standing") { // raha tiana specifie-na ho classement
        standing = await getStanding(game.league_id)
        // add history (ajouteko mitokana ito)
        if(!isPopState) // rehefa popstate de tsy mila mi-ajouter
            addHistory(`game/standing/${game.match_id}`);
        currentDisplay = displayStanding(standing, game.match_hometeam_id, game.match_awayteam_id)
    } else if(toDisplay === "stats") {
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
    // mettre a jour le resultat chaque 60 seconde 
    // interval = setInterval(async () => {
    //     // console.log('maj info');
    //     game = await getInfoMatch(idMatch)
    //     // true : tsy mila enregistre-na anaty historique
    //     if(currentDisplay === "standing") 
    //         currentDisplay = displayStanding(standing, game.match_hometeam_id, game.match_awayteam_id)
    //     else if(toDisplay === "stats")
    //         currentDisplay = displayStats(true, game)
    //     else 
    //         currentDisplay = displayPreGame(true, game)
    // },60000)
}

export function clearIntervalUpdate() {
    clearInterval(interval)
}