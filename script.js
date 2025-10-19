function openVideo(id) {
    const overlay = document.getElementById('video-overlay');
    const iframe = document.getElementById('overlay-video');

    // iOS: src erst beim Klick setzen
    iframe.src = `https://www.youtube.com/embed/${id}?autoplay=1&controls=1&rel=0`;

    overlay.style.display = 'flex';
}

function closeVideo(event) {
    event.stopPropagation();
    const overlay = document.getElementById('video-overlay');
    const iframe = document.getElementById('overlay-video');

    iframe.src = ""; // Video stoppen
    overlay.style.display = 'none';
}
