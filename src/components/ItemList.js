import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cart";


const ItemList = ({data})=> {

    const dispatch=useDispatch();


    const addItemHandler = (item)=>{
        dispatch(addItem(item.card.info.name));
        console.log(item);
        //action:{
        // paylaod:"Biryani"}


    }
   
    const {itemCards}=data?.card?.card


    return (
        <div >
            {
                itemCards.map((item)=>(
                    <div className="text-left mb-6 border-b-2 last:border-none border-gray-200 pl-3" key={item.card.info.id}>


                        
                        <h3 className="text-gray-600 font-serif font-semibold">{item.card.info.name}</h3>
                        
                        <h3 className="text-gray-600 font-semibold font-serif">{"Rs " + item.card.info.price/100}</h3>
                        <h2 className="font-serif text-gray-500">{item.card.info.description}</h2>
                        <button className="text-white font-bold bg-red-300 px-2 rounded-xl justify-self-end hover:cursor-pointer my-2" onClick={()=>addItemHandler(item)}>Add+</button>
                        
                    
                    </div>

                )

                )

             }

            
             

        </div>
       
    )
}

export default ItemList;