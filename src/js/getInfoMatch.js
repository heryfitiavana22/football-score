import addHistory from "./addHistory"
import {loading, stopLoading} from './animation'

export default (idMatch) => {
    loading()
    addHistory(`game/${idMatch}`);
    let matchContainer = document.querySelector('.match-container'),
        actual = document.querySelector('.actual');
    matchContainer.remove();
    actual.remove()
    displayGame()
    stopLoading()
}

function displayGame(info) {
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
        <ul class="nav-match">
            <li class="active">Avant-match</li>
            <li>Standing</li>
        </ul>
        <div style="padding: 10px;">
        </div>
    </div>`

    document.querySelector('.content').insertAdjacentHTML('beforeend', gameHTML)
}