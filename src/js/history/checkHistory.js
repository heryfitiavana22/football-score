import pageNotFound from "../404";

export default (isPopState) => {
    let hash = window.location.hash;
    // console.log(hash);
    importInit();
    
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
        if (isNaN(id)) return pageNotFound(); // 404
        if (type === "pregame") importInfoMatch(isPopState, id);
        else if (type === "standing") importInfoMatch(isPopState, id, "standing");
        else if (type === "stats") importInfoMatch(isPopState, id, "stats");
        else return pageNotFound(); // 404
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
        hash.forEach(element => {
            if(isNaN(element))
                return pageNotFound("team not found"); // 404
        });
        importInfoTeam(isPopState, ...hash)
    } else return pageNotFound(); // 404
};

async function importInit() {
    // effacer le setInterval'interval
    import("../others/animation").then(module => module.loading())
    import("../league/listLeague").then(module => module.default())
    import("../infoMatch/infoMatch").then(module => module.clearIntervalInfoMatch())
    import("../infoLeague/infoLeague").then(module => module.clearIntervalInfoLeague())
    import("../listMatch/listMatch").then(module => module.clearIntervalListMatch())
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