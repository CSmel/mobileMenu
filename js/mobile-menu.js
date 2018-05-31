$(document).ready(function () {
    function toggleMenu() {
        let open = false; // this will allow the click function to 'toggle' between two different functions
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
    const mobileNav = $(".mobile-nav");
    const toggleMobile =$("#toggle-mobile");
    const mediaSize = 540;
    const resizeMenuFull = function () {
        if ($(window).width() > mediaSize) {
            fullMenu();
            $("#remove-button").removeClass('rotate');
        }
        else if ($(window).width() < 540) {
            mobileMenu();
            toggleMenu();
        }
        else {
            $("#remove-button").addClass('rotate');
        }
    };
    resizeMenuFull();
    return $(window).on('resize', resizeMenuFull);

// SHOWING the mobile function
   function menuAnimate() {
       mobileContainer.css({left: '0'});
       bodyVar.css({left: '200px'});
    }

    // HIDING the mobile function
    function menuAnimateOri() {
        mobileContainer.css({left: '-200px'});
        bodyVar.css({left: '0'});
   }

    function fullMenu() {
        mobileContainer.css({left: '0', width: '100%', height: '30px'});
        mobileNav.css({display: 'flex', flexDirection: 'row'});
        bodyVar.css({left: '0'});
        mobileContainer.css("position", "relative");
        toggleMobile.css("display", "none");


    }

    function mobileMenu() {
        toggleMobile.css("display", "flex");
        mobileContainer.css({ width: '30%', height: '100%', left: '-200px', position: 'fixed', display: 'flex', flexDirection: 'column'});
        mobileNav.css({display: 'flex', flexDirection: 'column'});

$
    }
});