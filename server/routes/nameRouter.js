var express=require('express');
var mongoose=require('mongoose');
var RandomHandle=require('../../models/randomHandle.js');

var router = express.Router();

router.get('/noun', function(request, response){
  console.log('Request Recieved');
  RandomHandle.find({"id":"noun"}, function(err, nouns){
    console.log('find started');
    if(err){
      console.log(err);
      response.sendStatus(500);
    }else{
      console.log("found nouns", nouns);
      response.send(nouns);
    }
  })

});
router.get('/adj', function(request, response){
  console.log('Request Recieved');
  RandomHandle.find({"id":"adj"}, function(err, adjs){
    console.log('find started');
    if(err){
      console.log(err);
      response.sendStatus(500);
    }else{
      console.log("found adjs", adjs);
      response.send(adjs);
    }
  })

});


module.exports = router;
