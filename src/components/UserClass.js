import React from "react";


class UserClass extends React.Component{

    constructor(props){
        console.log("user class constructor");
        super(props);
        this.state = {
            count : 0
        }
       
    }
    componentDidMount(){

        console.log("user class ComponentDidMount");
    }

    render(){
        console.log("userclass render");
        const {name, contact} = this.props;


        return (
            <div>
                
                <h2>Name: {name},</h2>

                
                <h3> Contact: {contact}</h3>
                <h4>Count: {this.state.count}</h4>
                <button onClick={()=>{
                    this.setState({
                        count: this.state.count+1
                    })
                }}>Click Me</button>
                

                
                
                
            </div>
            
        )
    }

}

export default UserClass;
