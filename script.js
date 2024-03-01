document.addEventListener("DOMContentLoaded", function () {

    var cornerImage = document.getElementById("corner-image");
    var isBig = false; // resmin büyük olup olmadığını kontrol eden bir değişken

    cornerImage.addEventListener("click", function () {
        if (!isBig) { // eğer resim küçükse büyüt
            cornerImage.style.transform = "scale(20.5) translateX(-10%)"; // resmi 1.5 kat büyütür
            isBig = true; // resmin büyük olduğunu belirt

            // setTimeout kullanarak belirli bir süre sonra resmi küçült
            setTimeout(function () {
                cornerImage.style.transform = "scale(0.01)"; // Resmi küçült
                isBig = false; // Resmin tekrar küçük olduğunu belirt

                // setTimeout kullanarak belirli bir süre sonra linki aç
                setTimeout(function () {
                    // Linki açmak için gerekli kodu buraya ekleyin
                    window.location.href = "https://batuhan6.gitlab.io/you_are_the_center_of_the_universe/"; // Örnek bir link
                }, 2000); // 2000 milisaniye (2 saniye) beklet
            }, 600); // Hemen küçültme işlemini başlat
        }
    });
});

function checkWindowSize() {
    // Sayfa boyutunu kontrol et
    var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    // Eğer sayfa boyutu 600 pikselden büyükse
    if (windowWidth > 1050) {
        document.getElementById("dynamicHeading").innerHTML = "<h1>Machine Learning and Mathematics</h1>";
    } else {
        document.getElementById("dynamicHeading").innerHTML = "<h1>Machine Learning </h1><h1>and Mathematics</h1>";
    }
}

// Sayfa yüklendiğinde ve boyut değiştiğinde kontrolü yap
window.onload = checkWindowSize;
window.onresize = checkWindowSize;
