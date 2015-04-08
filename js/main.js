$(".image-link, .gallery-link").fancybox({
    'autoWidth' : true,
    'autoHeight' : true,
    'padding' : [30, 60, 90, 60],
    'tpl': {
        wrap     : '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin gallery-modal"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
        image    : '<div class="modal-image"><img class="fancybox-image" src="{href}" alt="" width="800" height="360"/></div><div class="text-center"><a class="btn popup" href="#popup">оставить заявку</a></div>',
        next     : '<a title="Next" class="modal-nav next" href="javascript:;"><span></span></a>',
        prev     : '<a title="Previous" class="modal-nav prev" href="javascript:;"><span></span></a>',
        closeBtn : '<a title="Close" class="btn-close" href="javascript:;">X</a>'
    }
});

$(".popup").fancybox({
    'padding' : 0,
    'tpl': {
        closeBtn : '<a title="Close" class="btn-close" href="javascript:;">X</a>'
    }
});

var slider = $('.slider');
slider.owlCarousel({
    loop:true,
    items: 1,
    nav:true,
    autoplay: true
});

var reply = $('.reply');
reply.owlCarousel({
    loop:true,
    items: 1,
    autoplay: true
});

$('.reply-nav.next').click(function() {
    reply.trigger('next.owl.carousel');
});

$('.reply-nav.prev').click(function() {
    reply.trigger('prev.owl.carousel');
});



$('.gallery').jCarouselLite({
    btnNext: '.nav-next',
    btnPrev: '.nav-prev',
    vertical: true,
    speed: 500,
    visible: 3
});

