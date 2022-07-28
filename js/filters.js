import {renderMarkers} from './map.js';
import {debounce} from './utils.js';

const DEFAULT_VALUE = 'any';
const HIGH_PRICE = 50000;
const LOW_PRICE = 10000;

const filters = (offersData, markerGroup) => {
  const housingTypeValueElement = document.querySelector('#housing-type').value;
  const housingPriceValueElement = document.querySelector('#housing-price').value;
  const housingRoomsValueElement = document.querySelector('#housing-rooms').value;
  const housingGuestsValueElement = document.querySelector('#housing-guests').value;
  const checkedFeaturesElement = document.querySelectorAll('[name=features]:checked');
  const features = [];
  checkedFeaturesElement.forEach((featur) => features.push(featur.value));

  offersData = offersData.filter((offer) => {
    if (housingTypeValueElement === 'any') {
      return true;
    }
    return offer.offer.type === housingTypeValueElement;
  })
    .filter((offer) => {
      if (housingPriceValueElement === DEFAULT_VALUE) {
        return true;
      }
      if (housingPriceValueElement === 'middle' && offer.offer.price >= LOW_PRICE && offer.offer.price <= HIGH_PRICE) {
        return true;
      }
      if (housingPriceValueElement === 'low' && offer.offer.price < LOW_PRICE) {
        return true;
      }
      if (housingPriceValueElement === 'high' && offer.offer.price > HIGH_PRICE) {
        return true;
      }
    })
    .filter((offer) => {
      if (housingRoomsValueElement === DEFAULT_VALUE) {
        return true;
      }
      return parseInt(offer.offer.rooms, 10) === parseInt(housingRoomsValueElement, 10);
    })
    .filter((offer) => {
      if (housingGuestsValueElement === DEFAULT_VALUE) {
        return true;
      }
      return parseInt(offer.offer.guests, 10) === parseInt(housingGuestsValueElement, 10);
    })
    .filter((offer) => {

      if (!Object.prototype.hasOwnProperty.call(offer.offer, 'features')) {
        return false;
      }
      for (let i = 0; i < features.length; i++) {
        if (!(offer.offer.features.includes(features[i]))) {
          return false;
        }
      }
      return true;
    });

  renderMarkers(offersData.slice(0, 10), markerGroup);
};

const addFilterListener = (filterName, callback) => {
  document.querySelector(`#${filterName}`).addEventListener('change', debounce(() => {
    callback();
  }));
};

const setFiltersListeners = (callback) => {
  addFilterListener('housing-type', callback);
  addFilterListener('housing-price', callback);
  addFilterListener('housing-rooms', callback);
  addFilterListener('housing-guests', callback);
  addFilterListener('filter-wifi', callback);
  addFilterListener('filter-dishwasher', callback);
  addFilterListener('filter-parking', callback);
  addFilterListener('filter-washer', callback);
  addFilterListener('filter-elevator', callback);
  addFilterListener('filter-conditioner', callback);
};

export {filters, setFiltersListeners};
