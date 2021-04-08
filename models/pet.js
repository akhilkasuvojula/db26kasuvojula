const mongoose = require("mongoose")
const petSchema = mongoose.Schema({
name: String,
age: Number,
gender: String
});

module.exports = mongoose.model("pet", petSchema)