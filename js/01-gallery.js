import { galleryItems } from './gallery-items.js';
const galleryContainerRef = document.querySelector(".gallery");
const imagesMarkup = galleryItems.map(({ preview, original, description }) => {
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
  
console.log(imagesMarkup);
galleryContainerRef.insertAdjacentHTML("beforeend", imagesMarkup);
galleryContainerRef .addEventListener('click', onContainerClick);

function onContainerClick(e) {
      e.preventDefault();

    if (!e.target.classList.contains('gallery__image')) {
        return;
    }
    console.log(e.target);
}

galleryContainerRef .addEventListener('click', createModal)

let image = '';
function createModal(e) {
    image = basicLightbox.create(
        `<div class = 'modal'> <img src = '${e.target.dataset.source}'></div>`
    );
    image.show();
}
window.addEventListener('keydown', onEscKeyPress);
function onEscKeyPress(e) {
  if (e.code !== "Escape") {
    return
  }
  {
        image.close();
    }
  window.removeEventListener('keydown', createModal);
}


