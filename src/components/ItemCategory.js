
import { useState } from "react";
import ItemList from "./ItemList";
const ItemCategory = ({categories, expand, setExpandList})=>{

    const [toggleList, setToggleList] = useState(expand);
   
    console.log("Item Categories re-rendering");

    const togglebar = ()=>{
        setToggleList(!toggleList);
        setExpandList();

    }
    

   

    return (
        <div  className="w-6/12 m-auto flex-col ">
            
                
                    <div className=" font-serif mt-2 border-b-6 border-gray-200 last:border-none" >
                        <div className="flex justify-between shadow-xl mb-2" onClick={togglebar}>
                            <div className="font-serif font-semibold text-gray-700 pr-2 mb-4 pl-1" >{categories.card?.card?.title+" ("+categories?.card?.card?.itemCards.length+")"}</div>
                            <div className="text-gray-700 text-3xl">{expand && toggleList?"⊖":"⊕"}</div>
                            
                        </div>
                        { expand && toggleList && <ItemList data={categories}/>}

                    </div>
        </div>

        
        
    )
}

export default ItemCategory;