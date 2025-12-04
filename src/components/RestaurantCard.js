
import { FOOD_IMG } from "../utils/constants";

const RestaurantCard= function(props){

    const {resDetails}=props;
   // console.log(resDetails);
    const {name,avgRating,costForTwoMessage}=resDetails.card.card.info;


    
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
            </ul>

        </div>
        
       
        
    </div>)

};

export default RestaurantCard;