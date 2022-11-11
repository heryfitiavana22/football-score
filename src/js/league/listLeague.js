import {getListCountry, getListLeague} from '../others/contryAndLeague'
import {getExceptionLeague, getPopularLeague} from '../others/popularAndException'

let APIkey = process.env.API_KEY;
let listContainer = document.querySelector('.list-league'),
    url = `https://apiv3.apifootball.com/?action=get_leagues&APIkey=${APIkey}`,
    listCountry = getListCountry(),
    listLeague = getListLeague();
listCountry = listCountry.split(',');
listLeague = listLeague.split(',')

let list = [];
export default async () => {
    fetch(url, {
        method : 'get'
    })
        .then(response => response.json())
        .then((value) => {
            // izay ao anaty liste iany no raisina
            list = value
                    .filter(e => listCountry.includes(e.country_name) && listLeague.includes(e.league_name));
            let leagueId = list.map(e => e.league_id)
            // console.log('listleague');
            // console.log(list);
            // popular league and exception league
            let popularLeague = getPopularLeague(leagueId),
                exceptionLeague = getExceptionLeague(leagueId),
                currentNumber = 1;
            // console.log('popularLeague listleague');
            // console.log(popularLeague);
            // correct league logo
            for(let element of exceptionLeague) {
                list[element.index].league_logo = element.photo
            }
            // atao any amin farany ambony ireo ligue populaire
            // omena numero voalohany ireo league popular
            let leaguesPopular = [];
            for(let element of popularLeague) {
                list[element.index].number =  currentNumber
                list[element.index].league_logo = element.photo
                leaguesPopular.push(list[element.index]);
                currentNumber++
            }
            // omena numero ireo league mbola tsy nahazo
            let othersLeague = [];
            for(let element of list) {
                if(!element.number) {
                    othersLeague.push(element)
                }
            }
            // trier-na selon ny id ana pays anle league 
            console.log(othersLeague.sort((a,b) => a.country_id - b.country_id));
            // atambatra
            list = [...leaguesPopular, ...othersLeague]
            // display list league `<li class="list-item" onclick="getLeagueMatch(${e.league_id})">
            let listItem = ``;
            for(let e of list) {
                listItem += 
                `<li class="list-item kk${e.league_id}" id="${e.league_id}" onclick="league.getLeagueMatch(${e.league_id}, this)">
                    <img src="${e.league_logo}" alt="icon-league" id="${e.league_id}" onerror="this.src = 'assets/img/logo2.png'">
                    <span id="${e.league_id}">${e.league_name}
                        <span class="line-list" id="${e.league_id}"></span>
                    </span>
                </li>`;
            }
            listContainer.innerHTML = listItem
        })
        .catch(err => console.log(err))
}

export function getLeagues() {
    return list;
}