# 💕 Valentine's Day Website

A beautiful, interactive Valentine's Day website to ask that special someone to be your Valentine!

## Features

✨ **Interactive Elements:**
- Playful main question with a flying "No" button
- Theme-changing questions that alter the page color scheme
- Photo gallery with hover reveals
- Memory timeline
- Cute scrambled words game with special words
- Confetti celebration effect
- Floating hearts animation
- Secret love notes hidden throughout
- Background music

🎨 **Dynamic Theming:**
The website changes colors based on her answers:
- Quality Time → Sunset theme
- Words of Affirmation → Rose theme
- Acts of Service → Lavender theme
- Gifts → Cherry theme
- Cozy & Intimate → Warm theme
- Adventure & Spontaneous → Ocean theme
- Romantic & Elegant → Elegant theme
- Fun & Quirky → Playful theme
- And more!

## File Structure

```
Valentine's Day/
├── index.html              # Main HTML file
├── css/
│   └── styles.css         # All styles and themes
├── js/
│   ├── app.js             # Main application logic
│   ├── confetti.js        # Confetti effect
│   └── floating-hearts.js # Floating hearts animation
├── photos/                # Your couple photos go here
├── assets/                # Background music goes here
└── README.md             # This file
```

## Setup Instructions

### 1. Add Your Photos

1. Place your 13 couple photos in the `/photos` folder
2. Name them: `photo1.jpg`, `photo2.jpg`, ... `photo13.jpg`
3. Open `css/styles.css` and find the `.photo-card` selector
4. Add background images for each photo card in `js/app.js`

**To add your photos programmatically:**
- Open `js/app.js`
- Find the `createPhotoGallery()` function
- Replace the photo placeholder with actual image tags

Example:
```javascript
photoCard.innerHTML = `
    <img src="photos/photo${i}.jpg" alt="Our memory ${i}">
    <span class="photo-number">${i}</span>
    <div class="photo-overlay">
        <p>${this.photoMessages[i - 1]}</p>
    </div>
`;
```

### 2. Add Background Music

1. Find royalty-free Valentine's Day music (e.g., from YouTube Audio Library, Zophar, or similar)
2. Download as MP3
3. Place the file in `/assets` folder
4. Name it: `background-music.mp3`
5. The HTML file already references this path

**Good music sources:**
- YouTube Audio Library
- Zophar.net (free video game music)
- Pixabay Music
- Pexels Music

### 3. Customize Messages

**Photo Messages:**
Open `js/app.js` and find the `photoMessages` array. Replace with your personalized messages:
```javascript
photoMessages: [
    "Your custom message 1 💕",
    "Your custom message 2 💝",
    // ... etc
],
```

**Timeline Events:**
Find the `createTimeline()` function and update:
```javascript
const timelineEvents = [
    { title: 'Your title', description: 'Your description' },
    // ... etc
];
```

**Secret Notes:**
Find the `secretNotes` array and customize:
```javascript
secretNotes: [
    "Your secret note 1 ❤️",
    "Your secret note 2 💕",
    // ... etc
],
```

**Final Message:**
Find the element with `id="final-message"` in `index.html` and replace the placeholder text with your heartfelt message.

### 4. Game Words

The special words are already set to: "kalesh", "sweetheart", "jaanu", "touchwood", "nazar", "gnn"

To change them:
- Open `js/app.js`
- Find: `gameWords: ['kalesh', 'sweetheart', 'jaanu', 'touchwood', 'nazar', 'gnn'],`
- Replace with your words

## How to Test Locally

1. Open Terminal
2. Navigate to the project folder:
   ```bash
   cd "/Users/arunmunagala/Valentine's Day"
   ```
3. Start a local server:
   ```bash
   python3 -m http.server 8000
   ```
4. Open your browser and go to: `http://localhost:8000`

## How to Deploy (GitHub Pages)

### Option 1: Using GitHub Pages (Free & Easy)

1. **Create a GitHub Repository:**
   - Go to [github.com](https://github.com)
   - Click "New Repository"
   - Name it: `valentines-day` (or any name)
   - Make it **Public**
   - Click "Create repository"

2. **Push Your Code:**
   ```bash
   cd "/Users/arunmunagala/Valentine's Day"
   
   # Initialize git
   git init
   
   # Add all files
   git add .
   
   # Commit
   git commit -m "Initial Valentine's Day website"
   
   # Add remote (replace USERNAME with your GitHub username)
   git remote add origin https://github.com/USERNAME/valentines-day.git
   
   # Push to GitHub
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click "Settings"
   - Scroll to "GitHub Pages"
   - Set "Source" to `main` branch
   - Save
   - Your site will be at: `https://USERNAME.github.io/valentines-day`

### Option 2: Deploy to Netlify (Also Free)

1. Commit your code to GitHub (follow steps above)
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Connect your GitHub repository
5. Netlify will auto-deploy every time you push changes
6. Your site will get a custom URL

### Option 3: Deploy to Vercel (Also Free)

1. Commit your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Click "Deploy"

## Customization Tips

### Change Color Scheme
- Open `css/styles.css`
- Search for the theme you want (e.g., `theme-sunset`)
- Modify the gradient colors

### Add More Questions
1. Add a new question card in `index.html`
2. Add corresponding theme in `css/styles.css`
3. Update the theme-changing logic in `js/app.js`

### Modify Animations
- Floating hearts: Edit `js/floating-hearts.js`
- Confetti: Edit `js/confetti.js`
- Page transitions: Edit animation values in `css/styles.css`

## Audio/Music Notes

- The site is set to autoplay music, but browsers may block this
- User interaction (clicking) will enable autoplay in subsequent visits
- Music volume is set to 30% by default - adjust in `index.html`:
  ```html
  <audio id="bgMusic" loop volume="0.3">
  ```
  Change `0.3` to any value between 0 and 1

## Browser Support

Works best on:
- Chrome/Chromium
- Firefox
- Safari
- Edge

Mobile-responsive and tested on:
- iPhone
- Android phones
- Tablets

## Tips for Making It Special

1. **Choose the right music** - Pick something that's meaningful to you both
2. **Personal photos** - Use high-quality couple photos
3. **Heartfelt messages** - Take time writing the final message
4. **Test before sharing** - Go through the entire flow to make sure everything works
5. **Share the link** - Once deployed, send her the GitHub Pages/Netlify link

## Need Help?

If you encounter any issues:
1. Check the browser console (F12) for error messages
2. Make sure all image paths are correct
3. Verify the audio file is in the right location
4. Test in a different browser

---

Made with ❤️ for your special someone!
