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

// check mode (light or dark)
let mode = localStorage.getItem('football-score');
if(mode === 'dark') {
    document.querySelector('body').classList.replace('light', 'dark')
    document.querySelector('.mode').innerHTML = '<path fill="none" d="M0 0h24v24H0z"></path><path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z" style="fill: rgb(95, 160, 255);"></path>'
}

window.onpopstate = (e) => {
    loading()
    // console.log('onpopstate');
    // console.log(e);
    checkHistory(true)
    import("./infoMatch/infoMatch").then(module => module.clearIntervalInfoMatch())
    import("./infoLeague/infoLeague").then(module => module.clearIntervalInfoLeague())
    import("./listMatch/listMatch").then(module => module.clearIntervalListMatch())
}

/* logo onclick */
document.querySelector('.nav-bar .logo').addEventListener('click', () => {
    addHistory('')
    checkHistory(false)
})

// stopLoading()