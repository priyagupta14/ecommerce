const healthHandler = async (req, res) => {
  res.status(200).send('hello');
};

module.exports = {
  healthHandler,
};
