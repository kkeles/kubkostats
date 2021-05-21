const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const walkSchema = new Schema({
    walkDate: Number,
    walkDuration: Number,
    pooped: Boolean,
    peed: Boolean
})

const Walk = mongoose.model("Walk",walkSchema);

module.exports = Walk;