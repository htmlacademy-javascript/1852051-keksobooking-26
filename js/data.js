import {randomInteger, randomFloat, arrayRandomLength, numberAvatarImg} from './utils.js';

const TITLES = ['Уютное гнездышко для молодоженов', 'Прекрасный номер с видом на море', 'Прекрасный номер с видом на океан', 'Прекрасный номер с видом на закат', 'Прекрасный номер в горах'];
const TYPE_OFFERS = {
  'flat': 'Квартира',
  'bungalow': 'Бунгало',
  'house': 'Дом',
  'palace': 'Дворец',
  'hotel': 'Отель',
};
const TIMES = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];

const randomType = () => {
  const types = Object.keys(TYPE_OFFERS);
  return types[randomInteger(0, types.length - 1)];
};

const typeNameByType = (type) => {
  if (Object.keys(TYPE_OFFERS).includes(type)) {
    return TYPE_OFFERS[type];
  }
  return 'Неизвесный тип';
};

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
      title: TITLES[randomInteger(0, TITLES.length - 1)],
      address: `${rndLocation.lat}, ${rndLocation.lng}`,
      price: randomInteger(900, 10000),
      type: randomType(),
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


export {randomObject};
export {bookingForm};
export {typeNameByType};
