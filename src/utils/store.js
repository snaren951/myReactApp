import { configureStore } from "@reduxjs/toolkit";
import reducer from "./cart";

const store= configureStore({
    reducer:{
        cart:reducer
        
       
    }
});


export default store;
