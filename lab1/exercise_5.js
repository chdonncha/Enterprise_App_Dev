var Massive=require("massive");
var db = Massive.connectSync({
	connectionString: 'postgres://postgres:pass123@localhost/pgguide'
});


var newUser = {
  email : "test@test.com",
  password : "Joe",
};

var saved = db.users.saveSync(newUser);
console.log(saved);

db.users.find({email : "test@test.com"}, function(err,res){
  console.log(res);
});

db.users.saveSync({id: 51, email : "test@test.com"});
var joe = db.users.findSync(51);
console.log(joe);

var joe = db.users.saveSync({id: 51, email : "joe@test.com"});
console.log(joe);

db.users.destroy({id: 51}, function(err,res){
  console.log(res);
});


/*
console.log(db.users);
db.users.find({}, function(err,res){
  console.log(res);
});

console.log(db.products);
db.products.find({}, function(err,res){
  console.log(res);
});

console.log(db.purchases);
db.purchases.find({}, function(err,res){
  console.log(res);
});

console.log(db.purchase_items);
db.purchase_items.find({}, function(err,res){
  console.log(res);
});
*/