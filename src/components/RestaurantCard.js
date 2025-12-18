
import { FOOD_IMG } from "../utils/constants";

import { useContext } from "react";
import loginUser from "../utils/UserContext";

const RestaurantCard= function(props){


      console.log("Restaurant card Render");

    const {resDetails}=props;
  console.log(resDetails);
    const {name,avgRating,costForTwoMessage}=resDetails.card.card.info;

const {loginName} = useContext(loginUser);
    
    return (
    <div className="bg-red-50 h-90 w-60 rounded-3xl m-3 hover:bg-red-200">

        <div>
            <img className="rounded-2xl" src={FOOD_IMG+resDetails.card.card.info.cloudinaryImageId} alt="Food"/>

        </div>
       

        
        <div className="food-details">
            <ul >
                <li className="font-semibold">{name}</li>
                <li>{avgRating}</li>
                <li>{costForTwoMessage}</li>
                <li>{loginName}</li>
            </ul>

        </div>
        
        
       
        
    </div>)

};

export const EnhancedRestaurantCard=(RestaurantCard)=>{

    return (props)=>{

        return (
            <div>
                <label className="flex justify-start absolute bg-green-400 p-1 m-3 rounded-full text-white">Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }


}

export default RestaurantCard;