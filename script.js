$(document).ready(function () {
    $("nav").load("navbar.html");
})



//-------------------------------Slideshow
$("#slideshow > div:gt(0)").hide();

setInterval(function () {
    $('#slideshow > div:first')
        .fadeOut(4000)
        .next()
        .fadeIn(2000)
        .end()
        .appendTo('#slideshow');
}, 5000);
