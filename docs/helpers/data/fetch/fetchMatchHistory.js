
const fetch = require("node-fetch");


async function fetchMatchHistory(summonerData, api, apiKey){
    const endpoint = `match/v4/matchlists/by-account/${summonerData.accountId}`;
    const url = `${api}${endpoint}?api_key=${apiKey}`

    let matchHistory = fetch(url);
    let response = await matchHistory;
    let handleResponse = await response.json();


    return handleResponse;
}

module.exports = fetchMatchHistory;