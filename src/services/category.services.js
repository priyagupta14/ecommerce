/* eslint-disable no-restricted-syntax */
const httpUtils = require('../utils/http.utils');
const { Category } = require('../models');
const { Item } = require('../models');

const fetchData = async (category) => {
  let result;
  let val;
  let listOfItems = [];
  for (let i = 0; i < category.length; i++) {
    // eslint-disable-next-line no-await-in-loop
    result = await httpUtils.httpGet(`https://backend-evaluation-lgsvu.ondigitalocean.app/category?name=${category[i]}`);
    const { name } = result;
    for (const ids of result.itemMetadata) { listOfItems.push(ids.id); }
    val = Category.create({ categoryName: name, categories: listOfItems });
    for (let i = 0; i < listOfItems.length; i++) {
      // eslint-disable-next-line no-await-in-loop
      result = await httpUtils.httpGet(`https://backend-evaluation-lgsvu.ondigitalocean.app/items/${listOfItems[i]}`);
      const { features } = result;
      val = Item.create({
        item:
         listOfItems[i],
        color: features[0].value,
        size: features[1].value,
        brand: features[2].value,
      });
    }
    listOfItems = [];
  }

  return val;
};

module.exports = {
  fetchData,
};
