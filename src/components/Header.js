import { useState } from "react";
import  LOGO_IMG  from "../utils/constants";

const Header=()=>{
    const [loginBtn,setLoginBtn]=useState("Login");
    
    return (
   
   
    <div className="heading-bar">
        <img className="logo-image" src={LOGO_IMG} alt="Pizza"/>
        <ul className="nav-menu">
            <li>Home</li>
            <li>Cart</li>
            <li>About</li>
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
