export default function (listGame) {
    let matchContainer = document.querySelector('.match-container'),
        matchToRemoved = document.querySelectorAll('.matchs');
    // fafana le match misy eo
    matchToRemoved.forEach(e => e.remove())
    for(let country of listGame) {
        let countryGameHTML = 
        `<div class="matchs">
            <h3>
                <img src="${country.logoCountry}" alt="icon-country">
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
                        <span class="hour-match">${isNaN(game.match_status) ? game.match_status : ((game.match_status + ' min'))}</span>`;
            // finished game
            else if((game.match_status === 'Finished') || (game.match_status === 'After ET') || (game.match_status === 'After Pen.'))
                countryGameHTML += 
                    `<li class="finished" id="${game.match_id}">
                        <span class="hour-match">${game.match_time}</span>`
            // reporte
            else if(game.match_status === 'Postponed')
            countryGameHTML += 
                `<li id="${game.match_id}">
                    <span class="hour-match">postponed</span>`
            else 
                countryGameHTML += 
                    `<li>
                        <span class="hour-match">${game.match_time}</span>`
            countryGameHTML += 
                `<div class="match-item">
                    <div class="home">
                        <img src="${game.team_home_badge || 'assets/img/logo2.png'}" alt="icon-team">
                        <span>${game.match_hometeam_name}</span>
                        <span class="score-home score">${(game.match_hometeam_score.length > 0) ? game.match_hometeam_score : '  '}</span> 
                    </div>
                    <span class="vs">vs</span>
                    <div class="away">
                        <span class="away-home score">${(game.match_awayteam_score.length > 0) ? game.match_awayteam_score : '  '}</span>
                        <img src="${game.team_away_badge || 'assets/img/logo2.png'}" alt="icon-team">
                        <span>${game.match_awayteam_name}</span>
                    </div>
                </div>
            </li>`;
        }
        matchContainer.insertAdjacentHTML('beforeend', countryGameHTML)
    }
}