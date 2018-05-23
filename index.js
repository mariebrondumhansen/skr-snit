$(document).ready(function () {
    $("nav").load("nav.html");
})



$("#slideshow > div:gt(0)").hide();

setInterval(function () {
    $('#slideshow > div:first')
        .fadeOut(4000)
        .next()
        .fadeIn(2000)
        .end()
        .appendTo('#slideshow');
}, 5000);
// hentet fra https://www.nemprogrammering.dk/wp/simpelt-slideshow-med-css3-og-jquery/



$(document).ready(function () {
    $("button").click(function () {
        $("h4").toggle();
    });
});
