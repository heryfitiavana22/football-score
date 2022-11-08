export default (logo, teamName) => {
    let infoTeamHTML =
    `<div class="info-team info">
        <div class="country-league">
            <div class="league">
                <img src="${logo}" alt="icon-league" onerror="this.src='assets/img/logo2.png'">
                <div>
                    <span class="name">${teamName}</span>
                </div>
            </div>
        </div>
        <ul class="nav-team nav-info">
            <li id="players" class="active">Players</li>
            <li id="calendar">Calendar</li> 
            <li id="results">Results</li>
            <li id="standing">Standing</li> 
            <li id="stats">Stats</li>
        </ul>
        <div class="current-item">
            
        </div>
    </div>`;
    document.querySelector('.current-element').innerHTML = infoTeamHTML

    let iconCalendar = document.querySelector('#icon-toggle-calendar')
    if(iconCalendar) iconCalendar.style.visibility = 'hidden' 
}