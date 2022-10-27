
import listLeague from "./listLeague"
import {loading, stopLoading} from './animation'
import {listMatch} from 'expose-loader?exposes=game!./listMatch'
import {createCalendar, getCurrentDate} from 'expose-loader?exposes=calendar!./calendar'

let {year,month,currentDate} = getCurrentDate()

// listMatch(new Date())
createCalendar(month,year,currentDate)
let count = 1;
// let intervalListMatch = setInterval(() => {
//     if(count > 3) {
//         clearInterval(intervalListMatch)
//     }
//     listMatch(new Date())
//     count ++
// }, 10000)
// loading()
stopLoading()
// listLeague()