import {getListCountry, getListLeague} from '../others/contryAndLeague'
import {toYYYYMMDD} from './date'

let APIkey = process.env.API_KEY;
let listLeague = getListLeague(),
    listCountry = getListCountry();

// raha tsy mahazo valeur le "to" de atao mitovy amin "from"
export default async (from, to = from, idLeague = 0, idTeam = 0) => {
    return await new Promise((resolve, reject) => {
        let fromDate = toYYYYMMDD(from),
            toDate = toYYYYMMDD(to);
        console.log("from-to");
        console.log(fromDate+'-'+toDate);
        let url = `https://apiv3.apifootball.com/?action=get_events&from=${fromDate}&to=${toDate}&APIkey=${APIkey}&timezone=Africa/Nairobi`;
        
        // au cas ou idLeague est donne
        if(idLeague > 0) url += `&league_id=${idLeague}`
        // au cas ou idLeague est donne
        if(idTeam > 0) url += `&team_id=${idTeam}`
        
        fetch(url, { method: "get" })
            .then((response) => response.json())
            .then((value) => {
                if(value.error) return resolve([])
                // ireo anaty liste iany no alaina
                let list = value.filter(e => listCountry.includes(e.country_name) && listLeague.includes(e.league_name));
                // trier selon l'heure du match
                list.sort((a,b) => new Date(`${a.match_date} ${a.match_time}`) - new Date(`${b.match_date} ${b.match_time}`))
                resolve(list)
            })
            .catch(err => console.log(err))
    });
};
