import React from "react";
import ReactDOM from "react-dom/client";




const Header=()=>(
    <div className="heading-bar">
        <img className="logo-image" src="https://marketplace.canva.com/EAFaFUz4aKo/3/0/1600w/canva-yellow-abstract-cooking-fire-free-logo-tn1zF-_cG9c.jpg" alt="Pizza"/>
        <ul className="nav-menu">
            <li>Home</li>
            <li>Cart</li>
            <li>About</li>
            <li>Support</li>
        </ul>
    </div>
);
const RestaurantCard= function(){
    return (
    <div className="restaurant-card">

        <div className="card-image">
            <img  src="https://images.food52.com/VOfOuvcQe7fBeSqixNe1L-LhUBY=/d815e816-4664-472e-990b-d880be41499f--chicken-biryani-recipe.jpg" alt="Food"/>

        </div>
        <div className="food-details">
            <ul >
                <li>Biryani House</li>
                <li>Biryanis, Curries and Desserts</li>
                <li>4.9</li>
                <li>30 mins</li>
            </ul>

        </div>
        
       
        
    </div>)

};

const Body = () =>{
    return (
    <div className="body-container">
        <div className="search-box">
            Search

        </div>
        <div className="rest-cards">
             <RestaurantCard/>
             <RestaurantCard/>
             <RestaurantCard/>
             <RestaurantCard/>
             <RestaurantCard/>
             <RestaurantCard/>
             <RestaurantCard/>
             <RestaurantCard/>
             <RestaurantCard/>
             <RestaurantCard/>
             <RestaurantCard/>


        </div>
        
       
       
    </div>)

   
};
const Footer=()=>{

    return (
        <div className="footer">
            <div className="footer-list">Get to Know Us</div>
            <div className="footer-list">Terms of Service</div>
            <div className="footer-list">Privacy</div>
            <div className="footer-list">@CopyRight</div>


        </div>
        


    )
};

const AppLevel = ()=>{

    return (
        <div>
            <Header/>
            <Body/>
            <Footer/>
            
        </div>

    )
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLevel/>);
