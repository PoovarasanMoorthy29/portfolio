/* ============================================
   ADVANCED ANIMATIONS SCRIPT
   ============================================ */

// ============ PARALLAX SCROLL EFFECT ============

/**
 * Creates parallax scrolling effect for background elements
 * Background layers move at different speeds during scroll
 */
class ParallaxScroll {
    constructor() {
        this.elements = document.querySelectorAll('[data-parallax]');
        this.init();
    }
    
    init() {
        if (this.elements.length === 0) return;
        
        window.addEventListener('scroll', () => this.update());
    }
    
    update() {
        const scrollY = window.scrollY;
        
        this.elements.forEach(element => {
            const speed = element.getAttribute('data-parallax') || 0.5;
            element.style.transform = `translateY(${scrollY * speed}px)`;
        });
    }
}

// ============ SMOOTH REVEAL ANIMATION ============

/**
 * Animates elements as they come into viewport
 * Creates smooth reveal effect with stagger timing
 */
class SmoothReveal {
    constructor(selector = '[data-reveal]') {
        this.selector = selector;
        this.elements = document.querySelectorAll(selector);
        this.init();
    }
    
    init() {
        if (this.elements.length === 0) return;
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('revealed');
                    }, index * 100);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        this.elements.forEach(el => {
            el.classList.add('to-reveal');
            observer.observe(el);
        });
    }
}

// ============ MOUSE FOLLOW EFFECT ============

/**
 * Creates cursor follow effect for specific elements
 * Useful for interactive backgrounds and decorative elements
 */
class MouseFollowEffect {
    constructor(elementSelector) {
        this.elements = document.querySelectorAll(elementSelector);
        this.mouseX = 0;
        this.mouseY = 0;
        this.init();
    }
    
    init() {
        if (this.elements.length === 0) return;
        
        document.addEventListener('mousemove', (e) => {
            this.mouseX = e.clientX;
            this.mouseY = e.clientY;
            this.update();
        });
    }
    
    update() {
        this.elements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const elementCenterX = rect.left + rect.width / 2;
            const elementCenterY = rect.top + rect.height / 2;
            
            const distX = (this.mouseX - elementCenterX) * 0.1;
            const distY = (this.mouseY - elementCenterY) * 0.1;
            
            element.style.transform = `translate(${distX}px, ${distY}px)`;
        });
    }
}

// ============ STAGGERED TEXT ANIMATION ============

/**
 * Animates text by individual words or characters
 * Creates a wave-like typing effect
 */
class StaggeredTextAnimation {
    constructor(elementSelector) {
        this.elements = document.querySelectorAll(elementSelector);
        this.init();
    }
    
    init() {
        this.elements.forEach(element => {
            const text = element.textContent;
            const words = text.split(' ');
            
            // Clear original text
            element.innerHTML = '';
            
            // Create spans for each word
            words.forEach((word, index) => {
                const span = document.createElement('span');
                span.className = 'word-stagger';
                span.textContent = word + ' ';
                span.style.animationDelay = `${index * 0.1}s`;
                element.appendChild(span);
            });
        });
    }
}

// ============ SCROLL TRIGGERED COUNTER ============

/**
 * Animates number counters when section comes into view
 * Useful for statistics and metrics
 */
class ScrollCounter {
    constructor(elementSelector) {
        this.elements = document.querySelectorAll(elementSelector);
        this.init();
    }
    
    init() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                    this.animateCounter(entry.target);
                    entry.target.classList.add('counted');
                }
            });
        }, {
            threshold: 0.5
        });
        
        this.elements.forEach(el => observer.observe(el));
    }
    
    animateCounter(element) {
        const target = parseInt(element.getAttribute('data-count'));
        const duration = 2000; // 2 seconds
        const startTime = Date.now();
        
        const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            const current = Math.floor(target * progress);
            element.textContent = current;
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                element.textContent = target;
            }
        };
        
        animate();
    }
}

// ============ GLASSMORPHISM EFFECT ============

/**
 * Enhances glassmorphism cards with depth effect
 * Adds subtle shadows and border gradients
 */
class GlassmorphismEffect {
    constructor(elementSelector = '[data-glass]') {
        this.elements = document.querySelectorAll(elementSelector);
        this.init();
    }
    
    init() {
        this.elements.forEach(element => {
            element.addEventListener('mouseenter', (e) => this.onMouseEnter(e));
            element.addEventListener('mousemove', (e) => this.onMouseMove(e));
            element.addEventListener('mouseleave', (e) => this.onMouseLeave(e));
        });
    }
    
    onMouseEnter(e) {
        e.target.style.transition = 'all 0.3s ease-out';
    }
    
    onMouseMove(e) {
        const element = e.target;
        const rect = element.getBoundingClientRect();
        
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        
        const rotateX = (y - 0.5) * 10;
        const rotateY = (x - 0.5) * 10;
        
        element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    }
    
    onMouseLeave(e) {
        e.target.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    }
}

// ============ GRADIENT ANIMATION ============

/**
 * Creates animated gradient backgrounds
 * Useful for dynamic, colorful sections
 */
class GradientAnimation {
    constructor(elementSelector = '[data-gradient]', duration = 15) {
        this.elements = document.querySelectorAll(elementSelector);
        this.duration = duration;
        this.init();
    }
    
    init() {
        this.elements.forEach(element => {
            const gradients = [
                'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
            ];
            
            let currentGradient = 0;
            
            setInterval(() => {
                element.style.background = gradients[currentGradient];
                element.style.transition = `background ${this.duration}s ease-in-out`;
                currentGradient = (currentGradient + 1) % gradients.length;
            }, this.duration * 1000);
        });
    }
}

// ============ LAZY LOADING ============

/**
 * Implements lazy loading for images
 * Loads images only when they come into viewport
 */
class LazyLoadImages {
    constructor() {
        this.init();
    }
    
    init() {
        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.add('loaded');
                        observer.unobserve(img);
                    }
                });
            });
            
            document.querySelectorAll('img[data-src]').forEach(img => {
                observer.observe(img);
            });
        }
    }
}

// ============ BUTTON RIPPLE EFFECT ============

/**
 * Creates ripple effect on button click
 * Material Design inspired effect
 */
class RippleEffect {
    constructor(buttonSelector = '.btn') {
        this.buttons = document.querySelectorAll(buttonSelector);
        this.init();
    }
    
    init() {
        this.buttons.forEach(button => {
            button.addEventListener('click', (e) => this.createRipple(e));
        });
    }
    
    createRipple(e) {
        const button = e.currentTarget;
        const rect = button.getBoundingClientRect();
        
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const ripple = document.createElement('span');
        ripple.style.cssText = `
            position: absolute;
            left: ${x}px;
            top: ${y}px;
            width: 10px;
            height: 10px;
            background: rgba(255, 255, 255, 0.6);
            border-radius: 50%;
            transform: scale(1);
            pointer-events: none;
            animation: ripple 0.6s ease-out;
        `;
        
        button.style.position = 'relative';
        button.style.overflow = 'hidden';
        button.appendChild(ripple);
        
        // Remove ripple after animation
        setTimeout(() => ripple.remove(), 600);
    }
}

// ============ SCROLL SNAP ============

/**
 * Implements scroll snap behavior for sections
 * Ensures sections snap into full view when scrolling
 */
class ScrollSnap {
    constructor(sectionSelector = 'section') {
        this.sections = document.querySelectorAll(sectionSelector);
        this.init();
    }
    
    init() {
        let isScrolling = false;
        let lastScrollTime = 0;
        
        window.addEventListener('wheel', (e) => {
            if (isScrolling || Date.now() - lastScrollTime < 500) return;
            
            isScrolling = true;
            lastScrollTime = Date.now();
            
            const scrollDown = e.deltaY > 0;
            const currentSection = this.getCurrentSection();
            const nextSection = scrollDown ? 
                currentSection + 1 : 
                Math.max(0, currentSection - 1);
            
            if (this.sections[nextSection]) {
                this.sections[nextSection].scrollIntoView({ behavior: 'smooth' });
            }
            
            setTimeout(() => {
                isScrolling = false;
            }, 500);
        }, { passive: true });
    }
    
    getCurrentSection() {
        const scrollPosition = window.scrollY + window.innerHeight / 2;
        
        for (let i = 0; i < this.sections.length; i++) {
            const section = this.sections[i];
            if (section.offsetTop + section.offsetHeight > scrollPosition) {
                return i;
            }
        }
        
        return this.sections.length - 1;
    }
}

// ============ TEXT TRUNCATE WITH EXPAND ============

/**
 * Truncates long text and provides expand/collapse toggle
 */
class TextTruncate {
    constructor(elementSelector = '[data-truncate]', lineLimit = 3) {
        this.elements = document.querySelectorAll(elementSelector);
        this.lineLimit = lineLimit;
        this.init();
    }
    
    init() {
        this.elements.forEach(element => {
            const text = element.textContent;
            const lines = text.split('\n');
            
            if (lines.length > this.lineLimit) {
                const truncatedText = lines.slice(0, this.lineLimit).join('\n');
                const fullText = text;
                
                element.innerHTML = `
                    <span class="truncated-text">${truncatedText}...</span>
                    <button class="expand-btn">Read More</button>
                `;
                
                const btn = element.querySelector('.expand-btn');
                btn.addEventListener('click', () => {
                    if (element.classList.contains('expanded')) {
                        element.querySelector('.truncated-text').textContent = truncatedText + '...';
                        btn.textContent = 'Read More';
                        element.classList.remove('expanded');
                    } else {
                        element.querySelector('.truncated-text').textContent = fullText;
                        btn.textContent = 'Read Less';
                        element.classList.add('expanded');
                    }
                });
            }
        });
    }
}

// ============ INITIALIZE ALL EFFECTS ON DOM READY ============

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all animation classes
    new ParallaxScroll();
    new SmoothReveal();
    new StaggeredTextAnimation('.section-title');
    new ScrollCounter('[data-count]');
    new GlassmorphismEffect();
    new GradientAnimation();
    new LazyLoadImages();
    new RippleEffect();
    new TextTruncate();
    
    console.log('🎨 Advanced animations initialized!');
});

// ============ EXPORT FOR EXTERNAL USE ============

window.ParallaxScroll = ParallaxScroll;
window.SmoothReveal = SmoothReveal;
window.StaggeredTextAnimation = StaggeredTextAnimation;
window.ScrollCounter = ScrollCounter;
window.GlassmorphismEffect = GlassmorphismEffect;
window.GradientAnimation = GradientAnimation;
window.LazyLoadImages = LazyLoadImages;
window.RippleEffect = RippleEffect;
window.ScrollSnap = ScrollSnap;
window.TextTruncate = TextTruncate;
