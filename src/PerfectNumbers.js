function PerfectNumbers(Number) {
    for (var Number = 1; Number <= 1000; Number++) {
        var Total = 0
        for (var i = 1; i < Number; i++) {
            if (Number % i == 0)
                Total += i
        }
        if (Total == Number)
            console.log(Number + " Mükemmel Sayılardır")
    }
}

PerfectNumbers(1)