
function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
        window.scrollTo({
            top: element.offsetTop,
            behavior: 'smooth'
        });
    }
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    ;
});
