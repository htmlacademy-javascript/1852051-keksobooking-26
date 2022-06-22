import {randomInteger, randomFloat, arrayRandomLength, numberAvatarImg} from './utils.js';

const TYPE_OFFER = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const TIMES = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];

const randomObject = () => {
  const LOCATION_LAT_MIN = 35.65000;
  const LOCATION_LAT_MAX = 35.70000;
  const LOCATION_LNG_MIN = 139.70000;
  const LOCATION_LNG_MAX = 139.80000;
  const rndLocation = {
    lat: randomFloat(LOCATION_LAT_MIN, LOCATION_LAT_MAX, 5), //num
    lng: randomFloat(LOCATION_LNG_MIN, LOCATION_LNG_MAX, 5) //num
  };

  return {
    author:
      {
        avatar: `img/avatars/user${numberAvatarImg(1, 10)}.png`
      },
    offer: {
      title: 'Прекрасный номер с видом на море',
      address: `${rndLocation.lat}, ${rndLocation.lng}`,
      price: randomInteger(900, 10000),
      type: TYPE_OFFER[randomInteger(0, TYPE_OFFER.length - 1)],
      rooms: randomInteger(1, 5),
      guests: randomInteger(1, 4),
      checkin: TIMES[randomInteger(0, TIMES.length - 1)],
      checkout: TIMES[randomInteger(0, TIMES.length - 1)],
      features: arrayRandomLength(FEATURES),
      description: 'Для размещения предлагаются комфортабельный номер, оформленый в индивидуальном стиле и оборудованый современной мебелью, ЖК-телевизором, кабельным телевидением, индивидуальной системой кондиционирования. Собственная уборная укомплектована душевой кабиной, туалетом, раковиной и средствами гигиены.',
      photos: arrayRandomLength(PHOTOS)
    },
    location: rndLocation
  };
};

const bookingForm = () => {
  const objects = [];
  for (let i = 0; i < 10; i++) {
    objects.push(randomObject());
  }
  return objects;
};

export {bookingForm};
