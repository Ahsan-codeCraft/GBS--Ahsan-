console.log("Woring")

gsap.registerPlugin(ScrollTrigger);


gsap.from('.image1',
    {
        scrollTrigger: {
            trigger: '.image1',
            start: 'top 80%',
            end: 'top',
            scrub: 1,

        },
        duration: 1,
        rotation: '-20deg',
        x: -100,
    })