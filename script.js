function playVideo(id) {
    // Alle Videos ausblenden
    const videos = document.querySelectorAll('iframe');
    videos.forEach(v => v.style.display = 'none');

    // Gewähltes Video anzeigen
    const video = document.getElementById(id);
    video.style.display = 'block';
}
