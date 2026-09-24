const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const cookieParser = require("cookie-parser")
const dotenv = require("dotenv");
dotenv.config();

const app = express();

const userRoutes = require("./routes/user_routes.js");
const authRoutes = require("./routes/auth_routes.js");

app.set("view engine", "ejs");


// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(methodOverride("_method"));
// Routes
app.use("/api/users", userRoutes);
app.use("/api", authRoutes);

// Database connection
async function main() {
    await mongoose.connect(process.env.MONGO_URL);
}

main()
    .then(() => {
        console.log("Database connected!");
    })
    .catch((err) => {
        console.log("Database error:", err);
    });

// Start server
app.listen(8080, () => {
    console.log("App is listening on port 8080");
});