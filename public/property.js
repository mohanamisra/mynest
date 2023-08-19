let left = document.getElementById('left');
let right = document.getElementById('right');
let container = document.getElementById('contain');

left.addEventListener('click', pickPhoto);
right.addEventListener('click', pickPhoto);

let pick = 0;

function pickPhoto() {
    pick = pick + 1;
    if(pick > 2)
        pick = 0;
    let image = document.createElement('img');
    image.src = images[pick];
    image.style.height= '500px';
    image.style.borderRadius = '16px';
    container.removeChild(container.firstChild);
    container.appendChild(image);
}

let images = [
    "public_assets/house.jpg",
    "public_assets/house1.jpg",
    "public_assets/house2.jpg"
]