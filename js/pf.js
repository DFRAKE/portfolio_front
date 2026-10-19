const menuLinks = document.querySelectorAll('.side-nav a');
const sections = document.querySelectorAll('main > section');

sections.forEach(section => {
    section.hidden = true;
});

menuLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
        const targetId = link.getAttribute('href').slice(1);
        const targetSection = document.getElementById(targetId);

        if(!targetSection) return;

        event.preventDefault();

        sections.forEach(section => {
            section.hidden = section !== targetSection;
        });

        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});
