const fetchMatchHistory = require("./fetch/fetchMatchHistory");
const fetchSummoner = require("./fetch/fetchSummoner");
const fetchMatchDetails = require("./fetch/fetchMatchDetails");
const convertTimestamp = require("../convertTimestamp");
const getChampion = require("./getChampion")

async function getDataMH(name) {
    // incase of 403, it may be that the key has been expired (24 hours)
    const apiKey = process.env.APIKEY;
    const api = "https://euw1.api.riotgames.com/lol/";
    const summonerInformation = await fetchSummoner(api, apiKey, name);
    const matchHistory = await fetchMatchHistory(summonerInformation, api, apiKey);
    console.log(matchHistory)

    const cleanData = cleanUp(matchHistory)

     return cleanData;
}

function cleanUp(matchHistory) {
    return matchHistory.matches.map(key => {
        return {
            region: key.platformId,
            championId: key.champion,
            championData: getChampion(key.champion),
            time: convertTimestamp(key.timestamp),
            lane: key.lane,
            premade: key.role,
            queue: key.queue,
            season: key.season,
            gameKey: key.gameId
        }
    })
}

async function getDataMD(gameKey, username) {
    const apiKey = process.env.APIKEY;
    const api = "https://euw1.api.riotgames.com/lol/";

    const matchDetail = await fetchMatchDetails(gameKey, api, apiKey);
    const personalDetail = personalMatchInfo(matchDetail, username)
    return personalDetail;
}

function personalMatchInfo(MatchDetail, username) {
    const participantID = MatchDetail.participantIdentities
        .find(user => {
            if (user.player.summonerName.toLowerCase() == username.toLowerCase()) {
                return user;
            }
        }).participantId

    const participantStats = MatchDetail.participants.find(key => {
        if(key.participantId == participantID){
            return key;
        }
    })

    const mode = MatchDetail.gameMode;
    return transformStats(participantStats.stats, mode, participantStats.championId);    
}

function transformStats(stats, mode, championId){
   return {
        win: stats.win ? 'Victory' : 'Defeat',
        kills: stats.kills,
        deaths: stats.deaths,
        dmg: stats.totalDamageDealtToChampions,
        vision: stats.visionScore,
        farm: stats.totalMinionsKilled,
        gamemode: mode,
        champion: championId,
        championData: getChampion(championId)
    }
}


const getData = {
    matchHistory: getDataMH,
    matchDetail: getDataMD
}

module.exports = getData;