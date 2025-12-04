import { useState } from "react";
import  LOGO_IMG  from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header=()=>{
    const [loginBtn,setLoginBtn]=useState("Login");

    const onlineState= useOnlineStatus();
    console.log(onlineState);
    
    return (
   
   
    <div className="flex justify-between items-center border border-black-400 bg-red-300">
        <img className="w-35" src={LOGO_IMG} alt="Pizza"/>
        <ul className="flex">
            <li className="px-4"> Status: {onlineState? "✅":"🔴"}</li>
            <li className="px-4"><Link to="/">Home</Link></li>
            <li className="px-4">Cart</li>
            <li className="px-4"><Link to="/about">About</Link></li>
            <li className="px-4"><Link to="/contact">Contact Us</Link></li>
            <li className="px-4"><button className="login-btn" onClick={
                ()=>{
                    console.log("button clicked");
                     loginBtn==="Login"? setLoginBtn("Logout"):setLoginBtn("Login");
                    
                }
            }>{loginBtn}</button></li>
        </ul>
    </div>
)};

export default Header;
