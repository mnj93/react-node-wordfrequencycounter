var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var app = express();

app.use(bodyParser.json());
app.use(function (req, res, next) {  
    res.header("Access-Control-Allow-Origin", "*");  
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");  
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization");  
    next();  
}); 
var server = app.listen(4000,function(){
    var port = server.address().port;
    console.log('Server now running on ', port);
});



app.get('/api/getResult',function(req,res,next){
  var n = req.query.n;
  var fileURL = 'http://terriblytinytales.com/test.txt';
  request.get(fileURL,function(err,response,body){
      if(err){
          return next(err);
      }

      var wordsArray = splitWords(body);
      var wordsMap = createWordMap(wordsArray);
      //console.log(wordsMap);
      var finalWordsArray = sortByCount(wordsMap);
     // console.log(finalWordsArray);
      //console.log(wordsArray);
      res.status(200).json(finalWordsArray);
  });
});


function splitWords(text){
    var wordsArray = text.split(/\s+/);
    return wordsArray;
}

function createWordMap(wordsArray){
    var wordsMap = {};

    wordsArray.forEach((key) => {
        if(wordsMap.hasOwnProperty(key)){
            wordsMap[key] ++;
        }
        else{
            wordsMap[key]= 1;
        }
    });

    return wordsMap;
}

function sortByCount(wordsMap){
    var finalArray = [];

    finalArray = Object.keys(wordsMap).map((key) =>{
        return {
            name : key,
            total : wordsMap[key]
        };
    });

    finalArray.sort((a,b) => {
        return b.total - a.total;
    });

    return finalArray;
}


 //error handler
 app.use(function(err, req, res, next) {
    console.log('Error Message : '+err.message);
    res.status(err.status || 500);
    res.send({
        success: "false",
        msg: err.message,  
        data:[]          
    });
  });
