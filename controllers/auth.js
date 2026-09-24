const RegisterUser = require("../models/register.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Show registration page
const registerPage = (req, res) => {
    res.render("register.ejs");
};

// Register user
const registerUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Check fields
        if (!username || !email || !password) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        // Check if user already exists
        const existingUser = await RegisterUser.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                message: "User already exists!"
            });
        }

        // Hash password
        const hashPassword = await bcrypt.hash(password, 10);

        // Create user
        const register = await RegisterUser.create({
            username,
            email,
            password: hashPassword
        });
        // save user in databse
        await register.save();

        return res.redirect("/api/users");

    } catch (err) {
        res.status(500).json({
            message: "Server Error!",
            error: err.message
        });
    }
};

// render login page

const loginPage = (req, res) => {
    res.render("login.ejs");
}

// login post
const login = async (req, res) => {
    try {
        const { username, password } = req.body;

        // 1. Check fields
        if (!username || !password) {
            return res.status(400).json({
                message: "Username and password are required!"
            });
        }

        // 2. Check user exists
        const user = await RegisterUser.findOne({ username });

        if (!user) {
            return res.status(401).json({
                message: "Invalid username or password"
            });
        }

        // 3. Compare entered password with hashed password
        const isMatch = await bcrypt.compare(
            password,
            user.password
        );

        if (!isMatch) {
            return res.status(401).json({
                message: "Invalid username or password"
            });
        }

        // 4. Generate JWT token
        const token = jwt.sign(
            {
                userId: user._id,
                username: user.username
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "7d"
            }
        );

        // Store JWT in cookie
        res.cookie("token", token, {
            httpOnly: true,
            maxAge: 7 * 24 * 60 * 60 * 1000
        });

        // 5. Send response
        return res.redirect("/api/users");
        // res.status(200).json({
        //     message: "Login successful",
        //     token: token,
        //     user: {
        //         id: user._id,
        //         username: user.username,
        //         email: user.email
        //     }
        // });

    } catch (err) {
        return res.status(500).json({
            message: "Server Error in login",
            error: err.message
        });
    }
};

const logout = (req, res) => {
    res.clearCookie("token");

    return res.redirect("/api/login");
}
module.exports = {
    registerPage,
    registerUser,
    loginPage,
    login,
    logout
};