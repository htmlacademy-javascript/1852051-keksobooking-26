const offers = () => fetch(
  'https://26.javascript.pages.academy/keksobooking/data',
  {
    method: 'GET'
  }
).then((response) => response.json());

export {offers};
