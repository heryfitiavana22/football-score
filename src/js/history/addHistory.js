export default (hash) => {
    // console.log(hash);
    return new Promise(async (resolve, reject) => {
        let url = location.protocol + '//' + location.host + '#' + hash
        window.history.pushState(null,'', url)
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
        resolve('cleared')
    })
}