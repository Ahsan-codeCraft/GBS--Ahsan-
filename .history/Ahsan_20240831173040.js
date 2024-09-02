console.log("Woring")

gsap.registerPlugin(ScrollTrigger);


gsap.from(selector, {duration: 1, fromVars})('.image1',
    {
        scrollTrigger: {
            trigger: '.image1',

        },
        duration: 1,
        x: 100,
    })