import { useParams } from "react-router-dom"
import { useState,useEffect } from "react"

export default function EditListing({}){
    let {id}=useParams();
    // console.log(id);
    let [listing,setListing]=useState({
        title:"",
        description:"",
        image:{url:""},
        price:"",
        location:"",
        country:""
    })
    useEffect(()=>{
        async function getData() {
            let res= await fetch(`http://localhost:8080/listing/${id}/edit`);
            let data= await res.json();
            setListing(data);
        }
        getData();
    },[])

    function formHandler(event){
        let {name,value}=event.target;
        if(name.includes("image")){
            setListing((curr)=>({
                ...curr,image: {...curr.image,url:value}
            }))
        }else{
            setListing((curr)=>({
                ...curr,[name]:value
            }))
        }
        console.log(listing);
    }
     return(
        <>
            <form method='POST' action={`http://localhost:8080/listing/${id}/edit?_method=PUT`} >
                <input name="title" placeholder="Title" type="text" value={listing.title} onChange={formHandler}/>
                <br/>
                <textarea name="description" placeholder="Description" type="text" value={listing.description} onChange={formHandler}/>
                <br/>
                <input name="image" placeholder="image" type="text" value={listing.image?.url} onChange={formHandler}/>
                <br/>
                <input name="price" placeholder="Price" type="text" value={listing.price} onChange={formHandler}/>
                <br/>
                <input name="location" placeholder="location" type="text" value={listing.location} onChange={formHandler}/>
                <br/>
                <input name="country" placeholder="country" type="text" value={listing.country} onChange={formHandler}/>
                <br/>
                <button>Submit</button>
            </form>
        </>
    )
}