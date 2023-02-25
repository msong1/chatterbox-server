var handler = require('./request-handler');
var stubs = require('./spec/Stubs');
var { request } = require('http');

// var req = new stubs.request('/classes/messages', 'GET');
// var res = new stubs.response();
// debugger;
// handler.requestHandler(req, res);

// console.log(JSON.parse(res._data));

var stubMsg = {
  username: 'Jono',
  text: 'Do my bidding!'
};

// var req = new stubs.request('/classes/messages', 'GET', stubMsg);
// var res = new stubs.response();

// console.log(res)


//=========Live Server Simulation====
let logMessage;
request('http://127.0.0.1:3000/classes/messages', function(error, response, body) {
      logMessage = 1;
      console.log('TEST LIVE SERVER SIMULATION')
      cosole.log(error, response.statusCode, body)
      // done();
    })
console.log(logMessage);