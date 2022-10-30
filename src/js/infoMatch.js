import getInfoMatch from './getInfoMatch' 
import addHistory from "./addHistory"
import {loading, stopLoading} from './animation'

let navMatch = undefined,
    container = undefined;
export default async (idMatch) => {
    loading()
    let game = [];
        
    // addHistory(`game/${idMatch}`);
    // effacer le contenu courant
    let matchContainer = document.querySelector('.match-container'),
        actual = document.querySelector('.actual');
    matchContainer.remove();
    actual.remove()
    
    game = await getInfoMatch(idMatch)
    displayGame()
    navMatch = document.querySelector('.nav-match');
    container = navMatch.nextElementSibling;
    displayMoment()
    displayPreGame()

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
    let gameHTML =
    `<div class="match-container finished">
        <h3 class="country-league">
            <img src="assets/img/logo2.png" alt="icon-country">
            <span class="country">Espagne : </span>
            <span class="league">La liga</span>
        </h3>
        <div class="match">
            <div class="home team">
                <img src="assets/img/logo2.png" alt="icon-team">
                <span class="team-name">Manchester city u19 </span>
                <span class="score">1</span>
            </div>
            <div class="info">
                <span class="hour-match">22:00</span>
                <span class="date-match">28-10-2022</span>
                <!-- <span class="vs">vs</span> -->
            </div>
            <div class="away team">
                <span class="score">1</span>
                <img src="assets/img/logo2.png" alt="icon-team">
                <span class="team-name">Home</span>
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

function displayMoment(moment) {
    let momentContainer = document.querySelector('.moment-container');
    let momentHTML = 
    `<!-- substitution -->
    <div class="moment home">
        <span class="time">10
        </span>
        <div class="item substitution">
            <span class="in">in: Hery</span>
            <span class="ti ti-reload" id="icon-substitute"></span>
            <span class="out">out: Dj</span>
        </div>
        <div class="bar"></div>
    </div>
    <!-- goal -->
    <div class="moment away">
        <span class="time score">10+1
        </span>
        <div class="item goal">
            <img src="assets/img/goal.png" alt="goal">
            <span class="scorer"> Dj</span>
        </div>
        <div class="bar"></div>
    </div>
    <!-- card  -->
    <div class="moment away">
        <span class="time red-card">10+1
        </span>
        <div class="item goal">
            <img src="assets/img/red-card.png" alt="goal">
            <span class="scorer"> Dj</span>
        </div>
        <div class="bar"></div>
    </div>
    <!-- voir plus  -->
    <div class="show-more"><span>show more</span></div>`
    momentContainer.insertAdjacentElement = momentHTML;
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
    `<table>
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