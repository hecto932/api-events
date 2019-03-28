# api-events

A simple API events.

## How to use

1. Clone the projects on local.
2. Into the folder make `npm install`.
3. To execute the project you have 3 commands:
  - `npm start`[production]: Run the app for production
  - `npm run dev`[development]: Run the app for develepment and logs.
  - `npm run debug`[production]: Run the all on production but with logs.
4. To run the test make `npm t`.
5. Enjoy.

## Endpoints

1. `GET /events`: Get all the events from the data.
  - `?format=<stringValue>`: Using this querystring parameter you can return the data on XML, JSON, or CSV.
  - `?limit=<intValue>`: Using this you can limit the response data.
  - `?sortByDate=<stringValue>`: With his you can sort the response by date in `DESC` or `ASC`.
2. `GET /events/:uuid`: return all the data from an specific event.
3. `GET /reporters`: return all reporters, the number of events reported and a link to fetch all events.
4. `GET /reporters/events`: return all the events from an specific reporter.
5. `GET /types should`: return all the event types, the number of events and a link to fetch all events.
6. `GET /types/events`: return all events from an specific type of event.

## Liscense

MIT
