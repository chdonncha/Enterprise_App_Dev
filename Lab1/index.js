var Massive=require("massive");
var db = Massive.connectSync({
	connectionString: 'postgres://donncha:pass123@localhost/pgguide'
});

db.users.find(1, function(err,res){
  console.log(res);
});