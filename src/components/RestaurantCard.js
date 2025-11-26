
import { FOOD_IMG } from "../utils/constants";

const RestaurantCard= function(props){

    const {resDetails}=props;
   // console.log(resDetails);
    const {name,avgRating,costForTwoMessage}=resDetails.card.card.info;


    
    return (
    <div className="restaurant-card">

        <div className="card-image">
            <img  src={FOOD_IMG+resDetails.card.card.info.cloudinaryImageId} alt="Food"/>

        </div>
        <div className="food-details">
            <ul >
                <li>{name}</li>
                <li>{avgRating}</li>
                <li>{costForTwoMessage}</li>
            </ul>

        </div>
        
       
        
    </div>)

};

export default RestaurantCard;