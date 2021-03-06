import {activeStatePage} from './state-page.js';
import {elementByCardData} from './popup.js';
import {offers} from './network.js';

document.addEventListener('DOMContentLoaded', () => {
  const map = L.map('map-canvas')
    .on('load', () => {
      activeStatePage();
    })
    .setView({
      lat: 35.6863,
      lng: 139.7388,
    }, 14);

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
    {
      lat: 35.6863,
      lng: 139.7388,
    },
    {
      draggable: true,
      icon: mainPinIcon,
    },
  );

  marker.on('moveend', (evt) => {
    document.querySelector('#address').value = `${evt.target.getLatLng().lat.toFixed(5)} ${evt.target.getLatLng().lng.toFixed(5)}`;
  });

  marker.addTo(map);

  const icon = L.icon({
    iconUrl: './img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  offers().then((offersData) => {
    offersData.forEach((item) => {
      L.marker(
        {
          lat: item.location.lat,
          lng: item.location.lng,
        },
        {
          icon,
        },
      )
        .addTo(map)
        .bindPopup(elementByCardData(item));
    });
  }).catch(() => {
    const errorTemplate = document.querySelector('#error-get-data').content;
    const popup = errorTemplate.cloneNode(true);
    document.querySelector('body').appendChild(popup);
  });
});
