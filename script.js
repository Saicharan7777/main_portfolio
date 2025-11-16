document.addEventListener('DOMContentLoaded', () => {

    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');
    const header = document.querySelector('header');
    const navLinks = document.querySelectorAll('header nav a');
    const sections = document.querySelectorAll('section');

    menuIcon.onclick = () => {
        menuIcon.classList.toggle('fa-times');
        navbar.classList.toggle('active');
    };
    
    window.addEventListener('scroll', () => {
        header.classList.toggle('sticky', window.scrollY > 100);
        
        let currentSectionId = '';
        sections.forEach(sec => {
            if (window.scrollY >= sec.offsetTop - 150) {
                currentSectionId = sec.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
        
        if (navbar.classList.contains('active')) {
            menuIcon.classList.remove('fa-times');
            navbar.classList.remove('active');
        }
    });
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if(navbar.classList.contains('active')) {
                menuIcon.classList.remove('fa-times');
                navbar.classList.remove('active');
            }
        });
    });

    new Typed('.typing-text', {
        strings: [ "Crafting Clean Code", "Building Modern Web Apps", "Turning Ideas into Reality", "Design. Develop. Deploy.", "Passion for Problem Solving"],
        typeSpeed: 70, backSpeed: 40, loop: true
    });

    const revealElements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    revealElements.forEach(el => observer.observe(el));


    const themeToggle = document.getElementById('theme-toggle-icon');
    const applyTheme = (theme) => {
        if (theme === 'light') {
            document.body.classList.add('light');
            themeToggle.className = 'fas fa-sun';
        } else {
            document.body.classList.remove('light');
            themeToggle.className = 'fas fa-moon';
        }
         
        if (typeof tsParticles !== 'undefined') {
            loadParticles();
        }
    };

    let currentTheme = localStorage.getItem('theme') || 'dark';
    applyTheme(currentTheme);

    themeToggle.addEventListener('click', () => {
        currentTheme = document.body.classList.contains('light') ? 'dark' : 'light';
        localStorage.setItem('theme', currentTheme);
        applyTheme(currentTheme);
    });
    
    function loadParticles() {
        const isLight = document.body.classList.contains('light');
        const particleColor = isLight ? "#5a6861" : "#a4b2ac";
        const linkColor = isLight ? "#5a6861" : "#a4b2ac";
        
        tsParticles.load("tsparticles", {
            particles: {
                number: { value: 60, density: { enable: true, value_area: 800 } },
                color: { value: particleColor },
                shape: { type: "circle" },
                opacity: { value: 0.5, anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false } },
                size: { value: 2 },
                links: {
                    enable: true,
                    distance: 150,
                    color: linkColor,
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 1.5,
                    direction: "none",
                    outModes: { default: "bounce" }
                }
            },
            interactivity: {
                events: {
                    onHover: { enable: true, mode: "repulse" },
                    onClick: { enable: true, mode: "push" }
                },
                modes: {
                    repulse: { distance: 100, duration: 0.4 },
                    push: { quantity: 4 }
                }
            },
            background: {
                color: "transparent"
            },
            retina_detect: true,
        });
    }
    
    loadParticles();
    window.addEventListener('resize', loadParticles);
});