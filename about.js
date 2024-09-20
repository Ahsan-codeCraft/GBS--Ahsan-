const open = document.getElementById("menu-open");
const close = document.getElementById("menu-close");
const main = document.getElementById('main-01');
const header = document.getElementById('header-1');
const footer = document.getElementById('footer-01');
const menu01 = document.getElementById('menu01');
const graySection = document.getElementById('graySection');


if (window.innerWidth > 500) {
  function showMenu() {
    menu01.style.transform = 'translateY(0vh)';
    menu01.style.opacity = 1;
    graySection.style.transform = 'translateY(-20vh)';
    graySection.style.opacity = 1;
    graySection.style.transitionDelay = '0s';
    graySection.style.borderRadius = 0;

  }
  function hideMenu() {
    menu01.style.transform = 'translateY(100vh)'; 
    menu01.style.opacity = 0;
    graySection.style.opacity = 0;
    graySection.style.transform = 'translateY(100vh)';
    graySection.style.transitionDelay = '0.5s';
    graySection.style.borderRadius = '60%';
  }
} else if (window.innerWidth < 500) {
  function showMenu() {
    menu01.style.transform = 'translateY(0vh)';
    menu01.style.opacity = 1;
    graySection.style.transform = 'translateY(-15vh)';
    graySection.style.opacity = 1;
    graySection.style.transitionDelay = '0s';
    graySection.style.borderRadius = 0;

  }
  function hideMenu() {
    menu01.style.transform = 'translateY(100vh)';
    menu01.style.opacity = 0;
    graySection.style.opacity = 0;
    graySection.style.transform = 'translateY(100vh)';
    graySection.style.transitionDelay = '0.5s';
    graySection.style.borderRadius = '30%';
  }
}
open.addEventListener('click', showMenu);
close.addEventListener('click', hideMenu);


const cursorBall = document.querySelector('.cursor-ball');
let mouseX = 0, mouseY = 0;
let ballX = 0, ballY = 0;
const delay = 0.1;

document.addEventListener('mousemove', function (e) {
  mouseX = e.clientX;
  mouseY = e.clientY;
});



function animate() {
  ballX += (mouseX - ballX) * delay;
  ballY += (mouseY - ballY) * delay;

  cursorBall.style.left = `${ballX}px`;
  cursorBall.style.top = `${ballY}px`;

  requestAnimationFrame(animate);
}
animate();








//  GSAP      
gsap.registerPlugin(ScrollTrigger);





if (window.innerWidth > 500) {


  gsap.to(".paragraph", {
    scrollTrigger: {
      trigger: ".section-3",
      start: "top 90%",
      end: "bottom 70%",
      scrub: true,
    },
    y: 0,
    opacity: 1,
  });






  gsap.to(".card-1", {
    scrollTrigger: {
      trigger: ".section-6",
      start: "-10% 90%",
      end: "30% center",
      scrub: true,

    },
    x: 0,
    rotate: 0,
    opacity: 1,
  });
  gsap.to(".card-2", {
    scrollTrigger: {
      trigger: ".section-6",
      start: "25% 90%",
      end: "40% center",
      scrub: true,
    },
    x: 0,
    rotate: 0,
    opacity: 1,
  });
  gsap.to(".card-3", {
    scrollTrigger: {
      trigger: ".section-6",
      start: "45% 90%",
      end: "60% center",
      scrub: true,
    },
    x: 0,
    rotate: 0,
    opacity: 1,
  });
  gsap.to(".card-4", {
    scrollTrigger: {
      trigger: ".section-6",
      start: "70% 90%",
      end: "80% center",
      scrub: true,
    },
    x: 0,
    rotate: 0,
    opacity: 1,
  });






  gsap.to(".h-about1", {
    scrollTrigger: {
        trigger: ".section-8",
        start: "0% 80%",
        end: "35% 40%",
        scrub: true,
      },
      x: 0,
    });
    gsap.to(".h-about2", {
      scrollTrigger: {
        trigger: ".section-8",
        start: "0% 80%",
        end: "50% 40%",
      scrub: true,
    },
    x: 0,
  });
  gsap.to(".h-about1", {
  scrollTrigger: {
    trigger: ".section-8",
    start: "0% 100%",
    end: "45% 30%",
    scrub: true,
    },
    background: "linear-gradient(to right, #c3e2ef 100%, #222222 0%)",
    onUpdate: function () {
        document.getElementById("h-about").style.webkitBackgroundClip = "text";
        document.getElementById("h-about").style.backgroundClip = "text";
        document.getElementById("h-about").style.webkitTextFillColor = "transparent";
        document.getElementById("h-about").style.color = "transparent";
        document.getElementById("h-about-1").style.webkitBackgroundClip = "text";
        document.getElementById("h-about-1").style.backgroundClip = "text";
        document.getElementById("h-about-1").style.webkitTextFillColor = "transparent";
        document.getElementById("h-about-1").style.color = "transparent";
      },
    });
gsap.to(".h-about2", {
  scrollTrigger: {
    trigger: ".section-8",
    start: "20% 100%",
    end: "55% 30%",
    scrub: true,
    },
    background: "linear-gradient(to right, #c3e2ef 100%, #222222 0%)",
    onUpdate: function () {
        document.getElementById("h-about").style.webkitBackgroundClip = "text";
        document.getElementById("h-about").style.backgroundClip = "text";
        document.getElementById("h-about").style.webkitTextFillColor = "transparent";
        document.getElementById("h-about").style.color = "transparent";
        document.getElementById("h-about-1").style.webkitBackgroundClip = "text";
        document.getElementById("h-about-1").style.backgroundClip = "text";
        document.getElementById("h-about-1").style.webkitTextFillColor = "transparent";
        document.getElementById("h-about-1").style.color = "transparent";
    },
});




} else if (window.innerWidth < 500) {



  gsap.to(".paragraph", {
    scrollTrigger: {
      trigger: ".section-3",
      start: "10% 80%",
      end: "bottom 60%",
      scrub: true,
    },
    y: 0,
    opacity: 1,
  });





  gsap.to(".card-1", {
    scrollTrigger: {
      trigger: ".section-6",
      start: "-10% 90%",
      end: "10% 70%",
      scrub: true,
    },
    x: 0,
    rotate: 0,
    opacity: 1,
  });
  gsap.to(".card-2", {
    scrollTrigger: {
      trigger: ".section-6",
      start: "50% 90%",
      end: "70% 70%",
      scrub: true,
    },
    x: 0,
    rotate: 0,
    opacity: 1,
  });
  gsap.to(".card-3", {
    scrollTrigger: {
      trigger: ".section-6",
      start: "20% 90%",
      end: "40% 70%",
      scrub: true,
    },
    x: 0,
    rotate: 0,
    opacity: 1,
  });
  gsap.to(".card-4", {
    scrollTrigger: {
      trigger: ".section-6",
      start: "75% 90%",
      end: "90% center",
      scrub: true,
    },
    x: 0,
    rotate: 0,
    opacity: 1,
  });








    gsap.to(".h-about1", {
      scrollTrigger: {
          trigger: ".section-8",
          start: "0% 80%",
          end: "35% 40%",
          scrub: true,
        },
        x: 0,
        opacity: 1,
      });
      gsap.to(".h-about2", {
        scrollTrigger: {
          trigger: ".section-8",
          start: "0% 80%",
          end: "50% 40%",
        scrub: true,
      },
      x: 0,
      opacity: 1,
    });
    gsap.to(".h-about1", {
    scrollTrigger: {
      trigger: ".section-8",
      start: "0% 100%",
      end: "45% 30%",
      scrub: true,
      },
      background: "linear-gradient(to right, #d8ebeb 100%, #222222 0%)",
      onUpdate: function () {
          document.getElementById("h-about").style.webkitBackgroundClip = "text";
          document.getElementById("h-about").style.backgroundClip = "text";
          document.getElementById("h-about").style.webkitTextFillColor = "transparent";
          document.getElementById("h-about").style.color = "transparent";
          document.getElementById("h-about-1").style.webkitBackgroundClip = "text";
          document.getElementById("h-about-1").style.backgroundClip = "text";
          document.getElementById("h-about-1").style.webkitTextFillColor = "transparent";
          document.getElementById("h-about-1").style.color = "transparent";
        },
      });
    gsap.to(".h-about2", {
    scrollTrigger: {
      trigger: ".section-8",
      start: "20% 100%",
      end: "55% 30%",
      scrub: true,
      },
      background: "linear-gradient(to right, #d8ebeb 100%, #222222 0%)",
      onUpdate: function () {
          document.getElementById("h-about").style.webkitBackgroundClip = "text";
          document.getElementById("h-about").style.backgroundClip = "text";
          document.getElementById("h-about").style.webkitTextFillColor = "transparent";
          document.getElementById("h-about").style.color = "transparent";
          document.getElementById("h-about-1").style.webkitBackgroundClip = "text";
          document.getElementById("h-about-1").style.backgroundClip = "text";
          document.getElementById("h-about-1").style.webkitTextFillColor = "transparent";
          document.getElementById("h-about-1").style.color = "transparent";
      },
    });

}