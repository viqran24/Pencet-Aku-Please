function showSurprise() {
    alert('Selamat Hari Valentine! 💖');
}

function createHeart() {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 4 + "s";
    heart.style.fontSize = Math.random() * 10 + 15 + "px";
    document.querySelector(".hearts").appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}

setInterval(createHeart, 300);
