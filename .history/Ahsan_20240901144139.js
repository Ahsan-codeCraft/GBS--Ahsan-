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
        









        // ---------------------------
        .footer_row1 {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 10px;
            text-align: center;
          }
          
          .footer_row1 p {
            margin: 0 15px; /* Space between words */
            font-size: 3em; /* Increase font size */
            letter-spacing: 2px;
            color: transparent;
            background-image: linear-gradient(90deg, #8338ec, #c19bf5, #6a0dad);
            background-size: 200% 200%;
            -webkit-background-clip: text;
            background-clip: text;
            animation: gradientShift 5s ease-in-out infinite;
            -webkit-text-stroke: 1px #ffffff;
            opacity: 0; /* Initially hidden for scroll animation */
            transform: translateY(50px); /* Initial position for slide-up effect */
            transition: opacity 1s ease, transform 1s ease; /* Transition for fade-in and slide-up */
          }
          
          /* Gradient Color Shift Animation */
          @keyframes gradientShift {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
          
          /* Animation triggered on scroll */
          .footer_row1.p-visible {
            opacity: 1;
            transform: translateY(0); /* Slide into view */
          }
          
          /* Responsive */
          @media (max-width: 768px) {
            .footer_row {
              flex-direction: column;
            }
          
            .footer_row img {
              margin-top: 10px;
            }
          
            .footer_row1 p {
              font-size: 2em; /* Adjust font size for smaller screens */
            }
          }