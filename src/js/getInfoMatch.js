let apiKey = process.env.API_KEY;
export default async (idMatch) => {
    console.log('idMatch');
    console.log(idMatch);
    return await new Promise((reslove, reject) => {
        let url = `https://apiv3.apifootball.com/?action=get_events&APIkey=${apiKey}&match_id=${idMatch}&timezone=Africa/Nairobi`;
        fetch(url, {method : 'get'})
        .then(response => response.json())
        .then((value) => {
            console.log('getInfoMatch');
            console.log(value);
            reslove(value[0])
        })
    })
}
