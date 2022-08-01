const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: string,
        required: true,
        unique: true
    },
    password: {
        type: string,
        unique: true
    }

}, {timestamps:true})


module.exports = mongoose.model("User", userSchema);
