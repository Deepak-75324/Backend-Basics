const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        maxlength: 50,
    },

    email: {
        type: String,
        required: true,
        unique: true,
        maxlength: 100,
    },

    contact: {
        type: String,
        maxlength: 10,
    },

    address: {
        type: String,
        maxlength: 200,
    }
});

const User = mongoose.model("User", userSchema);

module.exports = User;