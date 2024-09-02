console.log("Woring")

gsap.registerPlugin(ScrollTrigger);


gsap.from('.image1',
    {
        scrollTrigger: {
            trigger: '.image1',
           start: 'top 80%', // Trigger the animation when the top of the .portfolio hits 80% of the viewport height
    end: 'bottom top'

        },
        duration: 1,
        rotation: '20deg',
        x: -100,
    })