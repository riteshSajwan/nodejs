const {UnauthenticatedError} = require('../errors/')
const jwt = require('jsonwebtoken')

const authenticationMiddleware = async(req,res,next)=>{
    const authHeader = req.headers?.authorization;
    if(!authHeader || !authHeader.startsWith('Bearer ')){
        throw new UnauthenticatedError("No Token provided")
        // throw new CustomAPIError("No Token provided",401)
    }
    const token = authHeader.split(' ')[1];
    console.log("token",token)
    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        const {id,username} = decoded;
        req.user = {id,username} //to pass to function
        next();

        // res.status(200).json({msg:`Hello, ${decoded.username}`,secret:`Here is your lucky data ${decoded.id}`})

    }catch(err){
        throw new UnauthenticatedError('Invalid Tokend')
    }

}

module.exports = authenticationMiddleware;