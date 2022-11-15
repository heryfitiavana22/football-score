export default () => {
    let iconCalendar = document.querySelector('#icon-toggle-calendar'),
        iconListLeague = document.querySelector('#icon-toggle-league'),
        closeListLeague = document.querySelector('#close-league');

    let leagueContainer = document.querySelector('.league-container');

    /* icon calendar */
    iconCalendar.addEventListener('click', () => {
        document.querySelector('.actual').style.top = '0'
    })

    /* icon listLeague */
    iconListLeague.addEventListener('click', () => {
        leagueContainer.style.left = '0'
        leagueContainer.scroll(0,0)
        document.querySelector('.current-element').style.display = 'none' // eviter queqlue bug
    })

    closeListLeague.addEventListener('click', () => {
        leagueContainer.style.left = '-100%'
        document.querySelector('.current-element').style.display = 'block'
    })

    /* mode (light, dark) */
    let svgMode = document.querySelector('.mode'),
        body = document.querySelector('body');
    svgMode.addEventListener('click', () => {
        if(body.className.includes('light')) {
            body.classList.replace('light', 'dark')
            svgMode.innerHTML = '<path fill="none" d="M0 0h24v24H0z"></path><path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z" style="fill: rgb(95, 160, 255);"></path>'
            localStorage.removeItem('football-score');
            localStorage.setItem('football-score', 'dark')
        } else {
            body.classList.replace('dark', 'light')
            svgMode.innerHTML = '<path fill="none" d="M0 0h24v24H0z"></path><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58a.996.996 0 0 0-1.41 0 .996.996 0 0 0 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37a.996.996 0 0 0-1.41 0 .996.996 0 0 0 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0a.996.996 0 0 0 0-1.41l-1.06-1.06zm1.06-10.96a.996.996 0 0 0 0-1.41.996.996 0 0 0-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36a.996.996 0 0 0 0-1.41.996.996 0 0 0-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z" style="fill: rgb(95, 160, 255);"></path>'
            localStorage.removeItem('football-score');
            localStorage.setItem('football-score', 'light')
        }
    })
}