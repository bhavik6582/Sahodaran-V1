// Global Error Handling
window.addEventListener('error', (event) => {
    console.error('Uncaught error:', event.error);
    // Optional: Send error to monitoring service
});

// Performance and Logging Utility
const Logger = {
    log: (message, level = 'info') => {
        const timestamp = new Date().toISOString();
        console[level](`[${timestamp}] ${message}`);
    },
    error: (message) => Logger.log(message, 'error')
};

document.addEventListener('DOMContentLoaded', () => {
    try {
        // Find theme switch input, handle multiple possible IDs
        const themeSwitch = document.getElementById('theme-switch') || document.getElementById('theme-toggle');
        const body = document.body;

        // Check for saved theme preference or system preference
        const savedTheme = localStorage.getItem('theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)');

        // Function to apply theme
        const applyTheme = (theme) => {
            if (theme === 'dark') {
                body.classList.add('dark-mode');
                if (themeSwitch) themeSwitch.checked = true;
            } else {
                body.classList.remove('dark-mode');
                if (themeSwitch) themeSwitch.checked = false;
            }
        };

        // Set initial theme
        if (savedTheme) {
            applyTheme(savedTheme);
        } else if (systemPrefersDark.matches) {
            applyTheme('dark');
        } else {
            applyTheme('light');
        }

        // Theme toggle event listener
        if (themeSwitch) {
            themeSwitch.addEventListener('change', () => {
                const newTheme = themeSwitch.checked ? 'dark' : 'light';
                applyTheme(newTheme);
                localStorage.setItem('theme', newTheme);
            });
        }

        // Listen for system theme changes
        systemPrefersDark.addListener((e) => {
            applyTheme(e.matches ? 'dark' : 'light');
        });

        // Services View More Functionality
        const viewMoreBtn = document.getElementById('view-more-btn');
        const additionalServices = document.querySelectorAll('.additional-service');

        if (viewMoreBtn && additionalServices) {
            viewMoreBtn.addEventListener('click', () => {
                // Toggle services visibility
                additionalServices.forEach(service => {
                    service.classList.toggle('hidden');
                });

                // Toggle button text and icon
                const buttonText = viewMoreBtn.querySelector('.button-text');
                const buttonIcon = viewMoreBtn.querySelector('i');

                if (buttonText.textContent.includes('View More')) {
                    buttonText.textContent = 'Hide Services';
                    buttonIcon.classList.remove('ri-add-line');
                    buttonIcon.classList.add('ri-subtract-line');
                } else {
                    buttonText.textContent = 'View More Services';
                    buttonIcon.classList.remove('ri-subtract-line');
                    buttonIcon.classList.add('ri-add-line');
                }
            });
        }

        const viewMoreServicesBtn = document.getElementById('view-more-services');
        const serviceGrid = document.querySelector('.service-grid');

        // Toggle additional services
        viewMoreServicesBtn.addEventListener('click', (e) => {
            e.preventDefault();
            serviceGrid.classList.toggle('show-more-services');
            
            // Update button text based on grid state
            if (serviceGrid.classList.contains('show-more-services')) {
                viewMoreServicesBtn.innerHTML = 'Show Less <i class="ri-arrow-left-line"></i>';
            } else {
                viewMoreServicesBtn.innerHTML = 'View More Services <i class="ri-arrow-right-line"></i>';
            }
        });

        Logger.log('Page loaded successfully');
        
        // Add performance tracking
        const loadTime = window.performance.now();
        Logger.log(`Page load time: ${loadTime.toFixed(2)}ms`);
    } catch (error) {
        Logger.error(`Initialization error: ${error.message}`);
    }
});
