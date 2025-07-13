// Mobile menu functionality
const menuIcon = document.querySelector('#menu-bar');
const navLinks = document.querySelector('.nav-links');

menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
}

// Close menu when scrolling
let scrollTimeout;
window.addEventListener('scroll', () => {
    if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
    }
});

// Text Animation
function animateText() {
    const animatedTexts = document.querySelectorAll('.animated-text');
    
    // Show first text immediately
    animatedTexts[0].classList.remove('hidden');
    animatedTexts[0].classList.add('show');
    
    // Continuous alternating animation
    setInterval(() => {
        // Hide first text and show second text
        animatedTexts[0].classList.add('hidden');
        animatedTexts[0].classList.remove('show');
        
        setTimeout(() => {
            animatedTexts[1].classList.remove('hidden');
            animatedTexts[1].classList.add('show');
        }, 300);
        
        // After 2 seconds, hide second text and show first text
        setTimeout(() => {
            animatedTexts[1].classList.add('hidden');
            animatedTexts[1].classList.remove('show');
            
            setTimeout(() => {
                animatedTexts[0].classList.remove('hidden');
                animatedTexts[0].classList.add('show');
            }, 300);
        }, 2000);
        
    }, 4000); // Repeat every 4 seconds
}

// Start animation when page loads
window.addEventListener('load', () => {
    setTimeout(animateText, 500); // Start after 0.5 seconds
});

// Particles.js Configuration
particlesJS('particles-js', {
    particles: {
        number: {
            value: 100,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: ['#ffffff', '#667eea', '#764ba2']
        },
        shape: {
            type: 'circle',
            stroke: {
                width: 0,
                color: '#000000'
            }
        },
        opacity: {
            value: 0.8,
            random: false,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#ffffff',
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 3,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'repulse'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 400,
                line_linked: {
                    opacity: 1
                }
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
            },
            repulse: {
                distance: 200,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: true
});

// Theme Toggle Functionality
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
body.classList.toggle('dark-mode', currentTheme === 'dark');

// Update button state
function updateThemeButton() {
    const isDark = body.classList.contains('dark-mode');
    themeToggle.classList.toggle('dark-mode', isDark);
}

// Initialize button state
updateThemeButton();

// Theme toggle event listener
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDark = body.classList.contains('dark-mode');
    
    // Save theme preference
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    
    // Update button state
    updateThemeButton();
    
    // Update particles colors based on theme
    if (window.pJSDom && window.pJSDom[0]) {
        const particles = window.pJSDom[0].pJS;
        if (isDark) {
            particles.pJS.particles.array.color.value = ['#ffffff', '#4ade80', '#f87171'];
        } else {
            particles.pJS.particles.array.color.value = ['#ffffff', '#a8edea', '#fed6e3'];
        }
    }
});

// Contact Form Handling
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const formData = new FormData(this);
            const name = formData.get('user_name');
            const email = formData.get('user_email');
            const message = formData.get('message');

            const submitBtn = this.querySelector('.send-btn');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fa fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;

            const templateParams = {
                from_name: name,
                from_email: email,
                message: message,
                to_name: 'Sharathchandra'
            };

            // ✅ Updated with your actual service and template ID
            emailjs.send('service_tpr25bq', 'template_2ysvs6t', templateParams)
                .then(() => {
                    alert('Message sent successfully!');
                    contactForm.reset();
                })
                .catch(() => {
                    alert('Failed to send message. Try again later.');
                })
                .finally(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                });
        });
    }
});