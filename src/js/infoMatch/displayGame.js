import infoLeague from '../infoLeague/infoLeague'
import infoTeam from '../infoTeam/infoTeam'

export default (game) => {
    let currentElement = document.querySelector('.current-element'),
        hour = '',
        awayId = game.match_awayteam_id,
        homeId = game.match_hometeam_id;
    if(game.match_live === '1') 
        hour = isNaN(game.match_status) ? game.match_status : (game.match_status + ' min')
    else
        hour = (game.match_status === 'Postponed') ? 'postponed' : game.match_time
    let gameHTML =
    `<div class="info-match">
        <h3 class="country-league" id="l${game.league_id}">
            <img src="${game.country_logo || "assets/img/logo2.png"}" alt="icon-country" onerror="this.src = 'assets/img/logo2.png'">
            <span class="country">${game.country_name} : </span>
            <span class="league">${game.league_name}</span>
        </h3>
        <div class="match ${(game.match_live == "1") ? 'live' : ''}">
            <div class="home team">
                <img src="${game.team_home_badge || "assets/img/logo2.png"}" alt="icon-team" onerror="this.src = 'assets/img/logo2.png'">
                <span class="team-name">${game.match_hometeam_name}</span>
                <span class="score">${game.match_hometeam_score}</span>
            </div>
            <div class="info">
                <span class="hour-match">${hour}</span>
                <span class="date-match">${game.match_date}</span>
            </div>
            <div class="away team">
                <span class="score">${game.match_awayteam_score}</span>
                <img src="${game.team_away_badge || "assets/img/logo2.png"}" alt="icon-team" onerror="this.src = 'assets/img/logo2.png'">
                <span class="team-name">${game.match_awayteam_name}</span>
            </div>
        </div>
        <!-- moment fort  -->
        <div class="moment-container"></div>
        <ul class="nav-match nav-info">
            <li class="active" id="pregame">Pre-game</li>
            <li id="standing" class="">Standing</li>
            <li id="stats" class="">Stats</li> 
        </ul>
        <div class="current-item">
            
        </div>
    </div>`
    currentElement.innerHTML = gameHTML
    let iconCalendar = document.querySelector('#icon-toggle-calendar')
    if(iconCalendar) iconCalendar.style.visibility = 'hidden' 
    
    let league = document.querySelector('.info-match h3');
    league.addEventListener('click', () => {
        infoLeague(false, league.id)
    })

    document.querySelector('.info-match .home').addEventListener('click', () => {
        infoTeam(false, game.league_id, homeId)
    })

    document.querySelector('.info-match .away').addEventListener('click', () => {
        infoTeam(false, game.league_id, awayId)
    })
}