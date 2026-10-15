window.addEventListener("scroll" , () => {
    const scroll = window.scrollY;
    const desplazamiento = scroll * 0.4;
    const elemento = document.getElementById("img-scroll-nolib");
    elemento.style.transform = `rotate(${desplazamiento}deg)`;
});

document.addEventListener("DOMContentLoaded", () => {
        
    const productos = document.querySelectorAll('.product');

    productos.forEach(producto => {
        producto.addEventListener('click', () => {
            const nombreProducto = producto.innerText.split('\n')[0].trim() || "el producto";
                        
            alert(`¡Felicidades! Has comprado: ${nombreProducto}`);
        });
    });
    
});
