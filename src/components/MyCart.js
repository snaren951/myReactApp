import ItemList from "./ItemList";
import { useSelector } from "react-redux";

const MyCart = ()=>{

    const itemsAdded = useSelector((store)=>store.cart.items);
    console.log(itemsAdded);


    return (
        <div className="mb-100 mt-5 w-6/12 border-1 border-gray-200 m-auto">
            <div className="font-bold text-2xl text-gray-700 text-center bg-red-100">Cart</div>
            <div className="font-bold mt-4">
                {itemsAdded.length===0 && <h2>Your cart is empty. Make sure to check our offerings and offers.</h2>}
            </div>
            <div>
                <ItemList items={itemsAdded} showAddButton={false}/>
            </div>
        
           
          

        </div>
        
    )
}

export default MyCart;