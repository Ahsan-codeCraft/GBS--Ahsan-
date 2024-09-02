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

    gsap.to('.image4',
        {
            scrollTrigger: {
                trigger: '.image4',
                start: 'top 80%',
                end: 'top 30%',
                ease: "elastic.in",
                scrub: 1,
    
            },
            duration: 1,
            x: 100,
        })