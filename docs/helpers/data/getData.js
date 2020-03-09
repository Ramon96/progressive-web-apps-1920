const fetchMatchHistory = require("./fetch/fetchMatchHistory");
const fetchSummoner = require("./fetch/fetchSummoner");
const convertTimestamp = require("../convertTimestamp");

async function getDataMH(name) {
    // incase of 403, it may be that the key has been expired (24 hours)
    const apiKey = "RGAPI-45100875-d616-4769-b33e-4c6ac48ab89b";
    const api = "https://euw1.api.riotgames.com/lol/";
    const summonerInformation = await fetchSummoner(api, apiKey, name);
    const matchHistory = await fetchMatchHistory(summonerInformation, api, apiKey);
     const cleanData = cleanUp(matchHistory)
    

     return cleanData;
}

function cleanUp(matchHistory) {
    console.log( matchHistory)
    return matchHistory.matches.map(key => {
        return {
            region: key.platformId,
            championId: key.champion,
            time: convertTimestamp(key.timestamp),
            lane: key.lane,
            premade: key.role,
            queue: key.queue,
            season: key.season,
            gameKey: key.gameId
        }
    })
}

module.exports = getDataMH;