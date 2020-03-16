// const fetch = require("node-fetch");


function  getChampion(championId){
    const championData = require("../../public/champion.json");
    var myData = Object.keys(championData.data).map(key => {
        return championData.data[key];
    })

    const chosenChampion = findInArray(myData, championId);
    
    return chosenChampion;
 }

function findInArray(data, id){
    const specificChampion = data.find(obj => {
    
        return obj.key == id
    });

    return specificChampion;
}

module.exports = getChampion;