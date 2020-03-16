function createFilter(championNames){
    const filteredList = [...new Set(championNames)].sort();

    return filteredList
}

module.exports = createFilter;