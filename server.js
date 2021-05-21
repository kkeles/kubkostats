const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://kkUser:sanchez@kubus.skllo.mongodb.net/kubkoDB', {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

app.use('/', require('./routes/foodRoute'));
app.use('/', require('./routes/walkRoute'));

const port = process.env.PORT || 4005;

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
