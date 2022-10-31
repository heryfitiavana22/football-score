import getInfoMatch from './getInfoMatch' 
import addHistory from "./addHistory"
import {loading, stopLoading} from './animation'

let navMatch = undefined,
    container = undefined;
export default async (idMatch) => {
    loading()
    let game = [];
    // addHistory(`game/${idMatch}`);
    game = await getInfoMatch(idMatch)
    console.log('game');
    console.log(game);
    displayGame(game)
    navMatch = document.querySelector('.nav-match');
    container = navMatch.nextElementSibling;
    displayMoment(game)
    displayPreGame()
    stopLoading()

    navMatch.addEventListener('click', (e) => {
        loading()
        // console.log(e.target.id);
        if(e.target.id === 'standing') {
            loading()
            displayStanding()
            stopLoading()
        }else if(e.target.id === 'stats') {
            loading()
            displayStats()
            stopLoading()
        } else {
            loading()
            displayPreGame()
            stopLoading()
        }
    })
}


function displayGame(game) {
    let infoMatchHTML = document.querySelector('.info-match');
    if(infoMatchHTML) return // au cas ou efa misy, ohatra oe voatsindry indroa
    let gameHTML =
    `<div class="info-match finished">
        <h3 class="country-league">
            <img src="${game.country_logo || "assets/img/logo2.png"}" alt="icon-country">
            <span class="country">${game.country_name} : </span>
            <span class="league">${game.league_name}</span>
        </h3>
        <div class="match">
            <div class="home team">
                <img src="${game.team_home_badge || "assets/img/logo2.png"}" alt="icon-team">
                <span class="team-name">${game.match_hometeam_name}</span>
                <span class="score">${game.match_hometeam_score}</span>
            </div>
            <div class="info">
                <span class="hour-match">${game.match_time}</span>
                <span class="date-match">${game.match_date}</span>
                <!-- <span class="vs">vs</span> -->
            </div>
            <div class="away team">
                <span class="score">${game.match_awayteam_score}</span>
                <img src="${game.team_away_badge || "assets/img/logo2.png"}" alt="icon-team">
                <span class="team-name">${game.match_awayteam_name}</span>
            </div>
        </div>
        <!-- moment fort  -->
        <div class="moment-container"></div>
        <ul class="nav-match">
            <li class="active" id="pregame">Pre-game</li>
            <li id="standing">Standing</li>
            <li id="stats">Stats</li> 
        </ul>
        <div style="padding: 10px;">
            
        </div>
    </div>`
    document.querySelector('.content').insertAdjacentHTML('beforeend', gameHTML)
}

function displayMoment(game) {
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
    moment.sort((a,b) => a.time - b.time)
    console.log('moment');
    console.log(moment);

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
    momentHTML += 
        `<!-- voir plus  -->
        <div class="show-more"><span>show more</span></div>`;
    momentContainer.innerHTML = momentHTML;
    document.querySelector('.show-more').addEventListener('click', () => {
        momentContainer.style.height = "auto"
    })
}

function displayPreGame(preGame) {
    let prgeGameHTML = 
    `<div class="lineup">
        <img src="assets/img/terrain.png" alt="terrain">
        <div class="players-container">
            <div class="home">
                <!-- system  -->
                <span class="system">4-1-4-1</span>
                <div class="row-item">
                    <div class="player">
                        <img src="assets/img/p1.png" alt="icon-player">
                        <span class="player-name">Fitiavana Fitiavana Fitiavana</span>
                    </div>
                </div>
            </div>
            <div class="away">
                <!-- system  -->
                <span class="system">4-3-3-3</span>
            </div>
            </div>
    </div>
    <div class="coach-missing">
        <!-- coach  -->
        <div class="coach">
            <div class="team">
                <div class="home">
                    <img src="assets/img/logo2.png" alt="icon-team">
                    <span class="team-name">Home home</span>
                </div>
                <div class="away">
                    <img src="assets/img/logo2.png" alt="icon-team">
                    <span class="team-name">Home</span>
                </div>
            </div>
            <div class="manager">
                <div class="home">
                    <span class="caption">Manager : </span>
                    <span class="manager">Hery dj</span>
                </div>
                <div class="away">
                    <span class="caption">Manager : </span>
                    <span class="manager">Hery dj</span>
                </div>
            </div>
        </div>
    </div>
    <!-- end pre-game  -->`
    container.innerHTML = prgeGameHTML
}

function displayStanding(standing) {
    let standingHTML =
    `<table class="standing-container">
        <tr class="head-table">
            <td class="team">Team</td>
            <td>P</td>
            <td>GF</td>
            <td>GA</td>
            <td>GD</td>
            <td>Pts</td>
        </tr>
        <tr class="team-container">
            <td class="team">
                <span class="number">1</span> 
                <img src="assets/img/logo2.png" alt="icon-team">
                <span class="name">Real Madrid</span>
            </td>
            <td>0</td>
            <td>100</td>
            <td>0</td>
            <td>0</td>
            <td>100</td>
        </tr>
        <tr class="team-container">
            <td class="team">
                <span class="number">1</span> 
                <img src="assets/img/logo2.png" alt="icon-team">
                <span class="name">Real Madrid</span>
            </td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
        </tr>
    </table>`
    container.innerHTML = standingHTML
}

function displayStats(stats) {
    let statsHTML = 
    `<div class="statistics">
        <h4>Statistics</h4>
        <div class="row-item">
            <span class="home">50%</span>
            <span class="item">ball possession</span>
            <span class="away">50%</span>
        </div>
        <div class="row-item">
            <span class="home">1</span>
            <span class="item">shots</span>
            <span class="away">5</span>
        </div>
    </div>`
    container.innerHTML = statsHTML
}