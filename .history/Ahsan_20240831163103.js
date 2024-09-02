// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Create a timeline for animations
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.portfolio', // Element that triggers the timeline
    start: 'top 80%', // Trigger the animation when the top of the .portfolio hits 80% of the viewport height
    end: 'bottom 20%', // End the animation when the bottom of the .portfolio hits 20% of the viewport height
    scrub: true, // Smoothly animate with scrolling
    pin: true // Pin the section during the animation
  }
});

// Add animations to the timeline
tl.fromTo('.col-1', 
  { x: -200, autoAlpha: 0 }, // Initial state
  { 
    x: 0, // Final position
    autoAlpha: 1, // Final visibility
    duration: 1.5, // Duration of the animation
    ease: "elastic.out(1, 0.5)" // Elastic easing
  }
)
.fromTo('.col-2', 
  { x: 200, autoAlpha: 0 }, // Initial state
  { 
    x: 0, // Final position
    autoAlpha: 1, // Final visibility
    duration: 1.5, // Duration of the animation
    ease: "elastic.out(1, 0.5)" // Elastic easing
  },
  "-=1.2" // Start this animation 1.2 seconds before the previous one ends
);
