var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 5000); // Change image every 2 seconds
}
$(document).ready(function() {
    $('#staff-avatar').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: true,
        itemWidth: 180,
        asNavFor: '#staff-comment'
    });

    $('#staff-comment').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: true,
        sync: "#staff-avatar"
    });
});



// //
$(document).ready(function() {
    $(window).bind('scroll', function() {
        var navHeight = $(window).height() - 350;
        if ($(window).scrollTop() > navHeight) {
            $('header').addClass('fixed');
        } else {
            $('header').removeClass('fixed');
        }
    });
});


$(document).ready(function() {
    $('.icon').click(function() {
        $('ul').toggleClass('menu___active');
    })
})