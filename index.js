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
app.use('/types', apiTypes);

const server = app.listen(port, () => {
  debug(`Server listening on http://localhost:${server.address().port}`);
})