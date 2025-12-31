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

        $({ countNum: $this.text() }).animate(
            {
                countNum: countTo,
            },
            {
                duration: 5000,
                easing: 'linear',
                step: function () {
                    // step size
                    let remain = countTo - displayNum;
                    let stepSize;

                    if (remain <= 0) return;

                    if (displayNum < countTo * 0.7) {
                        stepSize = 4;
                    } else if (displayNum < countTo * 0.9) {
                        stepSize = 2;
                    } else {
                        stepSize = 1; // 마지막 10%
                    }

                    displayNum = Math.min(countTo, displayNum + stepSize);

                    $this.text(displayNum);
                },
                complete: function () {
                    $this.text(this.countNum);
                },
            }
        );
    });

    function checkFadeIn() {
        $('.fade-in').each(function (i) {
            var bottom_of_element = $(this).offset().top + 100;
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > bottom_of_element) {
                $(this).addClass('fade-in-animate');
            }
        });
    }

    // Scroll Event
    $(window).on('scroll', checkFadeIn);

    // Document Ready
    checkFadeIn();
});
