/*
    Zlicz, ile elementów w przykładowej tablicy liczb posiada sumę cyfr
    dokładnie taką, jak zadana wartość liczbowa.
*/

var Numbers = Array(5);
Numbers[0] = 11;
Numbers[1] = 26;
Numbers[2] = 61;
Numbers[3] = 70;
Numbers[4] = 85;

var Counter = 0;
var ExpectedCounterValue = 7;
for (var i = 0; i < 5; i = i + 1) {
    var SUM = 0;
    while (Numbers[i] > 0) {
        SUM = SUM + Numbers[i] % 10;
        Numbers[i] = Math.floor(Numbers[i] / 10);
    }

    if (SUM == ExpectedCounterValue) {
        Counter++;
    }
}

console.log('Counter = ' + Counter)
console.log(Numbers)
