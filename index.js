
var express = require('express');
var app = express();
var router = express.Router();
var PORT = 3000;

//middleware that is specific to this router
var requestTime = function (req, res, next) {
   var n =  new Date();
   var j = n.getDay();
   var h = n.getHours();
   if ((j == 1)||( j == 2)||( j == 3 )|| (j ==4) || (j == 5) && (h>9)&&(h<17)){
    next();
   }
   else{

    res.send("erreur");
   }

  };
  
  app.use(requestTime);
//define the home page route
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/home.html');
});
// define the about route
app.get('/contact', function(req, res) {
  res.sendFile(__dirname + '/contact.html');
});
app.get('/service', function(req, res) {
    res.sendFile(__dirname + '/service.html');
  });
  app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});
