document.addEventListener("DOMContentLoaded", function() {
    const logo = document.getElementById("logo");

    // Crear 50 estrellas y agregarlas al logo
    for (let i = 0; i < 500; i++) {
        const star = document.createElement("div");
        star.classList.add("star");
        star.style.width = `${Math.random() * 3}px`;
        star.style.height = star.style.width;
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        logo.appendChild(star);
    }
});
