const { default: axios } = require('axios');

const httpGet = async (path) => {
  const response = await axios.get(path);
  return response.data;
};

module.exports = {
  httpGet,
};
