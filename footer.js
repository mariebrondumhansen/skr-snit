$(document).ready(function () {
    $("soMe-icons").click(function() {
        if ($(this).hasClass("uPunkt")){
            $(this).addClass("uPunkt-klik").removeClass("uPunkt");
        } else {
            $(this).addClass("uPunkt").removeClass("uPunkt-klik");
        } 
    });
});