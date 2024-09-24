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
