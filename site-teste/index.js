document.addEventListener("DOMContentLoaded", () => {
    mostrarInicio(); // chama com fade
});

document.getElementById("mostrarAlbum").addEventListener("click", () => {
    mostrarComFade(album, inicio);
});

document.getElementById("mostrarInicio").addEventListener("click", () => {
    mostrarComFade(inicio, album);
});

const inicio = document.getElementsByClassName("inicio")[0];
const album = document.getElementsByClassName("album")[0];

function mostrarComFade(elementoMostrar, elementoEsconder) {
    elementoEsconder.classList.remove("fade-in");
    elementoEsconder.classList.add("fade-out");

    setTimeout(() => {
        elementoEsconder.style.display = "none";

        elementoMostrar.style.display = "flex"; // ou "block"
        elementoMostrar.classList.remove("fade-out");
        elementoMostrar.classList.add("fade-in");

        // 🧹 Volta pro topo bonitinho
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, 400);
}

function mostrarInicio() {
    album.style.display = "none";
    inicio.style.display = "flex";
    inicio.classList.add("fade-in");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}