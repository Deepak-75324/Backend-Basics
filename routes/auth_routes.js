const express = require("express");
const router = express.Router();
const {registerPage, registerUser, loginPage, login, logout} = require("../controllers/auth.js");

router.route("/register")
    .get( registerPage)
    .post( registerUser);

router.route("/login")
    .get( loginPage)
    .post( login);

router.get("/logout", logout);

module.exports = router;