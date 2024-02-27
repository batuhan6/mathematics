/* document.addEventListener("DOMContentLoaded", function () {

    var cornerImage = document.getElementById("corner-image");

    cornerImage.addEventListener("mouseenter", function () {
        cornerImage.style.transform = "scale(2.5)"; // resmi 1.5 kat büyütür
    });

    cornerImage.addEventListener("mouseleave", function () {
        cornerImage.style.transform = "scale(0.1)"; // resmi 0.5 kat küçültür
    });
});

*/

/*
document.addEventListener("DOMContentLoaded", function () {

    var cornerImage = document.getElementById("corner-image");
    var isBig = false; // resmin büyük olup olmadığını kontrol eden bir değişken

    cornerImage.addEventListener("click", function () {
        if (!isBig) { // eğer resim küçükse büyüt
            cornerImage.style.transform = "scale(20.5)"; // resmi 1.5 kat büyütür
            isBig = true; // resmin büyük olduğunu belirt

            // setTimeout kullanarak belirli bir süre sonra linki aç
            setTimeout(function () {
                // Linki açmak için gerekli kodu buraya ekleyin
                window.location.href = "https://batuhan6.gitlab.io/time/"; // Örnek bir link
            }, 2000); // 2000 milisaniye (2 saniye) beklet
        }
    });
});


*/

document.addEventListener("DOMContentLoaded", function () {

    var cornerImage = document.getElementById("corner-image");
    var isBig = false; // resmin büyük olup olmadığını kontrol eden bir değişken

    cornerImage.addEventListener("click", function () {
        if (!isBig) { // eğer resim küçükse büyüt
            cornerImage.style.transform = "scale(20.5)"; // resmi 1.5 kat büyütür
            isBig = true; // resmin büyük olduğunu belirt

            // setTimeout kullanarak belirli bir süre sonra resmi küçült
            setTimeout(function () {
                cornerImage.style.transform = "scale(0.01)"; // Resmi küçült
                isBig = false; // Resmin tekrar küçük olduğunu belirt

                // setTimeout kullanarak belirli bir süre sonra linki aç
                setTimeout(function () {
                    // Linki açmak için gerekli kodu buraya ekleyin
                    window.location.href = "https://batuhan6.gitlab.io/time/"; // Örnek bir link
                }, 2000); // 2000 milisaniye (2 saniye) beklet
            }, 600); // Hemen küçültme işlemini başlat
        }
    });
});

