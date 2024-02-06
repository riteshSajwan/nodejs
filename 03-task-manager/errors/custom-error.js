//custom error class

class CustomAPIError extends Error{
    //extends from Error class
    constructor(message,statusCode){
        super(message)
        this.statusCode = statusCode //this.statusCode 
    }
}

const createCustomError = (msg,statusCode)=>{
    return new CustomAPIError(msg,statusCode)
}

module.exports = {createCustomError,CustomAPIError}