let APIkey = process.env.API_KEY;
export default async (teamID) => {
    return new Promise((resolve, reject) => {
        let url = `https://apiv3.apifootball.com/?action=get_teams&team_id=${teamID}&APIkey=${APIkey}`;
        fetch(url, { method: "get" })
            .then((response) => response.json())
            .then((value) => {
                // console.log(value);
                resolve(value[0]);
            });
    });
};
