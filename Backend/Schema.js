const joi=require("joi");

const listingSchema=joi.object({
    listing:joi.object({
        title:joi.string().required(),
        description: joi.string(),
        image:joi.object({
            filename:joi.string().allow("",null),
            url:joi.string().allow("",null),
        }),
        price:joi.number().required(),
        location:joi.string().required(),
        country:joi.string().required(),
    }).required(),
});

module.exports=listingSchema;