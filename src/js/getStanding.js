let apiKey = "5abf557ce643bfb8836e00496fc0e64543d61180848a164763839561abbbafda";
export default async (idLeague) => {
    return await new Promise((resolve, reject) => {
        let url = `https://apiv3.apifootball.com/?action=get_standings&league_id=${idLeague}&APIkey=${apiKey}`;
        fetch(url, {method : 'get'})
        .then(response => response.json())
        .then((value) => {
            console.log('getStanding');
            console.log(value);
            resolve(value)
        })
    })
} 