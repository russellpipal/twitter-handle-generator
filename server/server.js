var express = require('express');
var mongoose = require('mongoose')
var indexRouter = require('./routes/indexRouter.js');
var nameRouter = require('./routes/nameRouter.js');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use('/', indexRouter);
app.use('/get', nameRouter);
app.use(express.static('server/public'));

var mongoURI = 'mongodb://localhost:27017/RandomTwitter';
var MongoDB = mongoose.connect(mongoURI).connection;

MongoDB.on('error', function(err){
  console.log('mongodb connection error', err);
});

MongoDB.once('open', function(){
  console.log('mongodb connection open!');
});


var server = app.listen(3000, function(){
  var port = server.address().port;
  console.log('Listening on port', port);
});
