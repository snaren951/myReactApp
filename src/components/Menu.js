

import { ShimmerUI } from "./ShimmerUI";
import { useParams } from "react-router";
import useMenu from "../utils/useMenu";
import ItemCategory from "./ItemCategory";
import { useState } from "react";


const Menu = ()=>{

    console.log("Menu Render");

    const params = useParams();
    
    const {resId}=params;
    const [expandList, setExpandList] = useState(0);
   
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
//console.log("Data cardds is below");
//console.log(dataCards);
//dataCard.card?.card?.title
//item.card.info.name
// dataCard.card.card.itemCards






    return (
        <div className="font-serif text-center mt-3 min-h-120">

            <h2 className=" text-2xl text-gray-700 font-semibold">{name}</h2>
            <h3 className="font-semibold text-gray-700 ">{avgRating}</h3>
            <h3 className="font-semibold text-gray-700 ">{costForTwoMessage}</h3> 
            <br></br>

            {

                dataCards.map(
                    (dataCard, index)=>(
                    <ItemCategory key={dataCard.card.card.title} categories={dataCard} expand={index===expandList} index={index} handleToggle={setExpandList}/>
                ))
            }

          
            
        </div>
    )
}

export default Menu;