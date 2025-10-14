document.addEventListener('DOMContentLoaded', function() {
    // Show story5
    const story5 = document.getElementById('story5');
    if (story5) {
        story5.style.display = 'block';
    }

    // Navigation
    const prev5Button = document.getElementById('prev5');
    if (prev5Button) {
        prev5Button.addEventListener('click', function() {
            window.location.href = 'story4.html';
        });
    }

    const finalButton = document.getElementById('final-button');
    if (finalButton) {
        finalButton.addEventListener('click', function() {
            window.location.href = 'hearts.html';
        });
    }
});
