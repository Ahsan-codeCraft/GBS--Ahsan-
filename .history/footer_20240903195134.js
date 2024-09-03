var container = document.querySelector(".ahsan_container");
var lightEffect = document.createElement("div");
lightEffect.classList.add("cursor-light");
container.appendChild(lightEffect);

container.addEventListener('mousemove', e => {
    var rect = container.getBoundingClientRect(); // Get container position relative to the viewport
    var x = e.clientX - rect.left; // Adjust x-coordinate
    var y = e.clientY - rect.top; // Adjust y-coordinate
    lightEffect.style.setProperty('--x', x + 'px');
    lightEffect.style.setProperty('--y', y + 'px');
});
