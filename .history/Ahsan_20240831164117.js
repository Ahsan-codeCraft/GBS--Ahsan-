// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Create a timeline for animations
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
    stagger: 0.2 
  }
)
.fromTo('.col-2 .imaged', 
  { y: 100, autoAlpha: 0 }, // Initial state: positioned down and invisible
  { 
    y: 0, // Final position
    autoAlpha: 1, // Final visibility
    duration: 1, // Duration of the animation
    ease: "elastic.out(1, 0.5)", 
    stagger: 0.2 
  },
);
