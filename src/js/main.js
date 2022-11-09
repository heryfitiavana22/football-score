import {loading, stopLoading} from './others/animation'
import calendar from 'expose-loader?exposes=calendar!./calendar/calendar'
import getLeagueMatch from 'expose-loader?exposes=league!./league/getLeagueMatch'
import checkHistory from './history/checkHistory'
import addHistory from './history/addHistory'
import eventListener from './others/someEventlistener'
import '../css/color.css'
import '../css/style.css'
import '../css/listMatch.css'
import '../css/infoMatch.css'
import '../css/infoLeague.css'
import '../css/infoTeam.css'
import '../css/animation.css'

loading()
// stopLoading()
eventListener() // onclick sy ny namany
checkHistory(false) // false satria pushstate 

window.onpopstate = (e) => {
    // console.log('onpopstate');
    // console.log(e);
    checkHistory(true)
}

/* logo onclick */
document.querySelector('.nav-bar .logo').addEventListener('click', () => {
    addHistory('')
    checkHistory(false)
})

// stopLoading()