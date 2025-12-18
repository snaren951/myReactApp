
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';


test("should load the login button", ()=>{

    //step 1: render

    render(


  <Provider store={store}>
  <BrowserRouter>
    
    <Header/>
    
    </BrowserRouter>
    </Provider>
    
    )
    //step 2: Query/find the element

    const loginButton = screen.getByRole("button", {name:"Login"});

  fireEvent.click(loginButton);
 

    const logoutButton = screen.getByRole("button", {name:"Logout"});

    //step 3: Assert/Valiadte if it's in the Document

    expect(logoutButton).toBeInTheDocument();



});