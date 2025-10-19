const overlay = document.getElementById('video-overlay');
const iframe = document.getElementById('overlay-video');
const closeBtn = overlay.querySelector('.close-btn');

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        const videoId = card.dataset.video;
        iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&controls=1&rel=0`;
        overlay.style.display = 'flex';
    });
});

closeBtn.addEventListener('click', () => {
    iframe.src = ""; // Video stoppen
    overlay.style.display = 'none';
});
