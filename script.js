$(document).ready(function () {
    $("nav").load("nav.html");
    $("footer").load("footer.html")
    $("#arrow").attr("src", "image/arrow_off.png")
    $("#arrow2").attr("src", "image/arrow_off.png")
    $(".button").click(function () {
        if ($(".text").is(":hidden")) {
            $(".text").show();
            $("#arrow").attr("src", "image/arrow_on.png");
        } else {
            $(".text").hide();
            $("#arrow").attr("src", "image/arrow_off.png")
        }
    });

    $(".button2").click(function () {
        if ($(".text2").is(":hidden")) {
            $(".text2").show();
            $("#arrow2").attr("src", "image/arrow_on.png");
        } else {
            $(".text2").hide();
            $("#arrow2").attr("src", "image/arrow_off.png")
        }
    });
    $("#slideshow > div:gt(0)").hide();

    setInterval(function () {
        $('#slideshow > div:first')
            .fadeOut(3000)
            .next()
            .fadeIn(2000)
            .end()
            .appendTo('#slideshow');
    }, 3000);
    // hentet fra https://www.nemprogrammering.dk/wp/simpelt-slideshow-med-css3-og-jquery/


});

    var slideIndex = 1;
    showSlides(slideIndex);

    /* Her tælles slideIndex 1 op */
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    /* Her sættes slideIndex til at være et specifikt tal  */
    function currentSlides(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        var i;
        var slides = $(".mySlides");
        var dots = $(".dot");
        /* Sikrer at n ikke er større end antallet af billeder - længden */
        if (n > slides.length) {
            slideIndex = 1
        }

        /* Sikerer at n ikke bliver 0 eller mindre en nul - skarpt mindre end 1 */
        if (n < 1) {
            slideIndex = slides.length
        }

        /* display none på alle billeder i galleriet  */
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        /* active class bliver fjernet fra alle dots */
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        
        /* Definerer hvilket billede der skal vises og at det skal vises display block*/
        slides[slideIndex - 1].style.display = "block";
        
        /* Definerer hvilken dot der skal sættes til at have class'en active*/
        dots[slideIndex - 1].className += " active";
    }

/*inspireret af: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_slideshow*/ 
