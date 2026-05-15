# 🐛 TROUBLESHOOTING GUIDE

Common issues and their solutions for your portfolio website.

## 🖼️ Image-Related Issues

### Problem: Images Not Loading

**Symptoms:**
- Images show broken link icon
- Alt text visible instead of images
- Console shows 404 errors

**Solutions:**

1. **Check File Paths**
   ```html
   <!-- ❌ Wrong -->
   <img src="assets/profile.jpg">
   
   <!-- ✅ Correct -->
   <img src="assets/profile.jpg" alt="Profile">
   ```

2. **Check File Exists**
   - Verify files are in `assets/` folder
   - Check exact filename spelling (case-sensitive)
   - Ensure file extensions match (.jpg, .png, etc.)

3. **Use Correct Format**
   ```
   Portfolio uses:
   - JPEG (.jpg) for photos
   - PNG (.png) for images with transparency
   - WebP (.webp) for modern browsers
   ```

4. **Check File Size**
   - Images too large? Compress them
   - Use https://squoosh.app
   - Recommended: < 500KB per image

### Problem: Images Load Slowly

**Solutions:**
1. Compress images using TinyPNG or ImageMagick
2. Use lazy loading (already implemented)
3. Convert to WebP format
4. Reduce image dimensions to display size

### Problem: Images Blurry on Mobile

**Solutions:**
1. Use higher resolution images (2x size for retina)
2. Ensure CSS has proper max-width
3. Use `srcset` for responsive images:
```html
<img src="small.jpg" 
     srcset="small.jpg 480w, large.jpg 1024w"
     alt="Profile">
```

---

## 🎨 Styling Issues

### Problem: Colors Look Different

**Symptoms:**
- Colors different than expected
- Gradient not showing

**Solutions:**
1. **Clear Browser Cache**
   - Windows: Ctrl+Shift+Delete
   - Mac: Cmd+Shift+Delete
   - Or in DevTools: Ctrl+Shift+R (Cmd+Shift+R on Mac)

2. **Check CSS File Linked**
   ```html
   <!-- In index.html head: -->
   <link rel="stylesheet" href="css/style.css">
   ```

3. **Check Browser DevTools**
   - Open DevTools (F12)
   - Go to Elements/Inspector
   - Find your element
   - Check Styles panel for your CSS

### Problem: Layout Broken on Mobile

**Solutions:**
1. **Check Viewport Meta Tag**
   ```html
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   ```

2. **Test Responsiveness**
   - Open DevTools (F12)
   - Click Device Toolbar (Ctrl+Shift+M)
   - Test different screen sizes

3. **Common Mobile Issues**
   - Text too small → increase font size
   - Buttons too small → increase padding
   - Horizontal scroll → check max-width

### Problem: Animations Not Smooth

**Solutions:**
1. **Check GPU Acceleration**
   ```css
   .element {
       transform: translateZ(0); /* Enable GPU */
       will-change: transform;
   }
   ```

2. **Reduce Animation Complexity**
   - Remove unnecessary animations
   - Use simpler keyframes
   - Reduce particle count

3. **Performance Issues**
   - Open DevTools Performance tab
   - Record animation
   - Look for red flags (long tasks)
   - Optimize problematic code

---

## 🔤 Text & Typography Issues

### Problem: Fonts Not Loading

**Symptoms:**
- Text in wrong font
- Generic sans-serif showing

**Solutions:**
1. **Check Google Fonts Link**
   ```html
   <!-- Should be in <head> -->
   <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
   ```

2. **Test Font Loading**
   - Open DevTools Network tab
   - Look for fonts.googleapis.com requests
   - Check if successful (200 status)

3. **Use Font Fallbacks**
   ```css
   body {
       font-family: 'Poppins', 'Segoe UI', sans-serif;
   }
   ```

### Problem: Text Too Small on Mobile

**Solutions:**
1. **Increase Base Font Size**
   ```css
   body {
       font-size: 16px; /* Minimum for mobile */
   }
   ```

2. **Use Responsive Typography**
   ```css
   @media (max-width: 480px) {
       h1 { font-size: 1.5rem; }
       p { font-size: 1rem; }
   }
   ```

### Problem: Text Overlapping

**Solutions:**
1. Check line-height
   ```css
   .text {
       line-height: 1.6; /* 1.6-1.8 recommended */
   }
   ```

2. Adjust letter-spacing
   ```css
   .text {
       letter-spacing: 0.5px;
   }
   ```

---

## 🎬 Animation Issues

### Problem: Typing Animation Not Working

**Symptoms:**
- Roles not rotating
- Text not appearing

**Solutions:**
1. **Check JavaScript File**
   - Verify `js/main.js` linked in HTML
   - Check console (F12) for errors

2. **Check for JavaScript Errors**
   - Open DevTools Console (F12)
   - Look for red error messages
   - Fix reported issues

3. **Verify Element IDs**
   ```html
   <!-- Should match -->
   <span id="typedText"></span>
   <!-- In JavaScript: -->
   new TypingAnimation('typedText', roles);
   ```

### Problem: Particles Not Showing

**Solutions:**
1. **Check Particles Container**
   ```html
   <div id="particles" class="particles"></div>
   ```

2. **Check CSS for Particles**
   - Verify z-index is correct
   - Check opacity not 0
   - Verify fixed positioning

3. **Performance Issue**
   - Reduce particle count in js/main.js
   - Change from 50 to 20 particles

### Problem: Scroll Animations Not Triggering

**Solutions:**
1. **Check Elements Have Data Attribute**
   ```html
   <div data-scroll-reveal>Content</div>
   ```

2. **Test Scroll Trigger**
   - Scroll slowly to section
   - Open DevTools Console
   - Look for errors

3. **Increase Intersection Threshold**
   ```javascript
   threshold: 0.2 // More lenient
   ```

---

## 📋 Form Issues

### Problem: Contact Form Not Submitting

**Symptoms:**
- Form appears to send but nothing happens
- No confirmation message

**Solutions:**
1. **Form is Demo Only**
   - Current form shows demo notification
   - To make it work: see CONTACT_FORM_SETUP.md

2. **Check Browser Console**
   - Open DevTools (F12)
   - Go to Console tab
   - Look for JavaScript errors

3. **Test Form Validation**
   - Try submitting with empty fields
   - Should show validation message

### Problem: Form Validation Not Working

**Solutions:**
1. **Check HTML5 Attributes**
   ```html
   <input type="email" required>
   <input type="text" required>
   ```

2. **Check JavaScript Validation**
   - Verify isValidEmail() function exists
   - Check browser console for errors

### Problem: Can't Submit Form

**Solutions:**
1. **Fill All Required Fields**
   - All fields must be filled
   - Email must be valid format

2. **Check for JavaScript Errors**
   - Open DevTools Console
   - Look for error messages
   - Fix any errors found

3. **Try Different Browser**
   - Some browsers have stricter validation
   - Test in Chrome, Firefox, Safari

---

## 🔗 Navigation Issues

### Problem: Links Not Working

**Solutions:**
1. **Check Href Attributes**
   ```html
   <!-- ❌ Wrong -->
   <a href="about">About</a>
   
   <!-- ✅ Correct -->
   <a href="#about">About</a>
   ```

2. **Verify Section IDs**
   ```html
   <section id="about">...</section>
   ```

3. **Check for Typos**
   - Section IDs must match exactly
   - Case-sensitive

### Problem: Mobile Menu Not Opening

**Solutions:**
1. **Check Button Is Visible**
   - Open DevTools
   - Check mobile menu toggle is on screen

2. **Check JavaScript Error**
   - Open Console
   - Look for errors
   - Fix reported issues

3. **Test Mobile View**
   - Open DevTools Device Toolbar (Ctrl+Shift+M)
   - Click hamburger menu
   - Should open/close

### Problem: Active Nav Link Not Highlighting

**Solutions:**
1. **Check JavaScript is Running**
   - Open Console
   - No errors should appear

2. **Verify CSS Classes**
   ```css
   .nav-link.active {
       color: var(--accent-primary);
   }
   ```

3. **Test Manual**
   - Scroll to section
   - Check if nav link gets "active" class
   - In DevTools Elements tab

---

## 🌐 Browser Compatibility Issues

### Problem: Works in Chrome but Not Other Browsers

**Solutions:**

**Check CSS Prefixes:**
```css
/* Add prefixes for older browsers */
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
```

**Check JavaScript Support:**
```javascript
// Use feature detection
if ('IntersectionObserver' in window) {
    // Modern browser code
} else {
    // Fallback code
}
```

**Use Autoprefixer:**
```bash
npm install autoprefixer
npx autoprefixer css/style.css
```

---

## ⚡ Performance Issues

### Problem: Website Loads Slowly

**Solutions:**
1. **Check Network Tab**
   - Open DevTools Network tab
   - Reload page
   - Look for slow requests
   - Typically images are slowest

2. **Optimize Images**
   - Resize to display dimensions
   - Compress with TinyPNG
   - Use WebP format

3. **Minify Code**
   - Remove unnecessary CSS/JS
   - Use minification tools
   - Remove console.log() statements

4. **Use Performance Tool**
   - Open DevTools Lighthouse
   - Click "Analyze page load"
   - Follow recommendations

### Problem: Page Jumps When Content Loads

**Solutions:**
1. **Set Image Dimensions**
   ```html
   <img src="image.jpg" width="300" height="300" alt="">
   ```

2. **Use CSS Aspect Ratio**
   ```css
   img {
       aspect-ratio: 1;
       width: 100%;
   }
   ```

3. **Add Loading Skeleton**
   - Show placeholder during load
   - Smoother user experience

---

## 🔒 Security Issues

### Problem: Content Security Policy Error

**Symptoms:**
- Content blocked message in console
- Styles/scripts not loading

**Solutions:**
1. **Add Meta Tag**
   ```html
   <meta http-equiv="Content-Security-Policy" 
         content="default-src 'self'; 
                  script-src 'self' 'unsafe-inline'; 
                  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com">
   ```

2. **Or Set Server Headers** (if using server)
   ```
   Content-Security-Policy: default-src 'self'
   ```

### Problem: Mixed Content Warning

**Solutions:**
1. Use HTTPS for external resources
   ```html
   <!-- ❌ Wrong -->
   <link href="http://fonts.googleapis.com/...">
   
   <!-- ✅ Correct -->
   <link href="https://fonts.googleapis.com/...">
   ```

---

## 🆘 Getting Help

### Debug Steps:
1. **Open DevTools** (F12)
2. **Check Console** for red errors
3. **Check Network** tab for failed requests
4. **Check Elements** tab for HTML structure
5. **Check Styles** for CSS issues

### Common Error Messages:

| Error | Cause | Solution |
|-------|-------|----------|
| 404 Not Found | File missing | Check file path and name |
| CORS error | Cross-origin issue | Check origins match |
| Uncaught TypeError | JavaScript error | Fix JavaScript code |
| Failed to fetch | Network issue | Check URL and connection |

### Getting Help Online:
- **Stack Overflow** - Ask specific questions
- **GitHub Issues** - Report bugs
- **MDN Docs** - Check documentation
- **Dev.to** - Search community posts

---

## 📞 Contact Support

If you can't find solution:
1. Check [README.md](README.md)
2. Check [SETUP.md](SETUP.md)
3. Check this troubleshooting guide
4. Search Stack Overflow
5. Ask in web development communities

---

**Happy fixing! 🔧**

Remember: Most issues have simple solutions. Use DevTools to debug!
