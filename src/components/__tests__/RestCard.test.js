import mockRestCard from "../MockData/mockRestCard";
import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import RestaurantCard from "../RestaurantCard";
import { EnhancedRestaurantCard } from "../RestaurantCard";

const CardwithLabel = EnhancedRestaurantCard(RestaurantCard);


test("should render the restaurant Name", ()=>{

    render(<RestaurantCard resDetails={mockRestCard} />);

    const restName = screen.getByText("Haldiram's Restaurant");

    expect(restName).toBeInTheDocument();

});

test("should render the promoted label for the card with promoted", ()=>{

    render(<CardwithLabel resDetails={mockRestCard}/>);

    const restName = screen.getByText("Promoted");

    expect(restName).toBeInTheDocument();
});