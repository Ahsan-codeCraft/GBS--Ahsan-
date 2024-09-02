// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);


tl = gsap.timeline();


tl.from("image1",
    {
        ScrollTrigger{
            trigger
        }
        duration: 2,



    })