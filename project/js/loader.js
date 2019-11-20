$('document').ready(function() {
    restartSession();
    anime.timeline({loop: false})
        .add({
            targets: '#loading-menu',
            opacity: [1,0],
            easing: "easeInOutQuad",
            duration: 1050,
            delay: 500,
            complete: function() {
                $('#loading-menu').css('z-index', '-100');
            }
        });
});