const mongoose = require("mongoose")
const petSchema = mongoose.Schema({
name: String,
age: {
    type: Number,

    min:[1,"Minimum age"],
    max:[15,"Maximum age"]

},
gender: String
});

module.exports = mongoose.model("pet", petSchema)