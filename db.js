const mongoose = require('mongoose');
const connectToDB = () => {
    // Connecting to MongoDB
    let dbUri = `mongodb://0.0.0.0:27017/ads`;

    mongoose.connect(dbUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    const db = mongoose.connection;

	// on success
	db.once('open', () => {
		console.log('Connected to the database');
	});

	// on error
	db.on('error', err => console.log('Error ' + err));
};

module.exports = connectToDB;
