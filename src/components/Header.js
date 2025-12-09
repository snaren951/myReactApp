import { useEffect, useState } from "react";
import  LOGO_IMG  from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import loginUser from "../utils/UserContext";
import { useContext } from "react";

const Header=()=>{
    const [loginBtn,setLoginBtn]=useState("Login");

    const onlineState= useOnlineStatus();
    //console.log(onlineState);

    const {loginName} = useContext(loginUser);
    //console.log(loginName);
    console.log("Header Render");


   




    
    return (
   
   
    <div className="flex justify-between items-center border border-amber-500 m-0.5 rounded-2xl bg-red-50">
        <img className="w-35 rounded-2xl" src={LOGO_IMG} alt="Pizza"/>
        <ul className="flex">
            <li className="px-4 font-semibold"> Status: {onlineState? "✅":"🔴"}</li>
            <li className="px-4 font-semibold"><Link to="/">Home</Link></li>
            <li className="px-4 font-semibold">Cart</li>
            <li className="px-4 font-semibold"><Link to="/about">About</Link></li>
            <li className="px-4 font-semibold"><Link to="/contact">Contact Us</Link></li>
            <li className="px-4 font-semibold"><button className="login-btn" onClick={
                ()=>{
                    console.log("button clicked");
                     loginBtn==="Login"? setLoginBtn("Logout"):setLoginBtn("Login");
                    
                }
            }>{loginBtn}</button></li>
            <li className="px-4 font-semibold">UserName: {loginName}</li>
        </ul>
    </div>
)};

export default Header;
