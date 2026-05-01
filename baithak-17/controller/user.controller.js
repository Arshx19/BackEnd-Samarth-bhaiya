const UserModel = require("../model/User.model")
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

async function register(req,res){
    let {fullName,email,password} = req.body;
    let data = await UserModel.findOne({email})
    if(data){
        return res.status(400).json({msg:"User exist"})
    }

    let newUser = await UserModel.create({
        fullName
        ,email,
        password:bcrypt.hashSync(password,10)});
    return res.status(201).json(newUser)
}

async function login(req,res){
    let {email,password} = req.body;
    let data = await UserModel.findOne({email})
    if(!data){
        return res.status(400).json({msg:"User does not exist!"})
    }

    let validation = bcrypt.compareSync(password,data.password);
    if(!validation) {
       return res.status(400).json({msg:"Invalid credential!"}) 
    }

    // create token
    const token = jwt.sign({ id: data._id }, "SECRETKEY", { expiresIn: '1hr' });

    return res.status(200).json({
        user: {
            fullName : data.fullName,
            email : data.email
        },
        token: token
    })
}


module.exports = {register,login}