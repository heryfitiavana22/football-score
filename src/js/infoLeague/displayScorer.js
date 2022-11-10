export default (scorer) => {
    let scorerHTML =
    `<table class="standing-container top-scorer">
        <tr class="head-table">
            <td class="player-td">Player</td>
            <td class="team-player">Team</td>
            <td>Goals</td>
            <td>Assists</td>
            <td>Penalty </td>
        </tr>`;
    for(let player of scorer) {
        scorerHTML += 
        `<tr class="item-container">
            <td class="player-td">
                <span class="number">${player.player_place}</span>
                <span class="name">${player.player_name}</span>
            </td>
            <td class="team-player">
                <span class="name">${player.team_name}</span>
            </td>
            <td>${player.goals} <span class="caption-td">goals<span></td>
            <td>${player.assists ? player.assists : 0} <span class="caption-td">assists<span></td>
            <td>${player.penalty_goals ? player.penalty_goals : 0} <span class="caption-td">penalty<span></td>
        </tr>`    
    }
    scorerHTML +=
    `</table>`
    document.querySelector('.current-item').innerHTML = scorerHTML
    document.querySelector('.info-league .active').classList.remove('active')
    document.querySelector('.info-league #scorer').classList.add('active')
    return "scorer"
}