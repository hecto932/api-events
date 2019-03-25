const debug = require('debug')('api-events:events-service');
const data = require('../data/events');
const { config } = require('../config');


class EventService {
  constructor () {
    this.data = data;
  }

  // GET ALL EVENTS
  get() {
    return this.data;
  }

  // GET AN EVENT BY UUID
  getByUuid(uuid) {
    return this.data.filter(e => e.uuid === uuid);
  }

  getEventsBy(key) {
    if (!key) {
      return this.data.reduce((bv, cv) => {
        if (!bv[cv[key]]) {
          bv[cv[key]] = { 
            count: 1, 
            link: `http://${config.host}:${config.port}/${key}}s?${key}}=${cv[key].replace(' ', '-')}`
          }
        } else {
          bv[cv.reporter].count += 1;
        }
        return bv;
      }, {});
    } else {
      return this.data.reduce((bv, cv) => {
        if (!bv[cv.reporter]) {
          bv[cv.reporter] = [cv];
        } else {
          bv[cv.reporter].push(cv)
        }
        return bv;
      }, {});
    }
  }

  // GET ALL THE NUMBER OF REPORTS FOR EACH REPORTER 
  getEventsReport () {
    return this.data.reduce((bv, cv) => {
      if (!bv[cv.reporter]) {
        bv[cv.reporter] = { 
          count: 1, 
          link: `http://${config.host}:${config.port}/reporters?reporter=${cv.reporter.replace(' ', '-')}`
        }
      } else {
        bv[cv.reporter].count += 1;
      }
      return bv;
    }, {});
  }

  // GET ALL EVENTS BY REPORTER
  getEventsByReporter(reporter) {
    debug(reporter);
    return this.data.filter(e => e.reporter === reporter);
  }

  // GET ALL THE EVENTS FOR EACH REPORTER
  getEventsByReporters() {
    return this.data.reduce((bv, cv) => {
      if (!bv[cv.reporter]) {
        bv[cv.reporter] = [cv];
      } else {
        bv[cv.reporter].push(cv)
      }
      return bv;
    }, {});
  }

  getEventsByType(type) {
    return this.data.filter(e => e.type === type);
  }

  getEventsType () {
    return this.data.reduce((bv, cv) => {
      if (!bv[cv.type]) {
        bv[cv.type] = { 
          count: 1, 
          link: `http://${config.host}:${config.port}/types?type=${cv.type.replace(' ', '-')}`
        }
      } else {
        bv[cv.type].count += 1;
      }
      return bv;
    }, {});
  }

  // GET ALL THE EVENTS FOR EACH REPORTER
  getEventsByType() {
    return this.data.reduce((bv, cv) => {
      if (!bv[cv.type]) {
        bv[cv.type] = [cv];
      } else {
        bv[cv.type].push(cv)
      }
      return bv;
    }, {});
  }
}

module.exports = EventService;