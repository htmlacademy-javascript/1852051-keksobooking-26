import {bookingForm} from './data.js';
import {typeNameByType} from './data.js';

const elementByCardData = (cardData) => {
  const popupTemplate = document.querySelector('#card').content;
  const popup = popupTemplate.cloneNode(true);
  popup.querySelector('.popup__title').textContent = cardData.offer.title;
  popup.querySelector('.popup__text--address').textContent = cardData.offer.address;
  popup.querySelector('.popup__text--price').textContent = `${cardData.offer.price} ₽/ночь`;
  popup.querySelector('.popup__type').textContent = typeNameByType(cardData.offer.type);
  popup.querySelector('.popup__text--capacity').textContent = `${cardData.offer.rooms} комнаты для ${cardData.offer.guests} гостей`;
  popup.querySelector('.popup__text--time').textContent = `Заезд после ${cardData.offer.checkin}, выезд до ${cardData.offer.checkout}`;

  const featuresList = popup.querySelector('.popup__features');
  featuresList.innerHTML = '';
  for (let i = 0; i < cardData.offer.features.length; i++) {
    const feature = document.createElement('li');
    feature.classList.add('popup__feature');
    feature.classList.add(`popup__feature--${cardData.offer.features[i]}`);
    featuresList.appendChild(feature);
  }

  popup.querySelector('.popup__description').textContent = cardData.offer.description;

  const photosList = popup.querySelector('.popup__photos');
  photosList.innerHTML = '';
  for (let i = 0; i < cardData.offer.photos.length; i++) {
    const photo = document.createElement('img');
    photo.classList.add('popup__photo');
    photo.src = cardData.offer.photos[i];
    photosList.appendChild(photo);
  }

  popup.querySelector('.popup__avatar').src = cardData.author.avatar;

  return popup;
};

document.addEventListener('DOMContentLoaded', () => {
  const data = bookingForm();
  document.querySelector('#map-canvas').appendChild(elementByCardData(data[0]));
});

