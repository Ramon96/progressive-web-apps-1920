var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'PWA', feedback: "If you don't play league of legends you can use my username: Yabby" });
});



module.exports = router;
