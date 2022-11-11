import getPlayers from "./getPlayers";
import getStanding from "../func/getStanding";
import getMatch from "../func/getMatch";
import displayInfoTeam from "./displayInfoTeam";
import displayStanding from "../func/displayStanding";
import displayMatch from "../func/displayMatchByDate";
import displayPlayers from "./displayPlayers";
import displayStatsPlayer from "./displayStatsPlayer";
import addHistory from "../history/addHistory";
import filterByPlace from "./filterByPlace";
import { endSeason, startSeason } from "../func/date";
import {loading, stopLoading} from '../others/animation'

let currentDisplay = undefined,
    intervalUpdate = undefined;

export default async (isPopState = false, idLeague, idTeam) => {
    let calendar = [],
        result = [],
        standing = [],
        players = [],
        coach = []
    loading()

    window.scroll(0,0)
     // rehefa popstate de tsy mila mi-ajouter
    if(!isPopState) addHistory(`team/${idLeague}&${idTeam}`) 

    getMatch(startSeason(), new Date(), 0, idTeam).then((value) => {
        result = value;
    });
    getMatch(new Date(), endSeason(), 0, idTeam).then(
        (value) => (calendar = value)
    );
    getStanding(idLeague).then((value) => (standing = value));
    // get player
    players = await getPlayers(idTeam);
    displayInfoTeam(players.team_badge, players.team_name)
    coach = players.coaches[0];
    players = filterByPlace(players.players)
    displayPlayers(players, coach)

    /* onclick nav */
    document.querySelector('.nav-team').addEventListener('click', (e) => {
        let id = e.target.id;
        if(id === "calendar") currentDisplay = displayMatch(calendar, "calendar", "ASC")
        else if (id === "results") currentDisplay = displayMatch(result, "results")
        else if (id === "standing") displayStanding(standing, idTeam)
        else if (id === "stats") displayStatsPlayer(players)
        else displayPlayers(players, coach)
    })
    stopLoading()

    // asorina ny league active raha misy
    let activeLeague = document.querySelector('.list-league li.active');
    if(activeLeague) activeLeague.classList.remove('active')

    intervalUpdate = setInterval(async () => {
        if (currentDisplay === "calendar") {
            // affiche-na aloha sao taraiky le resultat teo aloha
            currentDisplay = displayMatch(calendar, "calendar");
            // maka vaovao
            calendar = await getMatch(new Date(), endSeason(), 0, idTeam)
            // sao novainy tampoka nefa taraiky vao azo
            if (currentDisplay === "calendar")
                currentDisplay = displayMatch(calendar, "calendar", "ASC");
        } else if (currentDisplay === "results") {
            // affiche-na aloha sao taraiky le resultat teo aloha
            currentDisplay = displayMatch(result, "results");
            // maka vaovao
            result = await getMatch(startSeason(), new Date(), 0, idTeam);
            // sao novainy tampoka nefa taraiky vao azo
            if (currentDisplay === "result")
                currentDisplay = displayMatch(result, "result");
        }
        
        }, 55000) // tous les une minute  (alatsako kely amle mbola alaina)
};

export function clearIntervalInfoTeam() {
    clearInterval(intervalUpdate)
    currentDisplay = undefined
}
