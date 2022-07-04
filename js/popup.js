import {bookingForm} from './data.js';
import {typeNameByType} from './data.js';

const elementByCardData = (cardData) => {
  const popupTemplate = document.querySelector('#card').content;
  const popup = popupTemplate.cloneNode(true);
  if (cardData.offer.title) {
    popup.querySelector('.popup__title').textContent = cardData.offer.title;
  }
  if (cardData.offer.address) {
    popup.querySelector('.popup__text--address').textContent = cardData.offer.address;
  }
  if (cardData.offer.price) {
    popup.querySelector('.popup__text--price').textContent = `${cardData.offer.price} ₽/ночь`;
  }
  if (cardData.offer.type) {
    popup.querySelector('.popup__type').textContent = typeNameByType(cardData.offer.type);
  }
  if (cardData.offer.rooms && cardData.offer.guests) {
    popup.querySelector('.popup__text--capacity').textContent = `${cardData.offer.rooms} комнаты для ${cardData.offer.guests} гостей`;
  }
  if (cardData.offer.checkin && cardData.offer.checkout) {
    popup.querySelector('.popup__text--time').textContent = `Заезд после ${cardData.offer.checkin}, выезд до ${cardData.offer.checkout}`;
  }

  if (cardData.offer.features) {
    const featuresList = popup.querySelector('.popup__features');

    featuresList.innerHTML = '';
    for (let i = 0; i < cardData.offer.features.length; i++) {
      const feature = document.createElement('li');
      feature.classList.add('popup__feature');
      feature.classList.add(`popup__feature--${cardData.offer.features[i]}`);
      featuresList.appendChild(feature);
    }
  }

  if (cardData.offer.description) {
    popup.querySelector('.popup__description').textContent = cardData.offer.description;
  }

  if (cardData.offer.photos) {
    const photosList = popup.querySelector('.popup__photos');
    photosList.innerHTML = '';
    for (let i = 0; i < cardData.offer.photos.length; i++) {
      const photo = document.createElement('img');
      photo.classList.add('popup__photo');
      photo.src = cardData.offer.photos[i];
      photo.style.width = '45px';
      photo.style.height = '40px';
      photosList.appendChild(photo);
    }
  }

  if (cardData.author.avatar) {
    popup.querySelector('.popup__avatar').src = cardData.author.avatar;
  }

  return popup;
};

document.addEventListener('DOMContentLoaded', () => {
  const data = bookingForm();
  document.querySelector('#map-canvas').appendChild(elementByCardData(data[0]));
});
