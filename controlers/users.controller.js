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
                return res.json(token);
            }
            return res.status(400).json({message: "incorrect email or password"});
        } 
        return res.status(400).json({message: "line is not filled"});
    }

    static async signup (req, res){
        const { name, lastname, email, password } = req.body;
        const checkEmail = await userModel.findOne({email: email});
        if(checkEmail) {
            return res.status(400).json({message: "this email already exists"});
        }
        if(name && lastname && email && password){
            const newUser = await userModel.create(req.body);
        }
    }
}


module.exports = userAuthorization;