const User = require("../models/user.js");

//show allusers
const indexpage = async(req, res) => {
    const users = await User.find({});
    res.render("user.ejs", {
        users,
        currentUser: req.user
    });
};

const createUserForm = (req, res) => {
    res.render("form.ejs");
};

const createUser = async (req, res) => {
    try {
        const { name, email, contact, address } = req.body;

        const user = await User.create({
            name,
            email,
            contact,
            address
        });
         await user.save();

        res.redirect("/api/users");

    } catch (error) {
        res.status(500).json({
            message: "Error creating user",
            error: error.message
        });
    }
};

const updateUserForm = async(req, res) => {
    const {id} = req.params;
    const user = await User.findById(id);
    // console.log(user);
    res.render("edit.ejs",{user});
}

const updateUser = async(req, res) => {
    const {id} = req.params;
    const {name, email, contact, address} = req.body;

    await User.findByIdAndUpdate(id , {
        name,
        email,
        contact,
        address
    });
    res.redirect("/api/users/")

}

//Delete 
const deleteUser = async(req, res) => {
    const {id} = req.params;
    await User.findByIdAndDelete(id);
    res.redirect("/api/users");
}

module.exports = { createUser, createUserForm, indexpage, updateUserForm, updateUser, deleteUser};