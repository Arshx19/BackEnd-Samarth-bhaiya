const { decode } = require("jsonwebtoken");
const userModel = require("../model/User.model");

function verifyToken(req,res,next){
    if(
        req.headers &&
        req.header.authorisation &&
        req.hrader.authorisation.split(" ")[0] ==="JWT"
    ){
        Jwt.verify(token,'SECRETKEY',async function(err,decoded){
            if(err){
                return res.json({msg:"token is invalid"})
            }
            let user = await userModel.findbyId(decoded.id)
            console.log(decoded,"decoded");
            re.user = user;
            next();
        });
    }
    else{
        return res.json({msg:"token nh milla "})
    }
}

module.exports = verifyToken