import {loading, stopLoading} from './animation'
import calendar from 'expose-loader?exposes=calendar!./calendar'
import getLeagueMatch from 'expose-loader?exposes=league!./getLeagueMatch'
import checkHistory from './checkHistory'
import addHistory from './addHistory'
import eventListener from './someEventlistener'
import '../css/color.css'
import '../css/style.css'
import '../css/listMatch.css'
import '../css/infoMatch.css'
import '../css/animation.css'

loading()
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