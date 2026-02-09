// ============================================
// VALENTINE'S DAY WEBSITE - MAIN APPLICATION
// ============================================

const app = {
    currentTheme: 'theme-rose',
    answers: {
        'love-language': null,
        'vibe': null,
        'memory': null
    },
    secretNotes: [
        "You make every day feel like Valentine's Day ❤️",
        "I fall for you more with each moment we share 💕",
        "You're my favorite adventure 🗺️",
        "Loving you is my favorite thing to do 💕",
        "Every moment with you is special ✨",
        "Your smile is my favorite notification 📱",
        "I love the way you laugh at my silly jokes 😄",
        "You're the reason I believe in magic ✨",
        "My heart does a little dance when I see you 💃",
        "You're my favorite distraction 🥰",
        "I could listen to you talk for hours 💬",
        "You make ordinary moments extraordinary 🌟",
        "I'm so lucky to have you in my life 🍀",
        "You're my happy place, my safe space, my everything 🏡",
        "Every love song reminds me of you 🎵",
        "You're the best part of my day, every day ☀️",
        "I love how you make me feel like the luckiest person alive 💝",
        "Your hugs feel like home 🤗",
        "I could get lost in your eyes forever 👀",
        "You're not just my girlfriend, you're my best friend 👫"
    ],
    photoMessages: [
        "This moment with you was perfect 💕",
        "These are the memories I treasure most 💝",
        "With you is where my heart is ❤️",
        "You make everything beautiful 🌹",
        "Forever grateful for moments like these 💫",
        "You're my favorite person 👑",
        "Every photo tells our love story 📖",
        "These memories mean the world to me 🌍",
        "Dancing through life with you 💃",
        "You're my happy place 🏠",
        "Life was beautiful before you, now it's magical 🪄",
        "With you, I found home 🏡",
        "You're my reason to smile every day 😊"
    ],
    gameWords: [
        { word: 'kalesh', hint: 'When we playfully argue 😄' },
        { word: 'sweetheart', hint: 'What you are to me 💕' },
        { word: 'jaanu', hint: 'Your special name for me 😊' },
        { word: 'touchwood', hint: 'What we say to keep good luck 🤞' },
        { word: 'nazar', hint: 'Protection from the evil eye 🧿' },
        { word: 'gnn', hint: 'Our special goodnight 🌙' }
    ],
    currentWordIndex: 0,
    guessedLetters: [],
    remainingGuesses: 8,
    wordsCompleted: 0,
    
    // Initialize the app
    init() {
        this.startBackgroundMusic();
        this.setupEventListeners();
        this.createPhotoGallery();
        this.createFloatingHearts();
        console.log('Valentine\'s Day Website Initialized! 💕');
    },

    // Start background music
    startBackgroundMusic() {
        // Music is disabled for now
        return;
    },

    // Setup all event listeners
    setupEventListeners() {
        // Main question
        document.getElementById('yes-btn-main').addEventListener('click', () => {
            this.goToPage('page-questions');
        });

        document.getElementById('no-btn-main').addEventListener('click', (e) => {
            this.makeNoButtonFly(e.target);
        });

        // Question options
        document.querySelectorAll('.option-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.handleQuestionAnswer(e);
            });
        });

        // Game buttons
        document.querySelectorAll('.letter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.guessLetter(e.target.dataset.letter);
            });
        });

        document.getElementById('next-word-btn').addEventListener('click', () => {
            this.nextWord();
        });

        // Game continue
        document.getElementById('continue-btn-game').addEventListener('click', () => {
            this.goToPage('page-gallery');
        });

        // Gallery continue
        document.getElementById('continue-btn-gallery').addEventListener('click', () => {
            this.goToPage('page-final');
        });

        // Final page
        document.getElementById('celebrate-btn').addEventListener('click', () => {
            this.triggerConfetti();
        });

        document.getElementById('bookmark-btn').addEventListener('click', () => {
            this.bookmarkPage();
        });

        // Secret notes overlay close
        document.querySelector('.close-note').addEventListener('click', () => {
            document.getElementById('secret-notes-overlay').classList.remove('active');
        });

        // (Removed random secret notes/emoji popup)
    },

    // Handle answer to questions
    handleQuestionAnswer(e) {
        const btn = e.target;
        const question = btn.dataset.question;
        const answer = btn.dataset.answer;

        // Mark as selected
        document.querySelectorAll(`[data-question="${question}"]`).forEach(b => {
            b.classList.remove('selected');
        });
        btn.classList.add('selected');

        // Store answer
        this.answers[question] = answer;

        // Apply theme
        this.applyTheme(question, answer);

        // Check if all questions answered
        this.checkAllAnswered();
    },

    // Check if all questions are answered
    checkAllAnswered() {
        const allAnswered = Object.values(this.answers).every(ans => ans !== null);
        if (allAnswered) {
            const continueBtn = document.createElement('button');
            continueBtn.id = 'continue-btn-questions';
            continueBtn.className = 'btn btn-primary';
            continueBtn.textContent = 'Next ➜';
            
            const progressDiv = document.querySelector('.progress-indicator');
            if (progressDiv && !document.getElementById('continue-btn-questions')) {
                progressDiv.appendChild(continueBtn);
                continueBtn.addEventListener('click', () => {
                    this.goToPage('page-game');
                });
            }
        }
    },

    // Apply theme based on answer
    applyTheme(question, answer) {
        const body = document.body;
        body.classList.add('theme-active');

        // Remove previous theme classes
        body.classList.remove(
            'theme-sunset','theme-rose','theme-lavender','theme-cherry',
            'theme-warm','theme-ocean','theme-elegant','theme-playful',
            'theme-citrus','theme-mint','theme-tropical','theme-rainbow',
            'theme-bg-1','theme-bg-2','theme-bg-3','theme-bg-4','theme-bg-5','theme-bg-6','theme-bg-7','theme-bg-8','theme-bg-9','theme-bg-10','theme-bg-11','theme-bg-12'
        );

        // Dramatic backgrounds for each answer
        let themeClass = '';
        if (question === 'love-language') {
            body.dataset.loveLanguage = answer;
            if (answer === 'quality-time') themeClass = 'theme-bg-1';
            if (answer === 'words') themeClass = 'theme-bg-2';
            if (answer === 'acts') themeClass = 'theme-bg-3';
            if (answer === 'gifts') themeClass = 'theme-bg-4';
        }
        if (question === 'vibe') {
            body.dataset.vibe = answer;
            if (answer === 'cozy') themeClass = 'theme-bg-5';
            if (answer === 'adventure') themeClass = 'theme-bg-6';
            if (answer === 'romantic') themeClass = 'theme-bg-7';
            if (answer === 'fun') themeClass = 'theme-bg-8';
        }
        if (question === 'memory') {
            body.dataset.memory = answer;
            if (answer === 'laughs') themeClass = 'theme-bg-9';
            if (answer === 'quiet') themeClass = 'theme-bg-10';
            if (answer === 'adventures') themeClass = 'theme-bg-11';
            if (answer === 'all') themeClass = 'theme-bg-12';
        }
        if (themeClass) body.classList.add(themeClass);

        // Trigger theme animations
        if (typeof themeAnimations !== 'undefined') {
            themeAnimations.applyThemeAnimation(question, answer);
        }
    },

    // Make the No button fly away
    makeNoButtonFly(btn) {
        const randomX = Math.random() * (window.innerWidth - 100);
        const randomY = Math.random() * (window.innerHeight - 50);
        
        btn.style.position = 'fixed';
        btn.style.left = randomX + 'px';
        btn.style.top = randomY + 'px';
        btn.style.zIndex = '1000';
        btn.style.transition = 'all 0.3s ease';
        
        // Add shake effect
        btn.style.animation = 'shake 0.5s ease';
    },

    // Create photo gallery
    createPhotoGallery() {
        const gallery = document.querySelector('.gallery-grid');
        gallery.innerHTML = '';
        gallery.classList.remove('heart-gallery');
        for (let i = 1; i <= 13; i++) {
            const photoCard = document.createElement('div');
            photoCard.className = 'photo-card';
            const img = document.createElement('img');
            img.src = `photos/photo${i}.jpeg`;
            img.alt = `Our memory ${i}`;
            img.className = 'photo-image';
            img.onerror = function() {
                console.log(`Failed to load: photos/photo${i}.jpeg`);
                this.style.display = 'none';
            };
            const overlay = document.createElement('div');
            overlay.className = 'photo-overlay';
            overlay.innerHTML = `<p>${this.photoMessages[i - 1]}</p>`;
            photoCard.appendChild(img);
            photoCard.appendChild(overlay);
            photoCard.addEventListener('click', () => {
                overlay.classList.toggle('revealed');
                if (!this.secretNoteShown) {
                    this.revealSecretNote();
                    this.secretNoteShown = true;
                }
            });
            gallery.appendChild(photoCard);
        }
    },


    // Create hangman game
    createGame() {
        // Pick a random word for this session
        this.currentWordIndex = Math.floor(Math.random() * this.gameWords.length);
        this.wordsCompleted = 0;
        this.setupWord();
        this.createAlphabetButtons();
        // Add keyboard listener for hangman
        if (!this._hangmanKeyListener) {
            this._hangmanKeyListener = (e) => {
                if (!document.getElementById('page-game').classList.contains('active')) return;
                const letter = e.key.toLowerCase();
                if (/^[a-z]$/.test(letter)) {
                    this.guessLetter(letter);
                }
            };
            window.addEventListener('keydown', this._hangmanKeyListener);
        }
    },

    setupWord() {
        const wordData = this.gameWords[this.currentWordIndex];
        this.guessedLetters = [];
        this.remainingGuesses = 8;
        
        const wordDiv = document.getElementById('hangman-word');
        wordDiv.innerHTML = '';
        
        // Create letter blanks
        for (let letter of wordData.word) {
            const letterBox = document.createElement('div');
            letterBox.className = 'letter-box';
            letterBox.dataset.letter = letter;
            letterBox.textContent = '_';
            wordDiv.appendChild(letterBox);
        }
        
        // Show hint
        document.getElementById('game-hint').innerHTML = `<p>💡 ${wordData.hint}</p>`;
        
        // Reset status
        document.getElementById('game-status').textContent = '';
        document.getElementById('next-word-btn').style.display = 'none';
        
        // Enable all letter buttons
        document.querySelectorAll('.letter-btn').forEach(btn => {
            btn.disabled = false;
            btn.classList.remove('used');
        });
    },

    createAlphabetButtons() {
        const container = document.getElementById('alphabet-buttons');
        container.innerHTML = '';
        
        const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
        alphabet.forEach(letter => {
            const btn = document.createElement('button');
            btn.className = 'letter-btn';
            btn.dataset.letter = letter;
            btn.textContent = letter.toUpperCase();
            btn.addEventListener('click', () => this.guessLetter(letter));
            container.appendChild(btn);
        });
    },

    guessLetter(letter) {
        const wordData = this.gameWords[this.currentWordIndex];
        const word = wordData.word;
        
        // Disable button
        const btn = document.querySelector(`[data-letter="${letter}"]`);
        if (btn && btn.classList.contains('letter-btn')) {
            btn.disabled = true;
            btn.classList.add('used');
        }
        
        // Check if letter exists in word
        if (word.includes(letter)) {
            // Reveal all instances of the letter
            document.querySelectorAll('.letter-box').forEach(box => {
                if (box.dataset.letter === letter) {
                    box.textContent = letter.toUpperCase();
                    box.classList.add('revealed');
                }
            });
            
            this.guessedLetters.push(letter);
            
            // Check if word is complete
            if (this.isWordComplete()) {
                this.wordCompleted();
            }
        } else {
            this.remainingGuesses--;
            const statusDiv = document.getElementById('game-status');
            statusDiv.innerHTML = `Wrong guess! ${this.remainingGuesses} tries left`;
            statusDiv.className = 'game-status error';
            
            if (this.remainingGuesses === 0) {
                this.gameFailed();
            }
        }
    },

    isWordComplete() {
        const boxes = document.querySelectorAll('.letter-box');
        return Array.from(boxes).every(box => box.classList.contains('revealed'));
    },

    wordCompleted() {
        const statusDiv = document.getElementById('game-status');
        statusDiv.innerHTML = '🎉 Correct! You got it!';
        statusDiv.className = 'game-status success';
        document.getElementById('continue-btn-game').style.display = 'block';
    },

    gameFailed() {
        const wordData = this.gameWords[this.currentWordIndex];
        const statusDiv = document.getElementById('game-status');
        statusDiv.innerHTML = `The word was: ${wordData.word.toUpperCase()}`;
        statusDiv.className = 'game-status error';
        // Reveal all letters
        document.querySelectorAll('.letter-box').forEach(box => {
            box.textContent = box.dataset.letter.toUpperCase();
            box.classList.add('revealed');
        });
        setTimeout(() => {
            document.getElementById('continue-btn-game').style.display = 'block';
        }, 1500);
    },

    nextWord() {
        // No-op: only one word per session
    },

    // Reveal secret note
    secretNoteShown: false,
    revealSecretNote() {
        const randomNote = this.secretNotes[Math.floor(Math.random() * this.secretNotes.length)];
        document.getElementById('secret-note-content').textContent = randomNote;
        const overlay = document.getElementById('secret-notes-overlay');
        overlay.classList.add('active');
        // Auto-close after 2.2 seconds
        setTimeout(() => {
            overlay.classList.remove('active');
        }, 2200);
    },

    // Create floating hearts
    createFloatingHearts() {
        const container = document.getElementById('hearts-container');
        
        setInterval(() => {
            const heart = document.createElement('div');
            heart.className = 'floating-heart';
            heart.textContent = '❤️';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDuration = (3 + Math.random() * 2) + 's';
            
            container.appendChild(heart);
            
            setTimeout(() => heart.remove(), 5000);
        }, 800);
    },

    // Trigger confetti on yes
    triggerConfetti() {
        confetti.start();
        setTimeout(() => confetti.stop(), 3000);
    },

    // Bookmark page
    bookmarkPage() {
        alert('💕 This page has been bookmarked in your heart forever! 💕\n\nYou can bookmark this in your browser with Ctrl+D (or Cmd+D on Mac)');
    },

    // Go to page
    goToPage(pageId) {
        // Hide all pages
        document.querySelectorAll('.page').forEach(page => {
            page.classList.remove('active');
        });

        // Show target page
        const targetPage = document.getElementById(pageId);
        if (targetPage) {
            targetPage.classList.add('active');

            // If going to game page, create game
            if (pageId === 'page-game') {
                this.createGame();
            }
        }

        // Scroll to top
        window.scrollTo(0, 0);
    }
};

// Add shake animation keyframe dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
        20%, 40%, 60%, 80% { transform: translateX(5px); }
    }
`;
document.head.appendChild(style);

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    app.init();
});
