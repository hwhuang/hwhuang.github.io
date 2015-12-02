$(document).ready(function() {
    $('.my-slider #images a img').hover(function () {
        $(this).stop().css(
            "cursor", "pointer"
        );
        $(this).stop().animate({
            opacity: .4
        }, 200);
        $('.text').removeClass('hide');
    }, function () {
        $(this).stop().animate({
            opacity: 1
        }, 500);
        $('.text').addClass('hide');
    });
    $( "button" ).append( "Submit" );
    $( "title" ).prepend( "HH " );
});