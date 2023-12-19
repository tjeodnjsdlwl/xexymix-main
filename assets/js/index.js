    const itemSlide = new Swiper(".item-slide", {
        pagination: {
        el: ".item-slide .swiper-pagination",
        type: "progressbar",
        },
        navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 5000,
        },
    });

    const bannerSlide = new Swiper(".banner-slide", {
        loop: true,
        slidesPerView: 4,
        spaceBetween: 10,
        autoplay: {
            delay: 3000,
        },
    });


    bestBtn = ['전체', '맨즈', '아우터', '골프', '키즈', '슈즈&용품']

    const bestSlide = new Swiper(".best-slide", {
        pagination: {
        el: ".best-slide .swiper-pagination",
        clickable: true,
        
        renderBullet: function (index, className) {
            return '<button class="' + className + '">' + (bestBtn[index]) + '</button>';
        }
    },
    });

    const bannerSlide2 = new Swiper(".banner-slide2", {
        pagination: {
        el: ".banner-slide2 .swiper-pagination",
        },
        slidesPerView: 1.1,
        spaceBetween: 10,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });

    const realtimeSlide = new Swiper(".realtime-slide", {
        speed: 5000,
        loop: true,
        slidesPerView: 3,
        spaceBetween: 10,
        autoplay: {
            delay: 1000,
            disableOnInteraction: false,
        },
    });

    const mdSlide = new Swiper(".md-slide", {
        speed: 500,
        scrollbar: {
            el: ".swiper-scrollbar",
        },
        slidesPerView: '1.3',
        spaceBetween: 10,
        autoplay: {
            delay: 3000,
        },
    });

    const keyrankSlide = new Swiper(".keyrank-slide", {
        pagination: {
        el: ".keyrank-slide .swiper-pagination",
        },
        loop: true,
    });


    const instaSlide = new Swiper(".insta-slide", {
        navigation: {
            nextEl: ".btn-next",
            prevEl: ".btn-prev",
        },
        loop: true,
        speed: 800,
    });


$('.btn-hamburger').click(function(){
    $('.group-hamburger').addClass('on');
    $('body').addClass('hidden');
})

$('.group-hamburger .btn-close, .dimmed').click(function(){
    $('.group-hamburger').removeClass('on');
    $('body').removeClass('hidden');
})

$('.group-hamburger .tab-item button').click(function(){
    tabClass=$(this).data('tab')
    $(this).parent('.tab-item').addClass('on').siblings('.tab-item').removeClass('on')
    $(tabClass).addClass('on').siblings('#tab').removeClass('on');
})

$('#langList').on('change',function(){
    url=$('#langList').val();
    window.open(url, '_self');
})


$('.menu-area [class*="btn-"]').click(function(){
    if ($(this).hasClass('on')) {
        slideClose();
    } else {
        slideClose();
        $(this).addClass('on').siblings('.item-list').slideDown();
    }
})

function slideClose(){
    $('.menu-area [class*="btn-"]').removeClass('on').siblings('.item-list').slideUp();
}

$('.group-menu .btn-search, .group-menu2 .btn-search').click(function(){
    $('.group-search').addClass('on');
})
$('.group-search .btn-close').click(function(){
    $('.group-search').removeClass('on');
})

slideArr = [itemSlide, mdSlide]

$('.btn-autoplay').click(function(){
    idx = $(this).data('slide')
    if ($(this).hasClass('on')) {
        slideArr[idx].autoplay.start();
    } else {
        slideArr[idx].autoplay.stop();
    }
    $(this).toggleClass('on');
})


xexy=$('video').get(0);

$('.sc-video .btn-video').click(function(){
    $(this).siblings('.video-area').addClass('on');
    xexy.play();

})

$('.sc-video .btn-close').click(function(){
    $(this).closest('.video-area').removeClass('on');
    xexy.pause();
})


$('.group-tab button').click(function(){
    keyrankTab=$(this).data('tab');
    $(this).addClass('on').siblings('button').removeClass('on');
    $(keyrankTab).addClass('on').siblings('.keyrank-slide').removeClass('on');
})


$('.insta-item a').hover(function(){
        $(this).find('.insta-dimmed').addClass('on');
}, function(){
    $(this).find('.insta-dimmed').removeClass('on');
}
)

$('.footer .btn-copy').click(function(){
    $(this).toggleClass('on');
    $('.footer .copy-list').slideToggle();

})

$('.control-bar .btn-more').click(function(){
    if ($(this).hasClass('on')) {
        $(this).removeClass('on').siblings('.more-list').removeClass('on');
        $('body').removeClass('hidden2')
    } else {
        $(this).addClass('on').siblings('.more-list').addClass('on');
        $('body').addClass('hidden2');
        
    }
})

$('.control-bar .btn-top').click(function(){
    window.scrollTo({top:0, behavior:'smooth'})
})

$('.control-bar .btn-bottom').click(function(){
    window.scrollTo({top:document.body.scrollHeight, behavior:'smooth'})
})


let lastScroll = 0;
$(window).scroll(function(){
    curr= $(this).scrollTop();
    if (curr>=30) {
        $('.header .header-menu2').addClass('on'); 
    } else {
        $('.header .header-menu2').removeClass('on');
    }

    if (curr>=50) {
        if (curr > lastScroll){
            $('.header .group-menu2').slideUp();            
            } else{
            $('.header .group-menu2').slideDown();
        }
    } else {
        $('.header .group-menu2').slideDown();
    }
    lastScroll = curr;
})

$('.gnb2 .btn-all').click(function(){
    $(this).toggleClass('on').siblings('.all-area').slideToggle();
})


$('.sc-slide .btn-more').click(function(){
    $('.sc-more').addClass('on');
})

$('.sc-more .btn-close').click(function(){
    $('.sc-more').removeClass('on');
})