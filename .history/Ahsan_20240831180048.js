console.log("Woring")

gsap.registerPlugin(ScrollTrigger);


gsap.from('.image1',
    {
        scrollTrigger: {
            trigger: '.image1',
            start: 'top 80%',
            end: 'top 30%',
            scrub: 1,

        },
        duration: 1,
        x: -100,
    })

    gsap.from('.image4',
        {
            scrollTrigger: {
                trigger: '.image4',
                start: 'top 80%',
                end: 'top 30%',
                scrub: true,
    
            },
            duration: 2,              // Duration of the animation in seconds
            x: 100,                   // Target x position (change as needed)
            ease: "elastic.out(1, 0.3)"
        })