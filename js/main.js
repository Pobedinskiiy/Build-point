$( document ).ready(function() {
    $('a[href^="#"').on('click', function() {
        let href = $(this).attr('href');

        $('html, body').animate({
        scrollTop: $(href).offset().top - document.getElementById('scrolling').scrollHeight + 1
        }, {
            duration: 1000,
            easing: "swing"
        });
        return false;
    });

    new SliderMain('#slider-main', {
        loop: true,
        autoplay: true,
        swipe: true
    });

    new SliderEmployees('#slider-employees', {
        loop: true,
        autoplay: false,
        swipe: true
    });

    new SliderProjects('#slider-projects', {
        loop: true,
        autoplay: false,
        swipe: true
    });
    
    new SliderNews('#slider-news', {
        loop: true,
        autoplay: false,
        swipe: true
    });
});