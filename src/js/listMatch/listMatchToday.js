export function listMatchToday() {
    currentItem = listMatchToday;
    loading()
    displayListMatch(gamePerLeague)
    activeInNavBar = document.querySelector('.match-container .nav-list li.active')
    activeInNavBar.classList.remove('active')
    activeInNavBar = document.querySelector('.match-today');
    activeInNavBar.classList.add('active')
    // re-creer le calendrier (eviter queqlue erreur)
    let {currentYear, currentMonth, currentDate} = getCurrentDate()
    deleteCurrentMonth()
    createCalendar(currentMonth, currentYear, currentDate);
    stopLoading()
}