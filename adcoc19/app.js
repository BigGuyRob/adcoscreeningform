var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://Rob:Cinderblock3@cluster0-jk0p0.mongodb.net/ADCOc19?retryWrites=true&w=majority";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("ADCOc19");
  var myobj = { name: "Company Inc", address: "Highway 37" };
  dbo.collection("empInfo").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});