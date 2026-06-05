document.addEventListener('DOMContentLoaded', () => {
    // Array of photos (excluding logo and QR for the album unless desired)
    const photos = [
        "WhatsApp Image 2026-06-05 at 14.08.34.jpeg",
        "WhatsApp Image 2026-06-05 at 14.09.07 (1).jpeg",
        "WhatsApp Image 2026-06-05 at 14.09.07.jpeg",
        "WhatsApp Image 2026-06-05 at 14.09.08.jpeg",
        "WhatsApp Image 2026-06-05 at 14.09.34.jpeg",
        "WhatsApp Image 2026-06-05 at 14.09.47.jpeg",
        "WhatsApp Image 2026-06-05 at 14.09.48.jpeg",
        "WhatsApp Image 2026-06-05 at 14.09.56.jpeg",
        "WhatsApp Image 2026-06-05 at 14.09.57.jpeg",
        "WhatsApp Image 2026-06-05 at 14.12.10.jpeg",
        "WhatsApp Image 2026-06-05 at 14.12.11.jpeg",
        "WhatsApp Image 2026-06-05 at 14.12.12 (1).jpeg",
        "WhatsApp Image 2026-06-05 at 14.12.12.jpeg",
        "WhatsApp Image 2026-06-05 at 14.12.27.jpeg",
        "WhatsApp Image 2026-06-05 at 14.14.00 (1).jpeg",
        "WhatsApp Image 2026-06-05 at 14.14.00.jpeg",
        "WhatsApp Image 2026-06-05 at 14.20.23.jpeg",
        "WhatsApp Image 2026-06-05 at 14.21.25.jpeg",
        "WhatsApp Image 2026-06-05 at 14.30.06.jpeg",
        "WhatsApp Image 2026-06-05 at 14.32.25 (1).jpeg",
        "WhatsApp Image 2026-06-05 at 14.32.25 (2).jpeg",
        "WhatsApp Image 2026-06-05 at 14.32.25 (3).jpeg",
        "WhatsApp Image 2026-06-05 at 14.32.25 (4).jpeg",
        "WhatsApp Image 2026-06-05 at 14.32.25.jpeg",
        "kari.jpeg",
        "profe.jpeg",
        "67.jpeg",
        "esc.jpeg",
        "jefa.jpeg",
        "super.jpeg"
    ];

    const galleryGrid = document.getElementById('gallery-grid');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.close-lightbox');

    // Render gallery
    photos.forEach((photo, index) => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        
        const imgPath = `Fotos_Cumple/${photo}`;
        
        item.innerHTML = `
            <img src="${imgPath}" alt="Recuerdo del Aniversario ${index + 1}" loading="lazy">
            <div class="gallery-overlay">
                <span class="text-white">Ver foto</span>
            </div>
        `;

        item.addEventListener('click', () => {
            lightboxImg.src = imgPath;
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden'; // prevent scrolling
        });

        galleryGrid.appendChild(item);
    });

    // Lightbox logic
    closeBtn.addEventListener('click', () => {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    // Confetti Effect
    function createConfetti() {
        const colors = ['#ff6b6b', '#4ecdc4', '#ffe66d', '#ffffff', '#ff9f43'];
        const container = document.getElementById('confetti-container');
        
        // Generate 50 initial confettis
        for (let i = 0; i < 50; i++) {
            spawnConfetti(container, colors);
        }

        // Keep spawning
        setInterval(() => {
            spawnConfetti(container, colors);
        }, 300);
    }

    function spawnConfetti(container, colors) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        
        // Randomize
        const color = colors[Math.floor(Math.random() * colors.length)];
        const left = Math.random() * 100;
        const size = Math.random() * 8 + 5; // 5px to 13px
        const duration = Math.random() * 3 + 2; // 2s to 5s
        
        confetti.style.backgroundColor = color;
        confetti.style.left = `${left}vw`;
        confetti.style.width = `${size}px`;
        confetti.style.height = `${size}px`;
        confetti.style.animationDuration = `${duration}s`;
        
        // Random shapes (circles or squares)
        if (Math.random() > 0.5) {
            confetti.style.borderRadius = '50%';
        }
        
        container.appendChild(confetti);
        
        // Clean up
        setTimeout(() => {
            confetti.remove();
        }, duration * 1000);
    }

    // Start confetti
    createConfetti();
});
