

import { ShimmerUI } from "./ShimmerUI";
import { useParams } from "react-router";
import useMenu from "../utils/useMenu";


const Menu = ()=>{

    const params = useParams();
    
    const {resId}=params;
   
//calling the custom hook
    const resInfo = useMenu(resId);



if (resInfo===null){
    return <ShimmerUI/>
}

const {name, costForTwoMessage, avgRating} = resInfo?.cards[2]?.card?.card?.info;
const {cards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR;
//console.log(cards);

const dataCards = cards?.filter((card)=>{
    return card?.card
})
//console.log(dataCards);




    return (
        <div className="restaurant-menu">

            <h2>{name}</h2>
            <h3>{avgRating}</h3>
            <h3>{costForTwoMessage}</h3> 
            <br></br>
            
                {
                dataCards.map(dataCard=>(
                <div key={dataCard.card?.card?.title}>

                    <h4 >{dataCard.card?.card?.title}</h4>
                    <ul>
                        {
                            dataCard.card.card.itemCards.map(item=>(<li key={item.card.info.id}> {item.card.info.name} - {"Rs "+item.card.info.price/100}</li>))
                        }

                    </ul>
                </div>
            
            ))
               

            }

           
            
            
        
        </div>
    )
}

export default Menu;