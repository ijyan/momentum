const main = document.querySelector('#main');
const images = ['bg_1.jpg', 'bg_2.jpg', 'bg_3.jpg'];

const randomImage = images[Math.floor(Math.random() * images.length)];

function paintImg(randomImage) {
    main.classList.add('bg');
    const bg = document.querySelector('.bg');
    bg.style.backgroundImage = `url(./src/img/${randomImage})`;
}

paintImg(randomImage);
