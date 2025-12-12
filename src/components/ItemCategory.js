import React from "react";

import ItemList from "./ItemList";
const ItemCategory = ({categories, expand,handleToggle,index})=>{

    
   
    console.log("Item Categories re-rendering");

    const handler = ()=>{
        handleToggle(prev=>prev===index?null:index);


    }

 

   

    return (
        <div  className="w-6/12 m-auto flex-col ">
            
                
                    <div className=" font-serif mt-2 border-b-6 border-gray-200 last:border-none" >
                        <div className="flex justify-between shadow-xl mb-2" onClick={handler}>
                            <div className="font-serif font-semibold text-gray-700 pr-2 mb-4 pl-1" >{categories.card?.card?.title+" ("+categories?.card?.card?.itemCards.length+")"}</div>
                            <div className="text-gray-700 text-3xl">{expand ?"⊖":"⊕"}</div>
                            
                        </div>
                        { expand  && <ItemList items={categories.card.card.itemCards} showAddButton={true}/>}

                    </div>
        </div>

        
        
    )
}

export default React.memo(ItemCategory);