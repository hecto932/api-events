const debug = require('debug')('api-events:event-router');
const express = require('express');
const js2xmlparser = require('js2xmlparser');
const EventService = require('../services/events');
const { Parser } = require('json2csv');


function eventsApi(app) {
  const router = express.Router();
  app.use('/events', router);

  const eventService = new EventService();

  router.get('/', function (req, res, next) {
    debug(`A request has come to /events`);
    const { query } = req;

    let events = eventService.get(query);

    events = query && query.limit ? events.slice(0, query.limit) : events;
    events = query && query.format && query.format === 'xml' ? js2xmlparser.parse('event', events) : events;
    
    if (query && query.format && query.format === 'xml') {
      res.setHeader('Content-Type', 'text/xml');
      return res.status(200).send(events);
    }

    if (query && query.format && query.format === 'csv') {
      const fields = ['uuid', 'name', 'reporter', 'description', 'type', 'location', 'datetime'];
      const opts = { fields };
      const parser = new Parser(opts);
      const csv = parser.parse(events);
      res.setHeader('Content-disposition', 'attachment; filename=events.csv');
      res.set('Content-Type', 'text/csv');
      return res.status(200).send(csv);
    }

    res.status(200).json({
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
}

module.exports = eventsApi;