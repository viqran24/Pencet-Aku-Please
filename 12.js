
// Buat animasi hati jatuh
function createHeart() {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 4 + "s"; // Variasi durasi jatuh
    heart.style.fontSize = Math.random() * 10 + 15 + "px"; // Variasi ukuran hati
    document.querySelector(".hearts").appendChild(heart);
    setTimeout(() => heart.remove(), 5000); // Hapus setelah jatuh
}

setInterval(createHeart, 300); // Buat hati setiap 300ms
