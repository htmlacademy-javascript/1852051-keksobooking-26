import {renderMarkers} from './map.js';

const filters = (offersData, markerGroup) => {
  const housingTypeValue = document.querySelector('#housing-type').value;
  const housingPriceValue = document.querySelector('#housing-price').value;
  const housingRoomsValue = document.querySelector('#housing-rooms').value;
  const housingGuestsValue = document.querySelector('#housing-guests').value;

  const checkedFeatures = document.querySelectorAll('[name=features]:checked');
  const features = [];
  checkedFeatures.forEach((featur) => features.push(featur.value));

  offersData = offersData.filter((offer) => {
    if (housingTypeValue === 'any') {
      return true;
    }
    return offer.offer.type === housingTypeValue;
  })
    .filter((offer) => {
      if (housingPriceValue === 'any') {
        return true;
      }
      if (housingPriceValue === 'middle' && offer.offer.price >= 10000 && offer.offer.price <= 50000) {
        return true;
      }
      if (housingPriceValue === 'low' && offer.offer.price < 10000) {
        return true;
      }
      if (housingPriceValue === 'high' && offer.offer.price > 50000) {
        return true;
      }
    })
    .filter((offer) => {
      if (housingRoomsValue === 'any') {
        return true;
      }
      return parseInt(offer.offer.rooms, 10) === parseInt(housingRoomsValue, 10);
    })
    .filter((offer) => {
      if (housingGuestsValue === 'any') {
        return true;
      }
      return parseInt(offer.offer.guests, 10) === parseInt(housingGuestsValue, 10);
    })
    .filter((offer) => {

      if(!Object.prototype.hasOwnProperty.call(offer.offer, 'features')){
        return false;
      }
      for (let i = 0; i < features.length; i++) {
        if (!(offer.offer.features.includes(features[i]))) {
          return false;
        }
      }
      return  true;
    });

  renderMarkers(offersData.slice(0, 10), markerGroup);
};

const addFilterListener = (filterName, callback) => {
  document.querySelector(`#${filterName}`).addEventListener('change', () => {
    callback();
  });
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
