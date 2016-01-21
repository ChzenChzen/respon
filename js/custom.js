$(document).ready(function () {

    var owl = $(".owl-carousel");

    owl.owlCarousel({
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        navigation: false,
        pagination: false
        //itemsScaleUp : true
        // "singleItem:true" is a shortcut for:
        // items : 1,
        // itemsDesktop : false,
        // itemsDesktopSmall : false,
        // itemsTablet: false,
        // itemsMobile : false
    });

    // Custom Navigation Events
    $(".next").click(function () {
        owl.trigger('owl.next');
    });
    $(".prev").click(function () {
        owl.trigger('owl.prev');
    });
    $(".play").click(function () {
        owl.trigger('owl.play', 1000); //owl.play event accept autoPlay speed as second parameter
    });
    $(".stop").click(function () {
        owl.trigger('owl.stop');
    });

});