# 🚀 Quick Setup Guide

Get your portfolio up and running in just a few minutes!

## ⏱️ 5-Minute Setup

### Step 1: Prepare Your Images (1 min)
Create these image files and place them in the `assets/` folder:

**Image Specifications:**
- `profile.jpg` - 300x300px, professional photo
- `project1.jpg` - 600x400px or any 3:2 ratio (Brain Stroke Project)
- `project2.jpg` - 600x400px (Portfolio Website)
- `project3.jpg` - 600x400px (Student Management System)
- `resume.pdf` - Your resume file

**Don't have images?** You can:
1. Use placeholder images from [Unsplash](https://unsplash.com)
2. Take screenshots of your projects
3. Use design tools like [Figma](https://figma.com) to create mockups

### Step 2: Update Your Information (2 min)

Open `index.html` and search for these sections to update:

#### Find and Update These Email Addresses:
```html
<!-- Search for: poovarasan@example.com -->
Replace with: your.email@example.com
```

#### Find and Update These Phone Numbers:
```html
<!-- Search for: +919876543210 -->
Replace with: +91XXXXX XXXXX
```

#### Find and Update Your Social Media:
```html
<!-- Search for: https://github.com -->
Replace with: https://github.com/yourusername

<!-- Search for: https://linkedin.com -->
Replace with: https://linkedin.com/in/yourprofile
```

#### Find and Update Your Location:
```html
<!-- Search for: Chennai, Tamil Nadu, India -->
Replace with: Your City, State, Country
```

### Step 3: Customize Content (1 min)

**Update About Me Section:**
- Keep the general structure but personalize the text
- Highlight your unique skills and achievements

**Update Projects Section:**
- Change project titles
- Update project descriptions
- Add your GitHub repository links
- Add live demo links if available

**Update Skills Section:**
- Adjust skill percentages based on your proficiency
- Add or remove skills as needed
- Keep the three categories: Frontend, Backend, Tools

### Step 4: Open in Browser (1 min)

**Option A: Direct Open**
- Simply double-click `index.html`
- Or drag it to your browser

**Option B: Local Server (Recommended)**

Windows:
```bash
cd path\to\portfolio
python -m http.server 8000
# Visit http://localhost:8000
```

Mac/Linux:
```bash
cd /path/to/portfolio
python3 -m http.server 8000
# Visit http://localhost:8000
```

Or use VS Code Live Server extension (right-click → Open with Live Server)

## 📝 Customization Checklist

- [ ] Add profile image to `assets/profile.jpg`
- [ ] Add project screenshots to `assets/`
- [ ] Update email address throughout HTML
- [ ] Update phone number
- [ ] Update GitHub profile link
- [ ] Update LinkedIn profile link
- [ ] Update location
- [ ] Customize about me text
- [ ] Update education details (if applicable)
- [ ] Update experience section
- [ ] Customize skills and proficiency levels
- [ ] Update project titles and descriptions
- [ ] Add project GitHub links
- [ ] Test all links and buttons
- [ ] Test on mobile devices

## 🎨 Quick Color Changes

Want to change the color scheme? Edit these in `css/style.css`:

```css
:root {
    --accent-primary: #00d4ff;    /* Main accent - Change this! */
    --accent-secondary: #ff6b9d;  /* Secondary accent */
    --bg-primary: #0a0e27;        /* Background */
}
```

Popular color combinations:
- **Blue**: `--accent-primary: #3b82f6;`
- **Green**: `--accent-primary: #10b981;`
- **Purple**: `--accent-primary: #8b5cf6;`
- **Red**: `--accent-primary: #ef4444;`

## 🧪 Testing Checklist

### Desktop Testing
- [ ] All links work correctly
- [ ] Animations play smoothly
- [ ] Form validation works
- [ ] Navbar is functional
- [ ] Scroll progress indicator moves

### Mobile Testing
- [ ] Hamburger menu works
- [ ] Text is readable without zooming
- [ ] Buttons are touch-friendly
- [ ] Images scale properly
- [ ] No horizontal scrolling

### Cross-Browser Testing
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge

## 📱 Preview Your Changes

### Using Live Server (Recommended)
1. Install VS Code Live Server extension
2. Right-click on `index.html`
3. Select "Open with Live Server"
4. Changes update automatically as you save

### Using Python
```bash
python -m http.server 8000
```

### Using Node.js
```bash
npx http-server
```

## 🚀 Deployment (Choose One)

### Option 1: GitHub Pages (Free, Easy)
1. Create GitHub account
2. Create new repository named `yourusername.github.io`
3. Upload portfolio files
4. Your site is live at `https://yourusername.github.io`

### Option 2: Netlify (Free, Recommended)
1. Go to [netlify.com](https://netlify.com)
2. Click "New site from Git"
3. Connect your GitHub repository
4. Done! Automatic deployments on push

### Option 3: Vercel (Free)
```bash
npm install -g vercel
vercel
```

## 🔗 Important Links to Update

**Search and replace these in `index.html`:**

1. Profile Photo Path:
   ```html
   <img src="assets/profile.jpg" alt="Poovarasan M">
   ```

2. Resume Download:
   ```html
   <a href="assets/resume.pdf" download>
   ```

3. GitHub Link:
   ```html
   <a href="https://github.com/yourusername">
   ```

4. LinkedIn Link:
   ```html
   <a href="https://linkedin.com/in/yourprofile">
   ```

5. Email:
   ```html
   <a href="mailto:your.email@example.com">
   ```

6. Phone:
   ```html
   <a href="tel:+91XXXXX">
   ```

## 🎬 Modify Animations

### Change Typing Speed
In `js/main.js`, find:
```javascript
this.typeSpeed = 100;      // Change this number
```

### Change Roles
In `js/main.js`, find:
```javascript
const roles = [
    'Full Stack Developer',    // Add your roles
    'Java Developer',
    'Web Developer',
    'Your Role Here'
];
```

### Change Number of Particles
In `js/main.js`, find:
```javascript
const particleCount = 50;  // Change this number
```

## ❓ Frequently Asked Questions

**Q: How do I add more projects?**
A: Copy the project-card div in the projects section and fill in your details.

**Q: Can I remove sections?**
A: Yes, just delete the entire section div. Don't forget to remove the nav link too.

**Q: How do I make the contact form work?**
A: Use FormSpree (formspree.io) or EmailJS (emailjs.com) for email functionality.

**Q: Can I change the fonts?**
A: Yes, modify the `@import` links in the HTML head section. Visit [Google Fonts](https://fonts.google.com).

**Q: Is this mobile friendly?**
A: Yes! Fully responsive on all devices.

**Q: How can I add a blog section?**
A: Copy any section structure, customize it, and add a nav link.

## 🆘 Troubleshooting

### Images not showing?
- Check the file path is correct: `assets/filename.jpg`
- Ensure image files are in the `assets` folder
- Check file extensions match (`.jpg`, `.png`, etc.)

### Styles not loading?
- Clear browser cache (Ctrl+Shift+R on Windows/Linux, Cmd+Shift+R on Mac)
- Check CSS file paths are correct
- Ensure no typos in file names

### Animations not working?
- Open DevTools console (F12) and check for errors
- Ensure JavaScript files are loading
- Try a different browser

### Contact form not working?
- This is a demo form. To make it functional:
  - Use FormSpree, Netlify Forms, or EmailJS
  - Or set up your own backend

## 📚 Learning Resources

- [HTML Tutorial](https://www.w3schools.com/html/)
- [CSS Tutorial](https://www.w3schools.com/css/)
- [JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)

## 💡 Pro Tips

1. **Image Optimization**: Compress images before uploading to reduce load time
2. **SEO**: Keep meta descriptions concise and relevant
3. **Testing**: Always test on mobile before deployment
4. **Backup**: Keep a backup of your original files
5. **Updates**: Update your portfolio every 3-6 months with new projects

## 🎯 Next Steps

1. ✅ Set up your portfolio
2. ✅ Deploy to the web
3. ✅ Share your portfolio link on:
   - GitHub profile
   - LinkedIn
   - Email signature
   - Resume/CV
4. ✅ Keep it updated with your latest projects

---

**Ready? Let's get started! 🚀**

If you have any questions, refer to the main [README.md](README.md) for detailed documentation.
