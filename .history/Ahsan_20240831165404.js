// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Create a timeline for animations

tl.fromTo('#my_h1_port', 
    { y: -100, autoAlpha: 0 }, 
    { 
      y: 0, 
      autoAlpha: 1, 
      duration: 1, 
      ease: "elastic.out(1, 0.5)", 
      stagger: 0.5, 
    }
  )






const tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.portfolio', 
    end: 'bottom top', 
    scrub: 1, 
    pin: true 
  }
});

tl.fromTo('.col-1 .image', 
  { y: 100, autoAlpha: 0 }, 
  { 
    y: 0, 
    autoAlpha: 1, 
    duration: 1, 
    ease: "elastic.out(1, 0.5)", 
    stagger: 0.5, 
  }
)
.fromTo('.col-2 .imaged', 
  { y: 100, autoAlpha: 0 },
  { 
    y: 0, 
    autoAlpha: 1, 
    duration: 1, 
    ease: "elastic.out(1, 0.5)", 
    stagger: 0.2 
  },
);
