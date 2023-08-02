const container = document.querySelector('#container-main');
const size = 16;
let pixelDimension = 32;


for (let i = 0; i < (size * size); i++) {
    container.appendChild(document.createElement('div'))

};

const pixels = container.querySelectorAll('div')

pixels.forEach((pixel) => {
    pixel.classList.add('pixel')
    pixel.setAttribute('style', `height: ${pixelDimension}px; width: ${pixelDimension}px;`); 
    
    pixel.addEventListener('mouseover', () => {
        pixel.classList.toggle('active');
    })
})
