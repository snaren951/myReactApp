import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
//import Contact from "./components/Contact";
import Error from "./components/Error";
import Menu from "./components/Menu";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import DummyImage from "./components/DummyImage";

const Contact = lazy(()=> import("./components/Contact"));





const AppLevel = ()=>{


    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
            
           
            
        </div>

    )
};






const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLevel/>,
        children:[
             {
         path:"/",
        element:<Body/>

    },
            {
         path:"/about",
        element:<About/>

    },

    {
         path:"/contact",
        element:(<Suspense fallback={<DummyImage/>}>
            <Contact/>
        </Suspense>)
    },
     {
         path:"/restaurant/:resId",
        element:<Menu/>
    },


        ],

        errorElement:<Error/>
    }
    
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);
