console.log

gsap.registerPlugin(ScrollTrigger);


gsap.from('image1',
    {
        scrollTrigger: {
            trigger: 'image1',

        },
        duration: 1,
        x: -100,
    })