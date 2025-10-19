// Cards klicken → Overlay mit Video öffnen
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', (e) => {
        const videoId = card.dataset.video;
        const overlay = document.getElementById('video-overlay');
        const iframe = document.getElementById('overlay-video');

        // src direkt beim Klick setzen → Autoplay auf iOS funktioniert
        iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&controls=1&rel=0`;

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
