$(document).ready(function () {
    $("#burgerMenu").attr("src", "icons/menu.png")
    $(".dropbtn").click(function () {
        if ($("#myDropdown").is(":hidden")) {
            $("#myDropdown").show();
            $("#burgerMenu").attr("src", "icons/kryds.png");
        } else {
            $("#myDropdown").hide();
            $("#burgerMenu").attr("src", "icons/menu.png")
        }

    });
    /* dette var ikke den optimale løsning 
    $(".uPunkt").click(function() {
        if ($(this).hasClass("uPunkt")){
            $(this).addClass("uPunkt-klik").removeClass("uPunkt");
        } else {
            $(this).addClass("uPunkt").removeClass("uPunkt-klik");
        } 
    }); */

    /* Ny løsning på at have barken i baggrunden*/
    if ($("body").hasClass("index")) {
        $("#index").addClass("uPunkt-klik");
    } else if ($("body").hasClass("om")) {
        $("#om").addClass("uPunkt-klik");
    } else if ($("body").hasClass("levering")) {
        $("#levering").addClass("uPunkt-klik");
    } else if ($("body").hasClass("kontaktMig")) {
        $("#kontakt").addClass("uPunkt-klik");
    }
});
