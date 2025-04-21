// FUNCTION FOR NAVIGATION BAR

    function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
    x.className += " responsive";
} else {
    x.className = "topnav";
}
}

// FUNCTIONS FOR IMAGE SLIDESHOW

    function currentSlide(n) {
    showSlides(slideIndex = n);
}

    let slideIndex = 0;
    showSlides();

    function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
}
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 4000); // Change image every 2 seconds
}
