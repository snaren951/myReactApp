import UserClass from "./UserClass";
const Contact = ()=>{
    return (
        <div className="my-5 flex-col justify-center">
            <h1>Welcome to Contacts Section</h1>
            <h2>Please see our contact details</h2>
            <div>
                <p>Road #1, Seven Hills, San Mateo, CA</p>
            </div>
            <UserClass name={"ABC Corporation"} contact={"123-395-5678"}/>
        </div>
    )
}

export default Contact;