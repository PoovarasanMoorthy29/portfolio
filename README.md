# 🚀 Poovarasan M - Professional Portfolio Website

A modern, responsive, and fully-featured portfolio website for Poovarasan M - Full Stack Developer, Java Developer, and Web Developer.

## ✨ Features

### 🎨 Design
- **Dark Mode Premium Design** - Modern glassmorphism and gradient effects
- **Fully Responsive** - Perfect on mobile, tablet, and desktop
- **Smooth Animations** - Typing animation, scroll reveals, hover effects
- **Professional Color Palette** - Cyan and pink accent colors with premium gradients

### 🎯 Sections
1. **Hero Section** - Animated profile, role switcher, CTA buttons
2. **About Me** - Professional introduction with key highlights
3. **Education** - Timeline of academic achievements
4. **Experience** - Graduate Trainee position at Zoho
5. **Skills** - Animated progress bars for all technologies
6. **Projects** - Showcase of completed projects with GitHub links
7. **Contact** - Contact form with social media links
8. **Sticky Navigation** - Active section highlighting

### 🎬 Interactive Features
- **Typing Animation** - Rotating role titles with typewriter effect
- **Particle Background** - Animated particles floating across screen
- **Scroll Progress Indicator** - Visual progress bar at top of page
- **Mobile Hamburger Menu** - Touch-friendly navigation
- **Smooth Scroll Behavior** - Seamless section transitions
- **Form Validation** - Client-side form validation
- **Ripple Effects** - Material design inspired button effects
- **Parallax Scrolling** - Depth effect during scroll
- **Lazy Loading** - Optimized image loading

## 📁 Project Structure

```
portfolio/
├── index.html                 # Main HTML file
├── css/
│   ├── style.css             # Main stylesheet
│   └── animations.css        # Animation definitions
├── js/
│   ├── main.js               # Core functionality
│   └── animations.js         # Advanced animations
├── assets/
│   ├── profile.jpg           # Profile image (300x300)
│   ├── project1.jpg          # Brain Stroke Project
│   ├── project2.jpg          # Portfolio Website Project
│   ├── project3.jpg          # Student Management Project
│   └── resume.pdf            # Resume file
└── README.md                 # This file
```

## 🚀 Quick Start

### 1. Clone or Download
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

### 2. Add Your Images
Place your images in the `assets/` folder:
- `profile.jpg` - Your professional photo (300x300px recommended)
- `project1.jpg` - Brain Stroke Project screenshot
- `project2.jpg` - Portfolio Website screenshot
- `project3.jpg` - Student Management System screenshot
- `resume.pdf` - Your resume file

### 3. Update Personal Information
Edit `index.html` with your information:
- Name, title, and introduction
- Social media links (GitHub, LinkedIn, Email)
- Phone number and location
- Project details and links

### 4. Open in Browser
Simply open `index.html` in your web browser or use a local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js
npx http-server

# Using VS Code Live Server
# Install and right-click on index.html → Open with Live Server
```

Visit `http://localhost:8000` in your browser.

## 📝 Customization Guide

### Update Your Information

#### Profile Section (Hero)
```html
<h1 class="hero-name">Your Name</h1>
<a href="https://your-github.com" target="_blank">
    <i class="fab fa-github"></i>
</a>
```

#### Social Media Links
Find and update these links:
```html
<a href="https://github.com/yourusername" target="_blank">GitHub</a>
<a href="https://linkedin.com/in/yourprofile" target="_blank">LinkedIn</a>
<a href="mailto:your.email@example.com">Email</a>
<a href="tel:+91XXXXX">Phone</a>
```

#### Resume Download
Replace the PDF link:
```html
<a href="assets/your-resume.pdf" download>Download Resume</a>
```

#### Contact Information
Update in the Contact section:
```html
<a href="mailto:your.email@example.com">your.email@example.com</a>
<a href="tel:+91XXXXX">+91 XXXXX XXXXX</a>
<p>Your City, State, Country</p>
```

#### Projects
Update project details in the Projects section:
```html
<h3 class="project-title">Your Project Title</h3>
<p class="project-description">Your project description</p>
<a href="https://github.com/yourusername/project" target="_blank">View on GitHub</a>
```

### Customize Colors

Edit CSS variables in `css/style.css`:

```css
:root {
    --accent-primary: #00d4ff;    /* Cyan */
    --accent-secondary: #ff6b9d;  /* Pink */
    --accent-tertiary: #ffa500;   /* Orange */
    --bg-primary: #0a0e27;        /* Dark background */
    --text-primary: #ffffff;      /* Text color */
}
```

### Modify Animations

#### Typing Speed
In `js/main.js`:
```javascript
this.typeSpeed = 100;      // Speed of typing (ms)
this.deleteSpeed = 50;     // Speed of deleting (ms)
this.delayBetweenRoles = 2000; // Delay before deleting (ms)
```

#### Add/Remove Roles
```javascript
const roles = [
    'Full Stack Developer',
    'Java Developer',
    'Web Developer',
    'Problem Solver'
];
```

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px to 1023px
- **Mobile**: Below 768px

The portfolio is fully responsive and works seamlessly on all devices.

## 🔍 SEO Optimization

The website includes:
- Meta tags for description and keywords
- Open Graph tags for social sharing
- Semantic HTML5 structure
- Fast loading times
- Mobile-friendly design

### Add More Meta Tags
Edit in `index.html`:
```html
<meta name="description" content="Your description">
<meta name="keywords" content="your, keywords">
<meta property="og:image" content="your-image-url">
```

## ⚡ Performance Optimization

- **Lazy Loading** - Images load only when needed
- **Optimized Images** - Use compressed images (JPEG/WebP)
- **CSS Animations** - GPU-accelerated animations
- **Minimal JavaScript** - Only essential features
- **No External Dependencies** - Pure HTML, CSS, JS

### Image Optimization Tips
```bash
# Compress images using ImageMagick
convert input.jpg -quality 85 output.jpg

# Or use online tools like:
# - TinyPNG (tinypng.com)
# - Squoosh (squoosh.app)
```

## 🌐 Deployment

### Deploy to GitHub Pages

1. Create a GitHub repository
2. Push your files to the repository
3. Go to Settings → Pages
4. Select main branch as source
5. Your site will be available at `https://yourusername.github.io/portfolio`

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
Drag and drop your portfolio folder to [netlify.com](https://netlify.com)

## 🔗 External Resources

- **Icons**: [Font Awesome](https://fontawesome.com)
- **Fonts**: [Google Fonts](https://fonts.google.com)
- **Color Tool**: [Coolors](https://coolors.co)
- **Image Compression**: [Squoosh](https://squoosh.app)

## 📱 Browser Support

- Chrome (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)
- Mobile browsers

## 🛠️ Technical Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with animations
- **JavaScript (Vanilla)** - No frameworks required
- **Font Awesome** - Icon library
- **Google Fonts** - Typography

## 📚 JavaScript Features

### Main Functions Available

```javascript
// Show notification
showNotification('Your message', 'success');

// Typing animation
new TypingAnimation('elementId', ['role1', 'role2']);

// Parallax effect
new ParallaxScroll();

// Smooth reveal
new SmoothReveal();

// And many more...
```

## 🐛 Troubleshooting

### Images Not Loading
- Ensure images are in the `assets/` folder
- Check image paths in HTML
- Use correct image formats (JPEG, PNG, WebP)

### Animations Not Working
- Check browser console for errors
- Ensure CSS files are linked properly
- Clear browser cache (Ctrl+Shift+R)
- Check if JavaScript is enabled

### Responsive Issues
- Open DevTools (F12)
- Use Device Toolbar to test different sizes
- Check CSS media queries

### Form Not Working
- The contact form is for demonstration
- To make it work, add backend service or use:
  - Formspree (formspree.io)
  - Netlify Forms
  - EmailJS

## 📧 Integration Services

### Add Email Functionality

#### Using Formspree
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
    <!-- form fields -->
</form>
```

#### Using EmailJS
```javascript
emailjs.init('YOUR_SERVICE_ID');
document.getElementById('contactForm').addEventListener('submit', function(e) {
    emailjs.sendForm('service_id', 'template_id', this);
});
```

## 🎓 Learning Resources

- [MDN Web Docs](https://developer.mozilla.org)
- [CSS-Tricks](https://css-tricks.com)
- [JavaScript.info](https://javascript.info)
- [Web.dev](https://web.dev)

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

Created for **Poovarasan M** - Full Stack Developer

## 🤝 Contributing

Feel free to fork this project and customize it for your needs!

## 📞 Support

For issues or questions, please create an issue in the repository.

---

**Made with ❤️ for developers** | **Portfolio Template v1.0**

**Last Updated**: May 2026
