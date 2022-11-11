let isClicked = false; // raha efa clicke le "show more"

export default (game) => {
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

    if(isClicked) momentContainer.style.height = "auto"
    let showMore = document.querySelector('.show-more')
    if(showMore) // raha misy
        showMore.addEventListener('click', () => {
            momentContainer.style.height = "auto"
            showMore.style.display = 'none'
            isClicked = true
        })
}

export function initMoment() {
    isClicked = false
}