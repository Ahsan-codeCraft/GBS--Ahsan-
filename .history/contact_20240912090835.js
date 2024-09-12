const open = document.getElementById("menu-open");
      const close = document.getElementById("menu-close");
      const main = document.getElementById('main-01');
      const header = document.getElementById('header-1');
      const footer = document.getElementById('footer-01');
      const menu01 = document.getElementById('menu01');
      const graySection = document.getElementById('graySection');


      if (window.innerWidth > 500) {
        function showMenu(){
          // main.style.display = 'none';
          // header.style.display = 'none';
          //   footer.style.display = 'none';
          // menu01.style.display = 'block';
          menu01.style.transform = 'translateY(0vh)';
          menu01.style.opacity = 1;
          graySection.style.transform = 'translateY(-20vh)';
          graySection.style.opacity = 1;
          graySection.style.transitionDelay = '0s';
          graySection.style.borderRadius = 0;
          // graySection.style.transitionDelay = 2;

      }
      function hideMenu(){
          // menu01.style.display = 'none';
          menu01.style.transform = 'translateY(100vh)';
          menu01.style.opacity = 0;
          graySection.style.opacity = 0;
          graySection.style.transform = 'translateY(100vh)';
          graySection.style.transitionDelay = '0.5s';
          graySection.style.borderRadius = '60%';
          // graySection.style.transform = 'translateY(100vh)';
          // megraySectionnu01.style.opacity = 1; 
        }
      }else if(window.innerWidth < 500){
        function showMenu(){
          // main.style.display = 'none';
          // header.style.display = 'none';
          //   footer.style.display = 'none';
          // menu01.style.display = 'block';
          menu01.style.transform = 'translateY(0vh)';
          menu01.style.opacity = 1;
          graySection.style.transform = 'translateY(-15vh)';
          graySection.style.opacity = 1;
          graySection.style.transitionDelay = '0s';
          graySection.style.borderRadius = 0;
          // graySection.style.transitionDelay = 2;

      }
      function hideMenu(){
          // menu01.style.display = 'none';
          menu01.style.transform = 'translateY(100vh)';
          menu01.style.opacity = 0;
          graySection.style.opacity = 0;
          graySection.style.transform = 'translateY(100vh)';
          graySection.style.transitionDelay = '0.5s';
          graySection.style.borderRadius = '30%';
          // graySection.style.transform = 'translateY(100vh)';
          // megraySectionnu01.style.opacity = 1; 
        }
      }
        open.addEventListener('click',showMenu);
        close.addEventListener('click',hideMenu);


const cursorBall = document.querySelector('.cursor-ball');
let mouseX = 0, mouseY = 0;
let ballX = 0, ballY = 0;
const delay = 0.1; // Adjust this value for more or less delay

document.addEventListener('mousemove', function(e) {
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

  

function updateTime() {
    const now = new Date();
    
    // Format time with hours, minutes, seconds, and AM/PM
    const options = {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
        timeZoneName: 'short' // Includes the time zone abbreviation
    };
    
    const formattedTime = new Intl.DateTimeFormat('en-US', options).format(now);
    const finalTime = formattedTime.replace('GMT+5', 'PST');
    
    document.getElementById('datetime').textContent = finalTime;
}

setInterval(updateTime, 1000);
updateTime();




// HIDING FORMS
const hr1 = document.getElementById("hr-1");
const hr2 = document.getElementById("hr-2");
const head1 = document.getElementById("head-1");
const head2 = document.getElementById("head-2");
const hidingForm = document.getElementById("hiding");


head2.addEventListener("click" , function(){
    hr1.style.opacity = 0;
    hr2.style.opacity = 1;
    head2.style.color = "#e0eeee";
    head1.style.color = "#798081";
    hidingForm.style.display = "block";
});


head1.addEventListener("click" , function(){
    hr1.style.opacity = 1;
    hr2.style.opacity = 0;
    head2.style.color = "#798081";
    head1.style.color = "#e0eeee";
    hidingForm.style.display = "none";
});












//  GSAP      

gsap.registerPlugin(ScrollTrigger);



if (window.innerWidth > 500) {


    gsap.to(".h-about", {
        scrollTrigger: {
            trigger: ".section-4",
            start: "0% 80%",
            end: "20% 40%",
            scrub: true,
        },
        x: 0,
    });
    gsap.to(".h-about", {
        scrollTrigger: {
            trigger: ".section-4",
            start: "0% 100%",
            end: "20% 30%",
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




    gsap.to(".f-p1", {
        scrollTrigger: {
            trigger: ".section-4",
            start: "20% 80%",
            end: "40% 50%",
            scrub: true,
        },
        y: 0,
        opacity: 1,
    });
    gsap.to(".f-p02", {
        scrollTrigger: {
            trigger: ".section-4",
            start: "40% 80%",
            end: "60% 50%",
            scrub: true,
        },
        y: 0,
        opacity: 1,
    });
    gsap.to(".f-p3", {
        scrollTrigger: {
            trigger: ".section-4",
            start: "60% 80%",
            end: "80% 50%",
            scrub: true,
        },
        y: 0,
        opacity: 1,
    });
    gsap.to(".f-p4", {
        scrollTrigger: {
            trigger: ".section-4",
            start: "80% 80%",
            end: "100% 70%",
            scrub: true,
        },
        y: 0,
        opacity: 1,
    });





} else if (window.innerWidth < 500) {



    gsap.to(".h-about", {
        scrollTrigger: {
            trigger: ".section-4",
            start: "0% 80%",
            end: "20% 40%",
            scrub: true,
        },
        x: 0,
    });
    gsap.to(".h-about", {
        scrollTrigger: {
            trigger: ".section-4",
            start: "0% 100%",
            end: "20% 40%",
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




    gsap.to(".f-p1", {
        scrollTrigger: {
            trigger: ".section-4",
            start: "20% 80%",
            end: "40% 50%",
            scrub: true,
        },
        y: 0,
        opacity: 1,
    });
    gsap.to(".f-p02", {
        scrollTrigger: {
            trigger: ".section-4",
            start: "40% 80%",
            end: "60% 50%",
            scrub: true,
        },
        y: 0,
        opacity: 1,
    });
    gsap.to(".f-p3", {
        scrollTrigger: {
            trigger: ".section-4",
            start: "60% 80%",
            end: "80% 50%",
            scrub: true,
        },
        y: 0,
        opacity: 1,
    });
    gsap.to(".f-p4", {
        scrollTrigger: {
            trigger: ".section-4",
            start: "80% 80%",
            end: "100% 70%",
            scrub: true,
        },
        y: 0,
        opacity: 1,
    });

}


