import initDb from "../../helpers/initDB";
import Account from "../../models/account";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

initDb()

export default async (req, res) => {

    const {email,password}=req.body;
    try{

        if(!email || !password){
            res.status(422).json({error: 'Add all fields'});
        }
        const user = await Account.findOne({email});
        if(!user){
            return res.status(404).json({error: 'User not found'});
        }
        const match = await bcrypt.compare(password,user.password);
        if(match){
            jwt.sign({userId:user._id},process.env.JWT_SECRET,{
                expiresIn:"7d"
            });
            const {name,email}=user;
            res.status(201).json({token,user:{name,email}})
        }else{
            res.status(401).json({error: 'Unauthorized access'})
        }

        res.status(201).json({message: 'Login Success'});

    }catch(err){
        console.log(err);
    }
}