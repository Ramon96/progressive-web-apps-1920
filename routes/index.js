var express = require('express');
var router = express.Router();
var manifest = require('../dist/manifest.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'PWA', feedback: "If you don't play league of legends you can use my username: Yabby"});
});



module.exports = router;
