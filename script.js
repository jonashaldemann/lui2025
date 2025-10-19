const overlay = document.getElementById('video-overlay');
const placeholder = overlay.querySelector('.video-placeholder');
const playBtn = placeholder.querySelector('.play-btn');
const closeBtn = overlay.querySelector('.close-btn');

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        const videoId = card.dataset.video;
        const preview = card.dataset.preview;

        placeholder.innerHTML = `<img src="${preview}" alt="Vorschaubild"><button class="play-btn">▶</button>`;
        overlay.style.display = 'flex';

        // Play-Button Event
        placeholder.querySelector('.play-btn').addEventListener('click', () => {
            const iframe = document.createElement('iframe');
            iframe.src = `https://www.youtube.com/embed/${videoId}?controls=1&rel=0`;
            iframe.allow = "fullscreen";
            iframe.frameBorder = 0;
            iframe.style.width = "100%";
            iframe.style.height = "100%";

            placeholder.innerHTML = '';
            placeholder.appendChild(iframe);
        }, { once: true });
    });
});

closeBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
    placeholder.innerHTML = '';
});
