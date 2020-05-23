var MongoClient = require('mongodb').MongoClient;
 
// Connect to the db
MongoClient.connect("mongodb://localhost:27017/database", function (err, client) {
    useNewUrlParser: true
 useUnifiedTopology: true 
  if(err) throw err;
  //Write databse Insert/Update/Query code here..
  console.log('mongodb is running!');
   client.close(); //關閉連線
});