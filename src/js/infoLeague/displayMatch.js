import infoMatch from '../infoMatch/infoMatch'

export default (game, idHTML) => {
    // console.log(idHTML);
    // console.log(game);
    let listGameHTML =
    `<div class="listMatch">`;
    if(game.length === 0)
        listGameHTML +=  `<p style="padding-left:15px">to wait</p>`
    for(let date of game) {
        listGameHTML +=
        `<div class="matchs">
            <h3>${date.date}</h3>
            <ul class="list-match">`;
            for(let match of date.game) {
                // live match
                if(match.match_live === '1') 
                listGameHTML += 
                `<li class="live" id="${match.match_id}">
                    <span class="hour-match" id="${match.match_id}">${isNaN(match.match_status) ? match.match_status : ((match.match_status + ' min'))}</span>`;
                // match mbola tsy nandeha; finished game and postponed
                else 
                listGameHTML += 
                `<li id="${match.match_id}">
                    <span class="hour-match" id="${match.match_id}">${(match.match_status === 'Postponed') ? 'postponed' : match.match_time}</span>`
                listGameHTML += 
                    `<div class="match-item" id="${match.match_id}">
                        <div class="home" id="${match.match_id}">
                            <img src="${match.team_home_badge || 'assets/img/logo2.png'}" alt="icon-team" id="${match.match_id}" onerror="this.src = 'assets/img/logo2.png'">
                            <span id="${match.match_id}">${match.match_hometeam_name}</span>
                            <span class="score-home score" id="${match.match_id}">${(match.match_hometeam_score.length > 0) ? match.match_hometeam_score : '  '}</span> 
                        </div>
                        <span class="vs" id="${match.match_id}">vs</span>
                        <div class="away" id="${match.match_id}">
                            <span class="away-home score" id="${match.match_id}">${(match.match_awayteam_score.length > 0) ? match.match_awayteam_score : '  '}</span>
                            <img src="${match.team_away_badge || 'assets/img/logo2.png'}" alt="icon-team" id="${match.match_id}" onerror="this.src = 'assets/img/logo2.png'">
                            <span id="${match.match_id}">${match.match_awayteam_name}</span>
                        </div>
                    </div>
                </li>`;
            }
            `</ul>
        </div>`
    }
    listGameHTML +=
    `</div>`;
    document.querySelector('.current-item').innerHTML = listGameHTML
    document.querySelector('.info-league .active').classList.remove('active')
    document.querySelector('.info-league #'+idHTML).classList.add('active')
    /* onclick match */
    document.querySelector('.listMatch').addEventListener('click', (e) => {
        let id = e.target.id
        if(isNaN(id) || id === '') 
            return; // au cas ou tsy nombre
        infoMatch(false, id)
    })
    return idHTML;
};
