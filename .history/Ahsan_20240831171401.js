gsap.registerPlugin(ScrollTrigger);


gsap.from('image1',
     {scrollTrigger{
        trigger: 'image'
     }
        duration: 1, x:100})