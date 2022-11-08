export default (standing, ...idTeams) => {
    console.log(idTeams);
    let standingHTML =
    `<table class="standing-container">
        <tr class="head-table">
            <td class="team">Team</td>
            <td>P <span>played<span></td>
            <td>GF <span>goal for<span></td>
            <td>GA <span>goal against<span></td>
            <td>GD <span>goal difference<span></td>
            <td>Pts <span>points<span></td>
        </tr>`;
        for(let element of standing) {
            standingHTML += 
            `<tr class="item-container ${idTeams.includes(element.team_id) ? 'current-team' : ''}">
                <td class="team">
                    <span class="number">${element.overall_league_position}</span> 
                    <img src="${element.team_badge || 'assets/img/logo2.png'}" alt="icon-team" onerror="this.src = '../../assets/img/logo2.png'">
                    <span class="name">${element.team_name}</span>
                </td>
                <td>${element.overall_league_payed}</td>
                <td>${element.overall_league_GF}</td>
                <td>${element.overall_league_GA}</td>
                <td>${element.overall_league_GF - element.overall_league_GA}</td>
                <td>${element.overall_league_PTS}</td>
            </tr>`
        }
    standingHTML += `</table>`
    document.querySelector('.current-item').innerHTML = standingHTML
    // active
    document.querySelector('.nav-info li.active').classList.remove('active');
    document.querySelector('#standing').classList.add('active');
    return "standing"
}