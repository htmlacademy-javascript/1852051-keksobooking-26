import './utils.js';
import './data.js';
import './popup.js';
import './state-page.js';
import './validate-form.js';
import './map.js';
import './network.js';
import {removePopup} from './popup.js';

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('body').addEventListener('click', () => {
    removePopup('error');
    removePopup('success');
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      removePopup('error');
      removePopup('success');
    }
  });
});
