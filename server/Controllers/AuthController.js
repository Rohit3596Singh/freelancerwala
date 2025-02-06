const bcrypt = require ('bcrypt');
const jwt = require('jsonwebtoken');
const UserModel = require("../models/user")

const signup = async (req,res)=>{
    try{
        const {name, email, password}= req.body
        const user= await UserModel.findOne({email});
        if(user){
            return res.status(409)
            .json( {message : 'User is already exist, you can login', success: false});
        }
        const userModel = new UserModel ({name,email,password});
        userModel.password = await bcry.hash(password,10)
        await userModel.save();
        res.status(201)
            .json({message: "signup successfully",
                success: true
            })
    }catch(err){
        res.status(500)
            .json({message: "Internal Server Error",
                success: true
            })

    }
}
const login = async (req,res)=>{
    try{
        const {email, password}= req.body
        const user= await UserModel.findOne({email});
        const errorMsg = 'Authentication failed email or password is wrong';
        if(!user){
            return res.status(403)
            .json( {message : errorMsg, success: false});
        }
        const isPasswordEqual = await bcrypt.compare(password, user.password);
        if(!isPasswordEqual){
            return res.status(403)
            .json( {message : errorMsg, success: false});
        }
        const jwtToken= jwt.sign({email: user.email, _id:user._id},
            process.env.JWT_SECRET,
            {expiresIn: "24h"}
        )

        res.status(200)
            .json({
                message: "signup successfully",
                success: true,
                jwtToken,
                email,
                name: user.name
            })
    }catch(err){
        res.status(500)
            .json({message: "Internal Server Error",
                success: true
            })

    }
}

module.exports = {signup,login}