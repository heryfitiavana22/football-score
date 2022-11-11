export default () => {
    let iconCalendar = document.querySelector('#icon-toggle-calendar'),
        iconListLeague = document.querySelector('#icon-toggle-league'),
        closeListLeague = document.querySelector('#close-league');

    let leagueContainer = document.querySelector('.league-container');

    let searchContainer = document.querySelector('.search-container'),
        inputSearch = document.querySelector('#search');

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

    /* search */
    document.querySelector('.search-container').addEventListener('click', () => {
        searchContainer.style.overflow = 'visible'
        inputSearch.style.top = '26px'
    })

    window.onclick = (e) => {
        // console.log(e);
        // hideInputSearch
        if(!e.target.matches('#icon-search') && !e.target.matches('#search') && !e.target.matches('.search-container')) {
            inputSearch.style.top = '-29px'
            setTimeout(() => {searchContainer.style.overflow = 'hidden'},200)
        }
    }
}