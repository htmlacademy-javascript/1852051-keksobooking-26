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

const numberAvatarImg = (min, max) => {
  const resultNum = randomInteger(min, max);
  if (resultNum < 10) {
    return `0${resultNum}`;
  }
  return `${resultNum}`;
};

export {randomInteger, randomFloat, arrayRandomLength, numberAvatarImg};
