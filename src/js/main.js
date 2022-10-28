
import listLeague from "./listLeague"
import {loading, stopLoading} from './animation'
import {listMatch} from 'expose-loader?exposes=game!./listMatch'
import {createCalendar, getCurrentDate} from 'expose-loader?exposes=calendar!./calendar'

let {year,month,currentDate} = getCurrentDate()

listMatch(new Date())
listLeague()
createCalendar(month,year,currentDate)
loading()
let a =0; 
// stopLoading()
// let intervalListMatch = setInterval(() => {
//     listMatch(new Date())
// }, 10000)