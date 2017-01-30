var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

var Massive=require("massive");
var db = Massive.connectSync({db : 'massive-test'});

var newUser = {
  email : "test@test.com",
  first : "Joe",
  last : "Test"
};

db.users.save(newUser, function(err,result){
  console.log(result);  
});