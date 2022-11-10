let currentLeagueHTML = undefined;
export async function getLeagueMatch (idLeague, item) {
    let d = new Date(),
        month = d.getMonth()+1,
        dateToday = d.getDate();
    // to active
    if(currentLeagueHTML) currentLeagueHTML.classList.remove('active')
    item.classList.add('active')
    document.querySelector('.league-container').style.left = '-100%' // rehefa le responsive
    let {listMatchToday} = await import('../listMatch/listMatch')
    let {setDate} = await import('../calendar/calendar')
    setDate(false, month, dateToday, idLeague, listMatchToday)
    currentLeagueHTML = item
    window.scroll(0,0)
}