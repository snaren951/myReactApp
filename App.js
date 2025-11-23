import React from "react";
import ReactDOM from "react-dom/client";
 
 /*
 const heading = React.createElement("div",{id: "parent"},
                    React.createElement("div",{id: "child"},
                        [React.createElement("h1",{id: "heading1"}, "This heading is done by h1 tag"),
                         React.createElement("h2",{id: "heading2"}, "This heading is done by h2 tag")]));
*/

const elem1 = <h2>React JSX Element</h2>;
const elem2 =<span> {elem1} </span>;

const Title = ()=> (<div className="head" tabIndex="5">
    <h1>Title JSX Element</h1>
    {elem2}
    </div>);

const Jsxheading = ()=>  (
    <div>
         {Title()}

        <h1 id="parent">Namaste React by JSX</h1>

    </div>
    
       
   
    );

 const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(<Jsxheading/>);