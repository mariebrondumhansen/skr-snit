
$(document).ready(function () {
    $("nav").load("nav.html");
    $("footer").load("footer.html");
    $(".mere").click(function(){
       if ($("#content").is(":hidden")) {
           $("#content").show();
       } else {
           $("#content").hide();
       }
    });
});
