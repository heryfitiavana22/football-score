import {setDate} from './calendar'
import {listMatchToday} from './listMatch'
import addHistory from './addHistory'

let currentLeagueHTML = undefined;
export function getLeagueMatch (idLeague, item) {
    let d = new Date(),
        month = d.getMonth()+1,
        dateToday = d.getDate();
    setDate(month, dateToday, idLeague, listMatchToday)
    // to active
    if(currentLeagueHTML) currentLeagueHTML.classList.add('active')
    item.classList.add('active')
    currentLeagueHTML = item
    window.scroll(0,0)
}