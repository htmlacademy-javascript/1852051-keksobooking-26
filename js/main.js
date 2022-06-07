// eslint-disable-next-line no-unused-vars
function randomInteger(min, max) {
  if (min < 0) {
    throw new Error('Минимальное значение не может быть меньше 0');
  }
  if (max <= min) {
    throw new Error('Максимальное значение не может быть меньше или равно минимальному');
  }
  return Math.floor(Math.random() * (max - min) + min);
}


// eslint-disable-next-line no-unused-vars
function randomFloat(min, max, fractionDigits) {
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

