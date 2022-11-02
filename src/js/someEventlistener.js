import getLeagueMatch from './getLeagueMatch'
export default () => {
    let iconCalendar = document.querySelector('#icon-toggle-calendar'),
        iconListLeague = document.querySelector('#icon-toggle-league'),
        closeCalendar = document.querySelector('#close-calendar'),
        closeListLeague = document.querySelector('#close-league');

    let leagueContainer = document.querySelector('.league-container'),
        matchContainer = document.querySelector('.match-container');

    /* icon calendar */
    iconCalendar.addEventListener('click', () => {
        document.querySelector('.actual').style.top = '0'
    })

    closeCalendar.addEventListener('click', () => {
        document.querySelector('.actual').style.top = '-100%'
    })

    /* icon listLeague */
    iconListLeague.addEventListener('click', () => {
        leagueContainer.style.left = '0'
        matchContainer.style.display = 'none' // eviter queqlue bug
    })

    closeListLeague.addEventListener('click', () => {
        leagueContainer.style.left = '-100%'
        matchContainer.style.display = 'block'
    })

    /* getLeagueMatch */
    document.querySelector('.list-league').addEventListener('click', (e) => {
        // getLeagueMatch(e.target.id)
        console.log(e.target);
        // e.target
    })
}