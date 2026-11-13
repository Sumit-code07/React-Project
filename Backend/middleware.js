const {listingSchema,editListing}=require("./Schema");
const ExpressError=require("./utils/ExpressError")

//new listing validation
module.exports.validateSchema=(req,res,next)=>{
    const{error,value}=listingSchema.validate(req.body);
    if(error){
        // throw new ExpressError(400,error.details[0].message);
        let errMsg=error.details.map((el)=>el.message).join(",");
        throw new ExpressError(400,errMsg)
    }else{
        next();
    }
}

//edit listing validation
module.exports.editValidation=(req,res,next)=>{
    const {error}=editListing.validate(req.body);
    if(error){
        let errMsg=error.details.map((err)=>err.message).join(",");
        throw new ExpressError(400,errMsg)
    }else{
        next();
    }
}