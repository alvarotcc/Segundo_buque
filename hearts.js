document.addEventListener('DOMContentLoaded', function() {
    const heartsContainer = document.getElementById('hearts');
    const blinkingTitle = document.getElementById('blinking-title');

    // Function to create hearts
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDelay = Math.random() * 5 + 's';
        heart.style.fontSize = (Math.random() * 30 + 10) + 'px';
        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    // Start hearts animation
    heartsContainer.style.display = 'block';
    blinkingTitle.style.display = 'block';
    setInterval(createHeart, 50); // Even more hearts
});
