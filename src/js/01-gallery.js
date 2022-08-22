// Add imports above this line
import { galleryItems } from './gallery-items';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

const galleryBox = document.querySelector('.gallery');

const galleryEl = galleryItems
  .map(el => {
    return `
     <a class="gallery__link" href="${el.original}">
    <img
          class="gallery__image"
          src="${el.preview}"
          data-source="${el.original}"
          alt="${el.description}"
        />
</a>`;
  })
  .join('');

galleryBox.insertAdjacentHTML('afterbegin', galleryEl);

// * SimpleLightbox

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: '250',
});
