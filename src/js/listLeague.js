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
            for(let element of popularLeague) {
                list[element.index].number =  currentNumber
                list[element.index].league_logo = element.photo
                currentNumber++
            }
            // omena numero ireo league mbola tsy nahazo
            for(let element of list) {
                if(!element.number) {
                    element.number =  currentNumber
                    currentNumber++
                }
            }
            // trier-na selon ny nom ana league aloha
            list.sort((a,b) => a.league_name - b.league_name)
            // trier-na selon ny numero anle league
            list.sort((a,b) => a.number - b.number)

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