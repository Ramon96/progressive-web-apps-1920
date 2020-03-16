const fetch = require("node-fetch");


async function fetchSummoner(api, apiKey, name){
    const endpoint = `summoner/v4/summoners/by-name/${name}`;
    const url = `${api}${endpoint}?api_key=${apiKey}`


    let summonerData = fetch(url);
    let response = await summonerData;
    let handleResponse = await response.json();
    return handleResponse;
}

module.exports = fetchSummoner;