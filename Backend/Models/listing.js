const mongoose=require("mongoose");

const listings=new mongoose.Schema({
    title: String,
    description: String,
    image: {
      filename: String,
      url: String,
    },
    price: Number,
    location: String,
    country: String,
})

const Listing=new mongoose.model("Listing",listings)

module.exports = Listing;