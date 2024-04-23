document.addEventListener("DOMContentLoaded", function() {
    var heroContainer = document.querySelector(".hero-container");
    var imageUrl = "../Assets/manchester-united-1656122_1280.jpg";

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

document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".accordion-button");
    buttons.forEach(button => {
        button.addEventListener("click", function (){
            const panel = this.nextElementSibling;
            panel.classList.toggle("show");
        });
    });
});
