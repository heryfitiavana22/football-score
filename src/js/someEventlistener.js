export default () => {
    let iconCalendar = document.querySelector('#icon-toggle-calendar'),
        iconListLeague = document.querySelector('#icon-toggle-league'),
        closeCalendar = document.querySelector('#close-calendar'),
        closeListLeague = document.querySelector('#close-league');

    let leagueContainer = document.querySelector('.league-container'),
        matchContainer = document.querySelector('.match-container');

    /* icon calendar */
    console.log(closeCalendar);
    iconCalendar.addEventListener('click', () => {
        document.querySelector('.actual').style.top = '0'
    })

    closeCalendar.addEventListener('click', () => {
        console.log('closec');
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
}