document.addEventListener("DOMContentLoaded", function() {
    var heroContainer = document.querySelector(".hero-container");
    var imageUrl = "../Assets/james-kirkup-LbT_j62t94U-unsplash.jpg";

    if("loading" in HTMLImageElement.prototype) {
        var lazyImage = new Image();
        lazyImage.src = imageUrl;
        lazyImage.onload = function() {
            heroContainer.style.backgroundImage = 'url("'+imageUrl+'")';
        };
    } else {
        heroContainer.style.backgroundImage = 'url("'+imageUrl+'")';
    }
});