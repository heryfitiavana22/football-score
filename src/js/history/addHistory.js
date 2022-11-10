export default (hash) => {
    console.log(hash);
    let url = location.protocol + '//' + location.host + '#' + hash
    window.history.pushState(null,'', url)
    // effacer le setInterval'interval
    import("../infoMatch/infoMatch").then(module => module.clearIntervalInfoMatch())
    import("../infoLeague/infoLeague").then(module => module.clearIntervalInfoLeague())
    import("../listMatch/listMatch").then(module => module.clearIntervalListMatch())
    import("../infoTeam/infoTeam").then(module => module.clearIntervalInfoTeam())
}