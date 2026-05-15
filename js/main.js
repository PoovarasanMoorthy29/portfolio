/* ============================================
   POOVARASAN'S PORTFOLIO - MAIN SCRIPT
   ============================================ */

// ============ TYPING ANIMATION ============

/**
 * Implements typing animation for role titles
 * Creates a typewriter effect with multiple roles cycling through
 */
class TypingAnimation {
    constructor(elementId, roles) {
        this.element = document.getElementById(elementId);
        this.roles = roles;
        this.currentRoleIndex = 0;
        this.isDeleting = false;
        this.text = '';
        this.typeSpeed = 100;
        this.deleteSpeed = 50;
        this.delayBetweenRoles = 2000;
        
        this.type();
    }
    
    /**
     * Main typing method - handles both typing and deleting text
     */
    type() {
        const currentRole = this.roles[this.currentRoleIndex];
        
        if (this.isDeleting) {
            // Delete character
            this.text = currentRole.substring(0, this.text.length - 1);
        } else {
            // Add character
            this.text = currentRole.substring(0, this.text.length + 1);
        }
        
        // Update the DOM
        this.element.textContent = this.text;
        
        // Determine next action
        let nextDelay = this.typeSpeed;
        
        if (!this.isDeleting && this.text === currentRole) {
            // Word is complete, prepare to delete
            nextDelay = this.delayBetweenRoles;
            this.isDeleting = true;
        } else if (this.isDeleting && this.text === '') {
            // Word is deleted, move to next role
            this.isDeleting = false;
            this.currentRoleIndex = (this.currentRoleIndex + 1) % this.roles.length;
            nextDelay = 500;
        }
        
        setTimeout(() => this.type(), nextDelay);
    }
}

// Initialize typing animation
document.addEventListener('DOMContentLoaded', () => {
    const roles = [
        'Full Stack Developer',
        'Java Developer',
        'Web Developer',
        'Problem Solver'
    ];
    
    new TypingAnimation('typedText', roles);
});

// ============ MOBILE MENU TOGGLE ============

/**
 * Handles mobile menu toggle functionality
 * Opens/closes navigation menu on mobile devices
 */
function setupMobileMenu() {
    const menuToggle = document.getElementById('mobileMenuToggle');
    const navLinks = document.getElementById('navLinks');
    
    if (!menuToggle) return;
    
    // Toggle menu visibility
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        // Animate hamburger menu
        const spans = menuToggle.querySelectorAll('span');
        if (navLinks.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(10px, 10px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -7px)';
        } else {
            spans[0].style.transform = 'rotate(0) translate(0)';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'rotate(0) translate(0)';
        }
    });
    
    // Close menu when a link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const spans = menuToggle.querySelectorAll('span');
            spans[0].style.transform = 'rotate(0) translate(0)';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'rotate(0) translate(0)';
        });
    });
}

// ============ ACTIVE NAV LINK HIGHLIGHTING ============

/**
 * Highlights the active navigation link based on current scroll position
 * Updates active state as user scrolls through sections
 */
function setupActiveNavLink() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    function updateActiveLink() {
        let current = '';
        
        // Find which section is currently in view
        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        // Update active state
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-section') === current) {
                link.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveLink);
}

// ============ SMOOTH SCROLL BEHAVIOR ============

/**
 * Enables smooth scrolling for navigation links
 * Also handles scroll padding for sticky navbar
 */
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ============ SCROLL PROGRESS INDICATOR ============

/**
 * Updates scroll progress bar at the top of the page
 * Shows how far down the page the user has scrolled
 */
function setupScrollProgress() {
    const scrollProgress = document.querySelector('.scroll-progress');
    
    if (!scrollProgress) return;
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        
        scrollProgress.style.width = scrollPercent + '%';
    });
}

// ============ PARTICLE BACKGROUND ============

/**
 * Creates animated particle background effect
 * Generates random particles that float across the screen
 */
function setupParticleBackground() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random positioning
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        
        // Random animation duration
        const duration = Math.random() * 20 + 10;
        particle.style.animation = `float ${duration}s linear infinite`;
        particle.style.animationDelay = Math.random() * 5 + 's';
        
        particlesContainer.appendChild(particle);
    }
}

// ============ FORM SUBMISSION ============

/**
 * Handles contact form submission
 * Validates form data and shows success/error messages
 */
function setupContactForm() {
    const form = document.getElementById('contactForm');
    
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Validate form
        if (!name || !email || !subject || !message) {
            showNotification('Please fill in all fields', 'error');
            return;
        }
        
        // Validate email
        if (!isValidEmail(email)) {
            showNotification('Please enter a valid email address', 'error');
            return;
        }
        
        // Simulate form submission
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        // Simulate delay
        setTimeout(() => {
            showNotification('Message sent successfully! I will get back to you soon.', 'success');
            form.reset();
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 1500);
    });
}

/**
 * Validates email format
 * @param {string} email - Email address to validate
 * @returns {boolean} - True if valid email format
 */
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Shows notification toast message
 * @param {string} message - Message to display
 * @param {string} type - Type of notification ('success' or 'error')
 */
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        background: ${type === 'success' ? '#00d4ff' : '#ff6b9d'};
        color: #0a0e27;
        border-radius: 0.5rem;
        font-weight: 600;
        z-index: 1000;
        animation: slideDown 0.3s ease-out;
        max-width: 300px;
    `;
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'fadeUp 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ============ INTERSECTION OBSERVER - SCROLL REVEAL ============

/**
 * Uses Intersection Observer API to reveal elements on scroll
 * Adds animation classes when elements come into view
 */
function setupScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add reveal class to trigger animation
                entry.target.classList.add('animate-in');
                
                // Optionally unobserve to prevent re-animation
                // observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });
    
    // Observe all elements with reveal-on-scroll class
    document.querySelectorAll('[data-scroll-reveal]').forEach(el => {
        observer.observe(el);
    });
}

// ============ SKILL PROGRESS BARS ============

/**
 * Animates skill progress bars when they come into view
 */
function setupSkillProgressBars() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                const progressBars = entry.target.querySelectorAll('.progress-fill');
                progressBars.forEach(bar => {
                    const width = bar.style.width;
                    bar.style.width = '0';
                    
                    setTimeout(() => {
                        bar.style.transition = 'width 1.5s ease-out';
                        bar.style.width = width;
                    }, 100);
                });
                
                entry.target.classList.add('animated');
            }
        });
    }, {
        threshold: 0.1
    });
    
    // Observe skills section
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
        observer.observe(skillsSection);
    }
}

// ============ WAVE ANIMATION FOR GREETING ============

/**
 * Triggers wave animation on greeting emoji
 */
function setupWaveAnimation() {
    const wave = document.querySelector('.wave');
    
    if (!wave) return;
    
    // Trigger wave on page load
    setTimeout(() => {
        wave.style.animation = 'none';
        setTimeout(() => {
            wave.style.animation = 'wave 0.6s ease-in-out';
        }, 10);
    }, 500);
    
    // Trigger wave on hover
    wave.addEventListener('mouseenter', () => {
        wave.style.animation = 'none';
        setTimeout(() => {
            wave.style.animation = 'wave 0.6s ease-in-out';
        }, 10);
    });
}

// ============ DARK MODE (Persistent) ============

/**
 * Manages dark mode with local storage persistence
 * Note: Portfolio is designed in dark mode by default
 */
function setupDarkMode() {
    // Dark mode is default - can add toggle functionality here if needed
    document.body.classList.add('dark-mode');
}

// ============ KEYBOARD NAVIGATION ============

/**
 * Enables keyboard navigation through sections
 */
function setupKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            e.preventDefault();
            
            const sections = Array.from(document.querySelectorAll('section'));
            const currentSection = sections.findIndex(s => {
                return s.getBoundingClientRect().top >= -window.innerHeight / 2 &&
                       s.getBoundingClientRect().top < window.innerHeight / 2;
            });
            
            if (currentSection !== -1) {
                const nextSection = e.key === 'ArrowDown' ? currentSection + 1 : currentSection - 1;
                
                if (sections[nextSection]) {
                    sections[nextSection].scrollIntoView({ behavior: 'smooth' });
                }
            }
        }
    });
}

// ============ HEADER SHRINK ON SCROLL ============

/**
 * Makes navbar more compact when user scrolls down
 */
function setupHeaderShrink() {
    const navbar = document.querySelector('.navbar');
    
    if (!navbar) return;
    
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        
        if (scrollTop > 50) {
            navbar.style.padding = '0.5rem 2rem';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 212, 255, 0.1)';
        } else {
            navbar.style.padding = '1rem 2rem';
            navbar.style.boxShadow = 'none';
        }
        
        lastScrollTop = scrollTop;
    });
}

// ============ DOCUMENT READY ============

/**
 * Initialize all features when DOM is loaded
 */
document.addEventListener('DOMContentLoaded', () => {
    setupMobileMenu();
    setupActiveNavLink();
    setupSmoothScroll();
    setupScrollProgress();
    setupParticleBackground();
    setupContactForm();
    setupScrollReveal();
    setupSkillProgressBars();
    setupWaveAnimation();
    setupDarkMode();
    setupKeyboardNavigation();
    setupHeaderShrink();
    
    console.log('✨ Portfolio loaded successfully!');
});

// ============ PAGE VISIBILITY HANDLER ============

/**
 * Pauses animations when page is not visible for performance
 */
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Pause animations
        document.body.style.animationPlayState = 'paused';
    } else {
        // Resume animations
        document.body.style.animationPlayState = 'running';
    }
});

// ============ EXPORT FOR MODULAR USE ============

// Make functions available globally if needed
window.showNotification = showNotification;
window.TypingAnimation = TypingAnimation;
