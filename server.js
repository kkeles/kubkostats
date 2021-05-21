const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

app.use(cors());
app.use(express.json({ extended: false }));

mongoose.connect('mongodb+srv://kkUser:sanchez@kubus.skllo.mongodb.net/kubkoDB', {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

app.use('/', require('./routes/foodRoute'));
app.use('/', require('./routes/walkRoute'));

// Serve static assets
if (process.env.NODE_ENV === 'production') {
	// to set static folder
	app.use(express.static('frontend/build'));
	app.get('*', (req, res) => {
		res.sendFile(path.resolve('frontend', 'build', 'index.html'));
	});
}

const port = process.env.PORT || 4005;
app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
