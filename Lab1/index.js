var Massive=require("massive");
var db = Massive.connectSync({
	connectionString: 'postgres://postgres:pass123@localhost/pgguide'
});

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
