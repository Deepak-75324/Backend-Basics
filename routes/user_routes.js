const express = require("express");

const {
    createUser,
    createUserForm,
    indexpage,
    updateUserForm,
    updateUser,
    deleteUser
} = require("../controllers/user.js");

const authMiddleware = require("../middleware/auth_middleware.js");

const router = express.Router();

router.route("/")
    .get(authMiddleware, indexpage)
    .post(authMiddleware, createUser);

router.get("/new", authMiddleware, createUserForm);

router.get("/:id/edit", authMiddleware, updateUserForm);

router.route("/:id")
    .put(authMiddleware, updateUser)
    .delete(authMiddleware, deleteUser);

module.exports = router;