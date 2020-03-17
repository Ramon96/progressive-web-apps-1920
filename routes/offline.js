var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/offline', function(req, res, next) {
  res.render('offline', { title: 'Offline', feedback: "It appears you are offline lekker dikke lul" });
});



module.exports = router;
