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