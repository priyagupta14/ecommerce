const { healthHandler } = require('./health.handler');
const { storeInDb, getFeatures } = require('./category.handler');

module.exports = {
  healthHandler,
  storeInDb,
  getFeatures,
};
