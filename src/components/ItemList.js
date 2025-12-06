import { useEffect } from "react";


const ItemList = ({data})=> {
    console.log("Item Data is as follows");
    //console.log(data);
    const {itemCards}=data?.card?.card
    console.log(itemCards);

useEffect(()=>{
    console.log("Calling windows scroll");
    window.scrollTo(0,0);

},[]);

    return (
        <div >
            {
                itemCards.map((item)=>(
                    <div className="text-left mb-6 border-b-2 last:border-none border-gray-200 pl-3" key={item.card.info.id}>

                        <h3 className="text-gray-600 font-serif font-semibold">{item.card.info.name}</h3>
                        <h3 className="text-gray-600 font-semibold font-serif">{"Rs " + item.card.info.price/100}</h3>
                        <h2 className="font-serif text-gray-500">{item.card.info.description}</h2>
                    
                    </div>

                )

                )

             }

            
             

        </div>
       
    )
}

export default ItemList;