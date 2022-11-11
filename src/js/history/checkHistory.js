import pageNotFound from "../404";
import {loading} from "../others/animation"

export default (isPopState) => {
    let hash = window.location.hash;
    // console.log(hash);
    loading()
    importInit(hash);
    
    if (hash.length === 0 || hash === "#") {
        let d = new Date();
        // ovaina aloha ny date de ao vao maka ny listMatch
        importCalendar(isPopState, d.getMonth() + 1, d.getDate(), 0);
        // let intervalListMatch = setInterval(() => {
        //     listMatch(new Date())
        // }, 10000)
        return;
    }
    // verifier si listgame ou game (asorina le #)
    let item = hash.slice(1, hash.indexOf("/"));
    // asorina ilay efa azo
    hash = hash.slice(hash.indexOf("/") + 1);
    if (item === "listgame") {

        let index = hash.indexOf("&");
        if (index > 0) {
            let date = hash.slice(0, index),
                idLeague = hash.slice(index + 1);
            date = new Date(date);
            // si date n'est pas valide et l'id n'est pas un nombre
            if (date.toString() === "Invalid Date" && isNaN(idLeague))
                return pageNotFound(); // 404
            // ovaina aloha ny date de ao vao maka ny listMatch
            importCalendar(isPopState, date.getMonth() + 1, date.getDate(), idLeague);
        } else {
            // hash correspond au date, le izy notapahana mantsy
            hash = new Date(hash);
            if (hash.toString() === "Invalid Date") return pageNotFound(); // 404
            importCalendar(isPopState, hash.getMonth() + 1, hash.getDate());
        }

    } else if (item === "game") {

        let indexSlash = hash.indexOf("/"),
            type = hash.slice(0, indexSlash); // mety ho pregame,standing,stats
        hash = hash.slice(indexSlash + 1); // asorina izay efa azo
        indexSlash = hash.indexOf("/"); // slash manaraka
        let id = hash.slice(0); // idMatch
        // raha tsy nombre le id
        if (isNaN(id)) return pageNotFound("team not found"); // 404
        if((type === "pregame") || (type === "standing") || (type === "stats") || (type === "h2h"))
            return importInfoMatch(isPopState, id, type);
        
        return pageNotFound(); // 404

    } else if (item === "league") {

        if(hash.includes('l')) { // raha misy "l"
            let id = hash.slice(1); // asorina le "l"
            if(isNaN(id)) return pageNotFound(); // 404
            importInfoLeague(true, hash)
        } else return pageNotFound(); // 404

    } else if(item === "team") {

        hash = hash.split('&') // sarahana le idTeam sy idLeague
        if (hash.length !== 2)
            return pageNotFound("team not found"); // 404
        // sao de tsy nombre le id
        let isCorrect = true;
        hash.forEach(element => {
            if(isNaN(element))
                return isCorrect = false
        });
        
        if(isCorrect)importInfoTeam(isPopState, ...hash)
        else pageNotFound("team not found"); // 404

    } else return pageNotFound(); // 404
};

function importInit(hash) {
    return new Promise(async (resolve, reject) => {
        import("../league/listLeague").then(module => module.default())
        // effacer le setInterval'interval
        let {clearIntervalInfoMatch} = await import("../infoMatch/infoMatch")
        let {clearIntervalInfoLeague} = await import("../infoLeague/infoLeague")
        let {clearIntervalListMatch} = await import("../listMatch/listMatch")
        let {clearIntervalInfoTeam} = await import("../infoTeam/infoTeam")
        clearIntervalInfoLeague()
        clearIntervalListMatch()
        clearIntervalInfoTeam()
        if( !(hash.includes("pregame") || hash.includes("h2h") ||
            hash.includes("standing") || hash.includes("stats"))) 
            clearIntervalInfoMatch()
        resolve('init')
    })
}

async function importInfoLeague(isPopState, idLeague) {
    let infoLeague = await import("../infoLeague/infoLeague");
    infoLeague.default(isPopState, idLeague)
}

async function importInfoTeam(isPopState, idLeague, idTeam) {
    let infoTeam = await import("../infoTeam/infoTeam");
    infoTeam.default(isPopState, idLeague, idTeam)
}

async function importInfoMatch(isPopState, idMatch, toDisplay) {
    let infoMatch = await import("../infoMatch/infoMatch");
    infoMatch.default(isPopState, idMatch, toDisplay)
}


async function importCalendar(isPopState, m, d, idLeague) {
    let calendar = await import("../calendar/calendar");
    calendar.setDate(isPopState, m, d, idLeague)
}