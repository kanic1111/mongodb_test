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