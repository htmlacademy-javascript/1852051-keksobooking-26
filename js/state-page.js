const inactiveStatePage = () => {
  const adForm = document.querySelector('.ad-form');
  adForm.classList.add('ad-form--disabled');

  const fieldsetCollection = adForm.querySelectorAll('fieldset');
  for (let i = 0; i < fieldsetCollection.length; i++) {
    fieldsetCollection[i].setAttribute('disabled', 'disabled');
  }

  adForm.querySelector('.ad-form__slider').classList.add('ad-form__slider--disabled');

  const mapFiltersForm = document.querySelector('.map__filters');
  mapFiltersForm.classList.add('.map__filters--disabled');

  mapFiltersForm.querySelectorAll('select').forEach((el) => {
    el.setAttribute('disabled', 'disabled');
  });

  mapFiltersForm.querySelectorAll('input').forEach((el) => {
    el.setAttribute('disabled', 'disabled');
  });
};

function activeStatePage() {
  const adForm = document.querySelector('.ad-form');
  adForm.classList.remove('ad-form--disabled');

  const fieldsetCollection = adForm.querySelectorAll('fieldset');
  for (let i = 0; i < fieldsetCollection.length; i++) {
    fieldsetCollection[i].removeAttribute('disabled');
  }
  adForm.querySelector('.ad-form__slider').classList.remove('ad-form__slider--disabled');

  const mapFiltersForm = document.querySelector('.map__filters');
  mapFiltersForm.classList.remove('.map__filters--disabled');

  mapFiltersForm.querySelectorAll('select').forEach((el) => {
    el.removeAttribute('disabled');
  });

  mapFiltersForm.querySelectorAll('input').forEach((el) => {
    el.removeAttribute('disabled');
  });
}

document.addEventListener('DOMContentLoaded', () => {
  inactiveStatePage();
  activeStatePage();
});
