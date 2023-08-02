const container = document.querySelector('#container-main');
const size = 4


for (let i = 0; i < (size * size); i++) {
    container.appendChild(document.createElement('div'))

};

const pixels = container.querySelectorAll('div')

pixels.forEach((pixel) => {
    pixel.classList.add('pixel')
})