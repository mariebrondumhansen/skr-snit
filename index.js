<<<<<<< HEAD
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
=======
$(document).ready(function(){
    $("nav").load("nav.html");
<<<<<<< HEAD:index.js
});
=======
})
>>>>>>> bde67e512df2117a8685c20764e3e2bb0d0ffb4b
>>>>>>> 2cac4f5322ef7da2c8ba05ff9204cd6616de7946:script.js
