import { galleryItems } from './gallery-items.js';
// Change code below this line

//*  -------------- Gallery rendering creation ----------------- // 
const galleryContainer = document.querySelector('.gallery');

const createPhotoRender = (gallery) => {
    
    return gallery.map(({ preview, original, description }) => {
        return `
        <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</div>
      `;
    }).join('');
};

const cardsMarkup = createPhotoRender(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup); 

 let lightbox = new SimpleLightbox('.gallery a', {
     'captionType': "attr",
     'captionsData': "alt",
     'captionPosition': "bottom",
    'captionDelay': 250,
    });

console.log(galleryItems);
