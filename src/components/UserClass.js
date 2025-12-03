import React from "react";


class UserClass extends React.Component{

    constructor(props){
        console.log("user class constructor");
        super(props);
        this.state = {
            info: {
                name:null,
            avatar_url:null,
            location:null

            },
            
            counter: {
                count:0
            }
            
        };
           
           console.log(this.state);
               
           
        }
        
       
    
    async componentDidMount(){

        console.log("user class ComponentDidMount");
        const userData = await fetch("https://api.github.com/users/snaren951");
        const data = await userData.json();
        console.log(data);
        this.setState({
            info: data
        });
        
    }
    componentDidUpdate(){
        console.log("This will be called every time the component is updated");
    }

    componentWillUnmount(){

        console.log(" It will be called when we leave the page/when the component is removed from the DOM");
    }

    render(){
        console.log("userclass render");
        const {name, location, avatar_url} = this.state.info;
        const {count} = this.state.counter;
      
        


        return (
            <div>
                <img src={avatar_url}></img>
                <h2>Name: {name},</h2>
                <h2>Location: {location}</h2>
                <h3>Count: {count}</h3>
                <button onClick={
                    ()=>{
                       
                        this.setState({
                            counter: {count: count+1}
                        });

                    }
                }>Click Me</button>
                
            </div>
            
        )
    }

}

export default UserClass;
