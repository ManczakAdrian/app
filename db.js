const mongoClient = require('mongodb').MongoClient;

mongoClient.connect('mongodb://0.0.0.0:27017', { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
  if (err){
    console.log(err);
  }
  else {
    console.log('Successfully connected to the database');
  }
});
