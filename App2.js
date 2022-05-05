/*
    Zlicz, ile elementów w przykładowej tablicy liczb posiada sumę cyfr
    dokładnie taką, jak zadana wartość liczbowa.
*/

const hasExpectedDigitsSum = (number, expectedValue) => {
    let numberAbs = Math.abs(number);
    let sum = 0;
    while (numberAbs > 0) {
        sum += numberAbs % 10;
        numberAbs = Math.floor(numberAbs / 10);
    }
    return sum === expectedValue;
}

const countNumbersWithExpectedDigitsSum = (numbers, expectedValue) => {
    return numbers
        .filter(n => hasExpectedDigitsSum(n, expectedValue))
        .length;
}

const main = () => {
    const numbers = [11, 26, 61, 70, 85];
    const EXPECTED_VALUE = 7;
    console.log(`Counter = ${countNumbersWithExpectedDigitsSum(numbers, EXPECTED_VALUE)}`)
    console.log(numbers)
}
main();
