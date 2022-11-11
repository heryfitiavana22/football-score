let apiKey = process.env.API_KEY;
export default async (first, second) => {
    return await new Promise((reslove, reject) => {
        let url = `https://apiv3.apifootball.com/?action=get_H2H&firstTeamId=${first}&secondTeamId=${second}&APIkey=${apiKey}&timezone=Africa/Nairobi`;
        fetch(url, {method : 'get'})
        .then(response => response.json())
        .then((value) => {
            console.log('get_H2H');
            console.log(value);
            reslove(value.error ? [] : value)
        })
    })
}