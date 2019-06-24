const jwt=require('jsonwebtoken');
const keys=require('../config/key.json');
const JWT_KEY=keys.JWT_KEY;

module.exports=(req,res,next)=>{
    try{const token=req.headers.authorization.split(" ")[1];
        const decoded=jwt.verify(token,JWT_KEY);
        if(decoded.userType==='admin'){
            req.userData=decoded;
            next();
            console.log(decoded.userType);
            

        }else{
            return res.status(401).json('Not an '+ decoded.userType+' !')
        }
    }catch (e) {
        return res.status(401).json({
            message:'Auth Failed'
        })
    }

};