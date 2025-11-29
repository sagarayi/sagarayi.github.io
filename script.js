// Profile Photo Error Handling
document.addEventListener('DOMContentLoaded', () => {
    const profileImg = document.querySelector('.profile-img');
    const profilePlaceholder = document.querySelector('.profile-placeholder');

    if (profileImg && profilePlaceholder) {
        // Function to check if we should show placeholder
        const updatePlaceholder = () => {
            const src = profileImg.getAttribute('src');
            // Hide placeholder if src exists and is not the default placeholder filename
            if (src && src !== 'profile-photo.jpg' && src.trim() !== '') {
                profilePlaceholder.style.display = 'none';
            } else {
                profilePlaceholder.style.display = 'block';
            }
        };

        // Check on load
        profileImg.addEventListener('load', updatePlaceholder);

        // Check on error (show placeholder)
        profileImg.addEventListener('error', () => {
            profilePlaceholder.style.display = 'block';
        });

        // Initial check
        updatePlaceholder();
    }
});


// Typing Animation
const typingText = document.querySelector('.typing-text');
const phrases = [
    'Software Engineer',
    'iOS Developer',
    'macOS Specialist',
    'Cross-Platform Expert'
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeText() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
        typingText.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
    } else {
        typingText.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
        // Pause at end of phrase
        typingSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typingSpeed = 500;
    }

    setTimeout(typeText, typingSpeed);
}

// Start typing animation when page loads
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(typeText, 1000);
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all timeline items
document.addEventListener('DOMContentLoaded', () => {
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(item);
    });

    // Observe skill categories
    const skillCategories = document.querySelectorAll('.skill-category');
    skillCategories.forEach((category, index) => {
        category.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(category);
    });

    // Observe education card
    const educationCard = document.querySelector('.education-card');
    if (educationCard) {
        observer.observe(educationCard);
    }

    // Observe achievement cards
    const achievementCards = document.querySelectorAll('.achievement-card');
    achievementCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.15}s`;
        observer.observe(card);
    });

    // Observe contact card
    const contactCard = document.querySelector('.contact-card');
    if (contactCard) {
        observer.observe(contactCard);
    }

    // Observe blog post
    const blogPost = document.querySelector('.blog-post');
    if (blogPost) {
        observer.observe(blogPost);
    }
});

// Smooth scroll for navigation links
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

// Add parallax effect to hero background
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroBackground = document.querySelector('.hero-background');
    if (heroBackground && scrolled < window.innerHeight) {
        heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Add hover effect to skill tags
document.addEventListener('DOMContentLoaded', () => {
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach(tag => {
        tag.addEventListener('mouseenter', function () {
            this.style.boxShadow = '0 0 20px rgba(0, 212, 255, 0.4)';
        });

        tag.addEventListener('mouseleave', function () {
            this.style.boxShadow = 'none';
        });
    });
});

// Add dynamic gradient to timeline markers on scroll
const updateTimelineMarkers = () => {
    const markers = document.querySelectorAll('.timeline-marker');
    markers.forEach(marker => {
        const rect = marker.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const progress = Math.max(0, Math.min(1, (windowHeight - rect.top) / windowHeight));

        if (progress > 0.5) {
            marker.style.transform = `scale(${1 + (progress - 0.5) * 0.5})`;
        } else {
            marker.style.transform = 'scale(1)';
        }
    });
};

window.addEventListener('scroll', updateTimelineMarkers);
document.addEventListener('DOMContentLoaded', updateTimelineMarkers);

// Add stagger animation to achievement cards
document.addEventListener('DOMContentLoaded', () => {
    const achievementCards = document.querySelectorAll('.achievement-card');
    achievementCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
    });
});
