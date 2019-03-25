const debug = require('debug')('api-events:event-router');
const express = require('express');
const EventService = require('../services/events');

const router = express.Router();

const eventService = new EventService();


router.get('/', function (req, res ,next) {
  debug (`A request has come to /events`);
  const { query } = req;
  
  const events = eventService.get(query);

  return res.status(200).json({
    error: false,
    numberEntries: events.length,
    results: events
  });
});

router.get('/:uuid', function (req, res, next) {
  debug(`A request has come to /events/:uuid`);

  const { uuid } = req.params;
  const event = eventService.getByUuid(uuid);

  return res.status(200).json({
    error: false,
    numberEntries: event.length,
    results: event
  });
});

module.exports = router;