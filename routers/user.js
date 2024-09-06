const express = require("express");
const { signup, login, getUsers, updateUser } = require("../controllers/user");
const auth = require("../middleware/auth");

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/users",auth, getUsers);
router.put("/:userId",auth, updateUser);
module.exports = router;
