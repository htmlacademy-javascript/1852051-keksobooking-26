import {activeStatePage} from './state-page.js';
import {elementByCardData} from './popup.js';
import {getOffers} from './network.js';
import {filters, resetFilters, setFiltersListeners} from './filters.js';

const DEFAULT_LOCATION = {
  lat: 35.6863,
  lng: 139.7388,
};
const DEFAULT_PREVIEW_IMG_PATH = 'img/muffin-grey.svg';

const renderMarkers = (offersData, markerGroup) => {
  const offerIcon = L.icon({
    iconUrl: './img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  markerGroup.clearLayers();

  offersData.forEach((item) => {
    L.marker(
      {
        lat: item.location.lat,
        lng: item.location.lng,
      },
      {
        icon: offerIcon,
      },
    )
      .addTo(markerGroup)
      .bindPopup(elementByCardData(item));
  });
};

const setLocationToInput = (location) => {
  document.querySelector('#address').value = `${location.lat.toFixed(5)} ${location.lng.toFixed(5)}`;
};

document.addEventListener('DOMContentLoaded', () => {
  setLocationToInput(DEFAULT_LOCATION);

  const map = L.map('map-canvas')
    .on('load', () => {
      activeStatePage();
    })
    .setView(DEFAULT_LOCATION, 14);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);

  const mainPinIcon = L.icon({
    iconUrl: './img/main-pin.svg',
    iconSize: [52, 52],
    iconAnchor: [26, 52],
  });

  const marker = L.marker(
    DEFAULT_LOCATION,
    {
      draggable: true,
      icon: mainPinIcon,
    },
  );

  marker.on('moveend', (evt) => {
    setLocationToInput(evt.target.getLatLng());
  });

  marker.addTo(map);

  getOffers().then((offersData) => {
    const markerGroup = L.layerGroup().addTo(map);
    filters(offersData, markerGroup);

    setFiltersListeners(() => {
      filters(offersData, markerGroup);
    });
  }).catch(() => {
    const errorTemplateElement = document.querySelector('#error-get-data').content;
    const popupElement = errorTemplateElement.cloneNode(true);
    document.querySelector('body').appendChild(popupElement);
  });

  document.querySelector('.ad-form').addEventListener('reset', () => {
    document.querySelector('.ad-form').reset();
    document.querySelector('.ad-form-header__preview img').src = DEFAULT_PREVIEW_IMG_PATH;
    document.querySelector('.ad-form__photo img').src = DEFAULT_PREVIEW_IMG_PATH;
    resetFilters();
    map.setView(DEFAULT_LOCATION, 14);
    marker.setLatLng(DEFAULT_LOCATION);
    setTimeout(() => {
      setLocationToInput(DEFAULT_LOCATION);
    }, 50);
  });
});

export {renderMarkers};
