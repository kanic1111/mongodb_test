var MongoClient=require('mongodb').MongoClient;
 
MongoClient.connect("mongodb://127.0.0.1:27017/test",function(err,client){
    var db_client = client.db('test')
    var db_table = db_client.collection('person')
    db_client.collection("person",function(err,collection){
        collection.find({firstName:"James"}).toArray(function(err,items){
            if(err) throw err;
            console.log(items);
            console.log("We found "+items.length+" results!");
        });
 
    });
    client.close(); //關閉連線
});