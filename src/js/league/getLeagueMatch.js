import {setDate} from '../calendar/calendar'
import {listMatchToday} from '../listMatch/listMatch'

let currentLeagueHTML = undefined;
export function getLeagueMatch (idLeague, item) {
    let d = new Date(),
        month = d.getMonth()+1,
        dateToday = d.getDate();
    // to active
    if(currentLeagueHTML) currentLeagueHTML.classList.remove('active')
    item.classList.add('active')
    document.querySelector('.league-container').style.left = '-100%' // rehefa le responsive
    setDate(false, month, dateToday, idLeague, listMatchToday)
    currentLeagueHTML = item
    window.scroll(0,0)
}