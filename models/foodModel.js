const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const foodSchema = new Schema({
    foodTime: Number,
    foodGr: {type: Number, require: true},
    treated: Boolean,
    treatQuantity: Number
})

const Food = mongoose.model('Food',foodSchema);

module.exports = Food;

