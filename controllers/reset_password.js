const User = require("../models/register.js");
const bcryept = require("bcryptjs");
const nodemailer = require("nodemailer");

const forgotPassword = async(req, res) => {
    const {email} = req.body;

    const user = await User.findOne({email});

    if(!user){
        return res.status(401).json({
            message: "User not found!"
        });
    }

    // generate otp
    const otp = Math.floor(100000 + Math.random()* 900000).toString();
    //Hash otp before storing
    const hashOtp = bcryept.hash(otp, 10);

    user.resetOTP = hashOtp;
    //OTP valid for 10 minutes
    user.resetOTPExpiry = Date.now() + 10 * 60 * 1000;
    

}