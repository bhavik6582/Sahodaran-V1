document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const themeToggleIcon = themeToggle.querySelector('.theme-toggle-icon');
    const htmlElement = document.documentElement;

    // Preload transition styles
    function preloadTransitions() {
        const style = document.createElement('style');
        style.textContent = `
            * {
                transition: 
                    background-color 0.5s cubic-bezier(0.4, 0, 0.2, 1),
                    color 0.5s cubic-bezier(0.4, 0, 0.2, 1) !important;
            }
        `;
        document.head.appendChild(style);
    }

    // Check for saved theme preference or system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)');

    // Set initial theme
    function setInitialTheme() {
        if (savedTheme) {
            htmlElement.className = savedTheme;
        } else if (systemPrefersDark.matches) {
            htmlElement.className = 'dark-mode';
        } else {
            htmlElement.className = 'light-mode';
        }
        updateThemeIcon();
    }

    // Update theme icon with smooth transition
    function updateThemeIcon() {
        themeToggleIcon.style.opacity = 0;
        setTimeout(() => {
            themeToggleIcon.textContent = htmlElement.classList.contains('dark-mode') ? '☀️' : '🌙';
            themeToggleIcon.style.opacity = 1;
        }, 250);
    }

    // Toggle theme with smooth transition
    function toggleTheme() {
        // Disable transitions briefly to prevent jarring effect
        htmlElement.style.transition = 'none';
        
        if (htmlElement.classList.contains('dark-mode')) {
            htmlElement.className = 'light-mode';
            localStorage.setItem('theme', 'light-mode');
        } else {
            htmlElement.className = 'dark-mode';
            localStorage.setItem('theme', 'dark-mode');
        }

        // Renable transitions after a brief delay
        setTimeout(() => {
            htmlElement.style.transition = '';
        }, 50);

        updateThemeIcon();
    }

    // Event listeners
    themeToggle.addEventListener('click', toggleTheme);
    systemPrefersDark.addListener(setInitialTheme);

    // Preload transitions and set initial theme
    preloadTransitions();
    setInitialTheme();
});
