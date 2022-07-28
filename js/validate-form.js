import {typeMinPriceByType} from './data.js';
import {saveOffer} from './network.js';
import {removePopup} from './popup.js';

const createUiSlider = (slider, start, min) => {
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
    const adFormPriceElement = document.querySelector('#price');
    const price = parseInt(values[0], 10);
    adFormPriceElement.value = price;
    adFormPriceElement.placeholder = price;
  });
};

const sendForm = (pristine, adForm) => {
  const isValid = pristine.validate();

  if (isValid) {
    const formData = new FormData(adForm);
    saveOffer(formData).then((response) => {
      if (response.ok) {
        const successTemplateElement = document.querySelector('#success').content;
        const successPopupElement = successTemplateElement.cloneNode(true);
        document.querySelector('body').appendChild(successPopupElement);
        document.querySelector('.ad-form').dispatchEvent(new Event('reset'));
      } else {
        const errorTemplateElement = document.querySelector('#error').content;
        const errorPopupElement = errorTemplateElement.cloneNode(true);
        errorPopupElement.querySelector('.error__button').addEventListener('click', () => {
          removePopup('error');
        });
        document.querySelector('body').appendChild(errorPopupElement);
      }
      document.querySelector('.ad-form__submit').disabled = false;
    }).catch(() => {
      const errorTemplateElement = document.querySelector('#error').content;
      const errorPopupElement = errorTemplateElement.cloneNode(true);
      errorPopupElement.querySelector('.error__button').addEventListener('click', () => {
        removePopup('error');
      });
      document.querySelector('body').appendChild(errorPopupElement);
      document.querySelector('.ad-form__submit').disabled = false;
    });
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const adFormElement = document.querySelector('.ad-form');
  const adFormPriceElement = document.querySelector('#price');
  const adFormTypeElement = document.querySelector('#type');
  const sliderElement = document.querySelector('.ad-form__slider');

  const pristine = new Pristine(adFormElement, {
    classTo: 'ad-form__element',
    errorTextParent: 'ad-form__element',
    errorTextClass: 'ad-form__error-text',
    errorTextTag: 'div',
  }, false);

  pristine.addValidator(adFormPriceElement, (value) => {
    const min = adFormPriceElement.getAttribute('min');
    return value > min;
  }, 'Недопустимое минимальное значение');

  createUiSlider(sliderElement, 5000, typeMinPriceByType(adFormTypeElement.value));

  adFormPriceElement.addEventListener('change', (evt) => {
    sliderElement.noUiSlider.set(evt.target.value);
  });

  adFormTypeElement.addEventListener('change', (evt) => {
    const minPrice = typeMinPriceByType(evt.target.value);
    adFormPriceElement.setAttribute('min', minPrice);
    sliderElement.noUiSlider.destroy();

    createUiSlider(sliderElement, adFormPriceElement.value, minPrice);
  });

  const adFormTimeinElement = document.querySelector('#timein');
  const adFormTimeoutElement = document.querySelector('#timeout');

  adFormTimeinElement.addEventListener('change', (evt) => {
    adFormTimeoutElement.value = evt.target.value;
  });

  adFormTimeoutElement.addEventListener('change', (evt) => {
    adFormTimeinElement.value = evt.target.value;
  });

  adFormElement.addEventListener('submit', (evt) => {
    evt.preventDefault();
    sendForm(pristine, adFormElement);
  });
});
