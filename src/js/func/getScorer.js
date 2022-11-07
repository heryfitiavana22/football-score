let apiKey = process.env.API_KEY;
export default async (idLeague) => {
    return await new Promise((resolve, reject) => {
        let url = `https://apiv3.apifootball.com/?action=get_topscorers&league_id=${idLeague}&APIkey=${apiKey}`;
        fetch(url, {method : 'get'})
        .then(response => response.json())
        .then((value) => {
            console.log('get_topscorers');
            console.log(value);
            resolve(value.error ? [] : value)
        })
    })
}