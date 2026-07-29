document.addEventListener('DOMContentLoaded', () => {
    const copyrightElement = document.querySelector('.copyright');
    if (copyrightElement) {
        const currentYear = new Date().getFullYear();
        copyrightElement.textContent = `© ${currentYear} NorthHaven Nigeria Limited. All rights reserved.`;
    }
});