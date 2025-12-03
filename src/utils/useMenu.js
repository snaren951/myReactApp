import { useEffect, useState } from "react";

const useMenu = (resId)=>{

    const [resInfo, setResInfo]= useState(null);

    useEffect(()=>{
        fetchMenuInfo();

    },[]);

    const fetchMenuInfo=async ()=> {

       
    const response = await fetch("https://namastedev.com/api/v1/listRestaurantMenu/"+resId);
   
    const json = await response.json();
    
   setResInfo(json.data);
   
    
}

    return resInfo;
}

export default useMenu;
