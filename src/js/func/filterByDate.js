export default (game, type) => {
    let filterByDate = [],
        listDate = [];
    for (let element of game) {
        // raha mbola tsy ao le date
        if (!listDate.includes(element.match_date)) {
            filterByDate.push({
                date: element.match_date,
                game: game.filter((g) => g.match_date === element.match_date), // ireo match amnio date io
            });
            listDate.push(element.match_date);
        }
    }
    if (type === "ASC")
        filterByDate.sort((a, b) => new Date(a.date) - new Date(b.date));
    else {
        filterByDate.sort((a, b) => new Date(b.date) - new Date(a.date));
        let d = new Date();
        // tsy raisina ny date androany 
        if(filterByDate[0].date === `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`) {
            filterByDate.shift()
        }
    }
    return filterByDate;
};
