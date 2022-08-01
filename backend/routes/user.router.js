const express = require("express");

const { userLogin,
        userSignup
       } = require("../controllers/user.controller")
       
const router = express.Router()
// login route
router.post("/login", userLogin);
// signup route
router.post("/signup", userSignup);

module.exports = router;