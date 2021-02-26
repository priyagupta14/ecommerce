const healthHandler = async (req, res) => {
  res.status(200).send('Health Handler');
};

module.exports = {
  healthHandler,
};
