const User = require("../models/user.model"); 

const userLogin = async (req, res)=>{
    res.json({msg:"login route"});
};

const userSignup = async (req, res)=>{
    res.json({msg:"signup route"});
};

module.exports = {
        userLogin,
        userSignup
}