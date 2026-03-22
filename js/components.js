// Shared components loader
document.addEventListener('DOMContentLoaded', () => {
    // Inject Navbar
    const navbarHTML = `
        <nav class="container">
            <div class="nav-logo">Jaanaaka</div>
            <ul class="nav-links">
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="skills.html">Skills</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </nav>
    `;
    const header = document.querySelector('header');
    if (header) {
        header.innerHTML = navbarHTML;
    }

    // Inject Footer
    const footerHTML = `
        <div class="container footer-content">
            <p>&copy; ${new Date().getFullYear()} Jaanaaka | IT Professional Portfolio</p>
            <div class="footer-links">
                <a href="https://linkedin.com" target="_blank">LinkedIn</a> | 
                <a href="https://github.com" target="_blank">GitHub</a>
            </div>
        </div>
    `;
    const footer = document.querySelector('footer');
    if (footer) {
        footer.innerHTML = footerHTML;
    }
});
