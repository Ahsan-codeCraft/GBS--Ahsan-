console.log("Woring")

gsap.registerPlugin(ScrollTrigger);

tl = gsap.timeline()

tl.from('.h1_port',
    {
        scrollTrigger: {
            trigger: '.h1_port',
            start: 'top 70%',
            end: 'top 50%',
            scrub: 1,

        },
        filter: "blur(5px)",
        opacity: 0,            // End opacity
        duration: 1,         // Duration of each blink phase
    })

gsap.from('.image1',
    {
        scrollTrigger: {
            trigger: '.image1',
            start: 'top 70%',
            end: 'top 40%',
            scrub: 1,

        },
        filter: "blur(5px)",
        duration: 1,
        opacity: 0,            // End opacity
        x: -150,
    })

gsap.from('.image4',
    {
        scrollTrigger: {
            trigger: '.image4',
            start: 'top 70%',
            end: 'top 40%',
            scrub: 1,

        },
        filter: "blur(5px)",
        duration: 1,
        opacity: 0,            // End opacity
        x: 150,
    })


tl.from('.image2',
    {
        scrollTrigger: {
            trigger: '.image2',
            start: 'top 90%',
            end: 'top 40%',
            scrub: 1,

        },
        filter: "blur(5px)",
        delay: 1,
        opacity: 0,            // End opacity
        duration: 1,         // Duration of each blink phase
    })

tl.from('.image5',
    {
        scrollTrigger: {
            trigger: '.image5',
            start: 'top 90%',
            end: 'top 40%',
            scrub: 1,

        },
        filter: "blur(5px)",
        delay: 1,
        opacity: 0,            // End opacity
        duration: 1,         // Duration of each blink phase
    })
tl.from('.image3',
    {
        scrollTrigger: {
            trigger: '.image3',
            start: 'top 90%',
            end: 'top 40%',
            scrub: 1,

        },
        filter: "blur(5px)",
        delay: 1,
        opacity: 0,            // End opacity
        duration: 1,         // Duration of each blink phase
    })

tl.from('.image6',
    {
        scrollTrigger: {
            trigger: '.image6',
            start: 'top 90%',
            end: 'top 40%',
            scrub: 1,

        },
        filter: "blur(5px)",
        delay: 1,
        opacity: 0,            // End opacity
        duration: 1,         // Duration of each blink phase
    })

// ---------Socail---------

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











gsap.from('#my_hr',
    {
        scrollTrigger: {
            trigger: '#my_hr',
            start: 'top 10%',
            end: 'top 60%',
            scrub: 1,

        },
        filter: "blur(5px)",
        opacity: 0,
        y: 100,            // End opacity
        duration: 1,         // Duration of each blink phase
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
            