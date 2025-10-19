function playVideo(id) {
    // Alle Videos ausblenden
    const videos = document.querySelectorAll('iframe');
    videos.forEach(v => v.style.display = 'none');

    // Gewähltes Video anzeigen
    const video = document.getElementById(id);
    video.style.display = 'block';
}

function openVideo(url) {
    const overlay = document.getElementById('video-overlay');
    const iframe = document.getElementById('overlay-video');
    iframe.src = url + "?autoplay=1"; // Video startet automatisch
    overlay.style.display = 'flex';
}

function closeVideo(event) {
    // Verhindert, dass Klick im Video das Overlay schließt
    if (event.target.id === 'overlay-video') return;

    const overlay = document.getElementById('video-overlay');
    const iframe = document.getElementById('overlay-video');
    iframe.src = ""; // stoppt das Video
    overlay.style.display = 'none';
}