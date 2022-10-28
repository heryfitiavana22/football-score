import {createCalendar, deleteCurrentMonth, setDate} from './calendar'
import {listMatchToday} from './listMatch'

let currentLeagueHTML = undefined;
export function getMatchLeague (idLeague, item) {
    let d = new Date(),
        year = d.getFullYear(),
        month = d.getMonth()+1,
        dateToday = d.getDate();
    deleteCurrentMonth()
    createCalendar(month, year, dateToday)
    let dateTodayHTML = document.querySelector('.currentDate');
    setDate(dateTodayHTML, month, dateToday, idLeague, listMatchToday)
    // to active
    if(currentLeagueHTML) currentLeagueHTML.classList.add('active')
    item.classList.add('active')
    currentLeagueHTML = item
    window.scroll(0,0)
}