const NumberOne = 17296
const NumberTwo = 18416

let TotalValueIsZero_1 = 0
let TotalValueIsZero_2 = 0


function FriendNumber(FNumber1, FNumber2) {
    for (let i = 0; i < FNumber1; i++) {
        if (NumberOne % i === 0) {
            TotalValueIsZero_1 += i
        }
    }
    for (let f = 0; f < FNumber2; f++) {
        if (NumberTwo % f === 0) {
            TotalValueIsZero_2 += f
        }
    }
    return console.log((TotalValueIsZero_1 === FNumber2 && TotalValueIsZero_2 === FNumber1) ?
        (NumberOne + " ve " + NumberTwo + " Arkadaş Sayılardır.") :
        (NumberOne + " ve " + NumberTwo + " Arkadaş Sayı Değildir."))
}

FriendNumber(NumberOne, NumberTwo)