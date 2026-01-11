//$('body:not(.no-ani)').addClass('fade-out');

$(function () {
    // 스크롤 Smoother
    gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

    // Smoother Wrapper 사용 시 작업
    if ($('.smoother-wrapper').length && $('.smoother-content').length) {
        ScrollSmoother.create({
            wrapper: '.smoother-wrapper',
            content: '.smoother-content',
            smooth: 1.5,
            speed: 1,
            ignoreMobileResize: true,
            smoothTouch: 0.1,
            effects: true,
            preventDefault: true,
            normalizeScroll: { allowNestedScroll: true },
        });
    }

    // 카운터 애니메이션
    $('.counter').each(function () {
        var $this = $(this),
            countTo = +$this.attr('data-target');
        displayNum = 0;

        var delay = Number($(this).attr('data-delay')) || 0;

        setTimeout(() => {
            $({ countNum: $this.text() }).animate(
                {
                    countNum: countTo,
                },
                {
                    duration: 3000,
                    easing: 'linear',
                    step: function () {
                        // step size
                        let remain = countTo - displayNum;
                        let stepSize;

                        if (displayNum < countTo * 0.7) {
                            stepSize = 1;
                        } else if (displayNum < countTo * 0.9) {
                            stepSize = 1;
                        } else {
                            stepSize = 1; // 마지막 10%
                        }

                        displayNum = Math.min(countTo, displayNum + stepSize);

                        $this.text(displayNum);

                        if (remain <= 0) return;
                    },
                    complete: function () {
                        console.log('완료');

                        // $this.text(this.countNum);
                    },
                }
            );
        }, delay);
    });

    function checkFadeIn() {
        $('.fade-in').each(function (i) {
            var bottom_of_element = $(this).offset().top + 100;
            var bottom_of_window = $('body').scrollTop() + $('body').height();

            if (bottom_of_window > bottom_of_element) {
                $(this).addClass('fade-in-animate');
            }
        });
    }

    // Header Fixed 여부 스타일
    const headerTypeC = $('#type-c #header .inner, #type-d #header .inner');

    function checkScroll() {
        if (headerTypeC.outerHeight() < $('body').scrollTop()) {
            headerTypeC.removeClass('is-top').addClass('is-fixed');
        } else if ($('body').scrollTop() < headerTypeC.outerHeight()) {
            headerTypeC.removeClass('is-fixed').addClass('is-top');
        }
    }

    // Scroll이 올라가는 현상

    // Scroll Event
    $('body').on('scroll', checkFadeIn);
    $('body').on('scroll', checkScroll);

    // Document Ready
    checkFadeIn();
    checkScroll();

    //popup Toggle01
    $('.toggle-01 .pop-tit').click(function () {
        $(this).toggleClass('on');
        $(this).next().slideToggle();
        return false;
    });

    //popup Toggle02
    $('.toggle-02 .pop-tit').css('cursor', 'pointer');

    $('.toggle-02 .pop-tit').on('click', function () {
        const $arrow = $(this).find('.acco-arrow');
        const $item = $(this).closest('.pop-item');
        const $next = $(this).next('.pop-txt');

        $item.siblings().find('.pop-txt').slideUp();
        $item.siblings().find('.acco-arrow').removeClass('is-active');

        $next.slideToggle();
        $arrow.toggleClass('is-active');

        if ($item.hasClass('is-open')) {
            $item.removeClass('is-open');
        } else {
            $('.pop-item').removeClass('is-open');
            $item.addClass('is-open');
        }
    });

    $('.tab-area.no-init').find('tab').addClass('no-auto-click');

    $('.tab')
        .click(function () {
            let controlPanel = $('#' + $(this).attr('aria-controls'));
            let animation = $(this).attr('data-animation');

            $(this).parent().siblings().find('button').removeClass('is-active');
            $(this).addClass('is-active');

            if (!animation) {
                $(this).closest('.tab-area').find('.tab-cont').hide();

                controlPanel.fadeIn(500);
            } else if (animation === 'slideLeft') {
                $(this).closest('.tab-area').find('.tab-cont').hide();

                controlPanel.show('slide', { direction: 'left' }, 1000);
            } else if (animation === 'slideRight') {
                $(this).closest('.tab-area').find('.tab-cont').hide();

                // 애니메이션이 실행될 동안 버튼 disabled
                $(this).siblings().attr('disabled', 'true');

                controlPanel.show('slide', { direction: 'right' }, 1000);

                setTimeout(() => {
                    $(this).siblings().removeAttr('disabled');
                }, 1000);
            }
        })
        .filter(':not(.no-auto-click)')
        .eq(0)
        .click();

    $('.swiper-button-stop').click(function () {
        const swiperEl = $(this).closest('.swiper-indicator').siblings('.swiper')[0];

        if (swiperEl && swiperEl.swiper) {
            swiperEl.swiper.autoplay.stop();

            console.log('정지');
            $(this).hide();
            $(this).siblings('.swiper-button-play').show();
        }
    });

    $('.swiper-button-play').click(function () {
        const swiperEl = $(this).closest('.swiper-indicator').siblings('.swiper')[0];

        if (swiperEl && swiperEl.swiper) {
            swiperEl.swiper.autoplay.start();

            console.log('시작');
            $(this).hide();
            $(this).siblings('.swiper-button-stop').show();
        }
    });

    $('.sub-prev-btn').click(function (event) {
        event.preventDefault();

        history.back();

        // 0.5초 뒤에도 현재 페이지에 머물러 있다면 (뒤로 갈 곳이 없는 경우)
        setTimeout(function () {
            window.location.href = '../gate/gate-main.html';
        }, 500);
    });

    // 로그인 헤더에서 button, a 클릭 시 게이트 메인으로 이동
    $('.login-header button, .login-header a').on('click', function () {
        window.location.href = '../gate/gate-main.html';
    });
});

// Popup
$(function () {
    let lastFocus = null;

    // 열기
    $(document).on('click', '[data-popup-open]', function (e) {
        e.preventDefault();
        const target = $(this).data('popup-open');
        lastFocus = this;

        const $popup = $(target);
        $popup.css('display', 'flex').hide().fadeIn(150).attr('aria-hidden', 'false');
        $popup.find('[data-popup-close]').focus();

        $('html, body').css('overflow', 'hidden');
    });

    $(document).on('click', '[data-popup-close]', function (e) {
        e.preventDefault();

        history.back();

        // 0.5초 뒤에도 현재 페이지에 머물러 있다면 (뒤로 갈 곳이 없는 경우)
        setTimeout(function () {
            window.location.href = '../gate/gate-main.html';
        }, 500);

        /* 
        const $popup = $(this).closest('.popup');
        
        $popup.fadeOut(150, function () {
            $popup.css('display', 'none').attr('aria-hidden', 'true');
        });

        $('html, body').css('overflow', 'initial');

        if (lastFocus) {
            $(lastFocus).focus();
        }
        */
    });
});
