// Main interactivity
document.addEventListener('DOMContentLoaded', () => {
    // Scroll Reveal Effect (Simplified)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Apply to sections
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0.9'; // subtle initial state
        observer.observe(section);
    });

    // Contact Form Handling
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button');
            const originalText = btn.innerText;
            
            btn.innerText = 'Sending...';
            btn.disabled = true;

            // Simulate sending
            setTimeout(() => {
                alert('Thank you for your message! This is a static site demo, so no email was actually sent.');
                btn.innerText = originalText;
                btn.disabled = false;
                contactForm.reset();
            }, 1500);
        });
    }
});
