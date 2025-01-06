//ChatGPT - recap of anime.js
let loadingAnimation;

export function showLoading() {
    const loadingElement = document.querySelector('#loading');
    loadingElement.classList.remove('hidden');

    //ChatGPT - how to rotate
    loadingAnimation = anime({
        targets: '.loading',
        rotate: '1turn',
        duration: 750,
        easing: 'linear',
        loop: true
    });
}

export function hideLoading() {
    const loadingElement = document.querySelector('#loading');
    loadingElement.classList.add('hidden');

    if (loadingAnimation) {
        loadingAnimation.pause();
    }
}