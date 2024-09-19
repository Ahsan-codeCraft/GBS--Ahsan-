
gsap.registerPlugin(ScrollTrigger);
const text1 = document.querySelector('.text_1')

gsap.from(text1, {

    y: 20,
    duration: 1,
    opacity: 0,
})

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



const sec2 = document.querySelector('.sec_2')

gsap.from(sec2, {

    scrollTrigger: {

        trigger: sec2,
        start: "top center",
        end: "top end",
    },
    y: 20,
    duration: 1,
    opacity: 0,
    scrub: 1,
})


const sec3 = document.querySelector('.sec_3')

gsap.from(sec3, {

    scrollTrigger: {

        trigger: sec3,
        start: "top center",
        end: "top end",
    },
    y: 20,
    duration: 1,
    opacity: 0,
    scrub: 1,
})

const sec6 = document.querySelector('.sec_6')

gsap.from(sec6, {

    scrollTrigger: {

        trigger: sec6,
        start: "bottom 50%",
        end: "top end",
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
gsap.to("my_scroll",{

    scrollTrigger: {
})


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