export default (standing, ...idTeams) => {
    // console.log(idTeams);
    let standingHTML =
    `<table class="standing-container">
        <tr class="head-table">
            <td class="team">Team</td>
            <td>P <span class="caption-td">played<span></td>
            <td>GF <span class="caption-td">goal for<span></td>
            <td>GA <span class="caption-td">goal against<span></td>
            <td>GD <span class="caption-td gd">goal difference<span></td>
            <td>Pts <span class="caption-td">points<span></td>
        </tr>`;
        if(standing.length === 0)
            standingHTML +=  `<tr class="item-container" style="padding-left:15px"><td style="width: 100% !important">to wait after 1 min or not given</td></tr>`
        for(let element of standing) {
            standingHTML += 
            `<tr class="item-container ${idTeams.includes(element.team_id) ? 'current-team' : ''}" id="${element.league_id}t${element.team_id}">
                <td class="team" id="${element.league_id}t${element.team_id}">
                    <span class="number" id="${element.league_id}t${element.team_id}">${element.overall_league_position}</span> 
                    <img src="${element.team_badge || 'assets/img/logo2.png'}" alt="icon-team" id="${element.league_id}t${element.team_id}" onerror="this.src = '../../assets/img/logo2.png'">
                    <span class="name" id="${element.league_id}t${element.team_id}">${element.team_name}</span>
                </td>
                <td id="${element.league_id}t${element.team_id}">
                    ${element.overall_league_payed} 
                    <span class="caption-td">played<span>
                </td>
                <td id="${element.league_id}t${element.team_id}">
                    ${element.overall_league_GF}
                    <span class="caption-td">goal for<span>
                </td>
                <td id="${element.league_id}t${element.team_id}">
                    ${element.overall_league_GA}
                    <span class="caption-td">goal against<span>
                </td>
                <td id="${element.league_id}t${element.team_id}">
                    ${element.overall_league_GF - element.overall_league_GA}
                    <span class="caption-td gd">goal difference<span>
                </td>
                <td id="${element.league_id}t${element.team_id}">
                    ${element.overall_league_PTS}
                    <span class="caption-td">points<span>
                </td>
            </tr>`
        }
    standingHTML += `</table>`
    document.querySelector('.current-item').innerHTML = standingHTML
    // active
    document.querySelector('.nav-info li.active').classList.remove('active');
    document.querySelector('#standing').classList.add('active');

    document.querySelector('.standing-container').addEventListener('click', async (e) => {
        let className = e.target.attributes.class;
        if(className && className.nodeValue.includes("current-team")) return


        let id = e.target.id.split('t');
        if(id.length !== 2) return
        let infoTeam = await import('../infoTeam/infoTeam')
        infoTeam.default(false, ...id)
    })
    return "standing"
}