function convertTimestamp(timestamp){
    var humanReadable  = new Date(timestamp).toLocaleString("en-UK", {month:"long", day:"numeric",  hour: "2-digit", minute: "2-digit"});
    return humanReadable;
}

module.exports = convertTimestamp;