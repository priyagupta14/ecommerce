const categoryService = require('../services/category.services');

const storeInDb = async (req, res) => {
  const { category } = req.body;
  const result = await categoryService.storeInDb(category);
  console.log(result);
  res.status(200).send('Stored');
};

const getFeatures = async (req, res) => {
  const { category } = req.params;
  const result = await categoryService.getFeatures(category);
  console.log(category);
  res.status(200).json({ Features: result });
};

module.exports = {
  storeInDb,
  getFeatures,
};
