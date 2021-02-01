const images = [
    'lion.png',
    'buffalos.png',
    'elephant.png',
    'monkey.png'
];

let currImgIdx = 0;

function showCurrentImage() {
    const imgContainer1 = document.querySelector('.carousel .current-image-1');
    const imgContainer2 = document.querySelector('.carousel .current-image-2');
    image2Idx = currImgIdx + 1 > images.length -1 ? currImgIdx - (images.length - 1) : currImgIdx + 1;
    const imgContainer3 = document.querySelector('.carousel .current-image-3');
    image3Idx = currImgIdx + 2 > images.length -1 ? (currImgIdx + 1) - (images.length - 1) : currImgIdx + 2;
    imgContainer1.src = 'img/' + images[currImgIdx];
    imgContainer2.src = 'img/' + images[image2Idx];
    imgContainer3.src = 'img/' + images[image3Idx];
}

showCurrentImage();

const nextButton = document.querySelector('.carousel .next');
nextButton.addEventListener('click', nextButtonClicked);
function nextButtonClicked() {
    currImgIdx++;
    if (currImgIdx >= images.length) currImgIdx = 0;
    showCurrentImage();
}

const prevButton = document.querySelector('.carousel .prev');
prevButton.addEventListener('click', prevButtonClicked);
function prevButtonClicked() {
    currImgIdx--;
    if (currImgIdx < 0) currImgIdx = images.length - 1;
    showCurrentImage();
}