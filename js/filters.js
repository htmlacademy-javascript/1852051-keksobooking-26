import {renderMarkers} from './map.js';

const filters = (offersData, markerGroup) => {
  const housingTypeValue = document.querySelector('#housing-type').value;

  offersData = offersData.filter((offer) => {
    if (housingTypeValue === 'any') {
      return true;
    }
    return offer.offer.type === housingTypeValue;
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
};

export {filters, setFiltersListeners};
