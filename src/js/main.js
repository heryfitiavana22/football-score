
import listLeague from "./listLeague"
import {loading, stopLoading} from './animation'
import {listMatch} from 'expose-loader?exposes=game!./listMatch'
import {createCalendar, getCurrentDate} from 'expose-loader?exposes=calendar!./calendar'
import {getLeagueMatch} from 'expose-loader?exposes=league!./getLeagueMatch'

loading()
listMatch(new Date())
listLeague()

// stopLoading()
// let intervalListMatch = setInterval(() => {
//     listMatch(new Date())
// }, 10000)