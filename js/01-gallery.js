import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainerRef = document.querySelector(".gallery");
// /*------------Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи-------------*/

const imagesMarkup = createItemsMarkup(galleryItems);
galleryContainerRef.insertAdjacentHTML("beforeend", imagesMarkup);
function createItemsMarkup(item){
    return galleryItems
        .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
      <a class="gallery__link" href="${original.value}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>`;
    })
    .join("");
}
console.log(imagesMarkup);

// /*------------Реализация делегирования на div.gallery и получение url большого изображения-------------*/

