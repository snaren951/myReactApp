import { useState } from "react";
import  LOGO_IMG  from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header=()=>{
    const [loginBtn,setLoginBtn]=useState("Login");

    const onlineState= useOnlineStatus();
    console.log(onlineState);
    
    return (
   
   
    <div className="heading-bar">
        <img className="logo-image" src={LOGO_IMG} alt="Pizza"/>
        <ul className="nav-menu">
            <li> Status: {onlineState? "✅":"🔴"}</li>
            <li><Link to="/">Home</Link></li>
            <li>Cart</li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><button className="login-btn" onClick={
                ()=>{
                    console.log("button clicked");
                     loginBtn==="Login"? setLoginBtn("Logout"):setLoginBtn("Login");
                    
                }
            }>{loginBtn}</button></li>
        </ul>
    </div>
)};

export default Header;
