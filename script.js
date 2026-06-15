// --- FUNCIONALIDAD MODO CLARO / OSCURO ---
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// Detectar preferencia del sistema operativo o almacenamiento local previo
const savedTheme = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme) {
    htmlElement.setAttribute('data-theme', savedTheme);
} else if (systemPrefersDark) {
    htmlElement.setAttribute('data-theme', 'dark');
} else {
    htmlElement.setAttribute('data-theme', 'light');
}

// Escuchar clics en el botón de cambio de tema
themeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    let newTheme = 'dark';
    
    if (currentTheme === 'dark') {
        newTheme = 'light';
    }
    
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

// --- MENÚ DESPLEGABLE MÓVIL ---
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.getElementById('nav-menu');

mobileMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    mobileMenu.classList.toggle('is-active'); // Puedes usarlo para animar las barras del menú
});

// Cerrar el menú al hacer clic en un enlace (Móviles)
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// --- ENLACE ACTIVO AUTOMÁTICO EN EL SCROLL ---
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 150)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});