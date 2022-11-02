
import listLeague from "./listLeague"
import {loading, stopLoading} from './animation'
import {listMatch} from 'expose-loader?exposes=game!./listMatch'
import {createCalendar, getCurrentDate} from 'expose-loader?exposes=calendar!./calendar'
import {getLeagueMatch} from 'expose-loader?exposes=league!./getLeagueMatch'
import checkHistory from './checkHistory'

checkHistory(false) // false satria pushstate 

window.onpopstate = (e) => {
    console.log('onpopstate');
    console.log(e);
    checkHistory(true)
}

// stopLoading()

let iconCalendar = document.querySelector('#icon-toggle-calendar'),
    iconListLeague = document.querySelector('#icon-toggle-league'),
    closeCalendar = document.querySelector('#close-calendar'),
    closeListLeague = document.querySelector('#close-league');

let leagueContainer = document.querySelector('.league-container'),
    matchContainer = document.querySelector('.match-container');

/* calendar */
iconCalendar.addEventListener('click', () => {
    document.querySelector('.actual').style.top = '0'
})

closeCalendar.addEventListener('click', () => {
    document.querySelector('.actual').style.top = '-100%'
})

/* listLeague */
iconListLeague.addEventListener('click', () => {
    leagueContainer.style.left = '0'
    matchContainer.style.display = 'none' // eviter queqlue bug
})

closeListLeague.addEventListener('click', () => {
    leagueContainer.style.left = '-100%'
    matchContainer.style.display = 'block'
})