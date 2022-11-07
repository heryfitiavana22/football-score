export default (league) => {
    let currentElement = document.querySelector('.current-element');
    let infoLeague =
    `<div class="info-league">
        <div class="country-league">
            <div class="country">
                <img src="${league.country_logo}" alt="icon-country" onerror="this.src = 'assets/img/logo2.png'">
                <span>${league.country_name}</span>
            </div>
            <div class="league">
                <img src="${league.league_logo}" alt="icon-league" onerror="this.src = 'assets/img/logo2.png'">
                <div>
                    <span class="name">${league.league_name}</span>
                    <span class="season">${league.league_season}</span>
                </div>
            </div>
        </div>
        <ul class="nav-league nav-info">
            <li class="active" id="standing">Standing</li> 
            <li id="calendar">Calendar</li>
            <li id="result">Results</li>
            <li id="scorer">Scorer</li> 
        </ul>
        <div class="current-item">
            
        </div>
    </div>`;
    currentElement.innerHTML = infoLeague;
    let iconCalendar = document.querySelector('#icon-toggle-calendar')
    if(iconCalendar) iconCalendar.style.visibility = 'hidden' 
}