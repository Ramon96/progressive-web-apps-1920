require('dotenv').config();
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');
var hbs = require('express-handlebars');
var manifest = require('./dist/manifest.json');


var indexRouter = require('./routes/index');
var searchRouter = require('./routes/search');
var matchRouter = require('./routes/match');
var offlineRouter = require('./routes/offline');

var app = express();

// view engine setup
app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'layout', layoutsDir: __dirname + '/views/layouts'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'dist'), {
  etag: false,
  maxAge: '31536000'
}));


app.locals.js = manifest['/pwa.js'];
app.locals.css = manifest['/pwa.css'];



// Routes
app.use(indexRouter);
app.use(searchRouter);
app.use(matchRouter);
app.use(offlineRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(function (){
  console.log("Server is running..");
});

module.exports = app;
