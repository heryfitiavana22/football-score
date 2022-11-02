import infoMatch from "./infoMatch";
import listLeague from "./listLeague";
import { listMatch } from "./listMatch";
import {loading, stopLoading} from './animation'

export default (isPopState) => {
    let hash = window.location.hash;
    console.log(hash);
    listLeague()
    if(hash.length === 0) {
        loading()
        listMatch(isPopState, new Date())
        // let intervalListMatch = setInterval(() => {
        //     listMatch(new Date())
        // }, 10000)
        return
    }
    // verifier si listgame ou game (asorina le #)
    let item = hash.slice(1, hash.indexOf('/'));
    console.log('item');
    console.log(item);
    // asorina ilay efa azo
    hash = hash.slice(hash.indexOf('/')+1)
    if(item === "listgame") {
        let index = hash.indexOf('&');
        if(index > 0) {
            let date = hash.slice(0,index),
                idLeague = hash.slice(index+1)
            console.log('oe');
            console.log(date);
            console.log(idLeague);
            // si date valide et l'id est un nombre
            if((new Date(date) instanceof Date) && !isNaN(idLeague))
                listMatch(isPopState, date, idLeague)
            else return // 404
        } else {
            console.log('date fts');
            // hash correspond au date, le izy notapahana mantsy
            if(new Date(hash) instanceof Date)
                listMatch(isPopState, hash)
            else return // 404
        }
    } else if(item === "game") {
        let indexSlash = hash.indexOf('/'),
            type = hash.slice(0,indexSlash); // mety ho pregame,standing,stats
        hash = hash.slice(indexSlash+1); // asorina izay efa azo
        indexSlash = hash.indexOf('/'); // slash manaraka
        let id = hash.slice(0) // idMatch
        // raha tsy nombre le id
        if(isNaN(id)) return // 404
        if(type === "pregame") 
            infoMatch(isPopState, id)
        else if(type === "standing") 
            infoMatch(isPopState, id, "standing")
        else if(type === "stats")
            infoMatch(isPopState, id, "stats")
        else return // 404
    } else 
        return // 404
}
