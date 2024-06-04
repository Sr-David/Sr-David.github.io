// script.js
window.addEventListener('scroll', function() {
    const envelope = document.querySelector('.envelope');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 50) {
        envelope.classList.add('open');
    } else {
        envelope.classList.remove('open');
    }
});
