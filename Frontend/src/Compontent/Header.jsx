import "../Style/Header.css"
import { useState,useEffect } from "react"

export default function Header(){
    const [search,setSearch]=useState("");
    function handleSearch(event){
        setSearch(event.target.value);
    }
    return(
        <>
            <div className="header">
                <div className="logo"><h1>Airbnb</h1></div>
                <div className="search">
                    <input className="form-control" type="text" id="sizesInputDefault" placeholder="Search" aria-label="Default input example" value={search} onChange={handleSearch}></input>
                    
                </div>
                <div className="login">
                    <h6>Home page</h6>
                    <h6>Login</h6>
                    <h6>Register</h6>
                </div>
            </div>
        </>
    )
}