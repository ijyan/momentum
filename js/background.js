const images = ['bg_1.jpg', 'bg_2.jpg', 'bg_3.jpg'];

const randomImage = images[Math.floor(Math.random() * images.length)];

// img 태그
const bgImage = document.createElement('img');
bgImage.src = `img/${randomImage}`; // <img src='img/bg_1.jpg'>;

document.body.appendChild(bgImage);
