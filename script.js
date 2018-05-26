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

})



$("#slideshow > div:gt(0)").hide();

setInterval(function () {
    $('#slideshow > div:first')
        .fadeOut(4000)
        .next()
        .fadeIn(2000)
        .end()
        .appendTo('#slideshow');
}, 4000);
// hentet fra https://www.nemprogrammering.dk/wp/simpelt-slideshow-med-css3-og-jquery/