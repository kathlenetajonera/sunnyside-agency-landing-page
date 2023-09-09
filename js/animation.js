(function () {
    if (window.innerWidth > 1024) {
        ScrollSmoother.create({
            smooth: 2,
            effects: true,
            normalizeScroll: true,
        });
    }

    animatedTyping();
    animatedFade();
    animatedFadeStagger();
    animatedLeft();
    animatedRight();
    animatedBottom();
    animatedBottomStagger();

    function animatedTyping() {
        const elementsWithTypingEffect =
            document.querySelectorAll(".animated-typing");

        elementsWithTypingEffect.forEach((el) => {
            const splitText = new SplitText(el, {
                charsClass: "animated-letter++",
            }).chars;

            gsap.from(splitText, {
                autoAlpha: 0,
                y: 20,
                stagger: 0.03,
                duration: 0.4,
                scrollTrigger: { trigger: el, start: "top 85%" },
            });
        });
    }

    function animatedFadeStagger() {
        const wrapper = gsap.utils.toArray(".animated-fade-stagger");

        if (wrapper.length) {
            wrapper.forEach((wrap) => {
                const children = [...wrap.children];

                gsap.from(children, {
                    autoAlpha: 0,
                    stagger: 0.04,
                    duration: 0.5,
                    scrollTrigger: {
                        trigger: wrap,
                        start: "top 85%",
                    },
                });
            });
        }
    }

    function animatedFade() {
        const fadedElements = gsap.utils.toArray(".animated-fade");

        if (fadedElements.length) {
            fadedElements.forEach((el) => {
                gsap.from(el, {
                    autoAlpha: 0,
                    duration: 0.8,
                    scrollTrigger: {
                        trigger: el,
                        start: "top 85%",
                    },
                });
            });
        }
    }

    function animatedLeft() {
        const elements = gsap.utils.toArray(".animated-left");

        if (elements.length) {
            elements.forEach((el) => {
                gsap.from(el, {
                    x: 50,
                    autoAlpha: 0,
                    scrollTrigger: {
                        trigger: el,
                        start: "top 80%",
                    },
                });
            });
        }
    }

    function animatedRight() {
        const elements = gsap.utils.toArray(".animated-right");

        if (elements.length) {
            elements.forEach((el) => {
                gsap.from(el, {
                    x: -40,
                    autoAlpha: 0,
                    scrollTrigger: {
                        trigger: el,
                        start: "top 80%",
                    },
                });
            });
        }
    }

    function animatedBottom() {
        const elements = gsap.utils.toArray(".animated-bottom");

        if (elements.length) {
            elements.forEach((el) => {
                gsap.from(el, {
                    y: 40,
                    autoAlpha: 0,
                    scrollTrigger: {
                        trigger: el,
                        start: "top 85%",
                    },
                });
            });
        }
    }

    function animatedBottomStagger() {
        const wrapper = gsap.utils.toArray(".animated-bottom-stagger");

        if (wrapper.length) {
            wrapper.forEach((wrap) => {
                const children = [...wrap.children];

                gsap.from(children, {
                    autoAlpha: 0,
                    y: 40,
                    stagger: 0.05,
                    duration: 0.5,
                    scrollTrigger: {
                        trigger: wrap,
                        start: "top 85%",
                    },
                });
            });
        }
    }
})();
