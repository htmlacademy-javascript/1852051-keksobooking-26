import {activeStatePage} from './state-page.js';
import {bookingForm, randomObject} from './data.js';
import {elementByCardData} from './popup.js';

document.addEventListener('DOMContentLoaded', () => {
  const map = L.map('map-canvas')
    .on('load', () => {
      activeStatePage();
    })
    .setView({
      lat: 35.4122,
      lng: 139.2530,
    }, 10);

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
    evt.target.getLatLng();
  });

  marker.addTo(map).bindPopup(elementByCardData(randomObject()));

  const icon = L.icon({
    iconUrl: './img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  bookingForm().forEach((item) => {
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
});
