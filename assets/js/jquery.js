function abrirImagenOriginal(imagen) {
    window.open(imagen, '_blank');
}

document.getElementById('imagenScrum').addEventListener('click', function () {
    abrirImagenOriginal('assets/img/scrum-2023.jpg');
});

document.getElementById('imagenSence').addEventListener('click', function () {
    abrirImagenOriginal('assets/img/sence-2023.jpg');
});

document.getElementById('imagenHP').addEventListener('click', function () {
    abrirImagenOriginal('assets/img/hp-2023.jpg');
});
