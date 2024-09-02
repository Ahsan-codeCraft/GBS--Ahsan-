console.log("Woring")

gsap.registerPlugin(ScrollTrigger);


gsap.fr('.image1',
    {
        scrollTrigger: {
            trigger: '.image1',

        },
        duration: 1,
        x: 100,
    })