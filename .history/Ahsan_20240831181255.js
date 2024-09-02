console.log("Woring")

gsap.registerPlugin(ScrollTrigger);

tl = gsap.timeline()

tl.from('.image1',
    {
        scrollTrigger: {
            trigger: '.image1',
            start: 'top 80%',
            end: 'top 30%',
            scrub: 1,

        },
        filter: "blur(5px)",
        duration: 1,
        x: -150,
    })

gsap.from('.image4',
    {
        scrollTrigger: {
            trigger: '.image4',
            start: 'top 80%',
            end: 'top 30%',
            scrub: 1,

        },
        filter: "blur(5px)",
        duration: 1,
        x: 150,
    })


    gsap.from('.image2',
        {
            scrollTrigger: {
                trigger: '.image2',
                start: 'top 80%',
                end: 'top 30%',
                scrub: 1,
    
            },
            filter: "blur(5px)",
            duration: 1,
            
            x: 150,
        })