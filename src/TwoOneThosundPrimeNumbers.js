function PrimeNumbers(MinValue, MaxValue) {
    for (var PrimeNumber = MinValue; PrimeNumber < MaxValue; PrimeNumber++) {
        for (var Quotient = 2; Quotient < PrimeNumber; Quotient++) {
            if (PrimeNumber % Quotient === 0)
                break
        }
        if (PrimeNumber === Quotient)
            console.log(PrimeNumber)
    }
}
PrimeNumbers(2, 1000)