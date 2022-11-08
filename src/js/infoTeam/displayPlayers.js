export default (players, coach) => {
    let playerHTML = ``;
    for(let element of players) {
        playerHTML +=
        `<div class="type">
            <span class="caption ${element.place}">${element.place}</span>`;
        for(let p of element.players) {
            playerHTML +=
            `<div class="player">
                <div class="img-player">
                    <img src="${p.player_image || "assets/img/player.jpg"}" alt="img-player" onerror="this.src='assets/img/player.jpg'">
                </div>
                <span class="name">${p.player_name}</span>
                <span class="number">${p.player_number}</span>
                <footer>
                    ${p.player_age} years
                    <span class="rate">
                        <span class="ti ti-star"></span>
                        ${p.player_rating} 
                    </span>
                </footer>
            </div>`
        }
        playerHTML +=
        `</div>`
    }
    playerHTML +=
    `<div class="type">
        <span class="caption">Coach</span>
        <div class="player">
            <div class="img-player">
            <img src="assets/img/player.jpg" alt="img-player" onerror="this.src='assets/img/player.jpg'">
            </div>
            <span class="name">${coach.coach_name}</span>
        </div>
    </div>`

    document.querySelector('.current-item').innerHTML = playerHTML
    document.querySelector('.nav-team li.active').classList.remove('active')
    document.querySelector('#players').classList.add('active');
}