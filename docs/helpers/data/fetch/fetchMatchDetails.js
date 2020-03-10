const fetch = require("node-fetch");
 
 
 async function fetchMatchDetails(gameKey, api, apiKey){
    const endpoint = `match/v4/matches/${gameKey}`;
    const url= `${api}${endpoint}?api_key=${apiKey}`;

    let match = fetch(url);
    let response = await match;
    let handleResponse = await response.json();


    return handleResponse;
}

module.exports = fetchMatchDetails;