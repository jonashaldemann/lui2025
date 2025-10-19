const overlay = document.getElementById('video-overlay');
const iframe = document.getElementById('overlay-video');
const closeBtn = overlay.querySelector('.close-btn');

document.querySelectorAll('.play-button').forEach(btn => {
    btn.addEventListener('click', e => {
        e.stopPropagation(); // Verhindert dass Card-Click auch feuert
        const card = btn.closest('.card');
        const videoId = card.dataset.video;

        // iframe erst jetzt setzen → funktioniert auf iOS
        iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&controls=1&rel=0`;
        overlay.style.display = 'flex';
    });
});

// Overlay schließen
closeBtn.addEventListener('click', () => {
    iframe.src = ""; // Video stoppen
    overlay.style.display = 'none';
});
