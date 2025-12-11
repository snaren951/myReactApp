import ItemList from "./ItemList";
import { useSelector } from "react-redux";

const MyCart = ()=>{

    const itemsAdded = useSelector((state)=>state.cart.items);
    console.log(itemsAdded);


    return (
        <div className="mb-100 mt-5 w-6/12 border-1 border-gray-200 m-auto">
            <div className="font-bold text-2xl text-gray-700 text-center bg-red-100">Cart</div>
            <div className="flex-col">
                {
                     itemsAdded.map((item, index)=>(<div className="my-2 border-b border-b-red-100 last:border-b-0" key={item+index} >{item}</div>))

                }
               


            </div>
           
          

        </div>
        
    )
}

export default MyCart;