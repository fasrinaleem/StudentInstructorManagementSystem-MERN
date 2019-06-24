const jwt=require('jsonwebtoken');
const keys=require('../config/key.json');
const JWT_KEY=keys.JWT_KEY;

module.exports=(req,res,next)=>{
    try {
        const token=req.headers.authorization.split(" ")[1];
        const decoded=jwt.verify(token,JWT_KEY);
        req.userDate=decoded;
        next();
    }catch (e) {
        return res.status(401).send('Authorization Failed!');
    }
};