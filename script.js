
// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// Navigation Active State
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveNav() {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNav);


// Parallax Effect
function initParallax() {
    const circuitPattern = document.querySelector('.circuit-pattern');
    let ticking = false;
    
    function updateParallax() {
        const scrolled = window.pageYOffset;
        const parallaxSpeed = 0.5;
        
        if (circuitPattern) {
            circuitPattern.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
        }
        ticking = false;
    }
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    });
}

// Skill Tag Hover Effect
function initSkillTags() {
    const skillTags = document.querySelectorAll('.skill-tag');
    
    skillTags.forEach(tag => {
        tag.addEventListener('mouseenter', () => {
            tag.style.transform = 'translateY(-5px) scale(1.05)';
        });
        
        tag.addEventListener('mouseleave', () => {
            tag.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Loading Animation
function initLoadingAnimation() {
    const elements = document.querySelectorAll('[class*="fadeInUp"], [class*="slideIn"]');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    elements.forEach(element => {
        observer.observe(element);
    });
}

// Chip Interaction
function initChipInteraction() {
    const chip = document.querySelector('.chip');
    
    if (chip) {
        chip.addEventListener('mouseenter', () => {
            chip.style.transform = 'scale(1.1) rotateY(15deg)';
        });
        
        chip.addEventListener('mouseleave', () => {
            chip.style.transform = 'scale(1) rotateY(0deg)';
        });
    }
}

// Logic Gate Interaction
function initLogicGates() {
    const gates = document.querySelectorAll('.gate');
    
    gates.forEach((gate, index) => {
        gate.addEventListener('click', () => {
            // Toggle active state
            gate.classList.toggle('active');
            
            // Add pulse effect
            gate.style.transform = 'scale(1.2)';
            
            setTimeout(() => {
                gate.style.transform = '';
            }, 200);
            
            // Simulate logic operation
            const gateType = gate.textContent;
            console.log(`${gateType} gate activated!`);
        });
    });
}

// Contact Form Animation (if needed later)
function initContactAnimations() {
    const contactItems = document.querySelectorAll('.contact-item');
    
    contactItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
        
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Performance Optimization
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimized scroll handler
const optimizedScrollHandler = debounce(() => {
    updateActiveNav();
}, 10);

window.addEventListener('scroll', optimizedScrollHandler);

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initParallax();
    initSkillTags();
    initLoadingAnimation();
    initChipInteraction();
    initLogicGates();
    initContactAnimations();
    
    // Add initial load animation
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease-in-out';
        document.body.style.opacity = '1';
    }, 100);
});

// Handle resize events
window.addEventListener('resize', debounce(() => {
    updateActiveNav();
}, 250));

// Easter egg for tech enthusiasts
let clickCount = 0;
document.querySelector('.chip-core')?.addEventListener('click', () => {
    clickCount++;
    if (clickCount === 5) {
        console.log('🎉 Easter egg! You found the hidden processor core!');
        console.log('Binary: 01001000 01100101 01101100 01101100 01101111');
        console.log('Translation: Hello from Cameron\'s digital world!');
        clickCount = 0;
    }
});