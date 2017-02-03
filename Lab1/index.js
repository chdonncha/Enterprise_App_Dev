var Massive=require("massive");
var db = Massive.connectSync({
	connectionString: 'postgres://postgres:pass123@localhost/pgguide'
});

console.log(db.users);
db.users.find({id: 1}, function(err,res){
  console.log(res);
});