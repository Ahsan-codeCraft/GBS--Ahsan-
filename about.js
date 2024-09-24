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






const scrollContainer = document.querySelector('.section-6');
const scrollContent = document.querySelector('.container-s6');
let isDragging = false;
let startX;
let scrollLeft;
let scrollWidth = scrollContent.scrollWidth;

scrollContainer.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX - scrollContainer.offsetLeft;
    scrollLeft = scrollContent.offsetLeft;
    scrollContainer.style.cursor = 'grabbing';
});

scrollContainer.addEventListener('mouseleave', () => {
    isDragging = false;
    scrollContainer.style.cursor = 'grab';
});

scrollContainer.addEventListener('mouseup', () => {
    isDragging = false;
    scrollContainer.style.cursor = 'grab';
});

scrollContainer.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollContainer.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContent.style.transform = `translateX(${scrollLeft + walk}px)`;

    // Infinite scroll logic
    if (scrollLeft + walk > 0) {
        scrollContent.style.transform = `translateX(-${scrollWidth}px)`;
        scrollLeft = -scrollWidth;
    } else if (scrollLeft + walk < -scrollWidth) {
        scrollContent.style.transform = `translateX(0px)`;
        scrollLeft = 0;
    }
});











//  GSAP      
gsap.registerPlugin(ScrollTrigger);





if (window.innerWidth > 500) {



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