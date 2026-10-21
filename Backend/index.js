const express=require("express");
const mongoose = require('mongoose');

const app=express();
const Port=8080;

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/hotel2');
}

main()
.then(()=>{
    console.log("mongoDB is connected.");
    app.listen(Port,()=>{
        console.log("App is listing Port 8080");
    })
}).catch(err => console.log(err));

const Listing=require("./Models/listing");
const data=require("./init/data");


app.get("/",async (req,res)=>{
    let allData=data.data.map((val)=>( val ));
    // console.log(allData);
    await Listing.insertMany(allData)
    .then(()=>{
        console.log("Data is saved");
    })
    .catch(err => console.log(err));
    // console.log(Listing);
    // console.log(data);
})
