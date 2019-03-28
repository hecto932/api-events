const debug = require('debug')('api-events:server');
const express = require('express');

const apiEvents = require('./routes/events');
const apiReporters = require('./routes/reporters')
const apiTypes = require('./routes/types');

const port = process.env.PORT || 3000;
const app = express();

// routes
apiEvents(app);
apiReporters(app);
apiTypes(app);

// errorHandler
app.use(function (err, req, res, next) {
  debug(err);
  return res.status(500).json({
    error: true,
    message: err.message,
    stack: err.stack
  });
});

const server = app.listen(port, () => {
  debug(`Server listening on http://localhost:${server.address().port}`);
})