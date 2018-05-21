$(document).ready(function () {
    $(".dropbtn").click(function () {
        if ($("#myDropdown").is(":hidden")) {
            $("#myDropdown").show();

        } else {
            $("#myDropdown").hide();
        }
    });
});
