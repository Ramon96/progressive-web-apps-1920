var express = require('express');
var router = express.Router();
const getData = require('../helpers/data/getData');
const createFilter = require('../helpers/createFilter');


router.get('/search', function (req, res, next) {


    const summoner = req.query.summonername;
    console.log(summoner)
    getData.matchHistory(summoner)
        .then(data => {
            const champList = data.map(match => {
                return match.championData.name
            })
            const uniqueList = createFilter(champList);

            if (req.query.pwa) {
                const filtered = data.filter(obj => {
                        console.log(obj.championData.name)
                    if (obj.championData.name == req.query.champion) {
                        console.log('return')
                        return true;
                    }
                })
                console.log(filtered)
                res.render("partials/matches", {
                    layout: false,
                    title: "Search results",
                    feedback: "Summoner: " + summoner,
                    data: filtered,
                    username: summoner,
                    championlist: uniqueList
                });
            } else {
                if (req.query.champion) {
                    const filtered = data.filter(obj => {
                        if (obj.championData.name == req.query.champion) {
                            return true;
                        }
                    })

                    res.render("search", {
                        title: "Search results",
                        feedback: "Summoner: " + summoner,
                        data: filtered,
                        username: summoner,
                        championlist: uniqueList
                    });
                } else {
                    res.render("search", {
                        title: "Search results",
                        feedback: "Summoner: " + summoner,
                        data: data,
                        username: summoner,
                        championlist: uniqueList
                    });
                }
            }
        })
});


router.post('/search', function (req, res, next) {
    res.redirect("/search/" + req.body.summonername);
});

router.get('/filter/', function (req, res, next) {
    // res.send("hdsfa " + req.query.champion + req.query.username);

    // console.log("hallo")

    const summoner = req.query.username;
    console.log(summoner)
    getData.matchHistory(summoner)
    .then(data => {
        const champList = data.map(match => {
            return match.championData.name
        })
        const uniqueList = createFilter(champList);


        const filtered = data.filter(obj => {
            if (obj.championData.name == req.query.champion) {
                return true;
            }
        })
    
        res.render("search", {
            title: "Search results",
            feedback: "Summoner: " + summoner,
            data: filtered,
            username: summoner,
            championlist: uniqueList
        });

    })

});

module.exports = router;