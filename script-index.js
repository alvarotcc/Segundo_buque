let backgroundAudio;

function playBackgroundMusic() {
    if (!backgroundAudio) {
        backgroundAudio = new Audio('assets/musica2.mp3');
        backgroundAudio.loop = true;
    }
    const savedTime = sessionStorage.getItem('musicTime');
    if (savedTime) {
        backgroundAudio.currentTime = parseFloat(savedTime);
    }
    backgroundAudio.play();
}

function saveMusicTime() {
    if (backgroundAudio) {
        sessionStorage.setItem('musicTime', backgroundAudio.currentTime);
    }
}

window.addEventListener('beforeunload', saveMusicTime);

document.addEventListener('DOMContentLoaded', function() {
    const passwordContainer = document.getElementById('password-container');
    const storiesContainer = document.getElementById('stories');
    const passwordInput = document.getElementById('password');
    const submitButton = document.getElementById('submit-password');

    const correctPassword = 'amor'; // Change this to the desired password

    submitButton.addEventListener('click', function() {
        if (passwordInput.value === correctPassword) {
            passwordContainer.style.display = 'none';
            storiesContainer.style.display = 'block';
        } else {
            alert('Senha incorreta!');
        }
    });

    // Play music on story1
    const playMusicButton = document.getElementById('play-music');
    if (playMusicButton) {
        playMusicButton.addEventListener('click', function() {
            const audio = new Audio('assets/musica1.mp3');
            audio.play();
        });
    }

    // If on index.html and music was playing, stop it and reset
    if (sessionStorage.getItem('musicPlaying') === 'true') {
        if (backgroundAudio) {
            backgroundAudio.pause();
            backgroundAudio.currentTime = 0;
        }
        sessionStorage.removeItem('musicPlaying');
        sessionStorage.removeItem('musicTime');
    }

    // Start background music when clicking next1 and navigate
    const next1Button = document.getElementById('next1');
    if (next1Button) {
        next1Button.addEventListener('click', function() {
            sessionStorage.setItem('musicPlaying', 'true');
            window.location.href = 'story2.html';
        });
    }
});
