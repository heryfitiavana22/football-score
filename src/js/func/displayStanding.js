import infoTeam from '../infoTeam/infoTeam'

export default (standing, ...idTeams) => {
    // console.log(idTeams);
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
            `<tr class="item-container ${idTeams.includes(element.team_id) ? 'current-team' : ''}" id="${element.league_id}t${element.team_id}">
                <td class="team" id="${element.league_id}t${element.team_id}">
                    <span class="number" id="${element.league_id}t${element.team_id}">${element.overall_league_position}</span> 
                    <img src="${element.team_badge || 'assets/img/logo2.png'}" alt="icon-team" id="${element.league_id}t${element.team_id}" onerror="this.src = '../../assets/img/logo2.png'">
                    <span class="name" id="${element.league_id}t${element.team_id}">${element.team_name}</span>
                </td>
                <td id="${element.league_id}t${element.team_id}">${element.overall_league_payed}</td>
                <td id="${element.league_id}t${element.team_id}">${element.overall_league_GF}</td>
                <td id="${element.league_id}t${element.team_id}">${element.overall_league_GA}</td>
                <td id="${element.league_id}t${element.team_id}">${element.overall_league_GF - element.overall_league_GA}</td>
                <td id="${element.league_id}t${element.team_id}">${element.overall_league_PTS}</td>
            </tr>`
        }
    standingHTML += `</table>`
    document.querySelector('.current-item').innerHTML = standingHTML
    // active
    document.querySelector('.nav-info li.active').classList.remove('active');
    document.querySelector('#standing').classList.add('active');

    document.querySelector('.standing-container').addEventListener('click', (e) => {
        // console.log(e.target.attributes.class);
        if(e.target.attributes.class.nodeValue.includes("current-team")) return

        let id = e.target.id.split('t');
        if(id.length !== 2) return

        infoTeam(false, ...id)
    })
    return "standing"
}