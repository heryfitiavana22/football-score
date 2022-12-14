import getStanding from "../func/getStanding";
import getScorer from "../func/getScorer";
import getMatch from "../func/getMatch";
import displayLeague from "./displayLeague";
import displayMatch from "../func/displayMatchByDate";
import displayScorer from "./displayScorer";
import { endSeason, startSeason } from "../func/date";
import displayStanding from "../func/displayStanding";
import { getLeagues } from "../league/listLeague";
import { loading, stopLoading } from "../others/animation";
import addHistory from "../history/addHistory";
import pageNotFound from "../404";

let intervalUpdate = undefined,
    currentDisplay = undefined;
export default async (isPopState, idLeague) => {
    window.scroll(0,0)
    loading();
    // addHistory (rehefa popstate de tsy mila mi-ajouter)
    if (!isPopState) addHistory(`league/${idLeague}`);
    idLeague = idLeague.slice(1); // asoriko ilay "l"
    let calendar = [],
        result = [],
        standing = [],
        scorer = [];
    getScorer(idLeague).then((value) => (scorer = value));
    getMatch(startSeason(), new Date(), idLeague).then((value) => {
        result = value;
    });
    getMatch(new Date(), endSeason(), idLeague).then(
        (value) => (calendar = value)
    );
    // getStanding league
    standing = await getStanding(idLeague);
    let league = getLeagues().filter((e) => e.league_id == idLeague);
    if (league.length === 0)
        // tsy misy io league io
        return pageNotFound("league not found");
    league = league[0];
    // afficher la ligue
    displayLeague(league);
    currentDisplay = displayStanding(standing);

    /* event onclick */
    document.querySelector(".nav-league").addEventListener("click", (e) => {
        let id = e.target.id;
        if (id === "result") currentDisplay = displayMatch(result, "result");
        else if (id === "standing") currentDisplay = displayStanding(standing);
        else if (id === "scorer") currentDisplay = displayScorer(scorer);
        else currentDisplay = displayMatch(calendar, "calendar", "ASC");
    });

    // asorina ny league active raha misy
    let activeLeague = document.querySelector('.list-league li.active');
    if(activeLeague) activeLeague.classList.remove('active')
    
    stopLoading();
    intervalUpdate = setInterval(async () => {
        if (currentDisplay === "calendar") {
            // affiche-na aloha sao taraiky le resultat teo aloha
            currentDisplay = displayMatch(calendar, "calendar");
            // maka vaovao
            calendar = await getMatch(new Date(), endSeason(), idLeague);
            // sao novainy tampoka nefa taraiky vao azo
            if (currentDisplay === "calendar")
                currentDisplay = displayMatch(calendar, "calendar", "ASC");
        } else if (currentDisplay === "result") {
            // affiche-na aloha sao taraiky le resultat teo aloha
            currentDisplay = displayMatch(result, "result");
            // maka vaovao
            result = await getMatch(startSeason(), new Date(), idLeague);
            // sao novainy tampoka nefa taraiky vao azo
            if (currentDisplay === "result")
                currentDisplay = displayMatch(result, "result");
        }
    }, 55000) // tous les une minute  (alatsako kely amle mbola alaina)
};

export function clearIntervalInfoLeague() {
    clearInterval(intervalUpdate)
    currentDisplay = undefined
}