const todoService = require('../services/category.services');

const storeInDb = async (req, res) => {
  // const result = await todoService.fetchData();
  // console.log(5, result);
  const { category } = req.body;
  console.log(category);
  const result = await todoService.fetchData(category);
  res.status(200).send(result);
};

const getFeatures = async (req, res) => {
  const { category } = req.params;
  const result = await todoService.getFeatures(category);
  console.log(category);
  res.status(200).json({ Features: result });
};

module.exports = {
  storeInDb,
  getFeatures,
};
