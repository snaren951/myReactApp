
import { useState } from "react";
import ItemList from "./ItemList";
const ItemCategory = ({categories})=>{

    const [toggleList, setToggleList] = useState(true);

    const togglebar = ()=>{
        console.log(toggleList);
        setToggleList(!toggleList);

    }

   
    console.log("Printing Categories received");
    console.log(categories);



    return (
        <div  className="w-6/12 m-auto flex-col ">
            
                
                    <div className=" font-serif mt-2 border-b-6 border-gray-200 last:border-none" >
                        <div className="flex justify-between shadow-xl mb-2" onClick={togglebar}>
                            <div className="font-serif font-semibold text-gray-700 pr-2 mb-4 pl-1" >{categories.card?.card?.title+" ("+categories?.card?.card?.itemCards.length+")"}</div>
                            <div className="text-gray-700 text-3xl">{toggleList?"⊖":"⊕"}</div>
                            
                        </div>
                        {toggleList && <ItemList data={categories}/>} 

                    </div>
        </div>

        
        
    )
}

export default ItemCategory;