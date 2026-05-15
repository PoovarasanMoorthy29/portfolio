# 📧 Contact Form Integration Guide

This guide shows how to make your contact form fully functional.

## Quick Options (No Backend Required)

### Option 1: FormSpree (Recommended for Beginners)

1. Go to https://formspree.io
2. Sign up with your email
3. Create a new form project
4. Copy your form ID
5. Update your form in `index.html`:

```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
    <div class="form-group">
        <input type="text" name="name" placeholder="Your Name" required>
        <div class="form-line"></div>
    </div>
    
    <div class="form-group">
        <input type="email" name="email" placeholder="Your Email" required>
        <div class="form-line"></div>
    </div>
    
    <div class="form-group">
        <input type="text" name="subject" placeholder="Subject" required>
        <div class="form-line"></div>
    </div>
    
    <div class="form-group">
        <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
        <div class="form-line"></div>
    </div>
    
    <button type="submit" class="btn btn-primary">
        <span>Send Message</span>
        <i class="fas fa-paper-plane"></i>
    </button>
</form>
```

### Option 2: Netlify Forms (Best for Netlify Users)

1. Deploy to Netlify first
2. Add `netlify` attribute to your form:

```html
<form name="contact" method="POST" netlify>
    <div class="form-group">
        <input type="text" name="name" placeholder="Your Name" required>
        <div class="form-line"></div>
    </div>
    
    <div class="form-group">
        <input type="email" name="email" placeholder="Your Email" required>
        <div class="form-line"></div>
    </div>
    
    <div class="form-group">
        <input type="text" name="subject" placeholder="Subject" required>
        <div class="form-line"></div>
    </div>
    
    <div class="form-group">
        <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
        <div class="form-line"></div>
    </div>
    
    <button type="submit" class="btn btn-primary">
        <span>Send Message</span>
        <i class="fas fa-paper-plane"></i>
    </button>
</form>
```

### Option 3: EmailJS (Client-Side Email)

1. Go to https://www.emailjs.com
2. Sign up and create a service
3. Create an email template
4. Add to your HTML:

```html
<!-- In head -->
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/index.min.js"></script>

<!-- Before closing body -->
<script>
    emailjs.init('YOUR_PUBLIC_KEY');
    
    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        emailjs.sendForm('SERVICE_ID', 'TEMPLATE_ID', this)
            .then(function() {
                showNotification('Message sent successfully!', 'success');
                document.getElementById('contactForm').reset();
            }, function(error) {
                showNotification('Failed to send message', 'error');
            });
    });
</script>
```

## Advanced Options (With Backend)

### Option 4: Node.js + Express

```javascript
// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your-email@gmail.com',
        pass: 'your-app-password'
    }
});

app.post('/send-email', async (req, res) => {
    const { name, email, subject, message } = req.body;
    
    try {
        await transporter.sendMail({
            from: email,
            to: 'your-email@gmail.com',
            subject: `New contact form message: ${subject}`,
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Subject:</strong> ${subject}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `
        });
        
        res.json({ success: true });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

app.listen(3000, () => console.log('Server running on port 3000'));
```

### Option 5: Python + Flask

```python
# app.py
from flask import Flask, request, jsonify
from flask_cors import CORS
import smtplib
from email.mime.text import MIMEText

app = Flask(__name__)
CORS(app)

@app.route('/send-email', methods=['POST'])
def send_email():
    data = request.json
    name = data.get('name')
    email = data.get('email')
    subject = data.get('subject')
    message = data.get('message')
    
    try:
        # Gmail SMTP
        server = smtplib.SMTP('smtp.gmail.com', 587)
        server.starttls()
        server.login('your-email@gmail.com', 'your-app-password')
        
        msg = MIMEText(f'''
            Name: {name}
            Email: {email}
            
            {message}
        ''')
        msg['Subject'] = f'New contact form: {subject}'
        msg['From'] = email
        msg['To'] = 'your-email@gmail.com'
        
        server.sendmail(email, 'your-email@gmail.com', msg.as_string())
        server.quit()
        
        return jsonify({'success': True})
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
```

## Update JavaScript for Backend

```javascript
// In js/main.js, replace the form submission handler:

function setupContactForm() {
    const form = document.getElementById('contactForm');
    
    if (!form) return;
    
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };
        
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        try {
            const response = await fetch('/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            
            if (response.ok) {
                showNotification('Message sent successfully!', 'success');
                form.reset();
            } else {
                showNotification('Failed to send message', 'error');
            }
        } catch (error) {
            showNotification('Error: ' + error.message, 'error');
        } finally {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }
    });
}
```

## Environment Variables

### For Local Development (.env)

```
GMAIL_EMAIL=your-email@gmail.com
GMAIL_PASSWORD=your-app-password
CONTACT_EMAIL=recipient@example.com
```

### Load Environment Variables

```javascript
// Using dotenv package
require('dotenv').config();
const email = process.env.GMAIL_EMAIL;
```

## Gmail App Password Setup

1. Enable 2-Factor Authentication on your Google account
2. Go to https://myaccount.google.com/apppasswords
3. Select "Mail" and "Windows Computer" (or your OS)
4. Generate a 16-character password
5. Use this password in your code instead of your actual password

**⚠️ Never share your app password or commit it to version control!**

## Deployment Options for Backend

### Heroku (Discontinued - Use alternatives)
- ✅ Render (https://render.com)
- ✅ Railway (https://railway.app)
- ✅ Fly.io (https://fly.io)
- ✅ PythonAnywhere (for Python)
- ✅ AWS Lambda

### Free Tier Options
- **Render.com** - Free tier available
- **Railway.app** - Free credits
- **Replit** (https://replit.com) - Free hosting
- **Glitch** (https://glitch.com) - Free hosting

## Testing Your Form

### Test with cURL
```bash
curl -X POST http://localhost:3000/send-email \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "subject": "Test",
    "message": "This is a test"
  }'
```

### Test with Postman
1. Download [Postman](https://postman.com)
2. Create POST request to your endpoint
3. Add JSON body with form data
4. Send and check response

## Troubleshooting

### Email not received
- Check spam folder
- Verify email is correct
- Check service credentials
- Look at error logs

### CORS Errors
- Add CORS headers to your server
- Use CORS proxy if needed
- Check that origins match

### Form not submitting
- Check browser console for errors
- Verify form ID matches JavaScript
- Check form action URL
- Test with simpler form

## Security Considerations

1. **Rate Limiting** - Prevent spam
```javascript
const rateLimit = require('express-rate-limit');
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 5 // 5 requests per window
});
app.post('/send-email', limiter, (req, res) => { ... });
```

2. **Input Validation** - Sanitize input
```javascript
const validator = require('email-validator');
if (!validator.validate(email)) {
    return res.status(400).json({ error: 'Invalid email' });
}
```

3. **HTTPS Only** - Always use HTTPS in production

4. **Environment Variables** - Never hardcode credentials

## Resources

- **Formspree Docs**: https://formspree.io/forms
- **Netlify Forms**: https://docs.netlify.com/forms/setup/
- **EmailJS Docs**: https://www.emailjs.com/docs/
- **Nodemailer**: https://nodemailer.com/
- **Flask-Mail**: https://pythonhosted.org/Flask-Mail/

---

**Ready to get emails from your portfolio? 🚀**

Choose the option that works best for your needs and get started!
