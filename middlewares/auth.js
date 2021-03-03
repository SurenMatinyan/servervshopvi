const jwt = require('jsonwebtoken');
const users = require("../models/users.model");


async function auth (req, res, next) {
 
    try {
      if(req.headers.authorization.length > 2){

          const token = req.headers.authorization
          const decoded = jwt.verify(token, "s871uiv./zxc9;.,12ew,ads.zxc.###%");
            if(decoded){
              const user = await users.findOne({email: decoded.email});
              if (user) {
                res.json(user);
                return next();
              }
            }
            
      }  
    } catch (err) {
      res.status(500).json({message: err.message});
    }
  
  
  

}

module.exports = auth;