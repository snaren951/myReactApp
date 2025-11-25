
const RestaurantCard= function(props){

    const {resDetails}=props;


    
    return (
    <div className="restaurant-card">

        <div className="card-image">
            <img  src={resDetails.image.items[0].url} alt="Food"/>

        </div>
        <div className="food-details">
            <ul >
                <li>{resDetails.title.text}</li>
                <li>{resDetails.rating.text}</li>
                <li>{resDetails.meta[0].text}</li>
            </ul>

        </div>
        
       
        
    </div>)

};

export default RestaurantCard;