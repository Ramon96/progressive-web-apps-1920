var express = require('express');
var router = express.Router();
const getData = require('../helpers/data/getData');

router.get('/search/:id', function(req, res, next){
    // res.send("Search results for: " + req.params.id);
    getData(req.params.id);
    res.render("search", { title: "Search results", feedback: "Summoner: " + req.params.id})
  });

router.post('/search', function(req, res, next){
  res.redirect("/search/" +req.body.summonername);
});

module.exports = router;
