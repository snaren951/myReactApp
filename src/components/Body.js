
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { ShimmerUI } from "./ShimmerUI";
import { Link } from "react-router";




const Body = () =>{
    //local state variable
    const [newStores,setNewStores]=useState([]);
    const [filterRest, setFilterRest]=useState([]);
    const [searchText, setSearchText]=useState('');
   
    console.log("Body rendered again");

   
    async function fetchData(){
       console.log("use Effect called");
      
        const response = await fetch("https://www.swiggy.com/dapi/restaurants/search/v3?lat=12.9352403&lng=77.624532&str=Indian&trackingId=null&submitAction=SUGGESTION&queryUniqueId=361e7009-063a-3dbd-c2aa-3e60fc313551&metaData=%7B%22type%22%3A%22CUISINE%22%2C%22businessCategory%22%3A%22SWIGGY_FOOD%22%2C%22displayLabel%22%3A%22Cuisine%22%7D");
        const data = await response.json();
        const cards =data?.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards;
        //console.log(cards);
        setNewStores(cards);
        setFilterRest(cards);
       
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
        <div className="filter-btn">
            <button className="filter-top" onClick={function(){
            console.log("button Clicked");
            const filteredStores= newStores.filter(function(store){
                return store.card.card.info.avgRating>4.5;
            });
            setFilterRest(filteredStores);

            
            }}>
            Top Rated Restaurants
        </button>
        <button className="filter-family">Family Restarurants</button>

        </div>
        
        <div className="searchbar"> 
            <input type="text" className="inputbox" value={searchText} onChange={
                (e)=>{
                    setSearchText(e.target.value);
                    

                }
            }></input>
            <button className="searchbtn" onClick={function(){

                
               
                
               
                 const filteredList = newStores.filter(function(store){
                    return store.card.card.info.name.toLowerCase().includes(searchText.toLowerCase());
                 });
                 
                 
                 setFilterRest(filteredList);


            }
               

            }>Search</button>
        </div>
       <div>
         <div className="flex flex-wrap px-4 justify-start">
            {
                filterRest.map(restaurant=><Link to={"/restaurant/123456"} key={restaurant.card.card.info.id}><RestaurantCard resDetails={restaurant}/></Link>)


            }
           
        

    
        </div>
       </div>
        
       
       
    </div>)

   
};

export default Body;