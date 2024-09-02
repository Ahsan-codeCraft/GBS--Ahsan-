console.log("Woring")

gsap.registerPlugin(ScrollTrigger);


gsap.from('.image1',
    {
        scrollTrigger: {
            trigger: '.image1',

        },
        duration: 1,
        ro
        x: -100,
    })