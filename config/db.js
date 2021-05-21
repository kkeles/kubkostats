const mongoose = require('mongoose');
const config = require('config');
// const MONGO_KEY = config.get('MONGO_KEY');
require('dotenv').config();

const connectDB = async () => {
	try {
		await mongoose.connect(`mongodb+srv://kkUser:${process.env.MONGO_KEY}@kubus.skllo.mongodb.net/kubkoDB`, {
			useNewUrlParser: true,
			useUnifiedTopology: true
		});

		console.log('MongoDB Connected');
	} catch (error) {
		console.error(error.message);
		process.exit(1);
	}
};

module.exports = connectDB;
