console.log("Woring")

gsap.registerPlugin(ScrollTrigger);


gsap.from('.image1',
    {
        scrollTrigger: {
            trigger: '.image1',

        },
        duration: 1,
        rotation: 120deg',
        x: -100,
    })