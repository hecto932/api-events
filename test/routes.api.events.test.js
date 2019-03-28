const assert = require('assert');
const proxyquire = require('proxyquire');

const {
  eventsMock,
  EventServiceMock,
  getByUuid
} = require('../utils/mocks/events');

const testServer = require('../utils/testServer');

const eventUuid = '2b6a258b-c931-4a7b-8db4-c35361f0e9ce';

describe('routes - events', function () {
  const route = proxyquire('../routes/events', {
    '../services/events': EventServiceMock
  })
  
  const request = testServer(route);

  describe('GET /events', function () {
    it('should respond with status 200', function (done) {
      request.get('/events').expect(200, done);
    });

    it('should response with content type json', function (done) {
      request.get('/events').expect('Content-Type', /json/, done);
    })

    it('should respond with not error', function (done) {
      request.get('/events').end((err, res) => {
        assert.strictEqual(err, null);
        done();
      });
    });

    it('should respond with the list of events', function (done) {
      request.get('/events').end((err, res) => {
        assert.deepEqual(res.body, {
          error: false,
          pageNumber: null,
          numberEntries: eventsMock.length,
          results: eventsMock
        });
        done();
      })
    })

    it('should respond with one event by uuid', function (done) {
      request.get(`/events/${eventUuid}`).end((err, res) => {
        const eventResult = getByUuid(eventUuid);
        assert.deepEqual(res.body, {
          error: false,
          pageNumber: null,
          numberEntries: eventResult.length,
          results: eventResult
        })
        done();
      })
    })
  })
})