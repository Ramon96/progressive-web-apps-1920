function convertTimestamp(timestamp){
    var humanReadable  = new Date(timestamp).toLocaleString();
    return humanReadable;
}

module.exports = convertTimestamp;