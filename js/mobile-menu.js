$(document).ready(function () {
    function toggleMenu() {
        var open = false; // this will allow the click function to 'toggle' between two different functions

        $(".mobile-button").click(function () { // click the mobile button
            $(this).toggleClass('rotate'); // between each click, toggle the rotate class
            open = !open; // either the menu is open or not open
            if (open) { // if the menu is open then use the following function
                //$(this).toggleClass('rotate');
                menuAnimate();
            }
            else {
                menuAnimateOri();// if the menu is closed, then do a different function
            }
        });
    }

// global variable
    const mobileContainer = $(".mobile-container");
    const bodyVar = $("body");
    const mediaSize = 540;
    const resizeMenuFull = function () {
        if ($(window).width() > mediaSize) {
            fullMenu();

        }
        if ($(window).width() < 540) {
            mobileMenu();
            toggleMenu();
        }
    };
    resizeMenuFull();
    return $(window).on('resize', resizeMenuFull);

// SHOWING the mobile function
    function menuAnimate() {
        mobileContainer.animate({left: '0'}, 250);
        bodyVar.animate({left: '200px'}, 250);
    }

    // HIDING the mobile function
    function menuAnimateOri() {
        mobileContainer.animate({left: '-200px'}, 250);
        bodyVar.animate({left: '0'}, 250);
    }

    function fullMenu() {
        mobileContainer.css({left: '0', width: '100%', height: '30px'});
        $(".mobile-nav").css("display", 'flex');
        bodyVar.css({left: '0'});
        $("#toggle-mobile").css("display", "none");
        mobileContainer.css("position", "relative");
    }

    function mobileMenu() {
        $("#toggle-mobile").css("display", "flex");
        $(".mobile-container").css({left: '-200px', width: '30%', height: '100%'});
    };
});