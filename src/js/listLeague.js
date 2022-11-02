import {loading, stopLoading} from './animation'
import {getListCountry, getListLeague} from './contryAndLeague'
import {getExceptionLeague, getPopularLeague} from './league'

let listContainer = document.querySelector('.list-league'),
    url = "https://apiv3.apifootball.com/?action=get_leagues&APIkey=5abf557ce643bfb8836e00496fc0e64543d61180848a164763839561abbbafda",
    listCountry = getListCountry(),
    listLeague = getListLeague();
listCountry = listCountry.split(',');
listLeague = listLeague.split(',')

export default async () => {
    fetch(url, {
        method : 'get'
    })
        .then(response => response.json())
        .then((value) => {
            // izay ao anaty liste iany no raisina
            let list = value
                    .filter(e => listCountry.includes(e.country_name) && listLeague.includes(e.league_name)),
                leagueId = list.map(e => e.league_id)
            console.log('listleague');
            console.log(list);
            // popular league and exception league
            let popularLeague = getPopularLeague(leagueId),
                exceptionLeague = getExceptionLeague(leagueId);
            // atao any amin farany ambony ireo ligue populaire
            for(let i=0; i<popularLeague.length; i++) {
                let tmp = list[i];
                list[i] = list[popularLeague[i].index]
                list[popularLeague[i].index] = tmp
                list[i].league_logo = popularLeague[i].photo
            }
            // correct league logo
            for(let element of exceptionLeague) {
                list[element.index].league_logo = element.photo
            }
            // display list league `<li class="list-item" onclick="getLeagueMatch(${e.league_id})">
            let listItem = ``;
            for(let e of list) {
                listItem += 
                `<li class="list-item" id="${e.league_id}" onclick="league.getLeagueMatch(${e.league_id}, this)">
                    <img src="${e.league_logo}" alt="icon-league" id="${e.league_id}">
                    <span id="${e.league_id}">${e.league_name}
                        <span class="line-list" id="${e.league_id}"></span>
                    </span>
                </li>`;
            }
            listContainer.innerHTML = listItem
            stopLoading()
        })
        .catch(err => console.log(err))
}