import {setDate} from './calendar'
import {listMatchToday} from './listMatch'

let currentLeagueHTML = undefined;
export function getLeagueMatch (idLeague, item) {
    let d = new Date(),
        month = d.getMonth()+1,
        dateToday = d.getDate();
    setDate(false, month, dateToday, idLeague, listMatchToday)
    // to active
    if(currentLeagueHTML) currentLeagueHTML.classList.remove('active')
    item.classList.add('active')
    currentLeagueHTML = item
    window.scroll(0,0)
}