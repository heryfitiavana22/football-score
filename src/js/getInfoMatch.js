let apiKey = "5abf557ce643bfb8836e00496fc0e64543d61180848a164763839561abbbafda";
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
