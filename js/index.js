window.addEventListener("scroll" , () => {
    const scroll = window.scrollY;
    const desplazamiento = scroll * 0.4;
    const elemento = document.getElementById("img-scroll-nolib");
    elemento.style.transform = `rotate(${desplazamiento}deg)`;
});