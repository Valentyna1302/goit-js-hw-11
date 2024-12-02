// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

const API_KEY = '47378473-ac089f81fe0a13d2309255fc1';

const form = document.querySelector('.form-js');
const input = document.querySelector('.input-js');
const list = document.querySelector('.list-js');

const params = new URLSearchParams({
  key: API_KEY,
  q: 'monstera',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: 'true',
});

fetch(`https://pixabay.com/api/?${params}`)
  .then(res => {
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    return res.json();
  })
  .then(data => {
    console.log(data);
    list.insertAdjacentHTML('beforeend', createMarkup(data.hits));
  })
  .catch(error => console.log(error));

function createMarkup(arr) {
  return arr
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `<li class="list-item" >
  <a href="${largeImageURL}" alt="${tags}" title=""/>
    <img src="${webformatURL}" alt="${tags}" class="img-item">
  <div class="list-container">
  <p class="item"><span class="item-text">Likes</span> <span>${likes}</span></p>
  <p class="item"><span class="item-text">Wiews</span> <span>${views}</span></p>
  <p class="item"><span class="item-text">Comments</span> <span>${comments}</span></p>
  <p class="item"><span class="item-text">Downlods</span> <span>${downloads}</span></p>
  </div></a>
</li>`
    )
    .join('');
}

form.addEventListener('submit', handlerSearch);

function handlerSearch(event) {
  event.preventDefault();

  const { q } = event.target.elements;
}
