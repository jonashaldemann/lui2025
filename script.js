document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', (e) => {
        const videoId = card.dataset.video;
        const overlay = document.getElementById('video-overlay');
        const iframe = document.getElementById('overlay-video');

        // iOS akzeptiert Autoplay nur, wenn src direkt in Klick-Handler gesetzt wird
        iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&controls=1&rel=0`;
        iframe.setAttribute('allow', 'autoplay; fullscreen');

        overlay.style.display = 'flex';
    });
});


// Overlay schließen
function closeVideo(event) {
    event.stopPropagation();
    const overlay = document.getElementById('video-overlay');
    const iframe = document.getElementById('overlay-video');

    iframe.src = ""; // Video stoppen
    overlay.style.display = 'none';
}
