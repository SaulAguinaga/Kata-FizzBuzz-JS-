export function fizzbuzz(numb) {
    if(numb % 3 == 0 && numb % 5 != 0){
        return "Fizz";
    }
    if(numb % 5 == 0 && numb % 3 != 0){
        return "Buzz";
    }
    if(numb % 5 == 0 && numb % 3 == 0){
        return "FizzBuzz";
    }
}