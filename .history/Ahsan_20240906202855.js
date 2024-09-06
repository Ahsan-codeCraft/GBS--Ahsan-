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


gsap.from('#fM',
    {
        scrollTrigger: {
            trigger: '#fM',
            start: 'top 90%',
            end: 'top 70%',
            scrub: 1,

        },
        filter: 'blur(2px)',
        opacity: 0,
        duration: 1,
        x: 100,
    })





gsap.to('.image1',
    {
        scrollTrigger: {
            trigger: '.image1',
            start: 'top 40%',
            end: 'top -20%',
            scrub: 1,
            markers: true,
            onEnter: () => {
                port_text.style.transition = 'transform 1000ms';
            },
        },
        duration: 2,
        rotation: -30,
        x: -400,
    })

    tl.to('.image2',
        {
            scrollTrigger: {
                trigger: '.image2',
                start: 'top 90%',
                end: 'top -20%',
                scrub: 1,
                markers: true,
                  onEnter: () => {
                    port_text.style.transition = 'transform 1000ms';
                },
            },
            duration: 2,
            rotation: -30,
            x: -400,
        })

        tl.to('.image3',
            {
                scrollTrigger: {
                    trigger: '.image3',
                    start: 'top 90%',
                    end: 'top -20%',
                    scrub: 1,
                    markers: true,
                    onEnter: () => {
                        port_text.style.transition = 'transform 1000ms';
                    },
                },
                duration: 2,
                rotation: -30,
                x: -400,
            })

    gsap.to('.image4',
        {
            scrollTrigger: {
            trigger: '.image4',
            start: 'top 90%',
            end: 'top -20%',
            scrub: 1,
            markers: true,
            onEnter: () => {
                port_text.style.transition = 'transform 1000ms';
            },
        },
        duration: 2,
        rotation: 30,
        x: 400,
    })
    tl.to('.image5',
        {
            scrollTrigger: {
            trigger: '.image5',
            start: 'top 90%',
            end: 'top -20%',
            scrub: 1,
            markers: true,
            onEnter: () => {
                port_text.style.transition = 'transform 1000ms';
            },
        },
        duration: 2,
        rotation: 30,
        x: 400,
    })
    
    tl.to('.image6',
        {
            scrollTrigger: {
                trigger: '.image6',
                start: 'top 90%',
                end: 'top -20%',
                scrub: 1,
                markers: true,
                  onEnter: () => {
                    port_text.style.transition = 'transform 1000ms';
                },
            },
            duration: 2,
            rotation: 30,
            x: 400,
        })


    let port_text = document.querySelector(".port_content");

    gsap.from('.port_content', {
        scrollTrigger: {
            trigger: '.port_content',
            start: 'top 60%',
            end: 'top 20%',
            scrub: 1,
            onEnter: () => {
                port_text.style.display = 'flex';
                port_text.style.transition = 'transform 1s';
            },

            onLeaveBack: () => {
                port_text.style.display = 'none';
        }
        },
        duration: 1,
        opacity: 0,
        y: 20,
    });
    

    
    
    





    




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
            end: 'top 80%',
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
            
