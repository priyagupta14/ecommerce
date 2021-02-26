const express = require('express');
const {
  categoryHandler,
} = require('../handlers');

const router = express.Router();

router.put('/:category', categoryHandler);

module.exports = {
  router,
};
