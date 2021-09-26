import initDb from "../../helpers/initDB";
import Account from "../../models/account";

initDb()

export default async (req, res) => {

    const {name,email,password}=req.body;
    // res.status(200).json({ name: req.body.n , email: req.body.e , psw: req.body.p });
    try{

        if(!name || !email || !password){
            res.status(422).json({error: 'Add all fields'});
        }
        const user = await Account.findOne({email});
        if(user){
            console.log(user.name);
            return res.status(402).json({error: 'User email already exists'});
        }
        const newAccount=new Account({
            name,
            email,
            password
        }).save()

        console.log(newAccount);

        res.status(201).json({message: 'Account created'});

    }catch(err){
        console.log(err);
    }
}