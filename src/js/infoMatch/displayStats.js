import addHistory from "../history/addHistory"
export default (isPopState=false, game, container) => {
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
    document.querySelectorAll('.info-match .nav-match li')[1].classList.add('active');
    return "stat"
}