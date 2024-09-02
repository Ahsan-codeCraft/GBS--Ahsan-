// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Animation for col-1
    gsap.fromTo(
      '.col-1',
      { x: -200, autoAlpha: 0 }, // Initial position off-screen and invisible
      {
        x: 0, // Final position
        autoAlpha: 1, // Final visibility
        duration: 1.5, // Duration of the animation
        ease: "elastic.out(1, 0.5)" // Elastic easing
      }
    );
  
    // Animation for col-2
    gsap.fromTo(
      '.col-2',
      { x: 200, autoAlpha: 0 }, // Initial position off-screen and invisible
      {
        x: 0, // Final position
        autoAlpha: 1, // Final visibility
        duration: 1.5, // Duration of the animation
        ease: "elastic.out(1, 0.5)" // Elastic easing
      }
    );
  });
  