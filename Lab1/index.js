var massive=require("massive");
var db = massive.connectSync({
	connectionString: 'postgres://donncha:pass123@localhost/pgguide'
});

var newUser = {
  email : "test@test.com",
  first : "Joe",
  last : "Test"
};

db.users.save(newUser, function(err,result){
  console.log(result);  
});