export default (game, type) => {
    let result = [],
        listDate = [];
    for (let element of game) {
        // raha mbola tsy ao le date
        if (!listDate.includes(element.match_date)) {
            result.push({
                date: element.match_date,
                game: game.filter((g) => g.match_date === element.match_date), // ireo match amnio date io
            });
            listDate.push(element.match_date);
        }
    }
    if (type === "ASC")
        result.sort((a, b) => new Date(a.date) - new Date(b.date));
    else result.sort((a, b) => new Date(b.date) - new Date(a.date));
    return result;
};
