var express = require('express');
var router = express.Router();
const getData = require('../helpers/data/getData');

router.get('/match/:matchId/:username', function(req, res, next) {
    getData.matchDetail(req.params.matchId, req.params.username)
        .then(data =>{
            res.render('match', { title: 'Match', data:data });
        });
});



module.exports = router;
