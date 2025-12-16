
import { sum } from "../sum";

test("Sum function will return the sum of two numbers", ()=>{

    const result = sum(4,5);

    expect(result).toBe(9);



})