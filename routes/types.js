const debug = require('debug')('api-events:types-router');
const express = require('express');
const EventService = require('../services/events');

const router = express.Router();

const eventService = new EventService();


router.get('/', function (req, res ,next) {
  debug (`A request has come to /types`);
  const { query } = req;

  let types = null;
  if (query && query.type) {
    types = eventService.getEventsByType(query.type);
  } else {
    types = eventService.getEventsType();
  }

  return res.status(200).json({
    error: false,
    numberEntries: types.length,
    results: types
  });
});

router.get('/events', function (req, res, next) {
  debug(`A request has come to /types/events`);

  const event = eventService.getEventsByType();

  return res.status(200).json({
    error: false,
    results: event
  });
});

module.exports = router;