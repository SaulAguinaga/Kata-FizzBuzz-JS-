import { fizzbuzz } from "../src/scripts/FizzBuzz";

describe('FizzBuzz', () => {
    test('should return Fizz if divisible for 3', () => {
        //Given
        let numb = 3;
        //When
        const result = fizzbuzz(numb);
        //Then
        expect(result).toBe("Fizz");
    });
    test('should return Buzz if divisible for 5', () => {
        let numb = 5;

        const result = fizzbuzz(numb);

        expect(result).toBe("Buzz");
    });
    test('should return FizzBuzz if divisible for 3 and 5', () => {
        let numb = 15;

        const result = fizzbuzz(numb);

        expect(result).toBe("FizzBuzz");
    });
});