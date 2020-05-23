# mongodb_test
### 練習使用node.js連接mongodb進行修改,插入,刪除,搜尋 資料表
## mongodb_connection
```javascript=
var MongoClient = require('mongodb').MongoClient; 
// Connect to the db
MongoClient.connect("mongodb://localhost:27017/database", function (err, client) {
  if(err) throw err;
  //Write databse Insert/Update/Query code here..
  console.log('mongodb is running!');
   client.close(); //關閉連線
}); 
```
## mongodb_insert_data
```javascript=
var MongoClient=require('mongodb').MongoClient;
 
MongoClient.connect("mongodb://127.0.0.1:27017/test",function(err,client){
    if(err){
        console.log(err);
        console.log('connecting fail');
        return;
    }
    console.log('connecting');
    var db_client = client.db('test')
    var db_table = db_client.collection('person')
    console.log('connection success')
    db_client.collection('person',function(err,collection){
        collection.insertOne({ id:1, firstName:'Steve', lastName:'Jobs' });
        collection.insertOne({ id:2, firstName:'Bill', lastName:'Gates' });
        collection.insertOne({ id:3, firstName:'James', lastName:'Bond' });
     
        collection.countDocuments(function(err,count){
            if(err) throw err;
            console.log('Total Rows:'+count);
        });
    });
    db_table.find({}).toArray(function(err, result){
        if (err) throw err;
        console.log (result)
        client.close;
    });

})
```
## mongodb_update_data
```javascript=
var MongoClient=require('mongodb').MongoClient;
MongoClient.connect("mongodb://127.0.0.1:27017/test",function(err,client){
    if(err){
        console.log(err);
        console.log('connecting fail');
        return;
    }
    var db_client = client.db('test')
    var db_table = db_client.collection('person')
    db_client.collection('person', function(err,collection){
        collection.updateOne({id:1},{ $set: { firstName:'James', lastName:'Gosling'}
    },
        {w:1}, function(err, result){
            if(err) throw err;
            console.log('update successful');
        });
        });
        client.close();
    });
```
## mongodb_delete.js
```javascript=
var MongoClient=require('mongodb').MongoClient;
MongoClient.connect("mongodb://127.0.0.1:27017/test",function(err,client){
    var db_client = client.db('test')
    var db_table = db_client.collection('person')
    db_client.collection('person',function(err,collection){
        collection.deleteOne({id:2},{w:1},function(err,result){
            if(err) throw err;
            console.log('collection remove');
        });
    });
    client.close(); //關閉連線
});
```
## mongodb_find_data
```javascript=
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
```
