$(document).ready(function () {
    $("#burgerMenu").attr("src","icons/menu.png")
    $(".dropbtn").click(function () {
        if ($("#myDropdown").is(":hidden")) {
            $("#myDropdown").show();
             $("#burgerMenu").attr("src","icons/kryds.png");
        } else {
            $("#myDropdown").hide();
            $("#burgerMenu").attr("src","icons/menu.png")
        }

    });
});