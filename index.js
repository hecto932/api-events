const debug = require('debug')('api-events:server');
const express = require('express');

const port = process.env.PORT || 3000;
const app = express();

const server = app.listen(port, () => {
  debug(`Server listening on http://localhost:${server.address().port}`);
})