# api-events

A simple API events.

## How to use

1. Clone the projects on local.
2. Into the folder make `npm install`.
3. There is inside the folder an `.env.example` file, make sure to use this to set `.env` to run the project correctly. 
4. To execute the project you have 3 commands:
    - `npm start`[production]: Run the app for production
    - `npm run dev`[development]: Run the app for develepment and logs.
    - `npm run debug`[production]: Run the all on production but with logs.
5. To run the test make `npm t`.
6. Enjoy.

## Use dockerization

1. `docker build -t <your username>/api-events .` Build the image.
2. `docker run -p 49160:3000 -d <your username>/api-events` run the image.
3. `docker exec -it <container id> /bin/bash` to enter on the container shell.
4. `docker ps` to see all the containers running.
5. Go to `http://localhost:49160/events`

## Endpoints

1. `GET /events`: Get all the events from the data.
    - `?format=<stringValue>`: Using this querystring parameter you can return the data on XML, JSON, or CSV.
    - `?limit=<intValue>`: Using this you can limit the response data.
    - `?sortByDate=<stringValue>`: With his you can sort the response by date in `DESC` or `ASC`.
    - `?page=<intValue>&limit=<intvalue>`: with this you can paginate the result.
2. `GET /events/:uuid`: return all the data from an specific event.
3. `GET /reporters`: return all reporters, the number of events reported and a link to fetch all events.
4. `GET /reporters/events`: return all the events from an specific reporter.
5. `GET /types should`: return all the event types, the number of events and a link to fetch all events.
6. `GET /types/events`: return all events from an specific type of event.

## Liscense

MIT
