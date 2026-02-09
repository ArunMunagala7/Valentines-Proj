// ============================================
// CONFETTI EFFECT
// ============================================

const confetti = {
    canvas: null,
    ctx: null,
    particles: [],
    animationId: null,
    isRunning: false,

    init() {
        this.canvas = document.getElementById('confetti-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;

        window.addEventListener('resize', () => {
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
        });
    },

    start() {
        if (this.isRunning) return;
        this.isRunning = true;

        // Create confetti particles
        for (let i = 0; i < 100; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: -10,
                vx: (Math.random() - 0.5) * 8,
                vy: Math.random() * 5 + 3,
                color: this.getRandomColor(),
                rotation: Math.random() * Math.PI * 2,
                rotationSpeed: (Math.random() - 0.5) * 0.2
            });
        }

        this.animate();
    },

    stop() {
        this.isRunning = false;
        this.particles = [];
    },

    getRandomColor() {
        const colors = ['#ff1493', '#ff69b4', '#ffd700', '#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7'];
        return colors[Math.floor(Math.random() * colors.length)];
    },

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.particles = this.particles.filter(particle => {
            particle.y += particle.vy;
            particle.x += particle.vx;
            particle.vy += 0.1; // gravity
            particle.rotation += particle.rotationSpeed;

            // Draw confetti
            this.ctx.save();
            this.ctx.translate(particle.x, particle.y);
            this.ctx.rotate(particle.rotation);
            this.ctx.fillStyle = particle.color;
            this.ctx.fillRect(-5, -5, 10, 10);
            this.ctx.restore();

            return particle.y < this.canvas.height;
        });

        if (this.isRunning && this.particles.length > 0) {
            this.animationId = requestAnimationFrame(() => this.animate());
        } else {
            this.isRunning = false;
            cancelAnimationFrame(this.animationId);
        }
    }
};

// Initialize confetti when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        confetti.init();
    });
} else {
    confetti.init();
}
