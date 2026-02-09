// ============================================
// FLOATING HEARTS EFFECT
// ============================================

const floatingHearts = {
    container: null,

    init() {
        this.container = document.getElementById('hearts-container');
        if (!this.container) return;

        // Start creating floating hearts periodically
        this.startHearts();
    },

    startHearts() {
        // Create initial hearts
        for (let i = 0; i < 5; i++) {
            setTimeout(() => this.createHeart(), i * 200);
        }

        // Create new hearts every 1.5 seconds
        setInterval(() => this.createHeart(), 1500);
    },

    createHeart() {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.textContent = ['❤️', '💕', '💖', '💗', '💝'][Math.floor(Math.random() * 5)];
        
        // Random horizontal position
        heart.style.left = Math.random() * 100 + '%';
        
        // Random animation duration between 3-6 seconds
        const duration = 3 + Math.random() * 3;
        heart.style.animationDuration = duration + 's';
        
        // Random animation delay
        const delay = Math.random() * 0.5;
        heart.style.animationDelay = delay + 's';
        
        // Random size
        const size = 1 + Math.random() * 1.5;
        heart.style.fontSize = (2 * size) + 'rem';
        
        this.container.appendChild(heart);
        
        // Remove after animation completes
        setTimeout(() => heart.remove(), (duration + delay) * 1000);
    }
};

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        floatingHearts.init();
    });
} else {
    floatingHearts.init();
}
