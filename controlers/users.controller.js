const userModel = require('../models/users.model');
const jwt = require('jsonwebtoken');
const key = "s871uiv./zxc9;.,12ew,ads.zxc.###%"

class userAuthorization{
    static async login(req, res){
        const { email, password }  = req.body;
        if(email && password){
            const user = await userModel.findOne({email: email});
            if(user && user.password === password){
                const token = jwt.sign({ email: user.email, name: user.name }, key);
                return res.json({status: 0, token, user});
            }
            return res.status(400).json({message: "incorrect email or password"});
        } 
        return res.status(400).json({message: "line is not filled"});
    }

    static async signup (req, res){
        const { name, lastname, email, mobile, password} = req.body;
        const checkEmail = await userModel.findOne({email});
        const checkMobile = await userModel.findOne({mobile})
        if(checkEmail || checkMobile) {
            return res.status(400).json({message: "this email already exists"});
        }
        if(name && lastname && email && password && mobile){
            const newUser = await userModel.create({name, lastname, email, mobile, password});
            return res.json("you create new users");
        }
        return res.json("you did not fill in the entire field");
    }
}


module.exports = userAuthorization;