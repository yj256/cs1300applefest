$(document).ready(function () {
    "use strict";
    $("#container").hide();
    $("#nav_bar").hide();
    var shown = false;
    function check() {
        if (shown === true) {
            $('html body').css({"background-color": "#EAEAEA"});
        } 
    }
    
    $("#welcome").on("click", function () {
        $(this).fadeOut(800); //cover photo disappears
        $("#nav_bar").slideDown(700);
        $("#container").fadeIn(600);
        $("footer").show();
        shown = true; 
        check(); //change background-color of 'body'
    });
});

