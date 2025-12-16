import { render, screen } from "@testing-library/react"
import About from "../About";
import '@testing-library/jest-dom';



test("To test if the About page is loaded onto DOM or not", ()=>{

    render(<About/>)

    const heading = screen.getByRole("heading")

    expect(heading).toBeInTheDocument();
});

test("To test if the word India is loaded or not", ()=>{

    render(<About/>)

    const pTag = screen.getAllByRole("paragraph");

    expect(pTag.length).toBe(1);
})