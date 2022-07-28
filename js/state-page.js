const inactiveStatePage = () => {
  const adFormElement = document.querySelector('.ad-form');
  adFormElement.classList.add('ad-form--disabled');

  const fieldsetCollection = adFormElement.querySelectorAll('fieldset');
  for (let i = 0; i < fieldsetCollection.length; i++) {
    fieldsetCollection[i].setAttribute('disabled', 'disabled');
  }

  adFormElement.querySelector('.ad-form__slider').classList.add('ad-form__slider--disabled');

  const mapFiltersFormElement = document.querySelector('.map__filters');
  mapFiltersFormElement.classList.add('.map__filters--disabled');

  mapFiltersFormElement.querySelectorAll('select').forEach((el) => {
    el.setAttribute('disabled', 'disabled');
  });

  mapFiltersFormElement.querySelectorAll('input').forEach((el) => {
    el.setAttribute('disabled', 'disabled');
  });
};

const activeStatePage = () => {
  const adFormElement = document.querySelector('.ad-form');
  adFormElement.classList.remove('ad-form--disabled');

  const fieldsetCollection = adFormElement.querySelectorAll('fieldset');
  for (let i = 0; i < fieldsetCollection.length; i++) {
    fieldsetCollection[i].removeAttribute('disabled');
  }
  adFormElement.querySelector('.ad-form__slider').classList.remove('ad-form__slider--disabled');

  const mapFiltersFormElement = document.querySelector('.map__filters');
  mapFiltersFormElement.classList.remove('.map__filters--disabled');

  mapFiltersFormElement.querySelectorAll('select').forEach((el) => {
    el.removeAttribute('disabled');
  });

  mapFiltersFormElement.querySelectorAll('input').forEach((el) => {
    el.removeAttribute('disabled');
  });
};

document.addEventListener('DOMContentLoaded', () => {
  inactiveStatePage();
});

export {activeStatePage};
