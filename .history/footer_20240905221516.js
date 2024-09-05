// Select the .footer_text_scroll container
var container = document.querySelector(".text-wrapper");

// Select the .footer_cursor-light element
var lightEffect = document.querySelector(".footer_cursor-light");

// Function to update the position of the torch effect
function updateTorchPosition(x, y) {
    if (lightEffect) {
        lightEffect.style.setProperty('--x', x + 'px');
        lightEffect.style.setProperty('--y', y + 'px');
    }
}

// Add event listeners to the container
container.addEventListener('mousemove', e => {
    var rect = container.getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;
    updateTorchPosition(x, y);
});

// Handle touch events for mobile devices
container.addEventListener('touchmove', e => {
    var rect = container.getBoundingClientRect();
    var x = e.touches[0].clientX - rect.left;
    var y = e.touches[0].clientY - rect.top;
    updateTorchPosition(x, y);
});

container.addEventListener('touchstart', e => {
    var rect = container.getBoundingClientRect();
    var x = e.touches[0].clientX - rect.left;
    var y = e.touches[0].clientY - rect.top;
    updateTorchPosition(x, y);
});
