const express = require('express');
const {
  storeInDb, getFeatures,
} = require('../handlers');

const router = express.Router();

router.put('/:category', storeInDb);
router.get('/:category', getFeatures);
module.exports = {
  router,
};
