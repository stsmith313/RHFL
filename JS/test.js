var animation = bodymovin.loadAnimation({
    container: document.getElementById('preload'),
    render: 'svg',
    loop: true,
    autoplay: true,
    path: 'https://ddc-media.s3.us-east-2.amazonaws.com/logos/data.json'
});

$(window).on('load', function () {
    $('.preload-wrapper').delay(1500).fadeOut('slow');
});

$(".year").click(function () {
    $year = $(this).attr('data-year');
    $(".list-champ-year").children().removeClass('active');
    $(this).addClass('active')

    $("#champ-img").fadeOut(function () {
        $(this).attr("src", "https://ddc-media.s3.us-east-2.amazonaws.com/champion-img/" + $year + "-Champion.jpg").fadeIn();
    });

});

$(".button-menu").on("click", function () {
    $(this).toggleClass("active");
    $('.nav-container').toggleClass("active");
});