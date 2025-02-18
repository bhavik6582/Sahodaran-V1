document.addEventListener('DOMContentLoaded', () => {
    // Newsletter Signup
    const newsletterForm = document.querySelector('.newsletter-form');
    
    newsletterForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const emailInput = newsletterForm.querySelector('input[type="email"]');
        const submitButton = newsletterForm.querySelector('button[type="submit"]');
        const feedbackElement = document.createElement('div');
        feedbackElement.classList.add('feedback');
        newsletterForm.appendChild(feedbackElement);
        
        if (validateEmail(emailInput.value)) {
            try {
                submitButton.disabled = true;
                submitButton.textContent = 'Subscribing...';
                
                // Simulated backend submission (replace with actual API endpoint)
                const response = await fetch('/api/newsletter-signup', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email: emailInput.value })
                });
                
                if (response.ok) {
                    feedbackElement.textContent = 'Thank you for subscribing!';
                    feedbackElement.style.color = 'green';
                    emailInput.value = '';
                } else {
                    throw new Error('Subscription failed');
                }
            } catch (error) {
                feedbackElement.textContent = 'Subscription failed. Please try again.';
                feedbackElement.style.color = 'red';
            } finally {
                submitButton.disabled = false;
                submitButton.textContent = 'Subscribe';
            }
        } else {
            feedbackElement.textContent = 'Please enter a valid email address.';
            feedbackElement.style.color = 'red';
        }
    });

    // Email Validation Function
    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(String(email).toLowerCase());
    }

    // Pagination Interaction
    const paginationLinks = document.querySelectorAll('.page-link');
    
    paginationLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove active class from all links
            paginationLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            link.classList.add('active');
        });
    });
});
