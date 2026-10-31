const express=require("express");
const mongoose = require('mongoose');
const cors=require('cors');
const methodOverride=require('method-override')

const app=express();
const Port=8080;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(methodOverride("_method"));

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

//new data inserting
// app.get("/",async (req,res)=>{
//     let allData=data.data.map((val)=>( val ));
//     await Listing.insertMany(allData)
//     .then(()=>{
//         console.log("Data is saved");
//     })
//     .catch(err => console.log(err)); 
// })

//listing route
app.get("/listing",async (req,res)=>{
    let allListing=await Listing.find({});
    res.json(allListing);
})

//new route
app.post("/listing",(req,res)=>{
    // console.log("Body:",req.body);
    let {listing}=req.body;
    Listing.insertOne(listing);
    res.redirect("http://localhost:5173/listing");
})

// Show route
app.get("/listing/:id",async (req,res)=>{
    let {id}=req.params;
    let data=await Listing.findById(id);
    res.json(data);
})

//Edit route
app.get("/listing/:id/edit",async (req,res)=>{
    let {id}=req.params;
    let data=await Listing.findById(id);
    res.json(data);
})

app.put("/listing/:id/edit",async (req,res)=>{
    let {id}=req.params;
    let listing=req.body;
    listing={
        ...listing,
        image:{
            url:listing.image
        }
    }
    // console.log(listing);
    await Listing.findByIdAndUpdate(id,listing,{new:true});
    res.redirect("http://localhost:5173/listing");
})


app.delete("/listing/:id",async (req,res)=>{
    let {id}=req.params;
    await Listing.findByIdAndDelete(id);
    res.redirect('http://localhost:5173/listing');
})
