document.addEventListener('DOMContentLoaded', function() {
    // Show story4
    const story4 = document.getElementById('story4');
    if (story4) {
        story4.style.display = 'block';
    }

    // Navigation
    const prev4Button = document.getElementById('prev4');
    if (prev4Button) {
        prev4Button.addEventListener('click', function() {
            window.location.href = 'story3.html';
        });
    }

    const next4Button = document.getElementById('next4');
    if (next4Button) {
        next4Button.addEventListener('click', function() {
            window.location.href = 'story5.html';
        });
    }
});
