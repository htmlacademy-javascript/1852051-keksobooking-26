const offers = () => fetch(
  'https://26.javascript.pages.academy/keksobooking/data',
  {
    method: 'GET'
  }
).then((response) => response.json());

const saveOffer = (formData) => fetch(
  'https://26.javascript.pages.academy/keksobooking',
  {
    method: 'POST',
    body: formData
  }
);

export {offers, saveOffer};
