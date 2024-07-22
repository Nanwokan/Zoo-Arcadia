document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const menuPanel = document.getElementById('menu-panel');

    menuToggle.addEventListener('click', () => {
        menuPanel.style.width = '250px';
    });

    window.closeNav = () => {
        menuPanel.style.width = '0';
    };
});
