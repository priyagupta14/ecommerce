const todoService = require('../services/category.services');

const categoryHandler = async (req, res) => {
  // const result = await todoService.fetchData();
  // console.log(5, result);
  const { category } = req.body;
  console.log(category);
  const result = await todoService.fetchData(category);
  res.status(200).send(result);
};

module.exports = {
  categoryHandler,
};
