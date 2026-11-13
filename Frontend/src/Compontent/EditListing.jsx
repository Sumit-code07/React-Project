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
    }
     return(
        <>
            <form method='POST' action={`http://localhost:8080/listing/${id}/edit?_method=PUT`} data-bs-validate>
                <input name="title" placeholder="Title" class="form-control" required type="text" value={listing.title} onChange={formHandler}/>
                <div class="invalid-feedback">Title is required</div>
                <br/>
                <textarea name="description" placeholder="Description" class="form-control" required type="text" value={listing.description} onChange={formHandler}/>
                <div class="invalid-feedback">Descrption is required</div>
                <br/>
                <input name="image" placeholder="image" class="form-control" required type="text" value={listing.image?.url} onChange={formHandler}/>
                <div class="invalid-feedback">Image Url is required</div>
                <br/>
                <input name="price" placeholder="Price" class="form-control" required type="number" value={listing.price} onChange={formHandler}/>
                <div class="invalid-feedback">Price is required</div>
                <br/>
                <input name="location" placeholder="location" class="form-control" required type="text" value={listing.location} onChange={formHandler}/>
                <div class="invalid-feedback">Location is required</div>
                <br/>
                <input name="country" placeholder="country" class="form-control" required type="text" value={listing.country} onChange={formHandler}/>
                <div class="invalid-feedback">Country is required</div>
                <br/>
                <button>Submit</button>
            </form>
        </>
    )
}