const authorize = (req,res,next) =>{
    const {user} = req.query;
    if(user==='John'){
        req.user = {name:"John",id:3} //obj attached to req.user
        next();
    }
    else{
        res.status(401).send("Unauthorize User")
    }
    console.log("authorize")
    next();
}
module.exports = authorize;