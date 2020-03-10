var express = require('express');
var router = express.Router();
const getData = require('../helpers/data/getData');
const createFilter = require('../helpers/createFilter');

router.get('/search/:id', function(req, res, next){
    // res.send("Search results for: " + req.params.id);
    const summoner = req.params.id;

    getData(req.params.id)
        .then(data => {
            const champList = data.map(match => {
                return match.championData.name
            })
            const uniqueList = createFilter(champList);


            res.render("search", { title: "Search results", feedback: "Summoner: " + summoner, data:data, username: summoner, championlist: uniqueList});
        })
});
    

router.post('/search', function(req, res, next){
  res.redirect("/search/" +req.body.summonername);
});

module.exports = router;
