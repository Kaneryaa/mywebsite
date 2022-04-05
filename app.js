const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/stationaryDB' , { useNewUrlParser :true });

const stationarySchema = new mongoose.Schema({
  product_ID : Number,
  product_NAME: String,
  Catogory_NAME: String,
  Catogory_ID : Number,

});

const Stationary = mongoose.model("Stationary", stationarySchema);
const stationary = new Stationary({
  product_ID : 1001,
  product_NAME:'PEN',
  Catogory_NAME:"stationary",
  Catogory_ID :1,
});

stationary. save();

const findDocuments = function (db, callback){
  const collection = db.collection('stationary');
  collection.find({}).toArray(function(err, stationary){
    assert.equal(err,null);
    console.log("Found the following records");
    console.log(stationary);
    callback(stationary);
  });
};
