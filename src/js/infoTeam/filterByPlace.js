export default (players) => {
    let result = [],
        listPlace = [];
    for(let element of players) {
        // raha mbola tsy ao
        if(!listPlace.includes(element.player_type)) {
            result.push({
                place : element.player_type,
                players : players.filter(p => p.player_type === element.player_type)
            })
            listPlace.push(element.player_type)
        }
    }
    result[listPlace.indexOf('Goalkeepers')].number = 1;
    result[listPlace.indexOf('Defenders')].number = 2;
    result[listPlace.indexOf('Midfielders')].number = 3;
    result[listPlace.indexOf('Forwards')].number = 4;
    result.sort((a,b) => a.number - b.number)
    return result
}