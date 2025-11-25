
import RestaurantCard from "./RestaurantCard";
import {storesList} from "../utils/constants";
import { useState } from "react";



const Body = () =>{
    //local state variable
    const [newStores,setnewStores]=useState(storesList);
    return (
    <div className="body-container">
        <button className="filter-btn" onClick={function(){
            console.log("button Clicked");
            const filteredStores= newStores.filter(function(store){
                return store.rating.text>4.5;
            });
            setnewStores(filteredStores);
            
            
            }}>
            Top Rated Restaurants
        </button>
        <div className="rest-cards">
            {
                newStores.map(restaurant=><RestaurantCard key={restaurant.storeUuid} resDetails={restaurant}/>)


            }
           
        

    
        </div>
        
       
       
    </div>)

   
};

export default Body;