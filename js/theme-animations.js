// ============================================
// ROMANTIC THEME ANIMATIONS
// ============================================

const themeAnimations = {
    activeAnimations: [],
    
    // Create particle system for different themes
    createParticles(type, count, container) {
        for (let i = 0; i < count; i++) {
            setTimeout(() => {
                const particle = document.createElement('div');
                particle.className = `theme-particle ${type}`;
                particle.style.left = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 3 + 's';
                particle.style.animationDuration = (3 + Math.random() * 4) + 's';
                container.appendChild(particle);
                
                this.activeAnimations.push(particle);
                
                setTimeout(() => {
                    particle.remove();
                }, 8000);
            }, i * 100);
        }
    },
    
    // Clear existing theme animations
    clearAnimations() {
        this.activeAnimations.forEach(el => el.remove());
        this.activeAnimations = [];
        
        const existingContainer = document.getElementById('theme-particles');
        if (existingContainer) {
            existingContainer.remove();
        }
    },
    
    // Apply theme-specific animations
    applyThemeAnimation(question, answer) {
        this.clearAnimations();
        
        let container = document.getElementById('theme-particles');
        if (!container) {
            container = document.createElement('div');
            container.id = 'theme-particles';
            container.className = 'theme-particles-container';
            document.body.appendChild(container);
        }
        
        // Love Language Animations
        if (question === 'love-language') {
            switch(answer) {
                case 'quality-time':
                    this.createSunsetGlow(container);
                    this.createParticles('sunset-particle', 15, container);
                    break;
                case 'words':
                    this.createFloatingWords(container);
                    this.createParticles('word-sparkle', 20, container);
                    break;
                case 'acts':
                    this.createGentleStars(container);
                    this.createParticles('lavender-bloom', 12, container);
                    break;
                case 'gifts':
                    this.createSparkleTrails(container);
                    this.createParticles('gift-sparkle', 18, container);
                    break;
            }
        }
        
        // Vibe Animations
        if (question === 'vibe') {
            switch(answer) {
                case 'cozy':
                    this.createWarmGlow(container);
                    this.createParticles('cozy-ember', 10, container);
                    break;
                case 'adventure':
                    this.createWaves(container);
                    this.createParticles('adventure-bubble', 20, container);
                    break;
                case 'romantic':
                    this.createRosesPetals(container);
                    this.createParticles('rose-petal', 25, container);
                    break;
                case 'fun':
                    this.createConfettiRain(container);
                    this.createParticles('fun-confetti', 30, container);
                    break;
            }
        }
        
        // Memory Animations
        if (question === 'memory') {
            switch(answer) {
                case 'laughs':
                    this.createBurstEffect(container);
                    this.createParticles('laugh-burst', 15, container);
                    break;
                case 'quiet':
                    this.createMoonlight(container);
                    this.createParticles('quiet-star', 8, container);
                    break;
                case 'adventures':
                    this.createCompassRose(container);
                    this.createParticles('adventure-trail', 12, container);
                    break;
                case 'all':
                    this.createRainbowSpirals(container);
                    this.createParticles('rainbow-heart', 20, container);
                    break;
            }
        }
    },
    
    // Sunset glow effect
    createSunsetGlow(container) {
        const glow = document.createElement('div');
        glow.className = 'sunset-glow';
        container.appendChild(glow);
        this.activeAnimations.push(glow);
    },
    
    // Floating words animation
    createFloatingWords(container) {
        const words = ['Love', 'Forever', 'You', 'Beautiful', 'Us'];
        words.forEach((word, i) => {
            setTimeout(() => {
                const wordEl = document.createElement('div');
                wordEl.className = 'floating-word';
                wordEl.textContent = word;
                wordEl.style.left = (20 + i * 15) + '%';
                wordEl.style.animationDelay = (i * 0.5) + 's';
                container.appendChild(wordEl);
                this.activeAnimations.push(wordEl);
            }, i * 200);
        });
    },
    
    // Gentle stars animation
    createGentleStars(container) {
        for (let i = 0; i < 12; i++) {
            setTimeout(() => {
                const star = document.createElement('div');
                star.className = 'gentle-star';
                star.textContent = '✨';
                star.style.left = Math.random() * 100 + '%';
                star.style.top = Math.random() * 100 + '%';
                star.style.animationDelay = Math.random() * 2 + 's';
                container.appendChild(star);
                this.activeAnimations.push(star);
            }, i * 150);
        }
    },
    
    // Sparkle trails animation
    createSparkleTrails(container) {
        setInterval(() => {
            const trail = document.createElement('div');
            trail.className = 'sparkle-trail';
            trail.style.left = Math.random() * 100 + '%';
            container.appendChild(trail);
            setTimeout(() => trail.remove(), 2000);
        }, 400);
    },
    
    // Warm glow effect
    createWarmGlow(container) {
        const glow = document.createElement('div');
        glow.className = 'warm-glow';
        container.appendChild(glow);
        this.activeAnimations.push(glow);
    },
    
    // Wave animation for adventure
    createWaves(container) {
        for (let i = 0; i < 3; i++) {
            const wave = document.createElement('div');
            wave.className = 'ocean-wave';
            wave.style.animationDelay = (i * 1.2) + 's';
            container.appendChild(wave);
            this.activeAnimations.push(wave);
        }
    },
    
    // Rose petals animation
    createRosesPetals(container) {
        setInterval(() => {
            if (this.activeAnimations.length < 30) {
                const petal = document.createElement('div');
                petal.className = 'rose-petal-fall';
                petal.textContent = '🌹';
                petal.style.left = Math.random() * 100 + '%';
                petal.style.animationDuration = (4 + Math.random() * 3) + 's';
                container.appendChild(petal);
                setTimeout(() => petal.remove(), 7000);
            }
        }, 300);
    },
    
    // Confetti rain for fun vibe
    createConfettiRain(container) {
        const colors = ['#ff6f91', '#ffd86f', '#6dd5ff', '#9b59b6', '#ff4d8d'];
        setInterval(() => {
            if (this.activeAnimations.length < 40) {
                const piece = document.createElement('div');
                piece.className = 'confetti-piece';
                piece.style.background = colors[Math.floor(Math.random() * colors.length)];
                piece.style.left = Math.random() * 100 + '%';
                piece.style.animationDuration = (2 + Math.random() * 2) + 's';
                container.appendChild(piece);
                setTimeout(() => piece.remove(), 5000);
            }
        }, 200);
    },
    
    // Burst effect for laughs
    createBurstEffect(container) {
        const burst = document.createElement('div');
        burst.className = 'laugh-burst';
        burst.innerHTML = '😄';
        container.appendChild(burst);
        this.activeAnimations.push(burst);
    },
    
    // Moonlight effect for quiet moments
    createMoonlight(container) {
        const moon = document.createElement('div');
        moon.className = 'moonlight-glow';
        container.appendChild(moon);
        this.activeAnimations.push(moon);
    },
    
    // Compass rose for adventures
    createCompassRose(container) {
        const compass = document.createElement('div');
        compass.className = 'compass-rose';
        compass.innerHTML = '🧭';
        container.appendChild(compass);
        this.activeAnimations.push(compass);
    },
    
    // Rainbow spirals for all memories
    createRainbowSpirals(container) {
        for (let i = 0; i < 5; i++) {
            const spiral = document.createElement('div');
            spiral.className = 'rainbow-spiral';
            spiral.style.animationDelay = (i * 0.3) + 's';
            container.appendChild(spiral);
            this.activeAnimations.push(spiral);
        }
    }
};

// Initialize on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        console.log('Theme Animations Ready! 💫');
    });
} else {
    console.log('Theme Animations Ready! 💫');
}
