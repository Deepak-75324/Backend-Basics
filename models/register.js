const mongoose = require("mongoose");

const registerSchema = new mongoose.Schema(
    {
        username: {
            type: String,       
            required: true,
        },

        email: {
            type: String,
            required: true,
            unique: true,
        },

        password: {
            type: String,
            required: true,
        },
        resetOTP: {
            type: String,
            default: null
        },
        resetOTPExpiry: {
            type: Date,
            default: null
        }
    },
    {
        timestamps: true,
    }
);

const RegisterUser = mongoose.model("RegisterUser", registerSchema);

module.exports = RegisterUser;