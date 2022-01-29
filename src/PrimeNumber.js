/* 1 - JavaScript ile istediğiniz kadar sayı parametre gönderebileceğiniz bir fonksiyon yazınız.
Bu fonksiyona gönderdiğiniz her sayı için çıktı olarak asal olup olmadığını yazınız. 
(Araştırma konusu : şart blokları : if ) */

let Conclusion
let Zero = 0

function Checker(...Values) {
    for (let i = 0; i < Values.length; i++) {

        Conclusion = true

        for (let f = 2; f < Values[i]; f++) {
            if (Values[i] % f === Zero) {
                Conclusion = false
                break
            }
        }
        if (Conclusion === true) {
            if (Values[i] < Zero) {
                // Sayı Sıfırdan Küçük mü Değeri Kontrol Edildi!
                // Eğer Sayı Sıfırdan Küçükse (Negatif Değerli Sayılar Asal Olamayacağı İçin Bize Bir Uyarı Atıyor Ve Negatif Değerli Sayıyı Bize Gösteriyor!)
                // Else Durumu İse Sayının Negatif Olmadığı Durumu Yani Sayı Sıfırdan Büyük Ve Asal!
                // İlk Kısımda Pozitif Negatif Yapmamız Gerek Çünkü İlk Values[i] Buraya Uğruyor!
                // Aşağıda Else Durumunda Bir Daha Values[i] < Zero Yazmamıza Gerek Kalmıyor Çünkü Burada Check Ediyoruz Zaten.
                console.log("Deger : " + Values[i] +
                    " Hem Asal Sayı Degil, Hemde Negatif Degere Sahip." +
                    "\n\n Kodun Çalıştığı Bölüm Conclusion === true ise !")
            } else {
                let NewIsPrimeNumberArray = []
                let newIsPrimeNumber = Values[i]
                NewIsPrimeNumberArray.push(newIsPrimeNumber)
                console.log("\n\n " + NewIsPrimeNumberArray + " Sayısı Asal Sayıdır.")
            }
        } else {
            let NewIsNotPrimeNumberArray = []
            let newIsNotPrimeNumber = Values[i]
            NewIsNotPrimeNumberArray.push(newIsNotPrimeNumber)
            console.log("\n\n " + NewIsNotPrimeNumberArray + " Sayısı Asal Sayı Değildir.")
        }
    }
}

Checker(-987, 56, -59, -8, 18)


