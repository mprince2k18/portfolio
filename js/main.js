$(document).ready(function () {
    $('.menu-icon1').click(function () {
        $('.menu-area').slideToggle(1000);
    })
    $('.menu-icon1').click(function () {
        $('.menu-icon1').toggleClass('menu-icon2');
    })
    $(window).resize(function () {
            var scrolling = $(window).width();
            if (scrolling > 768) {
                $('.menu-area').removeAttr('style');
            }
            else {
                $('.menu-area').addClass('style');
            }
        })
        /* smooth scroll */
        // Add smooth scrolling to all links
    $("a").on('click', function (event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();
            // Store hash
            var hash = this.hash;
            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
    /* menu */
    
    $(window).scroll(function(){
     var scrolling = $(window).scrollTop();
        if(scrolling > 1050){
            $('.fixed-header').addClass('fixed-header2');
            $('.fixed-header').removeClass('fixed-header');
        }
        else{
            $('.fixed-header2').addClass('fixed-header');
            $('.fixed-header2').removeClass('fixed-header2');
        }
    });
    
    
    
    $('.portfolio-area').ripples();
    $('.footer-area').ripples();
    
    
    
   $(".gallery").flipping_gallery({
        direction: "forward"
        , selector: "> a"
        , spacing: 10
        , showMaximum: 15
        , enableScroll: true
        , flipDirection: "bottom"
        , autoplay: false
    });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
})