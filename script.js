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
    iframe.src = url + "?autoplay=1&controls=1&rel=0";
    overlay.style.display = 'flex';
}

function closeVideo(event) {
    event.stopPropagation(); // Klick nur für das Target
    const overlay = document.getElementById('video-overlay');
    const iframe = document.getElementById('overlay-video');
    iframe.src = "";
    overlay.style.display = 'none';
}