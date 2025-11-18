 /*

 <div id="parent">
  <div id="child">
    <h1 id="heading">This heading is done by h1 tag</h1>
  </div>
</div>



 */
 
 
 const heading = React.createElement("div",{id: "parent"},
                    React.createElement("div",{id: "child"},
                        [React.createElement("h1",{id: "heading1"}, "This heading is done by h1 tag"),
                         React.createElement("h2",{id: "heading2"}, "This heading is done by h2 tag")]));



 const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(heading);