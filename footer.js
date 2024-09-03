var pos = document.querySelector(".ahsan_container");
pos.addEventListener('mousemove', e=>{
    pos.style.setProperty('--x', e.clientX+ 'px')
    pos.style.setProperty('--y', e.clientY+ 'px')
})
