
const imagenes = document.querySelectorAll('.propiedad__imagen');
// console.log(imagenes);

window.addEventListener('scroll', () => {

    const scroll  = this.scrollY / -20;

    imagenes.forEach((imagen) => {
        imagen.style.backgroundPositionY = `${scroll}px`
    });
});