import { galleryItems } from './gallery-items.js';
// Change code below this line

//*  -------------- Gallery rendering creation ----------------- // 
const galleryContainer = document.querySelector('.gallery');

function createPhotoRender(gallery) {
    
    return gallery.map(({preview, original, description}) => {
        return `
        <div class="gallery__item">
        <a class="gallery__link" href="large-image.jpg">
        <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
      `; 
    }).join(''); 
};

const cardsMarkup = createPhotoRender(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);


//* ------------------ Foto action -------------------- //
galleryContainer.addEventListener('click', onGalleryContainerClick); // put CLick listener

function onGalleryContainerClick(e) {
      noStandartActions(e); // Prevent link loading 
      noClickMiss(e);  // prevent click on no-image
    
    // connect Lightbox library
    const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="1280" >
`);
    instance.show();

    // close IMG
    galleryContainer.addEventListener("keydown", (e) => {
        if (e.code === "Escape") instance.close();
    });
    
    // console.dir(e.target.dataset.source);
};

//* divided functions:
function noStandartActions (e) {
    e.preventDefault();
};
function noClickMiss (e) {
  const isImageGalleryEl = e.target.classList.contains('gallery__image');
    if (!isImageGalleryEl || e.target.nodeName !=="IMG") return;
};

console.log(createPhotoRender(galleryItems));

