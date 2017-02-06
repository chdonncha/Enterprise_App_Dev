var Massive=require("massive");

//establish connection with database
var db = Massive.connectSync({
	connectionString: 'postgres://postgres:pass123@localhost/pgguide'
});

var newUser = {
  email : "test@test.com",
  password : "Joe",
};

//save new user to database
var saved = db.users.saveSync(newUser);
console.log(saved);

//find all details on the newly created user
db.users.find({email : "test@test.com"}, function(err,res){
  console.log(res);
});

db.users.saveSync({id: 51, email : "test@test.com"});
var joe = db.users.findSync(51);
console.log(joe);

//alter the newly created user with the following email
var joe = db.users.saveSync({id: 51, email : "joe@test.com"});
console.log(joe);

//delete the new user from the database
db.users.destroy({id: 51}, function(err,res){
  console.log(res);
});

//print all users in the database
console.log(db.users);
db.users.find({}, function(err,res){
  console.log(res);
});

//print all products in the database
console.log(db.products);
db.products.find({}, function(err,res){
  console.log(res);
});

//print all purchases in the database
console.log(db.purchases);
db.purchases.find({}, function(err,res){
  console.log(res);
});

//print all purchased items in the database
console.log(db.purchase_items);
db.purchase_items.find({}, function(err,res){
  console.log(res);
});
