const logger = (req,res,next)=>{  //express supply req,res,next
    const method = req.method;
    const url = req.url;
    const time = new Date();
    console.log(method,url,time)
    // res.send("testing") // Middleware must be terminated by sending response or by using next() to pass on ;
    next();
}
module.exports  = logger;
