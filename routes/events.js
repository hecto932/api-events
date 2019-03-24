const debug = require('debug')('api-events:event-router');
const express = require('express');

const router = express.Router();

router.get('/', async function () {
  debug();
});

module.exports = router;