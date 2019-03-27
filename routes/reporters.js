const debug = require('debug')('api-events:reporters-router');
const express = require('express');
const EventService = require('../services/events');

function reportersApi(app) {
  const router = express.Router();
  app.use('/reporters', router);

  const eventService = new EventService();

  router.get('/', function (req, res, next) {
    debug(`A request has come to /reporters`);
    const { query } = req;

    let reporters = null;
    if (query && query.reporter) {
      reporters = eventService.getEventsByReporter(query.reporter.replace('-', ' '));
    } else {
      reporters = eventService.getEventsReport();
    }

    return res.status(200).json({
      error: false,
      numberEntries: reporters.length,
      results: reporters
    });
  });

  router.get('/events', function (req, res, next) {
    debug(`A request has come to /reporters/events`);

    const repoterEvents = eventService.getEventsByReporters();

    return res.status(200).json({
      error: false,
      results: repoterEvents
    });
  });

}
module.exports = reportersApi;