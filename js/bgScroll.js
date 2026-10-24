const overlay = document.getElementById("bg-overlay");
const MAX_opacity = 0.75;

function updateOverlay(){
    const progress = Math.min(window.scrollY /(window.innerHeight*2),1)
     overlay.style.opacity = progress * MAX_opacity ;
}

window.addEventListener("scroll",  updateOverlay, {passive: true});
window.addEventListener("resize", updateOverlay);
updateOverlay();