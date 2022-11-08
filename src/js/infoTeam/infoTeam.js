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
import filterByDate from "../func/filterByDate";
import { plus15, minus15 } from "../func/date";
import {loading, stopLoading} from '../others/animation'
import {clearIntervalInfoLeague} from '../infoLeague/infoLeague'

export default async (isPopState = false, idLeague, idTeam) => {
    let calendar = [],
        result = [],
        standing = [],
        players = [],
        coach = []
    loading()
    clearIntervalInfoLeague()
    window.scroll(0,0)
     // rehefa popstate de tsy mila mi-ajouter
    if(!isPopState) addHistory(`team/${idLeague}&${idTeam}`) 

    getMatch(minus15(), new Date(), 0, idTeam).then((value) => {
        result = filterByDate(value);
        result.shift(); // shift satria lasa voaray ao le date androany
    });
    getMatch(new Date(), plus15(), 0, idTeam).then(
        (value) => (calendar = filterByDate(value, "ASC"))
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
        if(id === "calendar") displayMatch(calendar, "calendar")
        else if (id === "results") displayMatch(result, "results")
        else if (id === "standing") displayStanding(standing, idTeam)
        else if (id === "stats") displayStatsPlayer(players)
        else displayPlayers(players, coach)
    })
    stopLoading()
};
