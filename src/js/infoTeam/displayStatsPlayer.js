export default (players) => {
    let statsHTML =
    `<ul class="nav-stats">
        <li id="default" class="active">default</li>
        <li id="dribble">dribble</li>
        <li id="passes">passes</li>
        <li id="tackles">tackles</li>
        <li id="duels">duels</li>
        <li id="goal">goal</li>
    </ul>
    <table class="standing-container stats-player">
        <tr class="head-table">
            <td class="player-table">Player</td>
            <td>P <span>played<span></td>
            <td>age</td>
            <td><img src="assets/img/goal.png" alt="goal" onerror="this.src='assets/img/goal.png'"> <span>goal<span></td>
            <td><img src="assets/img/l.png" alt="assists" onerror="this.src='assets/img/l.png'"> <span>assists<span></td>
            <td><img src="assets/img/yellow-card.png" alt="yellow-card" onerror="this.src='assets/img/yellow-card.png'"> <span>yellow card<span></td>
            <td><img src="assets/img/red-card.png" alt="red-card" onerror="this.src='assets/img/red-card.png'"> <span>red card<span></td>
            <td><img src="assets/img/injury.png" alt="injury-card" onerror="this.src='assets/img/injury.png'"> <span>injury<span></td>
        </tr>`;
    for(let element of players) { // satria le izy filtrer par place (milieu, attaquant, ...)
        for(let p of element.players) {
            statsHTML +=
            `<tr class="tr-player">
                <td class="player-table">
                    <span class="number">${p.player_number}</span> 
                    <span>${p.player_name}</span>
                </td>
                <td>${p.player_match_played}</td>
                <td>${p.player_age}</td>
                <td>${p.player_goals}</td>
                <td>${p.player_assists}</td>
                <td>${p.player_yellow_cards}</td>
                <td>${p.player_red_cards}</td>
                <td>${(p.player_injured === "No" ? "" : "yes")}</td>
            </tr>`
        }
    }
    statsHTML +=
    `</table>`
        
    document.querySelector('.current-item').innerHTML = statsHTML
    document.querySelector('.nav-team li.active').classList.remove('active')
    document.querySelector('#stats').classList.add('active');

    document.querySelector('.nav-stats').addEventListener('click', (e) => {
        let id = e.target.id,
            headTr = document.querySelector('.head-table'),
            tr = document.querySelectorAll('.tr-player');
        if(id === "dribble") displayDribble(players, headTr, tr)
        else if(id === "passes") displayPasses(players, headTr, tr)
        else if(id === "tackles") displayTackles(players, headTr, tr)
        else if(id === "duels") displayDuels(players, headTr, tr)
        else if(id === "goal") displayGoal(players, headTr, tr)
        else displayDefault(players, headTr, tr)
    })
}

function displayDefault(players, headTr, tr) {
    let i=0;
    headTr.innerHTML = 
    `<td class="player-table">Player</td>
    <td>P <span>played<span></td>
    <td>age</td>
    <td><img src="assets/img/goal.png" alt="goal" onerror="this.src='assets/img/goal.png'"> <span>goal<span></td>
    <td><img src="assets/img/l.png" alt="assists" onerror="this.src='assets/img/l.png'"> <span>assists<span></td>
    <td><img src="assets/img/yellow-card.png" alt="yellow-card" onerror="this.src='assets/img/yellow-card.png'"> <span>yellow card<span></td>
    <td><img src="assets/img/red-card.png" alt="red-card" onerror="this.src='assets/img/red-card.png'"> <span>red card<span></td>
    <td><img src="assets/img/injury.png" alt="injury-card" onerror="this.src='assets/img/injury.png'"> <span>injury<span></td>`;
    
    for(let element of players) { // satria le izy filtrer par place (milieu, attaquant, ...)
        for(let p of element.players) {
            tr[i].innerHTML = 
            `<td class="player-table">
                <span class="number">${p.player_number}</span> 
                <span>${p.player_name}</span>
            </td>
            <td>${p.player_match_played}</td>
            <td>${p.player_age}</td>
            <td>${p.player_goals}</td>
            <td>${p.player_assists}</td>
            <td>${p.player_yellow_cards}</td>
            <td>${p.player_red_cards}</td>
            <td>${(p.player_injured === "No" ? "" : "yes")}</td>`;
            i++;
        }
    }
    document.querySelector('.nav-stats .active').classList.remove('active')
    document.querySelector('#default').classList.add('active')
}

function displayDribble(players, headTr, tr) {
    let i=0;
    headTr.innerHTML = 
    `<td class="player-table">Player</td>
    <td>P <span>played<span></td>
    <td>age</td>
    <td><img src="assets/img/goal.png" alt="goal" onerror="this.src='assets/img/goal.png'"> <span>goal<span></td>
    <td><img src="assets/img/l.png" alt="assists" onerror="this.src='assets/img/l.png'"> <span>assists<span></td>
    <td>DA <span>dribble attempts<span></td>
    <td>DS <span>dribble succeed<span></td>
    <td>shots</td>`    
    for(let element of players) { // satria le izy filtrer par place (milieu, attaquant, ...)
        for(let p of element.players) {
            tr[i].innerHTML = 
            `<td class="player-table">
                <span class="number">${p.player_number}</span> 
                <span>${p.player_name}</span>
            </td>
            <td>${p.player_match_played}</td>
            <td>${p.player_age}</td>
            <td>${p.player_goals}</td>
            <td>${p.player_assists}</td>
            <td>${p.player_dribble_attempts}</td>
            <td>${p.player_dribble_succ}</td>
            <td>${p.player_shots_total}</td>`;
            i++;
        }
    }
    document.querySelector('.nav-stats .active').classList.remove('active')
    document.querySelector('#dribble').classList.add('active')
}

function displayPasses(players, headTr, tr) {
    let i=0;
    headTr.innerHTML = 
    `<td class="player-table">Player</td>
    <td>P <span>played<span></td>
    <td>age</td>
    <td><img src="assets/img/l.png" alt="assists" onerror="this.src='assets/img/l.png'"> <span>assists<span></td>
    <td>TP <span>total passes<span></td>
    <td>PA <span>passes accuracy<span></td>
    <td>KP<span>key passes<span></td>
    <td><img src="assets/img/injury.png" alt="injury-card" onerror="this.src='assets/img/injury.png'"> <span>injury<span></td>`
    
    for(let element of players) { // satria le izy filtrer par place (milieu, attaquant, ...)
        for(let p of element.players) {
            tr[i].innerHTML = 
            `<td class="player-table">
                <span class="number">${p.player_number}</span> 
                <span>${p.player_name}</span>
            </td>
            <td>${p.player_match_played}</td>
            <td>${p.player_age}</td>
            <td>${p.player_assists}</td>
            <td>${p.player_passes}</td>
            <td>${p.player_passes_accuracy}</td>
            <td>${p.player_key_passes}</td>
            <td>${(p.player_injured === "No" ? "" : "yes")}</td>`;
            i++;
        }
    }
    document.querySelector('.nav-stats .active').classList.remove('active')
    document.querySelector('#passes').classList.add('active')
}

function displayTackles(players, headTr, tr) {
    let i=0;
    headTr.innerHTML = 
    `<td class="player-table">Player</td>
    <td>P <span>played<span></td>
    <td>tackles</td>
    <td>INT <span>interceptions<span></td>
    <td>F <span>fouls<span></td>
    <td><img src="assets/img/yellow-card.png" alt="yellow-card" onerror="this.src='assets/img/yellow-card.png'"> <span>yellow card<span></td>
    <td><img src="assets/img/red-card.png" alt="red-card" onerror="this.src='assets/img/red-card.png'"> <span>red card<span></td>
    <td><img src="assets/img/injury.png" alt="injury-card" onerror="this.src='assets/img/injury.png'"> <span>injury<span></td>`
    
    for(let element of players) { // satria le izy filtrer par place (milieu, attaquant, ...)
        for(let p of element.players) {
            tr[i].innerHTML = 
            `<td class="player-table">
                <span class="number">${p.player_number}</span> 
                <span>${p.player_name}</span>
            </td>
            <td>${p.player_match_played}</td>
            <td>${p.player_tackles}</td>
            <td>${p.player_interceptions}</td>
            <td>${p.player_fouls_committed}</td>
            <td>${p.player_yellow_cards}</td>
            <td>${p.player_red_cards}</td>
            <td>${(p.player_injured === "No" ? "" : "yes")}</td>`;
            i++;
        }
    }
    document.querySelector('.nav-stats .active').classList.remove('active')
    document.querySelector('#tackles').classList.add('active')
}

function displayDuels(players, headTr, tr) {
    let i=0;
    headTr.innerHTML = 
    `<td class="player-table">Player</td>
    <td>P <span>played<span></td>
    <td>age</td>
    <td>DT <span>duels total<span></td>
    <td>DW <span>duels won<span></td>
    <td><img src="assets/img/yellow-card.png" alt="yellow-card" onerror="this.src='assets/img/yellow-card.png'"> <span>yellow card<span></td>
    <td><img src="assets/img/red-card.png" alt="red-card" onerror="this.src='assets/img/red-card.png'"> <span>red card<span></td>
    <td><img src="assets/img/injury.png" alt="injury-card" onerror="this.src='assets/img/injury.png'"> <span>injury<span></td>`
    
    for(let element of players) { // satria le izy filtrer par place (milieu, attaquant, ...)
        for(let p of element.players) {
            tr[i].innerHTML = 
            `<td class="player-table">
                <span class="number">${p.player_number}</span> 
                <span>${p.player_name}</span>
            </td>
            <td>${p.player_match_played}</td>
            <td>${p.player_age}</td>
            <td>${p.player_duels_total}</td>
            <td>${p.player_duels_won}</td>
            <td>${p.player_yellow_cards}</td>
            <td>${p.player_red_cards}</td>
            <td>${(p.player_injured === "No" ? "" : "yes")}</td>`;
            i++;
        }
    }
    document.querySelector('.nav-stats .active').classList.remove('active')
    document.querySelector('#duels').classList.add('active')
}

function displayGoal(players, headTr, tr) {
    let i=0;
    headTr.innerHTML = 
    `<td class="player-table">Player</td>
    <td>P <span>played<span></td>
    <td>age</td>
    <td>GC<span>goal conceded<span></td>
    <td>saves</td>
    <td><img src="assets/img/yellow-card.png" alt="yellow-card" onerror="this.src='assets/img/yellow-card.png'"> <span>yellow card<span></td>
    <td><img src="assets/img/red-card.png" alt="red-card" onerror="this.src='assets/img/red-card.png'"> <span>red card<span></td>
    <td><img src="assets/img/injury.png" alt="injury-card" onerror="this.src='assets/img/injury.png'"> <span>injury<span></td>`;
    
    for(let element of players) { // satria le izy filtrer par place (milieu, attaquant, ...)
        for(let p of element.players) {
            tr[i].innerHTML = 
            `<td class="player-table">
                <span class="number">${p.player_number}</span> 
                <span>${p.player_name}</span>
            </td>
            <td>${p.player_match_played}</td>
            <td>${p.player_age}</td>
            <td>${(p.player_goals_conceded == 0 || p.player_goals_conceded === "") ? '' : p.player_goals_conceded}</td>
            <td>${p.player_saves ? p.player_saves : ''}</td>
            <td>${p.player_yellow_cards}</td>
            <td>${p.player_red_cards}</td>
            <td>${(p.player_injured === "No" ? "" : "yes")}</td>`;
            i++;
        }
    }
    document.querySelector('.nav-stats .active').classList.remove('active')
    document.querySelector('#goal').classList.add('active')
}