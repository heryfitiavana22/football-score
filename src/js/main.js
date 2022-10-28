
import listLeague from "./listLeague"
import {loading, stopLoading} from './animation'
import {listMatch} from 'expose-loader?exposes=game!./listMatch'
import {createCalendar, getCurrentDate} from 'expose-loader?exposes=calendar!./calendar'
import {getMatchLeague} from 'expose-loader?exposes=league!./getMatchLeague'
import getInfoMatch from 'expose-loader?exposes=info!./getInfoMatch'

let {year,month,currentDate} = getCurrentDate()

loading()
listMatch(new Date())
listLeague()
createCalendar(month,year,currentDate)
 
// stopLoading()
// let intervalListMatch = setInterval(() => {
//     listMatch(new Date())
// }, 10000)