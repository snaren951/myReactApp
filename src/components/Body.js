
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { ShimmerUI } from "./ShimmerUI";




const Body = () =>{
    //local state variable
    const [newStores,setnewStores]=useState([]);

   
    async function fetchData(){
       console.log("use Effect called");

        const response = await fetch("https://www.swiggy.com/dapi/restaurants/search/v3?lat=12.9352403&lng=77.624532&str=Indian&trackingId=null&submitAction=SUGGESTION&queryUniqueId=361e7009-063a-3dbd-c2aa-3e60fc313551&metaData=%7B%22type%22%3A%22CUISINE%22%2C%22businessCategory%22%3A%22SWIGGY_FOOD%22%2C%22displayLabel%22%3A%22Cuisine%22%7D");
        const data = await response.json();
        const cards =data?.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards;
        //console.log(cards);
        setnewStores(cards);
       
    };
   

    useEffect(()=>{
        fetchData();

    },[]);
    
    //console.log("Body rendering");

    if (newStores.length===0){
        return <ShimmerUI/>
    }

    return (
    <div className="body-container">
        <button className="filter-btn" onClick={function(){
            console.log("button Clicked");
            const filteredStores= newStores.filter(function(store){
                return store.card.card.info.avgRating>4.5;
            });
            setnewStores(filteredStores);
            
            
            }}>
            Top Rated Restaurants
        </button>
        <div className="rest-cards">
            {
                newStores.map(restaurant=><RestaurantCard key={restaurant.card.card.info.id} resDetails={restaurant}/>)


            }
           
        

    
        </div>
        
       
       
    </div>)

   
};

export default Body;