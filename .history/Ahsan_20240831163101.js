// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Animation for col-1
gsap.fromTo(
  '.col-1',
  { x: -200, autoAlpha: 0 }, // Initial state
  {
    x: 0, // Final position
    autoAlpha: 1, // Final visibility
    duration: 1.5, // Duration of the animation
    ease: "elastic.out(1, 0.5)", // Elastic easing
    scrollTrigger: {
      trigger: '.col-1', // Element to trigger the animation
      start: "top 80%", // Trigger animation when the top of the element hits 80% of the viewport height
      end: "bottom 20%", // End animation when the bottom of the element hits 20% of the viewport height
      scrub: true // Smoothly animate with scrolling
    }
  }
);

// Animation for col-2
gsap.fromTo(
  '.col-2',
  { x: 200, autoAlpha: 0 }, // Initial state
  {
    x: 0, // Final position
    autoAlpha: 1, // Final visibility
    duration: 1.5, // Duration of the animation
    ease: "elastic.out(1, 0.5)", // Elastic easing
    scrollTrigger: {
      trigger: '.col-2', // Element to trigger the animation
      start: "top 80%", // Trigger animation when the top of the element hits 80% of the viewport height
      end: "bottom 20%", // End animation when the bottom of the element hits 20% of the viewport height
      scrub: true // Smoothly animate with scrolling
    }
  }
);
