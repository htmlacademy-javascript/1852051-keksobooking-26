import {typeNameByType} from './data.js';

const elementByCardData = (cardData) => {
  const popupTemplateElement = document.querySelector('#card').content;
  const popupElement = popupTemplateElement.cloneNode(true);
  if (cardData.offer.title) {
    popupElement.querySelector('.popup__title').textContent = cardData.offer.title;
  }
  if (cardData.offer.address) {
    popupElement.querySelector('.popup__text--address').textContent = cardData.offer.address;
  }
  if (cardData.offer.price) {
    popupElement.querySelector('.popup__text--price').textContent = `${cardData.offer.price} ₽/ночь`;
  }
  if (cardData.offer.type) {
    popupElement.querySelector('.popup__type').textContent = typeNameByType(cardData.offer.type);
  }
  if (cardData.offer.rooms && cardData.offer.guests) {
    popupElement.querySelector('.popup__text--capacity').textContent = `${cardData.offer.rooms} комнаты для ${cardData.offer.guests} гостей`;
  }
  if (cardData.offer.checkin && cardData.offer.checkout) {
    popupElement.querySelector('.popup__text--time').textContent = `Заезд после ${cardData.offer.checkin}, выезд до ${cardData.offer.checkout}`;
  }

  if (cardData.offer.features) {
    const featuresListElement = popupElement.querySelector('.popup__features');

    featuresListElement.innerHTML = '';
    for (let i = 0; i < cardData.offer.features.length; i++) {
      const featureElement = document.createElement('li');
      featureElement.classList.add('popup__feature');
      featureElement.classList.add(`popup__feature--${cardData.offer.features[i]}`);
      featuresListElement.appendChild(featureElement);
    }
  }

  if (cardData.offer.description) {
    popupElement.querySelector('.popup__description').textContent = cardData.offer.description;
  }

  if (cardData.offer.photos) {
    const photosList = popupElement.querySelector('.popup__photos');
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
    popupElement.querySelector('.popup__avatar').src = cardData.author.avatar;
  }

  return popupElement;
};

const removePopup = (className) => {
  const elem = document.querySelector(`.${className}`);
  if (elem) {
    elem.remove();
  }
};

export {elementByCardData, removePopup};
