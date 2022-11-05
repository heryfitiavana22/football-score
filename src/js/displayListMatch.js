import infoMatch from './infoMatch'
import {listMatchToday, listMatchLive, listMatchFinished} from './listMatch'

export default function (listGame) {
    let currentElement = document.querySelector('.current-element');
    
    let countryGameHTML = ``;
    if(listGame.length === 0) {
        countryGameHTML = `<p style="padding-left:15px">No match</p>`
    }
    for(let country of listGame) {
        countryGameHTML += 
        `<div class="matchs">
            <h3>
                <img src="${country.logoCountry}" alt="icon-country" onerror="this.src = 'assets/img/logo2.png'">
                <div class="d-inline">
                    <span class="country">${country.countryName}</span>
                    <span class="league">${country.leagueName}</span>
                </div>
            </h3>
            <ul class="list-match">`;
        for(let game of country.game) {
            // live match
            if(game.match_live === '1') 
                countryGameHTML += 
                `<li class="live" id="${game.match_id}">
                    <span class="hour-match" id="${game.match_id}">${isNaN(game.match_status) ? game.match_status : ((game.match_status + ' min'))}</span>`;
            // match mbola tsy nandeha; finished game and postponed
            else 
            countryGameHTML += 
                `<li id="${game.match_id}">
                    <span class="hour-match" id="${game.match_id}">${(game.match_status === 'Postponed') ? 'postponed' : game.match_time}</span>`
            countryGameHTML += 
                `<div class="match-item" id="${game.match_id}">
                    <div class="home" id="${game.match_id}">
                        <img src="${game.team_home_badge || 'assets/img/logo2.png'}" alt="icon-team" id="${game.match_id}" onerror="this.src = 'assets/img/logo2.png'">
                        <span id="${game.match_id}">${game.match_hometeam_name}</span>
                        <span class="score-home score" id="${game.match_id}">${(game.match_hometeam_score.length > 0) ? game.match_hometeam_score : '  '}</span> 
                    </div>
                    <span class="vs" id="${game.match_id}">vs</span>
                    <div class="away" id="${game.match_id}">
                        <span class="away-home score" id="${game.match_id}">${(game.match_awayteam_score.length > 0) ? game.match_awayteam_score : '  '}</span>
                        <img src="${game.team_away_badge || 'assets/img/logo2.png'}" alt="icon-team" id="${game.match_id}" onerror="this.src = 'assets/img/logo2.png'">
                        <span id="${game.match_id}">${game.match_awayteam_name}</span>
                    </div>
                </div>
            </li>`;
        }
        countryGameHTML += 
        `   </ul>
        </div>`
    }

    let listMatchHTML =
    `<div class="match-container">
        <nav class="navbar-match">
            <ul class="nav-list">
                <li class="active col-4 match-today">Today</li>
                <li class="col-4 match-live">Live</li>
                <li class="col-4 match-finished">Finished</li>
            </ul>
        </nav>
        ${countryGameHTML}
    </div>
    <!-- actual  -->
    <div class="actual">
        <!-- calendar  -->
        <div class="calendar-month">
            <div class="current-month">
                <div class="jump-month left">
                    <div class="jump" onclick="calendar.downMonth();">
                        <span class="ti ti-angle-left"></span>
                    </div>
    
                </div>
                <div class="current-date">
                    date du jour
                </div>
                <div class="jump-month right">
                    <div class="jump" onclick="calendar.upMonth()">
                        <span class="ti ti-angle-right"></span>
                    </div>
                </div>
            </div>
            <div class="day-container">
                <table style="border-collapse: collapse; display: flex;">
                    <tbody style="width: 100%;" class="addDayMonth">
                        <tr class="week">
                            <td>Lun</td>
                            <td>Mar</td>
                            <td>Mer</td>
                            <td>Jeu</td>
                            <td>Ven</td>
                            <td>Sam</td>
                            <td>Dim</td>
                        </tr>
                        <!-- day month here -->
                    </tbody>
                
                </table>
            </div>
        </div>
        <span id="close-calendar" class="ti ti-close close""></span>
    </div>`;
    currentElement.innerHTML = listMatchHTML;
    // event onclick 
    listMatchHTML = document.querySelector('.match-container')
    listMatchHTML.addEventListener('click', (e) => {
        // console.log(e.target.id);
        let idMatch = e.target.id
        if(isNaN(idMatch) || idMatch === '') return; // au cas ou tsy nombre
        infoMatch(false, idMatch)
    })

    /* onclick match today, live, finished */
    document.querySelector('.match-today').addEventListener('click', () => {
        console.log('ati');
        listMatchToday()
    })

    document.querySelector('.match-live').addEventListener('click', () => {
        listMatchLive()
    })

    document.querySelector('.match-finished').addEventListener('click', () => {
        listMatchFinished()
    })

    /* onclick close calendar */
    document.querySelector('#close-calendar').addEventListener('click', () => {
        console.log('closec');
        document.querySelector('.actual').style.top = '-100%'
    })
}