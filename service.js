
gsap.registerPlugin(ScrollTrigger);
const text1 = document.querySelector('.text_1')

gsap.from(text1, {

    y: 20,
    duration: 1,
    opacity: 0,
})
// ==================================================================================
const sec2h2 = document.querySelector('#abc')

gsap.from(sec2h2, {

    scrollTrigger: {

        trigger: sec2h2,
        start: "top center",
        end: "top end",
    },
    y: 20,
    duration: 1,
    opacity: 0,
})


// ============================== SECTION-02 IMAGE EFFECT ===================================================
const lightSection = document.querySelector('.light-section');
const lightEffect = document.querySelector('.light-effect');
const heading = document.querySelector('.center-heading');

// Split the heading into individual spans for each letter
heading.innerHTML = heading.textContent
  .split('')
  .map(letter => `<span class="letter">${letter}</span>`)
  .join('');

// Get all the letters as span elements
const letters = document.querySelectorAll('.letter');

// Track the mouse position
lightSection.addEventListener('mousemove', (e) => {
  const { clientX, clientY } = e;

  // Move the spotlight to follow the cursor
  lightEffect.style.left = `${clientX}px`;
  lightEffect.style.top = `${clientY}px`;

  // Calculate distance for spotlight effect
  letters.forEach(letter => {
    const letterRect = letter.getBoundingClientRect();
    const letterCenterX = letterRect.left + letterRect.width / 2;
    const letterCenterY = letterRect.top + letterRect.height / 2;

    const distanceX = clientX - letterCenterX;
    const distanceY = clientY - letterCenterY;
    const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);
    
    const radius = 100; // Set the radius of the effect
    if (distance <= radius) {
      letter.classList.add('in-spotlight');
    } else {
      letter.classList.remove('in-spotlight');
    }
  });
});

lightSection.addEventListener('mouseleave', () => {
  // Hide the effect when the mouse leaves the section
  lightEffect.style.opacity = 0;
  letters.forEach(letter => letter.classList.remove('in-spotlight'));
});

lightSection.addEventListener('mouseenter', () => {
  // Show the effect again when the mouse re-enters the section
  lightEffect.style.opacity = 1;
});
// ==============================================================================================
// .
// ======================= SECTION _ 03 Text After Image ======================================
// --
const sec3 = document.querySelector('.sec_3')
if(window.innerWidth > 1060){
gsap.from(sec3, {

    scrollTrigger: {

        trigger: sec3,
        start: "top center",
        end: "top end",

    },

    y: 10,
    duration: 1,
    opacity: 0,
    scrub: 1,
})
}
else if (window.innerWidth > 300 && window.innerWidth  <= 1060) {

    gsap.from(sec3, {

        scrollTrigger: {
    
            trigger: sec3,
            start: "top 90%",
        },
        y: 20,
        duration: 1,
        opacity: 0,
        scrub: 1,
    })
}
    

// =================================================================================
const sec6 = document.querySelector('.sec_6')

gsap.from(sec6, {

    scrollTrigger: {

        trigger: sec6,
        start: "top 50%",
    },
    x: -40,
    duration: 1.5,
    opacity: 0,
    scrub: 1,
})



gsap.from('#timeTo', {
    scrollTrigger: {
        trigger: '#timeTo',
        start: 'top top',
        end: 'top center',
        scrub: 1,
    },
    filter: "blur(5px)",
    opacity: 0,
    x: -100,
    duration: 0.5,
});

gsap.from('#roar', {
    scrollTrigger: {
        trigger: '#roar',
        start: 'top top',
        end: 'top center',
        scrub: 1,
    },
    filter: "blur(5px)",
    opacity: 0,
    x: 100,
    duration: 0.5,
});

gsap.from('#my_hr0', {
    scrollTrigger: {
        trigger: '#my_hr0',
        start: 'top top',
        end: 'top center',
        scrub: 1,
        ease: "power2.out",
    },
    filter: "blur(5px)",
    opacity: 0,
    duration: 0.5,
});

gsap.from('.infoContainer', {
    scrollTrigger: {
        trigger: '.infoContainer',
        start: 'top top',
        end: 'top center',
        scrub: 1,
        ease: "power2.out",
    },
    filter: "blur(5px)",
    opacity: 0,
    duration: 0.5,
});

gsap.from('#my_hr', {
    scrollTrigger: {
        trigger: '#my_hr',
        start: 'top top',
        end: 'top center',
        scrub: 1,
        ease: "power2.out",
    },
    filter: "blur(5px)",
    opacity: 0,
    y: 100,
    duration: 0.5,
});












// Select the elements and calculate the scroll amount
const totalCards = document.querySelectorAll(".my_card1");
const scrollContainer = document.querySelector(".my_scroll");

gsap.to(totalCards, {
  ease: "all",
    transform: 'translateX(-140%)',
  scrollTrigger: {
    trigger: ".sec_7",
    scroller: "body",
    start: 'top 0%',
    end: 'top -150%',
    scrub: 2,  // Smooth out the scroll
    pin: true, // Pin the section in place

    } , // End the scroll when the entire container has scrolled
  },
);


const sec4Elements = document.querySelectorAll('.sec4_inner');

sec4Elements.forEach((element) => {
    gsap.from(element, {
        scrollTrigger: {
            trigger: element,
            scrub: 1,
            start: "top center",
            end: "top end",
        },
        opacity: 0,
        y: 20,
        duration: 1,
    });
});


















document.addEventListener('DOMContentLoaded', function () {
    var container = document.querySelector(".text-wrapper");
    var lightEffect = container.querySelector(".footer_cursor-light"); // Ensure it's selected within .text-wrapper

    function updateTorchPosition(x, y) {
        if (lightEffect) {
            lightEffect.style.setProperty('--x', `${x}px`);
            lightEffect.style.setProperty('--y', `${y}px`);
        }
    }

    function handleMouseMove(e) {
        var rect = container.getBoundingClientRect();
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;
        updateTorchPosition(x, y);
    }

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('touchmove', handleMouseMove);
    container.addEventListener('touchstart', handleMouseMove);
});




function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}








// Get references to the background and light effect
// Get references to the background and light effect
// Get references to the background and light effect
//   // Marquee Scroll Animation
//   let currentScroll = 0;
//   let isScrollingDown = true;
//   let tween = gsap.to(".marquee-part", {
//     xPercent: -100,
//     repeat: -1,
//     duration: 5,
//     ease: "linear"
//   }).totalProgress(0.5);

//   gsap.set(".marquee-inner", { xPercent: -50 });

//   window.addEventListener("scroll", function () {
//     isScrollingDown = window.scrollY > currentScroll;
//     gsap.to(tween, { timeScale: isScrollingDown ? 1 : -1 });

//     const arrows = document.querySelectorAll('.arrow');
//     arrows.forEach((arrow) => {
//       arrow.classList.toggle("active", !isScrollingDown);
//     });

//     currentScroll = window.scrollY;
//   });
// ;
// // --------------------------------------
// let currentScroll2 = 0;
// let isScrollingDown2 = true;
// let tween2 = gsap.to(".marquee-part-2", {
//   xPercent: 100, // Reversed direction
//   repeat: -1,
//   duration: 5,
//   ease: "linear"
// }).totalProgress(0.5);

// // Adjust the initial position to match the reversed direction
// gsap.set(".marquee-inner-2", { xPercent: -10 });

// window.addEventListener("scroll", function () {
//   isScrollingDown2 = window.scrollY > currentScroll2;
//   gsap.to(tween2, { timeScale: isScrollingDown2 ? 1 : -1 });

//   // Use the correct 'arrow-2' class
//   const arrows2 = document.querySelectorAll('.arrow-2');
//   arrows2.forEach((arrow2) => {
//     arrow2.classList.toggle("active", !isScrollingDown2);
//   });

//   currentScroll2 = window.scrollY;
// });
















// HIDING FORMS
const hr1 = document.getElementById("hr-1");
const hr2 = document.getElementById("hr-2");
const head1 = document.getElementById("head-1");
const head2 = document.getElementById("head-2");
const hidingForm = document.getElementById("hiding");


head2.addEventListener("click" , function(){
    hr1.style.opacity = 0;
    hr2.style.borderTop = '1px solid black';
    hr2.style.opacity = 1;
    head2.style.color = "#798081";
    head1.style.color = "#798081";
    hidingForm.style.display = "block";
});


head1.addEventListener("click" , function(){
    hr1.style.borderTop = '1px solid black';
    hr1.style.opacity = 1;
    hr2.style.opacity = 0;
    head2.style.color = "#798081";
    head1.style.color = "#798081";
    hidingForm.style.display = "none";
});

// === Footer ======

document.addEventListener('DOMContentLoaded', function () {
    var container = document.querySelector(".text-wrapper");
    var lightEffect = container.querySelector(".footer_cursor-light"); // Ensure it's selected within .text-wrapper

    function updateTorchPosition(x, y) {
        if (lightEffect) {
            lightEffect.style.setProperty('--x', `${x}px`);
            lightEffect.style.setProperty('--y', `${y}px`);
        }
    }

    function handleMouseMove(e) {
        var rect = container.getBoundingClientRect();
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;
        updateTorchPosition(x, y);
    }

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('touchmove', handleMouseMove);
    container.addEventListener('touchstart', handleMouseMove);
});

function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}
