var express = require('express');
var app = express();
var path = require('path');
app.use(express.static(path.join(__dirname + '../public')));

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', function (req, res) {
  res.render('index');
});

app.get('/index.ejs', function (req, res) {
  res.render('index');
});

app.get('/breeds.ejs', function (req, res) {
  res.render('breeds');
});

app.get('/facts.ejs', function (req, res) {
  res.render('facts');
});


app.listen(8080);
console.log('Server is listening on port 8080');