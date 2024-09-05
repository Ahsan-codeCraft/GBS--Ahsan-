console.log("Woring")

gsap.registerPlugin(ScrollTrigger);

tl = gsap.timeline()
// ----------PORTFOLIO----------
// .
// .
// tl.from('.h1_port',
//     {
//         scrollTrigger: {
//             trigger: '.h1_port',
//             start: 'top 70%',
//             end: 'top 50%',
//             scrub: 1,

//         },
//         filter: "blur(5px)",
//         opacity: 0,            // End opacity
//         duration: 1,         // Duration of each blink phase
//     })

gsap.to('.image1',
    {
        scrollTrigger: {
            trigger: '.image1',
            start: 'top 40%',
            end: 'top -40%',
            scrub: 1,

        },
        duration: 2,
        rotation: -30,
        x: -400,
    })
    function setupAnimations() {
        // Define breakpoints
        const isMobile = window.matchMedia("(max-width: 599px)").matches;
        const isTablet = window.matchMedia("(min-width: 600px) and (max-width: 1024px)").matches;
    
        // Default values
        let image4Start = 'top 40%';
        let image4End = 'top -40%';
        let image5Start = 'top 90%';
        let image5End = 'top -40%';
        let image6Start = 'top 90%';
        let image6End = 'top -40%';
    
        // Adjust values for mobile
        if (isMobile) {
            image4Start = 'top 80%';
            image4End = 'top 30%';
            image5Start = 'top 80%';
            image5End = 'top 20%';
            image6Start = 'top 80%';
            image6End = 'top 20%';
        }
        // Adjust values for tablet
        else if (isTablet) {
            image4Start = 'top 45%';
            image4End = 'top 25%';
            image5Start = 'top 85%';
            image5End = 'top 25%';
            image6Start = 'top 85%';
            image6End = 'top 25%';
        }
    
        // Clear existing ScrollTriggers
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    
        // Setup GSAP animations with updated start and end values
        gsap.to('.image4', {
            scrollTrigger: {
                trigger: '.image4',
                start: image4Start,
                end: image4End,
                scrub: 1
            },
            duration: 2,
            rotation: 30,
            x: 400
        });
    
        gsap.to('.image5', {
            scrollTrigger: {
                trigger: '.image5',
                start: image5Start,
                end: image5End,
                scrub: 1
            },
            delay: 1,
            duration: 2,
            rotation: 30,
            x: 400
        });
    
        gsap.to('.image6', {
            scrollTrigger: {
                trigger: '.image6',
                start: image6Start,
                end: image6End,
                scrub: 1
            },
            delay: 1,
            duration: 2,
            rotation: 30,
            x: 400
        });
    }
    
    // Initialize animations on page load
    setupAnimations();
    
    // Reinitialize animations on window resize
    window.addEventListener('resize', setupAnimations);
    function setupScrollTrigger() {
        const portText = document.querySelector(".port_content");
    
        // Define breakpoints
        const isMobile = window.matchMedia("(max-width: 599px)").matches;
        const isTablet = window.matchMedia("(min-width: 600px) and (max-width: 1024px)").matches;
    
        let startPoint = 'top 30%';
        let endPoint = 'top 10%';
    
        if (isMobile) {
            // Adjust start and end points for mobile
            startPoint = 'top 80%';  // Example value
            endPoint = 'top 30%';    // Example value

        } else if (isTablet) {
            // Adjust start and end points for tablet
            startPoint = 'top 40%';  // Example value
            endPoint = 'top 20%';    // Example value
        }
    
        gsap.from('.port_content', {
            scrollTrigger: {
                trigger: '.port_content',
                start: startPoint,
                end: endPoint,
                scrub: 1,
                onEnter: () => {
                    portText.style.display = 'flex';
                },
            },
            duration: 1.5,
            opacity: 0,
            y: 150,
        });
    }
    
    // Initialize on page load
    setupScrollTrigger();
    
    // Reinitialize on window resize
    window.addEventListener('resize', () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill()); // Kill existing ScrollTriggers
        setupScrollTrigger(); // Re-setup ScrollTrigger with new breakpoints
    });
    
    









tl.to('.image2',
    {
        scrollTrigger: {
            trigger: '.image2',
            start: 'top 90%',
            end: 'top -40%',
            scrub: 1,

        },
        delay: 1,
        duration: 2,
        rotation: -30,
        x: -400,
    })

tl.to('.image3',
    {
        scrollTrigger: {
            trigger: '.image3',
            start: 'top 90%',
            end: 'top -40%',
            scrub: 1,

        },
        delay: 1,
        duration: 2,
        rotation: -30,
        x: -400,

    })


// ------text-animation-----

gsap.from('#my_p1',
    {
        scrollTrigger: {
            trigger: '#my_p1',
            start: 'top 70%',
            end: 'top 40%',
            scrub: 1,

        },
        filter: "blur(5px)",
        duration: 1,
        opacity: 0,            // End opacity
        x: -50,
    })

    gsap.from('#my_p2',
        {
            scrollTrigger: {
                trigger: '#my_p2',
                start: 'top 70%',
                end: 'top 40%',
                scrub: 1,
    
            },
            filter: "blur(5px)",
            duration: 1,
            opacity: 0,            // End opacity
            x: 50,
        })
    
        gsap.from('#my_p3',
            {
                scrollTrigger: {
                    trigger: '#my_p3',
                    start: 'top 70%',
                    end: 'top 40%',
                    scrub: 1,
        
                },
                filter: "blur(5px)",
                duration: 1,
                opacity: 0,            // End opacity
                x: -50,
            })
        


// ---------Socail---------
const socialImages = document.querySelectorAll('.socail_item img');
const socialName = document.querySelectorAll('.socail_item p');


gsap.from(socialName,
    {
        scrollTrigger: {
            trigger: socialName,
            start: 'top 120%',
            end: 'top 60%',
            scrub: 1,

        },
        filter: "blur(5px)",
        opacity: 0,
        x: -100,            // End opacity
        duration: .5,         // Duration of each blink phase
    })


gsap.from(socialImages,
    {
        scrollTrigger: {
            trigger: socialImages,
            start: 'top 120%',
            end: 'top 60%',
            scrub: 1,

        },
        filter: "blur(5px)",
        duration: .5,
        opacity: 0,            // End opacity
    })

// background----------
function createMeteor() {
    const meteor = document.createElement('div');
    meteor.classList.add('meteor');

    // Randomize starting positions
    const startX = Math.random() * window.innerWidth;
    const startY = Math.random() * window.innerHeight - 100;

    // Set initial position
    meteor.style.left = `${startX}px`;
    meteor.style.top = `${startY}px`;

    document.querySelector('.background-container').appendChild(meteor);

    // Animate using GSAP
    gsap.to(meteor, {
        x: -60 - startX, // Move to the left-top
        y: 600 - startY, // Move downwards
        duration: Math.random() * 1 + 1, // Vary duration
        opacity: 1,
        ease: "power4.out",
        onComplete: () => {
            meteor.remove(); // Remove after animation
        }
    });
}

// Create meteors at intervals
setInterval(createMeteor, 600);

gsap.from('#timeTo',
    {
        scrollTrigger: {
            trigger: '#timeTo',
            start: 'top 120%',
            end: 'top 60%',
            scrub: 1,

        },
        filter: "blur(5px)",
        opacity: 0,
        x: -100,            // End opacity
        duration: .5,         // Duration of each blink phase
    })

    gsap.from('#roar',
        {
            scrollTrigger: {
                trigger: '#roar',
                start: 'top 120%',
                end: 'top 60%',
                scrub: 1,
    
            },
            filter: "blur(5px)",
            opacity: 0,
            x: 100,            // End opacity
            duration: .5,         // Duration of each blink phase
        })
    

gsap.from('#my_hr0',
    {
        scrollTrigger: {
            trigger: '#my_hr0',
            start: 'top 120%',
            end: 'top 60%',
            scrub: 1,

        },
        filter: "blur(5px)",
        opacity: 0,
        duration: .5,         // Duration of each blink phase
    })



gsap.from('.infoContainer',
    {
        scrollTrigger: {
            trigger: '.infoContainer',
            start: 'top 120%',
            end: 'top 60%',
            scrub: 1,

        },
        filter: "blur(5px)",
        opacity: 0,
        duration: .5,         // Duration of each blink phase
    })



gsap.from('#my_hr',
    {
        scrollTrigger: {
            trigger: '#my_hr',
            start: 'top 120%',
            end: 'top 60%',
            scrub: 1,

        },
        filter: "blur(5px)",
        opacity: 0,
        y: 100,            // End opacity
        duration: .5,         // Duration of each blink phase
    })
    







// ---------------------------

gsap.from('#Cname1',
    {
        scrollTrigger: {
            trigger: '#Cname1',
            start: 'top 70%',
            end: 'top 40%',
            scrub: 1,

        },
        filter: "blur(5px)",
        delay: 1,
        opacity: 0,
        y: -100,            // End opacity
        duration: 1,         // Duration of each blink phase
    })
    gsap.from('#Cname2',
        {
            scrollTrigger: {
                trigger: '#Cname2',
                start: 'top 90%',
                end: 'top 40%',
                scrub: 1,
    
            },
            filter: "blur(5px)",
            delay: 1,
            opacity: 0,
            y: -100,            // End opacity
            duration: 1,         // Duration of each blink phase
        })
        gsap.from('#Cname3',
            {
                scrollTrigger: {
                    trigger: '#Cname3',
                    start: 'top 90%',
                    end: 'top 40%',
                    scrub: 1,
        
                },
                filter: "blur(5px)",
                delay: 1,
                opacity: 0,
                y: -100,            // End opacity
                duration: 1,         // Duration of each blink phase
            })
            