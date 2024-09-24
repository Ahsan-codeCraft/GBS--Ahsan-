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





const races = document.querySelector(".outbox-s7");

function getScrollAmount() {
	let racesWidth = races.scrollWidth;
	return -(racesWidth - window.innerWidth)*1.04;
}

const tween = gsap.to(races, {
	x: getScrollAmount,
	duration: 3,
	ease: "none",
});


ScrollTrigger.create({
	trigger:".s7-wrapper",
	start:"39% 40%",
	end: () => `+=${getScrollAmount() * -1}`,
	pin:true,
	animation:tween,
	scrub:true,
	invalidateOnRefresh:true,
})









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