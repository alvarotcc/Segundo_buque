document.addEventListener('DOMContentLoaded', function() {
    // Show story2
    const story2 = document.getElementById('story2');
    if (story2) {
        story2.style.display = 'block';
    }

    // Navigation
    const prev2Button = document.getElementById('prev2');
    if (prev2Button) {
        prev2Button.addEventListener('click', function() {
            // Stop music when going back to index
            const iframe = document.getElementById('audio-iframe');
            if (iframe) {
                iframe.contentWindow.postMessage('pause', '*');
            }
            localStorage.removeItem('audioTime');
            sessionStorage.removeItem('musicPlaying');
            sessionStorage.removeItem('musicTime');
            window.location.href = 'index.html';
        });
    }

    const next2Button = document.getElementById('next2');
    if (next2Button) {
        next2Button.addEventListener('click', function() {
            window.location.href = 'story3.html';
        });
    }
});
