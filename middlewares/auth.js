const jwt = require('jsonwebtoken');
const users = require("../models/users.model");


async function auth (req, res, next) {
    try {
      if(req.headers.authorization){
          const token = req.headers.authorization
          const decoded = jwt.verify(token, "s871uiv./zxc9;.,12ew,ads.zxc.###%");
            if(decoded){
              const user = await users.findOne({email: decoded.email});
              if (user) {
                req.user = decoded;
                return next();
              }
            }
            return res.json({status: 1, message: "invalid token"})  
      }  
      return res.json({status: 1, message: "no authentication"})
    } catch (err) {
      res.status(500).json({message: err.message});
    }
  
  
  

}

module.exports = auth;