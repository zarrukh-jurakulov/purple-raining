function createHeart() {
 const heart = document.createElement('div');
 heart.classList.add('heart');
 heart.style.left = Math.random() * 100 + "vw";
 heart.style.animationDuration = Math.random() * 2 + 3 + "s";
 heart.innerText = 'Zarrukh'
 document.body.appendChild(heart);
 setTimeout(() => {
  heart.remove
 }, 500)
}

setInterval(createHeart, 3000)