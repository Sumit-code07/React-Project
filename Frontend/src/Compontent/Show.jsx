import { useParams,Link } from "react-router-dom"
import { useState,useEffect } from "react"
export default function Show(){

    let {id}=useParams();
    let [listing,setListing]=useState({});
    useEffect(()=>{
        async function getData(){
            let listing=await fetch(`http://localhost:8080/listing/${id}`);
            let data=await listing.json();
            setListing(data);
        }
        getData();
    },[])
    return(
        <>
            <img src={listing.image?.url} style={{height:'300px', widht:'300px'}}/>
            <h1>{listing.title}</h1>
            <p>{listing.description}</p>
            <h4>{listing.location}</h4>
            <h4>{listing.country}</h4>
            <h5>&#8377;{listing.price}</h5>
            <form method="POST" action={`http://localhost:8080/listing/${id}?_method=DELETE`}>
                <button className="btn btn-danger" style={{backgroundColor:'red', margin:'10px', padding:'10px'}}>Delete</button>
            </form>
            
            <Link to={`/listing/${listing._id}/edit`} ><button type="button" className="btn btn-primary" style={{padding:'10px'}}>Edit</button></Link>
        </>
    )
}