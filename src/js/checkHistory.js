import infoMatch from "./infoMatch";
import {setDate} from './calendar'
import listLeague from "./listLeague";
import {loading, stopLoading} from './animation'
import pageNotFound from './404'

export default (isPopState) => {
    let hash = window.location.hash;
    console.log(hash);
    // listLeague()
    if((hash.length === 0) || (hash === "#")) {
        loading()
        stopLoading()
        let d = new Date();
        // ovaina aloha ny date de ao vao maka ny listMatch
        // setDate(isPopState, (d.getMonth()+1), d.getDate(), 0) 
        // let intervalListMatch = setInterval(() => {
        //     listMatch(new Date())
        // }, 10000)
        return
    }
    // verifier si listgame ou game (asorina le #)
    let item = hash.slice(1, hash.indexOf('/'));
    // asorina ilay efa azo
    hash = hash.slice(hash.indexOf('/')+1)
    if(item === "listgame") {
        let index = hash.indexOf('&');
        if(index > 0) {
            let date = hash.slice(0,index),
                idLeague = hash.slice(index+1)
            date = new Date(date);
            // si date n'est pas valide et l'id n'est pas un nombre
            if((date.toString() === "Invalid Date") && isNaN(idLeague))
                return pageNotFound() // 404
            // ovaina aloha ny date de ao vao maka ny listMatch
            setDate(isPopState, (date.getMonth()+1), date.getDate(), idLeague) 
        } else {
            // hash correspond au date, le izy notapahana mantsy
            hash = new Date(hash)
            if(hash.toString() === "Invalid Date")
                return pageNotFound() // 404
            setDate(isPopState, (hash.getMonth()+1), hash.getDate()) 
        }
    } else if(item === "game") {
        let indexSlash = hash.indexOf('/'),
            type = hash.slice(0,indexSlash); // mety ho pregame,standing,stats
        hash = hash.slice(indexSlash+1); // asorina izay efa azo
        indexSlash = hash.indexOf('/'); // slash manaraka
        let id = hash.slice(0) // idMatch
        // raha tsy nombre le id
        if(isNaN(id)) return pageNotFound() // 404
        if(type === "pregame") 
            infoMatch(isPopState, id)
        else if(type === "standing") 
            infoMatch(isPopState, id, "standing")
        else if(type === "stats")
            infoMatch(isPopState, id, "stats")
        else return pageNotFound() // 404
    } else 
        return pageNotFound() // 404
}
