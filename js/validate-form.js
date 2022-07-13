import {typeMinPriceByType} from './data.js';

function createUiSlider(slider, start, min) {
  noUiSlider.create(slider, {
    start: start,
    connect: true,
    step: 1,
    range: {
      'min': min,
      'max': 100000
    }
  });

  slider.noUiSlider.on('update', (values) => {
    const adFormPrice = document.querySelector('#price');
    const price = parseInt(values[0], 10);
    adFormPrice.value = price;
    adFormPrice.placeholder = price;
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const adForm = document.querySelector('.ad-form');
  const adFormPrice = document.querySelector('#price');
  const adFormType = document.querySelector('#type');
  const slider = document.querySelector('.ad-form__slider');

  const pristine = new Pristine(adForm, {
    classTo: 'ad-form__element',
    errorTextParent: 'ad-form__element',
    errorTextClass: 'ad-form__error-text',
    errorTextTag: 'div',
  }, false);

  pristine.addValidator(adFormPrice, (value) => {
    const min = adFormPrice.getAttribute('min');
    return value > min;
  }, 'Недопустимое минимальное значение');

  createUiSlider(slider, 5000, typeMinPriceByType(adFormType.value));

  adFormPrice.addEventListener('change', (evt) => {
    slider.noUiSlider.set(evt.target.value);
  });

  adFormType.addEventListener('change', (evt) => {
    const minPrice = typeMinPriceByType(evt.target.value);
    adFormPrice.setAttribute('min', minPrice);
    slider.noUiSlider.destroy();

    createUiSlider(slider, adFormPrice.value, minPrice);
  });

  const adFormTimein = document.querySelector('#timein');
  const adFormTimeout = document.querySelector('#timeout');

  adFormTimein.addEventListener('change', (evt) => {
    adFormTimeout.value = evt.target.value;
  });

  adFormTimeout.addEventListener('change', (evt) => {
    adFormTimein.value = evt.target.value;
  });

  adForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    pristine.validate();
  });
});
