const { registerUser, userLogin } = require("./users.model");

async function registerController(req,res){
    try{
        const result = await registerUser(req.body);
        if(result.success){
            return res.status(201).json(result);
        }else{
            return res.status(400).json(result);
        }
    }catch(err){
        console.log('getting an error while register controller: ',err.message);
        return res.status(500).json({success:false, message:err.message});
    }
}

async function userLoginController(req,res){
    try{
        // console.log(req.body);
        const result = await userLogin(req.body);
        if(result.success){
            return res.status(201).json(result);
        }else{
            return res.status(400).json(result);
        }
    }catch(err){
        console.log('getting an error while login controller: ',err.message);
        return res.status(500).json({success:false, message:err.message});
    }
}

module.exports ={
    registerController,
    userLoginController
}