$(function () {
    // 스크롤 Smoother
    gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

    $(document).ready(function () {
        // 1. 현재 상태를 저장 (PC: true, 모바일: false)
        let isPcStatus = $(window).width() >= 768;

        function wrapMobileLayout() {
            const windowWidth = $(window).width();

            if (windowWidth >= 768 && $('#app-container').length === 0) {
                // PC 모드 적용: script와 이미 생성된 요소를 제외하고 wrap
                $('body > :not(script, #app-container)').wrapAll('<div id="app-container"></div>');
                $('body').addClass('pc-mode');
            }
        }

        // 초기 실행
        wrapMobileLayout();

        // 2. 리사이즈 이벤트 감시
        $(window).on('resize', function () {
            const currentWidth = $(window).width();
            const isNowPc = currentWidth >= 768;

            // 상태가 변경되었을 때만 새로고침 (무한 리로드 방지)
            if (isNowPc !== isPcStatus) {
                location.reload();
            }
        });
    });

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
                        console.log('애니메이션 완료');

                        // $this.text(this.countNum);
                    },
                }
            );
        }, delay);
    });

    $(document).ready(function () {
        const $window = $(window);
        const $container = $('#app-container');

        // 보정할 요소들을 미리 변수에 담아 성능 최적화
        const $bottomNav = $('#bottom-nav');
        const $headers = $('#header, .popup-header');

        function adjustFixedElements() {
            const isPC = $window.width() >= 768 && $container.length > 0;
            const scrollTop = $container.scrollTop();

            if (isPC) {
                // 1. 헤더 보정 (Top 고정)
                $headers.css({
                    position: 'absolute',
                    top: '0',
                    bottom: 'auto', // 하단 고정 속성 제거
                    left: '0',
                    width: '100%',
                    transform: 'translateY(' + scrollTop + 'px)',
                    'z-index': '1000',
                });

                // 2. 하단바 보정 (Bottom 고정)
                $bottomNav.css({
                    position: 'absolute',
                    top: 'auto', // 상단 고정 속성 제거
                    bottom: '0',
                    left: '0',
                    width: '100%',
                    transform: 'translateY(' + scrollTop + 'px)',
                    'z-index': '1000',
                });
            } else {
                // 모바일 환경: 모든 인라인 스타일 제거 (CSS 파일 설정으로 복구)
                $headers.add($bottomNav).css({
                    position: '',
                    top: '',
                    bottom: '',
                    left: '',
                    width: '',
                    transform: '',
                    'z-index': '',
                });
            }
        }

        // 스크롤 및 리사이즈 이벤트 연결
        $container.on('scroll', adjustFixedElements);
        $window.on('resize', adjustFixedElements);

        // 페이지 로드 시 즉시 실행
        adjustFixedElements();
    });
    $(document).ready(function () {
        let scrollEl;
        let isPC = $(window).width() >= 768;

        // 1. 환경에 따라 스크롤 주체 설정
        if (isPC && $('#app-container').length > 0) {
            scrollEl = $('#app-container');
        } else {
            scrollEl = $(window);
        }

        function checkFadeIn() {
            $('.fade-in').each(function () {
                let elementTop;

                if (isPC) {
                    // PC 모드(박스 스크롤)일 때는 컨테이너 내에서의 상대 위치를 계산해야 함
                    // 요소의 절대좌표 - 컨테이너의 절대좌표 + 현재 컨테이너의 스크롤 값
                    elementTop = $(this).offset().top - scrollEl.offset().top + scrollEl.scrollTop();
                } else {
                    elementTop = $(this).offset().top;
                }

                const bottom_of_element = elementTop + 100;
                const bottom_of_window = scrollEl.scrollTop() + scrollEl.height();

                if (bottom_of_window > bottom_of_element) {
                    $(this).addClass('fade-in-animate');
                }
            });
        }

        const headerTypeC = $('#type-c #header .inner, #type-d #header .inner');

        function checkScroll() {
            const currentScroll = scrollEl.scrollTop();

            if (headerTypeC.outerHeight() < currentScroll) {
                headerTypeC.removeClass('is-top').addClass('is-fixed');
            } else {
                headerTypeC.removeClass('is-fixed').addClass('is-top');
            }
        }

        // 2. 결정된 scrollEl에 이벤트 바인딩
        scrollEl.on('scroll', checkFadeIn);
        scrollEl.on('scroll', checkScroll);

        // 초기 실행 (로드 시점에 이미 위치에 있는 요소들 체크)
        checkFadeIn();
        checkScroll();
    });

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
    $('.login-header button, .login-header a:not(#pro-a-login)').on('click', function () {
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
            window.location.href = '../prototype-a/main.html';
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
