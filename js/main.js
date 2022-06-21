const randomInteger = (min, max) => {
  if (min < 0) {
    throw new Error('Минимальное значение не может быть меньше 0');
  }
  if (max <= min) {
    throw new Error('Максимальное значение не может быть меньше или равно минимальному');
  }
  return Math.floor(Math.random() * (max - min) + min);
};

const randomFloat = (min, max, fractionDigits) => {
  if (min < 0) {
    throw new Error('Минимальное значение не может быть меньше 0');
  }
  if (max <= min) {
    throw new Error('Максимальное значение не может быть меньше или равно минимальному');
  }
  if (fractionDigits < 0) {
    throw new Error('Значение количества знаков после запятой не может быть меньше 0');
  }
  if (fractionDigits > 16) {
    throw new Error('Значение количества знаков после запятой не может быть больше 16');
  }
  return (Math.random() * (max - min) + min).toFixed(fractionDigits);
};

const TYPE_OFFER = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const TIMES = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];

const numberAvatarImg = (min, max) => {
  const resultNum = randomInteger(min, max);
  if (resultNum < 10) {
    return `0${resultNum}`;
  }
  return `${resultNum}`;
};

const arrayRandomLength = (arr) => {
  const resultArray = [];
  const maxLength = arr.length;
  const lengthArray = randomInteger(1, maxLength);

  for (let i = 0; i < lengthArray; i++) {
    const indexElem = randomInteger(0, maxLength - 1);
    const elem = arr[indexElem];

    if (!resultArray.includes(elem)) {
      resultArray.push(elem);
    }
  }
  return resultArray;
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

bookingForm();

