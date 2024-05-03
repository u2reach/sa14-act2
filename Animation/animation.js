const animateMe = document.getElementById('animateMe');
const controlButton = document.getElementById('controlButton');
let isAnimating = false;

controlButton.addEventListener('click', () => {
    if (!isAnimating) {
        animateMe.classList.add('animate');
        animateMe.style.transform = 'translateX(200px)';
        isAnimating = true;
    } else {
        animateMe.classList.remove('animate');
        animateMe.style.transform = 'translateX(0)';
        isAnimating = false;
    }
});
