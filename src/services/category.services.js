/* eslint-disable no-restricted-syntax */
const httpUtils = require('../utils/http.utils');
const { Category } = require('../models');
const { Item } = require('../models');

const dbStoreItems = async (listOfItems) => {
  let result;
  let val;

  for (let i = 0; i < listOfItems.length; i++) {
    // eslint-disable-next-line no-await-in-loop
    result = await httpUtils.httpGet(`https://backend-evaluation-lgsvu.ondigitalocean.app/items/${listOfItems[i]}`);
    // console.log(result);
    const { features } = result;
    val = Item.create({
      item:
             listOfItems[i],
      color: features[0].value,
      size: features[1].value,
      brand: features[2].value,
    });
  }
  return val;
};

const fetchData = async (category) => {
  let result;
  let val;
  let listOfItems = [];
  const listofAllItem = [];
  result = Category.destroy({
    where: {},
    truncate: true,
  });
  result = Item.destroy({
    where: {},
    truncate: true,
  });

  for (let i = 0; i < category.length; i++) {
    // eslint-disable-next-line no-await-in-loop
    result = await httpUtils.httpGet(`https://backend-evaluation-lgsvu.ondigitalocean.app/category?name=${category[i]}`);
    const { name } = result;
    const { itemMetadata } = result;
    // console.log(15, itemMetadata);
    for (const ids of itemMetadata) { listOfItems.push(ids.id); listofAllItem.push(ids.id); }
    val = Category.create({ categoryName: name, categories: listOfItems });
    listOfItems = [];
  }
  result = await dbStoreItems(listofAllItem);
  return val;
};
const getFeatures = async (category) => {
  const arr = [];
  let result = await Item.findAll({
    attributes: ['color'],
    group: ['color'],
  }).then((items) => items.map((item) => item.color));
  arr.push(result);

  result = await Item.findAll({
    attributes: ['size'],
    group: ['size'],
  }).then((items) => items.map((item) => item.size));
  arr.push(result);

  result = await Item.findAll({
    attributes: ['brand'],
    group: ['brand'],
  }).then((items) => items.map((item) => item.brand));
  arr.push(result);
  console.log(arr);
  console.log(48, typeof result);
  return arr;
};

module.exports = {
  fetchData,
  dbStoreItems,
  getFeatures,
};
