const typingElement = document.getElementById('typing-text');
const textToType = "SECURE_CONN_ESTABLISHED: KANTHIMATHINATHAN | CYBER_ENGINEER";
let index = 0;

function typeEffect() {
    if (index < textToType.length) {
        typingElement.textContent += textToType.charAt(index);
        index++;
        setTimeout(typeEffect, 50);
    }
}

// Simple Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    typeEffect();

    document.querySelectorAll('.card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });
});

// ── Remove white background from profile image via canvas ──
function removeWhiteBackground(img) {
    const canvas = document.createElement('canvas');
    canvas.width  = img.naturalWidth  || img.width;
    canvas.height = img.naturalHeight || img.height;

    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const d = imageData.data;

    for (let i = 0; i < d.length; i += 4) {
        const r = d[i], g = d[i + 1], b = d[i + 2];
        const brightness = (r + g + b) / 3;

        if (r > 230 && g > 230 && b > 230) {
            // Pure white → fully transparent
            d[i + 3] = 0;
        } else if (brightness > 200) {
            // Near-white → partially transparent (smooth edge)
            d[i + 3] = Math.round(((255 - brightness) / 55) * 255);
        }
    }

    ctx.putImageData(imageData, 0, 0);
    const dataUrl = canvas.toDataURL('image/png');

    // Apply to the visible <img>
    img.src = dataUrl;

    // Apply to the glitch pseudo-elements via CSS variable
    document.documentElement.style.setProperty('--profile-bg', `url(${dataUrl})`);
}

const profileImg = document.querySelector('.profile-img');
if (profileImg) {
    const doProcess = () => removeWhiteBackground(profileImg);
    if (profileImg.complete && profileImg.naturalWidth > 0) {
        doProcess();
    } else {
        profileImg.addEventListener('load', doProcess, { once: true });
    }
}

// Glitch effect on profile image click
const glitchContainer = document.querySelector('.glitch-container');
if (glitchContainer) {
    glitchContainer.addEventListener('click', () => {
        glitchContainer.classList.remove('glitch');
        void glitchContainer.offsetWidth; // force reflow to restart
        glitchContainer.classList.add('glitch');
    });
    glitchContainer.addEventListener('mouseleave', () => {
        glitchContainer.classList.remove('glitch');
    });
}

// Smooth scroll for nav links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
