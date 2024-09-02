console.log("Woring")

gsap.registerPlugin(ScrollTrigger);


gsap.from('.image1',
    {
        scrollTrigger: {
            trigger: '.image1',
            start: top,
            

        },
        duration: 1,
        rotation: '20deg',
        x: -100,
    })