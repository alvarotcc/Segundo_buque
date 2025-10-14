document.addEventListener('DOMContentLoaded', function() {
    // Show story3
    const story3 = document.getElementById('story3');
    if (story3) {
        story3.style.display = 'block';
    }

    // Navigation
    const prev3Button = document.getElementById('prev3');
    if (prev3Button) {
        prev3Button.addEventListener('click', function() {
            window.location.href = 'story2.html';
        });
    }

    const next3Button = document.getElementById('next3');
    if (next3Button) {
        next3Button.addEventListener('click', function() {
            window.location.href = 'story4.html';
        });
    }
});
