import Card from "./Card"
import '../Style/CardGrp.css'
import {useState,useEffect} from 'react'
import {Link} from "react-router-dom";
import AddBtn from "./AddBtn";

export default function CardGrp(){
    let [listings,setListings]=useState([]);
    useEffect(()=>{
        async function getData() {
            let res=await fetch('http://localhost:8080/listing')
            let data=await res.json();
            setListings(data);
        }
        getData();
    },[])
    return(
        <>
            <AddBtn/>
            <div className="allCard" style={{margin:'20px' }}>
                {listings.map((listing)=>(
                    <Link to={`/listing/${listing._id}`}>
                        <Card title={listing.title} price={listing.price} id={listing._id} location={listing.location} image={listing.image?.url}/>
                    </Link>
                ))}
            </div>
        </>
        
         
    )
}