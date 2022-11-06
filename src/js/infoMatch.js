import getInfoMatch from './getInfoMatch' 
import getStanding from './getStanding'
import addHistory from "./addHistory"
import {loading, stopLoading} from './animation'

let navMatch = undefined,
    container = undefined,
    interval = undefined,
    currentDisplay = undefined;
export default async (isPopState=false, idMatch, toDisplay) => {
    loading()
    let game = [],
        standing = [];
    
    game = await getInfoMatch(idMatch)
    // console.log('game');
    // console.log(game);
    // display game (home vs away)
    displayGame(game)
    navMatch = document.querySelector('.nav-match');
    container = navMatch.nextElementSibling;
    // display moment fort
    displayMoment(game)
    if(toDisplay === "standing") { // raha tiana specifie-na ho classement
        standing = await getStanding(game.league_id)
        displayStanding(isPopState, standing, game.match_id)
    } else if(toDisplay === "stats") {
        getStanding(game.league_id).then((value) => standing = value)
        displayStats(isPopState, game)
    } else {
        getStanding(game.league_id).then((value) => standing = value)
        displayPreGame(isPopState, game)
    }
    stopLoading()

    navMatch.addEventListener('click', (e) => {
        loading()
        // console.log(e.target);
        if(e.target.id === 'standing') {
            loading()
            // display
            displayStanding(isPopState, standing, game.match_id)
            stopLoading()
        }else if(e.target.id === 'stats') {
            loading()
            // display
            displayStats(isPopState, game)
            stopLoading()
        } else {
            loading()
            // display
            displayPreGame(isPopState, game)
            stopLoading()
        }
    })
    // mettre a jour le resultat chaque 60 seconde 
    // interval = setInterval(async () => {
    //     // console.log('maj info');
    //     game = await getInfoMatch(idMatch)
    //     // true : tsy mila enregistre-na anaty historique
    //     if(currentDisplay === "standing") 
    //         displayStanding(true, standing, game.match_id)
    //     else if(toDisplay === "stats")
    //         displayStats(true, game)
    //     else 
    //         displayPreGame(true, game)
    // },60000)
}

export function clearIntervalUpdate() {
    clearInterval(interval)
}

function displayGame(game) {
    let currentElement = document.querySelector('.current-element'),
        hour = '';
    if(game.match_live === '1') 
        hour = isNaN(game.match_status) ? game.match_status : (game.match_status + ' min')
    else
        hour = (game.match_status === 'Postponed') ? 'postponed' : game.match_time
    let gameHTML =
    `<div class="info-match">
        <h3 class="country-league">
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
        <ul class="nav-match">
            <li class="active" id="pregame">Pre-game</li>
            <li id="standing" class="">Standing</li>
            <li id="stats" class="">Stats</li> 
        </ul>
        <div style="padding: 10px;">
            
        </div>
    </div>`
    currentElement.innerHTML = gameHTML
    document.querySelector('#icon-toggle-calendar').style.display = 'none'
}

function displayMoment(game) {
    window.scroll(0,0)
    let moment = [],
        goal = game.goalscorer,
        card = game.cards,
        substitutions = game.substitutions;
    // goal
    for(let element of goal) {
        moment.push({
            time : element.time,
            team : element.home_scorer ? 'home' : 'away',
            type : "goal",
            player : element.home_scorer || element.away_scorer,
            icon : 'assets/img/goal.png'
        })
    }
    // card
    for(let element of card) {
        moment.push({
            time : element.time,
            team : element.home_fault ? 'home' : 'away',
            type : (element.card === 'yellow card') ? "yellow-card" : "red-card",
            player : element.home_fault || element.away_fault,
            icon : (element.card === 'yellow card') ? 'assets/img/yellow-card.png' : 'assets/img/red-card.png'
        })
    }
    // substitution home
    for(let element of substitutions.home) {
        moment.push({
            time : element.time,
            team : 'home',
            type : "substitution",
            player : element.substitution.split(' | ')
        })
    }
    // substitution away
    for(let element of substitutions.away) {
        moment.push({
            time : element.time,
            team : 'away',
            type : "substitution",
            player : element.substitution.split(' | ')
        })
    }
    // sort by time
    moment.sort((a,b) => eval(a.time) - eval(b.time)) // i-eviter-na 45+1, 90+4 reny amle temps additionnel
    // console.log('moment');
    // console.log(moment);

    let momentContainer = document.querySelector('.moment-container');
    let momentHTML = '';
    for(let element of moment) {
        momentHTML += 
        `<div class="moment ${element.team}">
            <span class="time ${element.type}">${element.time}</span>`;
        if(element.type === 'substitution') {
            momentHTML += 
            `<div class="item substitution">
                <span class="in">in: ${element.player[1]}</span>
                <span class="ti ti-reload" id="icon-substitute"></span>
                <span class="out">out: ${element.player[0]}</span>
            </div>`
        } else {
            momentHTML += 
            `<div class="item">
                <img src="${element.icon}" alt="${element.type}">
                <span class="scorer">${element.player}</span>
            </div>`
        }
        momentHTML += 
            `<div class="bar"></div>
        </div>`
    }
    if(moment.length > 0)
        momentHTML += 
        `<!-- voir plus  -->
        <div class="show-more"><span>show more</span></div>`;
    momentContainer.innerHTML = momentHTML;
    let showMore = document.querySelector('.show-more')
    if(showMore) // raha misy
        showMore.addEventListener('click', () => {
            momentContainer.style.height = "auto"
            showMore.style.display = 'none'
        })
}

function displayPreGame(isPopState=false,game) {
    currentDisplay = "pregame"
    // add history
    if(!isPopState) // rehefa popstate de tsy mila mi-ajouter
        addHistory(`game/pregame/${game.match_id}`);
    let home = {
        system : game.match_hometeam_system || "4-3-3",
        lineup : game.lineup.home.starting_lineups,
        coach : (game.lineup.home.coach.length > 0) ? game.lineup.home.coach[0].lineup_player : 'to wait' 
    },
        away = {
            system : game.match_awayteam_system || "4-3-3",
            lineup : game.lineup.away.starting_lineups,
            coach : (game.lineup.away.coach.length > 0) ? game.lineup.away.coach[0].lineup_player : 'to wait' 
    };
    // trier selon le position du joueur
    home.lineup.sort((a,b) => a.lineup_position - b.lineup_position);
    away.lineup.sort((a,b) => a.lineup_position - b.lineup_position);
    let preGameHTML = ``;
    // raha efa misy formation
    if(home.lineup.length > 0) {
        preGameHTML += 
        `<div class="lineup">
            <img src="assets/img/terrain.png" alt="terrain" onerror="this.src = '../../assets/img/terrain.png'">
            <div class="players-container">
                <div class="home">
                    <!-- system  -->
                    <span class="system">${home.system}</span>
                    <div class="row-item">
                        <div class="player">
                            <div class ="icon-player">${home.lineup[0].lineup_number}</div>
                            <span class="player-name">${home.lineup[0].lineup_player}</span>
                            <span class="player-name-resp">${home.lineup[0].lineup_player}</span>
                        </div>
                    </div>`;
                    home.system = home.system.split('-')
                    let currentPosition = 1; // tsy raisina intsony ny gardien
                    // generer la formation
                    for(let row of home.system) {
                        preGameHTML += 
                        `<div class="row-item">`;
                        for(let i=1; i<=row; i++) {
                
                            preGameHTML += 
                            `<div class="player">
                                <div class ="icon-player">${home.lineup[currentPosition].lineup_number}</div>
                                <span class="player-name">${home.lineup[currentPosition].lineup_player}</span>
                                <span class="player-name-resp">${home.lineup[currentPosition].lineup_player}</span>
                            </div>`;
                            currentPosition++;
                        }
                        preGameHTML += `</div>`
                    }
                preGameHTML +=
                `</div>
                <div class="away">
                    <!-- system  -->
                    <span class="system">${away.system}</span>
                    <div class="row-item">
                        <div class="player">
                            <div class ="icon-player">${away.lineup[0].lineup_number}</div>
                            <span class="player-name">${away.lineup[0].lineup_player}</span>
                            <span class="player-name-resp">${away.lineup[0].lineup_player}</span>
                        </div>
                    </div>`;
                    away.system = away.system.split('-')
                    currentPosition = 1; // tsy raisina intsony ny gardien
                    // generer la formation
                    for(let row of away.system) {
                        preGameHTML += 
                        `<div class="row-item">`;
                        for(let i=1; i<=row; i++) {
                            preGameHTML += 
                            `<div class="player">
                                <div class ="icon-player">${away.lineup[currentPosition].lineup_number}</div>
                                <span class="player-name">${away.lineup[currentPosition].lineup_player}</span>
                                <span class="player-name-resp">${away.lineup[currentPosition].lineup_player}</span>
                            </div>`;
                            currentPosition++;
                        }
                        preGameHTML += `</div>`
                    }
                preGameHTML +=
                `</div>
            </div>
        </div>`
    }
    preGameHTML +=
    `<div class="coach-missing">
        <!-- coach  -->
        <div class="coach">
            <div class="team">
                <div class="home">
                    <img src="${game.team_home_badge || "assets/img/logo2.png"}" alt="icon-team">
                    <span class="team-name">${game.match_hometeam_name}</span>
                </div>
                <div class="away">
                    <img src="${game.team_away_badge || "assets/img/logo2.png"}" alt="icon-team">
                    <span class="team-name">${game.match_awayteam_name}</span>
                </div>
            </div>
            <div class="manager">
                <div class="home">
                    <span class="caption">Manager : </span>
                    <span class="manager">${home.coach}</span>
                </div>
                <div class="away">
                    <span class="caption">Manager : </span>
                    <span class="manager">${away.coach}</span>
                </div>
            </div>
        </div>
    </div>
    <!-- end pre-game  -->`
    container.innerHTML = preGameHTML
    // active
    document.querySelector('.info-match .nav-match li.active').classList.remove('active');
    document.querySelectorAll('.info-match .nav-match li')[0].classList.add('active');
}

function displayStanding(isPopState=false ,standing, idMatch) {
    currentDisplay = "standing"
    // add history
    if(!isPopState) // rehefa popstate de tsy mila mi-ajouter
        addHistory(`game/standing/${idMatch}`);
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
            `<tr class="team-container">
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
    container.innerHTML = standingHTML
    // active
    document.querySelector('.info-match .nav-match li.active').classList.remove('active');
    document.querySelectorAll('.info-match .nav-match li')[1].classList.add('active');
}

function displayStats(isPopState=false, game) {
    currentDisplay = "stat"
    // add history
    if(!isPopState) // rehefa popstate de tsy mila mi-ajouter
        addHistory(`game/stats/${game.match_id}`);
    let statistics = game.statistics.reverse();
    let statsHTML = 
    `<div class="statistics">
        <h4>Statistics</h4>`;
        for(let element of statistics) {
            statsHTML += 
            `<div class="row-item">
                <span class="home">${element.home}</span>
                <span class="item">${element.type}</span>
                <span class="away">${element.away}</span>
            </div>`
        }
    statsHTML += 
    `</div>`
    container.innerHTML = statsHTML
    // active
    document.querySelector('.info-match .nav-match li.active').classList.remove('active');
    document.querySelectorAll('.info-match .nav-match li')[2].classList.add('active');
}