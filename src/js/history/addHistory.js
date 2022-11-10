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
        clearIntervalInfoMatch()
        clearIntervalListMatch()
        clearIntervalInfoTeam()
        resolve('cleared')
    })
}