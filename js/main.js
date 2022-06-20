function getRandomInteger(min, max) {
  if (min < 0) {
    throw new Error('Минимальное значение не может быть меньше 0');
  }
  if (max <= min) {
    throw new Error('Максимальное значение не может быть меньше или равно минимальному');
  }
  return Math.floor(Math.random() * (max - min) + min);
}

function getRandomFloat(min, max, fractionDigits) {
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
}

const TYPE_OFFER = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const CHECKIN = ['12:00', '13:00', '14:00'];
const CHECKOUT = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];


const randomObject = () => {
  const rndLocation = {
    lat: getRandomFloat(35.65000, 35.70000, 5), //num
    lng: getRandomFloat(139.70000, 139.80000, 5) //num
  };

  return {
    author:
      {
        avatar: `img/avatars/user${getNumberAvatarImg(1, 10)}.png`
      },
    offer: {
      title: 'Прекрасный номер с видом на море',
      address: `${rndLocation.lat}, ${rndLocation.lng}`,
      price: getRandomInteger(900, 10000),
      type: TYPE_OFFER[getRandomInteger(0, TYPE_OFFER.length - 1)],
      rooms: getRandomInteger(1, 5),
      guests: getRandomInteger(1, 4),
      checkin: CHECKIN[getRandomInteger(0, CHECKIN.length - 1)],
      checkout: CHECKOUT[getRandomInteger(0, CHECKOUT.length - 1)],
      features: getArrayRandomLength(FEATURES),
      description: 'Для размещения предлагаются комфортабельный номер, оформленый в индивидуальном стиле и оборудованый современной мебелью, ЖК-телевизором, кабельным телевидением, индивидуальной системой кондиционирования. Собственная уборная укомплектована душевой кабиной, туалетом, раковиной и средствами гигиены.',
      photos: getArrayRandomLength(PHOTOS)
    },
    location: rndLocation
  };
};

const bookingForm = function () {
  const objects = [];
  for (let i = 0; i < 10; i++) {
    objects.push(randomObject());
  }
  return objects;
};

bookingForm();

function getNumberAvatarImg(min, max) {
  const resultNum = getRandomInteger(min, max);
  if (resultNum < 10) {
    return `0${resultNum}`;
  }
  return `${resultNum}`;
}

function getArrayRandomLength(arr) {
  const resultArray = [];
  const maxLength = arr.length;
  const lengthArray = getRandomInteger(1, maxLength);

  for (let i = 0; i < lengthArray; i++) {
    const indexElem = getRandomInteger(0, maxLength - 1);
    const elem = arr[indexElem];

    if (!resultArray.includes(elem)) {
      resultArray.push(elem);
    }
  }
  return resultArray;
}

