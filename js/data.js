const TYPE_OFFERS = {
  bungalow: {name: 'Бунгало', minPrice: 0},
  flat: {name: 'Квартира', minPrice: 1000},
  hotel: {name: 'Отель', minPrice: 3000},
  house: {name: 'Дом', minPrice: 5000},
  palace: {name: 'Дворец', minPrice: 10000},
};

const typeNameByType = (type) => {
  if (Object.keys(TYPE_OFFERS).includes(type)) {
    return TYPE_OFFERS[type].name;
  }
  return 'Неизвесный тип';
};

const typeMinPriceByType = (type) => {
  if (Object.keys(TYPE_OFFERS).includes(type)) {
    return TYPE_OFFERS[type].minPrice;
  }
  return 0;
};

export {typeNameByType, typeMinPriceByType};
