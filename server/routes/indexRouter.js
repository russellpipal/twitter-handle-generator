var express = require('express');
var mongoose = require('mongoose');
var path = require('path');

var router = express.Router();

router.get('/', function(request, response){
  response.sendFile(path.join(__dirname, '../public/views/index.html'));
});

module.exports = router;
