console.log("Woring")

gsap.registerPlugin(ScrollTrigger);


gsap.('image1',
    {
        scrollTrigger: {
            trigger: 'image1',

        },
        duration: 1,
        x: 100,
    })